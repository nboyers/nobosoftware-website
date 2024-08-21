import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Function to securely redirect the user to Cognito's Hosted UI
const redirectToCognitoHostedUI = () => {
  const clientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
  const redirectUri = encodeURIComponent(process.env.REACT_APP_COGNITO_REDIRECT_URI);
  const cognitoDomain = process.env.REACT_APP_COGNITO_DOMAIN;
 // Check which specific environment variable is missing
 if (!clientId) {
  console.error('Missing environment variable: REACT_APP_COGNITO_CLIENT_ID');
}
if (!redirectUri) {
  console.error('Missing environment variable: REACT_APP_COGNITO_REDIRECT_URI');
}
if (!cognitoDomain) {
  console.error('Missing environment variable: REACT_APP_COGNITO_DOMAIN');
}

// If any of the variables are missing, exit the function
if (!clientId || !redirectUri || !cognitoDomain) {
  console.error('Missing one or more environment variables required for Cognito Hosted UI redirect.');
  return;
}

  window.location.href = `${cognitoDomain}/login?client_id=${clientId}&response_type=code&scope=openid&redirect_uri=${redirectUri}`;
};

const Navbar = ({ isAuthenticated, onSignOut }) => {
  useEffect(() => {
    console.log('Navbar re-rendered, isAuthenticated:', isAuthenticated);
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
