/**
 * Cloudflare deploy entrypoint — strip oversized leftovers, then wrangler deploy.
 */
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function run(command, args, { allowFail = false } = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });
  if (result.status !== 0 && !allowFail) process.exit(result.status ?? 1);
  return result.status ?? 1;
}

function sleepSeconds(sec) {
  console.log(`Waiting ${sec}s...\n`);
  spawnSync("powershell", ["-Command", `Start-Sleep -Seconds ${sec}`], {
    cwd: root,
    stdio: "inherit",
    shell: true,
  });
}

function deployWithRetry(maxAttempts = 5) {
  const waitSchedule = [0, 30, 45, 60, 90];
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    if (attempt > 1) {
      const waitSec = waitSchedule[attempt - 1] ?? 120;
      console.log(`\nRetry ${attempt}/${maxAttempts} (Cloudflare API timeout)...`);
      sleepSeconds(waitSec);
    }
    const status = run("npm", ["exec", "wrangler", "--", "deploy"], { allowFail: true });
    if (status === 0) return;
  }
  console.error(
    "\nDeploy failed after retries (Cloudflare API timeout).\n" +
      "Try: turn off VPN, use mobile hotspot, or run again in a few minutes:\n" +
      "  npm exec wrangler -- deploy\n",
  );
  process.exit(1);
}

run("node", [join("scripts", "ensure-cf-asset-limits.mjs")]);
deployWithRetry();
run("node", [join("scripts", "ping-sitemap.mjs")]);
