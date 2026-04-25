import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import elephantSketch from '../assets/elephant_sketch.png';

const WhoWeAre = ({ isFullPage = false }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="who-we-are" className="who-we-are section-black">
      <div className="container">
        <div className="who-grid">
          <div className="who-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label text-orange">WHO WE ARE —</span>
              <h2>More than creators,<br />we are brand builders.</h2>
              <p className="who-text">
                We blend strategy, creativity and consistency to build long-term brand authority. Every campaign we create is backed by insight and crafted to deliver real results.
              </p>

              <div className="pillars">
                {['🎯 STRATEGIC THINKERS', '🎨 CREATIVE STORYTELLERS', '📈 RESULTS FOCUSED'].map((p, i) => (
                  <motion.div
                    key={i}
                    className="pillar"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="pillar-icon">{p.split(' ')[0]}</div>
                    <div className="pillar-label">{p.split(' ').slice(1).join(' ')}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="who-image">
            <motion.img
              src={elephantSketch}
              alt="Elephant Sketch"
              style={{ y }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>

        {isFullPage && (
          <motion.div
            className="extra-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="who-extra-grid">
              <div className="extra-box">
                <h3>OUR VISION</h3>
                <p>To redefine the boundary between content and dominance, creating a world where every brand we touch becomes a leader in its industry.</p>
              </div>
              <div className="extra-box">
                <h3>OUR MISSION</h3>
                <p>To provide high-impact strategy and creative execution that transforms standard marketing into cinematic brand authority.</p>
              </div>
              <div className="extra-box">
                <h3>OUR STORY</h3>
                <p>Founded on the instinct of survival and dominance, Versiert Media was born to bridge the gap between simple content creation and strategic authority.</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        /* ... existing styles ... */
        .extra-details {
          margin-top: 100px;
          border-top: 1px solid #222;
          padding-top: 80px;
        }

        .who-extra-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
        }

        .extra-box h3 {
          font-size: 14px;
          color: var(--primary-orange);
          margin-bottom: 20px;
          letter-spacing: 2px;
        }

        .extra-box p {
          color: #888;
          font-size: 16px;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .who-extra-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <style jsx>{`
        .who-we-are {
          padding: 120px 0;
          overflow: hidden;
        }

        .who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 80px;
        }

        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: block;
        }

        h2 {
          font-size: 48px;
          margin-bottom: 30px;
        }

        .who-text {
          color: var(--text-grey-light);
          font-size: 18px;
          margin-bottom: 50px;
          max-width: 500px;
        }

        .pillars {
          display: flex;
          gap: 40px;
        }

        .pillar {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 15px;
        }

        .pillar-icon {
          font-size: 24px;
        }

        .pillar-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          max-width: 80px;
        }

        .who-image img {
          width: 100%;
          max-width: 600px;
          filter: brightness(0.8) contrast(1.2);
        }

        @media (max-width: 1024px) {
          .who-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .who-content { order: 2; }
          .who-image { order: 1; }
          .who-text { margin: 0 auto 50px auto; }
          .pillars { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
