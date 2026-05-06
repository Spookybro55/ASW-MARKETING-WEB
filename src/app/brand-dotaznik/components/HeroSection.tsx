export default function HeroSection() {
  return (
    <section className="relative px-6 pt-28 pb-12 md:pt-44 md:pb-20">
      <div className="pointer-events-none absolute top-[-120px] left-[-80px] h-[500px] w-[500px] rounded-full bg-[#36E2A3]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[10%] h-[300px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[100px]" />

      <div className="mx-auto max-w-4xl relative">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#36E2A3]/30 bg-[#36E2A3]/[0.08] px-4 py-1.5 text-sm font-medium text-[#36E2A3]">
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Vyplnění zabere přibližně 15–25 minut
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
            Brandový dotazník pro tvorbu loga, barev a webu
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
            Tento dotazník nám pomůže pochopit vaši firmu, zákazníky, styl
            komunikace a vizuální směr značky. Na základě odpovědí připravíme
            návrh nového loga, barevné palety, typografie a vizuálního stylu
            webu.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <p className="text-sm leading-6 text-gray-300 md:text-base md:leading-7">
              <span className="font-semibold text-white">
                Nemusíte odpovídat odborně ani „designérsky“.
              </span>{" "}
              Stačí jednoduše vlastními slovy. Čím konkrétnější odpovědi, tím
              přesnější návrh pro vás dokážeme připravit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
