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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[var(--color-border)] bg-black">
        <Image
          src={ZADEYO_ASSETS.logo}
          alt={`${SITE_NAME} logo`}
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
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
