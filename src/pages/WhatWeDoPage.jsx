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
      style={{ paddingTop: '100px' }}
    >
      <WhatWeDo />

      <section className="verticals section-black">
        <div className="container">
          <div className="section-header">
            <span className="detail-label text-orange">VERTICALS —</span>
            <h2>Where we excel.</h2>
          </div>
          <div className="verticals-grid">
            {verticals.map((v, i) => (
              <div key={i} className="vertical-card">
                <div className="v-num">0{i + 1}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow section-white">
        <div className="container">
          <div className="section-header">
            <span className="detail-label text-orange">WORKFLOW —</span>
            <h2>Our 4-Step Dominance Engine.</h2>
          </div>
          <div className="workflow-grid">
            <div className="work-step">
              <span>01</span>
              <h4>INFILTRATE</h4>
              <p>We analyze your competitors, identifying every weakness and gap in their strategy.</p>
            </div>
            <div className="work-step">
              <span>02</span>
              <h4>STRATEGIZE</h4>
              <p>We build a custom predatory roadmap designed to steal attention and market share.</p>
            </div>
            <div className="work-step">
              <span>03</span>
              <h4>EXECUTE</h4>
              <p>Cinematic production and high-speed delivery of your brand's new narrative.</p>
            </div>
            <div className="work-step">
              <span>04</span>
              <h4>DOMINATE</h4>
              <p>Scaling through performance data until your brand rules the digital jungle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-details section-white">
        <div className="container">
          <div className="detail-row">
            <div className="detail-text">
              <h3>Content Execution</h3>
              <p>We don't just "make content." We build cinematic narratives that glue people to their screens. From 4K brand films to viral social snippets, every pixel is polished for dominance.</p>
              <ul className="v-list">
                <li>Video Production</li>
                <li>Commercial Photography</li>
                <li>Motion Graphics</li>
                <li>AI Content Systems</li>
              </ul>
            </div>
            <div className="detail-visual">
              <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" alt="Content Production" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .verticals { padding: 120px 0; }
        .verticals-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-top: 60px; }
        .vertical-card { padding: 40px; border: 1px solid #222; position: relative; overflow: hidden; }
        .vertical-card:hover { border-color: var(--primary-orange); }
        .v-num { font-size: 80px; font-weight: 900; color: #111; position: absolute; top: -10px; right: -10px; line-height: 1; }
        .vertical-card h3 { font-size: 20px; color: white; margin-bottom: 20px; position: relative; z-index: 2; }
        .vertical-card p { color: #888; font-size: 14px; line-height: 1.6; position: relative; z-index: 2; }

        .workflow { padding: 120px 0; background: #fafafa; }
        .workflow-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-top: 60px; }
        .work-step span { font-size: 48px; font-weight: 900; color: #eee; line-height: 1; display: block; margin-bottom: 20px; }
        .work-step h4 { font-size: 18px; color: var(--primary-orange); margin-bottom: 15px; }
        .work-step p { font-size: 14px; color: #666; line-height: 1.6; }

        .service-details { padding: 120px 0; }
        .detail-row { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .detail-text h3 { font-size: 32px; margin-bottom: 30px; }
        .detail-text p { font-size: 18px; color: #666; margin-bottom: 30px; line-height: 1.8; }
        .v-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .v-list li { font-weight: 700; font-size: 14px; color: var(--primary-orange); }
        .v-list li::before { content: "→ "; }
        .detail-visual { height: 500px; background: #f5f5f5; border-radius: 20px; overflow: hidden; }
        .detail-visual img { width: 100%; height: 100%; object-fit: cover; }

        @media (max-width: 1024px) {
          .verticals-grid { grid-template-columns: 1fr 1fr; }
          .detail-row { grid-template-columns: 1fr; gap: 50px; }
        }
      `}</style>
    </motion.div>
  );
};

export default WhatWeDoPage;
