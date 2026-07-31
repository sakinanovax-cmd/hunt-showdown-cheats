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
    "Hunt Showdown cheats — buy ESP, aimbot, wallhack & radar. Hunt Showdown hacks 2026 from $35/mo or $150 lifetime. Instant delivery & Cloud DMA.",
  buy:
    "Buy Hunt Showdown cheats — full ESP, aimbot, wallhack, radar & Cloud DMA. $35/month or $150 lifetime. Instant checkout & setup guide.",
  cheatsIndex:
    "Hunt Showdown hacks 2026 — ESP, aimbot, wallhack, radar, triggerbot & Cloud DMA. Every Hunt Showdown cheat feature with price from $35/mo.",
  blogIndex:
    "Hunt Showdown cheat guides — ESP setup, Cloud DMA, anti-cheat safety & 2026 comparisons. Free expert tips before you buy cheats.",
  notFound:
    "Page not found. Browse Hunt Showdown cheats — ESP, aimbot, wallhack, price pages & guides. Buy from $35/mo with instant delivery.",
  cheatsHub:
    "Every Hunt Showdown cheat feature — ESP, aimbot, wallhack, radar & Cloud DMA. Compare pages, see price, and buy from $35/mo.",
  compare:
    "Compare Hunt Showdown cheat providers — ESP, aimbot, Cloud DMA, price, updates & support side by side. Top picks from $35/mo.",
  faq:
    "Hunt Showdown cheats FAQ — price, ESP, aimbot, wallhack, Cloud DMA, stream-proof mode & ban risk. $35/mo or $150 lifetime. Answers before you buy.",
  video:
    "Watch Hunt Showdown cheats gameplay — ESP, aimbot, wallhack & radar demo video. Full suite from $35/mo or $150 lifetime. Buy after you watch.",
  status:
    "Hunt Showdown cheat status page — loader version, ESP, aimbot, wallhack & radar online after Crytek patches. Live feature updates for 2026.",
} as const;

/** Per-cheat landing page meta descriptions (unique, keyword-targeted) */
export const CHEAT_META_DESCRIPTIONS: Record<string, string> = {
  esp:
    "Hunt Showdown ESP — player boxes, health bars & skeleton wallhack through walls. Buy Hunt Showdown cheats from $35/mo with instant delivery.",
  aimbot:
    "Hunt Showdown aimbot — smooth aim assist, FOV control & bone targeting for bayou PvP. Buy Hunt Showdown cheats from $35/mo. Instant setup.",
  wallhack:
    "Hunt Showdown wallhack — see hunters through compounds & bayou terrain. Full ESP suite. Buy Hunt Showdown cheats from $35/mo.",
  radar:
    "Hunt Showdown radar cheat — full-map enemy blips, extract alerts & third-party tracking. Buy from $35/mo with instant delivery.",
  triggerbot:
    "Hunt Showdown triggerbot cheat — auto-fire when crosshair hits a hunter with configurable delay. Buy from $35/mo. Instant access.",
  "recoil-control":
    "Hunt Showdown recoil control cheat — zero weapon kick on Sparks, Winfield & lever-actions. Buy from $35/mo. Instant delivery.",
  "silent-aim":
    "Hunt Showdown silent aim cheat — hit targets without visible crosshair movement. Buy from $35/mo with instant loader download.",
  "stream-proof":
    "Hunt Showdown stream-proof cheat — hide ESP & overlays from OBS captures. Buy full suite from $35/mo. Instant delivery.",
  "cloud-dma":
    "Hunt Showdown Cloud DMA cheat — runs with HVCI, TPM & Secure Boot ON. Hardware-level cheat from $35/mo. Setup guide included.",
};

/** Blog article meta descriptions (unique, long-tail keyword targets) */
export const BLOG_META_DESCRIPTIONS: Record<string, string> = {
  "hunt-showdown-esp-guide":
    "Hunt Showdown ESP guide — player boxes, health bars, skeleton wallhack & boss ESP settings. Learn before you buy Hunt Showdown cheats.",
  "radar-and-map-awareness":
    "Hunt Showdown radar cheat guide — full-map blips, extract planning & third-party detection. Free tips for $35/mo radar cheats.",
  "cloud-dma-explained":
    "Cloud DMA Hunt Showdown cheats explained — HVCI, TPM & Secure Boot setup. Complete guide for hardware-level cheats from $35/mo.",
  "hunt-showdown-anti-cheat-analysis":
    "Hunt Showdown anti-cheat bypass guide — patch updates, ban risk & stream-proof tips. Stay safe with ESP & aimbot in 2026.",
  "hunt-showdown-beginners-guide":
    "Hunt Showdown cheats for beginners — ESP, radar, aimbot setup & extract habits. Start from $35/mo. Step-by-step bayou guide.",
  "best-hunt-showdown-cheat-comparison-2026":
    "Best Hunt Showdown cheats 2026 compared — ESP, aimbot, Cloud DMA, price & support. See top providers from $35/mo or $150 lifetime.",
  "hunt-showdown-wallhack-guide":
    "Hunt Showdown wallhack guide — through-wall vision, compounds & extracts. Pair with ESP starting at $35/mo.",
  "hunt-showdown-dma-vs-external":
    "Hunt Showdown DMA vs external cheats — HVCI, Secure Boot & Cloud DMA tradeoffs. Choose the right setup from $35/mo.",
  "hunt-showdown-cheat-patch-status":
    "Hunt Showdown cheat updates after Crytek patches — what to check, when to wait, and how loaders refresh after updates.",
  "hunt-showdown-aimbot-setup-guide":
    "Hunt Showdown aimbot setup — FOV, smoothness, bone priority & visibility checks for bayou PvP. Buy Hunt Showdown cheats from $35/mo.",
  "hunt-showdown-triggerbot-guide":
    "Hunt Showdown triggerbot guide — delay settings, shotgun holds & pairing with aimbot. Full Hunt Showdown cheats suite from $35/mo.",
  "hunt-showdown-stream-proof-guide":
    "Hunt Showdown stream-proof cheat — hide ESP from OBS & Discord capture. Stream safely with Hunt Showdown cheats from $35/mo.",
  "hunt-showdown-patch-july-2026":
    "Hunt Showdown patch July 2026 cheat status — ESP, aimbot, wallhack loader compatibility after Crytek update. Live status page.",
  "hunt-showdown-extract-radar-guide":
    "Hunt Showdown extract radar guide — third-party detection, boss banish timing & safe extracts. Hunt Showdown radar cheat tips.",
};

export function getCheatMetaDescription(slug: string, fallback: string): string {
  return CHEAT_META_DESCRIPTIONS[slug] ?? trimMetaDescription(fallback);
}

export function getBlogMetaDescription(slug: string, fallback: string): string {
  return BLOG_META_DESCRIPTIONS[slug] ?? trimMetaDescription(fallback);
}
