import React from 'react';
import { motion } from 'framer-motion';

const Enquiry = () => {
  return (
    <section id="enquiry" className="enquiry">
      <div className="container">
        <div className="enquiry-grid">
          <div className="enquiry-info">
            <span className="section-pre-title">ENQUIRY</span>
            <h2 className="enquiry-title">Let's build something powerful together.</h2>

            <div className="contact-details">
              <div className="detail-item">
                <label>EMAIL</label>
                <p>hello@versiert.in</p>
              </div>
              <div className="detail-item">
                <label>PHONE</label>
                <p>+91 88219 55799</p>
              </div>
            </div>
          </div>

          <div className="enquiry-form-wrapper">
            <form action="https://formsubmit.co/hello@versiert.in" method="POST" className="minimal-form">
              <input type="hidden" name="_next" value={window.location.origin + "/thanks"} />
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" className="minimal-input" required />
                <input type="text" name="company" placeholder="Brand / Company" className="minimal-input" />
              </div>
              <div className="form-row">
                <input type="tel" name="phone" placeholder="Phone Number" className="minimal-input" required />
                <input type="email" name="email" placeholder="Email Address" className="minimal-input" required />
              </div>
              <div className="form-row">
                <select name="service" className="minimal-input select" required>
                  <option value="" disabled selected>Service Needed</option>
                  <option>Video Production</option>
                  <option>Influencer Marketing</option>
                  <option>Brand Strategy</option>
                  <option>Performance Marketing</option>
                  <option>PR & Media Relations</option>
                  <option>Web Development</option>
                  <option>Anchor</option>
                  <option>Cameraman</option>
                  <option>Digital Marketer</option>
                  <option>Content Analyst</option>
                  <option>Business Development Executive</option>
                  <option>Scriptwriter</option>
                  <option>Video editor</option>
                  <option>Graphics designer</option>
                </select>
                <select name="budget" className="minimal-input select" required>
                  <option value="" disabled selected>Budget Range</option>
                  <option>₹ 5k - 15k</option>
                  <option>₹ 15k - 30k</option>
                  <option>₹ 30k - 50k</option>
                  <option>₹ 50k+</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" className="minimal-input textarea" required></textarea>
              </div>
              <button type="submit" className="minimal-submit" style={{ display: 'inline-block', textAlign: 'center' }}>
                LET'S TALK
              </button>
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
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
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

        .select option {
          color: #000;
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
