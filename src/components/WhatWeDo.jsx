import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import strategyIcon from '../assets/2026-05-10 22.57.43.jpg';
import contentIcon from '../assets/2026-05-10 22.56.54.jpg';
import platformIcon from '../assets/2026-05-10 22.54.40.jpg';
import engagementIcon from '../assets/2026-05-10 22.55.33.jpg';

const WhatWeDo = () => {
  const [active, setActive] = useState(null);

  const services = [
    {
      title: 'STRATEGY',
      img: strategyIcon,
      subtitle: 'Strategic Thinking That Drives Growth',
      desc: 'At Versiert, strategy isn’t just planning—it’s the foundation of everything we build. We combine market intelligence, data-driven insights, and creative thinking to craft strategies that position your brand for long-term success.',
      details: [
        { label: 'Our Approach', text: 'We start by understanding your business, your audience, and your competitive landscape. From there, we design tailored strategies that align with your goals and unlock new growth opportunities.' },
        { label: 'Data-Driven Decisions', text: 'Every move we make is backed by research and analytics. This ensures that your brand isn’t just visible—but impactful where it matters most.' },
        { label: 'Long-Term Impact', text: 'Our strategies are built to scale, adapt, and evolve—helping you stay ahead in a constantly changing digital world.' }
      ]
    },
    {
      title: 'CONTENT EXECUTION',
      img: contentIcon,
      subtitle: 'Content That Performs',
      desc: 'Great ideas mean nothing without execution. At Versiert, we transform strategy into powerful, high-performing content that connects, engages, and converts.',
      details: [
        { label: 'SEO-Optimized Content', text: 'We create content designed to rank. From blogs to landing pages, every piece is crafted with search visibility and user intent in mind.' },
        { label: 'Multi-Format Creation', text: 'Whether it’s written content, visuals, videos, or campaigns—we deliver cohesive storytelling across formats.' },
        { label: 'Conversion-Focused Execution', text: 'Our content doesn’t just attract attention—it drives action. Every asset is built to guide users through your funnel.' }
      ]
    },
    {
      title: 'MULTI-PLATFORM',
      img: platformIcon,
      subtitle: 'Be Everywhere That Matters',
      desc: 'Your audience doesn’t live on one platform—and neither should your brand. We ensure your presence is strong, consistent, and optimized across all digital touchpoints.',
      details: [
        { label: 'Omnichannel Strategy', text: 'We build integrated strategies that connect your website, social media, and digital campaigns into one seamless experience.' },
        { label: 'Platform-Specific Optimization', text: 'Each platform has its own language. We tailor your content and messaging to perform on every channel.' },
        { label: 'Unified Brand Experience', text: 'No matter where your audience finds you, they experience the same powerful, consistent brand identity.' }
      ]
    },
    {
      title: 'ENGAGEMENT',
      img: engagementIcon,
      subtitle: 'Turning Attention Into Loyalty',
      desc: 'Engagement is more than likes and clicks—it’s about building meaningful relationships with your audience.',
      details: [
        { label: 'Audience Insights', text: 'We analyze behavior, preferences, and trends to understand what truly connects with your audience.' },
        { label: 'Interactive Content', text: 'From dynamic campaigns to engaging formats, we create experiences that invite participation.' },
        { label: 'Community Building', text: 'We help you build a loyal audience that doesn’t just follow your brand—but believes in it.' }
      ]
    }
  ];

  return (
    <section id="what-we-do" className="what-we-do">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-pre-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            className="services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Solutions that drive impact.
          </motion.h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${active === index ? 'active' : ''}`}
              onClick={() => setActive(active === index ? null : index)}
            >
              <div className="service-visual">
                <img src={service.img} alt={service.title} className="service-icon-img" />
              </div>
              <div className="service-info">
                <h3 className="service-card-title">{service.title}</h3>
                <ArrowRight size={16} className="card-arrow" />
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div
              key={active}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ overflow: 'hidden' }}
            >
              <div className="service-details-container">
                <p className="service-details-desc">
                  <strong className="service-details-subtitle">{services[active].subtitle}</strong>
                  {services[active].desc}
                </p>
                <ul className="service-details-list">
                  {services[active].details.map((detail, i) => (
                    <li key={i} className="service-detail-item">
                      <div className="service-detail-header">
                        <div className="orange-dot" />
                        <strong>{detail.label}</strong>
                      </div>
                      <span className="service-detail-text">{detail.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="section-number-container">
        <span className="section-number">.03</span>
      </div>

      <style jsx>{`
        .what-we-do {
          padding: 80px 0;
          background: #000;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-pre-title {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--text-grey);
          display: block;
          margin-bottom: 20px;
        }

        .services-title {
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .service-card:hover, .service-card.active {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .service-visual {
          width: 100%;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          background: #111;
          overflow: hidden;
        }

        .service-icon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .service-card-title {
          font-size: 11px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 1px;
        }

        .card-arrow {
          color: #fff;
          opacity: 0.5;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .service-card:hover .card-arrow, .service-card.active .card-arrow {
          opacity: 1;
          transform: translateX(5px);
        }

        .service-details-container {
          padding: 60px 0 0 0;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 60px;
          color: #fff;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 60px;
        }

        .service-details-desc {
          font-size: 18px;
          color: var(--text-grey);
          line-height: 1.6;
        }

        .service-details-subtitle {
          display: block;
          color: #fff;
          margin-bottom: 10px;
        }

        .service-details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .service-detail-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
        }

        .service-detail-header {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-size: 16px;
        }

        .orange-dot {
          width: 6px;
          height: 6px;
          background: var(--primary-orange, #FF4D00);
          border-radius: 50%;
        }

        .service-detail-text {
          color: var(--text-grey);
          padding-left: 16px;
          line-height: 1.5;
        }

        .section-number-container {
          position: absolute;
          left: 20px;
          bottom: 20px;
        }

        .section-number {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-grey);
          opacity: 0.3;
        }

        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .what-we-do {
            padding: 60px 20px;
          }
          .section-header {
            margin-bottom: 40px;
          }
          .services-title {
            font-size: 32px;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-details-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .section-number-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
