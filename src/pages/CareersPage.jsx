import React from 'react';
import Careers from '../components/Careers';
import { motion } from 'framer-motion';

const CareersPage = () => {
  const jobs = [
    { title: 'Senior Brand Strategist', type: 'Full-time', location: 'Dubai / Remote' },
    { title: 'Motion Designer', type: 'Full-time', location: 'London / Remote' },
    { title: 'Content Creator (Video)', type: 'Contract', location: 'New York' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '100px' }}
    >
      <Careers />

      <section className="culture section-white">
        <div className="container">
          <div className="culture-grid">
            <div className="culture-visual">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Team Culture" />
            </div>
            <div className="culture-content">
              <span className="detail-label text-orange">CULTURE —</span>
              <h2>Life at the hunt.</h2>
              <p>We work in a high-intensity, high-reward environment. We value raw instinct, creative courage, and the drive to deliver cinematic excellence in every project.</p>
              <div className="perks-list">
                <div>✓ Flexible "Work from Anywhere"</div>
                <div>✓ Monthly Creative Workshops</div>
                <div>✓ Top-tier Gear Stipend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="openings section-black">
        <div className="container">
          <div className="section-header">
            <span className="detail-label text-orange">JOIN US —</span>
            <h2>Current Openings.</h2>
          </div>
          <div className="jobs-list">
            {jobs.map((job, i) => (
              <div key={i} className="job-item">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <span>{job.location} • {job.type}</span>
                </div>
                <button className="btn-outline">APPLY NOW</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .culture { padding: 120px 0; }
        .culture-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .culture-visual { height: 500px; background: #f5f5f5; border-radius: 20px; overflow: hidden; }
        .culture-visual img { width: 100%; height: 100%; object-fit: cover; }
        .culture-content h2 { font-size: 48px; margin-bottom: 30px; }
        .culture-content p { color: #666; font-size: 18px; line-height: 1.8; margin-bottom: 40px; }
        .perks-list { display: flex; flex-direction: column; gap: 15px; }
        .perks-list div { font-weight: 700; color: #333; }

        .openings { padding: 120px 0; }
        .jobs-list { margin-top: 60px; }
        .job-item { padding: 40px 0; border-bottom: 1px solid #222; display: flex; justify-content: space-between; align-items: center; }
        .job-item:last-child { border-bottom: none; }
        .job-info h3 { font-size: 24px; color: white; margin-bottom: 10px; }
        .job-info span { color: #666; font-size: 14px; font-weight: 700; letter-spacing: 1px; }

        @media (max-width: 768px) {
          .culture-grid { grid-template-columns: 1fr; }
          .job-item { flex-direction: column; align-items: flex-start; gap: 30px; }
        }
      `}</style>
    </motion.div>
  );
};

export default CareersPage;
