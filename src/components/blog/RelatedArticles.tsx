import BlogCard from "@/components/ui/BlogCard";
import { getArticleBySlug } from "@/lib/blog";
import type { BlogArticle } from "@/types";

export default function RelatedArticles({
  slugs,
  currentSlug,
}: {
  slugs: string[];
  currentSlug: string;
}) {
  const articles = slugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is BlogArticle => Boolean(a))
    .slice(0, 3);

  if (articles.length === 0) return null;

  return (
    <section className="mt-16 border-t border-[var(--color-border)] pt-12" aria-labelledby="related-guides">
      <h2 id="related-guides" className="display-heading mb-8 text-2xl text-[var(--color-text)]">
        Related Hunt Showdown cheat guides
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
