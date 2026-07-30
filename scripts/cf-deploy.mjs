/**
 * Cloudflare deploy entrypoint — strip oversized leftovers, then wrangler deploy.
 */
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

run("node", [join("scripts", "ensure-cf-asset-limits.mjs")]);
// Use project-local wrangler so Windows optional deps (workerd-windows-64) install correctly.
run("npm", ["exec", "wrangler", "--", "deploy"]);
run("node", [join("scripts", "ping-sitemap.mjs")]);
