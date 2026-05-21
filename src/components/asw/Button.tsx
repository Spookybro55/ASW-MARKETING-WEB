import Link from "next/link";
import type { ReactNode } from "react";

/*
 * AutoSmartWeby CTA button. Blue-only palette (CLAUDE.md §7 — no orange).
 *   - primary:   solid primary blue, white text, hover darker blue
 *   - secondary: white/transparent, blue border + text, hover soft-blue bg
 *   - ghost:     text + arrow, no box (inline "Zjistit více" links)
 *
 * Renders next/link for internal routes ("/..."), a plain <a> for tel:,
 * mailto: and external links. CTA analytics piggybacks on the existing
 * data-cta-label contract (AnalyticsEvents.tsx) — pass `ctaLabel`/`ctaLocation`.
 */
type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-hover shadow-sm hover:shadow-md border border-transparent",
  secondary:
    "bg-white/[0.04] text-white border border-white/25 hover:bg-white/[0.08] hover:border-white/40",
  ghost:
    "bg-transparent text-brand-light hover:text-white px-0 py-0 shadow-none gap-1.5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-6 py-3 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  ctaLabel,
  ctaLocation,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  ctaLabel?: string;
  ctaLocation?: string;
  className?: string;
  ariaLabel?: string;
}) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const sizeClass = variant === "ghost" ? "" : sizes[size];
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
    "font-display transition-colors duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]",
    variants[variant],
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const dataProps = {
    "data-cta-label": ctaLabel,
    "data-cta-location": ctaLocation,
  };

  if (isInternal) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} {...dataProps}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      {...dataProps}
    >
      {children}
    </a>
  );
}
