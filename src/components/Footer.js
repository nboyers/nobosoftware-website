import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="footer">
      <p>&copy; 2024 AWS Portfolio. All rights reserved.</p>
      <nav className="footer-nav">
        <span>Available for opportunities and consulting</span>
      </nav>
=======
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Nobos Software LLC. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="/tos">Terms of Service</Link>
      </div>
>>>>>>> 6c0c08f0169dbd226aacc01502ba19fb78aae637
    </footer>
  );
};

export default Footer;
