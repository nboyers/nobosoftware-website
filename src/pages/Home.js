import React from 'react';
import './Home.css'; // Make sure this CSS file is linked

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home-overlay">
        <div className="home-content">
          <h1 className="home-title">Welcome to Nobos Software</h1>
          <p className="home-subtitle">Innovative solutions for mobile and cloud development.</p>
          <p className="home-description">
            Delivering high-quality iOS, Android applications, and scalable cloud hosting services.
          </p>
          <a href="/services" className="home-button">Explore Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
