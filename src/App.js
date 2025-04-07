import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HandleAuth from './pages/HandleAuth';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import Billing from './pages/Store/BillingPage';
import Storefront from './pages/Store/Storefront';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TOS from './pages/TermsOfService';
import ValtoTransparencyPage from './pages/ValtoTransparency'; 


import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check sessionStorage for accessToken on initial page load
    const accessToken = sessionStorage.getItem('accessToken');
    
    // If accessToken exists, set isAuthenticated to true
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleSignOut = () => {
    // Clear session storage and log the user out
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('idToken');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<HandleAuth setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/tos" element={<TOS />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/valto" element={<ValtoTransparencyPage />} />
        {/* Protected Routes */}
        <Route
          path="/billing"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Billing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/store"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Storefront />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;