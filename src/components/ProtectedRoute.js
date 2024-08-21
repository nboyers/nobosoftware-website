import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // If the user is not authenticated, redirect them to the sign-in page
    return <Navigate to="/auth" />;
  }

  // If authenticated, render the protected content
  return children;
};

export default ProtectedRoute;
