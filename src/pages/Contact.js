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
    const mailtoLink = `mailto:hello@nobosoftware.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-section">
      <div className="contact-content">
        <h1>Contact Us</h1>
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
