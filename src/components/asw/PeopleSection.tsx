import Image from "next/image";
import { Section } from "./Section";
import { Button } from "./Button";
import { Icon, CheckIcon } from "./icons";
import { team, kontaktPage } from "@/data/site";

/*
 * „S kým budete řešit nový web" — trust section on /kontakt. Replaces the old
 * three identical initials-circle cards. Layout encodes the real workflow:
 *   - Tomáš = dominant card (large photo, role, trust badges, contacts, CTA) —
 *     the first human a client talks to.
 *   - Jan + Sebastián = visually linked "technický tým" under a shared heading,
 *     two smaller cards → read as one realisation team, not three salespeople.
 * Dark-first, real studio photos (public/team/), next/image with face-biased
 * object-position so portraits never crop across the face.
 */

const s = kontaktPage.teamSection;

function Contact({
  phone,
  phoneHref,
  email,
  emailHref,
  compact = false,
}: {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-2 ${compact ? "text-sm" : ""}`}>
      <a
        href={phoneHref}
        className="inline-flex items-center gap-2.5 font-medium text-foreground transition-colors hover:text-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-2)]"
        data-cta-label="team_phone"
        data-cta-location="tym"
      >
        <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-light" />
        {phone}
      </a>
      <a
        href={emailHref}
        className="inline-flex items-center gap-2.5 break-all font-medium text-foreground transition-colors hover:text-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-2)]"
        data-cta-label="team_email"
        data-cta-location="tym"
      >
        <Icon name="file-text" className="h-4 w-4 shrink-0 text-brand-light" />
        {email}
      </a>
    </div>
  );
}

export function PeopleSection() {
  const { lead, tech } = team;

  return (
    <Section tone="muted" id="tym">
      {/* Heading */}
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-2">
          {s.eyebrow}
        </p>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-[2rem]">
          {s.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">{s.intro}</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        {/* ── Tomáš — dominant card ─────────────────────────────────────── */}
        <article className="overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-lg lg:col-span-7">
          <div className="grid sm:grid-cols-[16rem_1fr]">
            {/* photo */}
            <div className="relative aspect-[4/5] w-full sm:aspect-auto sm:min-h-[24rem]">
              <Image
                src={lead.photo}
                alt={lead.alt}
                fill
                priority
                sizes="(min-width: 640px) 256px, 100vw"
                className="object-cover object-[50%_22%]"
              />
              {/* jemný gradient dole pro splynutí s kartou na mobilu */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[var(--bg-card)]/30 sm:hidden"
              />
            </div>

            {/* content */}
            <div className="p-6 sm:p-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-light">
                <Icon name="phone" className="h-3.5 w-3.5" />
                {lead.cardHeading}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                {lead.name}
              </h3>
              <p className="mt-1 font-medium text-brand-light">{lead.role}</p>
              <p className="mt-3 leading-relaxed text-fg-muted">{lead.bio}</p>

              <ul role="list" className="mt-5 grid gap-2 sm:grid-cols-2">
                {lead.badges.map((badge) => (
                  <li
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-soft px-3 py-2 text-sm text-foreground"
                  >
                    <CheckIcon className="h-4 w-4 shrink-0 text-brand-light" />
                    {badge}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-4">
                <Contact
                  phone={lead.phone}
                  phoneHref={lead.phoneHref}
                  email={lead.email}
                  emailHref={lead.emailHref}
                />
                <Button
                  href={lead.ctaHref}
                  size="md"
                  ctaLabel="team_tomas"
                  ctaLocation="tym"
                  className="self-start"
                >
                  {lead.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* ── Technický tým — linked block ──────────────────────────────── */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              {s.techHeading}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              {s.techText}
            </p>
          </div>

          {tech.map((person) => (
            <article
              key={person.slug}
              className="flex gap-4 rounded-2xl border border-border bg-surface p-4 shadow-md"
            >
              <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-xl sm:h-36 sm:w-28">
                <Image
                  src={person.photo}
                  alt={person.alt}
                  fill
                  sizes="(min-width: 640px) 112px, 96px"
                  className="object-cover object-[50%_20%]"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-display text-lg font-bold text-foreground">
                  {person.name}
                </h4>
                <p className="mt-0.5 text-sm font-medium text-brand-light">
                  {person.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {person.bio}
                </p>
                <div className="mt-3">
                  <Contact
                    compact
                    phone={person.phone}
                    phoneHref={person.phoneHref}
                    email={person.email}
                    emailHref={person.emailHref}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
