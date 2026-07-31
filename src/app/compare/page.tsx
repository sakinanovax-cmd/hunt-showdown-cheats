import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import FAQ from "@/components/sections/FAQ";
import RelatedRoutes from "@/components/sections/RelatedRoutes";
import HubPageLinks from "@/components/layout/HubPageLinks";
import { PurchaseButton } from "@/components/ui/Button";
import { ZADEYO_ASSETS } from "@/lib/assets";
import { COMPARISON_FAQ, COMPARISON_ROWS, COMPARISON_VERDICT } from "@/lib/compare";
import { buildPageMetadata } from "@/lib/metadata";
import { META_DESCRIPTIONS } from "@/lib/seo-descriptions";
import { META_TITLES } from "@/lib/seo-titles";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/seo";
import { getCanonicalUrl, PRICE_LIFETIME, PRICE_MONTHLY, ZADEYO_CHECKOUT_URL } from "@/lib/site";
import { Check } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLES.compare,
  description: META_DESCRIPTIONS.compare,
  path: "/compare/",
  imageAlt: "Best Hunt Showdown cheats 2026 comparison chart",
  imagePath: ZADEYO_ASSETS.screenshotBanner,
  keywords: [
    "best Hunt Showdown cheats 2026",
    "Hunt Showdown cheat comparison",
    "compare Hunt Showdown cheats",
    "Hunt Showdown cheats review",
  ],
});

export default function ComparePage() {
  const homeUrl = getCanonicalUrl("/");
  const compareUrl = getCanonicalUrl("/compare/");
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Hunt Showdown Cheats", url: homeUrl },
    { name: "Cheat Comparison", url: compareUrl },
  ]);

  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: META_TITLES.compare,
            description: META_DESCRIPTIONS.compare,
            path: "/compare/",
          }),
          breadcrumbs,
        ]}
      />
      <Navbar />
      <PageMain>
        <div className="container-dnd">
          <Breadcrumbs
            items={[
              { label: "Hunt Showdown Cheats", href: "/" },
              { label: "Cheat Comparison" },
            ]}
          />

          <HubPageLinks current="compare" />

          <SectionHeading
            as="h1"
            eyebrow="Comparison"
            heading="Hunt Showdown Cheat Comparison — Features, Price & Providers"
            description={`Side-by-side look at Hunt Showdown cheat features, Cloud DMA support, update speed, and price. Hunt Showdown cheats start at ${PRICE_MONTHLY}/month or ${PRICE_LIFETIME} lifetime with instant delivery.`}
            align="left"
          />

          {/* Mobile-friendly cards */}
          <div className="mb-10 space-y-4 md:hidden">
            {COMPARISON_ROWS.map((row) => (
              <article key={row.feature} className="compare-card">
                <h2 className="mb-3 text-base font-semibold text-[var(--color-text)]">{row.feature}</h2>
                <dl>
                  <dt>Hunt Showdown Cheats</dt>
                  <dd className="text-[var(--color-text)]">{row.huntCheats}</dd>
                  <dt>Multi-game shops</dt>
                  <dd>{row.multiGameShop}</dd>
                  <dt>Forum sellers</dt>
                  <dd>{row.forumSeller}</dd>
                </dl>
              </article>
            ))}
          </div>

          <div className="mb-10 hidden overflow-x-auto rounded-xl border border-[var(--color-border)] md:block">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                  <th scope="col" className="px-4 py-4 font-semibold text-[var(--color-text)]">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold text-[var(--color-purple-light)]">Hunt Showdown Cheats</th>
                  <th scope="col" className="px-4 py-4 font-semibold text-[var(--color-text-secondary)]">
                    Multi-game shops
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold text-[var(--color-text-secondary)]">
                    Forum sellers
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-[var(--color-border)] last:border-0">
                    <th scope="row" className="px-4 py-3 font-medium text-[var(--color-text)]">
                      {row.feature}
                    </th>
                    <td className="px-4 py-3 text-[var(--color-text)]">
                      <span className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-[var(--color-purple-light)]" aria-hidden />
                        {row.huntCheats}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]">{row.multiGameShop}</td>
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]">{row.forumSeller}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
            <h2 className="display-heading mb-4 text-2xl text-[var(--color-text)]">
              Why Hunt Showdown cheats rank top in 2026
            </h2>
            <ul className="space-y-3">
              {COMPARISON_VERDICT.map((point) => (
                <li key={point} className="flex gap-3 text-[var(--color-text-secondary)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-purple-light)]" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <PurchaseButton>Buy Hunt Showdown Cheats</PurchaseButton>
              <a
                href={ZADEYO_CHECKOUT_URL}
                className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border-subtle)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text)] transition-colors hover:border-[var(--color-purple)] hover:text-[var(--color-purple-light)]"
                rel="noopener noreferrer"
                target="_blank"
              >
                See full price & features
              </a>
              <Link
                href="/status/"
                className="inline-flex items-center justify-center px-2 py-3 text-sm text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
              >
                Live cheat status
              </Link>
              <Link
                href="/blog/best-hunt-showdown-cheat-comparison-2026/"
                className="inline-flex items-center justify-center px-2 py-3 text-sm text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
              >
                Read the full comparison guide
              </Link>
            </div>
          </section>

          <FAQ
            items={COMPARISON_FAQ}
            heading="Hunt Showdown cheat comparison FAQ"
            description="Common questions when comparing the best Hunt Showdown cheats in 2026."
          />

          <RelatedRoutes />
        </div>
      </PageMain>
      <Footer />
    </>
  );
}
