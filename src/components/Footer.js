import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Nobos Software LLC. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="/tos">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
