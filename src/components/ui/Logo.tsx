import Image from "next/image";
import { ZADEYO_ASSETS } from "@/lib/assets";

interface LogoProps {
  className?: string;
  showProductName?: boolean;
}

/** Zadeyo mark only — no "Zadeyo" text (brand word removed from site copy). */
export default function Logo({ className = "", showProductName = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[var(--color-border)] bg-black">
        <Image
          src={ZADEYO_ASSETS.logo}
          alt="Hunt Showdown Cheats"
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
          priority
        />
      </span>
      {showProductName && (
        <span className="font-display text-base leading-tight tracking-[0.03em] sm:text-lg">
          <span className="block text-[var(--color-text)]">Hunt Showdown</span>
          <span className="block text-[var(--color-purple-light)]">Cheats</span>
        </span>
      )}
    </span>
  );
}
