"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";
import type { FAQItem } from "@/types";

interface FAQProps {
  items?: FAQItem[];
  hideHeading?: boolean;
  heading?: string;
  description?: string;
  /** band = homepage-style section; inline = dedicated FAQ page (no full-width band) */
  variant?: "band" | "inline";
  showFullPageLink?: boolean;
}

export default function FAQ({
  items = FAQ_ITEMS,
  hideHeading = false,
  heading = "Hunt Showdown Cheats — FAQ",
  description = "Answers about Hunt Showdown cheats — price, ESP, aimbot, wallhack, Cloud DMA, streaming, and compatibility.",
  variant = "band",
  showFullPageLink = false,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionClass =
    variant === "inline"
      ? "relative py-0"
      : "relative py-[var(--section-py)] bg-[var(--color-surface)]";

  const wrapperClass = variant === "inline" ? "" : "container-dnd";

  return (
    <section id="faq" className={sectionClass}>
      <div className={wrapperClass}>
        {!hideHeading && (
          <SectionHeading
            eyebrow="FAQ"
            heading={heading}
            description={description}
          />
        )}

        <div className={`mx-auto max-w-3xl space-y-3 ${hideHeading ? "" : ""}`}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`card-surface overflow-hidden transition-shadow duration-300 ${
                  isOpen ? "shadow-[0_0_32px_rgba(168,85,247,0.12)]" : ""
                }`}
              >
                <div className="m-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-[var(--color-text)]">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[var(--color-purple)] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div
                  className="accordion-content"
                  data-open={isOpen}
                >
                  <div className="accordion-inner">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showFullPageLink && (
          <p className="mx-auto mt-8 max-w-3xl text-center">
            <Link
              href="/faq/"
              className="text-sm font-medium text-[var(--color-purple-light)] underline-offset-2 hover:underline"
            >
              More FAQ answers
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
