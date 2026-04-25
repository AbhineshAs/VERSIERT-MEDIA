import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'Growth', value: '178%', sub: 'Average increase' },
    { label: 'ROAS', value: '5.4x', sub: 'Return on ad spend' },
    { label: 'Projects', value: '340+', sub: 'Completed worldwide' },
    { label: 'Clients', value: '98%', sub: 'Retention rate' },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        textAlign: 'center'
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 style={{ fontSize: '14px', color: 'var(--primary-orange)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
              {stat.label}
            </h3>
            <div style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '700', marginBottom: '5px' }}>
              {stat.value}
            </div>
            <p style={{ color: 'var(--text-grey)', fontSize: '14px' }}>{stat.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
