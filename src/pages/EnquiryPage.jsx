import React from 'react';
import Enquiry from '../components/Enquiry';
import { motion } from 'framer-motion';

const EnquiryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '100px' }}
    >
      <Enquiry />

      <section className="global-network section-white">
        <div className="container">
          <div className="network-grid">
            <div className="network-content">
              <span className="detail-label text-orange">NETWORK —</span>
              <h2>A global hunt.</h2>
              <p>While our HQ is in the Creative District, our network spans across London, New York, Tokyo, and Singapore. We have the local insight to execute global dominance.</p>
              <div className="city-list">
                <span>DUBAI (HQ)</span>
                <span>LONDON</span>
                <span>NEW YORK</span>
                <span>SINGAPORE</span>
              </div>
            </div>
            <div className="network-visual">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Global Network" />
            </div>
          </div>
        </div>
      </section>

      <section className="partnership section-black">
        <div className="container">
          <div className="partner-box">
            <h3>Interested in partnering?</h3>
            <p>We are always looking for creative collaborators and strategic partners. If you think your brand aligns with the Versiert vision, let's talk.</p>
            <button className="btn-outline">PARTNER WITH US</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .global-network { padding: 120px 0; }
        .network-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }
        .network-content h2 { font-size: 48px; margin-bottom: 30px; }
        .network-content p { color: #666; font-size: 18px; line-height: 1.8; margin-bottom: 40px; }
        .city-list { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .city-list span { font-weight: 800; font-size: 14px; letter-spacing: 2px; }
        .network-visual { height: 500px; background: #f0f0f0; border-radius: 20px; overflow: hidden; }
        .network-visual img { width: 100%; height: 100%; object-fit: cover; }

        .partnership { padding: 120px 0; text-align: center; }
        .partner-box { max-width: 800px; margin: 0 auto; }
        .partner-box h3 { font-size: 32px; color: white; margin-bottom: 25px; }
        .partner-box p { color: #888; font-size: 18px; margin-bottom: 40px; line-height: 1.7; }

        @media (max-width: 992px) {
          .network-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  );
};

export default EnquiryPage;
