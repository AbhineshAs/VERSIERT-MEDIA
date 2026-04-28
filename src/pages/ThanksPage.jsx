import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThanksPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#000' }}
    >
      <div style={{ textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: '48px', color: '#fff', marginBottom: '20px', fontWeight: '800', letterSpacing: '2px' }}>THANK YOU.</h1>
        <p style={{ color: 'var(--text-grey)', fontSize: '16px', marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
          Your message has been successfully sent. A member of our team will get back to you shortly.
        </p>
        <Link to="/" style={{ 
          background: '#fff', 
          color: '#000', 
          padding: '15px 30px', 
          fontSize: '10px', 
          fontWeight: '800', 
          letterSpacing: '2px', 
          textDecoration: 'none',
          display: 'inline-block',
          transition: '0.3s'
        }}
        onMouseOver={(e) => e.target.style.background = 'var(--text-grey-light)'}
        onMouseOut={(e) => e.target.style.background = '#fff'}
        >
          BACK TO WEBSITE
        </Link>
      </div>
    </motion.div>
  );
};

export default ThanksPage;
