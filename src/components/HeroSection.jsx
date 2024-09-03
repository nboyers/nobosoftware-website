import React, { useState, useEffect, useCallback } from 'react';
import { FaShieldAlt, FaRocket, FaGlobe, FaDollarSign } from 'react-icons/fa';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Modal from './Modal/Modal';
import './HeroSection.css';
import debounce from 'lodash.debounce';
import { validateEmail, sanitizeInput } from './utils/utils';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Honeypot field

  // Debounced email update
  useEffect(() => {
    const debouncedSetEmail = debounce((value) => setEmail(value), 300);
    return () => {
      debouncedSetEmail.cancel(); // Cleanup function to cancel debounce if the component unmounts
    };
  }, []); // Empty dependency array ensures this effect only runs once

  const handleChange = (event) => {
    const sanitizedEmail = sanitizeInput(event.target.value);
    setEmail(sanitizedEmail); // Directly set the sanitized email
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (honeypot !== '') {
      // If the honeypot field is filled, it's likely a bot
      return;
    }
    if (!validateEmail(email)) {
      setModalMessage('Please enter a valid email address.');
      setIsModalOpen(true);
      return;
    }

    try {
      // Add new email to the database
      await addDoc(collection(db, 'subscribers'), {
        email: email,
        timestamp: serverTimestamp(),
      });
      setModalMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setModalMessage('Failed to subscribe. Please try again.');
      console.log('Error adding document:', error);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="hero">
      <div className="overlay">
        <div className="text-container">
          <h1 className="header">Unleash Your Minecraft Experience</h1>
          <h2 className="subheader">Join the waitlist and be the first to host your own Minecraft server.</h2>
          <p className="tagline">Join the waitlist and gain access to a discount code on launch</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="input"
                required
              />
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />
              <button type="submit" className="button">Join Waitlist</button>
            </div>
          </form>
        </div>
        <div className="features">
          <h2>Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <FaShieldAlt className="icon" />
              <h3>Security & Reliability</h3>
              <p>Robust security measures and reliable server uptime.</p>
            </div>
            <div className="feature-item">
              <FaGlobe className="icon" />
              <h3>Low Latency</h3>
              <p>Enjoy low-latency gaming without manually picking a server location. We do it for you!</p>
            </div>
            <div className="feature-item">
              <FaDollarSign className="icon" />
              <h3>Affordable</h3>
              <p>Experience top-tier Minecraft hosting at a price that won't break the bank.</p>
            </div>
            <div className="feature-item">
              <FaRocket className="icon" />
              <h3>Scalable Performance</h3>
              <p>Scale your server based on player demand with ease.</p>
            </div>
          </div>
        </div>
      </div>
      <Modal message={modalMessage} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default HeroSection;
