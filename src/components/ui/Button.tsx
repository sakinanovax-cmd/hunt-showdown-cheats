"use client";

import Link from "next/link";
import { ZADEYO_CHECKOUT_URL } from "@/lib/site";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "btn-primary-gradient border border-[var(--color-purple)] text-white hover:border-[var(--color-purple-light)]",
  secondary:
    "border border-[var(--color-border-subtle)] bg-[rgba(12,10,16,0.6)] backdrop-blur-sm text-[var(--color-text)] hover:border-[var(--color-purple)] hover:bg-[rgba(168,85,247,0.08)] hover:text-[var(--color-purple-light)] hover:shadow-[0_0_24px_rgba(168,85,247,0.12)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-purple-light)]",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold uppercase tracking-widest transition-all duration-300";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("#");
    if (isExternal) {
      return (
        <a
          href={href}
          className={styles}
          aria-label={ariaLabel}
          onClick={onClick}
          {...(href.startsWith("http")
            ? { rel: "noopener noreferrer", target: "_blank" }
            : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export function PurchaseButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      href={ZADEYO_CHECKOUT_URL}
      className={className}
      ariaLabel="Buy Hunt Showdown cheats on Zadeyo"
    >
      {children}
    </Button>
  );
}
