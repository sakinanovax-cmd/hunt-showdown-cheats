import Image from "next/image";
import Link from "next/link";
import { HERO_SIDE_IMAGES } from "@/lib/assets";

export default function HeroSideImages() {
  const current = HERO_SIDE_IMAGES[0];

  return (
    <div className="hero-side-images w-full max-w-[min(100%,420px)] sm:max-w-[460px] lg:max-w-[480px]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="font-mono-label text-[var(--color-purple-light)]">Live overlay preview</p>
      </div>

      <figure className="hero-side-image-card overflow-hidden rounded-xl border border-[rgba(168,85,247,0.28)] bg-[rgba(12,10,16,0.85)] shadow-[0_20px_56px_rgba(6,4,9,0.65)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover object-[center_58%]"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 460px, 480px"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,4,9,0.75)] via-transparent to-transparent" />

          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3">
            <div>
              <span className="font-mono-label mb-1 block text-[10px] text-[var(--color-purple-light)]">
                {current.label}
              </span>
              <span className="text-sm font-semibold text-[var(--color-text)]">{current.caption}</span>
            </div>
            {current.href && (
              <Link
                href={current.href}
                className="shrink-0 rounded-full border border-[rgba(168,85,247,0.35)] bg-[rgba(168,85,247,0.12)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-purple-light)] transition-colors hover:bg-[rgba(168,85,247,0.22)]"
              >
                View
              </Link>
            )}
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
