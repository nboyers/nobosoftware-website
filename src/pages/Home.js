import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
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
        </p>
      </section>
    </div>
  );
};

export default Home;
