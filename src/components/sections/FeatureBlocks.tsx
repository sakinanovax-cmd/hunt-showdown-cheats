import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURE_BLOCKS } from "@/lib/constants";
import { ZADEYO_ASSETS } from "@/lib/assets";

export default function FeatureBlocks() {
  return (
    <section id="features" className="py-[var(--section-py)] bg-[var(--color-surface)]">
      <div className="container-dnd space-y-20">
        {FEATURE_BLOCKS.map((block, idx) => (
          <div key={idx}>
            <SectionHeading eyebrow={block.eyebrow} heading={block.heading} />
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-xl font-semibold text-[var(--color-purple-light)]">{block.subheading}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed md:text-lg">{block.description}</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{block.extra}</p>
              </div>
              <div className="card-surface overflow-hidden">
                <Image
                  src={ZADEYO_ASSETS.screenshotBanner}
                  alt={`${block.subheading} — Hunt Showdown cheat preview`}
                  width={1200}
                  height={425}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
