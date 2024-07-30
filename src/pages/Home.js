import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Nobos Software LLC</h1>
        <p>Specializing in the development of iOS and Android applications, with robust cloud hosting solutions.</p>
        <Link to="/services">
          <button className="services-button">VIEW SERVICES</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
