import type { Question } from "../questions";

type Props = {
  question: Question;
};

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-[var(--brand)]/50 focus:ring-1 focus:ring-[var(--brand)]/30";

export default function QuestionCard({ question }: Props) {
  const fieldId = `bd-${question.name}`;
  const followupId = question.followupName
    ? `bd-${question.followupName}`
    : undefined;

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-white/20 md:p-7">
      <div className="absolute left-0 top-6 h-8 w-1 rounded-r-full bg-[var(--brand)]/40 md:top-8" />

      <div className="flex items-start gap-4">
        <div className="hidden md:flex h-9 min-w-9 items-center justify-center rounded-lg border border-[var(--brand)]/25 bg-[var(--brand)]/10 px-2.5 text-xs font-bold text-[var(--brand)]">
          {question.number.padStart(2, "0")}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 md:hidden">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md border border-[var(--brand)]/25 bg-[var(--brand)]/10 px-2 text-xs font-bold text-[var(--brand)]">
              {question.number.padStart(2, "0")}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Otázka
            </span>
          </div>

          {question.type === "textarea" ? (
            <label
              htmlFor={fieldId}
              className="mt-3 block text-base font-semibold leading-snug text-white md:mt-0 md:text-lg"
            >
              {question.label}
            </label>
          ) : (
            <p
              id={`${fieldId}-legend`}
              className="mt-3 block text-base font-semibold leading-snug text-white md:mt-0 md:text-lg"
            >
              {question.label}
            </p>
          )}

          {question.description && (
            <p className="mt-2 text-sm leading-6 text-gray-400">
              {question.description}
            </p>
          )}

          <div className="mt-4">
            {question.type === "textarea" && (
              <textarea
                id={fieldId}
                name={question.name}
                rows={4}
                className={`${inputClass} resize-y`}
                placeholder="Vaše odpověď…"
              />
            )}

            {question.type === "radio" && question.options && (
              <fieldset
                aria-labelledby={`${fieldId}-legend`}
                className="space-y-2"
              >
                {question.options.map((opt, i) => {
                  const optId = `${fieldId}-${i}`;
                  return (
                    <label
                      key={opt}
                      htmlFor={optId}
                      className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-gray-200 transition hover:border-[var(--brand)]/30 hover:bg-white/[0.05] has-[:checked]:border-[var(--brand)]/50 has-[:checked]:bg-[var(--brand)]/[0.08] has-[:checked]:text-white md:text-base"
                    >
                      <input
                        id={optId}
                        type="radio"
                        name={question.name}
                        value={opt}
                        className="mt-1 h-4 w-4 shrink-0 accent-[var(--brand)]"
                      />
                      <span className="leading-6">{opt}</span>
                    </label>
                  );
                })}
              </fieldset>
            )}

            {question.type === "checkbox" && question.options && (
              <fieldset
                aria-labelledby={`${fieldId}-legend`}
                className="grid gap-2 sm:grid-cols-2"
              >
                {question.options.map((opt, i) => {
                  const optId = `${fieldId}-${i}`;
                  return (
                    <label
                      key={opt}
                      htmlFor={optId}
                      className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-gray-200 transition hover:border-[var(--brand)]/30 hover:bg-white/[0.05] has-[:checked]:border-[var(--brand)]/50 has-[:checked]:bg-[var(--brand)]/[0.08] has-[:checked]:text-white md:text-base"
                    >
                      <input
                        id={optId}
                        type="checkbox"
                        name={question.name}
                        value={opt}
                        className="mt-1 h-4 w-4 shrink-0 accent-[var(--brand)]"
                      />
                      <span className="leading-6">{opt}</span>
                    </label>
                  );
                })}
              </fieldset>
            )}
          </div>

          {question.hasFollowup && question.followupName && followupId && (
            <div className="mt-4">
              <label
                htmlFor={followupId}
                className="mb-1.5 block text-sm text-gray-300"
              >
                {question.followupLabel ?? "Doplňující informace"}
              </label>
              <textarea
                id={followupId}
                name={question.followupName}
                rows={3}
                className={`${inputClass} resize-y`}
                placeholder={
                  question.followupPlaceholder ?? "Doplňte prosím…"
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
