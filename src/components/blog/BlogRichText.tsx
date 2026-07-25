import Link from "next/link";

const MARKDOWN_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

const linkClassName =
  "font-medium text-[var(--color-purple-light)] underline-offset-2 hover:underline";

export function BlogRichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const regex = new RegExp(MARKDOWN_LINK.source, "g");
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [, label, href] = match;
    if (href.startsWith("http")) {
      parts.push(
        <a
          key={`${match.index}-${href}`}
          href={href}
          className={linkClassName}
          rel="noopener noreferrer"
          target="_blank"
        >
          {label}
        </a>,
      );
    } else {
      parts.push(
        <Link key={`${match.index}-${href}`} href={href} className={linkClassName}>
          {label}
        </Link>,
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
