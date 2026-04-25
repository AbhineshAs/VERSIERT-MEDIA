import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import lionSketch from '../assets/lion_sketch.png';
import SplitText from './SplitText';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero section-white">
      <motion.div className="scroll-indicator" style={{ opacity }}>SCROLL</motion.div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-inner">
            <motion.span
              className="brand-label text-orange"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              VERSIERT MEDIA
            </motion.span>

            <h1 style={{ textTransform: 'uppercase' }}>
              <SplitText delay={0.3}>WE BUILD BRANDS THAT RULE.</SplitText>
            </h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Strategy. Content. Authority.
            </motion.p>
            <motion.p
              className="hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              We are a media & PR agency that helps brands gain attention, build trust and create impact that lasts.
            </motion.p>
            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <button className="btn-primary">GET A QUOTE</button>
              <button className="btn-outline">VIEW OUR WORK</button>
            </motion.div>
          </div>
        </div>

        <div className="hero-image">
          <motion.img
            src={lionSketch}
            alt="Majestic Lion Sketch"
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div className="dots-decoration" style={{ y: y2 }}>
            {[...Array(15)].map((_, i) => (
              <div key={i} className="dot" style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                animationDelay: `${Math.random() * 5}s`
              }}></div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow: hidden;
          position: relative;
          background: #fff;
        }

        .scroll-indicator {
          position: absolute;
          left: 40px;
          bottom: 120px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 4px;
          transform: rotate(-90deg);
          transform-origin: left bottom;
          color: #bbb;
        }

        .scroll-indicator::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          width: 60px;
          height: 1px;
          background: #eee;
          margin-left: 15px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          align-items: center;
          gap: 50px;
        }

        .brand-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 25px;
          display: block;
        }

        h1 {
          font-size: 84px;
          margin-bottom: 25px;
          line-height: 0.95;
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 25px;
          color: #333;
        }

        .hero-text {
          font-size: 17px;
          color: #777;
          max-width: 480px;
          margin-bottom: 50px;
          line-height: 1.7;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
        }

        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image img {
          width: 100%;
          max-width: 650px;
          z-index: 2;
          filter: none;
        }

        .dots-decoration {
          position: absolute;
          width: 120%;
          height: 120%;
          z-index: 1;
        }

        .dot {
          position: absolute;
          background: #FF4D00;
          border-radius: 50%;
          opacity: 0.3;
          animation: float 10s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          33% { transform: translate(20px, -20px) scale(1.2); opacity: 0.5; }
          66% { transform: translate(-20px, 20px) scale(0.8); opacity: 0.2; }
        }

        @media (max-width: 1200px) {
          h1 { font-size: 64px; }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            padding-bottom: 100px;
          }
          .hero-content { order: 2; }
          .hero-image { order: 1; margin-bottom: 40px; }
          .hero-text { margin: 0 auto 50px auto; }
          .hero-btns { justify-content: center; }
          .scroll-indicator { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
