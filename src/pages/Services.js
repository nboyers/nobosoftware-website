import React from 'react';
import './Services.css';
<<<<<<< HEAD
import iosAppImage from '../assets/ios-app.png';
import cloudHostingImage from '../assets/cloud-hosting.png';
import devCert from '../assets/aws-certified-developer-associate-180.png';
import mlCert from '../assets/aws-certified-machine-learning-engineer-associate-180.png';
import dataCert from '../assets/aws-certified-data-engineer-associate-180.png';
import saCert from '../assets/aws-certified-solutions-architect-associate-180.png';
=======
import valtoImage from '../assets/valto-app.png';
import { Link } from 'react-router-dom';
>>>>>>> 6c0c08f0169dbd226aacc01502ba19fb78aae637

const Services = () => {
  return (
    <div className="content-wrapper">
      <div className="bgimg">
        <div className="services-content">
<<<<<<< HEAD
          <h2>Featured Projects & Expertise</h2>
          
          <div className="services-grid">
            <div className="service-box featured">
              <img src={iosAppImage} alt="Valto iOS App" />
              <h3>Valto iOS Application</h3>
              <p>Published iOS application demonstrating mobile development expertise, Swift programming, and App Store deployment experience. Features modern iOS architecture patterns and user-centric design.</p>
              <div className="tech-stack">
                <span className="tech-tag">Swift</span>
                <span className="tech-tag">iOS SDK</span>
                <span className="tech-tag">App Store</span>
              </div>
              <div className="app-store-link">
                <a href="https://apps.apple.com/app/id6743679798" target="_blank" rel="noopener noreferrer">View on App Store</a>
              </div>
            </div>

            <div className="service-box">
              <img src={cloudHostingImage} alt="AWS Infrastructure" />
              <h3>Infrastructure as Code</h3>
              <p>Expert-level infrastructure-as-code implementation using AWS CDK and Terraform. Designed scalable, cost-effective cloud architectures for enterprise and startup environments. Contributed to AWS Samples repository with server-side rendering microservices architecture.</p>
              <div className="tech-stack">
                <span className="tech-tag">AWS CDK</span>
                <span className="tech-tag">Terraform</span>
                <span className="tech-tag">CloudFormation</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Microservices</span>
              </div>
              <div className="github-link">
                <a href="https://github.com/aws-samples/server-side-rendering-microservices" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            </div>
          </div>

          <div className="certifications-showcase">
            <h3>AWS Certified Professional</h3>
            <p>Validated expertise across multiple AWS domains:</p>
            <div className="cert-badges-horizontal">
              <div className="cert-item">
                <img src={devCert} alt="AWS Developer Associate" />
              </div>
              <div className="cert-item">
                <img src={mlCert} alt="AWS ML Engineer Associate" />
              </div>
              <div className="cert-item">
                <img src={dataCert} alt="AWS Data Engineer Associate" />
              </div>
              <div className="cert-item">
                <img src={saCert} alt="AWS Solutions Architect Associate" />
              </div>
            </div>
          </div>

          <div className="amazon-iq-section">
            <h3>Amazon IQ Expert</h3>
            <p>Available for consulting through Amazon IQ platform. Specializing in:</p>
            <ul className="iq-services">
              <li>AWS Architecture Review & Optimization</li>
              <li>Infrastructure-as-Code Implementation</li>
              <li>Mobile App Development Consulting</li>
              <li>DevOps Pipeline Setup & Automation</li>
            </ul>
=======
          <h2>Our Services</h2>
          <div className="services-grid">

            {/* Valto App */}
            <div className="service-box">
              <img src={valtoImage} alt="Valto App" />
              <h3>Valto – Asset Documentation App</h3>
              <p>
                Valto is a secure mobile app that helps you document and organize your household assets for insurance claims and disaster recovery. Available soon on iOS and Android.
              </p>
              <Link to="/valto">
                <button className="services-button">Visit Website</button>
              </Link>
            </div>

>>>>>>> 6c0c08f0169dbd226aacc01502ba19fb78aae637
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
