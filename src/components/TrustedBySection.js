import styles from './TrustedBySection.module.css';

export default function TrustedBySection() {
  return (
    <section className={styles.trustedSection} id="trusted-by">
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>TRUSTED BY</h3>
        
        <div className={styles.grid}>
          {/* Client 1 */}
          <div className={styles.clientCard}>
            <div className={styles.logoPlaceholder}></div>
            <p className={styles.clientText}>
              JSW Steel — Automated CAD drawing review, cutting engineering hours significantly
            </p>
          </div>

          {/* Client 2 */}
          <div className={styles.clientCard}>
            <div className={styles.logoPlaceholder}></div>
            <p className={styles.clientText}>
              Financial Investigation Platform — Days of manual bank analysis reduced to minutes
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <span className={styles.statItem}>2 Industries Served</span>
          <span className={styles.statDot}>·</span>
          <span className={styles.statItem}>4 Core Services</span>
          <span className={styles.statDot}>·</span>
          <span className={styles.statItem}>100% Custom Built</span>
        </div>
      </div>
    </section>
  );
}
