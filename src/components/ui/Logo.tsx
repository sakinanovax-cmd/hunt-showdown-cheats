import Image from "next/image";
import { ZADEYO_ASSETS } from "@/lib/assets";
import { SITE_NAME } from "@/lib/site";

interface LogoProps {
  className?: string;
  showProductName?: boolean;
}

export default function Logo({ className = "", showProductName = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--color-border)] bg-[rgba(168,85,247,0.12)]">
        <Image
          src={ZADEYO_ASSETS.logo}
          alt={showProductName ? "" : `${SITE_NAME} logo`}
          width={22}
          height={26}
          className="h-5 w-auto"
          priority
        />
      </span>
      {showProductName && (
        <span className="font-display text-xl tracking-[0.06em] text-[var(--color-purple-light)] sm:text-2xl">
          {SITE_NAME.toUpperCase()}
        </span>
      )}
    </span>
  );
}
