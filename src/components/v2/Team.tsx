import { team } from "@/data/siteContent";

/**
 * "Kdo za tím stojí" section (Commit: launch-fix P0-1).
 * Makes the two real people behind Autosmartweby visible right before the
 * contact section — satisfies the positioning guardrail "must have visible
 * humans, never look like a faceless tool". No stock photos, no invented
 * roles: text cards with initials until real photos exist.
 */
export default function Team() {
  return (
    <section id="kdo-za-tim-stoji" className="section">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{team.eyebrow}</span>
          <h2 className="h2 mt-2">{team.title}</h2>
          <p className="lead mt-4">{team.lead}</p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2" role="list">
          {team.members.map((member) => (
            <li
              key={member.name}
              className="card card-interactive"
              style={{
                padding: "2rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "var(--brand-soft)",
                  color: "var(--brand)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  letterSpacing: "-0.01em",
                  boxShadow: "0 0 0 6px rgba(10, 102, 255, 0.05)",
                  flexShrink: 0,
                }}
              >
                {member.initials}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    marginTop: "0.2rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--brand)",
                  }}
                >
                  {member.role}
                </div>
                <p
                  className="muted"
                  style={{
                    marginTop: "0.65rem",
                    fontSize: "0.97rem",
                    lineHeight: 1.6,
                  }}
                >
                  {member.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
