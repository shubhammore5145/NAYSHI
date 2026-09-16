import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Insights.module.css';

const articles = [
  {
    id: 1,
    title: "Why 'Headless' is No Longer Just a Buzzword for E-Commerce",
    category: "Architecture",
    date: "Oct 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    excerpt: "Decoupling the frontend from your database isn't just about speed—it's about survival in an omni-channel ecosystem."
  },
  {
    id: 2,
    title: "The Reality of Deploying Custom LLMs in Enterprise Environments",
    category: "AI & Machine Learning",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    excerpt: "Off-the-shelf AI APIs are great for prototyping, but enterprise security requires fine-tuned, isolated models. Here is how we build them."
  },
  {
    id: 3,
    title: "React Server Components: A Paradigm Shift in Web Performance",
    category: "Frontend Engineering",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800",
    excerpt: "Shipping zero JavaScript to the client while maintaining dynamic UIs. Let's look at why RSCs are changing how we architect applications."
  },
  {
    id: 4,
    title: "Designing for WebGL: When CSS Isn't Enough",
    category: "UI/UX Design",
    date: "Aug 30, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    excerpt: "Pushing the browser to its limits to create award-winning, immersive 3D experiences without melting the user's GPU."
  }
];

const Insights = () => {
  return (
    <div className={styles.pageWrapper}>
      
      <section className={styles.hero}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Insights.
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Thoughts, technical deep-dives, and engineering logs from the NAYSHI team.
          </motion.p>
        </div>
      </section>

      <section className={styles.articlesSection}>
        <div className={`container ${styles.grid}`}>
          
          {articles.map((article, index) => (
            <motion.article 
              key={article.id} 
              className={styles.articleCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.imageBox}>
                <img src={article.image} alt={article.title} />
                <div className={styles.categoryBadge}>{article.category}</div>
              </div>
              
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{article.date}</span>
                  <span className={styles.dot}>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <button className={styles.readBtn}>Read Article <ArrowRight size={16} /></button>
              </div>
            </motion.article>
          ))}

        </div>
      </section>

      <section className={styles.newsletterSection}>
        <div className={`container ${styles.newsletterBox}`}>
          <div className={styles.nlContent}>
            <h2>Stay Ahead.</h2>
            <p>Get our latest engineering insights and architectural breakdowns delivered straight to your inbox. No spam, just signal.</p>
          </div>
          <form className={styles.nlForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Insights;
