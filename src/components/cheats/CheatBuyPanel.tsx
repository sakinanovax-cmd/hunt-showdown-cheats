import { Check, Sparkles, Zap } from "lucide-react";
import type { CheatProduct } from "@/types";
import { CHEAT_PRICING, ZADEYO_CHECKOUT_URL } from "@/lib/cheats";
import { PurchaseButton } from "@/components/ui/Button";

interface CheatBuyPanelProps {
  cheat: CheatProduct;
  variant?: "hero" | "inline" | "sticky";
}

export default function CheatBuyPanel({ cheat, variant = "inline" }: CheatBuyPanelProps) {
  const { monthly, lifetime } = CHEAT_PRICING;

  if (variant === "hero") {
    return (
      <div className="cheat-buy-hero flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="cheat-price-chip inline-flex items-center gap-2 rounded-full border border-[rgba(168,85,247,0.35)] bg-[rgba(168,85,247,0.1)] px-4 py-2">
          <Sparkles size={14} className="text-[var(--color-purple-light)]" aria-hidden="true" />
          <span className="text-sm font-semibold text-[var(--color-text)]">
            {monthly.price}
            <span className="font-normal text-[var(--color-text-muted)]">/mo</span>
          </span>
          <span className="text-[var(--color-text-muted)]">·</span>
          <span className="text-sm font-semibold text-[var(--color-gold)]">{lifetime.price} lifetime</span>
        </div>
        <PurchaseButton className="w-full rounded-full px-6 py-2.5 text-xs sm:w-auto">
          Buy {cheat.shortName} — {monthly.price}
        </PurchaseButton>
        <a
          href={ZADEYO_CHECKOUT_URL}
          className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple-light)]"
          rel="noopener noreferrer"
          target="_blank"
        >
          Compare all plans →
        </a>
      </div>
    );
  }

  if (variant === "sticky") {
    return (
      <aside
        className="cheat-buy-sticky fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-border)] bg-[rgba(6,4,9,0.95)] py-3 backdrop-blur-md lg:hidden"
        aria-label={`Buy ${cheat.shortName}`}
      >
        <div className="container-dnd flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">{cheat.shortName} included in suite</p>
            <p className="text-lg font-bold text-[var(--color-purple-light)]">{monthly.price}</p>
          </div>
          <PurchaseButton className="rounded-full px-5 py-2.5 text-xs whitespace-nowrap">
            Buy Now
          </PurchaseButton>
        </div>
      </aside>
    );
  }

  return (
    <div className="cheat-buy-panel pricing-glow overflow-hidden rounded-2xl border border-[rgba(168,85,247,0.3)]">
      <div
        className="border-b border-[rgba(168,85,247,0.2)] px-6 py-5"
        style={{
          background: `linear-gradient(135deg, ${cheat.accent}18 0%, rgba(168,85,247,0.08) 100%)`,
        }}
      >
        <p className="font-mono-label mb-2 text-[var(--color-purple-light)]">Ready to buy?</p>
        <p className="display-heading text-2xl text-[var(--color-text)]">{cheat.buyHook}</p>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          {cheat.shortName} is included in the full Hunt Showdown cheat suite — instant delivery.
        </p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2">
        <div className="cheat-cash-card rounded-xl border border-[var(--color-border)] bg-[rgba(12,10,16,0.8)] p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="badge-pill">{monthly.label}</span>
            <Zap size={16} className="text-[var(--color-purple-light)]" aria-hidden="true" />
          </div>
          <p className="display-heading mb-1 text-4xl text-[var(--color-purple-light)]">{monthly.price}</p>
          <p className="mb-4 text-xs text-[var(--color-text-muted)]">{monthly.duration}</p>
          <ul className="mb-5 space-y-2">
            {cheat.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <Check size={14} className="mt-0.5 shrink-0 text-[var(--color-purple)]" aria-hidden="true" />
                {perk}
              </li>
            ))}
          </ul>
          <a
            href={ZADEYO_CHECKOUT_URL}
            className="btn-primary-gradient flex w-full items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:shadow-[0_0_32px_rgba(168,85,247,0.35)]"
            rel="noopener noreferrer"
            target="_blank"
          >
            {monthly.cta} — {monthly.price}
          </a>
        </div>

        <div className="cheat-cash-card rounded-xl border border-[rgba(212,168,83,0.25)] bg-[rgba(12,10,16,0.8)] p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="badge-pill border-[rgba(212,168,83,0.35)] text-[var(--color-gold)]">Best value</span>
            <Sparkles size={16} className="text-[var(--color-gold)]" aria-hidden="true" />
          </div>
          <p className="display-heading mb-1 text-4xl text-[var(--color-gold)]">{lifetime.price}</p>
          <p className="mb-4 text-xs text-[var(--color-text-muted)]">{lifetime.duration}</p>
          <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Every feature — {cheat.shortName}, ESP, aimbot, radar, Cloud DMA — plus all future Hunt Showdown updates.
          </p>
          <a
            href={ZADEYO_CHECKOUT_URL}
            className="flex w-full items-center justify-center rounded-full border border-[var(--color-gold)] bg-[rgba(212,168,83,0.12)] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] transition-all hover:bg-[rgba(212,168,83,0.2)] hover:shadow-[0_0_32px_rgba(212,168,83,0.15)]"
            rel="noopener noreferrer"
            target="_blank"
          >
            {lifetime.cta} — {lifetime.price}
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border-subtle)] px-6 py-4 sm:flex-row">
        <p className="text-center text-xs text-[var(--color-text-muted)] sm:text-left">
          Instant loader · 24/7 Discord · Not affiliated with Crytek
        </p>
        <a
          href={ZADEYO_CHECKOUT_URL}
          className="text-sm font-medium text-[var(--color-purple-light)] hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Full price &amp; feature breakdown →
        </a>
      </div>
    </div>
  );
}
