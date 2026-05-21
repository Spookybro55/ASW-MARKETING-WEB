/*
 * AutoSmartWeby icon set — minimal inline line icons (no extra dependency).
 * 24×24, stroke = currentColor, so colour follows the parent text colour.
 * Keyed by name so data in src/data/site.ts can reference icons by string.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const paths: Record<string, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 8V4M9 4h6" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3.2 3.2 0 0 1 0 5.6M17 19a5.5 5.5 0 0 0-2.5-4.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  zap: <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />,
  sparkles: (
    <>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" />
      <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />
    </>
  ),
  phone: (
    <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 6a2 2 0 0 1 2-2Z" />
  ),
  wrench: (
    <path d="M15 6a4 4 0 0 0-5.3 4.8L4 16.5 7.5 20l5.7-5.7A4 4 0 0 0 18 9l-2.5 2.5L13 9l2.5-2.5A4 4 0 0 0 15 6Z" />
  ),
  utensils: (
    <>
      <path d="M7 3v8a2 2 0 0 0 4 0V3M9 11v10" />
      <path d="M16 3c-1.5 0-2.5 1.5-2.5 4S15 11 16 11v10" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2.5" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  store: (
    <>
      <path d="M4 9V7l1.5-3h13L20 7v2a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0Z" />
      <path d="M5 11v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14a4 4 0 0 0 7 0" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </>
  ),
  "file-text": (
    <>
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6M9 16.5h6M9 9.5h2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "chevron-right": <path d="m9 6 6 6-6 6" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({ name, ...props }: IconProps & { name: string }) {
  const content = paths[name] ?? paths.sparkles;
  return (
    <svg {...base} {...props}>
      {content}
    </svg>
  );
}

/** Convenience named icons used directly in chrome (Header/Footer). */
export function MenuIcon(props: IconProps) {
  return <Icon name="menu" {...props} />;
}
export function CloseIcon(props: IconProps) {
  return <Icon name="x" {...props} />;
}
export function ArrowRightIcon(props: IconProps) {
  return <Icon name="arrow-right" {...props} />;
}
export function CheckIcon(props: IconProps) {
  return <Icon name="check" {...props} />;
}
