import { Button } from "./Button";

/*
 * Závěrečná konverzní sekce před footerem — jednotný pattern napříč webem
 * (sjednocení 2026-05-25). Žádné full-width modré lišty; místo toho dark
 * elevated panel s jemným dark-blue gradientem, subtle border, decentní
 * blue glow shadow a primární brand-blue CTA. Outer section je průhledná,
 * ať plynule navazuje na dark page bg a footer.
 *
 * Inner panel:
 *  - max-w-4xl, rounded-3xl, border white/10
 *  - bg linear-gradient #0A1430 → #0D2658 → #0A1430 (jemný blue depth)
 *  - shadow blue-tinted, ne neon
 *  - padding scale s viewport
 *  - radial blue glow at top (decentní, max 22 % opacity)
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
    <section className="px-5 pb-20 pt-4 sm:px-8">
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#0A1430_0%,#0D2658_55%,#0A1430_100%)] px-6 py-12 text-center shadow-[0_30px_80px_-30px_rgba(13,71,161,0.55)] sm:px-10 sm:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(25,118,210,0.22),transparent_70%)]"
        />
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-[2rem]">
          {title}
        </h2>
        {lead && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            {lead}
          </p>
        )}
        <div className="mt-8 flex justify-center">
          <Button
            href={ctaUrl}
            ctaLabel="cta_band"
            ctaLocation={ctaLocation}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
