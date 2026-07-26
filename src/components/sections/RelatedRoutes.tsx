import Link from "next/link";
import { ZADEYO_CHECKOUT_URL } from "@/lib/site";

const RELATED_ROUTES = [
  { href: "/video/", label: "Video demo", external: false },
  { href: "/faq/", label: "Price & safety FAQ", external: false },
  { href: "/cheats/", label: "All cheat pages", external: false },
  { href: "/compare/", label: "Compare 2026", external: false },
  { href: "/cheats/esp/", label: "ESP details", external: false },
  { href: "/cheats/aimbot/", label: "Aimbot details", external: false },
  { href: "/cheats/radar/", label: "Radar details", external: false },
  { href: "/cheats/cloud-dma/", label: "Cloud DMA details", external: false },
  { href: "/blog/hunt-showdown-esp-guide/", label: "ESP setup guide", external: false },
  { href: "/blog/cloud-dma-explained/", label: "DMA compatibility", external: false },
  { href: ZADEYO_CHECKOUT_URL, label: "Checkout suite", external: true },
];

/** Handbook §07 — related routes on transactional pages */
export default function RelatedRoutes() {
  return (
    <section className="mt-16 border-t border-[var(--color-border)] pt-12" aria-labelledby="related-routes-heading">
      <p id="related-routes-heading" className="display-heading mb-6 text-xl text-[var(--color-text)]">
        Related Hunt Showdown cheat resources
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {RELATED_ROUTES.map((route) => (
          <li key={`${route.href}-${route.label}`}>
            {route.external ? (
              <a
                href={route.href}
                className="block rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-purple)] hover:text-[var(--color-purple-light)]"
                rel="noopener noreferrer"
                target="_blank"
              >
                {route.label}
              </a>
            ) : (
              <Link
                href={route.href}
                className="block rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-purple)] hover:text-[var(--color-purple-light)]"
              >
                {route.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
