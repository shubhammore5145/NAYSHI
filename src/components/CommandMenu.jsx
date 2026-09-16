import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Code, Briefcase, Mail, Zap, X } from 'lucide-react';
import styles from './CommandMenu.module.css';

const CommandMenu = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const navigateTo = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <Search size={20} className={styles.searchIcon} />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Type a command or search..." 
            className={styles.input}
          />
          <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className={styles.body}>
          <div className={styles.group}>
            <p className={styles.groupLabel}>Quick Links</p>
            <button className={styles.item} onClick={() => navigateTo('/solutions')}>
              <Code size={18} />
              <span>Services & Solutions</span>
            </button>
            <button className={styles.item} onClick={() => navigateTo('/work')}>
              <Briefcase size={18} />
              <span>Selected Work</span>
            </button>
            <button className={styles.item} onClick={() => navigateTo('/contact')}>
              <Zap size={18} />
              <span>Start a Project</span>
            </button>
            <button className={styles.item} onClick={() => navigateTo('/portal')}>
              <Mail size={18} />
              <span>Client Portal</span>
            </button>
          </div>
        </div>
        
        <div className={styles.footer}>
          <span><kbd>ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandMenu;
