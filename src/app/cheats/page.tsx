import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import HubPageLinks from "@/components/layout/HubPageLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import CheatCard from "@/components/cheats/CheatCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { PurchaseButton } from "@/components/ui/Button";
import { CHEAT_PRODUCTS, CHEAT_PRICING } from "@/lib/cheats";
import { buildPageMetadata } from "@/lib/metadata";
import { META_DESCRIPTIONS } from "@/lib/seo-descriptions";
import { META_TITLES } from "@/lib/seo-titles";
import { getBreadcrumbSchema, getCheatsItemListSchema, getWebPageSchema } from "@/lib/seo";
import { getCanonicalUrl, PRICE_LIFETIME, PRICE_MONTHLY, ZADEYO_CHECKOUT_URL } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLES.cheatsIndex,
  description: META_DESCRIPTIONS.cheatsIndex,
  path: "/cheats/",
  imageAlt: "Hunt Showdown cheat suite — all features",
  imagePath: "/images/hunt/esp-overlay.png",
});

export default function CheatsIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: "Hunt Showdown Cheats — All Features",
            description: META_DESCRIPTIONS.cheatsHub,
            path: "/cheats/",
          }),
          getCheatsItemListSchema(),
          getBreadcrumbSchema([
            { name: "Hunt Showdown Cheats", url: getCanonicalUrl("/") },
            { name: "All Cheats", url: getCanonicalUrl("/cheats/") },
          ]),
        ]}
      />
      <Navbar />
      <PageMain>
        <div className="container-dnd">
          <Breadcrumbs
            items={[
              { label: "Hunt Showdown Cheats", href: "/" },
              { label: "All Cheats" },
            ]}
          />

          <SectionHeading
            as="h1"
            eyebrow="Cheat suite"
            heading="Hunt Showdown Cheats — ESP, Aimbot, Wallhack & Radar"
            description={`Nine Hunt Showdown cheat pages with pricing, features, and buy links. Full suite from ${PRICE_MONTHLY}/month or ${PRICE_LIFETIME} lifetime.`}
            align="left"
          />

          <HubPageLinks current="cheats" />

          <div className="cheat-index-price-bar mb-12 flex flex-wrap items-center gap-4 rounded-2xl border border-[rgba(168,85,247,0.25)] bg-[rgba(168,85,247,0.06)] px-6 py-5">
            <div>
              <p className="font-mono-label mb-1 text-[var(--color-text-muted)]">Suite pricing</p>
              <p className="text-2xl font-bold text-[var(--color-text)]">
                <span className="text-[var(--color-purple-light)]">{CHEAT_PRICING.monthly.price}</span>
                <span className="text-base font-normal text-[var(--color-text-muted)]">/mo</span>
                <span className="mx-2 text-[var(--color-text-muted)]">·</span>
                <span className="text-[var(--color-gold)]">{CHEAT_PRICING.lifetime.price}</span>
                <span className="text-base font-normal text-[var(--color-text-muted)]"> lifetime</span>
              </p>
            </div>
            <PurchaseButton className="ml-auto w-full rounded-full sm:ml-auto sm:w-auto">Buy Full Suite</PurchaseButton>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHEAT_PRODUCTS.map((cheat) => (
              <CheatCard key={cheat.slug} cheat={cheat} />
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[var(--color-text-secondary)]">
            Questions before you buy?{" "}
            <Link href="/faq/" className="font-medium text-[var(--color-purple-light)] hover:underline">
              Read the FAQ
            </Link>
            {" · "}
            <a
              href={ZADEYO_CHECKOUT_URL}
              className="font-medium text-[var(--color-purple-light)] hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              See price &amp; checkout
            </a>
          </p>
        </div>
      </PageMain>
      <Footer />
    </>
  );
}
