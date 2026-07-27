import { getCanonicalUrl, SITE_PRIMARY_KEYWORD } from "@/lib/site";

const SHARE_TEXT = `${SITE_PRIMARY_KEYWORD} — ESP, aimbot & wallhack by Zadeyo`;

export default function SocialShare({ path = "/" }: { path?: string }) {
  const url = encodeURIComponent(getCanonicalUrl(path));
  const text = encodeURIComponent(SHARE_TEXT);

  const links = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    },
    {
      label: "Reddit",
      href: `https://www.reddit.com/submit?url=${url}&title=${text}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
  ] as const;

  return (
    <nav aria-label="Share this page" className="flex flex-wrap items-center gap-3">
      <span className="font-mono-label text-[var(--color-text-muted)]">Share</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[var(--color-purple-light)] transition-colors hover:border-[var(--color-purple)] hover:bg-[rgba(168,85,247,0.1)]"
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
