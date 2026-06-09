"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    
    // Total load time of 2.6 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2600);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }} // Smooth slide up reveal
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.kiteContainer}>
            <motion.svg 
              width="80" 
              height="120" 
              viewBox="0 0 100 150" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Kite Body */}
              <motion.path 
                d="M50 10 L90 50 L50 100 L10 50 Z" 
                initial={{ pathLength: 0, fill: "rgba(255,255,255,0)" }}
                animate={{ pathLength: 1, fill: "rgba(255,255,255,1)" }}
                transition={{ 
                  pathLength: { duration: 1.2, ease: "easeInOut" },
                  fill: { duration: 0.8, delay: 0.8, ease: "easeInOut" }
                }}
              />
              {/* Kite Tail */}
              <motion.path 
                d="M50 100 Q 70 120 50 135 T 50 170" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              />
            </motion.svg>
            
            <motion.div
              className={styles.loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Paperkite<br />
              <span style={{ fontWeight: 400, color: "#888" }}>Labs.</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
