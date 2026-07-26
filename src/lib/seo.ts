import { BLOG_ARTICLES, FAQ_ITEMS, PRICING_PLANS } from "./constants";
import { CHEAT_PRODUCTS } from "./cheats";
import { GAMEPLAY_FRAMES, HERO_VIDEO, VIDEO_POSTER } from "./assets";
import {
  BLOG_META_DESCRIPTIONS,
  CHEAT_META_DESCRIPTIONS,
  META_DESCRIPTIONS,
} from "./seo-descriptions";
import {
  SITE_NAME,
  SITE_PRIMARY_KEYWORD,
  SITE_PRODUCT_NAME,
  SITE_SEO_DESCRIPTION,
  ZADEYO_CHECKOUT_URL,
  getAbsoluteAssetUrl,
  getCanonicalUrl,
} from "./site";

export const SEO_KEYWORDS = [
  "Hunt Showdown cheats",
  "Hunt Showdown cheat",
  "best Hunt Showdown cheats",
  "buy Hunt Showdown cheats",
  "Hunt Showdown cheats 2026",
  "Hunt Showdown ESP cheat",
  "Hunt Showdown aimbot cheat",
  "Hunt Showdown wallhack cheat",
  "Hunt Showdown radar cheat",
  "Hunt Showdown hacks",
  "Hunt Showdown cheat download",
  "Hunt Showdown triggerbot",
  "Cloud DMA Hunt Showdown cheat",
  "stream proof Hunt Showdown cheat",
  "Zadeyo Hunt Showdown cheats",
  "Hunt: Showdown cheats",
];

const OFFER_VALID_UNTIL = "2027-12-31";

function stripContext(schema: Record<string, unknown>): Record<string, unknown> {
  const { "@context": _removed, ...rest } = schema;
  return rest;
}

/** Wrap multiple schemas in a single @graph node for validators and crawlers. */
export function toJsonLdGraph(schemas: Record<string, unknown>[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map(stripContext),
  };
}

export function getOrganizationSchema() {
  const logoUrl = getAbsoluteAssetUrl("/images/zadeyo/google-logo.png");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${SITE_PRIMARY_KEYWORD} — ${SITE_NAME}`,
    url: getCanonicalUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      contentUrl: logoUrl,
      width: 512,
      height: 512,
      caption: `${SITE_NAME} logo`,
    },
    image: logoUrl,
    sameAs: [ZADEYO_CHECKOUT_URL, "https://zadeyo.com/"],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_PRIMARY_KEYWORD} — ${SITE_NAME}`,
    alternateName: ["Zadeyo Hunt Showdown Cheats", "Hunt Showdown Cheats Zadeyo"],
    url: getCanonicalUrl("/"),
    description: SITE_SEO_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: SITE_NAME, url: getCanonicalUrl("/") },
  };
}

export function getWebPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: getCanonicalUrl(path),
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", url: getCanonicalUrl("/"), name: SITE_PRODUCT_NAME },
    about: { "@type": "Product", name: SITE_PRODUCT_NAME },
  };
}

function buildOffer(plan: (typeof PRICING_PLANS)[number]) {
  return {
    "@type": "Offer",
    name: `${SITE_PRODUCT_NAME} — ${plan.name}`,
    price: plan.price.replace("$", ""),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: ZADEYO_CHECKOUT_URL,
    description: plan.duration,
    priceValidUntil: OFFER_VALID_UNTIL,
    seller: { "@type": "Organization", name: SITE_NAME },
  };
}

export function getProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${getCanonicalUrl("/buy/")}#product`,
    name: SITE_PRODUCT_NAME,
    description:
      "Hunt Showdown cheats with ESP for player and loot visibility, aimbot, triggerbot, radar, recoil control, silent aim, stream-proof mode, and Cloud DMA option.",
    category: "Software > Game Utilities",
    brand: { "@type": "Brand", name: SITE_NAME },
    url: getCanonicalUrl("/buy/"),
    image: [
      getAbsoluteAssetUrl(VIDEO_POSTER),
      getAbsoluteAssetUrl(GAMEPLAY_FRAMES.espOutdoor),
      getAbsoluteAssetUrl("/images/hunt/esp-overlay.png"),
    ],
    offers: PRICING_PLANS.map(buildOffer),
  };
}

export function getCheatProductSchema(cheat: {
  name: string;
  description: string;
  slug: string;
  image: string;
  shortName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: cheat.name,
    description: CHEAT_META_DESCRIPTIONS[cheat.slug] ?? cheat.description,
    url: getCanonicalUrl(`/cheats/${cheat.slug}/`),
    image: getAbsoluteAssetUrl(cheat.image),
    category: "Software > Game Utilities",
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: PRICING_PLANS.map((plan) => ({
      ...buildOffer(plan),
      name: `${cheat.shortName} — ${plan.name}`,
    })),
  };
}

export function getCheatsItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hunt Showdown Cheat Features",
    description: META_DESCRIPTIONS.cheatsIndex,
    numberOfItems: CHEAT_PRODUCTS.length,
    itemListElement: CHEAT_PRODUCTS.map((cheat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cheat.name,
      url: getCanonicalUrl(`/cheats/${cheat.slug}/`),
    })),
  };
}

export function getFAQSchema(items = FAQ_ITEMS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  excerpt: string;
  publishedAt: string;
  slug: string;
  image: string;
  updatedAt?: string;
}) {
  const dateModified = article.updatedAt ?? article.publishedAt;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: BLOG_META_DESCRIPTIONS[article.slug] ?? article.excerpt,
    datePublished: article.publishedAt,
    dateModified,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getCanonicalUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteAssetUrl("/images/zadeyo/google-logo.png"),
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": getCanonicalUrl(`/blog/${article.slug}/`) },
    image: getAbsoluteAssetUrl(article.image),
  };
}

export function getBlogListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hunt Showdown Cheats Blog",
    description: META_DESCRIPTIONS.blogIndex,
    itemListElement: BLOG_ARTICLES.map((article, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: article.title,
      url: getCanonicalUrl(`/blog/${article.slug}/`),
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getVideoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Hunt Showdown Cheats Gameplay — ESP, Aimbot & Wallhack Demo",
    description:
      "Gameplay footage showing Hunt Showdown cheat features including player ESP, wallhack, aimbot, and radar overlay.",
    thumbnailUrl: getAbsoluteAssetUrl(VIDEO_POSTER),
    contentUrl: getAbsoluteAssetUrl(HERO_VIDEO),
    embedUrl: getCanonicalUrl("/video/"),
    uploadDate: "2026-07-01",
    duration: "PT2M30S",
    inLanguage: "en",
  };
}
