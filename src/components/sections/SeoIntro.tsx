import Link from "next/link";
import { PurchaseButton } from "@/components/ui/Button";
import {
  LAST_CONTENT_REVIEW,
  PRICE_LIFETIME,
  PRICE_MONTHLY,
  SITE_PRIMARY_KEYWORD,
  SITE_SEO_HEADLINE,
  ZADEYO_CHECKOUT_URL,
} from "@/lib/site";

export default function SeoIntro() {
  return (
    <section
      id="hunt-showdown-cheats"
      className="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)] py-[var(--section-py)]"
      aria-labelledby="seo-intro-heading"
    >
      <div className="container-dnd">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-label mb-4">{SITE_PRIMARY_KEYWORD}</p>
          <h2 id="seo-intro-heading" className="ref-section-title mb-6">
            {SITE_PRIMARY_KEYWORD} — ESP, Aimbot, Wallhack &amp; Radar
          </h2>
          <p className="prose-body mx-auto mb-6 max-w-3xl text-lg">{SITE_SEO_HEADLINE}</p>
          <p className="prose-body mx-auto mb-8 max-w-3xl">
            This page covers Hunt Showdown cheats end-to-end: feature breakdowns, compatibility with Windows
            and Steam, setup guides, gameplay screenshots, price pages, and FAQs. {SITE_PRIMARY_KEYWORD} from Zadeyo
            include player ESP wallhack, aimbot, radar, triggerbot, recoil control, stream-proof mode, and
            Cloud DMA — from {PRICE_MONTHLY}/month or {PRICE_LIFETIME} lifetime with instant delivery.
          </p>
          <nav aria-label="Hunt Showdown cheats quick links" className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <PurchaseButton>Buy Hunt Showdown Cheats</PurchaseButton>
            <Link
              href="/cheats/"
              className="text-sm font-medium text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
            >
              All cheats
            </Link>
            <a
              href={ZADEYO_CHECKOUT_URL}
              className="text-sm font-medium text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Price &amp; buy
            </a>
            <Link
              href="/faq/"
              className="text-sm font-medium text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
            >
              FAQ
            </Link>
            <Link
              href="/blog/"
              className="text-sm font-medium text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
            >
              Setup guides
            </Link>
          </nav>
          <p className="mt-8 font-mono-label text-xs text-[var(--color-text-muted)]">
            Official {SITE_PRIMARY_KEYWORD.toLowerCase()} resource · Last reviewed {LAST_CONTENT_REVIEW} ·{" "}
            <a
              href={ZADEYO_CHECKOUT_URL}
              className="text-[var(--color-purple-light)] hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Zadeyo checkout
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
