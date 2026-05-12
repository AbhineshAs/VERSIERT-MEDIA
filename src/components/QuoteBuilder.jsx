import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2pdf from 'html2pdf.js';
import { Check, Download, Trash2, Plus, Info } from 'lucide-react';

const QuoteBuilder = () => {
  const [activeCategory, setActiveCategory] = useState('Content Creation');
  const [selectedServices, setSelectedServices] = useState([]);
  const [total, setTotal] = useState(0);

  const categories = {
    'Content Creation': {
      icon: '📹',
      services: [
        { name: 'Video', price: 5000, unit: 'per video' },
        { name: 'Brand Building/Talking Head', price: 6000, unit: 'per reel' },
        { name: 'Concept Videos', price: 9000, unit: 'per reel' },
        { name: 'UGC Contents', price: 3000, unit: 'per reel' }
      ],
      included: ['Concept Videos', 'Brand Building Videos', 'UGC Strategy']
    },
    'Digital Marketing': {
      icon: '📢',
      services: [
        { name: 'Paid Ads', price: 800, unit: 'per day (service charge)' },
        { name: 'Marketing Campaigns', price: 5000, unit: 'per campaign' },
        { name: 'Strategy Building', price: 5000, unit: 'one-time' },
        { name: 'Email Marketing', price: 800, unit: 'per day' },
        { name: 'Social Media Marketing', price: 800, unit: 'per day' },
        { name: 'LinkedIn Marketing', price: 800, unit: 'per week' },
        { name: 'Influencer Marketing', price: 0, unit: 'As per influencer' },
        { name: 'Content Development', price: 2000, unit: '' },
        { name: 'Content Design & Implementation', price: 6000, unit: 'per video' }
      ],
      included: ['Campaign Strategy', 'Ad Management', 'Reporting']
    },
    'PR Services': {
      icon: '🗞️',
      services: [
        { name: 'Brand Reputation Management', price: 50000, unit: '' },
        { name: 'Media Relations', price: 50000, unit: '' },
        { name: 'Personal Branding', price: 50000, unit: '' },
        { name: 'Digital PR', price: 50000, unit: '' },
        { name: 'UGC PR', price: 4000, unit: 'per video' },
        { name: 'Influencer Collab PR', price: 0, unit: 'As per Influencer' }
      ],
      included: ['Media Outreach', 'Press Releases', 'Crisis Management']
    },
    'Video Editing': {
      icon: '✂️',
      services: [
        { name: 'Motion Graphics', price: 3000, unit: '' },
        { name: 'Wedding Highlights', price: 2500, unit: '' },
        { name: 'Shortfilms', price: 5000, unit: '' },
        { name: 'Colourgrading', price: 5000, unit: '' },
        { name: 'Event Aftermovie', price: 2000, unit: '' },
        { name: 'Ad Editing', price: 2500, unit: '' },
        { name: 'Cinematic Editing', price: 2500, unit: '' },
        { name: 'Fast Delivery', price: 500, unit: '' }
      ],
      included: ['Multi-cam Editing', 'Sound Design', 'Export in 4K']
    },
    'Wedding/Event': {
      icon: '📸',
      services: [
        { name: 'Wedding Coverage', price: 150000, unit: '' },
        { name: 'Engagement Coverage', price: 50000, unit: '' },
        { name: 'Birthdays', price: 15000, unit: '' },
        { name: 'Corporate Events', price: 150000, unit: '' },
        { name: 'House Warming', price: 10000, unit: '' },
        { name: 'Express Delivery', price: 2000, unit: '' }
      ],
      included: ['Professional Photography', 'High-end Post Processing']
    },
    'Web Development': {
      icon: '💻',
      services: [
        { name: 'Portfolio Website', price: 8000, unit: 'per website' },
        { name: 'Business Website', price: 15000, unit: 'per website' },
        { name: 'E-Commerce Website', price: 25000, unit: 'per website' },
        { name: 'Custom Web Application', price: 30000, unit: 'per app' },
        { name: 'LMS / Webinar Platform', price: 40000, unit: 'per platform' },
        { name: 'Booking System Website', price: 25000, unit: 'per website' },
        { name: 'Travel & Tourism Website', price: 20000, unit: 'per website' },
        { name: 'School / College Management System', price: 40000, unit: 'per system' },
        { name: 'API Development & Integration', price: 8000, unit: 'per integration' },
        { name: 'Authentication System (JWT/Login)', price: 5000, unit: 'per project' },
        { name: 'Website Redesign', price: 10000, unit: 'per project' },
        { name: 'Responsive UI/UX Design', price: 5000, unit: 'per project' },
        { name: 'Website Maintenance', price: 3000, unit: 'per month' },
        { name: 'Bug Fixing & Performance Optimization', price: 2000, unit: 'per project' }
      ],
      included: ['Custom Code', 'Responsive Design', 'SEO Optimization', 'Deployment']
    },
    'Hosting & Infrastructure': {
      icon: '🌐',
      services: [
        { name: 'Domain Purchase (.com)' },
        { name: 'Domain Purchase (.in)' },
        { name: 'Premium Domain Setup' },
        { name: 'Shared Hosting Setup' },
        { name: 'VPS Hosting Setup' },
        { name: 'Cloud Hosting (AWS/Azure)' },
        { name: 'Vercel Deployment' },
        { name: 'Render Deployment' },
        { name: 'Netlify Deployment' },
        { name: 'SSL Certificate Setup' },
        { name: 'Business Email Setup' },
        { name: 'DNS Configuration' },
        { name: 'Website Hosting Migration' },
        { name: 'Website Maintenance' },
        { name: 'Website Backup & Security' },
        { name: 'Performance Optimization' }
      ],
      included: ['Server Configuration', 'Security Setup', 'Initial Optimization']
    }
  };

  const quickAddons = [
    { name: 'Fast Delivery', price: 500 },
    { name: 'Express Delivery', price: 2000 },
    { name: 'UGC Content', price: 4000, unit: 'per video' },
    { name: 'Influencer Collab', price: 0, unit: 'As per Influencer' }
  ];

  const formatQuantity = (qty, unit) => {
    if (!unit || !unit.startsWith('per ')) return qty;
    let baseUnit = unit.replace('per ', '').trim();
    if (baseUnit === 'day (service charge)') baseUnit = 'day';

    baseUnit = baseUnit.charAt(0).toUpperCase() + baseUnit.slice(1);

    if (qty > 1 && !baseUnit.endsWith('s')) {
      return `${qty} ${baseUnit}s`;
    }
    return `${qty} ${baseUnit}`;
  };

  useEffect(() => {
    const sum = selectedServices.reduce((acc, curr) => acc + ((curr.price || 0) * (curr.quantity || 1)), 0);
    setTotal(sum);
  }, [selectedServices]);

  const finalEstimate = total;

  const toggleService = (service, category) => {
    const exists = selectedServices.find(s => s.name === service.name && s.category === category);
    if (exists) {
      setSelectedServices(selectedServices.filter(s => !(s.name === service.name && s.category === category)));
    } else {
      setSelectedServices([...selectedServices, { ...service, category, quantity: 1 }]);
    }
  };

  const updateQuantity = (name, category, delta) => {
    setSelectedServices(selectedServices.map(s => {
      if (s.name === name && s.category === category) {
        const newQuantity = Math.max(1, (s.quantity || 1) + delta);
        return { ...s, quantity: newQuantity };
      }
      return s;
    }));
  };

  const removeService = (name, category) => {
    setSelectedServices(selectedServices.filter(s => !(s.name === name && s.category === category)));
  };

  const handleDownloadPDF = () => {
    const date = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

    const htmlContent = `
      <div style="font-family: 'Inter', sans-serif; color: #1a1a1a; max-width: 850px; margin: 0 auto; padding: 50px; background: #fff;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 30px; margin-bottom: 40px;">
          <div>
            <h1 style="margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -0.5px;">VERSIERT MEDIA</h1>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Strategy • Content • PR</p>
          </div>
          <div style="text-align: right;">
            <p style="margin: 0; font-size: 14px; font-weight: 600;">PROPOSAL #${Math.floor(Math.random() * 10000)}</p>
            <p style="margin: 5px 0 0 0; font-size: 13px; color: #666;">${date}</p>
          </div>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="font-size: 18px; font-weight: 800; margin-bottom: 15px;">SERVICE ESTIMATE</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f5f5f5;">
                <th style="padding: 12px; text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #eee;">Category</th>
                <th style="padding: 12px; text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #eee;">Service Description</th>
                <th style="padding: 12px; text-align: right; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #eee;">Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              ${selectedServices.map(s => `
                <tr>
                  <td style="padding: 15px 12px; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">${s.category}</td>
                  <td style="padding: 15px 12px; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600;">${s.name} ${(s.quantity || 1) > 1 ? `<span style="font-size: 12px; color: #666;">(x${s.quantity})</span>` : ''} <span style="font-size: 11px; color: #999; font-weight: 400;">${s.unit ? `(${s.unit})` : ''}</span></td>
                  <td style="padding: 15px 12px; border-bottom: 1px solid #eee; text-align: right; font-size: 14px; font-weight: 700;">${s.price > 0 ? `₹ ${Intl.NumberFormat('en-IN').format(s.price * (s.quantity || 1))}` : 'Variable'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-bottom: 50px;">
            <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 20px; color: #000; border-top: 2px solid #eee; padding-top: 15px; margin-top: 15px;">
              <span>TOTAL ESTIMATE</span>
              <span>${finalEstimate > 0 ? `₹ ${Intl.NumberFormat('en-IN').format(finalEstimate)}` : 'As per your requirements'}</span>
            </div>
            ${selectedServices.some(s => s.category === 'Web Development' || s.category === 'Hosting & Infrastructure') ? `
              <p style="font-size: 10px; color: #ff4d00; margin-top: 10px; font-weight: 700; text-transform: uppercase;">* Price vary as per your requirements</p>
            ` : ''}
            <p style="font-size: 11px; color: #888; margin-top: 15px; line-height: 1.5;">* Note: Prices are service charges only. Platform fees, travel, permits, and third-party charges are extra (if applicable).</p>
          </div>
        </div>

        <div style="border-top: 1px solid #eee; padding-top: 30px; font-size: 12px; color: #666; line-height: 1.6;">
          <p style="margin: 0 0 10px 0;"><strong>Terms:</strong> This estimate is valid for 15 days from the date of issue. 50% advance payment is required to commence work.</p>
          <div style="display: flex; justify-content: space-between; margin-top: 20px; color: #999;">
            <span>hello@versiert.in</span>
            <span>+91 9188219557</span>
            <span>versiert.in</span>
          </div>
        </div>
      </div>
    `;

    const element = document.createElement('div');
    element.innerHTML = htmlContent;
    const opt = {
      margin: 0,
      filename: `Versiert_Quote_${Date.now()}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();

    // WhatsApp Notification Logic
    const serviceList = selectedServices.map(s =>
      `- ${s.name} ${s.quantity > 1 ? `(x${s.quantity})` : ''}: ₹${Intl.NumberFormat('en-IN').format(s.price * (s.quantity || 1))}`
    ).join('\n');

    const whatsappMessage = `*NEW PROPOSAL GENERATED* 📄\n\n*Services:*\n${serviceList}\n\n*Total Estimate:* ₹${Intl.NumberFormat('en-IN').format(finalEstimate)}\n*Date:* ${date}\n\n_Generated via Versiert Media Quote Builder_`;

    const whatsappUrl = `https://wa.me/919188219557?text=${encodeURIComponent(whatsappMessage)}`;

    // Small delay to ensure PDF download starts before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <section id="pricing" className="quote-builder-new">
      <div className="container">
        <div className="qb-header">
          <motion.span
            className="section-pre-title"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            OUR SERVICES & PRICING
          </motion.span>
          <motion.h2
            className="qb-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Transparent Pricing. Premium Quality.
          </motion.h2>
        </div>

        <div className="qb-main-grid">
          {/* Categories Side */}
          <div className="qb-categories-nav">
            {Object.keys(categories).map(cat => (
              <button
                key={cat}
                className={`cat-nav-item ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="cat-icon">{categories[cat].icon}</span>
                <span className="cat-name">{cat}</span>
                {selectedServices.some(s => s.category === cat) && (
                  <span className="cat-count">
                    {selectedServices.filter(s => s.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Services Selection */}
          <div className="qb-services-selection">
            <div className="selection-header">
              <h3>{activeCategory}</h3>
              <p>Select the services you need from this category</p>
              {(activeCategory === 'Web Development' || activeCategory === 'Hosting & Infrastructure') && (
                <p className="dev-note">*Price vary as per your requirements</p>
              )}
            </div>

            <div className="services-list-grid">
              {categories[activeCategory].services.map((s, i) => {
                const isActive = selectedServices.some(item => item.name === s.name && item.category === activeCategory);
                return (
                  <motion.div
                    key={i}
                    className={`service-selection-card ${isActive ? 'active' : ''}`}
                    onClick={() => toggleService(s, activeCategory)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="service-header">
                      <h4 className="s-name">{s.name}</h4>
                      <div className={`check-circle ${isActive ? 'checked' : ''}`}>
                        {isActive && <Check size={14} />}
                      </div>
                    </div>
                    <div className="service-footer">
                      <span className="s-price">
                        {s.price > 0 ? `₹${Intl.NumberFormat('en-IN').format(s.price)}` : 'Variable'}
                      </span>
                      {s.unit && <span className="s-unit">{s.unit}</span>}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="category-inclusions">
              <div className="inclusion-title">
                <Info size={14} />
                <span>What's Typically Included:</span>
              </div>
              <ul className="inclusion-list">
                {categories[activeCategory].included.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Summary / Cart Side */}
          <div className="qb-summary-panel">
            <div className="summary-card">
              <div className="summary-header">
                <h4>Your Selection</h4>
                <span className="item-total-count">{selectedServices.length} Items</span>
              </div>

              <div className="selected-items-list">
                <AnimatePresence mode="popLayout">
                  {selectedServices.length === 0 ? (
                    <motion.div
                      className="empty-summary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Plus size={40} />
                      <p>No services selected yet</p>
                    </motion.div>
                  ) : (
                    selectedServices.map((s, i) => (
                      <motion.div
                        key={`${s.name}-${s.category}`}
                        className="selected-item-row"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div className="item-info">
                          <span className="item-cat-label">{s.category}</span>
                          <span className="item-name-label">{s.name}</span>
                          <div className="qty-controls-sm">
                            <button className="qty-btn-sm" onClick={(e) => { e.stopPropagation(); updateQuantity(s.name, s.category, -1); }}>-</button>
                            <span className="qty-val">{formatQuantity(s.quantity || 1, s.unit)}</span>
                            <button className="qty-btn-sm" onClick={(e) => { e.stopPropagation(); updateQuantity(s.name, s.category, 1); }}>+</button>
                          </div>
                        </div>
                        <div className="item-actions">
                          <span className="item-price-label">
                            {s.price > 0 
                              ? `₹${Intl.NumberFormat('en-IN').format(s.price * (s.quantity || 1))}` 
                              : "Variable"}
                          </span>
                          <button
                            className="remove-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeService(s.name, s.category);
                            }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              <div className="summary-footer">
                <div className="total-row">
                  <span>Total Amount</span>
                  <span className="final-price">
                    {finalEstimate > 0 
                      ? `₹${Intl.NumberFormat('en-IN').format(finalEstimate)}` 
                      : (selectedServices.length > 0 ? "As per your requirements" : "₹0")
                    }
                  </span>
                </div>
                <p className="tax-info">*Exclusive of taxes and extra charges</p>

                <button
                  className="download-proposal-btn"
                  disabled={selectedServices.length === 0}
                  onClick={handleDownloadPDF}
                >
                  <Download size={18} />
                  GENERATE PROPOSAL
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="quick-addons-strip">
          <span className="addon-label">Quick Add-ons:</span>
          {quickAddons.map((addon, i) => {
            const isActive = selectedServices.some(s => s.name === addon.name && s.category === 'Add-on');
            return (
              <button
                key={i}
                className={`addon-pill ${isActive ? 'active' : ''}`}
                onClick={() => toggleService(addon, 'Add-on')}
              >
                <span className="a-name">{addon.name}</span>
                <span className="a-price">
                  {addon.price > 0 ? `₹${Intl.NumberFormat('en-IN').format(addon.price)}` : addon.unit}
                </span>
                {isActive && <Check size={12} className="a-check" />}
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .quote-builder-new {
          padding: 100px 0;
          background: #050505;
          color: #fff;
          position: relative;
        }

        .qb-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-pre-title {
          font-size: 11px;
          letter-spacing: 4px;
          color: var(--text-grey, #888);
          display: block;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .qb-title {
          font-size: 42px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .qb-main-grid {
          display: grid;
          grid-template-columns: 280px 1fr 380px;
          gap: 30px;
          align-items: start;
        }

        /* Nav */
        .qb-categories-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cat-nav-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 18px 25px;
          display: flex;
          align-items: center;
          gap: 15px;
          color: #888;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          position: relative;
        }

        .cat-nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }

        .cat-nav-item.active {
          background: #fff;
          color: #000;
          border-color: #fff;
        }

        .cat-icon {
          font-size: 20px;
        }

        .cat-name {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .cat-count {
          position: absolute;
          right: 20px;
          background: #ff4d00;
          color: #fff;
          font-size: 10px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        /* Selection Area */
        .qb-services-selection {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px;
          min-height: 500px;
        }

        .selection-header {
          margin-bottom: 30px;
        }

        .selection-header h3 {
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 5px;
        }

        .selection-header p {
          font-size: 13px;
          color: #666;
        }

        .dev-note {
          color: #ff4d00 !important;
          font-weight: 700;
          margin-top: 10px;
          font-size: 11px !important;
          text-transform: uppercase;
        }

        .services-list-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 40px;
        }

        .service-selection-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .service-selection-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .service-selection-card.active {
          border-color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }

        .s-name {
          font-size: 14px;
          font-weight: 700;
          max-width: 80%;
          line-height: 1.4;
        }

        .check-circle {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .check-circle.checked {
          background: #fff;
          border-color: #fff;
          color: #000;
        }

        .service-footer {
          display: flex;
          flex-direction: column;
        }

        .s-price {
          font-size: 18px;
          font-weight: 900;
          color: #fff;
        }

        .s-unit {
          font-size: 10px;
          color: #666;
          margin-top: 2px;
        }

        .category-inclusions {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 30px;
        }

        .inclusion-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #888;
          margin-bottom: 15px;
        }

        .inclusion-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          list-style: none;
        }

        .inclusion-list li {
          font-size: 13px;
          color: #555;
          padding-left: 15px;
          position: relative;
        }

        .inclusion-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #888;
        }

        /* Summary Panel */
        .qb-summary-panel {
          position: sticky;
          top: 100px;
        }

        .summary-card {
          background: #fff;
          color: #000;
          padding: 40px;
          border-radius: 4px;
        }

        .summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #000;
          padding-bottom: 15px;
        }

        .summary-header h4 {
          font-size: 18px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .item-total-count {
          font-size: 11px;
          font-weight: 800;
          background: #000;
          color: #fff;
          padding: 4px 10px;
        }

        .selected-items-list {
          min-height: 200px;
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 30px;
        }

        .empty-summary {
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #ccc;
          gap: 15px;
        }

        .empty-summary p {
          font-size: 13px;
          font-weight: 600;
        }

        .selected-item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
        }

        .item-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .item-cat-label {
          font-size: 9px;
          font-weight: 800;
          color: #999;
          text-transform: uppercase;
        }

        .item-name-label {
          font-size: 14px;
          font-weight: 700;
        }

        .item-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .item-price-label {
          font-size: 14px;
          font-weight: 800;
        }

        .qty-controls-sm {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 5px;
        }

        .qty-btn-sm {
          background: #f5f5f5;
          border: 1px solid #eee;
          width: 22px;
          height: 22px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 12px;
          cursor: pointer;
          color: #000;
          transition: 0.2s;
        }

        .qty-btn-sm:hover {
          background: #e0e0e0;
        }

        .qty-val {
          font-size: 12px;
          font-weight: 700;
          min-width: 12px;
          text-align: center;
        }

        .remove-btn {
          background: none;
          border: none;
          color: #ff4d00;
          cursor: pointer;
          opacity: 0.5;
          transition: 0.3s;
        }

        .remove-btn:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .summary-footer {
          border-top: 2px solid #000;
          padding-top: 25px;
        }

        .summary-details {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 600;
          color: #666;
        }

        .market-price {
          text-decoration: line-through;
          opacity: 0.7;
        }

        .discount {
          color: #2e7d32;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }

        .total-row span:first-child {
          font-size: 14px;
          font-weight: 700;
          color: #666;
        }

        .final-price {
          font-size: 32px;
          font-weight: 900;
        }

        .tax-info {
          font-size: 11px;
          color: #999;
          margin-bottom: 25px;
        }

        .download-proposal-btn {
          width: 100%;
          background: #000;
          color: #fff;
          border: none;
          padding: 18px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: 0.3s;
        }

        .download-proposal-btn:hover {
          background: #222;
          transform: translateY(-2px);
        }

        .download-proposal-btn:disabled {
          background: #eee;
          color: #ccc;
          cursor: not-allowed;
          transform: none;
        }

        .quick-addons-strip {
          margin-top: 60px;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .addon-label {
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          color: #888;
          letter-spacing: 2px;
        }

        .addon-pill {
          background: rgba(255, 255, 255, 0.05);
          padding: 10px 25px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: all 0.3s;
          color: #888;
        }

        .addon-pill:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }

        .addon-pill.active {
          background: #fff;
          color: #000;
          border-color: #fff;
        }

        .a-name {
          font-weight: 800;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.5px;
        }

        .a-price {
          font-weight: 600;
          opacity: 0.7;
        }

        .a-check {
          color: #000;
        }

        @media (max-width: 1200px) {
          .qb-main-grid {
            grid-template-columns: 1fr 1fr;
          }
          .qb-categories-nav {
            grid-column: span 2;
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 10px;
          }
          .cat-nav-item {
            flex-shrink: 0;
            padding: 15px 20px;
          }
        }

        @media (max-width: 768px) {
          .qb-main-grid {
            grid-template-columns: 1fr;
          }
          .qb-categories-nav {
            grid-column: span 1;
          }
          .services-list-grid {
            grid-template-columns: 1fr;
          }
          .qb-summary-panel {
            position: static;
          }
          .qb-title {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default QuoteBuilder;
