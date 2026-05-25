import Link from "next/link";
import { Icon } from "./icons";
import { whyNow } from "@/data/site";

/*
 * „Proč teď" — kompaktní dark section mezi PortfolioShowcase a Services
 * (audit D-02 přesun 2026-05-25). Krátký lidský argument pro odkladače.
 * Žádné statistiky, žádné strašení, neutrální ikony. Tři karty na desktopu,
 * vertical stack na mobilu, závěrečné jemné CTA na konzultaci.
 */
export function WhyNow() {
  return (
    <section
      id="proc-ted"
      className="relative overflow-hidden bg-[#05070D] px-5 py-16 sm:px-8 md:py-20"
    >
      {/* Jemný gradient nahoře, ať to plynule navazuje na PortfolioShowcase. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-black/30 to-transparent"
      />

      <div className="mx-auto max-w-5xl text-center">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-2">
          {whyNow.eyebrow}
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-[2rem]">
          {whyNow.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
          {whyNow.lead}
        </p>

        <ul
          role="list"
          className="mx-auto mt-10 grid gap-4 sm:grid-cols-3"
        >
          {whyNow.cards.map((card) => (
            <li
              key={card.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {card.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href={whyNow.cta.href}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/[0.03] px-5 py-3 font-display text-sm font-semibold text-white transition-colors duration-150 hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            data-cta-label="why_now"
            data-cta-location="proc-ted"
          >
            {whyNow.cta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
