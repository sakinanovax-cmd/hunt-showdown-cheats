import Image from "next/image";
import Link from "next/link";
import { PRODUCT_INFO } from "@/lib/constants";
import { GAMEPLAY_GALLERY } from "@/lib/assets";

export default function VideoShowcase() {
  return (
    <section id="product-info" className="section-band py-[var(--section-py)]" aria-labelledby="showcase-heading">
      <div className="container-dnd relative">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="section-label mb-4">Gameplay gallery</p>
            <div className="section-title-wrap">
              <p id="showcase-heading" className="ref-section-title">
                Hunt Showdown Cheats — In-Game Screenshots
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {GAMEPLAY_GALLERY.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[rgba(12,10,16,0.6)] shadow-[0_16px_48px_rgba(6,4,9,0.5)]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-[center_58%]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="border-t border-[var(--color-border-subtle)] px-4 py-3">
                  <span className="font-mono-label mb-1 block text-[var(--color-purple-light)]">{item.label}</span>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 text-center">
            <Link href="/cheats/" className="text-sm font-medium text-[var(--color-purple-light)] hover:underline">
              See full cheat list
            </Link>
          </p>

          <div className="mt-12 space-y-6 rounded-2xl border border-[var(--color-border)] bg-[rgba(168,85,247,0.06)] p-8 text-center backdrop-blur-sm">
            <p className="ref-card-title text-[var(--color-text)]">{PRODUCT_INFO.heading}</p>
            {PRODUCT_INFO.paragraphs.map((p, i) => (
              <p key={i} className="prose-body mx-auto max-w-3xl">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
