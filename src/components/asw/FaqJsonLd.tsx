/*
 * FAQPage JSON-LD. Emit ONLY on pages that render the matching FAQ content
 * visibly (the <Faq> accordion keeps every Q/A in the DOM), so the structured
 * data always mirrors what the user sees — no hidden/fake schema. No review or
 * rating schema anywhere.
 */
export function FaqJsonLd({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
