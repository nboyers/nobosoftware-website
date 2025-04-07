import React from 'react';
import './Services.css';
import valtoImage from '../assets/valto-app.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="content-wrapper">
      <div className="bgimg">
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="services-grid">

            {/* Valto App */}
            <div className="service-box">
              <img src={valtoImage} alt="Valto App" />
              <h3>Valto – Asset Documentation App</h3>
              <p>
                Valto is a secure mobile app that helps you document and organize your household assets for insurance claims and disaster recovery. Available soon on iOS and Android.
              </p>
              <Link to="/valto">
                <button className="services-button">Visit Website</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
