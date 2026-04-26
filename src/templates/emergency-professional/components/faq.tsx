import { EMERGENCY_FAQ } from "../data/faq";
import styles from "../styles.module.css";

export default function Faq() {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <header className={styles.sectionHeading}>
          <h2>Časté otázky</h2>
          <p>Odpovědi na nejčastější dotazy</p>
        </header>
        <div className={styles.faqList}>
          {EMERGENCY_FAQ.map((item) => (
            <details key={item.q} className={styles.faqItem}>
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
