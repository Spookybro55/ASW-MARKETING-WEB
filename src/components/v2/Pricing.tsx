import { pricing } from "@/data/siteContent";
import { CheckIcon, StarIcon } from "./icons";

export default function Pricing() {
  return (
    <section id="cenik" className="section section-muted">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="h2 mt-2">{pricing.title}</h2>
          <p className="lead mt-4">{pricing.lead}</p>
        </div>

        <div className="mt-10 grid gap-5 md:gap-6 md:grid-cols-3">
          {pricing.packages.map((pkg) => (
            <article
              key={pkg.id}
              className={pkg.featured ? "card card-accent" : "card card-interactive"}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {pkg.featured && pkg.badge && (
                <div
                  className="chip chip-brand"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <StarIcon style={{ width: "14px", height: "14px" }} />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <h3 className="h3" style={{ fontSize: "1.3rem" }}>
                {pkg.name}
              </h3>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--fg-muted)", minHeight: "2.6em" }}
              >
                {pkg.tagline}
              </p>

              <div
                className="mt-4 mb-5"
                style={{
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--fg)", letterSpacing: "-0.01em" }}
                >
                  {pkg.priceFrom}
                </div>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-[0.93rem]"
                  >
                    <CheckIcon
                      style={{
                        color: "var(--brand)",
                        width: "16px",
                        height: "16px",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={pkg.featured ? "btn btn-primary" : "btn btn-secondary"}
                data-cta-label={`pricing_${pkg.id}`}
                data-cta-location="pricing"
              >
                {pkg.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        <div
          className="mt-10 grid gap-4 md:grid-cols-2 text-sm soft max-w-[88ch]"
        >
          <p>{pricing.footnote}</p>
          <p>{pricing.careCopy}</p>
        </div>
      </div>
    </section>
  );
}
