import Image from "next/image";
import { Check } from "lucide-react";
import { WHY_CHOOSE, WHY_CHOOSE_BULLETS, WHY_CHOOSE_CARDS } from "@/lib/constants";
import { DISCLAIMER, ZADEYO_CHECKOUT_URL } from "@/lib/site";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="section-band py-[var(--section-py)]">
      <div className="container-dnd">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label mb-4">Why choose us</p>
            <h2 className="ref-section-title mb-6">
              Why choose{" "}
              <span className="text-[var(--color-purple-light)]">Zadeyo?</span>
            </h2>
            <p className="mb-8 text-[var(--color-text-secondary)] leading-relaxed">
              {WHY_CHOOSE.paragraphs[0]}
            </p>
            <p className="mb-8 text-[var(--color-text-secondary)] leading-relaxed">
              {WHY_CHOOSE.paragraphs[1]}{" "}
              <a
                href={ZADEYO_CHECKOUT_URL}
                className="text-[var(--color-purple-light)] hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Hunt Showdown cheats pricing
              </a>
              .
            </p>
            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {WHY_CHOOSE_BULLETS.map((item) => (
                <li key={item} className="ref-check-item">
                  <Check size={16} className="ref-check-icon" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="rounded-xl border border-[var(--color-border-subtle)] bg-[rgba(12,10,16,0.5)] p-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {DISCLAIMER}
            </p>
          </div>

          <div className="grid gap-5">
            {WHY_CHOOSE_CARDS.map((card) => (
              <article key={card.title} className="ref-image-card">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
                <div className="ref-image-card-overlay" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="font-mono-label mb-2 text-[var(--color-purple-light)]">{card.eyebrow}</p>
                  <h3 className="font-display text-xl uppercase tracking-wide text-[var(--color-text)] md:text-2xl">
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
