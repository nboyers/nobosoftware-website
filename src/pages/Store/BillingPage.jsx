import React from 'react';
import './BillingPage.css'; // Optional: Create a CSS file for styling

const BillingPage = () => {
  return (
    <div className="billing-page-container">
      <div className="iframe-container">
        <iframe
          src="https://store.nobosoftware.com/billing"
          title="Billing"
          className="billing-iframe"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BillingPage;
