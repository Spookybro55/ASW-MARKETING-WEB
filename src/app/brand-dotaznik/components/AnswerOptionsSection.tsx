type Props = {
  uploadUrl: string;
};

export default function AnswerOptionsSection({ uploadUrl }: Props) {
  return (
    <section className="px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand)]" />
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Jak můžete odpovědět
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
            Vyberte způsob, který je vám pohodlnější. Obě varianty fungují
            stejně dobře — máme rádi, když odpovědi přijdou tak, jak vám to
            přirozeně sedí.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Varianta 1 — písemně */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[var(--brand)]/30 hover:bg-white/[0.05] md:p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--brand)]/25 bg-[var(--brand)]/10 text-sm font-bold text-[var(--brand)]">
                1
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Varianta
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white md:text-2xl">
              Vyplnit odpovědi písemně
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-300 md:text-base md:leading-7">
              Pod každou otázkou najdete pole pro odpověď. Stačí napsat pár vět
              vlastními slovy.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-[var(--brand)]">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              Pokračujte níže k formuláři
            </div>
          </div>

          {/* Varianta 2 — audio/video */}
          <div className="group relative rounded-2xl border border-[var(--brand)]/20 bg-[linear-gradient(135deg,rgba(54,226,163,0.06)_0%,rgba(54,226,163,0.01)_100%)] p-6 transition duration-300 hover:border-[var(--brand)]/40 md:p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--brand)]/25 bg-[var(--brand)]/10 text-sm font-bold text-[var(--brand)]">
                2
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Varianta
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white md:text-2xl">
              Nahrát audio nebo video odpovědi
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-300 md:text-base md:leading-7">
              Pokud je pro vás jednodušší mluvit než psát, můžete odpovědi
              nahrát jako audio nebo video.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">
                Důležité
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                U každé odpovědi prosím vždy řekněte{" "}
                <span className="font-semibold text-white">
                  číslo otázky
                </span>{" "}
                a poté samotnou odpověď.
              </p>

              <ul className="mt-3 space-y-1.5 text-sm text-gray-400">
                <li>„Otázka 1: Naše firma se zabývá…“</li>
                <li>„Otázka 2: Náš typický zákazník je…“</li>
              </ul>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Pojmenování souboru
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                <span className="font-mono text-white">
                  NazevFirmy_brand_dotaznik_jmeno
                </span>
              </p>
              <p className="mt-1.5 text-xs leading-5 text-gray-500">
                Např.{" "}
                <span className="font-mono text-gray-300">
                  NovakStavby_brand_dotaznik_JanNovak
                </span>
              </p>
            </div>

            <a
              href={uploadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button mt-6 inline-flex items-center justify-center gap-2 text-sm"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              Nahrát audio/video odpovědi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
