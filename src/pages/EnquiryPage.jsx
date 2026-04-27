import React from 'react';
import Enquiry from '../components/Enquiry';
import { motion } from 'framer-motion';

const EnquiryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <Enquiry />

      <section className="global-network">
        <div className="container">
          <div className="network-grid">
            <div className="network-content">
              <span className="section-pre-title">NETWORK</span>
              <h2 className="page-title">A GLOBAL HUNT.</h2>
              <p className="page-text">While our HQ is in the Creative District, our network spans across London, New York, Tokyo, and Singapore. We have the local insight to execute global dominance.</p>
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

      <section className="partnership">
        <div className="container">
          <div className="partner-box">
            <h3 className="partner-title">INTERESTED IN PARTNERING?</h3>
            <p className="partner-desc">We are always looking for creative collaborators and strategic partners. If you think your brand aligns with the Versiert vision, let's talk.</p>
            <button className="minimal-btn">PARTNER WITH US →</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-wrapper {
          padding-top: 100px;
          background: #000;
        }

        .global-network, .partnership {
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
          margin-bottom: 40px;
        }

        .page-text {
          font-size: 14px;
          color: var(--text-grey-light);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 500px;
        }

        .network-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .city-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .city-list span {
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 2px;
          color: #fff;
        }

        .network-visual {
          height: 500px;
          background: #111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .network-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
        }

        .partnership {
          text-align: center;
          background: rgba(255, 255, 255, 0.01);
        }

        .partner-box {
          max-width: 800px;
          margin: 0 auto;
        }

        .partner-title {
          font-size: 32px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 25px;
          letter-spacing: 1px;
        }

        .partner-desc {
          color: var(--text-grey-light);
          font-size: 16px;
          margin-bottom: 40px;
          line-height: 1.7;
        }

        .minimal-btn {
          background: #fff;
          color: #000;
          border: none;
          padding: 15px 30px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          cursor: pointer;
          transition: 0.3s;
        }

        .minimal-btn:hover {
          background: var(--text-grey-light);
        }

        @media (max-width: 1024px) {
          .network-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default EnquiryPage;
