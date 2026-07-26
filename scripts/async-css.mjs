/**
 * Convert Next.js render-blocking CSS <link> tags to async preload+onload.
 * Runs after `next build` on the static `out/` HTML.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

if (!fs.existsSync(outDir)) {
  console.log("async-css: out/ missing, skip");
  process.exit(0);
}

let changed = 0;
for (const file of walk(outDir)) {
  let html = fs.readFileSync(file, "utf8");
  const next = html.replace(
    /<link[^>]*rel=["']stylesheet["'][^>]*href=["'](\/_next\/static\/[^"']+\.css)["'][^>]*>/gi,
    (_m, href) =>
      `<link rel="preload" href="${href}" as="style"><link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${href}"></noscript>`,
  );
  if (next !== html) {
    fs.writeFileSync(file, next);
    changed += 1;
  }
}

console.log(`async-css: updated ${changed} HTML files`);
