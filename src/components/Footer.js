import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 AWS Portfolio. All rights reserved.</p>
      <nav className="footer-nav">
        <span>Available for opportunities and consulting</span>
      </nav>
    </footer>
  );
};

export default Footer;
