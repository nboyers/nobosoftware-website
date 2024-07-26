import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.jpg';

function Hero() {
  return (
    <section className="hero">
      <h2>Publishing iOS and Android apps with Cloud hosting for Minecraft</h2>
      <img src={heroImage} alt="Hero" />
    </section>
  );
}

export default Hero;
