"use client";

/*
 * /lokalni-seo — modelový místní vyhledávací panel (audit Phase B 2026-05-25
 * + MCP refresh 2026-05-26).
 *
 * Explicitně NE:
 *  - žádné Google logo
 *  - žádná přesná kopie Google Maps / Business Profile UI
 *  - žádné konkrétní metriky / procenta / „+300 %"
 *  - žádné garantované pozice
 *
 * 21st.dev MCP pattern (search „map location pin card", LocationMap sim 2.286):
 * Adopted — SVG roads s `pathLength: 0 → 1` animací (4 hlavní cesty + 4 sekundární
 * uličky) místo původní uniform grid; muted building rectangles na fixních
 * pozicích pro vizuální hustotu; brand pin entrance přes spring scale.
 * Rejected — 3D mouse-tilt (rotateX/Y springs): koliduje s „jemný/důvěryhodný"
 * pravidlem; emerald color: nahrazeno brand blue #1976D2; expand-on-click:
 * neslouží účelu marketingového vysvětlení.
 *
 * Animace: search query fade-in, side card slide+fade, roads draw animace,
 * checklist items stagger ~150 ms, žádný loop ani map pulz. Reduced motion
 * → vše v cílovém stavu od první frame.
 */

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Icon, CheckIcon } from "@/components/asw/icons";

type Props = {
  searchQuery: string;
  companyCard: {
    label: string;
    name: string;
    ratingLabel: string;
    ratingNote: string;
    hours: string;
    phone: string;
    web: string;
    area: string;
  };
  nearbyPins: number;
  checklist: readonly string[];
  measureNote: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1], delay: 0.15 },
  },
};

// Adopted from 21st.dev LocationMap — roads draw via pathLength animation.
const roadVariants: Variants = {
  hidden: { pathLength: 0 },
  show: (i: number) => ({
    pathLength: 1,
    transition: { duration: 0.9, delay: 0.2 + i * 0.08, ease: "easeOut" },
  }),
};

const buildingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: 0.55 + i * 0.07, ease: "easeOut" },
  }),
};

const pinVariants: Variants = {
  hidden: { opacity: 0, scale: 0, y: -16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 22, delay: 0.45 },
  },
};

export function LocalSearchPanel({
  searchQuery,
  companyCard,
  nearbyPins,
  checklist,
  measureNote,
}: Props) {
  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";

  // Deterministicky rozmístíme „okolní" piny — žádný náhodný layout shift.
  const pinPositions: { top: string; left: string }[] = [
    { top: "22%", left: "18%" },
    { top: "60%", left: "30%" },
    { top: "32%", left: "70%" },
    { top: "72%", left: "78%" },
    { top: "48%", left: "82%" },
  ].slice(0, nearbyPins);

  return (
    <motion.div
      initial={initial}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={listContainer}
      className="mx-auto mt-10 grid w-full max-w-5xl gap-5 md:grid-cols-[1.4fr_1fr]"
    >
      {/* ── Map panel ────────────────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1322] shadow-[0_28px_60px_-30px_rgba(13,71,161,0.45)]"
      >
        {/* search bar */}
        <div className="flex items-center gap-2 border-b border-white/8 bg-[#0A1322] px-4 py-3">
          <Icon name="search" className="h-4 w-4 text-white/40" />
          <span className="flex-1 truncate text-sm text-white/85">
            {searchQuery}
          </span>
          <span className="hidden rounded-md border border-white/15 px-2 py-0.5 text-[10px] font-semibold text-white/55 sm:inline-block">
            Hledat
          </span>
        </div>

        {/* map area — MCP pattern: SVG roads + scattered buildings + pin */}
        <div className="relative h-[260px] overflow-hidden bg-[linear-gradient(135deg,#0B1A33_0%,#08142A_55%,#05070D_100%)] sm:h-[300px]">
          {/* SVG road network (adopted from 21st.dev LocationMap) */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            {/* main horizontal roads */}
            <motion.line
              x1="0%" y1="38%" x2="100%" y2="38%"
              className="stroke-white/[0.18]"
              strokeWidth="3"
              variants={roadVariants}
              custom={0}
            />
            <motion.line
              x1="0%" y1="68%" x2="100%" y2="68%"
              className="stroke-white/[0.16]"
              strokeWidth="3"
              variants={roadVariants}
              custom={1}
            />
            {/* main vertical roads */}
            <motion.line
              x1="32%" y1="0%" x2="32%" y2="100%"
              className="stroke-white/[0.14]"
              strokeWidth="2.5"
              variants={roadVariants}
              custom={2}
            />
            <motion.line
              x1="72%" y1="0%" x2="72%" y2="100%"
              className="stroke-white/[0.14]"
              strokeWidth="2.5"
              variants={roadVariants}
              custom={3}
            />
            {/* secondary side streets */}
            {[18, 52, 88].map((y, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
                className="stroke-white/[0.08]"
                strokeWidth="1"
                variants={roadVariants}
                custom={4 + i}
              />
            ))}
            {[12, 50, 84].map((x, i) => (
              <motion.line
                key={`v-${i}`}
                x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
                className="stroke-white/[0.08]"
                strokeWidth="1"
                variants={roadVariants}
                custom={7 + i}
              />
            ))}
          </svg>

          {/* soft brand glow under centre pin */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(38%_38%_at_50%_50%,rgba(25,118,210,0.20),transparent_72%)]"
          />

          {/* scattered building rectangles (MCP pattern, muted blue/white) */}
          {[
            { top: "44%", left: "12%", w: "14%", h: "18%" },
            { top: "18%", left: "38%", w: "11%", h: "13%" },
            { top: "70%", left: "76%", w: "16%", h: "16%" },
            { top: "22%", right: "12%", w: "9%", h: "22%" },
            { top: "58%", left: "6%", w: "7%", h: "11%" },
            { top: "10%", left: "76%", w: "12%", h: "9%" },
          ].map((b, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              variants={buildingVariants}
              custom={i}
              className="absolute rounded-[2px] bg-white/[0.06] ring-1 ring-white/[0.05]"
              style={{
                top: b.top,
                left: b.left,
                right: b.right,
                width: b.w,
                height: b.h,
              }}
            />
          ))}

          {/* nearby pins (smaller, muted) */}
          {pinPositions.map((p, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              variants={fadeUp}
              className="absolute inline-flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15"
              style={{ top: p.top, left: p.left }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
            </motion.span>
          ))}

          {/* highlighted brand pin in the centre (spring entrance from MCP) */}
          <motion.div
            variants={pinVariants}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 bg-[#1976D2] text-white shadow-[0_10px_30px_-8px_rgba(25,118,210,0.8)]">
              <Icon name="map-pin" className="h-4 w-4" />
            </span>
            <span className="mt-1.5 block whitespace-nowrap rounded-md border border-white/15 bg-[#0B1322] px-2 py-0.5 text-[10px] font-semibold text-white">
              {companyCard.label}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Company profile card ─────────────────────────────────── */}
      <motion.div
        variants={slideRight}
        className="rounded-2xl border border-white/10 bg-[#0B1322] p-5 shadow-[0_28px_60px_-30px_rgba(13,71,161,0.45)] sm:p-6"
      >
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand-light">
          Místní profil
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-white">
          {companyCard.name}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-[0.85rem]">
          <span aria-hidden="true" className="text-[#FFD37E]">
            {companyCard.ratingLabel}
          </span>
          <span className="text-white/60">{companyCard.ratingNote}</span>
        </div>

        <ul role="list" className="mt-5 space-y-3 text-sm">
          <li className="flex items-center gap-2.5 text-white/75">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-soft text-brand-light">
              <Icon name="clock" className="h-3.5 w-3.5" />
            </span>
            {companyCard.hours}
          </li>
          <li className="flex items-center gap-2.5 text-white/75">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-soft text-brand-light">
              <Icon name="phone" className="h-3.5 w-3.5" />
            </span>
            {companyCard.phone}
          </li>
          <li className="flex items-center gap-2.5 text-white/75">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-soft text-brand-light">
              <Icon name="globe" className="h-3.5 w-3.5" />
            </span>
            {companyCard.web}
          </li>
          <li className="flex items-center gap-2.5 text-white/75">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-soft text-brand-light">
              <Icon name="map-pin" className="h-3.5 w-3.5" />
            </span>
            {companyCard.area}
          </li>
        </ul>
      </motion.div>

      {/* ── Checklist + measure note (spans both columns) ────────── */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:col-span-2"
      >
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand-light">
          Z čeho to skládáme
        </p>
        <motion.ul
          role="list"
          variants={listContainer}
          className="mt-4 grid gap-3 sm:grid-cols-2"
        >
          {checklist.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-2.5 text-sm text-white/80"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-5 text-xs leading-relaxed text-white/60">
          {measureNote}
        </p>
      </motion.div>
    </motion.div>
  );
}
