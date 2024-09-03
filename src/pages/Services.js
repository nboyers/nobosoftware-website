import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import minecraftImage from '../assets/minecraft-hosting.png'; 

const Services = () => {
  return (
    <div className="content-wrapper">
    <div className="bgimg">
      <div className="services-content">
        <h2>Join the Waitlist</h2>
        <div className="services-grid">
          <div className="service-box">
            <img src={minecraftImage} alt="Minecraft Hosting" />
            <h3>Minecraft Hosting</h3>
            <p>Reliable Minecraft hosting solutions for gamers. Be the first to know when we launch and get a discount code for joining!</p>
            <Link to="/waitlist">
              <button className="services-button">Join Waitlist</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
