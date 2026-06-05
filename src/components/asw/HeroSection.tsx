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
  pills,
  wide = false,
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
  /** Optional short list of concrete use-cases rendered as pill chips below
      the CTA — used on service detail pages to clarify what the service is
      in real terms (e.g. /automatizace). */
  pills?: readonly string[];
  /** When true, widens the hero container from max-w-6xl to max-w-7xl so
      both columns (text + media) gain horizontal presence on big desktops. */
  wide?: boolean;
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
      className="relative overflow-hidden bg-[#05070D] px-5 pb-14 pt-24 sm:px-8 md:pb-16 md:pt-24"
    >
      {/* Background rhythm shared with HomeHero — same base #05070D, same
          radial blue glows behind the H1 and at the bottom, faint dot grid
          masked to the top, soft bottom vignette. Keeps inner pages in one
          visual system with the homepage. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(46%_36%_at_50%_4%,rgba(25,118,210,0.32),transparent_70%),radial-gradient(36%_36%_at_10%_72%,rgba(13,71,161,0.18),transparent_70%),radial-gradient(48%_30%_at_50%_94%,rgba(25,118,210,0.22),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_at_50%_22%,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-black/40"
      />

      <div
        className={`mx-auto grid w-full items-center gap-12 ${
          wide ? "max-w-7xl" : "max-w-6xl"
        } ${media ? "md:grid-cols-2" : "max-w-3xl text-center"}`}
      >
        <div className={media ? "" : "mx-auto"}>
          {/* The page-category eyebrow pill ("Lokální SEO", "Webové stránky",
              …) duplicated the active nav item and added visual noise above
              the H1, so it's no longer rendered. The `eyebrow` prop stays in
              the interface so existing callers don't break. */}
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
          {pills && pills.length > 0 && (
            <ul
              role="list"
              className={`mt-6 flex flex-wrap gap-2 ${
                media ? "" : "justify-center"
              }`}
            >
              {pills.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-fg-muted"
                >
                  {pill}
                </li>
              ))}
            </ul>
          )}
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
