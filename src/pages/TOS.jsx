import React from 'react';
import './TOS.css'; // Optional: You can style the TOS page using this CSS file

const TOS = () => {
  return (
    <div className="tos-container">
      <h1>Terms of Service</h1>
      <p>Effective Date: August 21st, 2024</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our Service, you acknowledge that you have read,
        understood, and agree to be bound by these Terms. If you are using the
        Service on behalf of an organization, you represent and warrant that you
        have the authority to bind the organization to these Terms.
      </p>

      <h2>2. Changes to the Terms</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time. We will notify you of any changes by posting the updated
        Terms on our website or within the Service. Your continued use of the
        Service after any such modifications constitutes your acceptance of the new
        Terms.
      </p>

      <h2>3. Use of Service</h2>
      <p>
        You agree to use the Service in compliance with all applicable laws and
        regulations. You must not use the Service in any way that violates any law
        or infringes upon any third-party rights.
      </p>

      {/* Add additional sections of your TOS here */}
      
      <h2>Contact Information</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
      </p>
      <p>
        Nobos Software LLC <br />
        Email: support@nobosoftware.com <br />
      </p>
    </div>
  );
};

export default TOS;
