import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
//FIXME: Add the About link to the Navbar component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Nobos Software LLC</div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
