import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-brand">Nobos Software LLC</div>
          <ul className="navbar-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Nobos Software LLC</h1>
          <p>Publishing iOS and Android apps with Cloud hosting for Minecraft</p>
          <button className="services-button">VIEW SERVICES</button>
        </div>
      </div>
      <footer className="App-footer">
        {/* Add any footer content here if needed */}
      </footer>
    </div>
  );
}

export default App;
