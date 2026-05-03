import { COMMUNITY_SERVICES, type ServiceIcon } from "../data/services";
import styles from "../styles.module.css";

function ServiceIconSvg({ icon }: { icon: ServiceIcon }) {
  switch (icon) {
    case "wrench":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M14.7 6.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-2-2a1 1 0 010-1.4l8-8a1 1 0 011.4 0zM17 13l4 4-3 3-4-4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M13 2L4 14h6l-1 8 9-12h-6z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "drop":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3c-3 5-6 7-6 11a6 6 0 0012 0c0-4-3-6-6-11z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "brush":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 20l8-16 8 16M7 14h10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "hammer":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M4 10h16M10 4v16" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "gear":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2v20M2 12h20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <header className={styles.sectionHeading}>
          <h2>Naše služby</h2>
          <p>
            Nabízíme širokou škálu služeb pro domácnosti i firmy. Pokud hledáte
            něco konkrétního, neváhejte nás kontaktovat.
          </p>
        </header>
        <div className={styles.servicesGrid}>
          {COMMUNITY_SERVICES.map((s) => (
            <article key={s.title} className={styles.serviceCard}>
              <ServiceIconSvg icon={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
