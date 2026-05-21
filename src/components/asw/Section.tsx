import type { ReactNode } from "react";

/*
 * Layout primitives for consistent rhythm across the marketing site.
 *   <Section>  — vertical padding + centered max-width container.
 *   <SectionHeading> — eyebrow + H2 + lead, centered or left-aligned.
 * Tone variants control background (white / muted #F9F9F9 / dark #212121).
 */
type Tone = "default" | "muted" | "elevated" | "dark";

/*
 * Unified background system — no striped section bands. The page is one
 * continuous #05070D; sections differ only very subtly. "muted" uses a soft
 * vertical gradient that fades back to the page colour at its top/bottom edges,
 * so adjacent sections blend instead of reading as separate colour blocks.
 */
const toneBg: Record<Tone, string> = {
  default: "bg-transparent",
  muted: "bg-[linear-gradient(180deg,#05070D_0%,#0A1020_55%,#05070D_100%)]",
  elevated: "bg-[#0B1322]",
  dark: "bg-[#03050A]",
};

/** Plain centered max-width wrapper without vertical padding/background. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "default",
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${toneBg[tone]} py-16 px-5 sm:px-8 md:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-foreground";
  const leadColor = tone === "dark" ? "text-white/70" : "text-fg-muted";
  return (
    <div className={`${alignClass} max-w-2xl`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-2">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-[2rem] ${titleColor}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed ${leadColor}`}>{lead}</p>
      )}
    </div>
  );
}
