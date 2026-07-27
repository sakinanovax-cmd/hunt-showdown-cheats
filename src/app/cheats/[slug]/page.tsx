import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import CheatBuyPanel from "@/components/cheats/CheatBuyPanel";
import CheatCard from "@/components/cheats/CheatCard";
import { getAllCheatSlugs, getCheatBySlug, getRelatedCheats } from "@/lib/cheats";
import { getCheatSeoBody } from "@/lib/cheat-seo-body";
import { buildPageMetadata } from "@/lib/metadata";
import { getCheatMetaDescription } from "@/lib/seo-descriptions";
import { getCheatMetaTitle } from "@/lib/seo-titles";
import { getBreadcrumbSchema, getCheatProductSchema, getWebPageSchema } from "@/lib/seo";
import { getCanonicalUrl } from "@/lib/site";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCheatSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cheat = getCheatBySlug(slug);
  if (!cheat) return {};

  return buildPageMetadata({
    title: getCheatMetaTitle(slug, `${cheat.name} — Buy & Price`),
    description: getCheatMetaDescription(slug, cheat.description),
    path: `/cheats/${slug}/`,
    imageAlt: cheat.imageAlt,
    imagePath: cheat.image,
    keywords: [
      cheat.name,
      `Hunt Showdown ${cheat.shortName} cheat`,
      "buy Hunt Showdown cheats",
      "Hunt Showdown cheats price",
    ],
  });
}

export default async function CheatPage({ params }: Props) {
  const { slug } = await params;
  const cheat = getCheatBySlug(slug);
  if (!cheat) notFound();

  const related = getRelatedCheats(slug);
  const seoBody = getCheatSeoBody(slug);
  const pageUrl = getCanonicalUrl(`/cheats/${slug}/`);
  const metaDescription = getCheatMetaDescription(slug, cheat.description);

  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: getCheatMetaTitle(slug, cheat.name),
            description: metaDescription,
            path: `/cheats/${slug}/`,
          }),
          getCheatProductSchema(cheat),
          getBreadcrumbSchema([
            { name: "Hunt Showdown Cheats", url: getCanonicalUrl("/") },
            { name: "All Cheats", url: getCanonicalUrl("/cheats/") },
            { name: cheat.name, url: pageUrl },
          ]),
        ]}
      />
      <Navbar />
      <PageMain stickyBar>
        <div className="container-dnd">
          <Breadcrumbs
            items={[
              { label: "Hunt Showdown Cheats", href: "/" },
              { label: "All Cheats", href: "/cheats/" },
              { label: cheat.shortName },
            ]}
          />

          <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <p className="section-label mb-4">{cheat.eyebrow}</p>
              <h1 className="ref-section-title mb-4">{cheat.name}</h1>
              <p className="prose-body mb-6 max-w-2xl text-lg text-[var(--color-purple-light)]">{cheat.tagline}</p>
              <p className="prose-body mb-8 max-w-2xl">{cheat.description}</p>
              <CheatBuyPanel cheat={cheat} variant="hero" />
            </div>

            <figure className="cheat-hero-media overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={cheat.image}
                  alt={cheat.imageAlt}
                  fill
                  className="object-cover object-[center_58%]"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 50%, ${cheat.accent}22 100%)`,
                  }}
                />
              </div>
            </figure>
          </div>

          <section className="mb-12" aria-labelledby="cheat-highlights">
            <h2 id="cheat-highlights" className="display-heading mb-6 text-2xl text-[var(--color-text)]">
              What {cheat.shortName} gives you
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {cheat.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[rgba(12,10,16,0.5)] p-4"
                >
                  <Check size={18} className="mt-0.5 shrink-0 text-[var(--color-purple)]" aria-hidden="true" />
                  <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {seoBody && (
            <section className="mb-12 max-w-3xl" aria-labelledby="cheat-seo-body">
              <h2 id="cheat-seo-body" className="display-heading mb-5 text-2xl text-[var(--color-text)]">
                {seoBody.heading}
              </h2>
              <div className="space-y-4">
                {seoBody.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="prose-body text-[var(--color-text-secondary)]">
                    {paragraph}
                  </p>
                ))}
              </div>
              {seoBody.sections?.map((section) => (
                <div key={section.heading} className="mt-8">
                  <h3 className="mb-3 text-lg font-semibold text-[var(--color-text)]">{section.heading}</h3>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="prose-body text-[var(--color-text-secondary)]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <p className="mt-6 text-sm text-[var(--color-text-muted)]">
                Also see{" "}
                <Link href="/buy/" className="text-[var(--color-purple-light)] hover:underline">
                  price &amp; buy
                </Link>
                ,{" "}
                <Link href="/compare/" className="text-[var(--color-purple-light)] hover:underline">
                  provider comparison
                </Link>
                , and the{" "}
                <Link href="/faq/" className="text-[var(--color-purple-light)] hover:underline">
                  FAQ
                </Link>
                .
              </p>
            </section>
          )}

          <section className="mb-16" aria-label="Buy this cheat">
            <CheatBuyPanel cheat={cheat} variant="inline" />
          </section>

          {related.length > 0 && (
            <section aria-labelledby="related-cheats">
              <h2 id="related-cheats" className="display-heading mb-6 text-2xl text-[var(--color-text)]">
                Pair with other cheats
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <CheatCard key={item.slug} cheat={item} />
                ))}
              </div>
              <p className="mt-8 text-center">
                <Link href="/cheats/" className="text-sm font-medium text-[var(--color-purple-light)] hover:underline">
                  Browse all Hunt Showdown cheats →
                </Link>
              </p>
            </section>
          )}
        </div>
        <CheatBuyPanel cheat={cheat} variant="sticky" />
      </PageMain>
      <Footer />
    </>
  );
}
