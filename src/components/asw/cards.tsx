import Link from "next/link";
import { Icon, CheckIcon } from "./icons";
import { Button } from "./Button";

/* Shared reusable cards — dark premium. Surface backgrounds, white/10 borders,
   blue-light accents (readable on dark), subtle dark shadow. */

export function ServiceCard({
  icon,
  title,
  description,
  linkText,
  linkUrl,
}: {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-md transition-all hover:border-[#1976D2]/40 hover:bg-surface-elevated">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-fg-muted">{description}</p>
      <Link
        href={linkUrl}
        className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-light hover:text-white"
        data-cta-label="services"
        data-cta-location="services"
      >
        {linkText}
        <Icon name="arrow-right" className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-md">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-lg font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-muted">
        {description}
      </p>
    </div>
  );
}

export function ProcessStep({
  stepNumber,
  title,
  description,
}: {
  stepNumber: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-2xl border border-border bg-surface p-6 shadow-md">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
        {stepNumber}
      </span>
      <h3 className="mt-4 font-display text-lg font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-muted">
        {description}
      </p>
    </div>
  );
}

export function TestimonialCard({
  text,
  authorName,
  authorRole,
}: {
  text: string;
  authorName?: string | null;
  authorRole?: string | null;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-md">
      <blockquote className="flex-1 leading-relaxed text-foreground">
        {`„${text}"`}
      </blockquote>
      <figcaption className="mt-5 text-sm text-fg-muted">
        {authorName ? (
          <>
            <span className="font-semibold text-foreground">{authorName}</span>
            {authorRole ? ` · ${authorRole}` : ""}
          </>
        ) : (
          <span className="italic text-fg-soft">Princip naší spolupráce</span>
        )}
      </figcaption>
    </figure>
  );
}

export function PricingCard({
  planName,
  price,
  priceNote,
  tagline,
  features,
  isFeatured,
  badge,
  ctaText,
  ctaUrl,
}: {
  planName: string;
  price: string;
  /** Small, less-prominent line under the price (e.g. "Včetně prvního roku
      provozu."). Optional — cards without it render unchanged. */
  priceNote?: string;
  tagline?: string;
  features: readonly string[];
  isFeatured?: boolean;
  badge?: string;
  ctaText: string;
  ctaUrl: string;
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl bg-surface p-7 ${
        isFeatured
          ? "border-2 border-[#1976D2]/60 shadow-[0_28px_70px_-26px_rgba(25,118,210,0.55)]"
          : "border border-border shadow-md"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-foreground">
        {planName}
      </h3>
      {tagline && <p className="mt-1 text-sm text-fg-soft">{tagline}</p>}
      <p className="mt-4 font-display text-2xl font-extrabold text-brand-light">
        {price}
      </p>
      {priceNote && (
        <p className="mt-1.5 text-sm text-fg-muted">{priceNote}</p>
      )}
      <ul role="list" className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-fg-muted">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7">
        <Button
          href={ctaUrl}
          variant={isFeatured ? "primary" : "secondary"}
          ctaLabel="pricing"
          ctaLocation="pricing"
          className="w-full"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
}
