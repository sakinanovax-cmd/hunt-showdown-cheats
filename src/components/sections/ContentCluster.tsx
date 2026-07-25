import Link from "next/link";
import { BLOG_ARTICLES } from "@/lib/blog-articles";
import SectionHeading from "@/components/ui/SectionHeading";
import { ZADEYO_CHECKOUT_URL } from "@/lib/site";

/** Handbook §18 — hub page routes users through the Hunt Showdown cheats topic cluster */
export default function ContentCluster() {
  const guides = BLOG_ARTICLES.slice(0, 6);

  return (
    <section id="cheat-guides-cluster" className="py-[var(--section-py)] grid-bg" aria-labelledby="cluster-heading">
      <div className="container-dnd">
        <SectionHeading
          eyebrow="Topic cluster"
          heading="Hunt Showdown Cheats — Guides, Setup & Comparisons"
          description="Learn, compare, and buy Hunt Showdown cheats. Each guide covers one intent — then move to pricing when ready."
          headingId="cluster-heading"
        />
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="card-surface p-6 md:col-span-1">
            <h3 className="display-heading mb-3 text-lg text-[var(--color-purple-light)]">Hub</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[var(--color-text-secondary)] hover:text-[var(--color-purple-light)]">
                  Hunt Showdown Cheats overview
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-[var(--color-text-secondary)] hover:text-[var(--color-purple-light)]">
                  Full cheat feature list
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-[var(--color-text-secondary)] hover:text-[var(--color-purple-light)]">
                  Hunt Showdown cheats FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-surface p-6 md:col-span-1">
            <h3 className="display-heading mb-3 text-lg text-[var(--color-purple-light)]">Guides</h3>
            <ul className="space-y-2 text-sm">
              {guides.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}/`}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-purple-light)]"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-6 md:col-span-1">
            <h3 className="display-heading mb-3 text-lg text-[var(--color-purple-light)]">Buy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={ZADEYO_CHECKOUT_URL}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-purple-light)]"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Hunt Showdown cheats pricing
                </a>
              </li>
              <li>
                <a
                  href={ZADEYO_CHECKOUT_URL}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-purple-light)]"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Monthly &amp; lifetime plans
                </a>
              </li>
              <li>
                <Link
                  href="/blog/best-hunt-showdown-cheat-comparison-2026/"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-purple-light)]"
                >
                  Hunt Showdown cheat comparison 2026
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
