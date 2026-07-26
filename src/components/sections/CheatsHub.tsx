import Link from "next/link";
import CheatCard from "@/components/cheats/CheatCard";
import { CHEAT_PRODUCTS } from "@/lib/cheats";
import { PRICE_LIFETIME, PRICE_MONTHLY } from "@/lib/site";

const FEATURED = CHEAT_PRODUCTS.slice(0, 6);

export default function CheatsHub() {
  return (
    <section
      id="cheats"
      className="section-band border-t border-[var(--color-border-subtle)] py-[var(--section-py)]"
      aria-labelledby="cheats-hub-heading"
    >
      <div className="container-dnd">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label mb-3">Cheat pages</p>
            <h2 id="cheats-hub-heading" className="ref-section-title">
              Every cheat — its own page
            </h2>
            <p className="prose-body mt-4 max-w-2xl">
              ESP, aimbot, wallhack, radar, and more — each with dedicated features, cash pricing (
              {PRICE_MONTHLY}/mo · {PRICE_LIFETIME} lifetime), and buy links.
            </p>
          </div>
          <Link
            href="/cheats/"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-purple-light)] transition-colors hover:border-[var(--color-purple)] hover:bg-[rgba(168,85,247,0.08)]"
          >
            Full cheats hub
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((cheat) => (
            <CheatCard key={cheat.slug} cheat={cheat} />
          ))}
        </div>
      </div>
    </section>
  );
}
