import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import styles from './WhatsAppWidget.module.css';

const WhatsAppWidget = () => {
  const defaultMessage = "Hi NAYSHI, I would like to discuss a technology project.";
  const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noreferrer"
      className={styles.widget}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppWidget;
