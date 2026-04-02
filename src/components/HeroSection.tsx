import { homepageData } from "@/data/homepage";

export default function HeroSection() {
  const { hero, contactInfo } = homepageData;
  const primaryContact = contactInfo.people[0];

  return (
    <section className="relative px-6 pt-28 pb-16 md:pt-48 md:pb-28">
      <div className="pointer-events-none absolute top-[-120px] left-[-80px] h-[500px] w-[500px] rounded-full bg-[#36E2A3]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[10%] h-[300px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[100px]" />

      <div className="section-container relative">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#36E2A3]/30 bg-[#36E2A3]/[0.08] px-4 py-1.5 text-sm font-medium text-[#36E2A3]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#36E2A3]" />
            {hero.badge}
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] whitespace-pre-line sm:text-5xl md:text-7xl">
            {hero.title}
          </h1>

          <p className="max-w-2xl text-base leading-7 text-gray-300 md:text-xl md:leading-8">
            {hero.text}
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <a
              href={`tel:${primaryContact.phone.replace(/\s+/g, "")}`}
              className="primary-button inline-flex items-center justify-center gap-2 text-base"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {hero.primaryButton}
            </a>

            <a
              href={`mailto:${primaryContact.email}`}
              className="secondary-button inline-flex items-center justify-center gap-2 text-base"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Napsat e-mail
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-400">
            {["Hotovo za dny", "Platba až po spokojenosti", "Vše nastavíme za vás"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg aria-hidden="true" className="h-4 w-4 text-[#36E2A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
