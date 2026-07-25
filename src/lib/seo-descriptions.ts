/**
 * SERP-optimized meta descriptions — keyword front-loaded, unique per URL, ≤160 chars.
 * Targets high-intent queries: "Hunt Showdown cheats", feature + cheat, buy/price intent.
 */

export function trimMetaDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > 120 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trim()}…`;
}

/** Site-wide and index page meta descriptions */
export const META_DESCRIPTIONS = {
  home:
    "Hunt Showdown cheats — buy ESP, aimbot, wallhack & radar from Zadeyo. $35/mo or $150 lifetime, instant delivery, Cloud DMA & 24/7 support.",
  buy:
    "Buy Hunt Showdown cheats today — full ESP, aimbot, wallhack, radar & Cloud DMA. $35/month or $150 lifetime. Instant Zadeyo checkout & setup guide.",
  cheatsIndex:
    "Best Hunt Showdown cheats 2026 — ESP, aimbot, wallhack, radar, triggerbot & Cloud DMA. Every feature with price & buy page from $35/mo.",
  blogIndex:
    "Hunt Showdown cheat guides — ESP setup, Cloud DMA, anti-cheat safety & 2026 comparisons. Free expert tips from Zadeyo before you buy.",
  notFound:
    "Page not found. Browse Hunt Showdown cheats — ESP, aimbot, wallhack, price pages & guides. Buy from $35/mo on Zadeyo.",
  cheatsHub:
    "Every Hunt Showdown cheat feature — ESP, aimbot, wallhack, radar & Cloud DMA. Compare pages, see price, and buy from $35/mo on Zadeyo.",
  compare:
    "Compare Hunt Showdown cheat providers — ESP, aimbot, Cloud DMA, price, updates & support side by side. See why hunters pick Zadeyo from $35/mo.",
  faq:
    "Hunt Showdown cheats FAQ — price, ESP, aimbot, wallhack, Cloud DMA, stream-proof mode & ban risk. $35/mo or $150 lifetime. Answers before you buy on Zadeyo.",
  video:
    "Watch Hunt Showdown cheats gameplay — ESP, aimbot, wallhack & radar demo video. Full Zadeyo suite from $35/mo or $150 lifetime. Buy after you watch.",
} as const;

/** Per-cheat landing page meta descriptions (unique, keyword-targeted) */
export const CHEAT_META_DESCRIPTIONS: Record<string, string> = {
  esp:
    "Hunt Showdown ESP cheat — player boxes, health bars & skeleton wallhack through walls. Buy from $35/mo on Zadeyo with instant loader delivery.",
  aimbot:
    "Hunt Showdown aimbot cheat — smooth aim assist, FOV control & bone targeting for bayou PvP. Buy from $35/mo on Zadeyo. Instant setup.",
  wallhack:
    "Hunt Showdown wallhack cheat — see hunters through compounds & bayou terrain. Full ESP suite from $35/mo on Zadeyo. Buy & download now.",
  radar:
    "Hunt Showdown radar cheat — full-map enemy blips, extract alerts & third-party tracking. Buy from $35/mo on Zadeyo with instant delivery.",
  triggerbot:
    "Hunt Showdown triggerbot cheat — auto-fire when crosshair hits a hunter with configurable delay. Buy from $35/mo on Zadeyo. Instant access.",
  "recoil-control":
    "Hunt Showdown recoil control cheat — zero weapon kick on Sparks, Winfield & lever-actions. Buy from $35/mo on Zadeyo. Instant delivery.",
  "silent-aim":
    "Hunt Showdown silent aim cheat — hit targets without visible crosshair movement. Buy from $35/mo on Zadeyo with instant loader download.",
  "stream-proof":
    "Hunt Showdown stream-proof cheat — hide ESP & overlays from OBS captures. Buy full suite from $35/mo on Zadeyo. Instant delivery.",
  "cloud-dma":
    "Hunt Showdown Cloud DMA cheat — runs with HVCI, TPM & Secure Boot ON. Hardware-level cheat from $35/mo on Zadeyo. Setup guide included.",
};

/** Blog article meta descriptions (unique, long-tail keyword targets) */
export const BLOG_META_DESCRIPTIONS: Record<string, string> = {
  "hunt-showdown-esp-guide":
    "Hunt Showdown ESP guide — player boxes, health bars, skeleton wallhack & boss ESP settings. Learn before you buy Zadeyo cheats from $35/mo.",
  "radar-and-map-awareness":
    "Hunt Showdown radar cheat guide — full-map blips, extract planning & third-party detection. Free Zadeyo tips for $35/mo radar cheats.",
  "cloud-dma-explained":
    "Cloud DMA Hunt Showdown cheats explained — HVCI, TPM & Secure Boot setup. Complete Zadeyo guide for hardware-level cheats from $35/mo.",
  "hunt-showdown-anti-cheat-analysis":
    "Hunt Showdown anti-cheat guide — patch updates, ban risk & stream-proof tips for Zadeyo cheats. Stay safe with ESP & aimbot in 2026.",
  "hunt-showdown-beginners-guide":
    "Hunt Showdown cheats for beginners — ESP, radar, aimbot setup & extract habits. Start with Zadeyo from $35/mo. Step-by-step bayou guide.",
  "best-hunt-showdown-cheat-comparison-2026":
    "Best Hunt Showdown cheats 2026 compared — ESP, aimbot, Cloud DMA, price & support. See why Zadeyo ranks #1 from $35/mo or $150 lifetime.",
};

export function getCheatMetaDescription(slug: string, fallback: string): string {
  return CHEAT_META_DESCRIPTIONS[slug] ?? trimMetaDescription(fallback);
}

export function getBlogMetaDescription(slug: string, fallback: string): string {
  return BLOG_META_DESCRIPTIONS[slug] ?? trimMetaDescription(fallback);
}
