import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  return (
    <section id="work-with-us" className="careers">
      <div className="container">
        <div className="careers-grid">
          <div className="careers-info">
            <span className="section-pre-title">JOIN OUR TEAM</span>
            <h2 className="careers-title">WORK WITH US</h2>
            <p className="careers-text">
              We are always looking for passionate people to join our team.
            </p>
          </div>

          <div className="careers-form-wrapper">
            <form className="minimal-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="minimal-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="minimal-input" />
              </div>
              <div className="form-group">
                <select className="minimal-select">
                  <option disabled selected>Position Applying For</option>
                  <option>Graphic Designer</option>
                  <option>Content Writer</option>
                  <option>Performance Marketer</option>
                </select>
              </div>
              <div className="form-group">
                <input type="url" placeholder="Portfolio / LinkedIn / Website" className="minimal-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" className="minimal-input textarea"></textarea>
              </div>
              <button type="submit" className="minimal-submit">APPLY NOW →</button>
            </form>
          </div>
        </div>
      </div>

      <div className="section-number-container">
        <span className="section-number">.07</span>
      </div>

      <style jsx>{`
        .careers {
          padding: 150px 0;
          background: #000;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .careers-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 100px;
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
          gap: 30px;
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

        .minimal-select option {
          background: #000;
          color: #fff;
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
          left: 5%;
          bottom: 5%;
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
      `}</style>
    </section>
  );
};

export default Careers;
