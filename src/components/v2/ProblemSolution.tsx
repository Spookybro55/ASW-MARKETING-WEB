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

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {problemSolution.items.map((item) => (
            <li key={item.problem} className="card">
              <div
                className="text-[0.95rem] font-semibold"
                style={{ color: "var(--fg-muted)" }}
              >
                {item.problem}
              </div>
              <div
                className="mt-3 flex items-start gap-2"
                style={{ color: "var(--fg)" }}
              >
                <span
                  aria-hidden
                  style={{
                    color: "var(--brand)",
                    fontWeight: 700,
                    marginTop: "1px",
                  }}
                >
                  →
                </span>
                <p>{item.solution}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
