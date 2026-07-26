import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GAMEPLAY_GALLERY, REFERENCE_MEDIA } from "@/lib/assets";

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
}

export default function GameplayGallery() {
  return (
    <section className="relative border-y border-[var(--color-border-subtle)] py-[var(--section-py)]">
      <div className="absolute inset-0 bg-[var(--color-surface)]" aria-hidden="true" />
      <div className="container-dnd relative">
        <div className="mb-12 text-center">
          <p className="section-label mb-4">In-game visuals</p>
          <div className="section-title-wrap">
            <p className="ref-section-title">Hunt Showdown — Real Gameplay</p>
          </div>
          <p className="prose-body mx-auto mt-6 max-w-2xl">
            Bayou atmosphere, ESP overlays, and the kind of hunter awareness Zadeyo cheats are built for.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {GAMEPLAY_GALLERY.map((item) => (
            <article
              key={item.label}
              className="group ref-image-card relative min-h-[280px] overflow-hidden md:min-h-[320px]"
            >
              <GalleryImage src={item.src} alt={item.alt} />
              <div className="ref-image-card-overlay" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <span className="font-mono-label mb-2 inline-flex rounded-full border border-[rgba(168,85,247,0.35)] bg-[rgba(6,4,9,0.65)] px-2.5 py-1 text-[var(--color-purple-light)] backdrop-blur-sm">
                  {item.label}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={REFERENCE_MEDIA.redditAntiCheatGuide}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[rgba(168,85,247,0.08)] px-5 py-2.5 text-sm font-medium text-[var(--color-purple-light)] backdrop-blur-sm transition-colors hover:border-[var(--color-purple)] hover:bg-[rgba(168,85,247,0.14)]"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Reddit anti-cheat guide
          </a>
        </div>
      </div>
    </section>
  );
}
