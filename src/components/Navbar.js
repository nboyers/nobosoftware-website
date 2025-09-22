import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

<<<<<<< HEAD
const Navbar = () => {
=======

const Navbar = ({ isAuthenticated, onSignOut }) => {
>>>>>>> 6c0c08f0169dbd226aacc01502ba19fb78aae637
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

<<<<<<< HEAD

=======
        {isAuthenticated ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li className="navbar-login">
              <button onClick={onSignOut} className="login-link">Sign Out</button>
            </li>
          </>
        ) : null /* Remove the "Log in" button */}
>>>>>>> 6c0c08f0169dbd226aacc01502ba19fb78aae637
      </ul>
    </nav>
  );
};

export default Navbar;


