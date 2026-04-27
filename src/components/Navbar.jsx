import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Projects', href: '/our-work' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/enquiry' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">VERSIERT<br /><span>MEDIA</span></Link>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className={`mobile-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 30px 0;
          transition: 0.3s;
          background: transparent;
        }

        .navbar.scrolled {
          padding: 20px 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 2px;
          line-height: 1;
          color: #fff;
          text-decoration: none;
          display: block;
        }

        .logo span {
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 400;
          color: #888;
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-item {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ccc;
          text-decoration: none;
          transition: 0.3s;
        }

        .nav-item:hover {
          color: #fff;
        }

        .mobile-toggle {
          display: none;
          cursor: pointer;
          flex-direction: column;
          gap: 6px;
        }

        .bar {
          width: 20px;
          height: 2px;
          background: #fff;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: #000;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: 0.5s;
          }

          .nav-links.active {
            right: 0;
          }

          .mobile-toggle {
            display: flex;
            z-index: 1001;
            padding: 10px;
            position: relative;
            flex-direction: column;
            gap: 7px;
          }

          .bar {
            width: 30px;
            height: 3px;
            background: #000 !important;
            transition: var(--transition);
            border-radius: 10px;
          }

          .bar.open:nth-child(1) {
            transform: translateY(5px) rotate(45deg);
          }

          .bar.open:nth-child(2) {
            transform: translateY(-5px) rotate(-45deg);
          }

          .nav-actions {
            z-index: 1002;
            display: flex;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .logo { 
            font-size: 18px; 
            z-index: 1002;
          }
          .btn-talk {
            padding: 8px 15px;
            font-size: 10px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
