interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

function stripContext(schema: Record<string, unknown>): Record<string, unknown> {
  const { "@context": _removed, ...rest } = schema;
  return rest;
}

export default function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  const payload =
    items.length === 1 && !Array.isArray(data)
      ? items[0]
      : {
          "@context": "https://schema.org",
          "@graph": items.map(stripContext),
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
