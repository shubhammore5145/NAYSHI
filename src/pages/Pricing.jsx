import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { siteConfig } from '../config/site';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Zap size={14} /> Clear & Transparent
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Plans that scale with<br />
            <span className="glow-text">your ambition.</span>
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Whether you need a high-converting landing page or a complex AI-driven application, we have a tailored solution for you.
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
              >
                {isPopular && (
                  <div className={styles.popularBadge}>
                    <div className={styles.badgeGlow}></div>
                    <span>Most Popular</span>
                  </div>
                )}
                
                <div className={styles.planHeader}>
                  <div className={styles.tierName}>{plan.tier}</div>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>{plan.price}</span>
                  </div>
                  <div className={styles.duration}>{plan.duration}</div>
                  <p className={styles.idealFor}>{plan.idealFor}</p>
                </div>

                <div className={styles.planAction}>
                  <Link 
                    to="/contact" 
                    className={isPopular ? styles.primaryBtn : styles.secondaryBtn}
                  >
                    {plan.cta} <ArrowRight size={18} />
                  </Link>
                </div>

                <div className={styles.planDivider}></div>

                <div className={styles.planFeatures}>
                  <p className={styles.featuresTitle}>What's included</p>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <div className={styles.checkWrapper}>
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
