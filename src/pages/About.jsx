import { useEffect } from 'react';
import { FaUsers, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  useEffect(() => {
    // Add page title and meta description for SEO
    document.title = 'About QmindX - Our Story, Mission & Values';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about QmindX, our journey, mission, values, and the expert team behind our AI-powered solutions and digital transformation services.');
    }
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About QmindX</h1>
            <p className="lead">We're a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>Founded in 2006, QmindX began as a small team of developers with a big vision: to help businesses leverage technology to achieve their full potential. Over the years, we've grown into a global company with offices across three continents and a team of over 300 talented professionals.</p>
              <p>Our journey has been defined by continuous innovation, adapting to emerging technologies, and maintaining a relentless focus on delivering exceptional value to our clients. From web applications to AI-powered solutions, we've consistently pushed the boundaries of what's possible.</p>
            </div>
            <div className="about-image">
              <img src="/about-story.jpg" alt="QmindX team collaborating" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Client Partnership</h3>
              <p>We believe in building long-term relationships with our clients, understanding their unique challenges, and working collaboratively to achieve their goals.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaLightbulb />
              </div>
              <h3>Innovation</h3>
              <p>We embrace emerging technologies and creative thinking to develop solutions that give our clients a competitive edge in their industries.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaRocket />
              </div>
              <h3>Excellence</h3>
              <p>We are committed to delivering high-quality work that exceeds expectations, with attention to detail and a focus on measurable results.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Integrity</h3>
              <p>We operate with transparency, honesty, and ethical practices in all our interactions with clients, partners, and team members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          <p className="section-subtitle text-center">Meet the experts guiding our vision and strategy</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/team-1.jpg" alt="John Smith" />
              </div>
              <h3>John Smith</h3>
              <p className="member-title">Chief Executive Officer</p>
              <p className="member-bio">With over 20 years of experience in technology leadership, John drives the strategic vision of QmindX.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/team-2.jpg" alt="Sarah Johnson" />
              </div>
              <h3>Sarah Johnson</h3>
              <p className="member-title">Chief Technology Officer</p>
              <p className="member-bio">Sarah leads our technical innovation, bringing expertise in AI, cloud architecture, and emerging technologies.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/team-3.jpg" alt="Michael Chen" />
              </div>
              <h3>Michael Chen</h3>
              <p className="member-title">VP of Client Services</p>
              <p className="member-bio">Michael ensures our clients receive exceptional service and that projects deliver measurable business value.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/team-4.jpg" alt="Priya Patel" />
              </div>
              <h3>Priya Patel</h3>
              <p className="member-title">Director of AI Solutions</p>
              <p className="member-bio">Priya spearheads our AI initiatives, combining deep technical knowledge with practical business applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">17+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">300+</span>
              <span className="stat-label">Team Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1140+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">96%</span>
              <span className="stat-label">Client Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to transform your business?</h2>
            <p>Let's discuss how our solutions can help you achieve your goals.</p>
            <a href="/contact" className="btn btn-primary">Contact Us Today</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;