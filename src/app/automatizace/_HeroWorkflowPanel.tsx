"use client";

/*
 * /automatizace hero workflow panel — animated client component.
 *
 * Renders the dark productový panel on the right side of the hero with
 * 4 sequentially-revealed steps. Animations use `motion/react` (the
 * project's existing dependency, formerly framer-motion) and respect
 * `prefers-reduced-motion`: reduced motion users see the panel statically,
 * fully visible from the first paint.
 *
 * Design rules: subtle fade + tiny translateY on each step, staggered;
 * check icon does a short scale 0.9 → 1 with the step; the "Aktivní"
 * green dot has one slow opacity-pulse loop; connector line stays static.
 */

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Icon, CheckIcon } from "@/components/asw/icons";

type Step = { icon: string; title: string; hint: string };

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.36, delayChildren: 0.2 },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const checkVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
  },
};

export function HeroWorkflowPanel({
  label,
  steps,
}: {
  label: string;
  steps: readonly Step[];
}) {
  const reduce = useReducedMotion();
  // When reduced motion is on, render content in its final state from the
  // first frame — no transforms, no loops.
  const initial = reduce ? "show" : "hidden";

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0A1322]/80 p-6 shadow-[0_30px_70px_-40px_rgba(13,71,161,0.6)] backdrop-blur-sm sm:p-8">
      <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-4">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/55">
          {label}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-medium text-emerald-400/90">
          <motion.span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80"
            animate={
              reduce
                ? undefined
                : { opacity: [0.55, 1, 0.55], scale: [1, 1.15, 1] }
            }
            transition={
              reduce
                ? undefined
                : {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }
            }
          />
          Aktivní
        </span>
      </div>

      <motion.ol
        className="relative mt-5 space-y-4"
        initial={initial}
        animate="show"
        variants={containerVariants}
      >
        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            className="relative flex items-start gap-3.5"
            variants={stepVariants}
          >
            {/* Connector — intentionally static; revealing it added complexity
                without much payoff and risked layout shimmer. */}
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[1.25rem] top-10 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-white/15 to-white/[0.04]"
              />
            )}
            <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0E1A33] text-brand-light">
              <Icon name={step.icon} className="h-4 w-4" />
            </span>
            <div className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
              <div className="min-w-0">
                <p className="truncate text-[0.95rem] font-semibold text-white">
                  <span className="mr-1.5 inline-block text-[0.7rem] font-bold text-white/40">
                    0{i + 1}
                  </span>
                  {step.title}
                </p>
                <p className="truncate text-[0.82rem] text-white/55">
                  {step.hint}
                </p>
              </div>
              <motion.span
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-light"
                variants={checkVariants}
              >
                <CheckIcon className="h-3 w-3" />
              </motion.span>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
