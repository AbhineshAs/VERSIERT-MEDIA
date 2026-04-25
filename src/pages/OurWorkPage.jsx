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
      style={{ paddingTop: '100px' }}
    >
      <Projects />

      <section className="testimonials section-white">
        <div className="container">
          <div className="section-header">
            <span className="detail-label text-orange">TRUSTED BY —</span>
            <h2>Words from the leaders.</h2>
          </div>
          <div className="test-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="test-card">
                <div className="test-quote">"</div>
                <p className="test-text">{t.text}</p>
                <div className="test-author">
                  <strong>{t.name}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="key-stats section-white">
        <div className="container">
          <div className="stats-strip">
            <div className="s-item">
              <h3>500M+</h3>
              <span>TOTAL VIEWS</span>
            </div>
            <div className="s-item">
              <h3>85%</h3>
              <span>CLIENT RETENTION</span>
            </div>
            <div className="s-item">
              <h3>12+</h3>
              <span>GLOBAL AWARDS</span>
            </div>
            <div className="s-item">
              <h3>$25M+</h3>
              <span>AD SPEND MANAGED</span>
            </div>
          </div>
        </div>
      </section>

      <section className="insight-section section-black">
        <div className="container">
          <div className="insight-content">
            <div className="insight-text">
              <h3>Strategy is our secret weapon.</h3>
              <p>Every "viral" moment we create is the result of thousands of data points and a deep understanding of human psychology. We don't guess. We execute.</p>
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
        .testimonials { padding: 120px 0; background: #fff; }
        .test-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px; }
        .test-card { padding: 60px; background: #f9f9f9; position: relative; }
        .test-quote { font-size: 80px; font-family: serif; color: var(--primary-orange); position: absolute; top: 20px; left: 30px; opacity: 0.2; }
        .test-text { font-size: 22px; font-style: italic; color: #333; margin-bottom: 40px; line-height: 1.6; position: relative; z-index: 2; }
        .test-author strong { display: block; font-size: 16px; margin-bottom: 5px; }
        .test-author span { font-size: 12px; color: #888; font-weight: 700; letter-spacing: 1px; }

        .key-stats { padding: 80px 0; border-top: 1px solid #f0f0f0; border-bottom: 1px solid #f0f0f0; }
        .stats-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: center; }
        .s-item h3 { font-size: 42px; color: var(--primary-orange); margin-bottom: 5px; }
        .s-item span { font-size: 10px; font-weight: 800; color: #aaa; letter-spacing: 2px; }

        .insight-section { padding: 120px 0; }
        .insight-content { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: center; }
        .insight-text h3 { font-size: 42px; color: white; margin-bottom: 30px; }
        .insight-text p { font-size: 18px; color: #888; line-height: 1.8; margin-bottom: 40px; }
        .insight-pills { display: flex; gap: 15px; flex-wrap: wrap; }
        .insight-pills span { padding: 8px 20px; border: 1px solid #333; color: var(--primary-orange); font-size: 11px; font-weight: 800; letter-spacing: 1px; }
        .insight-visual { height: 500px; background: #111; border: 1px solid #222; overflow: hidden; }
        .insight-visual img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; transition: 0.5s; }
        .insight-visual:hover img { opacity: 1; }

        @media (max-width: 992px) {
          .test-grid { grid-template-columns: 1fr; }
          .insight-content { grid-template-columns: 1fr; gap: 40px; }
          .stats-strip { grid-template-columns: repeat(2, 1fr); gap: 30px; }
        }

        @media (max-width: 480px) {
          .stats-strip { grid-template-columns: 1fr; }
          .test-card { padding: 40px 20px; }
          .insight-visual { height: 300px; }
        }
      `}</style>
    </motion.div>
  );
};

export default OurWorkPage;
