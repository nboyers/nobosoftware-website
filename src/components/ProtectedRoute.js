import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated = false, children }) => {
  // Validate isAuthenticated prop
  if (typeof isAuthenticated !== 'boolean') {
    console.warn('ProtectedRoute: isAuthenticated prop should be a boolean');
    return <Navigate to="/services" />;
  }
  
  if (!isAuthenticated) {
    // If the user is not authenticated, redirect them to the services page
    return <Navigate to="/services" />;
  }

  // If authenticated, render the protected content
  return children;
};

export default ProtectedRoute;
