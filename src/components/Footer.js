import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Nobos Software LLC. All rights reserved.</p>
      <nav className="footer-nav">
        <Link to="/tos" className="footer-link">Terms of Service</Link> 
        <span>|</span>
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
      </nav>
    </footer>
  );
};

export default Footer;
