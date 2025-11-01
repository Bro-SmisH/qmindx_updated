import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaMobile, FaRobot, FaCloud, FaChartLine, FaDatabase } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Add page title and meta description for SEO
    document.title = 'QmindX - AI-Powered Solutions & Digital Transformation Services';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'QmindX helps businesses accelerate growth through AI-powered solutions, digital transformation services, and ready-to-deploy white-label platforms.');
    }
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" data-aos="fade-up">AI First Digital Innovation<br />for Modern Businesses</h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
              We are a next-generation technology company delivering cutting-edge solutions across AI, Mobile, Web, Cloud, Analytics, Web3, Blockchain, and Crypto. Our team of experts crafts bespoke digital solutions designed to accelerate innovation, enhance operational efficiency, and drive sustainable growth for modern businesses.
            </p>
            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="experience-banner">
        <div className="container">
          <h2>17 Years of empirical understanding</h2>
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="second-hero-section">
        <div className="container">
          <div className="second-hero-content">
            <h2 className="second-hero-title" data-aos="fade-up">Shaping the Future with Scalable, Intelligent, AI-Powered Solutions</h2>
            <p className="second-hero-subtitle" data-aos="fade-up" data-aos-delay="100">
              We help businesses accelerate growth through AI-powered solutions, digital transformation services, and ready-to-deploy white-label platforms. Whether modernizing legacy systems or integrating intelligent automation — we deliver measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-aos="fade-up">Our Services</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up" data-aos-delay="150">
              <div className="service-icon">
                <FaCode />
              </div>
              <h3>Web Development</h3>
              <p>Custom web applications built with cutting-edge technologies to deliver exceptional user experiences.</p>
              <Link to="/services/web/development" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaMobile />
              </div>
              <h3>Mobile App Development</h3>
              <p>Native and cross-platform mobile applications that engage users and drive business growth.</p>
              <Link to="/services/mobile/app-development" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaRobot />
              </div>
              <h3>AI Development</h3>
              <p>Get custom AI software tailored to your business goals with our expert development team.</p>
              <Link to="/services/ai" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaCloud />
              </div>
              <h3>Cloud Migration</h3>
              <p>Seamless migration to cloud platforms with optimized infrastructure and enhanced security.</p>
              <Link to="/services/enterprise/cloud-migration" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaChartLine />
              </div>
              <h3>Digital Transformation</h3>
              <p>Strategic digital initiatives that modernize your business processes and drive innovation.</p>
              <Link to="/services/enterprise/digital-transformation" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaDatabase />
              </div>
              <h3>Enterprise Solutions</h3>
              <p>Scalable enterprise applications that streamline operations and improve efficiency.</p>
              <Link to="/services/enterprise-it-solutions" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Trusted by 218 Customers Globally</h2>
            <p>Do you have an Idea? We have an Expert Team!</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-aos="fade-up">Our Recent Projects</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Look at how businesses have leveraged our services to excel at what they do. 
              We are excited to add you to our list of happy clients.
            </p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card" data-aos="fade-up" data-aos-delay="150">
              <div className="project-image">
                <img src="/project-1.jpg" alt="Health & Wellness Portal" />
              </div>
              <div className="project-content">
                <h3>Health & Wellness Portal</h3>
                <p>A comprehensive platform dedicated to companies, employees, and people working in today's "Gig Economy". It aims at making everything rewarding in a corporate or business set-up.</p>
                <div className="project-tags">
                  <span>DevOps</span>
                  <span>Agile Methodology</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/project-2.jpg" alt="Online Learning Portal" />
              </div>
              <div className="project-content">
                <h3>Online Learning Portal</h3>
                <p>An advanced online learning platform built on modern technologies. We employed next-gen technological stack & modern architecture to achieve the client's vision.</p>
                <div className="project-tags">
                  <span>DevOps</span>
                  <span>Agile Methodology</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/project-3.jpg" alt="Web3 Ecosystem" />
              </div>
              <div className="project-content">
                <h3>Web3 Ecosystem</h3>
                <p>Infrastructure and consumer DApp for Web3 mass distribution with advanced blockchain integration.</p>
                <div className="project-tags">
                  <span>DevOps</span>
                  <span>Agile Methodology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">OUR INDUSTRIES</h2>
            <p className="section-subtitle">
              With the help of our wide range of services in various domains. We have successfully covered various companies globally. 
              In our time frame, we have designed several apps for different companies that have benefited from it and can scale their business to new heights. 
              We will be happy to do the same for your business and help you realize the true potential of your business with our cost-effective services.
            </p>
          </div>
          
          <div className="industries-grid">
            <div className="industry-card">
              <h3>Healthcare</h3>
            </div>
            <div className="industry-card">
              <h3>Finance</h3>
            </div>
            <div className="industry-card">
              <h3>Education</h3>
            </div>
            <div className="industry-card">
              <h3>E-commerce</h3>
            </div>
            <div className="industry-card">
              <h3>Real Estate</h3>
            </div>
            <div className="industry-card">
              <h3>Manufacturing</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;