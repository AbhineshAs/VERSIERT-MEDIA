import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuoteBuilder = () => {
  const [service, setService] = useState('Content Creation');
  const [pkg, setPkg] = useState('6 Videos');
  const [addons, setAddons] = useState(['Script Writing', 'Anchoring', 'Influencer Push']);

  const toggleAddon = (addon) => {
    if (addons.includes(addon)) {
      setAddons(addons.filter(a => a !== addon));
    } else {
      setAddons([...addons, addon]);
    }
  };

  return (
    <section id="quote-builder" className="quote-builder section-white">
      <div className="container">
        <div className="quote-grid">
          <div className="quote-intro">
            <span className="section-label text-orange">QUOTE BUILDER —</span>
            <h2>Build your package.<br />Get an instant estimate.</h2>
            <p>Tell us what you need and we'll show you the estimated cost in real time.</p>
            <div className="arrow-curve">⤶</div>
          </div>

          <div className="builder-tool">
            <div className="builder-steps">
              <div className="step">
                <label>STEP 1</label>
                <h3>Select Service</h3>
                <div className="options">
                  {['Content Creation', 'PR Campaign', 'Social Media Management'].map(s => (
                    <div 
                      key={s} 
                      className={`option ${service === s ? 'active' : ''}`}
                      onClick={() => setService(s)}
                    >
                      {s} {service === s && <span className="check">✓</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="step">
                <label>STEP 2</label>
                <h3>Select Package</h3>
                <div className="options">
                  {['4 Videos', '6 Videos', '8 Videos'].map(p => (
                    <div 
                      key={p} 
                      className={`option ${pkg === p ? 'active' : ''}`}
                      onClick={() => setPkg(p)}
                    >
                      {p} {pkg === p && <span className="check">✓</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="step">
                <label>STEP 3</label>
                <h3>Add-ons</h3>
                <div className="checkboxes">
                  {['Script Writing', 'Anchoring', 'Paid Ads', 'Influencer Push'].map(a => (
                    <label key={a} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        checked={addons.includes(a)}
                        onChange={() => toggleAddon(a)}
                      />
                      <span>{a}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="estimate-box">
                <label>ESTIMATED COST</label>
                <div className="price">₹ 89,999</div>
                <p>*Exclusive of Taxes</p>
                <button className="btn-primary full-width">GET FULL PROPOSAL</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .quote-builder {
          padding: 120px 0;
          background-color: #fcfcfc;
        }

        .quote-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          align-items: flex-start;
        }

        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: block;
        }

        h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }

        .quote-intro p {
          color: var(--text-grey);
          font-size: 14px;
          max-width: 300px;
        }

        .arrow-curve {
          font-size: 48px;
          color: var(--primary-orange);
          margin-top: 20px;
          transform: rotate(-10deg);
        }

        .builder-tool {
          background: white;
          padding: 40px;
          border: 1px solid #eee;
          box-shadow: 0 10px 40px rgba(0,0,0,0.02);
        }

        .builder-steps {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1.2fr;
          gap: 30px;
        }

        .step label {
          font-size: 10px;
          font-weight: 700;
          color: #bbb;
          display: block;
          margin-bottom: 10px;
        }

        .step h3 {
          font-size: 14px;
          margin-bottom: 20px;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .option {
          padding: 12px 15px;
          border: 1px solid #eee;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: var(--transition);
        }

        .option.active {
          border-color: var(--primary-orange);
          color: var(--primary-orange);
          font-weight: 600;
        }

        .check {
          background: var(--primary-orange);
          color: white;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .checkboxes {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          cursor: pointer;
        }

        .checkbox-item input {
          accent-color: var(--primary-orange);
        }

        .estimate-box {
          border-left: 1px solid #eee;
          padding-left: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .estimate-box label {
          font-size: 10px;
          font-weight: 700;
          color: #bbb;
        }

        .price {
          font-size: 32px;
          font-weight: 800;
          margin: 10px 0;
        }

        .estimate-box p {
          font-size: 10px;
          color: #999;
          margin-bottom: 20px;
        }

        .full-width {
          width: 100%;
        }

        @media (max-width: 1200px) {
          .builder-steps {
            grid-template-columns: 1fr 1fr;
          }
          .estimate-box {
            border-left: none;
            border-top: 1px solid #eee;
            padding-left: 0;
            padding-top: 30px;
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .quote-grid {
            grid-template-columns: 1fr;
          }
          .builder-steps {
            grid-template-columns: 1fr;
          }
          .estimate-box {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
};

export default QuoteBuilder;
