/**
 * Notify search engines that sitemap.xml changed.
 * Run after deploy: node scripts/ping-sitemap.mjs
 */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://huntcheats.com").replace(/\/+$/, "");
const sitemap = `${siteUrl}/sitemap.xml`;

const PING_URLS = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`,
];

const PRIORITY_URLS = [
  `${siteUrl}/`,
  `${siteUrl}/cheats/`,
  `${siteUrl}/buy/`,
  `${siteUrl}/compare/`,
  `${siteUrl}/faq/`,
  `${siteUrl}/blog/`,
  `${siteUrl}/cheats/esp/`,
  `${siteUrl}/cheats/aimbot/`,
  `${siteUrl}/cheats/wallhack/`,
  `${siteUrl}/blog/hunt-showdown-wallhack-guide/`,
  `${siteUrl}/blog/hunt-showdown-dma-vs-external/`,
  `${siteUrl}/blog/hunt-showdown-cheat-patch-status/`,
];

console.log(`Sitemap: ${sitemap}\n`);

for (const ping of PING_URLS) {
  try {
    const res = await fetch(ping);
    const host = new URL(ping).hostname;
    console.log(`${host}: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.error(`Ping failed: ${ping}`, err.message);
  }
}

console.log("\nRequest indexing in Google Search Console (URL Inspection → each URL → Request indexing):\n");
for (const url of PRIORITY_URLS) {
  console.log(`  ${url}`);
}
