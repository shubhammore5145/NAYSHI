import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.pageWrapper}>
      
      <section className={styles.heroSection}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let's Talk.
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We are always looking for new challenges. Reach out to discuss your next project, or just to say hello.
          </motion.p>
        </div>
      </section>

      <section className={styles.contactDetailsSection}>
        <div className={`container ${styles.grid}`}>
          
          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.iconWrapper}>
              <Mail size={32} />
            </div>
            <h2>Email Us</h2>
            <p>For project inquiries, partnerships, and general questions.</p>
            <a href={`mailto:${siteConfig.contact.email}`} className={styles.contactLink}>
              {siteConfig.contact.email} <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.iconWrapper}>
              <Phone size={32} />
            </div>
            <h2>Call Us</h2>
            <p>Available Mon-Fri, 9am - 6pm (IST).</p>
            <a href={`tel:${siteConfig.contact.phone}`} className={styles.contactLink}>
              {siteConfig.contact.phone} <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <MessageCircle size={32} />
            </div>
            <h2>WhatsApp</h2>
            <p>Direct chat for quick questions and instant support.</p>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className={styles.contactLink} target="_blank" rel="noreferrer">
              Message Us <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div 
            className={`${styles.contactCard} ${styles.fullWidth}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <MapPin size={32} />
            </div>
            <h2>Location</h2>
            <p>{siteConfig.contact.location}</p>
            <div className={styles.locationVisual}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Our Location" />
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
