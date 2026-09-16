import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Moon, Sun, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import styles from './Navbar.module.css';

const Navbar = ({ onOpenCommand }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // In a full implementation, this would toggle class on document.documentElement
    if (newTheme === 'light') {
      document.documentElement.style.setProperty('--bg-base', '#ffffff');
      document.documentElement.style.setProperty('--bg-surface', '#f5f5f5');
      document.documentElement.style.setProperty('--text-primary', '#0a0a0a');
      document.documentElement.style.setProperty('--text-secondary', '#666666');
    } else {
      document.documentElement.style.setProperty('--bg-base', '#030303');
      document.documentElement.style.setProperty('--bg-surface', '#0f0f0f');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#a0a0a0');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        
        <Link to="/" className={styles.logo}>
          {siteConfig.name}
        </Link>

        <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={location.pathname === link.path ? styles.active : ''}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile only elements */}
          <div className={styles.mobileOnly}>
            <Link to="/contact" className={styles.mobileCta}>Let's Build <ArrowRight size={16} /></Link>
          </div>
        </nav>

        <div className={styles.actions}>
          <button 
            className={styles.searchBtn} 
            onClick={onOpenCommand}
            aria-label="Search or Command Menu"
          >
            <Search size={18} />
            <span className={styles.shortcut}>Ctrl K</span>
          </button>
          
          <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <Link to="/contact" className={styles.ctaBtn}>
            Let's Build <ArrowRight size={16} />
          </Link>

          <button 
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
