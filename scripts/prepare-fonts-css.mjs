import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "src", "styles", "fonts.css");
const dest = path.join(root, "public", "fonts.css");

const base = fs.readFileSync(src, "utf8");
const ready = `
html.fonts-ready {
  --font-sans: "DM Sans", Arial, Helvetica, sans-serif;
  --font-display: "Barlow Condensed", "Arial Narrow", Arial, sans-serif;
}
html.fonts-ready body {
  font-family: var(--font-sans);
}
html.fonts-ready .ref-hero-title,
html.fonts-ready .font-display,
html.fonts-ready .display-heading {
  font-family: var(--font-display), Arial, sans-serif;
}
`;

fs.writeFileSync(dest, `${base}\n${ready}`);
console.log("Prepared public/fonts.css");
