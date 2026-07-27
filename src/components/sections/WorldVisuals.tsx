import Link from "next/link";
import {
  Crosshair,
  MapPin,
  Package,
  Skull,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { WORLD_FEATURES } from "@/lib/constants";

const WORLD_ICONS: Record<string, LucideIcon> = {
  "Item ESP": Package,
  "Extract ESP": MapPin,
  "Boss ESP": Skull,
  "Traps ESP": TriangleAlert,
  "Supply ESP": Crosshair,
};

export default function WorldVisuals() {
  return (
    <section className="relative py-[var(--section-py)]">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-[var(--color-surface)]" aria-hidden="true" />
      <div className="container-dnd relative">
        <div className="mb-12 text-center">
          <p className="section-label mb-4">Map intelligence</p>
          <div className="section-title-wrap">
            <p className="ref-section-title">
              World Visuals — Items, Extracts, Bosses, Traps &amp; Supplies
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--color-text-secondary)] leading-relaxed">
            Hunt Showdown cheats for bounty extraction — loot ESP, extract markers, boss tracking,
            and supply wallhack before you commit.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {WORLD_FEATURES.map((feature) => {
            const Icon = WORLD_ICONS[feature.title] ?? Package;
            return (
              <article
                key={feature.title}
                className="premium-card group flex gap-4 sm:items-start"
              >
                <div className="premium-card-icon mb-0 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="ref-card-title mb-1.5 text-[var(--color-text)]">{feature.title}</p>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--color-text-muted)]">
          Loot, boss, and extract cheats —{" "}
          <Link href="/cheats/esp/" className="text-[var(--color-purple-light)] hover:text-[var(--color-text)]">
            ESP page
          </Link>
          {" · "}
          <Link href="/cheats/radar/" className="text-[var(--color-purple-light)] hover:text-[var(--color-text)]">
            radar page
          </Link>
          {" · "}
          <Link href="/cheats/" className="text-[var(--color-purple-light)] hover:text-[var(--color-text)]">
            All overlays
          </Link>
        </p>
      </div>
    </section>
  );
}
