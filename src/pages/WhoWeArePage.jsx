import React from 'react';
import WhoWeAre from '../components/WhoWeAre';
import AnimatedCounter from '../components/AnimatedCounter';
import { motion } from 'framer-motion';

const WhoWeArePage = () => {
  const team = [
    { role: 'FOUNDER & CEO', name: 'ADARSH S.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
    { role: 'CREATIVE DIRECTOR', name: 'SARAH J.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80' },
    { role: 'STRATEGY HEAD', name: 'MARCUS L.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <WhoWeAre />

      <section className="dna-section">
        <div className="container">
          <div className="dna-grid">
            <div className="dna-content">
              <span className="section-pre-title">BRAND DNA</span>
              <h2 className="page-title">BUILT ON INSTINCT.</h2>
              <p className="page-text">We don't just follow trends; we set them. Our DNA is a mix of predatory precision and artistic elegance. We believe that in the digital jungle, the most creative brands are the ones that survive and dominate.</p>
            </div>
            <div className="dna-stats">
              <div className="stat-card">
                <h4><AnimatedCounter value={99.9} decimals={1} />%</h4>
                <p>UPTIME DOMINANCE</p>
              </div>
              <div className="stat-card">
                <h4><AnimatedCounter value={12} />+</h4>
                <p>GLOBAL MARKETS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="milestones">
        <div className="container">
          <div className="section-header">
            <span className="section-pre-title">JOURNEY</span>
            <h2 className="page-title">OUR MILESTONES.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="t-year">2018</div>
              <div className="t-content">
                <h3>THE SPARK</h3>
                <p>Versiert Media is born in a small garage in Dubai, focused on disruptive social content.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="t-year">2020</div>
              <div className="t-content">
                <h3>GLOBAL EXPANSION</h3>
                <p>We opened our London office and shifted focus to cinematic brand storytelling.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="t-year">2023</div>
              <div className="t-content">
                <h3>DOMINANCE</h3>
                <p>Reached 100+ global clients and launched our proprietary AI strategy engine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership">
        <div className="container">
          <div className="section-header">
            <span className="section-pre-title">LEADERSHIP</span>
            <h2 className="page-title">THE MINDS BEHIND THE HUNT.</h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-img-container">
                  <img src={member.img} alt={member.name} />
                </div>
                <span className="team-role">{member.role}</span>
                <h3 className="team-name">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-wrapper {
          padding-top: 100px;
          background: #000;
        }

        .dna-section, .milestones, .leadership {
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
          max-width: 600px;
        }

        .dna-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .dna-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .stat-card {
          padding: 40px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
        }

        .stat-card h4 {
          font-size: 32px;
          color: #fff;
          margin-bottom: 10px;
        }

        .stat-card p {
          font-size: 9px;
          font-weight: 800;
          color: var(--text-grey);
          letter-spacing: 2px;
        }

        .timeline {
          margin-top: 60px;
        }

        .timeline-item {
          display: flex;
          gap: 50px;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-item::before {
          content: "";
          position: absolute;
          left: 100px;
          top: 0;
          bottom: -60px;
          width: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .timeline-item:last-child::before {
          display: none;
        }

        .t-year {
          font-size: 24px;
          font-weight: 900;
          color: #fff;
          min-width: 100px;
        }

        .t-content h3 {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 15px;
        }

        .t-content p {
          font-size: 14px;
          color: var(--text-grey-light);
          line-height: 1.6;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
        }

        .team-img-container {
          height: 450px;
          background: #111;
          margin-bottom: 25px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .team-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          transition: 0.8s;
        }

        .team-card:hover img {
          filter: grayscale(0);
          transform: scale(1.05);
        }

        .team-role {
          font-size: 9px;
          font-weight: 800;
          color: var(--text-grey);
          letter-spacing: 2px;
          display: block;
          margin-bottom: 10px;
        }

        .team-name {
          font-size: 16px;
          font-weight: 800;
          color: #fff;
        }

        @media (max-width: 1024px) {
          .dna-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          .timeline-item {
            flex-direction: column;
            gap: 15px;
            padding-left: 30px;
          }
          .timeline-item::before {
            left: 0;
          }
          .t-year {
            min-width: auto;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default WhoWeArePage;
