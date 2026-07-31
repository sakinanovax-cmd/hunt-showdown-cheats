import { LAST_CONTENT_REVIEW } from "./site";

export type FeatureStatus = "Online" | "Updating" | "Maintenance";

export const LOADER_STATUS = {
  version: "4.2.1",
  gameBuild: "Crytek patch — July 2026",
  lastChecked: LAST_CONTENT_REVIEW,
  overall: "Operational" as const,
  note: "All core Hunt Showdown cheat features are online after the latest Crytek hotfix. Check this page after every game update before you queue.",
};

export const FEATURE_STATUS_ROWS: {
  feature: string;
  slug: string;
  status: FeatureStatus;
  detail: string;
}[] = [
  {
    feature: "Player ESP & wallhack",
    slug: "esp",
    status: "Online",
    detail: "Boxes, skeleton, health, boss ESP — compatible with current Hunt build.",
  },
  {
    feature: "Aimbot & silent aim",
    slug: "aimbot",
    status: "Online",
    detail: "Smooth aim, FOV, bone priority — test in quick play after each patch.",
  },
  {
    feature: "Radar overlay",
    slug: "radar",
    status: "Online",
    detail: "Full-map blips, extract markers — pair with ESP for banish control.",
  },
  {
    feature: "Triggerbot & recoil control",
    slug: "triggerbot",
    status: "Online",
    detail: "Combat suite online — adjust delay for natural shotgun holds.",
  },
  {
    feature: "Stream-proof mode",
    slug: "stream-proof",
    status: "Online",
    detail: "OBS / Discord capture safe — enable before going live.",
  },
  {
    feature: "Cloud DMA path",
    slug: "cloud-dma",
    status: "Online",
    detail: "HVCI, TPM, Secure Boot ON — follow setup guide after purchase.",
  },
];

export const STATUS_FAQ = [
  {
    question: "How often is Hunt Showdown cheat status updated?",
    answer:
      "This status page is reviewed after every Crytek patch and loader refresh. Bookmark it and check before ranked sessions when a hotfix drops.",
  },
  {
    question: "What should I do when a feature shows Updating?",
    answer:
      "Do not queue with an old loader. Wait for the status row to return Online, download the latest build from your order page, and relaunch through the setup guide.",
  },
  {
    question: "Where is the full patch history?",
    answer:
      "Read the Hunt Showdown cheat patch blog series for July 2026 notes and the main patch-status guide for step-by-step post-update checks.",
  },
];
