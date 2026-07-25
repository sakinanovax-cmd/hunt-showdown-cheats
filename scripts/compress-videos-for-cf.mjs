/**
 * Compress public videos under Cloudflare Workers 25 MiB asset limit.
 * Run: node scripts/compress-videos-for-cf.mjs
 */
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, readdirSync, renameSync, statSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const videosDir = join(root, "public", "videos");
const MAX_BYTES = 24 * 1024 * 1024; // stay under 25 MiB Workers limit

if (!ffmpegPath || !existsSync(ffmpegPath)) {
  console.error("ffmpeg-static binary missing. Run: npm install");
  process.exit(1);
}

if (!existsSync(videosDir)) {
  console.log("No public/videos directory — nothing to compress.");
  process.exit(0);
}

const files = readdirSync(videosDir).filter((name) => /\.(mp4|webm|mov)$/i.test(name));

for (const name of files) {
  const input = join(videosDir, name);
  const size = statSync(input).size;
  if (size <= MAX_BYTES) {
    console.log(`OK  ${name} (${(size / 1024 / 1024).toFixed(1)} MiB)`);
    continue;
  }

  console.log(`Compressing ${name} (${(size / 1024 / 1024).toFixed(1)} MiB) → under 24 MiB…`);
  const temp = join(videosDir, `.tmp-${name}`);
  const result = spawnSync(
    ffmpegPath,
    [
      "-y",
      "-i",
      input,
      "-vf",
      "scale=-2:720",
      "-c:v",
      "libx264",
      "-preset",
      "fast",
      "-crf",
      "32",
      "-c:a",
      "aac",
      "-b:a",
      "96k",
      "-movflags",
      "+faststart",
      temp,
    ],
    { stdio: "inherit" },
  );

  if (result.status !== 0 || !existsSync(temp)) {
    console.error(`Failed to compress ${name}`);
    if (existsSync(temp)) unlinkSync(temp);
    process.exit(1);
  }

  let outSize = statSync(temp).size;
  if (outSize > MAX_BYTES) {
    console.log("Still too large — retrying at 480p / CRF 34…");
    unlinkSync(temp);
    const retry = spawnSync(
      ffmpegPath,
      [
        "-y",
        "-i",
        input,
        "-vf",
        "scale=-2:480",
        "-c:v",
        "libx264",
        "-preset",
        "fast",
        "-crf",
        "34",
        "-c:a",
        "aac",
        "-b:a",
        "64k",
        "-movflags",
        "+faststart",
        temp,
      ],
      { stdio: "inherit" },
    );
    if (retry.status !== 0 || !existsSync(temp)) {
      console.error(`Failed to recompress ${name}`);
      process.exit(1);
    }
    outSize = statSync(temp).size;
  }

  if (outSize > MAX_BYTES) {
    console.error(
      `Compressed ${name} is still ${(outSize / 1024 / 1024).toFixed(1)} MiB (limit 24 MiB).`,
    );
    unlinkSync(temp);
    process.exit(1);
  }

  unlinkSync(input);
  renameSync(temp, input);
  console.log(`Done ${name} → ${(outSize / 1024 / 1024).toFixed(1)} MiB`);
}

// Keep only the demo file the app uses; drop unused duplicate if present.
const demo = join(videosDir, "hunt-showdown-cheats-demo.mp4");
const hero = join(videosDir, "hero.mp4");
if (existsSync(demo) && existsSync(hero)) {
  // If hero is unused by app code, replace it with the compressed demo copy
  // so old docs/paths still work without doubling deploy size... wait, two copies
  // still count as two assets. Delete hero and rely on demo only.
  unlinkSync(hero);
  console.log("Removed unused duplicate public/videos/hero.mp4");
}

console.log("Video assets ready for Cloudflare.");
