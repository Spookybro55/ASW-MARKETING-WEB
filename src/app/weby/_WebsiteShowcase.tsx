"use client";

/*
 * /weby — modelové ukázky webů (audit Phase B 2026-05-25 + MCP refresh 2026-05-26).
 * Client component izolovaný kvůli motion/react animacím; stránka zůstává server
 * component.
 *
 * Vizuálně: 3 mini browser-frame mockupy v dark brandu. Každý je jasně
 * označen pillem „Modelová ukázka" — nepředstírá reálnou klientskou
 * realizaci. Obsah uvnitř mockupu (jméno, doména, služby) je fiktivní
 * a oborově věrohodný, ale není přiřazený existujícímu klientovi.
 *
 * 21st.dev MCP pattern (search „browser window frame", BrowserComponent
 * sim 1.185): centered URL pill s padlock SVG ikonou před doménou. Adopted
 * a darken-brand-applied. Původní URL-vlevo pattern nahrazen, chrome je teď
 * realističtější (vypadá jako Chrome/Safari URL bar místo nálepky).
 *
 * Animace: in-view fade+translateY se staggerem ~150ms. Reduced motion
 * → karty v cílovém stavu od první frame, žádný pohyb. Pattern mirroruje
 * existující _HeroWorkflowPanel.tsx (sjednocený animační systém).
 */

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Icon } from "@/components/asw/icons";

type ShowcaseItem = {
  kind: string;
  brandName: string;
  domain: string;
  cardTitle: string;
  cardDescription: string;
  heroTitle: string;
  heroLead: string;
  services: readonly string[];
  contactLabel: string;
  location: string;
};

type Props = {
  items: readonly ShowcaseItem[];
  cta: { label: string; href: string };
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function WebsiteShowcase({ items, cta }: Props) {
  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";

  return (
    <div className="mt-10">
      <motion.ul
        role="list"
        className="grid gap-6 md:grid-cols-3"
        initial={initial}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {items.map((item) => (
          <motion.li
            key={item.brandName}
            variants={cardVariants}
            className="group flex flex-col"
          >
            {/* ── Browser frame mockup ─────────────────────────────── */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1322] shadow-[0_28px_60px_-30px_rgba(13,71,161,0.45)] transition-transform duration-300 motion-reduce:transform-none group-hover:-translate-y-0.5">
              {/* top chrome (MCP pattern: BrowserComponent — dots vlevo,
                  centered URL pill s padlock SVG ikonou, „ukázka" pill vpravo) */}
              <div className="relative flex items-center gap-2 border-b border-white/8 bg-[#0A1322] px-3 py-2">
                <div className="flex shrink-0 gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>
                {/* centered URL pill — adapted from 21st.dev BrowserComponent */}
                <span className="mx-auto flex min-w-0 max-w-[60%] items-center gap-1.5 rounded-md border border-white/8 bg-white/[0.04] px-2 py-0.5 text-[9px] font-medium text-white/55">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-2.5 w-2.5 shrink-0 text-white/40"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="truncate">{item.domain}</span>
                </span>
                <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-[#1976D2]/45 bg-[#1976D2]/15 px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#9FC6FF]">
                  <Icon name="file-text" className="h-2.5 w-2.5" />
                  Modelová ukázka
                </span>
              </div>

              {/* inner preview */}
              <div className="relative bg-gradient-to-br from-[#0A1A33] via-[#08142A] to-[#05070D] p-5">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_45%_at_75%_25%,rgba(25,118,210,0.18),transparent_70%)]"
                />
                {/* nav */}
                <div className="relative flex items-center justify-between">
                  <span className="font-display text-[11px] font-extrabold text-white">
                    {item.brandName}
                  </span>
                  <span className="rounded-md border border-white/20 px-2 py-0.5 text-[9px] font-semibold text-white">
                    {item.contactLabel}
                  </span>
                </div>

                {/* hero */}
                <div className="relative mt-4">
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#1976D2]/40 bg-[#1976D2]/15 px-2 py-0.5 text-[9px] font-semibold text-[#9FC6FF]">
                    <Icon name="map-pin" className="h-2.5 w-2.5" />
                    {item.location}
                  </span>
                  <h4 className="mt-2 font-display text-[15px] font-extrabold leading-tight text-white">
                    {item.heroTitle}
                  </h4>
                  <p className="mt-1.5 text-[10.5px] leading-relaxed text-white/55">
                    {item.heroLead}
                  </p>
                </div>

                {/* service chips */}
                <div className="relative mt-3 flex flex-wrap gap-1.5">
                  {item.services.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-medium text-white/75"
                    >
                      <Icon name="check" className="h-2.5 w-2.5 text-[#9FC6FF]" />
                      {s}
                    </span>
                  ))}
                </div>

                {/* contact strip */}
                <div className="relative mt-3 flex items-center gap-2 rounded-md border border-white/8 bg-white/[0.04] px-2 py-1.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[#1976D2]/20 text-[#9FC6FF]">
                    <Icon name="phone" className="h-2.5 w-2.5" />
                  </span>
                  <span className="text-[9.5px] font-medium text-white/70">
                    Volání · formulář · mapa
                  </span>
                </div>
              </div>
            </div>

            {/* ── Card label below the frame ──────────────────────── */}
            <div className="mt-5 px-1">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand-2">
                {item.kind}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-bold text-foreground">
                {item.cardTitle}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                {item.cardDescription}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-10 text-center">
        <Link
          href={cta.href}
          className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/[0.03] px-5 py-3 font-display text-sm font-semibold text-white transition-colors duration-150 hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          data-cta-label="weby_showcase"
          data-cta-location="weby_showcase"
        >
          {cta.label}
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
