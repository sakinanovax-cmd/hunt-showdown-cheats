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
          <p className="prose-body mx-auto mb-5 max-w-3xl">
            This page covers Hunt Showdown cheats end-to-end: feature breakdowns, compatibility with Windows
            and Steam, setup guides, gameplay screenshots, price pages, and FAQs. {SITE_PRIMARY_KEYWORD} from Zadeyo
            include player ESP wallhack, aimbot, radar, triggerbot, recoil control, stream-proof mode, and
            Cloud DMA — from {PRICE_MONTHLY}/month or {PRICE_LIFETIME} lifetime with instant delivery.
          </p>
          <p className="prose-body mx-auto mb-5 max-w-3xl">
            Hunters looking for Hunt Showdown ESP, wallhack, or radar usually need clearer information in fog,
            dark compounds, and boss-banish fights. Zadeyo documents each feature plainly so you can compare
            overlays, combat assists, and Cloud DMA options before checkout — without vague &quot;undetectable&quot;
            claims. Every plan includes patch-ready loader updates and Discord setup help after purchase.
          </p>
          <p className="prose-body mx-auto mb-8 max-w-3xl">
            Use this site to review cheat pages, pricing, FAQ answers, and setup guides, then buy on the
            official Zadeyo product page when you are ready. {SITE_PRIMARY_KEYWORD} carry ban risk like any
            third-party tool; keep loaders updated after Crytek patches and read the safety notes before you play.
          </p>
          <nav aria-label="Hunt Showdown cheats quick links" className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <PurchaseButton>Get the cheat suite</PurchaseButton>
            <Link
              href="/cheats/"
              className="text-sm font-medium text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
            >
              Cheat features
            </Link>
            <Link
              href="/buy/"
              className="text-sm font-medium text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
            >
              Plans &amp; pricing
            </Link>
            <Link
              href="/faq/"
              className="text-sm font-medium text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
            >
              Common questions
            </Link>
            <Link
              href="/blog/"
              className="text-sm font-medium text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
            >
              Setup guides
            </Link>
          </nav>
          <p className="mt-8 font-mono-label text-xs text-[var(--color-text-secondary)]">
            Official {SITE_PRIMARY_KEYWORD.toLowerCase()} resource · Last reviewed {LAST_CONTENT_REVIEW} ·{" "}
            <a
              href={ZADEYO_CHECKOUT_URL}
              className="font-semibold text-[var(--color-purple-light)] underline underline-offset-2"
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
