import React from 'react';
import './Services.css';
import iosImage from '../assets/ios-app.png'; // Add appropriate images to the assets folder
import androidImage from '../assets/android-app.png';
import cloudImage from '../assets/cloud-hosting.png';
import customSoftwareImage from '../assets/custom-software.png';
import brewiesImage from '../assets/brewies.png';
import comingSoonImage from '../assets/coming-soon.png';

const Services = () => {
  return (
    <div className="bgimg">
      <div className="services-content">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-box">
            <img src={iosImage} alt="iOS App Development" />
            <h3>iOS Application Development</h3>
            <p>Expertise in creating high-quality iOS apps.</p>
          </div>
          <div className="service-box">
            <img src={androidImage} alt="Android App Development" />
            <h3>Android Application Development</h3>
            <p>Building robust Android applications.</p>
          </div>
          <div className="service-box">
            <img src={cloudImage} alt="Cloud Hosting Solutions" />
            <h3>Cloud Hosting Solutions</h3>
            <p>Reliable and scalable cloud hosting solutions.</p>
          </div>
        </div>
        <div className="apps-coming-soon-grid">
          <div className="apps-box">
            <h2>Apps We Have Created</h2>
            <div className="services-grid">
              <div className="service-box">
                <img src={brewiesImage} alt="Brewies App" />
                <h3><a href="https://apps.apple.com/us/app/brewies/id123456789" target="_blank" rel="noopener noreferrer">Brewies</a></h3>
                <p>A local coffee shop finder that discovers hidden coffee shops around the world, along with finding breweries, distilleries, and wineries. Available on the iOS Store.</p>
              </div>
              {/* Add other apps here */}
            </div>
          </div>
          <div className="coming-soon-box">
            <h2>Coming Soon</h2>
            <div className="services-grid">
              <div className="service-box">
                <img src={comingSoonImage} alt="Minecraft Hosting" />
                <h3>Minecraft Hosting</h3>
                <p>Stay tuned for our upcoming Minecraft hosting services!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
