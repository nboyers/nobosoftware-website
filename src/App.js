import React, { useState, useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HandleAuth from './pages/HandleAuth';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Waitlist from './components/HeroSection';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TOS from './pages/TOS';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('idToken');
    setIsAuthenticated(false);
  };

  return (
    <div className="App">

        <Navbar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<HandleAuth setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/tos" element={<TOS />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
