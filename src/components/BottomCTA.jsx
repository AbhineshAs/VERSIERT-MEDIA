import React from 'react';
import { motion } from 'framer-motion';
import phoenixSketch from '../assets/2026-05-10 22.52.54.jpg';

const BottomCTA = () => {
  return (
    <section className="bottom-cta">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-content">
            <h2 className="cta-text">
              Your brand deserves more than content.<br />
              <span>It deserves dominance.</span>
            </h2>
            <div className="cta-btns">
              <a href="#enquiry" className="btn-primary">GET A QUOTE</a>
              <a href="#enquiry" className="btn-outline">CONTACT US</a>
            </div>
          </div>
          <div className="cta-visual">
            <motion.img
              src={phoenixSketch}
              alt="Phoenix"
              className="phoenix-img"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bottom-cta {
          padding: 80px 0;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .cta-text {
          font-size: 42px;
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 50px;
          text-transform: uppercase;
        }

        .cta-text span {
          color: rgba(255, 255, 255, 0.3);
        }

        .cta-btns {
          display: flex;
          gap: 20px;
        }

        .btn-primary {
          background: #fff;
          color: #000;
          border: none;
          padding: 15px 30px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          padding: 15px 30px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .phoenix-img {
          width: 100%;
          max-width: 400px;
          filter: grayscale(1) brightness(1.2);
        }

        @media (max-width: 1024px) {
          .cta-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .cta-btns {
            justify-content: center;
          }
          .cta-visual {
            display: flex;
            justify-content: center;
            margin-top: 50px;
          }
        }

        @media (max-width: 768px) {
          .bottom-cta {
            padding: 60px 0;
          }
          .cta-grid {
            gap: 40px;
          }
          .cta-text {
            font-size: 32px;
          }
          .cta-btns {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary, .btn-outline {
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>
    </section>
  );
};

export default BottomCTA;
