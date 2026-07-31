"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { PurchaseButton } from "@/components/ui/Button";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import Logo from "@/components/ui/Logo";

function NavItem({
  href,
  label,
  active,
  className,
}: {
  href: string;
  label: string;
  active: boolean;
  className: string;
}) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
        {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-purple)]" />}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
      {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-purple)]" />}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("http")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`navbar-glass fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "navbar-scrolled h-16 border-[var(--color-border)]"
          : "h-20 border-transparent bg-gradient-to-b from-[rgba(6,4,9,0.88)] to-transparent"
      }`}
    >
      <div className="container-dnd grid h-full grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="Hunt Showdown Cheats home" className="min-w-0 justify-self-start">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex lg:justify-self-center" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.label}
              href={link.href}
              label={link.label}
              active={isActive(link.href)}
              className={`relative whitespace-nowrap text-sm font-medium tracking-wide transition-colors ${
                isActive(link.href)
                  ? "text-[var(--color-text)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-purple-light)]"
              }`}
            />
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-3 lg:flex">
          <LanguageSwitcher />
          <PurchaseButton className="btn-primary-gradient rounded-full px-5 py-2.5 text-xs">
            Get Access
          </PurchaseButton>
        </div>

        <div className="col-start-2 flex items-center justify-self-end gap-1 lg:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="touch-target rounded-lg p-2 text-[var(--color-text)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="navbar-scrolled navbar-mobile-panel border-t border-[var(--color-border)] lg:hidden"
        >
          <nav className="container-dnd flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              const className = `touch-target flex items-center rounded-lg px-3 py-2.5 text-base font-medium ${
                active
                  ? "bg-[rgba(168,85,247,0.12)] text-[var(--color-purple-light)]"
                  : "text-[var(--color-text-secondary)]"
              }`;

              if (link.href.startsWith("http")) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={className}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link key={link.label} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
            <PurchaseButton className="touch-target mt-3 w-full justify-center rounded-full">
              Get Access
            </PurchaseButton>
          </nav>
        </div>
      )}
    </header>
  );
}
