import Link from "next/link";
import { getCheatBySlug } from "@/lib/cheats";

export default function RelatedCheatPages({ slugs }: { slugs: string[] }) {
  const cheats = slugs
    .slice(0, 3)
    .map((slug) => getCheatBySlug(slug))
    .filter(Boolean);

  if (cheats.length === 0) return null;

  return (
    <section className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6" aria-labelledby="related-cheats">
      <h2 id="related-cheats" className="display-heading mb-4 text-xl text-[var(--color-text)]">
        Hunt Showdown cheat pages
      </h2>
      <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
        Buy and compare these Hunt Showdown cheat features — ESP, aimbot, wallhack, and radar from $35/mo.
      </p>
      <ul className="grid gap-3 sm:grid-cols-3">
        {cheats.map((cheat) => (
          <li key={cheat!.slug}>
            <Link
              href={`/cheats/${cheat!.slug}/`}
              className="block rounded-lg border border-[var(--color-border-subtle)] px-4 py-3 text-sm font-medium text-[var(--color-purple-light)] transition-colors hover:border-[var(--color-purple)] hover:bg-[rgba(168,85,247,0.08)]"
            >
              {cheat!.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
