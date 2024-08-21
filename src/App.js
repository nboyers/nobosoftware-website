import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HandleAuth from './pages/HandleAuth';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Waitlist from './components/HeroSection';
import Footer from './components/Footer'; // Import the Footer component
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import TOS from './pages/TOS';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    console.log('Access Token:', accessToken); // Debugging the token
    if (accessToken) {
      setIsAuthenticated(true);
      console.log('User is authenticated'); // Debugging the auth state
    }
  }, []);
  

  const handleSignOut = () => {
    // Clear session storage and log the user out
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
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default App;


