import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import styles from './Work.module.css';

const projects = [
  {
    id: 1,
    client: 'Nisarg Cafe',
    title: 'Premium Coffee & Nature-Inspired Bites',
    category: 'Restaurant & Cafe Website',
    description: 'A beautiful, nature-inspired digital storefront for Nisarg Cafe in Sambhajinagar. The platform features an elegant menu showcase, immersive brand storytelling, and a seamless user experience that reflects the premium physical location.',
    tech: ['React', 'CSS Modules', 'Netlify', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1600',
    url: 'https://nisardcafe.netlify.app/'
  },
  {
    id: 2,
    client: 'Crispa Kitchen',
    title: 'Modern Culinary Platform',
    category: 'Food Tech & Ordering',
    description: 'A dynamic web application for Crispa Kitchen, offering a modern interface for exploring culinary offerings. Built with performance in mind, ensuring fast load times and a smooth browsing experience for food enthusiasts.',
    tech: ['Web Application', 'Frontend Architecture', 'Render', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1600',
    url: 'https://crispa.onrender.com/'
  },
  {
    id: 3,
    client: 'Sony Lac',
    title: 'Digital Experience Platform',
    category: 'Web Application / Portfolio',
    description: 'A sleek, high-performance web platform demonstrating modern frontend capabilities. The site utilizes advanced styling techniques and responsive grids to deliver a seamless experience across all devices.',
    tech: ['React', 'Vercel', 'Web Architecture', 'Performance'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    url: 'https://sony-lac.vercel.app/'
  },
  {
    id: 4,
    client: 'Trackr.AI',
    title: 'Next-Gen Job Search Platform',
    category: 'AI Platform / Career Tool',
    description: 'An intelligent career tracking application leveraging AI to streamline the job search process. The platform features smart resume parsing, automated application tracking, and predictive interview preparation.',
    tech: ['React', 'AI Integration', 'Netlify', 'Dashboard UI'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600',
    url: 'https://aicareertrackr.netlify.app/'
  }
];

const Work = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className="container">
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Selected Work.
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don't build generic templates. We architect scalable, high-performance digital systems for companies that demand excellence.
          </motion.p>
        </div>
      </section>

      <section className={styles.projectsSection}>
        {projects.map((project, index) => (
          <div key={project.id} className={styles.projectWrapper}>
            <div className={`container ${styles.projectGrid} ${index % 2 !== 0 ? styles.reversed : ''}`}>
              
              <motion.div 
                className={styles.projectInfo}
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7 }}
              >
                <span className={styles.clientName}>{project.client}</span>
                <h2>{project.title}</h2>
                <div className={styles.category}>{project.category}</div>
                <p>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>

                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.caseStudyBtn}>
                  Visit Project <ArrowRight size={18} />
                </a>
              </motion.div>

              <motion.div 
                className={styles.projectImageWrapper}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7 }}
              >
                <div className={styles.imageOverlay}>
                  <ExternalLink size={32} />
                </div>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </motion.div>

            </div>
          </div>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Have a complex problem?</h2>
          <p>Let's build the solution.</p>
          <a href="/contact" className={styles.btnPrimary}>Start a Project</a>
        </div>
      </section>
    </div>
  );
};

export default Work;
