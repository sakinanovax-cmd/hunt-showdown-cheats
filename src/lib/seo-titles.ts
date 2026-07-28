/**
 * SERP-optimized title tags — primary keyword first, ~50 chars before layout "| Zadeyo" suffix.
 */

export const META_TITLES = {
  home: "Hunt Showdown Cheats — Buy ESP, Aimbot & Wallhack",
  buy: "Buy Hunt Showdown Cheats — $35/mo & $150 Lifetime",
  cheatsIndex: "Hunt Showdown Cheats List — ESP, Aimbot & Wallhack",
  blogIndex: "Hunt Showdown Cheat Guides — ESP & Setup",
  compare: "Compare Hunt Showdown Cheats — Providers & Features",
  faq: "Hunt Showdown Cheats FAQ — Price, ESP & Safety",
  video: "Hunt Showdown Cheats Video — ESP & Aimbot Demo",
  notFound: "Page Not Found",
} as const;

export const CHEAT_META_TITLES: Record<string, string> = {
  esp: "Hunt Showdown ESP Cheat — Buy & Price",
  aimbot: "Hunt Showdown Aimbot Cheat — Buy & Price",
  wallhack: "Hunt Showdown Wallhack Cheat — Buy & Price",
  radar: "Hunt Showdown Radar Cheat — Buy & Price",
  triggerbot: "Hunt Showdown Triggerbot — Buy & Price",
  "recoil-control": "Hunt Showdown Recoil Control — Buy & Price",
  "silent-aim": "Hunt Showdown Silent Aim — Buy & Price",
  "stream-proof": "Hunt Showdown Stream-Proof Cheat — Buy & Price",
  "cloud-dma": "Hunt Showdown Cloud DMA Cheat — Buy & Price",
};

export const BLOG_META_TITLES: Record<string, string> = {
  "hunt-showdown-esp-guide": "Hunt Showdown ESP Guide — See Hunters Through Walls",
  "radar-and-map-awareness": "Hunt Showdown Radar Cheat — Map Awareness Guide",
  "cloud-dma-explained": "Cloud DMA Hunt Showdown Cheats — Setup Guide",
  "hunt-showdown-anti-cheat-analysis": "Hunt Showdown Anti-Cheat & Cheat Safety",
  "hunt-showdown-beginners-guide": "Hunt Showdown Cheats for Beginners — Setup Guide",
  "best-hunt-showdown-cheat-comparison-2026": "Best Hunt Showdown Cheats 2026 — Full Guide",
  "hunt-showdown-wallhack-guide": "Hunt Showdown Wallhack Guide — Through Walls",
  "hunt-showdown-dma-vs-external": "Hunt Showdown DMA vs External Cheats",
  "hunt-showdown-cheat-patch-status": "Hunt Showdown Cheat Updates After Patches",
};

export function getCheatMetaTitle(slug: string, fallback: string): string {
  return CHEAT_META_TITLES[slug] ?? fallback;
}

export function getBlogMetaTitle(slug: string, fallback: string): string {
  return BLOG_META_TITLES[slug] ?? fallback;
}

/** Full default title for root layout (includes brand). */
export const DEFAULT_LAYOUT_TITLE = `${META_TITLES.home} | Zadeyo`;
