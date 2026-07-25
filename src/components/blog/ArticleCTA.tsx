import { PurchaseButton } from "@/components/ui/Button";
import { PRICE_MONTHLY, ZADEYO_CHECKOUT_URL } from "@/lib/site";

export default function ArticleCTA() {
  return (
    <aside className="card-surface pricing-glow mt-12 p-8 text-center md:p-10">
      <p className="section-label mb-3">Ready to dominate?</p>
      <h2 className="display-heading mb-4 text-2xl text-[var(--color-purple)] md:text-3xl">
        Get Hunt Showdown Cheats from Zadeyo
      </h2>
      <p className="prose-body mx-auto mb-6 max-w-xl">
        Instant cheat delivery — ESP, aimbot, wallhack, radar, and stream-proof mode. Plans from{" "}
        {PRICE_MONTHLY}/month with 24/7 Discord support.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <PurchaseButton>Buy Hunt Showdown Cheats</PurchaseButton>
        <a
          href={ZADEYO_CHECKOUT_URL}
          className="text-sm text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          View price &amp; features
        </a>
      </div>
    </aside>
  );
}
