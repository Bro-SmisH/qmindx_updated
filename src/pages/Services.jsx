import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaRobot, FaCloud, FaChartLine, FaDatabase, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  useEffect(() => {
    // Add page title and meta description for SEO
    document.title = 'QmindX Services - AI, Web & Mobile Development Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore QmindX\'s comprehensive range of services including AI development, web & mobile app development, cloud solutions, and digital transformation.');
    }
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p className="lead">Comprehensive technology solutions tailored to your business needs</p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaCode />
              </div>
              <h3>Web Development</h3>
              <p>Custom web applications built with cutting-edge technologies to deliver exceptional user experiences.</p>
              <ul className="service-features">
                <li>Custom Web Applications</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>E-commerce Solutions</li>
                <li>CMS Development</li>
                <li>API Development & Integration</li>
              </ul>
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
              <ul className="service-features">
                <li>iOS App Development</li>
                <li>Android App Development</li>
                <li>Cross-platform Solutions</li>
                <li>Mobile UI/UX Design</li>
                <li>App Maintenance & Support</li>
              </ul>
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
              <ul className="service-features">
                <li>Machine Learning Solutions</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Predictive Analytics</li>
                <li>AI Integration Services</li>
              </ul>
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
              <ul className="service-features">
                <li>Cloud Strategy & Planning</li>
                <li>Infrastructure Migration</li>
                <li>Cloud-Native Development</li>
                <li>DevOps Implementation</li>
                <li>Managed Cloud Services</li>
              </ul>
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
              <ul className="service-features">
                <li>Digital Strategy Consulting</li>
                <li>Process Automation</li>
                <li>Legacy System Modernization</li>
                <li>Digital Experience Design</li>
                <li>Data-Driven Transformation</li>
              </ul>
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
              <ul className="service-features">
                <li>Custom ERP Solutions</li>
                <li>CRM Development</li>
                <li>Business Intelligence</li>
                <li>Supply Chain Management</li>
                <li>Enterprise Integration</li>
              </ul>
              <Link to="/services/enterprise-it-solutions" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title text-center">Our Development Process</h2>
          <p className="section-subtitle text-center">A proven methodology that ensures successful project delivery</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Planning</h3>
              <p>Our team creates a detailed project roadmap, including timelines, milestones, and resource allocation.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Design</h3>
              <p>We design intuitive user interfaces and experiences that align with your brand and meet user needs.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Development</h3>
              <p>Our developers build your solution using agile methodologies, with regular sprints and client feedback.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">05</div>
              <h3>Testing</h3>
              <p>Rigorous quality assurance ensures your product is bug-free, secure, and performs optimally.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">06</div>
              <h3>Deployment</h3>
              <p>We launch your solution with minimal disruption and provide comprehensive documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <h2 className="section-title text-center">Technologies We Use</h2>
          <p className="section-subtitle text-center">Modern tech stack for building robust, scalable solutions</p>
          
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-list">
                <span className="tech-item">React</span>
                <span className="tech-item">Angular</span>
                <span className="tech-item">Vue.js</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">TypeScript</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-list">
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">Java</span>
                <span className="tech-item">PHP</span>
                <span className="tech-item">.NET</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Mobile</h3>
              <div className="tech-list">
                <span className="tech-item">React Native</span>
                <span className="tech-item">Flutter</span>
                <span className="tech-item">Swift</span>
                <span className="tech-item">Kotlin</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Cloud & DevOps</h3>
              <div className="tech-list">
                <span className="tech-item">AWS</span>
                <span className="tech-item">Azure</span>
                <span className="tech-item">Google Cloud</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start your project?</h2>
            <p>Contact us today for a free consultation and project estimate.</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;