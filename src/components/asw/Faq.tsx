import { Icon } from "./icons";

/*
 * FAQ accordion built on native <details>/<summary> — accessible and works
 * without JS. Each item is independently expandable. Chevron rotates via the
 * [open] state. Used on the homepage and detail pages.
 */
export function Faq({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display font-semibold text-foreground [&::-webkit-details-marker]:hidden">
            {item.q}
            <Icon
              name="chevron-down"
              className="h-5 w-5 shrink-0 text-brand-light transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="px-6 pb-5 leading-relaxed text-fg-muted">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
