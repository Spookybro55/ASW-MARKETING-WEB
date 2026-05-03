import { COMMUNITY_STEPS, type StepIcon } from "../data/steps";
import styles from "../styles.module.css";

function StepIconSvg({ icon }: { icon: StepIcon }) {
  switch (icon) {
    case "chat":
      return (
        <svg className={styles.stepIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg className={styles.stepIcon} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="5" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            d="M4 9h16M8 3v4M16 3v4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg className={styles.stepIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20 7L9 18l-5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={styles.stepIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 11l3 3 7-7M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.container}>
        <header className={styles.sectionHeading}>
          <h2>Jak to funguje</h2>
          <p>Spolupráce s námi je jednoduchá a transparentní</p>
        </header>
        <div className={styles.steps}>
          {COMMUNITY_STEPS.map((step) => (
            <article key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <StepIconSvg icon={step.icon} />
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
