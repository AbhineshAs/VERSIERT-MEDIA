import React from 'react';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';

const WorkPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px' }}
    >
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 100px)', marginBottom: '30px' }}>
          Selected <span className="text-orange" style={{ fontStyle: 'italic' }}>Work</span>
        </h1>
        <p style={{ color: 'var(--text-grey)', maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
          A showcase of our most impactful projects and the results we've achieved for our clients across various industries.
        </p>
      </section>

      <Projects />

      <section className="section-padding" style={{ backgroundColor: '#000' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '48px' }}>Want to see more?</h2>
          <p style={{ color: 'var(--text-grey)', marginTop: '10px' }}>Let's discuss how we can help your brand grow.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="bg-orange" style={{ padding: '16px 40px', borderRadius: '100px', color: 'white', fontWeight: '600' }}>
            START A PROJECT
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default WorkPage;
