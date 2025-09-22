import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
<<<<<<< HEAD
=======
import Billing from './pages/Store/BillingPage';
import Storefront from './pages/Store/Storefront';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TOS from './pages/TermsOfService';
import ValtoTransparencyPage from './pages/ValtoTransparency'; 

>>>>>>> 6c0c08f0169dbd226aacc01502ba19fb78aae637

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
=======
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
>>>>>>> 6c0c08f0169dbd226aacc01502ba19fb78aae637
      </Routes>
      <Footer />
    </div>
  );
};

export default App;