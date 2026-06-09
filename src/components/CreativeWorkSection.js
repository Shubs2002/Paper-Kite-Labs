"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CreativeWorkSection.module.css';
import Image from 'next/image';

// Utility to optimize Cloudinary URLs automatically
export function optimizeCloudinaryUrl(url) {
  if (!url || !url.includes('cloudinary.com')) return url;
  if (url.includes('/upload/q_') || url.includes('/upload/f_')) return url;
  return url.replace('/upload/', '/upload/q_auto,f_auto,w_1200/');
}

// Cinematic placeholder assets for the Film Strip
const filmStripItems = [
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540656155911-c146e2fc641b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
];

// Duplicate items to make the cylinder large enough
const cylinderItems = [...filmStripItems, ...filmStripItems];
const TOTAL_ITEMS = cylinderItems.length; // 10 items
const DEGREES_PER_ITEM = 360 / TOTAL_ITEMS; // 36 degrees each

// Mixed heights for Pinterest Masonry Grid testing
const masonryItems = [
  { title: "Brand Anthem", category: "Film", url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop" },
  { title: "Pitch Deck 2026", category: "Presentation", url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop" },
  { title: "Product Teaser", category: "Animation", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&h=900&auto=format&fit=crop" },
  { title: "Annual Report", category: "Editorial", url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=800&auto=format&fit=crop" },
  { title: "Social Campaign", category: "Design", url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&h=800&auto=format&fit=crop" },
  { title: "Keynote Visuals", category: "Presentation", url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
];

export default function CreativeWorkSection() {
  const [radius, setRadius] = useState(850);

  // Adjust radius based on screen size so it looks good on mobile too
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setRadius(500); // Smaller cylinder for mobile
      } else {
        setRadius(850); // Massive cylinder for desktop
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.creativeSection} id="creative">
      <div className={styles.header}>
        <span className={styles.sectionSubtitle}>Creative Archive</span>
        <h2 className={styles.sectionTitle}>Films & Visions</h2>
      </div>

      {/* Part 1: The True 3D Curved Cylinder Film Strip */}
      <div className={styles.filmStripWrapper}>
        <div className={styles.filmTrack3D}>
          {/* 
            Framer motion rotates the entire cylinder infinitely.
            This creates the illusion of a perfectly curved strip reeling past.
          */}
          <motion.div 
            className={styles.marqueeContainer}
            animate={{ rotateY: [0, -360] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30 // Cinematic slow spin
            }}
          >
            {cylinderItems.map((item, i) => {
              // Calculate the 3D position of each frame on the cylinder
              const rotateY = i * DEGREES_PER_ITEM;
              
              return (
                <div 
                  key={i} 
                  className={styles.filmFrame}
                  style={{
                    transform: `rotateY(${rotateY}deg) translateZ(-${radius}px)`
                  }}
                >
                  <div className={styles.frameContent}>
                    <Image 
                      src={optimizeCloudinaryUrl(item)} 
                      alt={`Film frame ${i}`} 
                      fill 
                      className={styles.frameImage}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Part 2: The Pinterest Masonry Grid */}
      <div className={styles.masonryContainer}>
        <div className={styles.masonryGrid}>
          {masonryItems.map((item, i) => (
            <div key={i} className={styles.masonryItem}>
              <img 
                src={optimizeCloudinaryUrl(item.url)} 
                alt={item.title} 
                className={styles.masonryImage} 
                loading="lazy"
              />
              <div className={styles.masonryOverlay}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <span className={styles.itemCategory}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
