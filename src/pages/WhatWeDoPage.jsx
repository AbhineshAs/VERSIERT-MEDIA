import React from 'react';
import WhatWeDo from '../components/WhatWeDo';
import { motion } from 'framer-motion';

const WhatWeDoPage = () => {
  const verticals = [
    { title: 'Luxury Retail', desc: 'Crafting high-end digital storefronts that command attention.' },
    { title: 'Tech Startups', desc: 'Scaling disruptive technologies through strategic PR and content.' },
    { title: 'Personal Brands', desc: 'Building authority for thought leaders and global creators.' },
    { title: 'Automotive', desc: 'Cinematic brand films and social dominance for the auto industry.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <WhatWeDo />

      <section className="verticals">
        <div className="container">
          <div className="section-header">
            <span className="section-pre-title">VERTICALS</span>
            <h2 className="page-title">WHERE WE EXCEL.</h2>
          </div>
          <div className="verticals-grid">
            {verticals.map((v, i) => (
              <div key={i} className="vertical-card">
                <div className="v-num">0{i + 1}</div>
                <h3 className="v-title">{v.title}</h3>
                <p className="v-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow">
        <div className="container">
          <div className="section-header">
            <span className="section-pre-title">WORKFLOW</span>
            <h2 className="page-title">OUR 4-STEP DOMINANCE ENGINE.</h2>
          </div>
          <div className="workflow-grid">
            <div className="work-step">
              <span className="step-num">01</span>
              <h4 className="step-title">INFILTRATE</h4>
              <p className="step-desc">We analyze your competitors, identifying every weakness and gap in their strategy.</p>
            </div>
            <div className="work-step">
              <span className="step-num">02</span>
              <h4 className="step-title">STRATEGIZE</h4>
              <p className="step-desc">We build a custom predatory roadmap designed to steal attention and market share.</p>
            </div>
            <div className="work-step">
              <span className="step-num">03</span>
              <h4 className="step-title">EXECUTE</h4>
              <p className="step-desc">Cinematic production and high-speed delivery of your brand's new narrative.</p>
            </div>
            <div className="work-step">
              <span className="step-num">04</span>
              <h4 className="step-title">DOMINATE</h4>
              <p className="step-desc">Scaling through performance data until your brand rules the digital jungle.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-wrapper {
          padding-top: 100px;
          background: #000;
        }

        .verticals, .workflow {
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

        .verticals-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .vertical-card {
          padding: 40px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          transition: 0.3s;
        }

        .vertical-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .v-num {
          font-size: 60px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.03);
          position: absolute;
          top: -10px;
          right: -10px;
          line-height: 1;
        }

        .v-title {
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .v-desc {
          color: var(--text-grey-light);
          font-size: 13px;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        .workflow {
          background: rgba(255, 255, 255, 0.01);
        }

        .workflow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .step-num {
          font-size: 40px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.05);
          line-height: 1;
          display: block;
          margin-bottom: 20px;
        }

        .step-title {
          font-size: 14px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .step-desc {
          font-size: 12px;
          color: var(--text-grey-light);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .verticals-grid, .workflow-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .verticals-grid, .workflow-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default WhatWeDoPage;
