import type {
  FAQItem,
  FeatureCard,
  HowItWorksStep,
  InfoSection,
  NavLink,
  PricingPlan,
} from "@/types";
import { BLOG_ARTICLES } from "./blog-articles";
import { HERO_H1_LINES, ZADEYO_CHECKOUT_URL } from "./site";

export { BLOG_ARTICLES };
export { HERO_H1_LINES };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Cheats", href: "/cheats/" },
  { label: "Buy", href: "/buy/" },
  { label: "Compare", href: "/compare/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Video", href: "/video/" },
  { label: "Blog", href: "/blog/" },
];

export const HERO_BADGES = ["Legit ESP", "Patch-ready", "External"];

export const HERO_SUBTITLE = "Aimbot, ESP & Wallhack";

export const HERO_FEATURES = ["Aimbot", "ESP", "Wallhack"] as const;

export const HERO_TRUST_ITEMS = [
  "Instant delivery",
  "Patch-ready",
  "Discord support",
] as const;

export const HERO_COMPAT_LINE = "Windows 10 & 11 · Steam · External ESP";

export const WHY_CHOOSE_BULLETS = [
  "ESP, aimbot, radar & wallhack suite",
  "Regular compatibility updates",
  "Instant loader delivery after checkout",
  "24/7 Discord installation support",
] as const;

export const WHY_CHOOSE_CARDS = [
  {
    eyebrow: "Bayou atmosphere",
    title: "Built for Hunt: Showdown's dark Louisiana maps",
    image: "/images/hunt/hunt-showdown-bayou.webp",
    alt: "Hunt Showdown bayou — hunters in Louisiana swamp at dusk",
  },
  {
    eyebrow: "Patch-ready updates",
    title: "Stay compatible after every Crytek update",
    image: "/images/hunt/roadmap-update.webp",
    alt: "Hunt Showdown patch update — cheat compatibility maintained",
  },
] as const;

export const HERO_GAME_NAME = HERO_H1_LINES;

export const HERO_PRODUCT_WORDS = [...HERO_GAME_NAME] as const;

export const HERO_FEATURE_LINE = HERO_FEATURES.join(" · ");

export const HERO_ORBIT_TAGS = ["ESP", "Aimbot", "Radar", "Wallhack"] as const;

export const COMPATIBILITY = [
  "Windows 10 & 11",
  "Steam",
  "HVCI ON",
  "Cloud DMA",
];

export const WHY_CHOOSE: InfoSection = {
  eyebrow: "Why choose us",
  heading: "Why choose Zadeyo Hunt Showdown cheats?",
  paragraphs: [
    "Take your Hunt: Showdown gameplay to the next level with ESP to see enemy locations through walls, aimbot for precise targeting, and radar for a complete map overview.",
    "Zadeyo focuses on clear feature documentation, patch-aligned loader updates, and straightforward Discord support — so you know exactly what you are buying before checkout.",
  ],
};

export const PRODUCT_INFO: InfoSection = {
  eyebrow: "Product details",
  heading: "Hunt: Showdown cheat — ESP, aimbot & wallhack",
  paragraphs: [
    "Zadeyo Hunt: Showdown cheat software includes ESP for player and loot visibility, aimbot with adjustable settings, triggerbot, customizable recoil control, and radar with real-time enemy tracking.",
    "Movement speed adjustments, silent aim, and stream-proof mode keep overlays invisible to OBS and common capture tools. Cloud DMA support works with HVCI, Core Isolation, TPM, and Secure Boot enabled.",
    "Pricing starts at $35/month for 31 days of access, or $150 lifetime for unlimited access, with instant loader delivery after checkout.",
  ],
};

export const THE_GAME: InfoSection = {
  eyebrow: "The Game",
  heading: "Hunt Showdown Cheats — Game Overview",
  paragraphs: [
    "Hunt: Showdown is a competitive first-person bounty hunting game set in the Louisiana bayou. Teams of hunters track monsters and rival players across dark, atmospheric maps filled with PvP danger and PvE threats.",
    "Success demands map knowledge, sound discipline, and clean gunplay. Extract with bounties alive and you keep your gear. Die to a rival team or the boss and you lose everything you brought in.",
    "Zadeyo's Hunt Showdown cheats give you the information edge — ESP wallhack through structures, radar cheat awareness, and precision aimbot tools — so you dominate every hunt.",
  ],
};

export const FEATURE_BLOCKS = [
  {
    eyebrow: "Features",
    heading: "Hunt Showdown cheat features for every hunt.",
    subheading: "ESP / Aimbot Options",
    description:
      "ESP and aimbot modes give you full vision through bayou structures, marking hunters, bosses, and loot so you can act before a fight starts. Adjustable aim settings, silent aim, and triggerbot for instant firing when your crosshair lands.",
    extra:
      "Recoil control keeps your shots on target during intense firefights. Movement speed adjustments and trigger modes are tailored for Hunt: Showdown's unique gunplay and TTK.",
  },
  {
    eyebrow: "World & Misc",
    heading: "Radar, stream-proof & cheat options",
    subheading: "Complete map awareness",
    description:
      "Radar with real-time enemy tracking shows player positions across the map. Loot ESP highlights valuable gear and supply points through walls and terrain.",
    extra:
      "Stream-proof mode keeps overlays invisible to capture software. Cloud DMA support means full functionality with modern Windows security enabled — HVCI, Core Isolation, TPM, and Secure Boot all ON.",
  },
];

export const TRUST_SECTIONS: InfoSection[] = [
  {
    eyebrow: "Trust",
    heading: "Quality builds & patch-aligned updates",
    paragraphs: [
      "Quality and security is our foundation. Private-quality software built to a higher standard than throwaway loaders, with continuous updates for Hunt: Showdown's live client.",
      "Thousands of players trust Zadeyo delivery and support. Questions or problems? 24/7 help is always available.",
      "Choose Zadeyo today. Instant delivery after checkout. Start hunting.",
    ],
  },
  {
    eyebrow: "Coverage",
    heading: "Full Hunt Showdown cheat feature suite",
    paragraphs: [
      "ESP for player and loot visibility, aimbot with adjustable aim settings, triggerbot, customizable recoil control, radar with real-time enemy tracking, movement speed adjustments, silent aim, and stream-proof mode.",
      "Cloud DMA option for hunters who need full functionality with Windows security features enabled. Every feature toggleable from a clean in-game menu.",
    ],
  },
  {
    eyebrow: "Support",
    heading: "24/7 cheat support when you need it",
    paragraphs: [
      "We supply not only a strong Hunt: Showdown cheat — we supply the support to match. Help is available whenever something goes wrong.",
      "Your Zadeyo order page keeps loader downloads and setup instructions in one place. Average response time under 15 minutes.",
    ],
  },
  {
    eyebrow: "Experience",
    heading: "Easy cheat loader interface",
    paragraphs: [
      "Clear toggles, readable ESP options, and settings that do not require a tutorial. Choose your plan, buy on Zadeyo, download the loader, and follow the short guide.",
      "The in-game menu follows the same idea: dial in aim smoothness, ESP colors, and radar range without fighting a complicated overlay.",
    ],
  },
];

export const ENEMY_FEATURES: FeatureCard[] = [
  { title: "Player Box ESP", description: "2D boxes around hunters through walls so you spot threats before they see you." },
  { title: "Hunter Snap Line", description: "Draw snap lines toward hunters so you always know the shortest path into a fight." },
  { title: "Distance ESP", description: "Exact range in meters to every hunter so you know when to push, hold, or extract." },
  { title: "Health ESP", description: "Live health bars on hunters so you prioritize weak targets and avoid tanky pushes." },
  { title: "Name Tags", description: "Show hunter names on the overlay for clear identification in crowded compound fights." },
  { title: "Skeleton ESP", description: "Full bone overlays so you track pose, movement, and aim angles through walls." },
];

export const WORLD_FEATURES: FeatureCard[] = [
  { title: "Item ESP", description: "Highlight gear and valuables through walls so you never miss high-value loot." },
  { title: "Extract ESP", description: "Mark extract points and routes so you always know your way out." },
  { title: "Boss ESP", description: "Reveal boss locations for faster bounty completion and safer rotations." },
  { title: "Traps ESP", description: "Expose bear traps and world hazards before they end your hunt." },
  { title: "Supply ESP", description: "See supply points through walls and path straight to ammo and tools." },
];

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    number: "01",
    title: "Purchase & Download",
    description: "Complete checkout on Zadeyo. Right after payment, your order page shows the loader download and setup guide.",
  },
  {
    number: "02",
    title: "Configure Cloud DMA",
    description: "Cloud DMA works with HVCI ON, Core Isolation ON, TPM ON, and Secure Boot ON. Step-by-step guide provided.",
  },
  {
    number: "03",
    title: "Load & Dominate",
    description: "Open the loader, launch Hunt: Showdown, and enable your features in-game. Extract with confidence.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What are Hunt Showdown cheats?",
    answer:
      "Hunt Showdown cheats are external tools that add ESP (see players through walls), aimbot, wallhack, radar, triggerbot, and recoil control to Hunt: Showdown. Zadeyo Hunt Showdown cheats include stream-proof mode and Cloud DMA for modern Windows security.",
  },
  {
    question: "Where can I buy Hunt Showdown cheats?",
    answer:
      "Buy Hunt Showdown cheats directly from Zadeyo — $35/month or $150 lifetime. Instant cheat delivery after checkout with ESP, aimbot, wallhack, radar, and full loader access.",
  },
  {
    question: "Are Hunt Showdown cheats safe to use?",
    answer:
      "All Hunt Showdown cheats carry ban risk. Zadeyo focuses on quality builds, regular Crytek patch updates, Cloud DMA compatibility, and stream-proof mode. No provider can guarantee zero bans — keep your loader updated and read our anti-cheat guide.",
  },
  {
    question: "How much do Hunt Showdown cheats cost?",
    answer: "Hunt Showdown cheats from Zadeyo cost $35/month or $150 lifetime. Both plans include the full ESP, aimbot, wallhack, radar, and Cloud DMA cheat suite with 24/7 support.",
  },
  {
    question: "What features do Hunt Showdown cheats include?",
    answer:
      "Zadeyo Hunt Showdown cheats include player ESP, loot ESP, aimbot, wallhack, triggerbot, radar, recoil control, silent aim, movement adjustments, stream-proof mode, and Cloud DMA option.",
  },
  {
    question: "Can I use Hunt Showdown cheats while streaming?",
    answer:
      "Yes. Zadeyo Hunt Showdown cheats include stream-proof mode so ESP and wallhack overlays stay invisible to OBS, Discord, and common capture software.",
  },
  {
    question: "Do Hunt Showdown cheats work with Cloud DMA?",
    answer:
      "Yes. Zadeyo Hunt Showdown cheats support Cloud DMA with HVCI ON, Core Isolation ON, TPM ON, and Secure Boot ON. See our Cloud DMA setup guide for step-by-step instructions.",
  },
  {
    question: "How often are Hunt Showdown cheat updates released?",
    answer:
      "Hunt Showdown cheat updates ship as quickly as possible after every Crytek patch. Active Zadeyo subscribers receive loader refreshes through their order page.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Monthly",
    duration: "31 days of access",
    price: "$35",
    popular: true,
    features: [
      "Full ESP & aimbot suite",
      "Radar & loot visibility",
      "Stream-proof mode",
      "Cloud DMA option",
      "24/7 Discord support",
    ],
  },
  {
    name: "Lifetime",
    duration: "Unlimited access",
    price: "$150",
    features: [
      "Everything in Monthly",
      "All future updates included",
      "Priority support queue",
      "One-time payment",
      "Best long-term value",
    ],
  },
];

export const SYSTEM_REQUIREMENTS = [
  "HVCI ON",
  "Core Isolation ON",
  "TPM ON",
  "Secure Boot ON",
  "Cloud DMA required for full functionality",
  "Windows 10 & 11 · Steam",
];

export const BUY_FEATURE_BENEFITS = [
  {
    feature: "Player ESP & wallhack",
    benefit: "See rival hunters and bosses through bayou structures before they engage you.",
  },
  {
    feature: "Aimbot & triggerbot",
    benefit: "Land shots faster in high-TTK firefights with adjustable smoothness settings.",
  },
  {
    feature: "Radar overlay",
    benefit: "Track enemy movement across the full map during boss banish and extract rotations.",
  },
  {
    feature: "Stream-proof mode",
    benefit: "Keep overlays invisible to OBS and common streaming capture software.",
  },
  {
    feature: "Cloud DMA option",
    benefit: "Run with HVCI, TPM, and Secure Boot enabled — no need to weaken Windows security.",
  },
];

export const BUY_DELIVERY_TERMS = [
  "Instant loader access on your Zadeyo order page after checkout",
  "Monthly plan: 31 days of access, renews unless cancelled on Zadeyo",
  "Lifetime plan: one-time payment, includes future Hunt Showdown cheat updates",
  "Cloud DMA setup guide included where required for full functionality",
  "24/7 support via Zadeyo — refund and billing terms on the official product page",
];

export const BUY_FEATURES = [
  "ESP for player and loot visibility",
  "Aimbot with adjustable aim settings",
  "Triggerbot for instant firing",
  "Customizable recoil control",
  "Radar with real-time enemy tracking",
  "Movement speed adjustments",
  "Silent aim option for stealth",
  "Stream-proof mode for safe gameplay",
  "Cloud DMA option",
  "Instant delivery",
  "24/7 support",
];

export const FOOTER_SETUP_TAGS = [
  { label: "Auto Updates", icon: "refresh" },
  { label: "Web order delivery", icon: "package" },
  { label: "Windows 10", icon: "monitor" },
  { label: "Windows 11", icon: "monitor" },
  { label: "Steam", icon: "steam" },
  { label: "Easy Anti-Cheat", icon: "shield" },
  { label: "External Cheat", icon: "cpu" },
  { label: "Cloud DMA", icon: "fingerprint" },
  { label: "24/7 Support", icon: "headphones" },
  { label: "Instant Access", icon: "zap" },
  { label: "Video Guide", icon: "play" },
] as const;

export const FOOTER_LINKS = {
  shop: [
    { label: "Cheat hub", href: "/cheats/" },
    { label: "ESP page", href: "/cheats/esp/" },
    { label: "Aimbot page", href: "/cheats/aimbot/" },
    { label: "Wallhack page", href: "/cheats/wallhack/" },
    { label: "Radar page", href: "/cheats/radar/" },
    { label: "Provider compare", href: "/compare/" },
    { label: "FAQ answers", href: "/faq/" },
    { label: "Gameplay clip", href: "/video/" },
    { label: "Price plans", href: "/buy/" },
  ],
  guides: [
    { label: "ESP setup", href: "/blog/hunt-showdown-esp-guide/" },
    { label: "Radar tips", href: "/blog/radar-and-map-awareness/" },
    { label: "DMA walkthrough", href: "/blog/cloud-dma-explained/" },
    { label: "Safety notes", href: "/blog/hunt-showdown-anti-cheat-analysis/" },
  ],
  trust: [
    { label: "Feature summary", href: "/#product-info" },
    { label: "DMA article", href: "/blog/cloud-dma-explained/" },
    { label: "Official store", href: ZADEYO_CHECKOUT_URL },
  ],
};
