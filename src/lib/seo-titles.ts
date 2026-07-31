/**
 * SERP-optimized title tags — primary keyword first, ~50 chars.
 */

export const META_TITLES = {
  home: "Hunt Showdown Cheats 2026 — ESP, Aimbot & Wallhack from $35 | HuntCheats",
  buy: "Buy Hunt Showdown Cheats — $35/mo & $150 Lifetime",
  cheatsIndex: "Hunt Showdown Hacks 2026 — ESP, Aimbot & Cheats",
  blogIndex: "Hunt Showdown Cheat Guides — ESP & Setup",
  compare: "Compare Hunt Showdown Cheats — Providers & Features",
  faq: "Hunt Showdown Cheats FAQ — Price, ESP & Safety",
  video: "Hunt Showdown Cheats Video — ESP & Aimbot Demo",
  status: "Hunt Showdown Cheat Status — Loader & Feature Updates",
  notFound: "Page Not Found",
} as const;

export const CHEAT_META_TITLES: Record<string, string> = {
  esp: "Hunt Showdown ESP — Buy Cheat & Price",
  aimbot: "Hunt Showdown Aimbot — Buy Cheat & Price",
  wallhack: "Hunt Showdown Wallhack — Buy Cheat & Price",
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
  "hunt-showdown-anti-cheat-analysis": "Hunt Showdown Anti-Cheat Bypass — Safety Guide",
  "hunt-showdown-beginners-guide": "Hunt Showdown Cheats for Beginners — Setup Guide",
  "best-hunt-showdown-cheat-comparison-2026": "Best Hunt Showdown Cheats 2026 — Full Guide",
  "hunt-showdown-wallhack-guide": "Hunt Showdown Wallhack Guide — Through Walls",
  "hunt-showdown-dma-vs-external": "Hunt Showdown DMA vs External Cheats",
  "hunt-showdown-cheat-patch-status": "Hunt Showdown Cheat Updates After Patches",
  "hunt-showdown-aimbot-setup-guide": "Hunt Showdown Aimbot Setup — FOV & Smoothness",
  "hunt-showdown-triggerbot-guide": "Hunt Showdown Triggerbot Guide — Shotgun Holds",
  "hunt-showdown-stream-proof-guide": "Hunt Showdown Stream-Proof Cheat — OBS Safe",
  "hunt-showdown-patch-july-2026": "Hunt Showdown Patch July 2026 — Cheat Status",
  "hunt-showdown-extract-radar-guide": "Hunt Showdown Extract Radar — Third Party Tips",
};

export function getCheatMetaTitle(slug: string, fallback: string): string {
  return CHEAT_META_TITLES[slug] ?? fallback;
}

export function getBlogMetaTitle(slug: string, fallback: string): string {
  return BLOG_META_TITLES[slug] ?? fallback;
}

/** Full default title for root layout (includes brand). */
export const DEFAULT_LAYOUT_TITLE = META_TITLES.home;
