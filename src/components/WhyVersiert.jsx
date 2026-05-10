import React from 'react';
import { motion } from 'framer-motion';
import whyImage from '../assets/2026-05-10 23.01.13.jpg';

const WhyVersiert = () => {
  const reasons = [
    {
      title: 'Proven Results',
      desc: 'We focus on outcomes that matter—growth, engagement, and ROI.'
    },
    {
      title: 'Data Meets Creativity',
      desc: 'We combine analytical thinking with creative execution to deliver impactful solutions.'
    },
    {
      title: 'End-to-End Execution',
      desc: 'From strategy to execution, we handle every aspect of your digital journey.'
    },
    {
      title: 'What Sets Us Apart',
      desc: 'We don’t believe in one-size-fits-all solutions. Everything we do is tailored, intentional, and designed to create lasting impact.'
    }
  ];

  return (
    <section className="why-versiert section-white">
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <span className="section-pre-title">WHY VERSIERT</span>
            <h2>More Than an Agency—<br />A Growth Partner</h2>
            <p style={{ color: 'var(--text-grey-light)', marginBottom: '40px', fontSize: '16px', lineHeight: '1.6' }}>
              Choosing Versiert means choosing a team that is invested in your success.
            </p>

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
              src={whyImage}
              alt="Business Strategy"
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
          padding: 80px 0;
          background-color: var(--bg-black);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .why-visual img {
          width: 100%;
          max-width: 500px;
        }

        .section-pre-title {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--text-grey);
          display: block;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 42px;
          margin-bottom: 60px;
          color: #fff;
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
          color: #fff;
        }

        .reason-item p {
          font-size: 14px;
          color: var(--text-grey-light);
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

        @media (max-width: 768px) {
          .why-versiert {
            padding: 60px 0;
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
