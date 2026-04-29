import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-top"
          >
            <span className="footer-tagline">THE END</span>
            <h2 className="footer-title">THANKS FOR VISITING</h2>
          </motion.div>

          <div className="footer-bottom">
            <p className="copyright">© 2026 Versiert Media. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">PRIVACY POLICY</a>
              <a href="#">TERMS & CONDITIONS</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 60px 0 30px;
          background: #000;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-title {
          font-size: 24px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 2px;
          margin-bottom: 80px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .copyright {
          font-size: 9px;
          color: var(--text-grey);
          letter-spacing: 1px;
        }

        .footer-links {
          display: flex;
          gap: 30px;
        }

        .footer-links a {
          font-size: 9px;
          color: var(--text-grey);
          text-decoration: none;
          letter-spacing: 1px;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 30px;
          }
          .footer-top {
            margin-bottom: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
