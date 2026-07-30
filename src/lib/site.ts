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
export const LAST_CONTENT_REVIEW = "July 30, 2026";

function normalizeBaseUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

/** Resolve production URL for canonicals, OG, sitemap, and RSS. */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  // Cloudflare Pages/Workers preview URL (prefer custom domain via .env.production).
  if (process.env.CF_PAGES_URL) {
    return normalizeBaseUrl(process.env.CF_PAGES_URL);
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

  return "http://localhost:8080";
}

export const SITE_URL = resolveSiteUrl();

export const ZADEYO_CHECKOUT_URL =
  "https://zadeyo.com/go/SIGMA?to=%2Fproducts%2Fhunt-showdown";

export const ZADEYO_SUPPORT_URL = ZADEYO_CHECKOUT_URL;

/** Full risk note — use once per page (prefer buy/trust sections, not footer). */
export const DISCLAIMER =
  "Zadeyo is not affiliated with Crytek or Hunt: Showdown. All cheat software carries ban risk — no provider can guarantee safety. Use responsibly and keep loaders updated after patches.";

/** Short footer legal line — intentionally different wording from DISCLAIMER to avoid duplicate-text SEO flags. */
export const FOOTER_LEGAL =
  "Independent Zadeyo product resource. Crytek and Hunt: Showdown are third-party trademarks. Third-party tools always carry account risk — update loaders after patches.";

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
