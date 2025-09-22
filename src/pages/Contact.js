import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-section">
      <div className="contact-content">
        <h1>Let's Connect</h1>
        <p className="contact-intro">
          Interested in discussing opportunities, consulting projects, or technical collaboration? 
          I'm available for full-time positions, contract work, and Amazon IQ consulting engagements.
        </p>
        
        <div className="contact-options">
          <div className="contact-method">
            <h3>Career Opportunities</h3>
            <p>Open to Solutions Architect, DevOps Engineer, and Mobile Developer roles</p>
          </div>
          <div className="contact-method">
            <h3>Consulting via Amazon IQ</h3>
            <p>Available for AWS architecture reviews, infrastructure projects, and mobile app development</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={formState.subject}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
