import type { MetadataRoute } from "next";
import { BLOG_ARTICLES } from "@/lib/blog-articles";
import { getAllCheatSlugs } from "@/lib/cheats";
import { getCanonicalUrl, LAST_CONTENT_REVIEW } from "@/lib/site";

export const dynamic = "force-static";

const LAST_REVIEW_DATE = new Date(`${LAST_CONTENT_REVIEW.replace(" ", " 1, ")}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = BLOG_ARTICLES.map((article) => ({
    url: getCanonicalUrl(`/blog/${article.slug}/`),
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cheatUrls = getAllCheatSlugs().map((slug) => ({
    url: getCanonicalUrl(`/cheats/${slug}/`),
    lastModified: LAST_REVIEW_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: getCanonicalUrl("/"),
      lastModified: LAST_REVIEW_DATE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getCanonicalUrl("/cheats/"),
      lastModified: LAST_REVIEW_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: getCanonicalUrl("/blog/"),
      lastModified: LAST_REVIEW_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: getCanonicalUrl("/faq/"),
      lastModified: LAST_REVIEW_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: getCanonicalUrl("/video/"),
      lastModified: LAST_REVIEW_DATE,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: getCanonicalUrl("/compare/"),
      lastModified: LAST_REVIEW_DATE,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: getCanonicalUrl("/buy/"),
      lastModified: LAST_REVIEW_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cheatUrls,
    ...blogUrls,
  ];
}
