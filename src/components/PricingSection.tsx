export default function PricingSection() {
  return (
    <section id="pricing" className="section-shell border-t border-white/10">
      <div className="section-container">
        <div className="max-w-3xl">
          <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand)]" />
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Kolik to stojí
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-gray-300">
            Přesnou cenu vždy domluvíme podle rozsahu. Žádné skryté poplatky,
            žádné překvapení.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Web na míru */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col">
            <div className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Web na míru
            </div>

            <div className="mt-6 text-3xl font-bold text-white md:text-4xl">
              od 8 900 Kč
            </div>

            <p className="mt-4 text-base leading-7 text-gray-300">
              Kompletní profesionální web včetně struktury, textů, designu
              a základního SEO. Nasadíme ho na vaši doménu a spustíme.
            </p>

            <div className="mt-5 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="h-3.5 w-3.5 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Hotovo za 3–5 pracovních dní
              </div>
              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="h-3.5 w-3.5 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                2 kola úprav v ceně
              </div>
              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="h-3.5 w-3.5 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Platíte až po schválení
              </div>
            </div>

            <div className="mt-auto pt-6">
              <a
                href="#contact"
                data-cta-label="pricing-web"
                data-cta-location="pricing"
                className="inline-flex text-sm font-semibold text-gray-400 hover:text-white transition"
              >
                Chci web — ozvěte se mi &rarr;
              </a>
            </div>
          </div>

          {/* Automatizace — featured */}
          <div className="rounded-2xl border border-[var(--brand)]/25 bg-[linear-gradient(180deg,rgba(54,226,163,0.08)_0%,rgba(255,255,255,0.02)_100%)] p-8 shadow-[0_0_0_1px_rgba(54,226,163,0.06),0_20px_60px_rgba(54,226,163,0.10)] flex flex-col">
            <div
              className="inline-flex self-start rounded-full border border-[var(--brand)]/25 bg-[var(--brand)]/10 px-3 py-1 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--brand)" }}
            >
              Nejčastější řešení
            </div>

            <div className="mt-5 text-sm font-semibold uppercase tracking-widest text-gray-300">
              Automatizace
            </div>

            <div className="mt-6 text-3xl font-bold text-white md:text-4xl">
              3 – 15 tis. Kč
            </div>

            <p className="mt-4 text-base leading-7 text-gray-300">
              Propojení nástrojů, automatizace procesů a praktická řešení,
              která šetří čas a omezují rutinu.
            </p>

            <div className="mt-auto pt-6">
              <a
                href="#contact"
                data-cta-label="pricing-automatizace"
                data-cta-location="pricing"
                className="primary-button inline-flex items-center justify-center gap-2 text-sm px-6 py-3"
              >
                Chci automatizaci — ozvěte se mi
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* AI chatbot */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col">
            <div className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              AI chatbot
            </div>

            <div className="mt-6 text-3xl font-bold text-white md:text-4xl">
              10 – 25 tis. Kč
            </div>

            <p className="mt-4 text-base leading-7 text-gray-300">
              AI chatbot naučený na vaše služby, odpovědi a sběr poptávek 24/7.
            </p>

            <div className="mt-auto pt-6">
              <a
                href="#contact"
                data-cta-label="pricing-chatbot"
                data-cta-location="pricing"
                className="inline-flex text-sm font-semibold text-gray-400 hover:text-white transition"
              >
                Chci chatbota — ozvěte se mi &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
