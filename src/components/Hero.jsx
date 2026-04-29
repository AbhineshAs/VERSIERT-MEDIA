import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplitText from './SplitText';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero">
      <motion.div
        className="hero-glow"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="side-left">
        <div className="social-links-vertical">
          <a href="#">IG</a>
          <a href="#">LN</a>
          <a href="#">YT</a>
          <a href="#">TW</a>
        </div>
      </div>

      <div className="side-right">
        <div className="scroll-text">SCROLL —</div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="hero-pre-title">VERSIERT MEDIA</span>
          <h1 className="hero-title">
            WE BUILD BRANDS<br />THAT RULE.
          </h1>
          <p className="hero-sub-heading">Strategy. Content. Authority.</p>
          <p className="hero-desc">We are a media & PR agency that helps brands gain attention, build trust and create impact that lasts.</p>
          <div className="hero-btns">
            <a href="#enquiry" className="btn-primary">GET A QUOTE</a>
            <a href="#our-work" className="btn-outline">VIEW OUR WORK</a>
          </div>
        </motion.div>
      </div>

      <div className="section-number-container">
        <span className="section-number">.01</span>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          position: relative;
          overflow: hidden;
          padding: 0;
        }

        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .hero-container {
          z-index: 1;
          text-align: center;
        }

        .hero-pre-title {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--text-grey-light);
          display: block;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(60px, 10vw, 120px);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -2px;
          margin-bottom: 30px;
          color: #fff;
          text-transform: uppercase;
        }

        .hero-sub-heading {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .hero-desc {
          font-size: 14px;
          color: var(--text-grey-light);
          max-width: 500px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
          justify-content: center;
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
          transition: 0.3s;
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
          transition: 0.3s;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .btn-outline:hover {
          background: #fff;
          color: #000;
        }

        .side-left {
          position: absolute;
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }

        .social-links-vertical {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .social-links-vertical a {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-grey);
          text-decoration: none;
          transition: 0.3s;
        }

        .social-links-vertical a:hover {
          color: #fff;
        }

        .side-right {
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          z-index: 2;
        }

        .scroll-text {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--text-grey);
          font-weight: 700;
        }

        .section-number-container {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 2;
        }

        .section-number {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-grey);
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .side-left, .side-right {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(40px, 12vw, 60px);
            margin-bottom: 20px;
          }
          .hero-desc {
            padding: 0 20px;
            margin-bottom: 30px;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
            padding: 0 20px;
            gap: 15px;
          }
          .btn-primary, .btn-outline {
            width: 100%;
            box-sizing: border-box;
          }
          .section-number-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;