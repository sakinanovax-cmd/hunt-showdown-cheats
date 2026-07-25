import { PRICE_LIFETIME, PRICE_MONTHLY } from "./site";

export type ComparisonRow = {
  feature: string;
  zadeyo: string;
  typical: string;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Player ESP & wallhack", zadeyo: "Full suite", typical: "Often partial" },
  { feature: "Aimbot & triggerbot", zadeyo: "Included", typical: "Extra tier or missing" },
  { feature: "Radar overlay", zadeyo: "Included", typical: "Add-on or absent" },
  { feature: "Cloud DMA (HVCI ON)", zadeyo: "Supported", typical: "Rare or disabled" },
  { feature: "Stream-proof mode", zadeyo: "Included", typical: "Not always offered" },
  { feature: "Patch update speed", zadeyo: "Same-day loader refresh", typical: "Days to weeks" },
  { feature: "Setup support", zadeyo: "24/7 Discord + guides", typical: "Ticket-only or none" },
  { feature: "Monthly price", zadeyo: PRICE_MONTHLY, typical: "$40–$80+" },
  { feature: "Lifetime price", zadeyo: PRICE_LIFETIME, typical: "$200–$350+" },
  { feature: "Delivery", zadeyo: "Instant after checkout", typical: "Manual or delayed" },
];

export const COMPARISON_VERDICT = [
  "Zadeyo bundles ESP, aimbot, wallhack, radar, triggerbot, recoil control, silent aim, stream-proof mode, and Cloud DMA in one Hunt Showdown cheat loader.",
  "Competitive pricing at $35/month or $150 lifetime with instant delivery and on-site setup guides.",
  "Same-day compatibility updates after Crytek patches — critical when stale loaders break after hotfixes.",
];

export const COMPARISON_FAQ = [
  {
    question: "What are the best Hunt Showdown cheats in 2026?",
    answer:
      "The best Hunt Showdown cheats in 2026 combine full ESP, aimbot, wallhack, radar, Cloud DMA support, fast patch updates, and reliable support. Zadeyo offers all of these from $35/month or $150 lifetime with instant delivery.",
  },
  {
    question: "How much do Hunt Showdown cheats cost?",
    answer:
      "Zadeyo Hunt Showdown cheats cost $35 per month or $150 for lifetime access. That includes the full feature suite — ESP, aimbot, wallhack, radar, and Cloud DMA — with instant loader delivery after checkout.",
  },
  {
    question: "Why compare Hunt Showdown cheat providers before buying?",
    answer:
      "Providers differ on Cloud DMA support, update speed after patches, stream-proof options, and whether ESP and aimbot are bundled. Comparing upfront avoids paying for stale loaders or missing features.",
  },
];
