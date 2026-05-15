/*
 * Inline SVG icon set for v2 components.
 *
 * Heroicons-outline style: 24x24 viewBox, stroke-based, currentColor.
 * All icons accept standard SVG props (className for sizing/color).
 * No emoji as icons anywhere on the site (per brand visual system).
 */

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a.96.96 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143.96.96 0 0 1 .38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}

/* ── v0 redesign icons ──────────────────────────────────────────────────────
 * Reusable SVG icons added for the v0-inspired homepage redesign. Same
 * Heroicons-outline style as the icons above (24x24 viewBox, stroke-based,
 * currentColor). Names are kept generic so they can be reused across
 * sections and future pages.
 * ========================================================================= */

/** Browser window mock — services / deliverables ("Webové stránky"). */
export function BrowserIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6" cy="6.75" r="0.5" fill="currentColor" />
      <circle cx="8" cy="6.75" r="0.5" fill="currentColor" />
      <circle cx="10" cy="6.75" r="0.5" fill="currentColor" />
    </svg>
  );
}

/** Browser with X overlay — "Nemáte web". */
export function BrowserOffIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9h18" />
      <path d="m9 13 6 6m0-6-6 6" />
    </svg>
  );
}

/** Magnifying glass with warning dot — "Nejste vidět v Googlu". */
export function SearchWarnIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m20 20-4.35-4.35" />
      <path d="M10.5 8v3" />
      <circle cx="10.5" cy="13" r="0.5" fill="currentColor" />
    </svg>
  );
}

/** Phone with slash — "Zmeškáváte hovory". */
export function PhoneOffIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.6 5.6c-.5 1.5-.7 3-.7 4.4 0 5.5 4.5 10 10 10 1.4 0 2.9-.2 4.4-.7" />
      <path d="m3 3 18 18" />
      <path d="M14 4.5c2.7.4 4.9 2.6 5.3 5.3" />
    </svg>
  );
}

/** Map pin — lokální SEO. */
export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

/** Bolt / lightning — automation. */
export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m13 3-8 11h6l-1 7 8-11h-6l1-7Z" />
    </svg>
  );
}

/** Trend up / chart — results metric. */
export function TrendUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

/** Clock — time / delivery. */
export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/** Eye — visibility / SEO. */
export function EyeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/** At sign — firemní e-mail. */
export function AtSignIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 12v1.5a3 3 0 0 0 6 0V12a10 10 0 1 0-3.92 7.94" />
    </svg>
  );
}

/** QR code — printed materials. */
export function QrCodeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="6" height="6" rx="1" />
      <rect x="14.5" y="3.5" width="6" height="6" rx="1" />
      <rect x="3.5" y="14.5" width="6" height="6" rx="1" />
      <path d="M14.5 14.5h2v2h-2zM18 14.5h2.5M14.5 18v2.5M18 18v2.5h2.5" />
    </svg>
  );
}

/** Building — Google Business surrogate. */
export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
      <path d="M3 21h18" />
      <path d="M9 8h.01M13 8h.01M9 12h.01M13 12h.01M9 16h.01M13 16h.01" />
    </svg>
  );
}

/** Sparkles / shine — quality / launch ready. */
export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  );
}

/** Chevron right — link arrow. */
export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

/** Facebook (simple geometric mark, not the official logo). */
export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 9V7.5a1.5 1.5 0 0 1 1.5-1.5H17V3h-2.5A4.5 4.5 0 0 0 10 7.5V9H7.5v3H10v9h4v-9h2.5l.5-3H14Z" />
    </svg>
  );
}

/** Instagram (simple geometric mark). */
export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="17.25" cy="6.75" r="0.5" fill="currentColor" />
    </svg>
  );
}

/** LinkedIn (simple geometric mark). */
export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10v7M8 7v.01M11.5 17v-4a2.5 2.5 0 0 1 5 0v4M11.5 13v4" />
    </svg>
  );
}
