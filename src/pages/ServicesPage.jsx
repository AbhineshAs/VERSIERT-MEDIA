import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px' }}
    >
      <section className="section-padding" style={{ textAlign: 'center', backgroundColor: '#0A0A0A' }}>
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 100px)', marginBottom: '30px' }}>
          Our <span className="text-orange" style={{ fontStyle: 'italic' }}>Services</span>
        </h1>
        <p style={{ color: 'var(--text-grey)', maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
          We provide a comprehensive suite of digital marketing solutions designed to scale your business and dominate your market.
        </p>
      </section>
      
      <Services />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
            <h3 className="text-orange" style={{ marginBottom: '20px' }}>01. Discovery</h3>
            <p style={{ color: 'var(--text-grey)' }}>We start by understanding your business goals, target audience, and current market position.</p>
          </div>
          <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
            <h3 className="text-orange" style={{ marginBottom: '20px' }}>02. Strategy</h3>
            <p style={{ color: 'var(--text-grey)' }}>We develop a custom marketing strategy focused on ROI and sustainable growth.</p>
          </div>
          <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
            <h3 className="text-orange" style={{ marginBottom: '20px' }}>03. Execution</h3>
            <p style={{ color: 'var(--text-grey)' }}>Our team of experts implements the strategy using cutting-edge tools and techniques.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
