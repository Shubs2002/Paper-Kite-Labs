"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WorkSection.module.css';
import Image from 'next/image';

const projects = [
  {
    id: "forever",
    filename: "forever_consultants.json",
    title: "Forever Consultants",
    client: "Forever Consultants",
    description: "Full-service financial advisory platform featuring dynamic booking systems, vCards, SEO optimization, and Google Analytics.",
    link: "https://www.foreverconsultants.in",
    tech: ["Next.js", "Node.js", "SEO"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: "aadya",
    filename: "aadya_creation.json",
    title: "Aadya Creation",
    client: "Aadya Creation",
    description: "Robust full-stack e-commerce experience with seamless UI, secure payment gateways, and inventory management.",
    link: "#",
    tech: ["React", "Stripe", "Express"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2400&auto=format&fit=crop"
  },
  {
    id: "avpe",
    filename: "avpe_engine.json",
    title: "AVPE",
    client: "Artrage Studios",
    description: "AI-powered video production ecosystem automating scriptwriting, character design, and video creation for social media.",
    link: "#",
    tech: ["Python", "TensorFlow", "React"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2400&auto=format&fit=crop"
  }
];

const JsonSyntaxHighlighter = ({ data }) => {
  const jsonString = JSON.stringify(data, null, 2);
  
  // A very basic regex replacer for JSON syntax highlighting
  const highlighted = jsonString.split('\n').map((line, i) => {
    // Check if line is a property key
    if (line.includes('":')) {
      const parts = line.split('":');
      const key = parts[0] + '"';
      let value = parts[1];
      
      // Colorize value
      if (value.includes('"')) {
        value = value.replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
      } else if (value.includes('true') || value.includes('false')) {
        value = value.replace(/true|false/g, '<span class="boolean">$&</span>');
      } else if (/\d/.test(value)) {
        value = value.replace(/\d+/g, '<span class="number">$&</span>');
      }

      return (
        <div key={i}>
          <span className="key" dangerouslySetInnerHTML={{ __html: key }} />
          <span className="punctuation">:</span>
          <span dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      );
    }
    
    // Fallback for brackets
    return <div key={i} className="punctuation">{line}</div>;
  });

  return <div className={styles.codeArea}>{highlighted}</div>;
};

export default function WorkSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [isCompiled, setIsCompiled] = useState(false);

  // Trigger terminal compile sequence when project changes
  useEffect(() => {
    setIsCompiled(false);
    setTerminalLogs([]);

    const sequence = [
      { text: `> Loading module ${activeProject.filename}...`, delay: 200, type: 'info' },
      { text: "> Resolving dependencies [OK]", delay: 600, type: 'success' },
      { text: "> npm run build:ui", delay: 1000, type: 'prompt' },
      { text: "> Compiling visual assets...", delay: 1400, type: 'info' },
      { text: "> UI compiled successfully! Launching interface...", delay: 2000, type: 'success' }
    ];

    const timeouts = [];

    sequence.forEach((step, index) => {
      const timeout = setTimeout(() => {
        setTerminalLogs(prev => [...prev, step]);
        
        // If it's the last step, launch the UI
        if (index === sequence.length - 1) {
          setTimeout(() => setIsCompiled(true), 400); // Small pause before burst
        }
      }, step.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [activeProject]);

  return (
    <section className={styles.compilerSection} id="work">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionSubtitle}>The Compiler</span>
          <h2 className={styles.sectionTitle}>Technical Projects</h2>
        </div>

        <div className={styles.ideContainer}>
          
          {/* IDE Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>Explorer</div>
            <ul className={styles.fileList}>
              {projects.map((p) => (
                <li 
                  key={p.id} 
                  className={`${styles.fileItem} ${activeProject.id === p.id ? styles.active : ''}`}
                  onClick={() => {
                    if (activeProject.id !== p.id) {
                      setActiveProject(p);
                    }
                  }}
                >
                  <svg className={styles.fileIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                  {p.filename}
                </li>
              ))}
            </ul>
          </div>

          {/* IDE Main Pane */}
          <div className={styles.editorPane}>
            <div className={styles.tabs}>
              <div className={styles.tab}>
                <svg className={styles.fileIcon} viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                {activeProject.filename}
              </div>
            </div>

            {/* Code View */}
            <JsonSyntaxHighlighter data={{
              id: activeProject.id,
              client: activeProject.client,
              title: activeProject.title,
              description: activeProject.description,
              tech_stack: activeProject.tech,
              url: activeProject.link,
              status: "READY_FOR_COMPILE"
            }} />

            {/* Terminal View */}
            <div className={styles.terminalPane}>
              <div className={styles.terminalHeader}>Terminal</div>
              <div className={styles.terminalOutput}>
                {terminalLogs.map((log, i) => (
                  <motion.div 
                    key={i} 
                    className={`${styles.terminalLine} ${styles[log.type]}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {log.text}
                  </motion.div>
                ))}
                {!isCompiled && (
                  <motion.div 
                    className={styles.terminalLine}
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    _
                  </motion.div>
                )}
              </div>
            </div>

            {/* The Compiled UI Reveal */}
            <AnimatePresence>
              {isCompiled && (
                <motion.div 
                  className={styles.compileOverlay}
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 50 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                  <button className={styles.closeCompile} onClick={() => setIsCompiled(false)} title="Back to Code">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>

                  <motion.div 
                    className={styles.compiledCard}
                    whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
                    transition={{ type: "spring", damping: 20 }}
                    style={{ transformPerspective: 1000 }}
                  >
                    <div className={styles.compiledImageContainer}>
                      <Image 
                        src={activeProject.link !== "#" 
                          ? `https://api.microlink.io?url=${encodeURIComponent(activeProject.link)}&screenshot=true&meta=false&embed=screenshot.url` 
                          : activeProject.image} 
                        alt={activeProject.title}
                        fill
                        unoptimized={true}
                        className={styles.compiledImage}
                      />
                      <div className={styles.imageOverlay}></div>
                    </div>
                    
                    <div className={styles.compiledBody}>
                      <div className={styles.cardHeader}>
                        <div>
                          <h3 className={styles.compiledTitle}>{activeProject.title}</h3>
                          <span className={styles.compiledClient}>Client: {activeProject.client}</span>
                        </div>
                        <div className={styles.techStack}>
                          {activeProject.tech.map((t, i) => (
                            <span key={i} className={styles.techTag}>{t}</span>
                          ))}
                        </div>
                      </div>

                      <p className={styles.compiledDesc}>{activeProject.description}</p>

                      <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className={styles.visitButton}>
                        Launch Application
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </motion.div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
