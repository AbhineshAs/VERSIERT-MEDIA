import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  return (
    <section id="work-with-us" className="careers">
      <div className="container">
        <div className="careers-grid">
          <div className="careers-info">
            <span className="section-pre-title">WORK WITH US</span>
            <h2 className="careers-title">Join a team that builds powerful brands.</h2>
          </div>

          <div className="careers-form-wrapper">
            <form action="https://formsubmit.co/hello@versiert.in" method="POST" encType="multipart/form-data" className="minimal-form">
              <input type="hidden" name="_next" value={window.location.origin + "/thanks"} />
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" className="minimal-input" required />
                <select name="role" className="minimal-input select" required>
                  <option value="" disabled selected>Role Applying For</option>
                  <option>Creative Designer</option>
                  <option>Content Writer</option>
                  <option>Manager</option>
                  <option>Anchor</option>
                  <option>Cameraman</option>
                  <option>Digital Marketer</option>
                  <option>Content Analyst</option>
                  <option>Business Development Executive</option>
                  <option>Scriptwriter</option>
                  <option>Video editor</option>
                  <option>Graphics designer</option>
                </select>
              </div>
              <div className="form-row">
                <input type="url" name="portfolio" placeholder="Portfolio Link" className="minimal-input" />
                <input type="email" name="email" placeholder="Email Address" className="minimal-input" required />
              </div>
              <div className="form-group">
                <label className="file-label">Upload Resume (PDF/DOC)</label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" className="minimal-input file-input" required />
              </div>
              <button type="submit" className="minimal-submit">APPLY NOW</button>
            </form>
          </div>
        </div>
      </div>

      <div className="section-number-container">
        <span className="section-number">.07</span>
      </div>

      <style jsx>{`
        .careers {
          padding: 80px 0;
          background-color: var(--bg-black);
          position: relative;
        }

        .careers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .section-pre-title {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--text-grey);
          display: block;
          margin-bottom: 20px;
        }

        .careers-title {
          font-size: 32px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 30px;
        }

        .careers-text {
          font-size: 14px;
          color: var(--text-grey-light);
          line-height: 1.6;
          max-width: 300px;
        }

        .minimal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .file-label {
          font-size: 9px;
          color: var(--text-grey);
          letter-spacing: 1px;
          display: block;
          margin-bottom: 10px;
        }

        .minimal-input, .minimal-select {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 20px;
          color: #fff;
          font-size: 13px;
          outline: none;
          transition: 0.3s;
        }

        .select option {
          color: #000;
        }

        .minimal-input:focus, .minimal-select:focus {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .textarea {
          height: 150px;
          resize: none;
        }

        .minimal-submit {
          background: #fff;
          color: #000;
          border: none;
          padding: 15px 30px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          width: fit-content;
          cursor: pointer;
          transition: 0.3s;
        }

        .minimal-submit:hover {
          background: var(--text-grey-light);
        }

        .section-number-container {
          position: absolute;
          left: 20px;
          bottom: 20px;
        }

        .section-number {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-grey);
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .careers-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .careers {
            padding: 60px 0;
          }
          .section-number-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Careers;
