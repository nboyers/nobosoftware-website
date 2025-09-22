import React from 'react';
import './ValtoTransparency.css';

const ValtoTransparencyPage = () => {
  return (
    <div className="valto-transparency-wrapper">
      <div className="valto-transparency-content">
        <header>
          <h1>Welcome to Valto</h1>
          <p>
            Valto is a mobile app designed to help you document and organize photos of your household assets for insurance and disaster recovery purposes. It provides a secure and simple way to create a photo inventory of valuable belongings.
          </p>
        </header>

        <section className="section">
          <h2>Why We Use Your Google Account</h2>
          <p>
            We use Sign in with Google strictly to verify your identity and connect your assets to a private, secure account. Valto does not request access to your emails, contacts, or personal files. Your information is not shared with third parties.
          </p>
        </section>

        <section className="section">
          <h2>Privacy and Security</h2>
          <p>
            Your photo uploads and metadata are stored securely and privately. We do not share, sell, or use your data for any purpose other than what is outlined in our privacy policy.
          </p>
          <a href="/privacy-policy" className="policy-link">View our Privacy Policy</a>
        </section>
      </div>
    </div>
  );
};

export default ValtoTransparencyPage;
