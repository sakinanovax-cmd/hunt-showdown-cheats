import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { PurchaseButton } from "@/components/ui/Button";
import { ZADEYO_CHECKOUT_URL } from "@/lib/site";

export default function PricingPreview() {
  return (
    <section id="pricing" className="border-t border-[var(--color-border-subtle)] py-[var(--section-py)] bg-[var(--color-surface)]" aria-labelledby="pricing-heading">
      <div className="container-dnd">
        <p className="section-label mb-3 text-center">Price</p>
        <h2 id="pricing-heading" className="ref-section-title mb-4 text-center">
          Hunt Showdown Cheats — Plans &amp; Price
        </h2>
        <p className="prose-body mx-auto mb-10 max-w-2xl text-center">
          Buy Hunt Showdown cheats on Zadeyo — monthly or lifetime access with full ESP, aimbot, wallhack,
          radar, and Cloud DMA. Instant loader delivery after checkout.
        </p>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`ref-feature-card p-8 ${plan.popular ? "pricing-glow border-[rgba(168,85,247,0.35)]" : ""}`}
            >
              {plan.popular && (
                <span className="badge-pill mb-4">Best value</span>
              )}
              <h3 className="ref-card-title mb-1 text-[var(--color-purple-light)]">
                Hunt Showdown Cheats — {plan.name}
              </h3>
              <p className="mb-4 text-sm text-[var(--color-text-muted)]">{plan.duration}</p>
              <p className="font-display mb-6 text-4xl text-[var(--color-text)]">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <Check size={14} className="mt-0.5 shrink-0 text-[var(--color-purple)]" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <PurchaseButton className="w-full justify-center">
                Buy on Zadeyo — {plan.price}
              </PurchaseButton>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
          Full feature list, compatibility, and delivery terms on our{" "}
          <a
            href={ZADEYO_CHECKOUT_URL}
            className="text-[var(--color-purple-light)] hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Hunt Showdown cheats pricing page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
