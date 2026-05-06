import type { Section } from "../questions";
import QuestionCard from "./QuestionCard";

type Props = {
  section: Section;
};

export default function QuestionnaireSection({ section }: Props) {
  return (
    <section
      id={section.id}
      className="border-t border-white/[0.06] px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md border border-[var(--brand)]/25 bg-[var(--brand)]/10 px-2 text-xs font-bold text-[var(--brand)]">
              Sekce {section.number}
            </span>
            <span className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
            {section.title}
          </h2>

          {section.intro && (
            <p className="mt-3 text-sm leading-6 text-gray-400 md:text-base md:leading-7">
              {section.intro}
            </p>
          )}
        </div>

        <div className="mt-8 space-y-4 md:mt-10 md:space-y-5">
          {section.questions.map((q) => (
            <QuestionCard key={q.name} question={q} />
          ))}
        </div>
      </div>
    </section>
  );
}
