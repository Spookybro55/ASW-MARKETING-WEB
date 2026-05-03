import { COMMUNITY_FAQ } from "../data/faq";
import styles from "../styles.module.css";

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
          {COMMUNITY_FAQ.map((q, idx) => (
            <details
              key={q.question}
              className={styles.faqItem}
              open={idx < DEFAULT_OPEN_COUNT}
            >
              <summary>{q.question}</summary>
              <div className={styles.faqItemBody}>
                <p>{q.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
