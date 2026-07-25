/**
 * Remove leftover / oversized files before Cloudflare wrangler deploy.
 * Workers reject any asset over 25 MiB (cached hero.mp4 from old builds is common).
 */
import {
  existsSync,
  readdirSync,
  rmSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "out");
const publicVideos = join(root, "public", "videos");
const MAX_BYTES = 24 * 1024 * 1024;
const FORCED_DELETE = ["videos/hero.mp4", "hero.mp4"];

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function removeIfExists(filePath, label) {
  if (!existsSync(filePath)) return;
  const mb = (statSync(filePath).size / 1024 / 1024).toFixed(1);
  unlinkSync(filePath);
  console.warn(`Removed ${label} (${mb} MiB)`);
}

// Always kill known legacy oversized paths in public + out (Cloudflare cache leftovers).
for (const rel of FORCED_DELETE) {
  removeIfExists(join(publicVideos, "hero.mp4"), "public/videos/hero.mp4");
  removeIfExists(join(outDir, rel), `out/${rel}`);
  removeIfExists(join(outDir, "videos", "hero.mp4"), "out/videos/hero.mp4");
}

if (!existsSync(outDir)) {
  console.log("out/ not built yet — cleaned public leftovers only.");
  process.exit(0);
}

for (const file of walk(outDir)) {
  const size = statSync(file).size;
  if (size <= MAX_BYTES) continue;
  const rel = relative(outDir, file).replace(/\\/g, "/");
  console.warn(`Removing oversized out asset (${(size / 1024 / 1024).toFixed(1)} MiB): ${rel}`);
  unlinkSync(file);
}

writeFileSync(
  join(outDir, ".assetsignore"),
  ["videos/hero.mp4", "**/*.orig.mp4", "**/*.mp4.bak"].join("\n") + "\n",
);

console.log("Cloudflare asset size check passed.");
