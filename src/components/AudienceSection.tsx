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
            Nemusíte být technický typ. Stačí vědět, co děláte — o web
            a automatizace se postaráme my.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-8 transition duration-300 hover:border-[var(--brand)]/25 hover:bg-white/[0.05]">
            <div className="mb-5 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
              Nový web
            </div>

            <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
              Potřebujete web, ale nechcete to řešit
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg md:leading-8">
              Dodáme vám hotový web na klíč — strukturu, texty, design i SEO.
              Vy se jen podíváte, schválíte a spustíme.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Web hotový za 3–5 dní</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Funguje na mobilu i počítači</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Přivádí poptávky, ne jen vypadá hezky</span></div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-8 transition duration-300 hover:border-[var(--brand)]/25 hover:bg-white/[0.05]">
            <div className="mb-5 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
              Automatizace &amp; AI
            </div>

            <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
              Děláte věci ručně, které by šly automaticky
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg md:leading-8">
              Propojíme vaše nástroje, zautomatizujeme rutinu a nasadíme AI
              tam, kde vám ušetří reálný čas každý den.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Automatické odpovědi a e-maily</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Propojení fakturace, CRM a tabulek</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>AI chatbot, který sbírá poptávky 24/7</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
