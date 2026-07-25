import Link from "next/link";
import FooterSetupMarquee from "@/components/layout/FooterSetupMarquee";
import { FOOTER_LINKS } from "@/lib/constants";
import {
  DISCLAIMER,
  LAST_CONTENT_REVIEW,
  SITE_NAME,
  ZADEYO_CHECKOUT_URL,
} from "@/lib/site";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)]">
      <FooterSetupMarquee />

      <div className="container-dnd py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Hunt Showdown cheats — ESP, aimbot &amp; wallhack with stream-proof mode, Cloud DMA,
              and instant Zadeyo delivery after checkout.
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              Last meaningful content review: {LAST_CONTENT_REVIEW}
            </p>
          </div>
          <div>
            <h3 className="font-mono-label mb-4 text-[var(--color-text)]">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">
                  Hunt Showdown Cheats home
                </Link>
              </li>
              {FOOTER_LINKS.shop.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={ZADEYO_CHECKOUT_URL}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Checkout store
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono-label mb-4 text-[var(--color-text)]">Guides</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.guides.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono-label mb-4 text-[var(--color-text)]">Trust</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.trust.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-divider my-10" />
        <div className="space-y-3 text-center text-xs text-[var(--color-text-muted)]">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}.{" "}
            <a href="/rss.xml" className="hover:text-[var(--color-purple-light)]">
              RSS
            </a>
          </p>
          <p>{DISCLAIMER}</p>
        </div>
      </div>
    </footer>
  );
}
