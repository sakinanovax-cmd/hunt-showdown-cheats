/**
 * Ping IndexNow (Bing/Yandex) + list GSC URLs after deploy.
 */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://huntcheats.com").replace(/\/+$/, "");
const host = new URL(siteUrl).host;
const INDEXNOW_KEY = "a8f3c2e1b9d0476580e1f2a3b4c5d6e7";

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
  `${siteUrl}/cheats/radar/`,
  `${siteUrl}/blog/hunt-showdown-esp-guide/`,
  `${siteUrl}/blog/hunt-showdown-wallhack-guide/`,
  `${siteUrl}/blog/hunt-showdown-dma-vs-external/`,
  `${siteUrl}/blog/hunt-showdown-cheat-patch-status/`,
  `${siteUrl}/blog/best-hunt-showdown-cheat-comparison-2026/`,
];

console.log(`Site: ${siteUrl}\n`);

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${siteUrl}/${INDEXNOW_KEY}.txt`,
      urlList: PRIORITY_URLS,
    }),
  });
  console.log(`IndexNow: ${res.status} ${res.statusText}`);
} catch (err) {
  console.error("IndexNow failed:", err.message);
}

console.log("\nGoogle: URL Inspection → Request indexing (10–20/day limit):\n");
for (const url of PRIORITY_URLS) {
  console.log(`  ${url}`);
}
