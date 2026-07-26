import Link from "next/link";
import type { CheatProduct } from "@/types";
import { ArrowRight } from "lucide-react";
import { PRICE_MONTHLY } from "@/lib/site";

export default function CheatCard({ cheat }: { cheat: CheatProduct }) {
  return (
    <Link
      href={`/cheats/${cheat.slug}/`}
      className="cheat-card group block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[rgba(12,10,16,0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,85,247,0.45)] hover:shadow-[0_16px_48px_rgba(168,85,247,0.12)]"
    >
      <div
        className="cheat-card-accent h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${cheat.accent}, var(--color-purple))` }}
      />
      <div className="p-6 md:p-7">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span
            className="font-mono-label inline-flex rounded-full px-3 py-1 text-[10px]"
            style={{
              color: cheat.accent,
              border: `1px solid ${cheat.accent}44`,
              background: `${cheat.accent}14`,
            }}
          >
            {cheat.shortName}
          </span>
          <span className="font-mono-label text-[var(--color-text-muted)]">from {PRICE_MONTHLY}</span>
        </div>
        <p className="ref-card-title mb-2 text-[var(--color-text)] transition-colors group-hover:text-[var(--color-purple-light)]">
          {cheat.name}
        </p>
        <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">{cheat.tagline}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-purple-light)]">
          Open {cheat.shortName} page
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
