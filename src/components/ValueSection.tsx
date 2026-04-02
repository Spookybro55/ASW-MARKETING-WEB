import { homepageData } from "@/data/homepage";

export default function ValueSection() {
  const { valueItems } = homepageData;

  return (
    <section className="px-6 py-14 md:py-16 section-divider">
      <div className="section-container">
        <div className="grid gap-0 divide-x divide-white/[0.06] md:grid-cols-3">
          {valueItems.map((item) => (
            <div key={item.title} className="px-6 py-2 first:pl-0 last:pr-0">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
