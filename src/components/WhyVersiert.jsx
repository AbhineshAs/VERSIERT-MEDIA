import React from 'react';
import { motion } from 'framer-motion';
import bearSketch from '../assets/bear_sketch.png';

const WhyVersiert = () => {
  const reasons = [
    {
      title: 'Strategy-First',
      desc: 'Everything we do is backed by insight and research.'
    },
    {
      title: 'Creative Storytelling',
      desc: 'We craft stories that connect and leave a lasting impression.'
    },
    {
      title: 'Consistent Execution',
      desc: 'From idea to execution, we deliver with precision.'
    },
    {
      title: 'Results Driven',
      desc: 'We focus on what matters - growth, visibility and ROI.'
    }
  ];

  return (
    <section className="why-versiert section-white">
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <span className="section-label text-orange">WHY VERSIERT? —</span>
            <h2>The instinct behind<br />every great brand.</h2>
            
            <div className="reasons-grid">
              {reasons.map((r, i) => (
                <div key={i} className="reason-item">
                  <div className="reason-icon">⭐</div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="why-visual">
            <motion.img 
              src={bearSketch} 
              alt="Bear Sketch"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-versiert {
          padding: 120px 0;
          background-color: #fff;
          border-top: 1px solid #eee;
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .why-visual img {
          width: 100%;
          max-width: 500px;
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
          margin-bottom: 60px;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .reason-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .reason-icon {
          font-size: 24px;
          margin-bottom: 5px;
        }

        .reason-item h3 {
          font-size: 16px;
          text-transform: none;
          letter-spacing: 0;
        }

        .reason-item p {
          font-size: 14px;
          color: var(--text-grey);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
          .why-visual {
            display: flex;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .reasons-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyVersiert;
