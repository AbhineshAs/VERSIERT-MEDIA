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
      className="page-wrapper"
    >
      <Careers />

      <section className="culture">
        <div className="container">
          <div className="culture-grid">
            <div className="culture-visual">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Team Culture" />
            </div>
            <div className="culture-content">
              <span className="section-pre-title">CULTURE</span>
              <h2 className="page-title">LIFE AT THE HUNT.</h2>
              <p className="page-text">We work in a high-intensity, high-reward environment. We value raw instinct, creative courage, and the drive to deliver cinematic excellence in every project.</p>
              <div className="perks-list">
                <div>✓ Flexible "Work from Anywhere"</div>
                <div>✓ Monthly Creative Workshops</div>
                <div>✓ Top-tier Gear Stipend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="openings">
        <div className="container">
          <div className="section-header">
            <span className="section-pre-title">JOIN US</span>
            <h2 className="page-title">CURRENT OPENINGS.</h2>
          </div>
          <div className="jobs-list">
            {jobs.map((job, i) => (
              <div key={i} className="job-item">
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-meta">{job.location} • {job.type}</span>
                </div>
                <button className="minimal-btn">APPLY NOW →</button>
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

        .culture, .openings {
          padding: 80px 0;
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
          margin-bottom: 40px;
        }

        .culture-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .culture-visual {
          height: 500px;
          background: #111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .culture-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
        }

        .perks-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .perks-list div {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
        }

        .jobs-list {
          margin-top: 60px;
        }

        .job-item {
          padding: 40px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .job-item:last-child {
          border-bottom: none;
        }

        .job-title {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }

        .job-meta {
          color: var(--text-grey);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .minimal-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 12px 25px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          cursor: pointer;
          transition: 0.3s;
        }

        .minimal-btn:hover {
          background: #fff;
          color: #000;
        }

        @media (max-width: 1024px) {
          .culture-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .culture, .openings {
            padding: 60px 0;
          }
          .job-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CareersPage;
