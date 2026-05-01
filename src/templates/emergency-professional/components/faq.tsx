import { EMERGENCY_FAQ } from "../data/faq";
import styles from "../styles.module.css";

// Default-open the first FAQ item so the user lands on a non-empty FAQ
// section. Using the native <details open> attribute keeps this server-
// rendered (no client component, no state, no JS hydration cost).
const DEFAULT_OPEN_COUNT = 1;

export default function Faq() {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <header className={styles.sectionHeading}>
          <h2>Časté otázky</h2>
          <p>Odpovědi na nejčastější dotazy</p>
        </header>
        <div className={styles.faqList}>
          {EMERGENCY_FAQ.map((item, idx) => (
            <details
              key={item.q}
              className={styles.faqItem}
              open={idx < DEFAULT_OPEN_COUNT}
            >
              <summary>{item.q}</summary>
              <div className={styles.faqItemBody}>
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
