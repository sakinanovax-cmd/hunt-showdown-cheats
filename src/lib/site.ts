import { META_DESCRIPTIONS } from "./seo-descriptions";

/** SEO handbook-aligned site copy — no unsupported guarantee claims */
export const SITE_NAME = "Zadeyo";
export const SITE_PRIMARY_KEYWORD = "Hunt Showdown Cheats";
/** Hero H1 — two stacked lines: game name, then Cheats. */
export const HERO_H1_LINES = ["Hunt Showdown", "Cheats"] as const;
export const SITE_PRODUCT_NAME = "Hunt Showdown Cheats";
export const SITE_TAGLINE = "Hunt Showdown Cheats — ESP, Aimbot & Wallhack";
export const SITE_SEO_DESCRIPTION = META_DESCRIPTIONS.home;
export const SITE_SEO_HEADLINE =
  "Hunt Showdown cheats for competitive bayou hunts — player ESP, aimbot, wallhack, radar, triggerbot, and Cloud DMA with instant Zadeyo delivery.";
export const LAST_CONTENT_REVIEW = "July 2026";

function normalizeBaseUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

/** Resolve production URL for canonicals, OG, sitemap, and RSS. */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    if (owner && repo) {
      return `https://${owner}.github.io/${repo}`;
    }
  }

  if (process.env.GITHUB_PAGES === "true") {
    const repo = process.env.GITHUB_REPO_NAME ?? "hunt-showdown-cheats-site";
    const owner = process.env.GITHUB_ACTOR ?? process.env.NEXT_PUBLIC_GITHUB_USER ?? "github";
    return `https://${owner}.github.io/${repo}`;
  }

  // Never ship localhost canonicals from CI / Pages builds.
  if (process.env.CI === "true" || process.env.GITHUB_ACTIONS === "true") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required in CI so canonicals, sitemap, OG, and RSS use the production domain.",
    );
  }

  return "http://localhost:8080";
}

export const SITE_URL = resolveSiteUrl();

export const ZADEYO_CHECKOUT_URL =
  "https://zadeyo.com/go/SIGMA?to=%2Fproducts%2Fhunt-showdown";

export const ZADEYO_SUPPORT_URL = ZADEYO_CHECKOUT_URL;

export const DISCLAIMER =
  "Zadeyo is not affiliated with Crytek or Hunt: Showdown. All cheat software carries ban risk — no provider can guarantee safety. Use responsibly and keep loaders updated after patches.";

export const MOCKUP_DISCLAIMER =
  "Hunt Showdown cheats by Zadeyo — ESP, aimbot, wallhack, radar & Cloud DMA. Not affiliated with Crytek.";

export const PRICE_MONTHLY = "$35";
export const PRICE_LIFETIME = "$150";

export function getCanonicalUrl(path: string = "/"): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash.replace(/\/+/g, "/")}`;
}

export function getAbsoluteAssetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
