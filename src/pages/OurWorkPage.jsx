import React from 'react';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';

const OurWorkPage = () => {
  const testimonials = [
    { name: 'Kunal B.', company: 'FinTech Founder', text: '"Versiert didn\'t just grow our social numbers; they changed our entire market perception. Truly elite."' },
    { name: 'Elena R.', company: 'Luxury Brand CEO', text: '"The cinematic quality they bring to every single piece of content is unmatched in the industry."' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <Projects />

      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-pre-title">TRUSTED BY</span>
            <h2 className="page-title">WORDS FROM THE LEADERS.</h2>
          </div>
          <div className="test-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="test-card">
                <div className="test-quote">"</div>
                <p className="test-text">{t.text}</p>
                <div className="test-author">
                  <strong className="author-name">{t.name}</strong>
                  <span className="author-company">{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="key-stats">
        <div className="container">
          <div className="stats-strip">
            <div className="s-item">
              <h3>500M+</h3>
              <span className="s-label">TOTAL VIEWS</span>
            </div>
            <div className="s-item">
              <h3>85%</h3>
              <span className="s-label">CLIENT RETENTION</span>
            </div>
            <div className="s-item">
              <h3>12+</h3>
              <span className="s-label">GLOBAL AWARDS</span>
            </div>
            <div className="s-item">
              <h3>$25M+</h3>
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

        .testimonials, .insight-section {
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

        .test-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .test-card {
          padding: 60px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .test-quote {
          font-size: 80px;
          color: rgba(255, 255, 255, 0.05);
          position: absolute;
          top: 20px;
          left: 30px;
        }

        .test-text {
          font-size: 20px;
          font-style: italic;
          color: var(--text-grey-light);
          margin-bottom: 40px;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        .author-name {
          display: block;
          font-size: 16px;
          color: #fff;
          margin-bottom: 5px;
        }

        .author-company {
          font-size: 11px;
          color: var(--text-grey);
          font-weight: 700;
          letter-spacing: 1px;
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
          .test-grid {
            grid-template-columns: 1fr;
          }
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
