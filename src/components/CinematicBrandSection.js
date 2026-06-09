"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './CinematicBrandSection.module.css';

export default function CinematicBrandSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Act 1 & 2: THINK CREATIVITY? 
  // Fades in (0 - 0.2), stays (0.2 - 0.3), scales up & fades out into blur (0.3 - 0.45)
  const questionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.45], [0, 1, 1, 0]);
  const questionScale = useTransform(scrollYProgress, [0, 0.45], [0.8, 1.3]);
  const questionBlur = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.45], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(20px)"]);

  // Act 3 & 4: THINK PAPER KITE LABS.
  // Slams into view (0.5 - 0.6), stays locked until curtain covers it (0.6 - 1.0)
  const answerOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const answerScale = useTransform(scrollYProgress, [0.5, 1], [0.9, 1.05]);
  const answerBlur = useTransform(scrollYProgress, [0.5, 0.6], ["blur(20px)", "blur(0px)"]);

  return (
    <section className={styles.brandSection} ref={containerRef}>
      <div className={styles.stickyContainer}>
        
        {/* Question */}
        <motion.div 
          className={styles.textContainer}
          style={{ opacity: questionOpacity, scale: questionScale, filter: questionBlur }}
        >
          <h2 className={styles.questionText}>THINK CREATIVITY.</h2>
        </motion.div>

        {/* Answer */}
        <motion.div 
          className={styles.textContainer}
          style={{ opacity: answerOpacity, scale: answerScale, filter: answerBlur }}
        >
          <h2 className={styles.answerText}>THINK PAPER KITE LABS.</h2>
        </motion.div>

      </div>
    </section>
  );
}
