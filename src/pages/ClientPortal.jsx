import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, FileText, CheckCircle, Clock, MessageSquare, Download } from 'lucide-react';
import styles from './ClientPortal.module.css';

const ClientPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.loginWrapper}>
        <motion.div 
          className={styles.loginCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.loginHeader}>
            <h2>Client Access</h2>
            <p>Enter your credentials to access your project dashboard.</p>
          </div>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                placeholder="Client Email" 
                required 
                value={loginData.email}
                onChange={e => setLoginData({...loginData, email: e.target.value})}
              />
            </div>
            <div className={styles.inputGroup}>
              <input 
                type="password" 
                placeholder="Access Token" 
                required 
                value={loginData.password}
                onChange={e => setLoginData({...loginData, password: e.target.value})}
              />
            </div>
            <button type="submit" className={styles.loginBtn}>
              <LogIn size={18} /> Authenticate
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className={styles.dashboardWrapper}>
      <header className={styles.dashHeader}>
        <div className="container">
          <div className={styles.headerFlex}>
            <div>
              <h1>Welcome back, FinTech Dynamics.</h1>
              <p>Project ID: #FD-2026-X1</p>
            </div>
            <button className={styles.logoutBtn} onClick={() => setIsAuthenticated(false)}>Sign Out</button>
          </div>
        </div>
      </header>

      <main className="container">
        <div className={styles.bentoGrid}>
          
          <div className={`${styles.bentoCard} ${styles.statusCard}`}>
            <h3>Project Status</h3>
            <div className={styles.statusVisual}>
              <div className={styles.statusDot}></div>
              <h2>Phase 3: Core Architecture</h2>
              <p>In Progress — 65% Completed</p>
            </div>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progressBar} style={{ width: '65%' }}></div>
            </div>
          </div>

          <div className={styles.bentoCard}>
            <h3>Recent Milestones</h3>
            <ul className={styles.milestoneList}>
              <li className={styles.completed}>
                <CheckCircle size={18} /> Wireframes & UX Flow Approved
              </li>
              <li className={styles.completed}>
                <CheckCircle size={18} /> Database Schema Finalized
              </li>
              <li className={styles.active}>
                <Clock size={18} /> WebSocket Integration (Current)
              </li>
              <li className={styles.pending}>
                <div className={styles.circle}></div> UI Component Library
              </li>
            </ul>
          </div>

          <div className={styles.bentoCard}>
            <h3>Latest Documents</h3>
            <div className={styles.docList}>
              <button className={styles.docBtn}>
                <FileText size={18} /> Architecture_Review_v2.pdf <Download size={14} className={styles.dlIcon}/>
              </button>
              <button className={styles.docBtn}>
                <FileText size={18} /> API_Contract_Draft.json <Download size={14} className={styles.dlIcon}/>
              </button>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.messageCard}`}>
            <h3>Direct Comm</h3>
            <div className={styles.messageList}>
              <div className={styles.msgItem}>
                <strong>Lead Engineer</strong>
                <p>We've deployed the staging environment. Let's review on tomorrow's sync.</p>
                <span>2 hours ago</span>
              </div>
            </div>
            <div className={styles.replyBox}>
              <input type="text" placeholder="Type a message..." />
              <button><MessageSquare size={16}/></button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ClientPortal;
