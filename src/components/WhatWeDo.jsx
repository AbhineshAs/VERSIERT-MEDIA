import React from 'react';
import { motion } from 'framer-motion';
import eagleSketch from '../assets/eagle_sketch.png';
import jaguarSketch from '../assets/jaguar_sketch.png';
import octopusSketch from '../assets/octopus_sketch.png';
import dolphinSketch from '../assets/dolphin_sketch.png';
import owlSketch from '../assets/owl_sketch.png';
import bearSketch from '../assets/bear_sketch.png';

const WhatWeDo = () => {
  const services = [
    {
      id: '01',
      title: 'STRATEGY',
      text: 'We go beyond trends. We build strategy that wins.',
      image: eagleSketch
    },
    {
      id: '02',
      title: 'CONTENT EXECUTION',
      text: 'Fast, precise, high-impact content that performs.',
      image: jaguarSketch
    },
    {
      id: '03',
      title: 'MULTI-PLATFORM',
      text: 'We handle every platform, every angle with ease.',
      image: octopusSketch
    },
    {
      id: '04',
      title: 'ENGAGEMENT',
      text: 'Smart storytelling that connects, engages and converts.',
      image: dolphinSketch
    },
    {
      id: '05',
      title: 'ANALYTICS',
      text: 'Data-driven insights to track and optimize growth.',
      image: owlSketch
    },
    {
      id: '06',
      title: 'PERFORMANCE',
      text: 'Aggressive marketing strategies for maximum ROI.',
      image: bearSketch
    }
  ];

  return (
    <section id="what-we-do" className="what-we-do section-white">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label text-orange"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            WHAT WE DO —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Solutions that drive impact.
          </motion.h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -10,
                rotateX: 2,
                rotateY: -2,
                boxShadow: "0 30px 60px rgba(0,0,0,0.1)"
              }}
            >
              <div className="card-content">
                <span className="service-id">{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="card-arrow">→</div>
              </div>
              <div className="card-image">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .what-we-do {
          padding: 120px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: block;
        }

        h2 {
          font-size: 42px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .service-card {
          border: 1px solid #eee;
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 350px;
          overflow: hidden;
          transition: var(--transition);
        }

        .service-card:hover {
          border-color: var(--primary-orange);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .card-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          position: relative;
        }

        .service-id {
          font-size: 12px;
          font-weight: 800;
          color: #ddd;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }

        p {
          font-size: 14px;
          color: var(--text-grey);
          line-height: 1.6;
        }

        .card-arrow {
          position: absolute;
          bottom: 30px;
          left: 30px;
          width: 40px;
          height: 40px;
          border: 1px solid #eee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .service-card:hover .card-arrow {
          background: var(--bg-black);
          color: white;
          border-color: var(--bg-black);
        }

        .card-image {
          background: #fafafa;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: contrast(1.1);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            grid-template-columns: 1fr;
            height: auto;
          }
          .card-image {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
