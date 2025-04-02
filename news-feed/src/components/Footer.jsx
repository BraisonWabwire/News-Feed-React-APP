import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="pro-news-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Nexlify News</h3>
          <p className="footer-tagline">Your Source for Trusted News</p>
        </div>
        <div className="footer-links">
          <h4 className="links-title">Quick Links</h4>
          <ul className="footer-nav">
            <li><a href="#top-stories" className="footer-link">Top Stories</a></li>
            <li><a href="#categories" className="footer-link">Categories</a></li>
            <li><a href="#about" className="footer-link">About Us</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4 className="contact-title">Get in Touch</h4>
          <p>Email: news@nexlify.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nexlify News. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;