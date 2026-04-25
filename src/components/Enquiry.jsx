import React from 'react';
import { motion } from 'framer-motion';
import deerSketch from '../assets/deer_sketch.png';

const Enquiry = () => {
  return (
    <section id="enquiry" className="enquiry section-black">
      <div className="container">
        <div className="enquiry-grid">
          <div className="enquiry-visual">
            <motion.img 
              src={deerSketch} 
              alt="Deer Sketch"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>

          <div className="enquiry-form-container">
            <span className="section-label text-orange">ENQUIRY —</span>
            <h2>Let's build something<br />powerful together.</h2>
            
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Brand - Company" />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone Number" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="form-row">
                <select>
                  <option disabled selected>Service Needed</option>
                  <option>Branding</option>
                  <option>Content Strategy</option>
                  <option>Digital Marketing</option>
                </select>
                <select>
                  <option disabled selected>Budget Range</option>
                  <option>₹ 50k - 1L</option>
                  <option>₹ 1L - 5L</option>
                  <option>₹ 5L+</option>
                </select>
              </div>
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="btn-primary">LET'S TALK</button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .enquiry {
          padding: 120px 0;
          background-color: #050505;
        }

        .enquiry-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 80px;
          align-items: center;
        }

        .enquiry-visual img {
          width: 100%;
          max-width: 500px;
          filter: brightness(0.8) contrast(1.1);
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

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        input, select, textarea {
          background: #111;
          border: 1px solid #222;
          padding: 15px 20px;
          color: white;
          font-family: inherit;
          font-size: 14px;
          border-radius: 4px;
          transition: var(--transition);
        }

        input:focus, select:focus, textarea:focus {
          border-color: var(--primary-orange);
          outline: none;
        }

        textarea {
          height: 120px;
          resize: none;
        }

        .btn-primary {
          align-self: flex-start;
          margin-top: 10px;
        }

        @media (max-width: 1024px) {
          .enquiry-grid {
            grid-template-columns: 1fr;
          }
          .enquiry-visual {
            display: flex;
            justify-content: center;
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

export default Enquiry;
