import SectionHeading from "@/components/ui/SectionHeading";
import { Palette } from "lucide-react";

export default function CustomColors() {
  return (
    <section className="py-[var(--section-py)] bg-[var(--color-surface)]">
      <div className="container-dnd">
        <SectionHeading
          eyebrow="Misc"
          heading="Customizable Hunt Showdown cheat ESP colors"
          description="Dial in cheat overlay colors for players, loot, bosses, and extracts so ESP stays clear in fog, firelight, and night fights."
        />
        <div className="mx-auto max-w-2xl">
          <div className="card-surface p-8 text-center">
            <Palette className="mx-auto mb-4 text-[var(--color-purple)]" size={32} />
            <p className="mb-3 text-lg font-semibold">Customizable ESP Colors</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Tune every ESP color to stay readable in bayou fog, torch light, or crowded compound fights.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: "Players", color: "#ef4444" },
              { label: "Loot", color: "#fbbf24" },
              { label: "Bosses", color: "#a855f7" },
              { label: "Extracts", color: "#22d3ee" },
              { label: "Radar", color: "#4ade80" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-xs text-[var(--color-text-secondary)]"
              >
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
