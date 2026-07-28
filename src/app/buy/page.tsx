import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import HubPageLinks from "@/components/layout/HubPageLinks";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedRoutes from "@/components/sections/RelatedRoutes";
import TrustSignals from "@/components/sections/TrustSignals";
import { PurchaseButton } from "@/components/ui/Button";
import Link from "next/link";
import {
  BUY_DELIVERY_TERMS,
  BUY_FEATURE_BENEFITS,
  BUY_FEATURES,
  PRICING_PLANS,
  SYSTEM_REQUIREMENTS,
} from "@/lib/constants";
import { ZADEYO_ASSETS } from "@/lib/assets";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getProductSchema, getWebPageSchema } from "@/lib/seo";
import { META_DESCRIPTIONS } from "@/lib/seo-descriptions";
import { META_TITLES } from "@/lib/seo-titles";
import { DISCLAIMER, getCanonicalUrl, LAST_CONTENT_REVIEW } from "@/lib/site";
import { Check, Shield } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLES.buy,
  description: META_DESCRIPTIONS.buy,
  path: "/buy/",
  imageAlt: "Hunt Showdown cheats product preview — ESP, aimbot and wallhack menu",
  imagePath: ZADEYO_ASSETS.screenshotBanner,
});

export default function BuyPage() {
  const homeUrl = getCanonicalUrl("/");
  const buyUrl = getCanonicalUrl("/buy/");
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Hunt Showdown Cheats", url: homeUrl },
    { name: "Price & Buy", url: buyUrl },
  ]);

  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: META_TITLES.buy,
            description: META_DESCRIPTIONS.buy,
            path: "/buy/",
          }),
          getProductSchema(),
          breadcrumbs,
        ]}
      />
      <Navbar />
      <PageMain>
        <div className="container-dnd">
          <Breadcrumbs
            items={[
              { label: "Hunt Showdown Cheats", href: "/" },
              { label: "Price & Buy" },
            ]}
          />

          <HubPageLinks current="buy" />

          {/* §07 — Purpose statement (first screen) */}
          <SectionHeading
            as="h1"
            eyebrow="Transactional"
            heading="Hunt Showdown Cheats — Price, Features & Buy"
            description="Hunt Showdown cheats for Steam on Windows 10/11 — ESP, aimbot, wallhack, radar, and Cloud DMA. Choose monthly or lifetime, checkout on Zadeyo, instant loader delivery."
            align="left"
          />

          {/* §07 — Proof */}
          <figure className="mb-10 overflow-hidden rounded-xl border border-[var(--color-border)]">
            <Image
              src={ZADEYO_ASSETS.screenshotBanner}
              alt="Hunt Showdown cheats menu showing ESP distance, player health, and aimbot settings"
              width={1920}
              height={680}
              className="h-auto w-full"
              priority
            />
            <figcaption className="border-t border-[var(--color-border)] px-4 py-2 text-center text-xs text-[var(--color-text-muted)]">
              Hunt Showdown cheat interface preview — features and layout may vary by loader version.
            </figcaption>
          </figure>

          {/* §07 — Pricing and delivery */}
          <div id="pricing" className="mb-16 grid gap-6 md:grid-cols-2">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`card-surface p-8 md:p-10 ${plan.popular ? "pricing-glow" : ""}`}
              >
                {plan.popular && <span className="badge-pill mb-4">Most popular</span>}
                <h2 className="display-heading mb-1 text-2xl text-[var(--color-purple)]">
                  Hunt Showdown Cheats — {plan.name}
                </h2>
                <p className="mb-6 text-sm text-[var(--color-text-muted)]">{plan.duration}</p>
                <div className="mb-6">
                  <span className="display-heading text-5xl text-[var(--color-text)]">{plan.price}</span>
                </div>
                <PurchaseButton className="w-full justify-center">
                Buy on Zadeyo — {plan.price}
              </PurchaseButton>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-purple)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* §07 — Feature-to-benefit mapping */}
          <div className="mb-16">
            <h2 className="display-heading mb-6 text-2xl text-[var(--color-text)]">
              Hunt Showdown cheat features — what each one does
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {BUY_FEATURE_BENEFITS.map((item) => (
                <div key={item.feature} className="card-surface p-6">
                  <h3 className="mb-2 font-semibold text-[var(--color-purple-light)]">{item.feature}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* §07 — Requirements & compatibility */}
            <div className="card-surface p-8">
              <div className="mb-4 flex items-center gap-2">
                <Shield className="text-[var(--color-purple)]" size={22} aria-hidden="true" />
                <h2 className="display-heading text-lg">Compatibility &amp; requirements</h2>
              </div>
              <ul className="mb-6 space-y-3">
                {SYSTEM_REQUIREMENTS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <Check size={16} className="text-[var(--color-purple)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mb-3 text-sm font-semibold text-[var(--color-text)]">Full feature list</h3>
              <ul className="space-y-2">
                {BUY_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <Check size={14} className="text-[var(--color-purple)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* §07 — Pricing, delivery, trust */}
            <div className="space-y-6">
              <div className="card-surface p-8">
                <h2 className="display-heading mb-4 text-lg">Delivery &amp; billing terms</h2>
                <ul className="space-y-3">
                  {BUY_DELIVERY_TERMS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-purple)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-surface p-6">
                <h2 className="mb-3 text-sm font-semibold text-[var(--color-text)]">Risk disclosure</h2>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{DISCLAIMER}</p>
                <p className="mt-3 font-mono-label text-xs text-[var(--color-text-muted)]">
                  Content last reviewed: {LAST_CONTENT_REVIEW}
                </p>
              </div>
            </div>
          </div>

          {/* Pre-sale FAQ hub */}
          <section className="mt-16 rounded-2xl border border-[var(--color-border)] bg-[rgba(12,10,16,0.5)] p-6 md:p-8">
            <h2 className="display-heading mb-3 text-xl text-[var(--color-text)]">
              Hunt Showdown cheats — FAQ
            </h2>
            <p className="prose-body mb-6 max-w-2xl">
              Price, delivery, Cloud DMA, stream-proof mode, and anti-cheat safety — all answered on our
              dedicated FAQ page.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/faq/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-purple)] bg-[rgba(168,85,247,0.12)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-purple-light)] transition-colors hover:bg-[rgba(168,85,247,0.2)]"
              >
                View all FAQs
              </Link>
              <Link
                href="/cheats/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-border-subtle)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-purple)] hover:text-[var(--color-purple-light)]"
              >
                Browse cheats
              </Link>
            </div>
          </section>

          {/* §07 — Related routes */}
          <RelatedRoutes />
        </div>
      </PageMain>
      <TrustSignals />
      <Footer />
    </>
  );
}
