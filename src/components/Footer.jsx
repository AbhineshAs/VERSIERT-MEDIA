import React from 'react';
import { motion } from 'framer-motion';
import phoenixSketch from '../assets/phoenix_sketch.png';

const Footer = () => {
  return (
    <footer className="footer section-black">
      <div className="container">
        <div className="footer-top">
          <div className="footer-visual">
            <motion.img 
              src={phoenixSketch} 
              alt="Phoenix Sketch"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          </div>
          
          <div className="footer-cta">
            <h2>Your brand deserves more than content.<br /><span>It deserves dominance.</span></h2>
            <div className="footer-btns">
              <button className="btn-primary">GET A QUOTE</button>
              <button className="btn-outline">CONTACT US</button>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-logo">
            VERSIERT<span>MEDIA</span>
          </div>
          <div className="social-links">
            <a href="#">IG</a>
            <a href="#">LN</a>
            <a href="#">YT</a>
            <a href="#">TW</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Versiert Media. All Rights Reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 100px 0 40px 0;
          background-color: #000;
        }

        .footer-top {
          text-align: center;
          margin-bottom: 100px;
        }

        .footer-visual img {
          width: 150px;
          margin-bottom: 40px;
          filter: brightness(1.2);
        }

        h2 {
          font-size: 36px;
          margin-bottom: 40px;
          line-height: 1.2;
        }

        h2 span {
          color: var(--primary-orange);
        }

        .footer-btns {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .footer-middle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 0;
          border-top: 1px solid #111;
          border-bottom: 1px solid #111;
        }

        .footer-logo {
          font-weight: 800;
          font-size: 20px;
          letter-spacing: 2px;
          color: white;
        }

        .footer-logo span {
          font-weight: 400;
          font-size: 10px;
          letter-spacing: 4px;
          margin-left: 10px;
        }

        .social-links {
          display: flex;
          gap: 30px;
        }

        .social-links a {
          font-size: 12px;
          font-weight: 700;
          color: #666;
          transition: var(--transition);
        }

        .social-links a:hover {
          color: var(--primary-orange);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 30px;
          font-size: 10px;
          color: #444;
        }

        .legal-links {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .footer-middle {
            flex-direction: column;
            gap: 30px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            text-align: center;
          }
          h2 { font-size: 28px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
