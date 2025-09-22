import React from 'react';
import './BillingPage.css'; // Optional: Create a CSS file for styling

const BillingPage = () => {
  const handleIframeError = () => {
    console.error('Failed to load billing page');
  };

  const handleIframeLoad = () => {
    console.log('Billing page loaded successfully');
  };

  return (
    <div className="billing-page-container">
      <div className="iframe-container">
        <iframe
          src="https://store.nobosoftware.com/billing"
          title="Billing"
          className="billing-iframe"
          frameBorder="0"
          allowFullScreen
          onError={handleIframeError}
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default BillingPage;
