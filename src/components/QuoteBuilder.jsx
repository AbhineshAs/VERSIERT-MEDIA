import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import html2pdf from 'html2pdf.js';

const QuoteBuilder = () => {
  const [service, setService] = useState('Content Creation');
  const [packageSize, setPackageSize] = useState('6 Videos');
  const [addOns, setAddOns] = useState({
    'Script Writing': true,
    'Anchoring': true,
    'Paid Ads': false,
    'Influencer Push': true
  });
  const [total, setTotal] = useState(89999);

  const pricing = {
    services: {
      'Content Creation': 34999,
      'PR Campaign': 49999,
      'Social Media Management': 29999
    },
    packages: {
      '4 Videos': 0,
      '6 Videos': 20000,
      '8 Videos': 40000
    },
    addons: {
      'Script Writing': 10000,
      'Anchoring': 10000,
      'Paid Ads': 20000,
      'Influencer Push': 15000
    }
  };

  useEffect(() => {
    let newTotal = pricing.services[service] || 0;
    newTotal += pricing.packages[packageSize] || 0;
    
    Object.keys(addOns).forEach(key => {
      if (addOns[key]) {
        newTotal += pricing.addons[key];
      }
    });
    
    setTotal(newTotal);
  }, [service, packageSize, addOns]);

  const toggleAddOn = (key) => {
    setAddOns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleDownloadPDF = () => {
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const selectedAddons = Object.keys(addOns).filter(key => addOns[key]);
    
    const htmlContent = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 800px; margin: 0 auto; padding: 40px; background: #fff;">
        
        <!-- Header -->
        <div style="border-bottom: 2px solid #ff5722; padding-bottom: 20px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 2px; color: #000;">VERSIERT MEDIA</h1>
            <p style="margin: 5px 0 0 0; font-size: 14px; color: #666; letter-spacing: 1px;">DIGITAL MARKETING PROPOSAL</p>
          </div>
          <div style="text-align: right; font-size: 14px; color: #666;">
            <p style="margin: 0;">Date: ${date}</p>
            <p style="margin: 5px 0 0 0;">Prepared for: Valued Client</p>
          </div>
        </div>

        <!-- Intro -->
        <div style="margin-bottom: 40px;">
          <h2 style="font-size: 20px; color: #000; margin-bottom: 10px;">Investment Summary</h2>
          <p style="font-size: 14px; line-height: 1.6; color: #555;">
            Thank you for considering Versiert Media. Below is the estimated cost breakdown based on your selected service, package, and add-ons. We look forward to the opportunity to build something powerful together.
          </p>
        </div>

        <!-- Breakdown Table -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;">
          <thead>
            <tr style="background: #f8f8f8; text-align: left;">
              <th style="padding: 15px; border-bottom: 1px solid #ddd; font-size: 12px; letter-spacing: 1px; color: #000;">DESCRIPTION</th>
              <th style="padding: 15px; border-bottom: 1px solid #ddd; font-size: 12px; letter-spacing: 1px; color: #000; text-align: right;">AMOUNT (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 15px; border-bottom: 1px solid #eee;">
                <strong>Core Service:</strong> ${service}
              </td>
              <td style="padding: 15px; border-bottom: 1px solid #eee; text-align: right;">
                ₹ ${Intl.NumberFormat('en-IN').format(pricing.services[service])}
              </td>
            </tr>
            
            ${pricing.packages[packageSize] > 0 ? `
            <tr>
              <td style="padding: 15px; border-bottom: 1px solid #eee;">
                <strong>Package Tier:</strong> ${packageSize}
              </td>
              <td style="padding: 15px; border-bottom: 1px solid #eee; text-align: right;">
                ₹ ${Intl.NumberFormat('en-IN').format(pricing.packages[packageSize])}
              </td>
            </tr>
            ` : `
            <tr>
              <td style="padding: 15px; border-bottom: 1px solid #eee;">
                <strong>Package Tier:</strong> ${packageSize}
              </td>
              <td style="padding: 15px; border-bottom: 1px solid #eee; text-align: right;">
                Included
              </td>
            </tr>
            `}
            
            ${selectedAddons.length > 0 ? selectedAddons.map(addon => `
            <tr>
              <td style="padding: 15px; border-bottom: 1px solid #eee;">
                <strong>Add-on:</strong> ${addon}
              </td>
              <td style="padding: 15px; border-bottom: 1px solid #eee; text-align: right;">
                ₹ ${Intl.NumberFormat('en-IN').format(pricing.addons[addon])}
              </td>
            </tr>
            `).join('') : `
            <tr>
              <td style="padding: 15px; border-bottom: 1px solid #eee; color: #999; font-style: italic;">
                No additional add-ons selected
              </td>
              <td style="padding: 15px; border-bottom: 1px solid #eee; text-align: right;">
                -
              </td>
            </tr>
            `}
          </tbody>
        </table>

        <!-- Total -->
        <div style="display: flex; justify-content: flex-end; margin-bottom: 60px;">
          <div style="width: 300px;">
            <div style="display: flex; justify-content: space-between; padding: 10px 15px; border-bottom: 1px solid #ddd;">
              <span style="font-weight: bold; color: #555;">Subtotal:</span>
              <span>₹ ${Intl.NumberFormat('en-IN').format(total)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 15px; background: #000; color: #fff; margin-top: 10px;">
              <span style="font-weight: 800; font-size: 18px;">ESTIMATED TOTAL:*</span>
              <span style="font-weight: 800; font-size: 18px;">₹ ${Intl.NumberFormat('en-IN').format(total)}</span>
            </div>
            <p style="font-size: 10px; color: #999; text-align: right; margin-top: 5px;">* Exclusive of applicable taxes</p>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px;">
          <p style="margin: 0 0 5px 0;">This is an electronically generated estimate and does not constitute a binding contract.</p>
          <p style="margin: 0;">hello@versiert.in | +91 9188219557 | versiert.in</p>
        </div>
      </div>
    `;

    const element = document.createElement('div');
    element.innerHTML = htmlContent;

    const opt = {
      margin:       [0.5, 0],
      filename:     'Versiert media.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <section className="quote-builder-section">
      <div className="container">
        <div className="qb-grid">
          {/* Left Side */}
          <div className="qb-intro">
            <span className="section-pre-title">QUOTE BUILDER —</span>
            <h2 className="qb-title">Build your package.<br />Get an instant estimate.</h2>
            <p className="qb-desc">Tell us what you need and we'll show you the estimated cost in real time.</p>
            <div className="qb-arrow">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          {/* Right Side - Interactive Builder */}
          <div className="qb-interactive">
            <div className="qb-columns">
              {/* Step 1 */}
              <div className="qb-col">
                <span className="step-label">STEP 1</span>
                <h4 className="step-title">Select Service</h4>
                <div className="options-list">
                  {Object.keys(pricing.services).map(s => (
                    <button 
                      key={s} 
                      className={`option-btn ${service === s ? 'active' : ''}`}
                      onClick={() => setService(s)}
                    >
                      {s}
                      {service === s && <span className="check-icon">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="qb-col">
                <span className="step-label">STEP 2</span>
                <h4 className="step-title">Select Package</h4>
                <div className="options-list">
                  {Object.keys(pricing.packages).map(p => (
                    <button 
                      key={p} 
                      className={`option-btn ${packageSize === p ? 'active' : ''}`}
                      onClick={() => setPackageSize(p)}
                    >
                      {p}
                      {packageSize === p && <span className="check-icon">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="qb-col">
                <span className="step-label">STEP 3</span>
                <h4 className="step-title">Add-ons</h4>
                <div className="options-list">
                  {Object.keys(pricing.addons).map(a => (
                    <label key={a} className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={addOns[a]} 
                        onChange={() => toggleAddOn(a)}
                      />
                      <span className="custom-checkbox">
                        {addOns[a] && <span className="check-icon">✓</span>}
                      </span>
                      {a}
                    </label>
                  ))}
                </div>
              </div>
              {/* Total Section */}
              <div className="qb-col qb-total-section">
                <span className="total-label">ESTIMATED COST</span>
                <h3 className="total-price">₹ {Intl.NumberFormat('en-IN').format(total)}</h3>
                <span className="tax-note">*Exclusive of Taxes</span>
                
                <button className="proposal-btn" onClick={handleDownloadPDF}>GET FULL PROPOSAL</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-number-container">
        <span className="section-number">.04</span>
      </div>

      <style jsx>{`
        .quote-builder-section {
          padding: 80px 0;
          background: #000;
          color: #fff;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .qb-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          align-items: flex-start;
        }

        .section-pre-title {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--primary-orange, #ff5722);
          display: block;
          margin-bottom: 20px;
          text-transform: uppercase;
          font-weight: 800;
        }

        .qb-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .qb-desc {
          font-size: 14px;
          color: var(--text-grey-light, #aaa);
          line-height: 1.6;
          max-width: 300px;
          margin-bottom: 40px;
        }

        .qb-arrow {
          margin-top: 20px;
          opacity: 0.8;
          transform: rotate(15deg);
        }

        .qb-interactive {
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px;
        }

        .qb-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .qb-col {
          padding: 0 30px;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .qb-col:first-child {
          padding-left: 0;
          border-left: none;
        }

        .qb-col:last-child {
          padding-right: 0;
        }

        .step-label {
          font-size: 10px;
          color: var(--text-grey, #666);
          letter-spacing: 2px;
          font-weight: 800;
          display: block;
          margin-bottom: 10px;
        }

        .step-title {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 25px;
          color: #fff;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .option-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 15px;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .option-btn:hover {
          border-color: rgba(255, 255, 255, 0.3);
        }

        .option-btn.active {
          border-color: var(--primary-orange, #ff5722);
          color: var(--primary-orange, #ff5722);
          background: rgba(255, 87, 34, 0.05);
        }

        .check-icon {
          background: var(--primary-orange, #ff5722);
          color: #fff;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
        }

        .checkbox-label input {
          display: none;
        }

        .custom-checkbox {
          width: 20px;
          height: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .checkbox-label input:checked + .custom-checkbox {
          border-color: var(--primary-orange, #ff5722);
          background: var(--primary-orange, #ff5722);
        }

        .checkbox-label input:checked + .custom-checkbox .check-icon {
          background: transparent;
        }

        .qb-total-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .total-label {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #fff;
          margin-bottom: 10px;
        }

        .total-price {
          font-size: 48px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 5px;
        }

        .tax-note {
          font-size: 11px;
          color: var(--text-grey, #666);
          margin-bottom: 25px;
        }

        .proposal-btn {
          background: var(--primary-orange, #ff5722);
          color: #fff;
          border: none;
          padding: 15px 30px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          cursor: pointer;
          transition: 0.3s;
        }

        .proposal-btn:hover {
          background: #e64a19;
        }

        .section-number-container {
          position: absolute;
          left: 20px;
          bottom: 20px;
        }

        .section-number {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-grey, #666);
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .qb-grid {
            grid-template-columns: 1fr;
          }
          .qb-columns {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .qb-total-section {
            align-items: flex-start;
            text-align: left;
          }
        }

        @media (max-width: 768px) {
          .quote-builder-section {
            padding: 60px 0;
          }
          .qb-grid {
            gap: 30px;
          }
          .qb-title {
            margin-bottom: 10px;
          }
          .qb-desc {
            margin-bottom: 20px;
          }
          .section-number-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default QuoteBuilder;
