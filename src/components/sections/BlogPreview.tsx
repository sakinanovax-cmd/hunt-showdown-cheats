import Link from "next/link";
import BlogCard from "@/components/ui/BlogCard";
import { getAllArticles } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <section className="section-band border-t border-[var(--color-border-subtle)] py-[var(--section-py)]">
      <div className="container-dnd">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label mb-3">Latest articles</p>
            <h2 className="ref-section-title">Hunt Showdown Guides &amp; Tips</h2>
            <p className="mt-4 max-w-2xl text-[var(--color-text-secondary)] leading-relaxed">
              Explore practical Hunt Showdown guides, gameplay strategies, technical explainers,
              and the latest product updates.
            </p>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-purple-light)] transition-colors hover:text-[var(--color-text)]"
          >
            View all articles
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
