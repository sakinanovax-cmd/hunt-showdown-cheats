import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/layout/PageMain";
import { META_DESCRIPTIONS } from "@/lib/seo-descriptions";
import { META_TITLES } from "@/lib/seo-titles";
import { ZADEYO_CHECKOUT_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: META_TITLES.notFound,
  description: META_DESCRIPTIONS.notFound,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <PageMain className="page-shell--centered">
        <div className="container-dnd text-center">
          <p className="section-label mb-4">404</p>
          <h1 className="display-heading mb-4 text-4xl text-[var(--color-text)] md:text-5xl">
            Page not found
          </h1>
          <p className="prose-body mx-auto mb-8 max-w-lg">
            This page does not exist. Return to our Hunt Showdown cheats homepage, read setup guides, or
            buy Hunt Showdown cheats.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--color-purple)] bg-[var(--color-purple)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[var(--color-purple-dark)]"
            >
              Hunt Showdown Cheats Home
            </Link>
            <a
              href={ZADEYO_CHECKOUT_URL}
              className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border-subtle)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text)] transition-colors hover:border-[var(--color-purple)] hover:text-[var(--color-purple-light)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy Hunt Showdown Cheats
            </a>
            <Link
              href="/blog/"
              className="text-sm text-[var(--color-text-secondary)] underline-offset-2 hover:text-[var(--color-purple-light)] hover:underline"
            >
              Cheat guides
            </Link>
          </div>
        </div>
      </PageMain>
      <Footer />
    </>
  );
}
