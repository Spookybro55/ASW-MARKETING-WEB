const CheckIcon = () => (
  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#36E2A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function AudienceSection() {
  return (
    <section className="section-shell border-t border-white/10">
      <div className="section-container">
        <div className="max-w-3xl">
          <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand)]" />
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Pro koho je naše řešení
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Pomáháme dvěma typům klientů: těm, kteří potřebují kvalitní web,
            a těm, kteří už podnikají, ale chtějí ušetřit čas pomocí
            automatizace a AI.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-8 transition duration-300 hover:border-[var(--brand)]/25 hover:bg-white/[0.05]">
            <div className="mb-5 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
              Nový web
            </div>

            <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
              Živnostníci a malé firmy bez webu
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg md:leading-8">
              Postavíme vám jednoduchý, profesionální a rychlý web, který
              vysvětlí vaše služby, bude fungovat na mobilu a pomůže získávat
              nové zákazníky.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Profesionální prezentace služby</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Funkční web bez zbytečné složitosti</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Rychlé spuštění a jednoduchý proces</span></div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-8 transition duration-300 hover:border-[var(--brand)]/25 hover:bg-white/[0.05]">
            <div className="mb-5 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
              Automatizace &amp; AI
            </div>

            <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
              Firmy, které chtějí šetřit čas a růst
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg md:leading-8">
              Nastavíme automatizace, propojíme nástroje a nasadíme AI řešení
              tam, kde vám ušetří čas, sníží rutinu a zlepší práci s poptávkami.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Méně ruční práce a opakovaných úkolů</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Lepší práce s leady a zákazníky</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Praktické AI a automatizace pro reálný provoz</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
