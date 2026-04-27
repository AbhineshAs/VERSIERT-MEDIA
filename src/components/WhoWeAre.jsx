import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  const stats = [
    { label: 'YEARS OF EXPERIENCE', value: '10+' },
    { label: 'PROJECTS COMPLETED', value: '50+' },
    { label: 'HAPPY CLIENTS', value: '30+' }
  ];

  return (
    <section id="who-we-are" className="who-we-are">
      <div className="container">
        <div className="who-grid">
          <div className="who-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="section-pre-title">WHO WE ARE</span>
              <h2 className="who-title">WE ARE VERSIERT MEDIA</h2>
              <p className="who-text">
                We are a team of creatives, designers, developers and strategists helping brands grow in the digital world.
              </p>
              <a href="#" className="learn-more">LEARN MORE →</a>
              
              <div className="stats-container">
                {stats.map((stat, i) => (
                  <div key={i} className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="who-visual">
            <div className="visual-wrapper">
              <div className="spotlight"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team" className="team-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-number-container">
        <span className="section-number">.02</span>
      </div>

      <style jsx>{`
        .who-we-are {
          padding: 150px 0;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .section-pre-title {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--text-grey);
          display: block;
          margin-bottom: 20px;
        }

        .who-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 30px;
          color: #fff;
        }

        .who-text {
          font-size: 14px;
          color: var(--text-grey-light);
          line-height: 1.8;
          max-width: 400px;
          margin-bottom: 30px;
        }

        .learn-more {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #fff;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 60px;
        }

        .stats-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: rgba(255, 255, 255, 0.03);
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          width: fit-content;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 800;
          color: #fff;
        }

        .stat-label {
          font-size: 8px;
          letter-spacing: 2px;
          color: var(--text-grey);
          text-transform: uppercase;
        }

        .who-visual {
          position: relative;
        }

        .visual-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          background: #111;
        }

        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
          filter: grayscale(1);
        }

        .spotlight {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent);
          z-index: 1;
          pointer-events: none;
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

        @media (max-width: 1024px) {
          .who-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .who-visual {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
