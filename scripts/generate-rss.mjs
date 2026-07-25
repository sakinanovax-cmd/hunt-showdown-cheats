/**
 * Generates public/rss.xml before static export build.
 * Run: node scripts/generate-rss.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }
  // Cloudflare Pages provides this automatically during builds.
  if (process.env.CF_PAGES_URL) {
    return process.env.CF_PAGES_URL.replace(/\/+$/, "");
  }
  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    if (owner && repo) return `https://${owner}.github.io/${repo}`;
  }
  if (process.env.GITHUB_PAGES === "true") {
    const repo = process.env.GITHUB_REPO_NAME ?? "hunt-showdown-cheats-site";
    const owner = process.env.GITHUB_ACTOR ?? "github";
    return `https://${owner}.github.io/${repo}`;
  }
  return "http://localhost:8080";
}

const siteUrl = resolveSiteUrl();

if (siteUrl.includes("localhost")) {
  console.warn(
    "WARN: Generating RSS with localhost — set NEXT_PUBLIC_SITE_URL for production URLs.",
  );
} else {
  console.log(`RSS site URL: ${siteUrl}`);
}

const blogModulePath = join(root, "src/lib/blog-articles.ts");
const blogSource = readFileSync(blogModulePath, "utf8");

const articleBlocks = [
  ...blogSource.matchAll(
    /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?excerpt:\s*\n\s*"([^"]+)"[\s\S]*?publishedAt:\s*"([^"]+)"/g,
  ),
];

const cheatModulePath = join(root, "src/lib/cheats.ts");
const cheatSource = readFileSync(cheatModulePath, "utf8");
const cheatBlocks = [
  ...cheatSource.matchAll(
    /slug:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?tagline:\s*"([^"]+)"/g,
  ),
];

const blogItems = articleBlocks
  .map(([, slug, title, excerpt, publishedAt]) => {
    const link = `${siteUrl}/blog/${slug}/`;
    return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${excerpt}]]></description>
    </item>`;
  })
  .join("");

const cheatItems = cheatBlocks
  .map(([, slug, name, tagline]) => {
    const link = `${siteUrl}/cheats/${slug}/`;
    return `
    <item>
      <title><![CDATA[${name} — Buy & Price]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description><![CDATA[${tagline}]]></description>
    </item>`;
  })
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Zadeyo — Hunt Showdown Cheats</title>
    <link>${siteUrl}/</link>
    <description>Buy Hunt Showdown cheats — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Guides, cheat pages & Zadeyo buy links.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${blogItems}
    ${cheatItems}
  </channel>
</rss>`;

writeFileSync(join(root, "public/rss.xml"), xml.trim() + "\n", "utf8");
console.log(
  `Generated public/rss.xml — ${articleBlocks.length} articles, ${cheatBlocks.length} cheat pages`,
);
