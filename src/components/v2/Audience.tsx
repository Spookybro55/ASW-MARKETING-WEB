import { audience } from "@/data/siteContent";

export default function Audience() {
  return (
    <section id="pro-koho" className="section section-muted">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{audience.eyebrow}</span>
          <h2 className="h2 mt-2">{audience.title}</h2>
          <p className="lead mt-4">{audience.lead}</p>
        </div>

        <ul className="mt-10 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.items.map((item, i) => (
            <li key={item.title} className="card card-interactive">
              <div
                className="chip chip-brand"
                style={{ fontSize: "0.75rem" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="h3 mt-3">{item.title}</h3>
              <p className="muted text-[0.95rem] mt-2">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
