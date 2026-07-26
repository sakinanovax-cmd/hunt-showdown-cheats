import type { BlogArticle } from "@/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}/`}
      className="premium-card group flex h-full flex-col"
    >
      <span className="mb-4 inline-flex w-fit rounded-full border border-[rgba(168,85,247,0.35)] bg-[rgba(168,85,247,0.1)] px-3 py-1 font-mono-label text-[var(--color-purple-light)]">
        {article.category}
      </span>
      <p className="ref-card-title mb-3 flex-1 text-[var(--color-text)] transition-colors group-hover:text-[var(--color-purple-light)]">
        {article.title}
      </p>
      <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {article.excerpt}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-purple-light)]">
        Read {article.slug.split("-").slice(0, 3).join(" ")}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
