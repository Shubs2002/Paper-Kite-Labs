import styles from './CTASection.module.css';

export default function CTASection({ overlap = false }) {
  return (
    <section className={`${styles.ctaSection} ${overlap ? styles.overlap : ''}`} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Working on something?</h2>
        <p className={styles.subtitle}>
          Tell us about your challenge and we'll show you how Paperkite Labs<br />
          can solve it.
        </p>
        
        <div className={styles.actionGroup}>
          <a href="mailto:contact@paperkitelabs.com" className={styles.ctaButton}>
            Start a Conversation
          </a>
          <a href="mailto:contact@paperkitelabs.com" className={styles.emailText}>
            contact@paperkitelabs.com
          </a>
        </div>
      </div>
    </section>
  );
}
