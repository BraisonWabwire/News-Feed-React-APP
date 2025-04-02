import React, { useState } from 'react';
import '../App.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="creative-header">
      <div className="header-container">
        <div className="creative-logo">
          <svg className="logo-svg" viewBox="0 0 100 100" width="50" height="50">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#fff" strokeWidth="4" />
            <path d="M 30 70 Q 50 30 70 70" fill="none" stroke="#fff" strokeWidth="4" />
          </svg>
          <span className="logo-text">Nexlify</span>
        </div>
        <button className="creative-mobile-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span className={`creative-hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        <nav className={`creative-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="creative-nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#works" className="nav-link">Works</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;