"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from './KiteCursor.module.css';

export default function KiteCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Motion values for instant mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the Kite (follows closely)
  const kiteSpringConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const kiteX = useSpring(mouseX, kiteSpringConfig);
  const kiteY = useSpring(mouseY, kiteSpringConfig);

  // Smoother, looser springs for the Tail dots to create a flowing effect
  const tail1X = useSpring(mouseX, { damping: 15, stiffness: 200, mass: 0.8 });
  const tail1Y = useSpring(mouseY, { damping: 15, stiffness: 200, mass: 0.8 });
  
  const tail2X = useSpring(mouseX, { damping: 12, stiffness: 150, mass: 1 });
  const tail2Y = useSpring(mouseY, { damping: 12, stiffness: 150, mass: 1 });
  
  const tail3X = useSpring(mouseX, { damping: 10, stiffness: 100, mass: 1.2 });
  const tail3Y = useSpring(mouseY, { damping: 10, stiffness: 100, mass: 1.2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Hide native cursor
    document.body.style.cursor = 'none';

    // Also hide cursor on all interactive elements
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.cursorContainer}>
      {/* Colorful Tail Dots */}
      <motion.div 
        className={`${styles.tailDot} ${styles.color1}`}
        style={{ x: tail3X, y: tail3Y }}
      />
      <motion.div 
        className={`${styles.tailDot} ${styles.color2}`}
        style={{ x: tail2X, y: tail2Y }}
      />
      <motion.div 
        className={`${styles.tailDot} ${styles.color3}`}
        style={{ x: tail1X, y: tail1Y }}
      />

      {/* Main Kite */}
      <motion.div 
        className={styles.kite}
        style={{ 
          x: kiteX, 
          y: kiteY,
          rotate: 45 // Kites are usually tilted diamonds
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top half of kite */}
          <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="url(#kiteGradient)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round"/>
          {/* Cross frame */}
          <line x1="12" y1="2" x2="12" y2="22" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5"/>
          
          <defs>
            <linearGradient id="kiteGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8A2BE2" /> {/* Violet */}
              <stop offset="1" stopColor="#FF1493" /> {/* Deep Pink */}
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}
