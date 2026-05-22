import type { ReactNode } from "react";
import { Button } from "./Button";

/*
 * Reusable hero (homepage + detail pages). Light, blue-tinted background,
 * dark text. Composition (adapted skeleton, not the 21st output): eyebrow →
 * large headline with one blue accent word → subheadline → primary +
 * optional secondary CTA → optional supporting note. No fake metrics,
 * no neon, single blue primary CTA.
 *
 * `accentWord` (optional) is coloured brand-blue inside the headline.
 */
export function HeroSection({
  eyebrow,
  headline,
  accentWord,
  subheadline,
  ctaText,
  ctaUrl,
  secondaryText,
  secondaryUrl,
  note,
  ctaLocation = "hero",
  media,
}: {
  eyebrow?: string;
  headline: string;
  accentWord?: string;
  subheadline: string;
  ctaText: string;
  ctaUrl: string;
  secondaryText?: string;
  secondaryUrl?: string;
  note?: string;
  ctaLocation?: string;
  media?: ReactNode;
}) {
  const renderHeadline = () => {
    if (!accentWord || !headline.includes(accentWord)) return headline;
    const [before, after] = headline.split(accentWord);
    return (
      <>
        {before}
        <span className="text-brand-light">{accentWord}</span>
        {after}
      </>
    );
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(60%_55%_at_50%_0%,rgba(25,118,210,0.18),transparent_70%),linear-gradient(180deg,#070B14,#05070D)] px-5 pb-14 pt-28 sm:px-8 md:pb-16 md:pt-32"
    >
      <div
        className={`mx-auto grid w-full max-w-6xl items-center gap-12 ${
          media ? "md:grid-cols-2" : "max-w-3xl text-center"
        }`}
      >
        <div className={media ? "" : "mx-auto"}>
          {eyebrow && (
            <p className="mb-4 inline-flex items-center rounded-full border border-[#1976D2]/30 bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-light">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {renderHeadline()}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted">
            {subheadline}
          </p>
          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row ${
              media ? "" : "justify-center"
            }`}
          >
            <Button href={ctaUrl} ctaLabel="hero" ctaLocation={ctaLocation}>
              {ctaText}
            </Button>
            {secondaryText && secondaryUrl && (
              <Button
                href={secondaryUrl}
                variant="secondary"
                ctaLabel="hero_secondary"
                ctaLocation={ctaLocation}
              >
                {secondaryText}
              </Button>
            )}
          </div>
          {note && (
            <p className={`mt-5 text-sm text-fg-soft ${media ? "" : ""}`}>
              {note}
            </p>
          )}
        </div>
        {media && <div className="relative">{media}</div>}
      </div>
    </section>
  );
}
