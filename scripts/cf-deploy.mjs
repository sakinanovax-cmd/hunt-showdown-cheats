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

function deployWithRetry(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    if (attempt > 1) {
      const waitSec = attempt * 15;
      console.log(`\nRetry ${attempt}/${maxAttempts} in ${waitSec}s (Cloudflare API timeout)...\n`);
      spawnSync("powershell", ["-Command", `Start-Sleep -Seconds ${waitSec}`], {
        cwd: root,
        stdio: "inherit",
        shell: true,
      });
    }
    const status = run("npm", ["exec", "wrangler", "--", "deploy"], { allowFail: true });
    if (status === 0) return;
  }
  console.error("\nDeploy failed after retries. Check internet/VPN/firewall, then run: npm run deploy\n");
  process.exit(1);
}

run("node", [join("scripts", "ensure-cf-asset-limits.mjs")]);
deployWithRetry();
run("node", [join("scripts", "ping-sitemap.mjs")]);
