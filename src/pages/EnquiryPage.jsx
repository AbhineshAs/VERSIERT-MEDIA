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

        .partnership {
          padding: 80px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
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

        @media (max-width: 768px) {
          .partnership {
            padding: 60px 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default EnquiryPage;
