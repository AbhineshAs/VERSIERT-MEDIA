import React from 'react';
import { motion } from 'framer-motion';

const Enquiry = () => {
  return (
    <section id="enquiry" className="enquiry">
      <div className="container">
        <div className="enquiry-grid">
          <div className="enquiry-info">
            <span className="section-pre-title">GET IN TOUCH</span>
            <h2 className="enquiry-title">ENQUIRY FORM</h2>
            
            <div className="contact-details">
              <div className="detail-item">
                <label>EMAIL</label>
                <p>hello@versiertmedia.com</p>
              </div>
              <div className="detail-item">
                <label>PHONE</label>
                <p>+1 (234) 567-8900</p>
              </div>
              <div className="detail-item">
                <label>ADDRESS</label>
                <p>123 Digital Street,<br />New York, NY 10001</p>
              </div>
            </div>
          </div>

          <div className="enquiry-form-wrapper">
            <form className="minimal-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="minimal-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="minimal-input" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Company Name" className="minimal-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" className="minimal-input textarea"></textarea>
              </div>
              <button type="submit" className="minimal-submit">SEND ENQUIRY →</button>
            </form>
          </div>
        </div>
      </div>

      <div className="section-number-container">
        <span className="section-number">.06</span>
      </div>

      <style jsx>{`
        .enquiry {
          padding: 150px 0;
          background: #000;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .enquiry-grid {
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

        .enquiry-title {
          font-size: 32px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 60px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .detail-item label {
          font-size: 8px;
          letter-spacing: 2px;
          color: var(--text-grey);
          display: block;
          margin-bottom: 10px;
        }

        .detail-item p {
          font-size: 14px;
          color: #fff;
          line-height: 1.6;
        }

        .minimal-form {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .minimal-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 20px;
          color: #fff;
          font-size: 13px;
          outline: none;
          transition: 0.3s;
        }

        .minimal-input:focus {
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
          .enquiry-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Enquiry;
