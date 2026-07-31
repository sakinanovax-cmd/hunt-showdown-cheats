import { PRICE_LIFETIME, PRICE_MONTHLY } from "./site";

export type ComparisonRow = {
  feature: string;
  huntCheats: string;
  multiGameShop: string;
  forumSeller: string;
};

/** Named provider categories — clearer than a vague “typical” column for comparison SERPs. */
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Player ESP & wallhack",
    huntCheats: "Full suite included",
    multiGameShop: "Often partial / tier-gated",
    forumSeller: "Varies; docs rare",
  },
  {
    feature: "Aimbot & triggerbot",
    huntCheats: "Included",
    multiGameShop: "Extra tier or missing",
    forumSeller: "Unclear feature list",
  },
  {
    feature: "Radar overlay",
    huntCheats: "Included",
    multiGameShop: "Add-on or absent",
    forumSeller: "Rarely documented",
  },
  {
    feature: "Cloud DMA (HVCI ON)",
    huntCheats: "Supported",
    multiGameShop: "Rare or disabled",
    forumSeller: "Usually unsupported",
  },
  {
    feature: "Stream-proof mode",
    huntCheats: "Included",
    multiGameShop: "Not always offered",
    forumSeller: "Uncommon",
  },
  {
    feature: "Patch update speed",
    huntCheats: "Same-day loader refresh",
    multiGameShop: "Days to weeks",
    forumSeller: "Unknown / delayed",
  },
  {
    feature: "Setup support",
    huntCheats: "24/7 Discord + guides",
    multiGameShop: "Ticket-only",
    forumSeller: "DM-only or none",
  },
  {
    feature: "Monthly price",
    huntCheats: PRICE_MONTHLY,
    multiGameShop: "$40–$80+",
    forumSeller: "Opaque / crypto-only",
  },
  {
    feature: "Lifetime price",
    huntCheats: PRICE_LIFETIME,
    multiGameShop: "$200–$350+",
    forumSeller: "Rarely offered",
  },
  {
    feature: "Delivery",
    huntCheats: "Instant after checkout",
    multiGameShop: "Manual or delayed",
    forumSeller: "Manual handoff",
  },
  {
    feature: "Silent aim & recoil control",
    huntCheats: "Included",
    multiGameShop: "Rarely bundled",
    forumSeller: "Not documented",
  },
  {
    feature: "Triggerbot",
    huntCheats: "Included",
    multiGameShop: "Extra tier",
    forumSeller: "Varies",
  },
  {
    feature: "Lifetime updates",
    huntCheats: "Included ($150)",
    multiGameShop: "Extra fee",
    forumSeller: "Uncommon",
  },
  {
    feature: "Public status page",
    huntCheats: "Live feature status",
    multiGameShop: "Rare",
    forumSeller: "None",
  },
  {
    feature: "Setup guides per feature",
    huntCheats: "9 cheat pages + blog",
    multiGameShop: "Generic FAQ",
    forumSeller: "DM-only help",
  },
];

export const COMPARISON_VERDICT = [
  "Hunt Showdown cheats bundle ESP, aimbot, wallhack, radar, triggerbot, recoil control, silent aim, stream-proof mode, and Cloud DMA in one Hunt Showdown cheat loader.",
  "Competitive pricing at $35/month or $150 lifetime with instant delivery and on-site setup guides.",
  "Same-day compatibility updates after Crytek patches — critical when stale loaders break after hotfixes.",
  "Clearer than multi-game shops with gated tiers and forum sellers with undocumented builds.",
  "Public cheat status page with live ESP, aimbot, and loader version after every Crytek patch.",
];

export const COMPARISON_FAQ = [
  {
    question: "What are the best Hunt Showdown cheats in 2026?",
    answer:
      "The best Hunt Showdown cheats in 2026 combine full ESP, aimbot, wallhack, radar, Cloud DMA support, fast patch updates, and reliable support. Hunt Showdown cheats offer all of these from $35/month or $150 lifetime with instant delivery.",
  },
  {
    question: "How much do Hunt Showdown cheats cost?",
    answer:
      "Hunt Showdown cheats cost $35 per month or $150 for lifetime access. That includes the full feature suite — ESP, aimbot, wallhack, radar, and Cloud DMA — with instant loader delivery after checkout.",
  },
  {
    question: "Why compare Hunt Showdown cheat providers before buying?",
    answer:
      "Multi-game shops and forum sellers differ on Cloud DMA support, update speed after patches, stream-proof options, and whether ESP and aimbot are bundled. Comparing upfront avoids paying for stale loaders or missing features.",
  },
];
