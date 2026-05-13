import { process } from "@/data/siteContent";

export default function Process() {
  return (
    <section id="jak-to-probiha" className="section">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{process.eyebrow}</span>
          <h2 className="h2 mt-2">{process.title}</h2>
          <p className="lead mt-4">{process.lead}</p>
        </div>

        <ol className="process-timeline mt-12 md:mt-16" role="list">
          {process.steps.map((step) => (
            <li key={step.number} className="process-step">
              <div className="process-step-dot" aria-hidden="true">
                {step.number}
              </div>
              <h3 className="h3">{step.title}</h3>
              <p className="muted mt-2 text-[0.95rem]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
