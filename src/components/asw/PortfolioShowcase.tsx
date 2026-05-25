"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { Icon } from "./icons";

/*
 * Portfolio MacBook-like showcase (gozieokenu-style). An ALREADY-OPEN
 * MacBook-like laptop (screen + bezel + hinge + slightly wider base deck),
 * visible immediately under the problem cards, starting at a strong perspective
 * tilt and gently straightening + scaling as it scrolls toward centre — it
 * KEEPS perspective (never flattens to 0°). NOT a tablet, NOT an opening lid,
 * NO sticky pin, NO tall empty scene. The whole device animates as one object.
 *
 * Inside the screen: FICTIONAL finished-website preview "MBM Elektrotechnik"
 * (electrician), readable from the first frame. Top bar "· ukázka webu",
 * aria-hidden, no fake reviews/ratings/logos/external images. Blue accents
 * only. Mobile / reduced-motion → static mild tilt (no scroll transform).
 */
const statusChips = ["Silnoproud", "Slaboproud", "Montáže", "Servis"];
const services = [
  { icon: "zap", title: "Silnoproudé instalace" },
  { icon: "search", title: "Slaboproudé systémy" },
  { icon: "shield", title: "Montáže a servis" },
];
const trust = ["Praha a okolí", "Jasná domluva", "Technické řešení na míru"];

export function PortfolioShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  // Strong starting tilt → gentle straighten, but never to 0° (keeps perspective).
  const rotateRaw = useTransform(scrollYProgress, [0, 1], [52, 32]);
  const rotateX = useSpring(rotateRaw, { stiffness: 80, damping: 20, mass: 0.5 });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.02]);
  const lift = useTransform(scrollYProgress, [0, 1], [18, -6]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.6]);

  const animate = isDesktop && !reduce;
  const deviceStyle = animate
    ? { rotateX, scale, y: lift, transformStyle: "preserve-3d" as const }
    : { rotateX: 18, transformStyle: "preserve-3d" as const };
  const glowStyle = animate ? { opacity: glowOpacity } : { opacity: 0.5 };

  return (
    <section className="relative overflow-hidden bg-[#05070D] px-5 pb-16 pt-10 sm:px-8 md:pb-20 md:pt-12">
      <div ref={ref} className="mx-auto w-full max-w-[70rem] [perspective:1600px]">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#1976D2]/45 bg-[#1976D2]/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#9FC6FF]">
            <Icon name="file-text" className="h-3.5 w-3.5" />
            Ukázka výstupu
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-[2rem]">
            Ukázka webu, jaký pro vás postavíme
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/60">
            Nejde o finální šablonu pro všechny. Ukazuje typ struktury a přehlednosti,
            kterou stavíme pro malé firmy — pro vás vždy upravíme podle vašeho oboru a podkladů.
          </p>
        </div>

        <motion.div
          aria-hidden="true"
          style={deviceStyle}
          className="relative origin-center"
        >
          {/* blue glow behind the device */}
          <motion.div
            style={glowStyle}
            className="pointer-events-none absolute inset-x-0 -bottom-6 top-[6%] -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_45%,rgba(25,118,210,0.55),transparent_72%)] blur-3xl md:inset-x-[-3%]"
          />

          {/* ── Screen / lid (dark bezel) ─────────────────────────────── */}
          <div className="mx-auto w-[95%] rounded-[0.9rem] border border-white/10 bg-[#0b0f17] p-1.5 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.85)] sm:p-2">
            <div className="overflow-hidden rounded-[0.6rem] border border-white/8">
              {/* slim top bar with "ukázka webu" */}
              <div className="flex items-center gap-2 bg-[#0B1220] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="ml-2 flex-1 truncate rounded bg-white/5 px-2 py-0.5 text-[9px] text-white/30">
                  mbm-elektrotechnik.cz <span className="text-white/20">· ukázka webu</span>
                </span>
              </div>

              {/* MBM Elektrotechnik marketing preview */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#0A1A33] via-[#08142A] to-[#05070D] px-5 pb-6 pt-4 sm:px-8">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(143,190,247,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(143,190,247,0.06)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:radial-gradient(ellipse_at_72%_45%,black,transparent_75%)]" />
                <div className="pointer-events-none absolute -right-10 top-4 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(25,118,210,0.4),transparent_70%)] blur-2xl" />

                {/* nav */}
                <div className="relative flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-display text-sm font-extrabold text-white">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#1976D2] text-white">
                      <Icon name="zap" className="h-3 w-3" />
                    </span>
                    MBM Elektrotechnik
                  </span>
                  <div className="hidden items-center gap-4 text-[11px] font-medium text-white/55 md:flex">
                    <span className="text-white">Domů</span>
                    <span>Služby</span>
                    <span>Reference</span>
                    <span>Kontakt</span>
                  </div>
                  <span className="rounded-md border border-white/20 px-2.5 py-1 text-[11px] font-semibold text-white">
                    Poptat práci
                  </span>
                </div>

                {/* hero: two columns */}
                <div className="relative mt-7 grid items-center gap-6 md:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#1976D2]/40 bg-[#1976D2]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[#9FC6FF]">
                      <Icon name="map-pin" className="h-3 w-3" /> Praha a okolí
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-[1.8rem]">
                      Elektroinstalace pro domy, byty i firmy
                    </h3>
                    <p className="mt-2 max-w-md text-[11px] leading-relaxed text-white/60">
                      Silnoproud, slaboproud, montáže a servis elektroinstalací s jasnou domluvou.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-[#1976D2] px-3.5 py-2 text-[11px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(25,118,210,0.7)]">
                        <Icon name="arrow-right" className="h-3 w-3" /> Nezávazně poptat
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-lg border border-white/25 px-3.5 py-2 text-[11px] font-semibold text-white">
                        <Icon name="phone" className="h-3 w-3" /> Zavolat technika
                      </span>
                    </div>
                  </div>

                  <div className="relative hidden overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0D2A57] via-[#0c2247] to-[#070B14] p-4 shadow-lg md:block">
                    <Icon name="zap" className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 text-white/[0.05]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white/55">
                        Rozvaděč
                      </span>
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[#9FC6FF]">
                        <Icon name="zap" className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="mt-3 flex items-end justify-between gap-1.5 rounded-lg bg-white/[0.07] p-3">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex flex-1 flex-col items-center gap-1">
                          <span className={`h-5 w-2.5 rounded-sm bg-white/85 ${i % 2 ? "translate-y-0" : "-translate-y-1"}`} />
                          <span className="h-1 w-3 rounded-full bg-white/25" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {statusChips.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.07] px-2.5 py-1.5 text-[10px] font-medium text-white/80"
                        >
                          <Icon name="check" className="h-3 w-3 text-[#9FC6FF]" /> {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* service strip */}
                <div className="relative mt-7 grid grid-cols-3 gap-2.5">
                  {services.map((s) => (
                    <div
                      key={s.title}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5 backdrop-blur-sm"
                    >
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#1976D2]/20 text-[#9FC6FF]">
                        <Icon name={s.icon} className="h-4 w-4" />
                      </span>
                      <span className="text-[11px] font-semibold text-white">{s.title}</span>
                    </div>
                  ))}
                </div>

                {/* trust strip */}
                <div className="relative mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/8 pt-4 text-[10px] font-medium text-white/55">
                  {trust.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1">
                      <Icon name="check" className="h-3 w-3 text-[#9FC6FF]" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Hinge + base deck (slightly wider than the screen) ─────── */}
          <div className="relative mx-auto -mt-px h-3.5 w-full rounded-b-2xl bg-gradient-to-b from-[#2a3340] to-[#0b0f17] shadow-[0_28px_44px_-18px_rgba(0,0,0,0.85)] [clip-path:polygon(2%_0,98%_0,100%_100%,0_100%)]">
            {/* hinge notch */}
            <span className="absolute left-1/2 top-0 h-1 w-[16%] -translate-x-1/2 rounded-b-md bg-black/50" />
          </div>
        </motion.div>

        <div className="mt-9 text-center">
          <Link
            href="/konzultace?produkt=web-standard"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9FC6FF] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            data-cta-label="showcase"
            data-cta-location="hero_showcase"
          >
            Chci podobný web
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
