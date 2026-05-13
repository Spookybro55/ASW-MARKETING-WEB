import { problemSolution } from "@/data/siteContent";

export default function ProblemSolution() {
  return (
    <section id="co-resime" className="section">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{problemSolution.eyebrow}</span>
          <h2 className="h2 mt-2">{problemSolution.title}</h2>
          <p className="lead mt-4">{problemSolution.lead}</p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {problemSolution.items.map((item) => (
            <li
              key={item.problem}
              className="card card-interactive"
              style={{ padding: "1.85rem" }}
            >
              <div
                className="text-[0.85rem] font-semibold uppercase"
                style={{
                  color: "var(--fg-soft)",
                  letterSpacing: "0.07em",
                }}
              >
                Co lidi řeší
              </div>
              <p
                className="mt-2 font-semibold"
                style={{ color: "var(--fg)", fontSize: "1.05rem", lineHeight: 1.5 }}
              >
                {item.problem}
              </p>
              <div
                style={{
                  marginTop: "1.1rem",
                  paddingTop: "1.1rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div
                  className="text-[0.85rem] font-semibold uppercase"
                  style={{
                    color: "var(--brand)",
                    letterSpacing: "0.07em",
                    marginBottom: "0.55rem",
                  }}
                >
                  Jak to řešíme
                </div>
                <p
                  style={{ color: "var(--fg)", fontSize: "1rem", lineHeight: 1.6 }}
                >
                  {item.solution}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
