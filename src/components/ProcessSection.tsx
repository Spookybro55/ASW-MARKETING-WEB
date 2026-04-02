import { homepageData } from "@/data/homepage";

export default function ProcessSection() {
  const { process } = homepageData;

  return (
    <section id="process" className="section-shell border-t border-white/10">
      <div className="section-container">
        <div className="max-w-3xl">
          <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand)]" />
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {process.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            {process.text}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {process.items.map((item) => (
            <div
              key={item.eyebrow}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-7 transition duration-300 hover:border-[var(--brand)]/25 hover:bg-white/[0.05]"
            >
              <div className="mb-6 md:mb-8 flex items-center justify-between">
                <div
                  className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl border border-[var(--brand)]/25 bg-[var(--brand)]/10 text-base md:text-lg font-bold"
                  style={{ color: "var(--brand)" }}
                >
                  {item.eyebrow}
                </div>

                <div className="ml-4 h-px flex-1 bg-white/10" />
              </div>

              <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg md:leading-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
