import React from 'react';
import WhoWeAre from '../components/WhoWeAre';
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
      style={{ paddingTop: '100px' }}
    >
      <WhoWeAre />

      <section className="dna-section section-white">
        <div className="container">
          <div className="dna-grid">
            <div className="dna-content">
              <span className="detail-label text-orange">BRAND DNA —</span>
              <h2>Built on instinct.</h2>
              <p>We don't just follow trends; we set them. Our DNA is a mix of predatory precision and artistic elegance. We believe that in the digital jungle, the most creative brands are the ones that survive and dominate.</p>
            </div>
            <div className="dna-stats">
              <div className="stat-card">
                <h4>99.9%</h4>
                <p>UPTIME DOMINANCE</p>
              </div>
              <div className="stat-card">
                <h4>12+</h4>
                <p>GLOBAL MARKETS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="milestones section-white">
        <div className="container">
          <div className="section-header">
            <span className="detail-label text-orange">JOURNEY —</span>
            <h2>Our Milestones.</h2>
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

      <section className="leadership section-black">
        <div className="container">
          <div className="section-header">
            <span className="detail-label text-orange">LEADERSHIP —</span>
            <h2>THE MINDS BEHIND THE HUNT.</h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-img-container">
                  <img src={member.img} alt={member.name} />
                </div>
                <span className="team-role">{member.role}</span>
                <h3>{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .dna-section { padding: 120px 0; }
        .dna-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .dna-content h2 { font-size: 48px; margin-bottom: 30px; }
        .dna-content p { color: #666; font-size: 18px; line-height: 1.8; }
        .dna-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .stat-card { padding: 40px; background: #f9f9f9; text-align: center; }
        .stat-card h4 { font-size: 32px; color: var(--primary-orange); margin-bottom: 10px; }
        .stat-card p { font-size: 11px; font-weight: 800; color: #aaa; letter-spacing: 2px; }

        .milestones { padding: 120px 0; border-top: 1px solid #f0f0f0; }
        .timeline { margin-top: 60px; }
        .timeline-item { display: flex; gap: 50px; margin-bottom: 50px; position: relative; }
        .timeline-item::before { content: ""; position: absolute; left: 100px; top: 0; bottom: -50px; width: 1px; background: #eee; }
        .timeline-item:last-child::before { display: none; }
        .t-year { font-size: 24px; font-weight: 900; color: var(--primary-orange); min-width: 100px; }
        .t-content h3 { font-size: 20px; margin-bottom: 10px; }
        .t-content p { color: #666; font-size: 16px; }

        .leadership { padding: 120px 0; }
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 60px; }
        .team-card { text-align: center; }
        .team-img-container { height: 400px; background: #111; margin-bottom: 25px; transition: 0.5s; overflow: hidden; }
        .team-img-container img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1); transition: 0.8s; }
        .team-card:hover .team-img-container img { filter: grayscale(0); transform: scale(1.1); }
        .team-card:hover .team-img-container { border-color: var(--primary-orange); }
        .team-role { font-size: 10px; font-weight: 800; color: var(--primary-orange); letter-spacing: 2px; display: block; margin-bottom: 10px; }
        .team-card h3 { font-size: 20px; color: white; }

        @media (max-width: 992px) {
          .dna-grid { grid-template-columns: 1fr; gap: 40px; }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr; }
          .timeline-item { flex-direction: column; gap: 15px; padding-left: 30px; }
          .timeline-item::before { left: 0; }
          .t-year { min-width: auto; font-size: 20px; }
        }
      `}</style>
    </motion.div>
  );
};

export default WhoWeArePage;
