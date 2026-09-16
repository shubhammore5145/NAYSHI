import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Transparent Plans.<br />
            <span className="glow-text">Premium Execution.</span>
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Choose the perfect engagement model for your business. From targeted landing pages to enterprise-grade infrastructure.
          </motion.p>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className={`container ${styles.pricingGrid}`}>
          {siteConfig.pricing.map((plan, idx) => {
            const isPopular = plan.tier === "Growth";
            
            return (
              <motion.div 
                key={plan.tier}
                className={`${styles.planCard} ${isPopular ? styles.popularCard : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {isPopular && <div className={styles.popularBadge}>Most Popular</div>}
                
                <div className={styles.planHeader}>
                  <h2>{plan.tier}</h2>
                  <p>{plan.idealFor}</p>
                </div>

                <div className={styles.planFeatures}>
                  <p className={styles.featuresTitle}>What's included:</p>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <Check size={18} className={styles.checkIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.planAction}>
                  <Link 
                    to="/contact" 
                    className={isPopular ? styles.primaryBtn : styles.secondaryBtn}
                  >
                    {plan.cta} <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
