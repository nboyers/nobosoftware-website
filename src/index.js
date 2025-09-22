import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { initGA } from './gtag';

// Initialize Google Analytics
initGA();

const container = document.getElementById('root');
if (!container) {
  console.error('Root element not found. Make sure there is a div with id="root" in your HTML.');
} else {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to render React application:', error);
  }
}