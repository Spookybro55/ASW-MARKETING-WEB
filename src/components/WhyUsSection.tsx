import { homepageData } from "@/data/homepage";

export default function WhyUsSection() {
  const { whyUs } = homepageData;

  return (
    <section className="section-shell section-divider">
      <div className="section-container">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Left column — heading */}
          <div className="md:col-span-2">
            <div className="brand-line mb-5" />
            <h2 className="section-title">{whyUs.title}</h2>
            <p className="section-text mt-4">{whyUs.text}</p>
          </div>

          {/* Right column — stacked items */}
          <div className="md:col-span-3 space-y-0 divide-y divide-white/[0.06]">
            {whyUs.items.map((item) => (
              <div key={item.title} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
