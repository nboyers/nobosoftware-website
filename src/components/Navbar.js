import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Function to securely redirect the user to Cognito's Hosted UI
const redirectToCognitoHostedUI = () => {
  const clientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
  const redirectUri = encodeURIComponent(process.env.REACT_APP_COGNITO_REDIRECT_URI);
  const cognitoDomain = process.env.REACT_APP_COGNITO_DOMAIN;

  if (!clientId || !redirectUri || !cognitoDomain) {
    console.error('Missing environment variables for Cognito Hosted UI redirect.');
    return;
  }

  window.location.href = `${cognitoDomain}/login?client_id=${clientId}&response_type=code&scope=openid&redirect_uri=${redirectUri}`;
};

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
        ) : (
          <li className="navbar-login">
            <button onClick={redirectToCognitoHostedUI} className="login-link">Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
