import React from 'react';
import { motion } from 'framer-motion';
import eagleSketch from '../assets/eagle_sketch.png';
import jaguarSketch from '../assets/jaguar_sketch.png';
import octopusSketch from '../assets/octopus_sketch.png';
import dolphinSketch from '../assets/dolphin_sketch.png';

const WhatWeDo = () => {
  const services = [
    {
      title: 'WEB DESIGN & DEVELOPMENT',
      text: 'Modern, responsive and high-performing websites tailored to your brand.',
      icon: '💻'
    },
    {
      title: 'BRANDING & IDENTITY',
      text: 'Crafting unique brand identities that connect and leave a lasting impression.',
      icon: '🎨'
    },
    {
      title: 'DIGITAL MARKETING',
      text: 'Data-driven marketing strategies to grow your brand and reach.',
      icon: '📈'
    },
    {
      title: 'UI/UX STRATEGY',
      text: 'User-centered design strategies that create meaningful experiences.',
      icon: '📱'
    }
  ];

  return (
    <section id="what-we-do" className="what-we-do">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-pre-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            className="services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            OUR SERVICES
          </motion.h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.text}</p>
              <a href="#" className="learn-more-btn">LEARN MORE →</a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-number-container">
        <span className="section-number">.03</span>
      </div>

      <style jsx>{`
        .what-we-do {
          padding: 150px 0;
          background: #000;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-pre-title {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--text-grey);
          display: block;
          margin-bottom: 20px;
        }

        .services-title {
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: 0.3s;
        }

        .service-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .service-icon {
          font-size: 24px;
          margin-bottom: 30px;
          opacity: 0.8;
        }

        .service-card-title {
          font-size: 14px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .service-card-text {
          font-size: 12px;
          color: var(--text-grey-light);
          line-height: 1.6;
          margin-bottom: auto;
          padding-bottom: 30px;
        }

        .learn-more-btn {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #fff;
          text-decoration: none;
          opacity: 0.7;
          transition: 0.3s;
        }

        .learn-more-btn:hover {
          opacity: 1;
        }

        .section-number-container {
          position: absolute;
          left: 5%;
          bottom: 5%;
        }

        .section-number {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-grey);
          opacity: 0.3;
        }

        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
