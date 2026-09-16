import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Hexagon } from 'lucide-react';
import { siteConfig } from '../config/site';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoIconWrapper}>
              <Hexagon size={24} strokeWidth={2.5} className={styles.logoIcon} />
            </div>
            {siteConfig.name}
          </Link>
          <p className={styles.tagline}>Technology, Built Different.</p>
        </div>

        <div className={styles.linksCol}>
          <h3>Solutions</h3>
          <ul>
            <li><Link to="/solutions#web">Web Experiences</Link></li>
            <li><Link to="/solutions#mobile">Mobile Applications</Link></li>
            <li><Link to="/solutions#ai">AI Systems</Link></li>
            <li><Link to="/solutions#cloud">Cloud & Backend</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/work">Selected Work</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h3>Connect</h3>
          <ul>
            <li><a href={`mailto:${siteConfig.contact.email}`}>Email Us <ArrowUpRight size={14}/></a></li>
            <li><a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a></li>
            <li><a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer">Twitter/X <ArrowUpRight size={14}/></a></li>
            <li><a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14}/></a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomFlex}`}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className={styles.legal}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
