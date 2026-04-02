import { homepageData } from "@/data/homepage";

const CheckIcon = () => (
  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#36E2A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function ServicesSection() {
  const { services } = homepageData;

  return (
    <section id="services" className="section-shell border-t border-white/10">
      <div className="section-container">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand)]" />

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              {services.title}
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-300">
              {services.text}
            </p>

            <div className="mt-8 space-y-4 text-base text-gray-300">
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Web, který vysvětlí službu a přivede poptávky</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>Automatizace, které šetří čas a omezují rutinu</span></div>
              <div className="flex items-start gap-2.5"><CheckIcon /><span>AI nástroje, které pomáhají s komunikací a leady</span></div>
            </div>
          </div>

          <div className="space-y-4">
            {services.items.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[var(--brand)]/25 hover:bg-white/[0.05]"
              >
                <div className="grid gap-4 md:grid-cols-[56px_1fr] md:items-start">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand)]/25 bg-[var(--brand)]/10 text-sm font-bold"
                    style={{ color: "var(--brand)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
