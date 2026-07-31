import SectionHeading from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="py-[var(--section-py)] grid-bg">
      <div className="container-dnd">
        <SectionHeading
          eyebrow="How It Works"
          heading="How to Install Hunt Showdown Cheats"
          description="Buy Hunt Showdown cheats online, set up Cloud DMA, load the cheat, and enable ESP, aimbot & wallhack in-game."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.number} className="card-surface p-8 text-center">
              <p className="step-number mb-4">{step.number}</p>
              <p className="display-heading mb-4 text-lg text-[var(--color-text)]">
                {step.title}
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
