import React from 'react';
import QuoteBuilder from '../components/QuoteBuilder';
import { motion } from 'framer-motion';

const QuoteBuilderPage = () => {
  const steps = [
    { title: 'Select Services', desc: 'Choose the weapons for your brand dominance.' },
    { title: 'Define Reach', desc: 'Tell us how far you want to go.' },
    { title: 'Get Analysis', desc: 'Our team reviews and sends a detailed proposal.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '100px' }}
    >
      <QuoteBuilder />

      <section className="how-it-works section-white">
        <div className="container">
          <div className="section-header">
            <span className="detail-label text-orange">THE PROCESS —</span>
            <h2>How it works.</h2>
          </div>
          <div className="step-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-item">
                <div className="s-circle">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq section-white">
        <div className="container">
          <div className="section-header">
            <span className="detail-label text-orange">FAQ —</span>
            <h2>Common Questions.</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>HOW LONG UNTIL I SEE RESULTS?</h4>
              <p>Strategy alignment takes 2 weeks. You typically see dominance start within 60-90 days.</p>
            </div>
            <div className="faq-item">
              <h4>DO YOU OFFER CUSTOM PACKAGES?</h4>
              <p>Absolutely. The builder is a starting point. We refine every proposal based on your specific hunt.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="package-info section-black">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>STANDARD</h3>
              <p>Ideal for emerging brands looking to establish a professional presence.</p>
              <div className="info-price">STARTING AT $5K</div>
            </div>
            <div className="info-card featured">
              <div className="badge">POPULAR</div>
              <h3>DOMINANCE</h3>
              <p>Full-scale strategy and execution for rapid market leadership.</p>
              <div className="info-price">STARTING AT $15K</div>
            </div>
            <div className="info-card">
              <h3>ELITE</h3>
              <p>Global PR and cinematic production for legacy-building.</p>
              <div className="info-price">CUSTOM PRICING</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .how-it-works { padding: 120px 0; }
        .step-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 60px; text-align: center; }
        .s-circle { width: 60px; height: 60px; background: var(--primary-orange); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; margin: 0 auto 25px auto; font-size: 24px; }
        .step-item h3 { font-size: 20px; margin-bottom: 15px; }
        .step-item p { color: #666; font-size: 14px; }

        .faq { padding: 120px 0; border-top: 1px solid #f0f0f0; }
        .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 60px; }
        .faq-item h4 { font-size: 14px; color: #000; margin-bottom: 15px; letter-spacing: 1px; }
        .faq-item p { color: #666; font-size: 14px; line-height: 1.6; }

        .package-info { padding: 120px 0; }
        .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .info-card { padding: 50px; border: 1px solid #222; text-align: center; position: relative; }
        .info-card.featured { border-color: var(--primary-orange); transform: scale(1.05); background: #050505; }
        .badge { position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); background: var(--primary-orange); color: white; padding: 5px 15px; font-size: 10px; font-weight: 900; letter-spacing: 1px; }
        .info-card h3 { font-size: 18px; color: white; margin-bottom: 20px; letter-spacing: 2px; }
        .info-card p { color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 30px; }
        .info-price { font-size: 14px; font-weight: 800; color: var(--primary-orange); letter-spacing: 1px; }

        @media (max-width: 992px) {
          .step-grid { grid-template-columns: 1fr; }
          .info-grid { grid-template-columns: 1fr; gap: 50px; }
          .info-card.featured { transform: none; }
        }
      `}</style>
    </motion.div>
  );
};

export default QuoteBuilderPage;
