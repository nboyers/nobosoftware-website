<<<<<<< HEAD
// Home.js - Professional Portfolio Home Page
import React from 'react';
import { Link } from 'react-router-dom';
import devCert from '../assets/aws-certified-developer-associate-204.png';
import mlCert from '../assets/aws-certified-machine-learning-engineer-associate-204.png';
import dataCert from '../assets/aws-certified-data-engineer-associate-204.png';
import saCert from '../assets/aws-certified-solutions-architect-associate-204.png';
=======
import React from 'react';
>>>>>>> 6c0c08f0169dbd226aacc01502ba19fb78aae637

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
<<<<<<< HEAD
        <h1>AWS Solutions Architect & Mobile Developer</h1>
        <p className="subtitle">Amazon IQ Expert | iOS Developer | Cloud Infrastructure Specialist</p>
        <p>
          Experienced AWS Solutions Architect with proven expertise in mobile app development, 
          infrastructure-as-code, and cloud computing. Creator of the Valto iOS app and contributor 
          to AWS open-source projects. Available for consulting through Amazon IQ and direct engagement.
        </p>
      </header>
      
      <section className="home-highlights">
        <h2>Career Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>Valto iOS Application</h3>
            <p>Developed and published iOS application showcasing mobile development expertise and App Store deployment experience.</p>
          </div>
          <div className="highlight-card">
            <h3>AWS Open Source Contributions</h3>
            <p>Contributed to AWS Samples with server-side rendering microservices architecture, demonstrating deep platform knowledge and community engagement.</p>
          </div>
          <div className="highlight-card">
            <h3>Infrastructure as Code</h3>
            <p>Expert-level proficiency in AWS CDK and Terraform for scalable, maintainable cloud infrastructure deployment.</p>
          </div>
        </div>
      </section>

      <section className="aws-certifications">
        <h2>AWS Certifications</h2>
        <div className="certifications-grid">
          <div className="cert-badge">
            <img src={devCert} alt="AWS Certified Developer - Associate" />
          </div>
          <div className="cert-badge">
            <img src={mlCert} alt="AWS Certified Machine Learning Engineer - Associate" />
          </div>
          <div className="cert-badge">
            <img src={dataCert} alt="AWS Certified Data Engineer - Associate" />
          </div>
          <div className="cert-badge">
            <img src={saCert} alt="AWS Certified Solutions Architect - Associate" />
          </div>
        </div>
      </section>

      <section className="home-expertise">
        <h2>Technical Expertise</h2>
        <div className="expertise-columns">
          <div className="expertise-column">
            <h4>Cloud & DevOps</h4>
            <ul>
              <li>AWS Solutions Architecture</li>
              <li>CDK & Terraform</li>
              <li>CI/CD Pipelines</li>
              <li>Serverless Computing</li>
            </ul>
          </div>
          <div className="expertise-column">
            <h4>Mobile Development</h4>
            <ul>
              <li>iOS Development (Swift)</li>
              <li>App Store Publishing</li>
              <li>Mobile Architecture</li>
              <li>Cross-platform Solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <h2>Available for Opportunities</h2>
        <p>
          Seeking new challenges in cloud architecture, mobile development, or technical leadership roles. 
          Also available for consulting through Amazon IQ platform.
=======
        <h1>Mobile App Developer & Cloud Solutions Architect</h1>
        <p>
          I specialize in building high-quality iOS and Android applications, combined with robust, production-ready cloud infrastructure. Whether you're launching a mobile product or modernizing your DevOps practices, I offer full-stack solutions designed for performance, scalability, and long-term growth.
        </p>
      </header>

      <section className="home-services">
        <h2>Services Offered</h2>
        <ul>
          <li>
            <strong>iOS & Android App Development:</strong> Cross-platform mobile development using modern frameworks with a focus on user experience, reliability, and performance.
          </li>
          <li>
            <strong>Cloud Infrastructure Design:</strong> Custom AWS architecture built for scale, security, and cost efficiency — from traditional EC2 to serverless platforms.
          </li>
          <li>
            <strong>DevOps & Automation:</strong> Delivery of reusable Infrastructure-as-Code (IaC) including AWS CloudFormation and Terraform templates that you can integrate into your own CI/CD pipelines.
          </li>
          <li>
            <strong>One-time Deliverables:</strong> Need a single-use CloudFormation template or tailored infrastructure setup? I offer fixed-scope solutions delivered as clean, documented code.
          </li>
          <li>
            <strong>Consulting & Technical Advising:</strong> Architecture reviews, cost optimization, performance tuning, and implementation guidance for startups and growing teams.
          </li>
        </ul>
      </section>

      <section className="home-contact">
        <h2>Let’s Work Together</h2>
        <p>
          Ready to build your next mobile app or automate your cloud infrastructure? <a href="/contact">Contact me</a> to discuss your project and get a personalized solution.
>>>>>>> 6c0c08f0169dbd226aacc01502ba19fb78aae637
        </p>
        <div className="cta-buttons">
          <Link to="/services" className="cta-button primary">View Projects</Link>
          <Link to="/contact" className="cta-button secondary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
