/** Primary ranking targets — homepage + hub alignment. */
export const TARGET_KEYWORDS = [
  "Hunt Showdown cheats",
  "Hunt Showdown ESP",
  "Hunt Showdown aimbot",
  "Hunt Showdown wallhack",
  "Hunt Showdown hacks 2026",
  "buy Hunt Showdown cheats",
  "Hunt Showdown radar cheat",
  "Hunt Showdown anti-cheat bypass",
] as const;

export const BUY_PAGE_KEYWORDS = [
  "buy Hunt Showdown cheats",
  "Hunt Showdown cheats",
  "Hunt Showdown cheat price",
  "Hunt Showdown cheats $35",
] as const;

export const CHEATS_HUB_KEYWORDS = [
  "Hunt Showdown cheats",
  "Hunt Showdown hacks 2026",
  "Hunt Showdown ESP",
  "Hunt Showdown aimbot",
  "Hunt Showdown wallhack",
  "Hunt Showdown radar cheat",
  "buy Hunt Showdown cheats",
] as const;

export const CHEAT_SLUG_KEYWORDS: Record<string, readonly string[]> = {
  esp: ["Hunt Showdown ESP", "Hunt Showdown ESP cheat", "Hunt Showdown cheats", "buy Hunt Showdown cheats"],
  aimbot: ["Hunt Showdown aimbot", "Hunt Showdown aimbot cheat", "buy Hunt Showdown cheats", "Hunt Showdown cheats"],
  wallhack: ["Hunt Showdown wallhack", "Hunt Showdown wallhack cheat", "Hunt Showdown cheats", "buy Hunt Showdown cheats"],
  radar: ["Hunt Showdown radar cheat", "Hunt Showdown cheats", "buy Hunt Showdown cheats"],
  triggerbot: ["Hunt Showdown triggerbot", "Hunt Showdown cheats", "buy Hunt Showdown cheats"],
  "recoil-control": ["Hunt Showdown recoil control", "Hunt Showdown cheats", "buy Hunt Showdown cheats"],
  "silent-aim": ["Hunt Showdown silent aim", "Hunt Showdown aimbot", "buy Hunt Showdown cheats"],
  "stream-proof": ["Hunt Showdown stream proof cheat", "Hunt Showdown cheats", "buy Hunt Showdown cheats"],
  "cloud-dma": ["Cloud DMA Hunt Showdown cheat", "Hunt Showdown cheats", "buy Hunt Showdown cheats"],
};

export const BLOG_SLUG_KEYWORDS: Record<string, readonly string[]> = {
  "hunt-showdown-esp-guide": ["Hunt Showdown ESP", "Hunt Showdown cheats", "Hunt Showdown wallhack"],
  "hunt-showdown-wallhack-guide": ["Hunt Showdown wallhack", "Hunt Showdown ESP", "Hunt Showdown cheats"],
  "radar-and-map-awareness": ["Hunt Showdown radar cheat", "Hunt Showdown cheats"],
  "hunt-showdown-anti-cheat-analysis": [
    "Hunt Showdown anti-cheat bypass",
    "Hunt Showdown cheats",
    "Hunt Showdown ESP",
  ],
  "best-hunt-showdown-cheat-comparison-2026": [
    "Hunt Showdown hacks 2026",
    "Hunt Showdown cheats",
    "buy Hunt Showdown cheats",
  ],
  "hunt-showdown-aimbot-setup-guide": ["Hunt Showdown aimbot", "Hunt Showdown cheats", "buy Hunt Showdown cheats"],
  "hunt-showdown-triggerbot-guide": ["Hunt Showdown aimbot", "Hunt Showdown cheats"],
  "hunt-showdown-stream-proof-guide": ["Hunt Showdown cheats", "Hunt Showdown ESP"],
  "hunt-showdown-patch-july-2026": ["Hunt Showdown hacks 2026", "Hunt Showdown cheat status", "Hunt Showdown cheats"],
  "hunt-showdown-extract-radar-guide": ["Hunt Showdown radar cheat", "Hunt Showdown cheats"],
};

export function getCheatPageKeywords(slug: string, fallbackName: string): string[] {
  return [...(CHEAT_SLUG_KEYWORDS[slug] ?? ["Hunt Showdown cheats", "buy Hunt Showdown cheats", fallbackName])];
}

export function getBlogPageKeywords(slug: string): string[] | undefined {
  const kw = BLOG_SLUG_KEYWORDS[slug];
  return kw ? [...kw] : undefined;
}
