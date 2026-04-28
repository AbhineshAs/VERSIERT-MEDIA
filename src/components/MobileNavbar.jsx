import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Building2, Landmark, Info, Briefcase, Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bottomNavItems = [
    { name: 'Home', path: '/', icon: <Home size={22} strokeWidth={2} /> },
    { name: 'Dubai', path: '/who-we-are#dubai', icon: <Building2 size={22} strokeWidth={2} /> },
    { name: 'India', path: '/who-we-are#india', icon: <Landmark size={22} strokeWidth={2} /> },
    { name: 'About', path: '/who-we-are', icon: <Info size={22} strokeWidth={2} /> },
    { name: 'Services', path: '/what-we-do', icon: <Briefcase size={22} strokeWidth={2} /> },
  ];

  const allPages = [
    { name: 'HOME', path: '/' },
    { name: 'WHO WE ARE', path: '/who-we-are' },
    { name: 'WHAT WE DO', path: '/what-we-do' },
    { name: 'PROJECTS', path: '/our-work' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT', path: '/enquiry' },
  ];

  return (
    <>
      <nav className="mobile-bottom-nav">
        <div className="mobile-nav-container">
          {bottomNavItems.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path} 
              className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
            >
              <div className="mobile-icon-wrapper">
                {item.icon}
              </div>
              <span className="mobile-label">{item.name}</span>
            </NavLink>
          ))}
          
          <button 
            className={`mobile-nav-item ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="mobile-icon-wrapper menu-icon">
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
            </div>
            <span className="mobile-label">Menu</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="menu-overlay"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="menu-header">
              <span className="menu-title">EXPLORE</span>
              <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
                <X size={30} />
              </button>
            </div>
            <div className="menu-links">
              {allPages.map((page, i) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={page.path} 
                    className="menu-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {page.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="menu-footer">
              <Link to="/enquiry" className="menu-cta" onClick={() => setIsMenuOpen(false)}>
                LET'S TALK
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #0a0a0a;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 9999;
          padding-bottom: env(safe-area-inset-bottom);
        }

        .mobile-nav-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 65px;
          padding: 0 5px;
        }

        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #888888;
          transition: all 0.3s ease;
          flex: 1;
          gap: 4px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .mobile-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menu-icon {
          flex-direction: column;
          gap: 5px;
        }

        .menu-bar {
          width: 30px;
          height: 3px;
          background: currentColor;
          border-radius: 4px;
        }

        .mobile-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .mobile-nav-item.active {
          color: #007bff;
        }

        /* Menu Overlay */
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #000;
          z-index: 10000;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
        }

        .menu-title {
          font-size: 12px;
          letter-spacing: 4px;
          color: #555;
          font-weight: 700;
        }

        .close-btn {
          color: #fff;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu-links {
          display: flex;
          flex-direction: column;
          gap: 30px;
          flex-grow: 1;
        }

        .menu-link {
          font-size: 32px;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          letter-spacing: -1px;
        }

        .menu-footer {
          margin-top: 40px;
          padding-bottom: env(safe-area-inset-bottom);
        }

        .menu-cta {
          display: block;
          width: 100%;
          background: #FF4D00;
          color: #fff;
          text-align: center;
          padding: 18px;
          font-weight: 900;
          letter-spacing: 2px;
          border-radius: 4px;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .mobile-bottom-nav {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default MobileNavbar;
