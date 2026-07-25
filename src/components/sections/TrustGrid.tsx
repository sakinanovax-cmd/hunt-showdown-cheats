import SectionHeading from "@/components/ui/SectionHeading";
import { TRUST_SECTIONS } from "@/lib/constants";
import { Shield, Layers, Headphones, Sparkles } from "lucide-react";

const icons = [Shield, Layers, Headphones, Sparkles];

export default function TrustGrid() {
  return (
    <section className="py-[var(--section-py)] grid-bg">
      <div className="container-dnd">
        <div className="grid gap-8 md:grid-cols-2">
          {TRUST_SECTIONS.map((section, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="card-surface p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="text-[var(--color-purple)]" size={22} />
                  <p className="section-label">{section.eyebrow}</p>
                </div>
                <h3 className="display-heading mb-4 text-xl text-[var(--color-text)]">
                  {section.heading}
                </h3>
                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
