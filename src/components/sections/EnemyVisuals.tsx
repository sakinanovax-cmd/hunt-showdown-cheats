import Link from "next/link";
import {
  Box,
  Crosshair,
  Heart,
  MapPin,
  Package,
  Ruler,
  Skull,
  Tag,
  User,
  type LucideIcon,
} from "lucide-react";
import { ENEMY_FEATURES } from "@/lib/constants";
import { ZADEYO_CHECKOUT_URL } from "@/lib/site";

const ENEMY_ICONS: Record<string, LucideIcon> = {
  "Player Box ESP": Box,
  "Hunter Snap Line": Crosshair,
  "Distance ESP": Ruler,
  "Health ESP": Heart,
  "Name Tags": Tag,
  "Skeleton ESP": User,
};

export default function EnemyVisuals() {
  return (
    <section id="features" className="section-band border-t border-[var(--color-border-subtle)] py-[var(--section-py)]">
      <div className="container-dnd relative">
        <div className="mb-12 text-center">
          <p className="section-label mb-4">Player awareness</p>
          <div className="section-title-wrap">
            <p className="ref-section-title">Enemy Visuals</p>
          </div>
          <p className="prose-body mx-auto mt-6 max-w-2xl">
            Hunt Showdown ESP cheat features for player awareness — boxes, distance tags, health bars,
            and skeleton wallhack tuned for bayou PvP.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ENEMY_FEATURES.map((feature) => {
            const Icon = ENEMY_ICONS[feature.title] ?? Box;
            return (
              <article key={feature.title} className="premium-card group">
                <div className="premium-card-icon transition-transform duration-300 group-hover:scale-105">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <p className="ref-card-title mb-2 text-[var(--color-text)]">{feature.title}</p>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--color-text-muted)]">
          Each feature has its own page —{" "}
          <Link href="/cheats/" className="text-[var(--color-purple-light)] transition-colors hover:text-[var(--color-text)]">
            ESP feature pages
          </Link>
          {" · "}
          <a
            href={ZADEYO_CHECKOUT_URL}
            className="text-[var(--color-purple-light)] transition-colors hover:text-[var(--color-text)]"
            rel="noopener noreferrer"
            target="_blank"
          >
            checkout pricing
          </a>
        </p>
      </div>
    </section>
  );
}
