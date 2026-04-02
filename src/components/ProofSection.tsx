import { homepageData } from "@/data/homepage";

export default function ProofSection() {
  const { proof } = homepageData;

  return (
    <section className="section-shell section-divider relative">
      <div className="pointer-events-none absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-[#36E2A3]/[0.03] blur-[100px]" />

      <div className="section-container relative">
        <div className="brand-line mb-5" />
        <h2 className="section-title max-w-xl">{proof.title}</h2>
        <p className="section-text mt-4 max-w-xl">{proof.text}</p>

        {/* Two-column: outcomes left, highlights right */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Left — proof items as numbered outcomes */}
          <div className="space-y-8">
            {proof.items.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 mt-1 flex h-8 w-8 items-center justify-center rounded-md bg-[#36E2A3]/[0.1] text-xs font-bold text-[#36E2A3]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — highlights as a practical list */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 self-start">
            <div className="text-sm font-bold uppercase tracking-widest text-[#36E2A3] mb-5">
              Co typicky řešíme
            </div>

            <div className="space-y-3.5">
              {proof.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 text-[15px] text-gray-300">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#36E2A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
