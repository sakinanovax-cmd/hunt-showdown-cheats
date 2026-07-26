import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const fontsDir = path.join(root, "public", "fonts");
const outCss = path.join(root, "src", "styles", "fonts.css");

const cssUrl =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap";

function get(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location, headers).then(resolve, reject);
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () =>
          resolve({ status: res.statusCode, body: Buffer.concat(chunks), headers: res.headers }),
        );
      })
      .on("error", reject);
  });
}

fs.mkdirSync(fontsDir, { recursive: true });
fs.mkdirSync(path.dirname(outCss), { recursive: true });

const { body } = await get(cssUrl, {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
});

let css = body.toString("utf8");
const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/g)].map((m) => m[1]);
const uniq = [...new Set(urls)];
console.log(`Found ${uniq.length} font files`);

const map = new Map();
let i = 0;
for (const url of uniq) {
  i += 1;
  const file = `font-${i}.woff2`;
  const dest = path.join(fontsDir, file);
  const res = await get(url);
  fs.writeFileSync(dest, res.body);
  map.set(url, file);
  console.log(`${file} ${Math.round(res.body.length / 1024)}KB`);
}

css = css.replace(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/g, (_, url) => {
  const file = map.get(url);
  return file ? `url(/fonts/${file})` : `url(${url})`;
});

// Prefer optional for body text speed; keep swap for display headings via family rules.
css = css.replace(/font-display:\s*swap/g, "font-display: optional");

fs.writeFileSync(outCss, css);
console.log("Wrote", outCss);
