import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuoteBuilder = () => {
  const [projectType, setProjectType] = useState('Website Design');
  const [pages, setPages] = useState(5);
  const [budget, setBudget] = useState('$3,000 - $5,000');
  const [features, setFeatures] = useState(['E-commerce', 'SEO Optimization', 'Blog / CMS']);

  const toggleFeature = (f) => {
    if (features.includes(f)) {
      setFeatures(features.filter(item => item !== f));
    } else {
      setFeatures([...features, f]);
    }
  };

  return (
    <section id="quote-builder" className="quote-builder">
      <div className="container">
        <div className="section-header">
          <span className="section-pre-title">GET STARTED</span>
          <h2 className="builder-title">CUSTOM QUOTE MAKER</h2>
        </div>

        <div className="builder-container">
          <div className="builder-grid">
            {/* Column 1 */}
            <div className="builder-col">
              <div className="input-group">
                <label className="input-label">PROJECT TYPE</label>
                <select className="minimal-select" value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                  <option>Website Design</option>
                  <option>Branding</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div className="input-group">
                <label className="input-label">PAGES</label>
                <div className="pages-control">
                  <button className="page-btn" onClick={() => setPages(Math.max(1, pages - 1))}>-</button>
                  <span className="page-count">{pages}</span>
                  <button className="page-btn" onClick={() => setPages(pages + 1)}>+</button>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={pages} 
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className="minimal-slider"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="builder-col">
              <label className="input-label">FEATURES</label>
              <div className="features-list">
                {['E-commerce', 'SEO Optimization', 'Booking System', 'Blog / CMS', 'Payment Gateway'].map(f => (
                  <label key={f} className="feature-item">
                    <input 
                      type="checkbox" 
                      checked={features.includes(f)} 
                      onChange={() => toggleFeature(f)}
                    />
                    <span className="feature-name">{f}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="builder-col results-col">
              <div className="input-group">
                <label className="input-label">BUDGET RANGE</label>
                <select className="minimal-select" value={budget} onChange={(e) => setBudget(e.target.value)}>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>

              <div className="estimate-display">
                <label className="estimate-label">ESTIMATED QUOTE</label>
                <div className="estimate-price">$4,250</div>
                <span className="currency-label">USD</span>
              </div>

              <button className="btn-primary full-width">REQUEST DETAILED QUOTE →</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-number-container">
        <span className="section-number">.04</span>
      </div>

      <style jsx>{`
        .quote-builder {
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

        .builder-title {
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 2px;
        }

        .builder-container {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 60px;
        }

        .builder-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.2fr;
          gap: 60px;
        }

        .builder-col {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .input-label {
          font-size: 9px;
          font-weight: 700;
          color: var(--text-grey);
          letter-spacing: 1px;
          margin-bottom: 15px;
          display: block;
        }

        .minimal-select {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          padding: 12px 15px;
          font-size: 13px;
          outline: none;
        }

        .pages-control {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 15px;
        }

        .page-btn {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          background: transparent;
          cursor: pointer;
        }

        .page-count {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          min-width: 20px;
          text-align: center;
        }

        .minimal-slider {
          width: 100%;
          accent-color: #fff;
          opacity: 0.3;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .feature-item input {
          accent-color: #fff;
        }

        .feature-name {
          font-size: 11px;
          color: var(--text-grey-light);
        }

        .results-col {
          border-left: 1px solid rgba(255,255,255,0.05);
          padding-left: 60px;
        }

        .estimate-display {
          margin: 40px 0;
        }

        .estimate-label {
          font-size: 9px;
          font-weight: 700;
          color: var(--text-grey);
          display: block;
          margin-bottom: 10px;
        }

        .estimate-price {
          font-size: 48px;
          font-weight: 900;
          color: #fff;
          line-height: 1;
        }

        .currency-label {
          font-size: 10px;
          color: var(--text-grey);
          font-weight: 700;
        }

        .full-width {
          width: 100%;
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
          .builder-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .results-col {
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.05);
            padding-left: 0;
            padding-top: 40px;
          }
          .builder-container {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default QuoteBuilder;
