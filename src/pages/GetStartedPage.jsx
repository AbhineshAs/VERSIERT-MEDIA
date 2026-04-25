import React from 'react';
import { motion } from 'framer-motion';

const GetStartedPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px' }}
    >
      <section className="section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.1', marginBottom: '40px' }}>
              Let's build <br /><span className="text-orange">something</span> great <br /><span style={{ fontStyle: 'italic' }}>together</span>.
            </h1>
            <p style={{ color: 'var(--text-grey)', fontSize: '18px', marginBottom: '40px' }}>
              Ready to take your business to the next level? Tell us a bit about your project and we'll get back to you within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div style={{ color: 'var(--primary-orange)', fontWeight: '700' }}>Email Us</div>
                <div style={{ fontSize: '20px' }}>hello@orangespace.agency</div>
              </div>
              <div>
                <div style={{ color: 'var(--primary-orange)', fontWeight: '700' }}>Call Us</div>
                <div style={{ fontSize: '20px' }}>+1 (555) 123-4567</div>
              </div>
            </div>
          </div>
          <div>
            <form className="glass" style={{ padding: '40px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input type="text" placeholder="First Name" style={inputStyle} />
                <input type="text" placeholder="Last Name" style={inputStyle} />
              </div>
              <input type="email" placeholder="Email Address" style={inputStyle} />
              <select style={inputStyle}>
                <option value="">Interested in...</option>
                <option value="strategy">Marketing Strategy</option>
                <option value="seo">SEO & Content</option>
                <option value="ads">Paid Advertising</option>
                <option value="web">Web Design & Dev</option>
              </select>
              <select style={inputStyle}>
                <option value="">Monthly Budget</option>
                <option value="low">$1k - $5k</option>
                <option value="mid">$5k - $20k</option>
                <option value="high">$20k+</option>
              </select>
              <textarea placeholder="Tell us about your project" rows="4" style={inputStyle}></textarea>
              <button className="bg-orange" style={{ padding: '16px', borderRadius: '8px', color: 'white', fontWeight: '700', marginTop: '10px' }}>
                SEND INQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  padding: '15px 20px',
  borderRadius: '8px',
  color: 'white',
  fontFamily: 'inherit'
};

export default GetStartedPage;
