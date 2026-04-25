import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const Services = () => {
  const [active, setActive] = useState(0);

  const services = [
    {
      title: 'Marketing Strategy',
      desc: 'Holistic digital marketing expertise with growth-focused data-driven solutions specifically tailored to your needs.',
      details: ['Market Analysis', 'Brand Positioning', 'Growth Hacking', 'Campaign Planning']
    },
    {
      title: 'SEO & Content Marketing',
      desc: 'Our SEO and content team architects, attracts, engages and effectively converts your perfect audience.',
      details: ['Technical SEO', 'Keyword Research', 'Content Strategy', 'Backlink Building']
    },
    {
      title: 'Paid Advertising',
      desc: 'Precision targeting and optimized bidding to maximize your ROI across all major platforms.',
      details: ['Google Ads', 'Meta Ads', 'LinkedIn Advertising', 'TikTok Ads']
    },
    {
      title: 'Web Design & Development',
      desc: 'We design and develop simple, elegant, and easy to use responsive websites that present your unique value proposition.',
      details: ['UI/UX Design', 'Custom Development', 'E-commerce', 'CMS Integration']
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '20px' }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', maxWidth: '500px' }}>
          What we do <span style={{ fontStyle: 'italic' }}>best</span>.
        </h2>
        <p style={{ color: 'var(--text-grey)', maxWidth: '400px' }}>
          We provide a full range of digital marketing services designed to help your brand reach its full potential.
        </p>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {services.map((service, index) => (
          <div 
            key={index} 
            style={{ 
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer'
            }}
            onClick={() => setActive(active === index ? -1 : index)}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '40px 0',
              transition: 'var(--transition)'
            }}
            className={active === index ? 'text-orange' : ''}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <span style={{ fontSize: '18px', opacity: 0.5 }}>0{index + 1}</span>
                <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '500' }}>{service.title}</h3>
              </div>
              <div>
                {active === index ? <Minus size={32} /> : <Plus size={32} />}
              </div>
            </div>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ 
                    paddingBottom: '40px', 
                    display: 'grid', 
                    gridTemplateColumns: '1.5fr 1fr',
                    gap: '40px',
                    color: 'var(--text-white)'
                  }}>
                    <p style={{ fontSize: '18px', color: 'var(--text-grey)', lineHeight: '1.6' }}>
                      {service.desc}
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      {service.details.map((detail, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                          <div style={{ width: '6px', height: '6px', background: 'var(--primary-orange)', borderRadius: '50%' }} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: '1.5fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default Services;
