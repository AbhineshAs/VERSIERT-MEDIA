import React from 'react';
import { motion } from 'framer-motion';
import wolvesSketch from '../assets/wolves_sketch.png';

const Careers = () => {
  return (
    <section id="work-with-us" className="careers section-white">
      <div className="container">
        <div className="careers-grid">
          <div className="careers-form-container">
            <span className="section-label text-orange">WORK WITH US —</span>
            <h2>Join a team that<br />builds powerful brands.</h2>
            
            <form className="career-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <select>
                  <option disabled selected>Role Applying For</option>
                  <option>Graphic Designer</option>
                  <option>Content Writer</option>
                  <option>Performance Marketer</option>
                </select>
              </div>
              <div className="form-row">
                <input type="url" placeholder="Portfolio Link" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="file-upload">
                <label>Upload Resume</label>
                <input type="file" />
                <span className="file-hint">Choose File - No file chosen</span>
              </div>
              <button type="submit" className="btn-primary">APPLY NOW</button>
            </form>
          </div>

          <div className="careers-visual">
            <motion.img 
              src={wolvesSketch} 
              alt="Wolves Sketch"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .careers {
          padding: 120px 0;
          background-color: #fff;
        }

        .careers-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .careers-visual img {
          width: 100%;
          max-width: 500px;
        }

        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: block;
        }

        h2 {
          font-size: 42px;
          margin-bottom: 40px;
        }

        .career-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        input, select {
          background: #f8f8f8;
          border: 1px solid #eee;
          padding: 15px 20px;
          color: black;
          font-family: inherit;
          font-size: 14px;
          border-radius: 4px;
          transition: var(--transition);
        }

        input:focus, select:focus {
          border-color: var(--primary-orange);
          outline: none;
        }

        .file-upload {
          background: #f8f8f8;
          border: 1px dashed #ccc;
          padding: 20px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .file-upload label {
          font-size: 12px;
          font-weight: 700;
          color: #888;
        }

        .file-upload input {
          display: none;
        }

        .file-hint {
          font-size: 12px;
          color: #999;
        }

        .btn-primary {
          align-self: flex-start;
          margin-top: 10px;
        }

        @media (max-width: 1024px) {
          .careers-grid {
            grid-template-columns: 1fr;
          }
          .careers-visual {
            display: flex;
            justify-content: center;
            order: 1;
          }
          .careers-form-container {
            order: 2;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Careers;
