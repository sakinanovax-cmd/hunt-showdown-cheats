import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import HubPageLinks from "@/components/layout/HubPageLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import FAQ from "@/components/sections/FAQ";
import SectionHeading from "@/components/ui/SectionHeading";
import { PurchaseButton } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/metadata";
import { META_DESCRIPTIONS } from "@/lib/seo-descriptions";
import { META_TITLES } from "@/lib/seo-titles";
import { getBreadcrumbSchema, getFAQSchema, getWebPageSchema } from "@/lib/seo";
import { getCanonicalUrl, PRICE_LIFETIME, PRICE_MONTHLY, ZADEYO_CHECKOUT_URL } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLES.faq,
  description: META_DESCRIPTIONS.faq,
  path: "/faq/",
  imageAlt: "Hunt Showdown cheats FAQ — price, ESP, aimbot and safety",
  keywords: [
    "Hunt Showdown cheats FAQ",
    "Hunt Showdown anti-cheat bypass",
    "buy Hunt Showdown cheats",
    "Hunt Showdown ESP",
  ],
});

export default function FaqPage() {
  const homeUrl = getCanonicalUrl("/");
  const faqUrl = getCanonicalUrl("/faq/");

  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: META_TITLES.faq,
            description: META_DESCRIPTIONS.faq,
            path: "/faq/",
          }),
          getFAQSchema(),
          getBreadcrumbSchema([
            { name: "Hunt Showdown Cheats", url: homeUrl },
            { name: "FAQ", url: faqUrl },
          ]),
        ]}
      />
      <Navbar />
      <PageMain>
        <div className="container-dnd">
          <Breadcrumbs
            items={[
              { label: "Hunt Showdown Cheats", href: "/" },
              { label: "FAQ" },
            ]}
          />

          <SectionHeading
            as="h1"
            eyebrow="Support"
            heading="Hunt Showdown Cheats — FAQ"
            description={`Answers about price (${PRICE_MONTHLY}/mo or ${PRICE_LIFETIME} lifetime), ESP, aimbot, wallhack, Cloud DMA, streaming, delivery, and anti-cheat safety.`}
            align="left"
          />

          <HubPageLinks current="faq" />

          <FAQ
            variant="inline"
            hideHeading
            heading="Hunt Showdown Cheats — FAQ"
            description=""
          />

          <section className="mt-14 rounded-2xl border border-[rgba(168,85,247,0.25)] bg-[rgba(168,85,247,0.06)] p-6 text-center md:p-10">
            <h2 className="display-heading mb-3 text-xl text-[var(--color-text)] md:text-2xl">
              Ready to buy?
            </h2>
            <p className="prose-body mx-auto mb-6 max-w-xl">
              Browse every cheat feature, compare plans, or checkout online for instant loader delivery.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PurchaseButton>Buy Hunt Showdown Cheats</PurchaseButton>
              <Link
                href="/cheats/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-border-subtle)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text)] transition-colors hover:border-[var(--color-purple)] hover:text-[var(--color-purple-light)]"
              >
                View all cheats
              </Link>
              <a
                href={ZADEYO_CHECKOUT_URL}
                className="text-sm font-medium text-[var(--color-purple-light)] underline-offset-2 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Price &amp; features →
              </a>
            </div>
          </section>
        </div>
      </PageMain>
      <Footer />
    </>
  );
}
