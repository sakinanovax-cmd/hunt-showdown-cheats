import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { BlogRichText } from "@/components/blog/BlogRichText";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ArticleCTA from "@/components/blog/ArticleCTA";
import RelatedCheatPages from "@/components/blog/RelatedCheatPages";
import RelatedArticles from "@/components/blog/RelatedArticles";
import JsonLd from "@/components/seo/JsonLd";
import { getAllSlugs, getArticleBySlug } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/metadata";
import { getBlogPageKeywords } from "@/lib/seo-keywords";
import { getBlogMetaDescription } from "@/lib/seo-descriptions";
import { getBlogMetaTitle } from "@/lib/seo-titles";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/seo";
import { getCanonicalUrl } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found" };
  return buildPageMetadata({
    title: getBlogMetaTitle(slug, article.title),
    description: getBlogMetaDescription(slug, article.excerpt),
    path: `/blog/${slug}/`,
    imageAlt: `${article.title} — Hunt Showdown cheats guide`,
    imagePath: article.image,
    type: "article",
    publishedTime: article.publishedAt,
    keywords: getBlogPageKeywords(slug),
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Hunt Showdown Cheats", url: getCanonicalUrl("/") },
    { name: "Blog", url: getCanonicalUrl("/blog/") },
    { name: article.title, url: getCanonicalUrl(`/blog/${slug}/`) },
  ]);

  return (
    <>
      <JsonLd data={[getArticleSchema(article), breadcrumbs]} />
      <Navbar />
      <PageMain>
        <article className="container-dnd max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Hunt Showdown Cheats", href: "/" },
              { label: "Cheat Guides", href: "/blog/" },
              { label: article.title },
            ]}
          />

          <p className="section-label mb-4">{article.category}</p>
          <h1 className="display-heading mb-6 text-3xl text-[var(--color-text)] md:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <div className="mb-10 flex items-center gap-4 font-mono-label text-[var(--color-text-muted)]">
            <time dateTime={article.publishedAt}>
              {article.date}
            </time>
            <span className="flex items-center gap-1">
              <Clock size={14} aria-hidden="true" />
              {article.readTime}
            </span>
          </div>
          <div className="section-divider mb-10" />

          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-[var(--color-border)]">
            <Image
              src={article.image}
              alt={`${article.title} — Hunt Showdown cheats guide cover`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="prose-body space-y-6">
            {article.content.map((paragraph, i) => (
              <p key={`intro-${i}`} className="text-lg text-[var(--color-text-secondary)]">
                <BlogRichText text={paragraph} />
              </p>
            ))}

            {article.sections.map((section) => (
              <section key={section.heading} aria-labelledby={section.heading.replace(/\s+/g, "-").toLowerCase()}>
                <h2
                  id={section.heading.replace(/\s+/g, "-").toLowerCase()}
                  className="display-heading mb-4 mt-10 text-2xl text-[var(--color-purple-light)]"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={`${section.heading}-${i}`} className="mb-4">
                    <BlogRichText text={paragraph} />
                  </p>
                ))}
              </section>
            ))}
          </div>

          <ArticleCTA />
          <RelatedCheatPages slugs={article.relatedCheatSlugs} />
          <RelatedArticles slugs={article.relatedSlugs} currentSlug={article.slug} />
        </article>
      </PageMain>
      <Footer />
    </>
  );
}
