import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Portfolio brand navigation */}
      <Link to="/" className="navbar-brand">
        Professional Portfolio
      </Link>
      <ul className="navbar-menu">
        <li><Link to="/">About</Link></li>
        <li><Link to="/services">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


