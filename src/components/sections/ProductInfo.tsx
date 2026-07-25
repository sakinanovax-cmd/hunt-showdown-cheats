import SectionHeading from "@/components/ui/SectionHeading";
import { PRODUCT_INFO } from "@/lib/constants";

export default function ProductInfo() {
  return (
    <section id="product-info" className="py-[var(--section-py)] bg-[var(--color-surface)]">
      <div className="container-dnd">
        <SectionHeading
          eyebrow={PRODUCT_INFO.eyebrow}
          heading={PRODUCT_INFO.heading}
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {PRODUCT_INFO.paragraphs.map((p, i) => (
            <div key={i} className="card-surface p-6">
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
