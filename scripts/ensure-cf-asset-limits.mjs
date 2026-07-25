/**
 * Fail (or strip) any file in out/ over Cloudflare Workers 25 MiB limit.
 * Run after next build: node scripts/ensure-cf-asset-limits.mjs
 */
import { existsSync, readdirSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "out");
const MAX_BYTES = 24 * 1024 * 1024;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

if (!existsSync(outDir)) {
  console.error("out/ missing — run npm run build first");
  process.exit(1);
}

const oversized = walk(outDir).filter((file) => statSync(file).size > MAX_BYTES);

if (oversized.length === 0) {
  console.log("All out/ assets are under the Cloudflare 25 MiB limit.");
  process.exit(0);
}

for (const file of oversized) {
  const rel = relative(outDir, file).replace(/\\/g, "/");
  const mb = (statSync(file).size / 1024 / 1024).toFixed(1);
  console.warn(`Removing oversized asset (${mb} MiB): ${rel}`);
  unlinkSync(file);
}

// Ignore pattern for any residual large paths
writeFileSync(join(outDir, ".assetsignore"), ["**/*.mp4.bak", "videos/*.orig.mp4"].join("\n") + "\n");
console.log("Oversized files removed from out/ so wrangler deploy can succeed.");
