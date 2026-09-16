import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.pageWrapper}>
      
      <section className={styles.hero}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Built for<br/>What's Next.
          </motion.h1>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={`container ${styles.bentoGrid}`}>
          
          <motion.div 
            className={`${styles.bentoItem} ${styles.large}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.label}>Our Mission</span>
            <h2>To engineer digital infrastructure that gives ambitious businesses an unfair advantage.</h2>
            <p>We saw an industry plagued by bloated WordPress templates and sluggish software. We founded NAYSHI to bring Silicon Valley-grade engineering to everyone else. Performance, security, and aesthetics are not optional—they are the baseline.</p>
          </motion.div>

          <motion.div 
            className={styles.bentoItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.label}>The NAYSHI Standard</span>
            <ul className={styles.standardList}>
              <li>Zero technical debt architecture.</li>
              <li>Sub-second page load times.</li>
              <li>Aesthetic obsession.</li>
              <li>Scale-ready from day one.</li>
            </ul>
          </motion.div>

          <motion.div 
            className={`${styles.bentoItem} ${styles.imageBox}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Server Infrastructure" />
          </motion.div>

        </div>
      </section>

      <section className={styles.techStackSection}>
        <div className="container">
          <div className={styles.techHeader}>
            <h2>Our Technology Arsenal</h2>
            <p>We refuse to use legacy systems. We build exclusively with modern, scalable frameworks.</p>
          </div>
          
          <div className={styles.techGrid}>
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'TensorFlow', 'PostgreSQL'].map((tech, i) => (
              <motion.div 
                key={tech}
                className={styles.techCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span>{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
