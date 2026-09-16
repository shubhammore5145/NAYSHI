import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Code, Smartphone, Zap, Layers, Database, PenTool, ArrowRight } from 'lucide-react';
import styles from './Solutions.module.css';

const solutions = [
  {
    id: 'web',
    title: 'Web Experiences',
    icon: <Globe size={32} />,
    desc: 'We engineer immersive, high-performance web applications. Moving beyond standard templates, we utilize WebGL, Next.js, and custom React architectures to build experiences that feel like native software while maintaining flawless Core Web Vitals.',
    deliverables: ['Custom Web Applications', '3D WebGL Interfaces', 'Headless CMS Integration', 'High-Conversion Landing Pages'],
    tech: ['React', 'Next.js', 'Three.js', 'Tailwind']
  },
  {
    id: 'ai',
    title: 'AI Solutions & Automation',
    icon: <Cpu size={32} />,
    desc: 'Stop performing repetitive tasks. We deploy custom LLM agents and machine learning pipelines directly into your business workflows. From predictive analytics to intelligent customer service bots, we make AI practical.',
    deliverables: ['Custom LLM Integration', 'Predictive Data Pipelines', 'Automated Workflows', 'Computer Vision Systems'],
    tech: ['Python', 'TensorFlow', 'OpenAI', 'LangChain']
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    icon: <Smartphone size={32} />,
    desc: 'Native-feeling cross-platform applications built for speed. We focus on offline-first architectures, complex state management, and silky 60fps animations to keep users engaged.',
    deliverables: ['iOS & Android Apps', 'React Native / Expo', 'Offline-First Architecture', 'App Store Deployment'],
    tech: ['React Native', 'Swift', 'Kotlin', 'Zustand']
  },
  {
    id: 'cloud',
    title: 'Cloud & Backend Architecture',
    icon: <Database size={32} />,
    desc: 'Bulletproof infrastructure designed to scale. We architect serverless microservices, real-time WebSockets, and distributed databases that can handle millions of concurrent connections without breaking a sweat.',
    deliverables: ['Serverless Architecture', 'GraphQL APIs', 'Database Optimization', 'Real-time WebSockets'],
    tech: ['Node.js', 'AWS', 'PostgreSQL', 'Redis']
  }
];

const Solutions = () => {
  const [activeId, setActiveId] = useState('web');

  useEffect(() => {
    const handleScroll = () => {
      const sections = solutions.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (activeId !== section.id) {
            setActiveId(section.id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      
      <section className={styles.header}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Engineering Solutions.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We deploy modern technology stacks to solve complex business problems. Choose a capability below to explore our approach.
          </motion.p>
        </div>
      </section>

      <div className={`container ${styles.layout}`}>
        <aside className={styles.sidebar}>
          <div className={styles.stickyNav}>
            <p className={styles.navLabel}>Capabilities</p>
            <ul>
              {solutions.map(sol => (
                <li key={sol.id}>
                  <button 
                    className={activeId === sol.id ? styles.active : ''}
                    onClick={() => scrollTo(sol.id)}
                  >
                    {sol.title}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className={styles.sidebarCta}>
              <p>Need something custom?</p>
              <a href="/contact">Start a Project <ArrowRight size={14}/></a>
            </div>
          </div>
        </aside>

        <main className={styles.content}>
          {solutions.map((sol, idx) => (
            <motion.div 
              key={sol.id} 
              id={sol.id} 
              className={styles.solutionSection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
            >
              <div className={styles.iconWrapper}>
                {sol.icon}
              </div>
              <h2>{sol.title}</h2>
              <p className={styles.description}>{sol.desc}</p>
              
              <div className={styles.bentoGrid}>
                <div className={styles.bentoCard}>
                  <h3>What We Deliver</h3>
                  <ul>
                    {sol.deliverables.map(d => <li key={d}>{d}</li>)}
                  </ul>
                </div>
                <div className={`${styles.bentoCard} ${styles.techCard}`}>
                  <h3>Core Tech Stack</h3>
                  <div className={styles.techTags}>
                    {sol.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Solutions;
