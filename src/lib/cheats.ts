import type { CheatProduct } from "@/types";
import { HUNT_IMAGES, ZADEYO_ASSETS } from "@/lib/assets";
import { PRICE_LIFETIME, PRICE_MONTHLY, ZADEYO_CHECKOUT_URL } from "@/lib/site";

export { ZADEYO_CHECKOUT_URL };

export const CHEAT_PRODUCTS: CheatProduct[] = [
  {
    slug: "esp",
    name: "Hunt Showdown ESP Cheat",
    shortName: "ESP",
    tagline: "See every hunter through bayou fog and compound walls.",
    eyebrow: "Player visibility",
    description:
      "Hunt Showdown ESP overlays player boxes, health bars, distance tags, skeleton wallhack, and name labels through structures — so you read fights before they start.",
    highlights: [
      "Player box ESP through walls and terrain",
      "Live health bars and distance in meters",
      "Skeleton overlays for pose and aim tracking",
      "Customizable colors for foggy bayou maps",
    ],
    perks: ["Included in full suite", "Stream-proof compatible", "Patch-ready updates"],
    image: HUNT_IMAGES.espOverlay,
    imageAlt: "Hunt Showdown ESP cheat — green player box through grass at 25m",
    accent: "#a855f7",
    buyHook: "Unlock full ESP — spot hunters before they spot you.",
    relatedSlugs: ["wallhack", "radar", "aimbot"],
  },
  {
    slug: "aimbot",
    name: "Hunt Showdown Aimbot",
    shortName: "Aimbot",
    tagline: "Precision targeting tuned for Hunt's high-TTK gunplay.",
    eyebrow: "Combat advantage",
    description:
      "Adjustable aimbot with smoothness curves, FOV radius, bone selection, and visibility checks — built to look human in tense bayou firefights.",
    highlights: [
      "Adjustable smoothness and FOV radius",
      "Bone selector for head or chest shots",
      "Visibility checks before locking on",
      "Works with lever-action and scoped rifles",
    ],
    perks: ["Pairs with triggerbot", "Silent aim option", "Recoil control built-in"],
    image: HUNT_IMAGES.churchSniper,
    imageAlt: "Hunt Showdown aimbot — scoped PvP at church compound",
    accent: "#c084fc",
    buyHook: "Land your shots — dominate every duel.",
    relatedSlugs: ["triggerbot", "silent-aim", "recoil-control"],
  },
  {
    slug: "wallhack",
    name: "Hunt Showdown Wallhack",
    shortName: "Wallhack",
    tagline: "Full vision through barns, crypts, and compound walls.",
    eyebrow: "Structural vision",
    description:
      "Wallhack mode extends ESP through every bayou structure — mark hunters, bosses, and loot behind walls so you never walk into an ambush blind.",
    highlights: [
      "See players through all map geometry",
      "Layer with skeleton and health ESP",
      "Snap lines toward threats",
      "Readable in torchlight and pitch black",
    ],
    perks: ["Core ESP feature", "Boss banish awareness", "Extract route planning"],
    image: HUNT_IMAGES.espCyan,
    imageAlt: "Hunt Showdown wallhack — cyan player outline through structures",
    accent: "#7c3aed",
    buyHook: "See through every wall — hunt with total intel.",
    relatedSlugs: ["esp", "radar", "stream-proof"],
  },
  {
    slug: "radar",
    name: "Hunt Showdown Radar Cheat",
    shortName: "Radar",
    tagline: "Full-map awareness during boss banish and extract rotations.",
    eyebrow: "Map overview",
    description:
      "Real-time radar overlay shows hunter positions across the entire map — track third parties during banish, rotate safely, and time your extract.",
    highlights: [
      "Real-time enemy tracking on full map",
      "Boss and extract markers",
      "Third-party detection during banish",
      "Adjustable radar range and opacity",
    ],
    perks: ["Banish phase essential", "Works with ESP suite", "Cloud DMA compatible"],
    image: HUNT_IMAGES.huntersKeyart,
    imageAlt: "Hunt Showdown radar cheat — map awareness during hunt",
    accent: "#9333ea",
    buyHook: "Own the map — never get third-partied again.",
    relatedSlugs: ["esp", "wallhack", "cloud-dma"],
  },
  {
    slug: "triggerbot",
    name: "Hunt Showdown Triggerbot",
    shortName: "Triggerbot",
    tagline: "Instant firing the moment your crosshair finds a hunter.",
    eyebrow: "Reaction speed",
    description:
      "Triggerbot fires automatically when your reticle crosses an enemy — perfect for shotgun pushes, scoped holds, and close-quarters compound fights.",
    highlights: [
      "Instant shot on crosshair contact",
      "Configurable delay for natural timing",
      "Pairs with aimbot smoothness settings",
      "Toggle per weapon class",
    ],
    perks: ["Aimbot companion", "High-TTK optimized", "Legit-style timing options"],
    image: ZADEYO_ASSETS.screenshotBanner,
    imageAlt: "Hunt Showdown triggerbot — instant fire on target acquisition",
    accent: "#8b5cf6",
    buyHook: "Fire first — win every peek fight.",
    relatedSlugs: ["aimbot", "recoil-control", "silent-aim"],
  },
  {
    slug: "recoil-control",
    name: "Hunt Showdown Recoil Control",
    shortName: "Recoil Control",
    tagline: "Keep every shot on target during intense firefights.",
    eyebrow: "Weapon stability",
    description:
      "Customizable recoil compensation for every Hunt: Showdown weapon profile — maintain accuracy on lever-actions, shotguns, and scoped rifles without spray.",
    highlights: [
      "Per-weapon recoil profiles",
      "Adjustable compensation strength",
      "Works in ADS and hip-fire",
      "Stack with aimbot for laser accuracy",
    ],
    perks: ["All weapon classes", "Silent aim compatible", "Stream-proof safe"],
    image: HUNT_IMAGES.churchSniper,
    imageAlt: "Hunt Showdown recoil control — steady scoped shots",
    accent: "#a78bfa",
    buyHook: "Zero recoil — every bullet counts in the bayou.",
    relatedSlugs: ["aimbot", "triggerbot", "silent-aim"],
  },
  {
    slug: "silent-aim",
    name: "Hunt Showdown Silent Aim",
    shortName: "Silent Aim",
    tagline: "Hit targets without moving your visible crosshair.",
    eyebrow: "Stealth combat",
    description:
      "Silent aim redirects shots toward targets while your reticle stays still — ideal for long-range holds and staying under the radar in competitive lobbies.",
    highlights: [
      "Hits land without crosshair movement",
      "Configurable FOV and target priority",
      "Visibility and line-of-sight checks",
      "Pairs with recoil control",
    ],
    perks: ["Stealth-focused", "Long-range optimized", "Aimbot alternative mode"],
    image: HUNT_IMAGES.bayouAtmosphere,
    imageAlt: "Hunt Showdown silent aim — stealth targeting in bayou",
    accent: "#d8b4fe",
    buyHook: "Strike silently — they never see it coming.",
    relatedSlugs: ["aimbot", "recoil-control", "stream-proof"],
  },
  {
    slug: "stream-proof",
    name: "Hunt Showdown Stream-Proof Mode",
    shortName: "Stream-Proof",
    tagline: "Overlays invisible to OBS, Discord, and capture software.",
    eyebrow: "Streaming safe",
    description:
      "Stream-proof mode keeps ESP, wallhack, and radar overlays hidden from OBS, Discord stream, and common recording tools — cheat on stream without viewers seeing overlays.",
    highlights: [
      "Invisible to OBS and Discord capture",
      "ESP and radar hidden from recordings",
      "Toggle before going live",
      "Works with full cheat suite",
    ],
    perks: ["Content creator friendly", "All features compatible", "One-click toggle"],
    image: ZADEYO_ASSETS.gameCover,
    imageAlt: "Hunt Showdown stream-proof mode — safe streaming overlay",
    accent: "#6d28d9",
    buyHook: "Stream safely — overlays stay off-camera.",
    relatedSlugs: ["esp", "wallhack", "cloud-dma"],
  },
  {
    slug: "cloud-dma",
    name: "Hunt Showdown Cloud DMA",
    shortName: "Cloud DMA",
    tagline: "Full cheat functionality with Windows security ON.",
    eyebrow: "Hardware delivery",
    description:
      "Cloud DMA runs Hunt Showdown cheats with HVCI, Core Isolation, TPM, and Secure Boot enabled — no need to weaken your Windows security stack.",
    highlights: [
      "HVCI ON · Core Isolation ON",
      "TPM ON · Secure Boot ON",
      "Full ESP, aimbot, and radar suite",
      "Step-by-step setup guide included",
    ],
    perks: ["Modern Windows compatible", "No security compromises", "Priority setup support"],
    image: HUNT_IMAGES.roadmapUpdate,
    imageAlt: "Hunt Showdown Cloud DMA — secure cheat delivery setup",
    accent: "#5b21b6",
    buyHook: "Run secure — full power with security ON.",
    relatedSlugs: ["esp", "radar", "stream-proof"],
  },
];

export const CHEAT_PRICING = {
  monthly: {
    label: "Monthly",
    price: PRICE_MONTHLY,
    duration: "31 days · full suite",
    cta: "Get Monthly Access",
  },
  lifetime: {
    label: "Lifetime",
    price: PRICE_LIFETIME,
    duration: "One payment · all updates",
    cta: "Go Lifetime",
  },
} as const;

export function getAllCheatSlugs(): string[] {
  return CHEAT_PRODUCTS.map((c) => c.slug);
}

export function getCheatBySlug(slug: string): CheatProduct | undefined {
  return CHEAT_PRODUCTS.find((c) => c.slug === slug);
}

export function getRelatedCheats(slug: string): CheatProduct[] {
  const cheat = getCheatBySlug(slug);
  if (!cheat) return [];
  return cheat.relatedSlugs
    .map((s) => getCheatBySlug(s))
    .filter((c): c is CheatProduct => Boolean(c));
}
