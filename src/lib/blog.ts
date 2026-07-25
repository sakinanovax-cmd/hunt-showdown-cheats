import { BLOG_ARTICLES } from "./constants";
import type { BlogArticle } from "@/types";

export function getAllArticles(): BlogArticle[] {
  return BLOG_ARTICLES;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_ARTICLES.map((a) => a.slug);
}
