import styles from "../styles.module.css";
import { telHref } from "../utils";

function PhoneIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.05l-2.2 2.17z"
        fill="currentColor"
      />
    </svg>
  );
}

const FEATURES = [
  { title: "Transparentní ceny", desc: "vždy se dozvíte cenu předem" },
  { title: "Včetně materiálu", desc: "běžný spotřební materiál v ceně" },
  { title: "Platba na místě", desc: "hotově nebo kartou" },
  { title: "Záruka na práci", desc: "doklad se zárukou" },
];

export default function Pricing({ phone }: { phone: string }) {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <header className={styles.sectionHeading}>
          <h2>Orientační ceník</h2>
          <p>Ceny stanovujeme individuálně dle rozsahu zakázky.</p>
        </header>
        <div className={styles.pricingCallout}>
          <a
            href={telHref(phone)}
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.btnWide}`}
          >
            <PhoneIcon />
            ZAVOLAT PRO CENOVOU NABÍDKU
          </a>
        </div>
        <ul className={styles.priceFeatures}>
          {FEATURES.map((f) => (
            <li key={f.title}>
              <span className={styles.check}>✓</span>
              <div>
                <strong>{f.title}</strong> – {f.desc}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
