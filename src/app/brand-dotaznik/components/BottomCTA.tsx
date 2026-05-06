type Props = {
  uploadUrl: string;
  isSubmitting: boolean;
  errorMessage?: string;
};

export default function BottomCTA({
  uploadUrl,
  isSubmitting,
  errorMessage,
}: Props) {
  return (
    <section className="border-t border-white/[0.06] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-[var(--brand)]/20 bg-[linear-gradient(180deg,rgba(54,226,163,0.08)_0%,rgba(255,255,255,0.02)_100%)] p-8 shadow-[0_0_0_1px_rgba(54,226,163,0.06),0_20px_60px_rgba(54,226,163,0.10)] md:p-12">
          <div className="text-center">
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[var(--brand)]" />

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Hotovo?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
              Děkujeme za vyplnění. Odpovědi použijeme jako podklad pro návrh
              loga, barev, typografie a celkového vizuálního směru webu.
            </p>

            <div className="mx-auto mt-6 max-w-xl space-y-2 text-sm leading-6 text-gray-400 md:text-base md:leading-7">
              <p>
                Pokud odpovídáte písemně, odešlete formulář pomocí tlačítka
                níže.
              </p>
              <p>
                Pokud odpovídáte formou audia nebo videa, nahrajte soubor přes
                tlačítko níže.
              </p>
            </div>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="mx-auto mt-8 max-w-xl rounded-xl border border-red-500/30 bg-red-500/[0.08] px-4 py-3 text-center text-sm text-red-300"
            >
              {errorMessage}
            </div>
          )}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="submit"
              disabled={isSubmitting}
              className="primary-button inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Odesílám…" : "Odeslat vyplněný dotazník"}
              {!isSubmitting && (
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              )}
            </button>

            <a
              href={uploadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button inline-flex items-center justify-center gap-2"
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

          <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-5 text-gray-500">
            Při nahrávání audia nebo videa prosíme vždy uvádějte číslo otázky,
            na kterou odpovídáte.
          </p>
        </div>
      </div>
    </section>
  );
}
