import React, { useEffect } from 'react';
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

  // Clean-up unnecessary logging for production
  useEffect(() => {
    // Optionally, log authentication state changes for debugging in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log('Navbar re-rendered, isAuthenticated:', isAuthenticated);
    }
  }, [isAuthenticated]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Nobos Software</div>
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
