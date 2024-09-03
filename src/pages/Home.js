import React from 'react';
import './Home.css'; // Make sure this CSS file is linked

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home-overlay">
        <div className="home-content">
          <h1 className="home-title">Welcome to Nobos Minecraft Hosting</h1>
          <p className="home-subtitle">Reliable and scalable Minecraft server solutions.</p>
          <p className="home-description">
            Host your Minecraft server with us and enjoy seamless gameplay with zero downtime. Customizable plans to fit every need and budget.
          </p>
          <a href="/waitlist" className="home-button">View Our Plans</a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
