import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Nobos Software LLC. All rights reserved.</p>
      <Link to="/tos">Terms of Service</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
