import React from 'react';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import AnimatedCounter from '../components/AnimatedCounter';
import { motion } from 'framer-motion';

const OurWorkPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <Projects />
      <Testimonials />

      <section className="key-stats">
        <div className="container">
          <div className="stats-strip">
            <div className="s-item">
              <h3><AnimatedCounter value={500} />M+</h3>
              <span className="s-label">TOTAL VIEWS</span>
            </div>
            <div className="s-item">
              <h3><AnimatedCounter value={85} />%</h3>
              <span className="s-label">CLIENT RETENTION</span>
            </div>
            <div className="s-item">
              <h3><AnimatedCounter value={12} />+</h3>
              <span className="s-label">GLOBAL AWARDS</span>
            </div>
            <div className="s-item">
              <h3>$<AnimatedCounter value={25} />M+</h3>
              <span className="s-label">AD SPEND MANAGED</span>
            </div>
          </div>
        </div>
      </section>

      <section className="insight-section">
        <div className="container">
          <div className="insight-content">
            <div className="insight-text">
              <h3 className="insight-title">STRATEGY IS OUR SECRET WEAPON.</h3>
              <p className="insight-desc">Every "viral" moment we create is the result of thousands of data points and a deep understanding of human psychology. We don't guess. We execute.</p>
              <div className="insight-pills">
                <span>PSYCHOLOGY</span>
                <span>DATA</span>
                <span>CULTURE</span>
                <span>TIMING</span>
              </div>
            </div>
            <div className="insight-visual">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Strategy Insight" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-wrapper {
          padding-top: 100px;
          background: #000;
        }

        .insight-section {
          padding: 150px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .section-pre-title {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--text-grey);
          display: block;
          margin-bottom: 20px;
        }

        .page-title {
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 2px;
          margin-bottom: 60px;
        }

        .key-stats {
          padding: 100px 0;
          background: rgba(255, 255, 255, 0.01);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: center;
        }

        .s-item h3 {
          font-size: 42px;
          color: #fff;
          margin-bottom: 10px;
          font-weight: 900;
        }

        .s-label {
          font-size: 9px;
          font-weight: 800;
          color: var(--text-grey);
          letter-spacing: 2px;
        }

        .insight-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .insight-title {
          font-size: 36px;
          color: #fff;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .insight-desc {
          font-size: 16px;
          color: var(--text-grey-light);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .insight-pills {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .insight-pills span {
          padding: 8px 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .insight-visual {
          height: 500px;
          background: #111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .insight-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          opacity: 0.6;
          transition: 0.5s;
        }

        .insight-visual:hover img {
          opacity: 1;
          filter: grayscale(0);
        }

        @media (max-width: 1024px) {
          .insight-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .stats-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 480px) {
          .stats-strip {
            grid-template-columns: 1fr;
          }
          .insight-visual {
            height: 300px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default OurWorkPage;
