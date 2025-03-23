import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({ isAuthenticated, onSignOut }) => {
  return (
    <nav className="navbar">
      {/* Wrap the brand name in a Link that navigates back to the home page */}
      <Link to="/" className="navbar-brand">
        Nobos Software
      </Link>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {isAuthenticated ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li className="navbar-login">
              <button onClick={onSignOut} className="login-link">Sign Out</button>
            </li>
          </>
        ) : null /* Remove the "Log in" button */}
      </ul>
    </nav>
  );
};

export default Navbar;


