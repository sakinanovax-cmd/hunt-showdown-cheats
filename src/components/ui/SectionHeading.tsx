interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  headingId?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  className = "",
  as: Tag = "h2",
  headingId,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const wrapAlign = align === "center" ? "" : "text-left";

  return (
    <header className={`mb-12 max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && <p className="section-label mb-4">{eyebrow}</p>}
      <div className={`section-title-wrap ${wrapAlign}`}>
        <Tag id={headingId} className="ref-section-title">
          {heading}
        </Tag>
      </div>
      {description && (
        <p className="prose-body mx-auto mt-6 max-w-2xl">{description}</p>
      )}
    </header>
  );
}
