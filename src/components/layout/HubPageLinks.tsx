import Link from "next/link";

const HUB_PAGES = [
  { href: "/cheats/", label: "Cheats hub", key: "cheats" as const },
  { href: "/buy/", label: "Buy plans", key: "buy" as const },
  { href: "/compare/", label: "Compare tools", key: "compare" as const },
  { href: "/faq/", label: "FAQ hub", key: "faq" as const },
  { href: "/video/", label: "Video demo", key: "video" as const },
];

type HubKey = (typeof HUB_PAGES)[number]["key"];

interface HubPageLinksProps {
  current?: HubKey;
  className?: string;
}

/** Cross-links between high-priority SEO hub pages. */
export default function HubPageLinks({ current, className = "" }: HubPageLinksProps) {
  return (
    <nav
      aria-label="Main Hunt Showdown cheat pages"
      className={`mb-10 flex flex-wrap gap-2 ${className}`.trim()}
    >
      {HUB_PAGES.map((page) => {
        const isCurrent = current === page.key;
        return (
          <Link
            key={page.key}
            href={page.href}
            aria-current={isCurrent ? "page" : undefined}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isCurrent
                ? "border-[var(--color-purple)] bg-[rgba(168,85,247,0.15)] text-[var(--color-purple-light)]"
                : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-purple)] hover:text-[var(--color-purple-light)]"
            }`}
          >
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
}
