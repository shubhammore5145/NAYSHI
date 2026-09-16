import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Cpu, Smartphone, Globe, Layers, Zap, PenTool, Database } from 'lucide-react';
import { siteConfig } from '../config/site';
import styles from './Home.module.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Simulate initial loading experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const serviceIcons = {
    "01": <Globe size={24} />,
    "02": <Cpu size={24} />,
    "03": <Code size={24} />,
    "04": <Smartphone size={24} />,
    "05": <Zap size={24} />,
    "06": <Layers size={24} />,
    "07": <PenTool size={24} />,
    "08": <Database size={24} />
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            className={styles.loadingScreen}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h1 
              className={styles.loadingLogo}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              NAYSHI
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.home}>
        {/* 1. HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}></div>
          <div className={`container ${styles.heroGrid}`}>
            <motion.div 
              className={styles.heroContent}
              style={{ y: yHero, opacity: opacityHero }}
            >
              <motion.span 
                className={styles.heroLabel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                NAYSHI TECHNOLOGY
              </motion.span>
              <motion.h1 
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                Technology,<br/>Built Different.
              </motion.h1>
              <motion.p 
                className={styles.heroSubtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.6 }}
              >
                {siteConfig.description}
              </motion.p>
              <motion.div 
                className={styles.heroActions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
              >
                <Link to="/solutions" className={styles.primaryBtn}>
                  Explore NAYSHI <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className={styles.secondaryBtn}>
                  Start a Project <ArrowRight size={18} style={{ transform: 'rotate(-45deg)' }} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <iframe 
                src="https://my.spline.design/nexbotbyaximoriscopycopy-xXHaHtUb0IPOQXhmfVSXYsKV/" 
                frameBorder="0" 
                title="Spline 3D Interactive Model"
                className={styles.splineIframe}
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* 2. STATS SECTION */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {siteConfig.stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. INTRO SECTION */}
        <section className={styles.introSection}>
          <div className="container">
            <motion.h2 
              className={styles.introText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1 }}
            >
              We don't just build websites.<br/>
              <span className="glow-text">We build digital experiences.</span>
            </motion.h2>
          </div>
        </section>

        {/* 4. SERVICES SECTION */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>What We Build</h2>
            </div>
            <div className={styles.servicesGrid}>
              {siteConfig.services.map((service, idx) => (
                <motion.div 
                  key={service.id} 
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className={styles.serviceNumber}>{service.id}</span>
                  <div style={{ marginBottom: '16px', color: 'var(--accent-primary)' }}>
                    {serviceIcons[service.id]}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className={styles.techTags}>
                    {service.technologies.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. AI SECTION */}
        <section className={styles.aiSection}>
          <div className={styles.aiBg}></div>
          <div className={`container ${styles.aiContent}`}>
            <div>
              <motion.h2 
                className={styles.sectionTitle}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Intelligence,<br/>Built In.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: '1.25rem', marginBottom: '32px', maxWidth: '500px' }}
              >
                We integrate advanced AI agents, machine learning, and automation directly into your products to solve complex problems and scale operations effortlessly.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/solutions#ai" className={styles.primaryBtn}>Explore AI Solutions <ArrowRight size={18}/></Link>
              </motion.div>
            </div>
            <div className={styles.aiVisual}>
              <div className={styles.aiCore}></div>
              {/* Decorative elements representing AI dashboard/data */}
              <div style={{ position: 'absolute', top: '10%', left: '10%', width: '30%', height: '2px', background: 'var(--accent-primary)', opacity: 0.5 }}></div>
              <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '40%', height: '2px', background: 'var(--accent-secondary)', opacity: 0.5 }}></div>
            </div>
          </div>
        </section>

        {/* 6. PROCESS TIMELINE */}
        <section className={styles.processSection}>
          <div className="container">
            <h2 className={styles.sectionTitle} style={{ marginBottom: '40px' }}>Our Process</h2>
            <div className={styles.processList}>
              {['Discover', 'Strategize', 'Design', 'Build', 'Test', 'Launch', 'Scale'].map((step, idx) => (
                <motion.div 
                  key={step} 
                  className={styles.processItem}
                  initial={{ opacity: 0.2, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.5 }}
                >
                  <span className={styles.processNum}>0{idx + 1}</span>
                  <h3 className={styles.processName}>{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <motion.h2 
              className={styles.ctaTitle}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Ready to build <br/>what's next?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact" className={styles.primaryBtn} style={{ fontSize: '1.25rem', padding: '24px 48px' }}>
                Start Your Project <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
