// Home.js (New Home Page Component)
import React from 'react';


const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Professional Solutions Architect & DevOps Specialist</h1>
        <p>
          We specialize in delivering tailor-made cloud architecture and DevOps solutions. Whether you're a startup looking to scale your infrastructure or an established business needing expert support, our freelance Solutions Architect and DevOps services are here to help.
        </p>
      </header>
      <section className="home-services">
        <h2>Our Expertise</h2>
        <ul>
          <li><strong>Cloud Architecture:</strong> Designing and implementing scalable, secure cloud environments on AWS.</li>
          <li><strong>DevOps Solutions:</strong> CI/CD pipelines, infrastructure as code, and automation for seamless deployments.</li>
          <li><strong>Serverless Technology:</strong> Leveraging serverless frameworks to optimize cost and performance.</li>
          <li><strong>Consulting:</strong> Providing tailored advice to help you get the most out of your cloud investments.</li>
        </ul>
      </section>
      <section className="home-contact">
        <h2>Ready to Collaborate?</h2>
        <p>
          Let's bring your vision to life with reliable cloud and DevOps solutions. <a href="/contact">Contact us</a> today to get started.
        </p>
      </section>
    </div>
  );
};

export default Home;
