import { Button } from "./Button";

/*
 * Reusable conversion band. Solid primary-blue background, white text, single
 * primary CTA rendered as a white button (high contrast on blue). Optional
 * secondary ghost link. Used near the bottom of detail pages before the
 * footer. Blue-only palette — no orange (CLAUDE.md §7).
 */
export function CtaSection({
  title,
  lead,
  ctaText,
  ctaUrl,
  ctaLocation = "cta_band",
}: {
  title: string;
  lead?: string;
  ctaText: string;
  ctaUrl: string;
  ctaLocation?: string;
}) {
  return (
    <section className="bg-[linear-gradient(135deg,#0D47A1_0%,#1E5FBF_100%)] px-5 py-16 sm:px-8 md:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-[2rem]">
          {title}
        </h2>
        {lead && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            {lead}
          </p>
        )}
        <div className="mt-8">
          <Button
            href={ctaUrl}
            variant="secondary"
            ctaLabel="cta_band"
            ctaLocation={ctaLocation}
            className="border-white/70 hover:border-white"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
