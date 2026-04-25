import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WHO WE ARE', path: '/who-we-are' },
    { name: 'WHAT WE DO', path: '/what-we-do' },
    { name: 'OUR WORK', path: '/our-work' },
    { name: 'QUOTE BUILDER', path: '/quote-builder' },
    { name: 'ENQUIRY', path: '/enquiry' },
    { name: 'WORK WITH US', path: '/careers' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          VERSIERT
          <span>MEDIA</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/enquiry" className="mobile-talk-btn" onClick={() => setIsMenuOpen(false)}>
            LET'S TALK
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/enquiry">
            <button className="btn-talk">LET'S TALK</button>
          </Link>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 25px 0;
          transition: var(--transition);
          background: transparent;
        }

        .navbar.scrolled {
          padding: 15px 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 800;
          font-size: 24px;
          letter-spacing: 2px;
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo span {
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 400;
          color: var(--text-grey);
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-item {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--text-black);
          position: relative;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-orange);
          transition: var(--transition);
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .btn-talk {
          background: var(--bg-black);
          color: var(--text-white);
          padding: 10px 25px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 4px;
          transition: var(--transition);
        }

        .btn-talk:hover {
          background: var(--primary-orange);
          transform: translateY(-2px);
        }

        .mobile-talk-btn {
          display: none;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
        }

        .bar {
          width: 25px;
          height: 2px;
          background: var(--bg-black);
          transition: var(--transition);
        }

        @media (max-width: 1024px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: #fff;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 25px;
            transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1000;
          }

          .nav-links.active {
            right: 0;
          }

          .nav-item {
            font-size: 18px;
            font-weight: 800;
          }

          .mobile-talk-btn {
            display: block;
            background: var(--primary-orange);
            color: white;
            padding: 12px 30px;
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 2px;
            border-radius: 4px;
            margin-top: 15px;
          }

          .menu-toggle {
            display: flex;
            z-index: 1001;
            padding: 10px;
            position: relative;
          }

          .bar.open:nth-child(1) {
            transform: translateY(4px) rotate(45deg);
            background: #000;
          }

          .bar.open:nth-child(2) {
            transform: translateY(-4px) rotate(-45deg);
            background: #000;
          }

          .nav-actions {
            z-index: 1002;
          }
        }

        @media (max-width: 480px) {
          .btn-talk { display: none; }
          .logo { 
            font-size: 18px; 
            z-index: 1002;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
