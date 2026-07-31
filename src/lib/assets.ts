/** Hunt Showdown product media (checkout provider assets). */
export const ZADEYO_ASSETS = {
  /** Compact WebP mark for UI (navbar/footer). Keep PNG for favicon/schema. */
  logo: "/images/zadeyo/logo-mark.webp",
  logoPng: "/images/zadeyo/google-logo.png",
  gameCover: "/images/zadeyo/game-cover.jpg",
  screenshotBanner: "/images/zadeyo/screenshot-banner.png",
  icon: "/images/zadeyo/google-logo.png",
} as const;

/** Official Hunt: Showdown imagery provided for the site */
export const HUNT_IMAGES = {
  espCyan: "/images/hunt/gameplay-esp-cyan.webp",
  churchSniper: "/images/hunt/gameplay-church-sniper.png",
  huntersKeyart: "/images/hunt/hunters-keyart.png",
  roadmapUpdate: "/images/hunt/roadmap-update.webp",
  bayouAtmosphere: "/images/hunt/hunt-showdown-bayou.webp",
  espOverlay: "/images/hunt/esp-overlay.webp",
} as const;

/** Community reference links */
export const REFERENCE_MEDIA = {
  redditAntiCheatGuide:
    "https://www.reddit.com/r/HuntShowdown/comments/17le78r/guide_understanding_cheaters_and_anticheat/",
} as const;

/** Frames extracted from local Hunt Showdown gameplay video (hero/background use) */
export const GAMEPLAY_FRAMES = {
  espOutdoor: "/images/gameplay/gameplay-09.webp",
  espIndoor: "/images/gameplay/gameplay-10.jpg",
} as const;

export const LIVE_GAMEPLAY_GALLERY = [
  {
    src: HUNT_IMAGES.espCyan,
    alt: "Hunt Showdown cheat ESP demo — player outline during boss banish",
    label: "Cheat Demo",
  },
  {
    src: HUNT_IMAGES.churchSniper,
    alt: "Hunt Showdown cheat gameplay — scoped rifle PvP at church compound",
    label: "Cheat Demo",
  },
] as const;

export const HERO_SIDE_IMAGES = [
  {
    src: GAMEPLAY_FRAMES.espOutdoor,
    alt: "Hunt Showdown bayou hunt — ESP wallhack highlighting a hunter with shotgun",
    label: "Bayou hunt",
    caption: "Full suite in live matches",
    href: "/cheats/",
  },
] as const;

export const HERO_GAMEPLAY = {
  preview: HUNT_IMAGES.espOverlay,
  previewAlt: HUNT_IMAGES.bayouAtmosphere,
  background: HUNT_IMAGES.bayouAtmosphere,
} as const;

/** @deprecated Use LIVE_GAMEPLAY_GALLERY — kept for backwards compatibility */
export const SHOWCASE_GALLERY = LIVE_GAMEPLAY_GALLERY;

export const VIDEO_POSTER = HUNT_IMAGES.bayouAtmosphere;

export const GAMEPLAY_GALLERY = [
  {
    src: HUNT_IMAGES.bayouAtmosphere,
    alt: "Hunt Showdown bayou atmosphere — hunters in Louisiana swamps",
    label: "Bayou Hunt",
    caption: "Atmospheric Hunt: Showdown bayou gameplay",
    local: true,
  },
  {
    src: HUNT_IMAGES.espOverlay,
    alt: "Hunt Showdown ESP cheat overlay — green hunter box at 25m through grass",
    label: "ESP Overlay",
    caption: "Player ESP with distance tags and wallhack highlighting",
    local: true,
  },
  {
    src: HUNT_IMAGES.espCyan,
    alt: "Hunt Showdown cheat demo — cyan player outline during banish",
    label: "Cheat Demo",
    caption: "Hunt Showdown cheat overlay during boss banish phase",
    local: true,
  },
] as const;

export const HERO_VIDEO = "/videos/hunt-showdown-cheats-demo.mp4";
/** Full Hunt Showdown cheat gameplay demo (video page). */
export const HUNT_SHOWDOWN_DEMO_VIDEO = HERO_VIDEO;
/** Hero section full-bleed background image. */
export const HERO_BACKGROUND = "/images/hunt/hero-background.webp";
