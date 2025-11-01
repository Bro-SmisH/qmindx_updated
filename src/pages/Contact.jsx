import { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    // Add page title and meta description for SEO
    document.title = 'Contact QmindX - Get in Touch for IT Solutions & Services';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact QmindX for custom software development, AI solutions, web & mobile app development. Get a free consultation for your next project.');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message. We will get back to you shortly!');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p className="lead">Get in touch with our team for a free consultation</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Our team is always ready to help with your project needs.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h3>Our Location</h3>
                    <p>123 Tech Park, Silicon Valley<br />San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h3>Phone Number</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h3>Email Address</h3>
                    <p>info@qmindx.com</p>
                    <p>support@qmindx.com</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Your company name" />
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Message subject" required />
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
                </div>
                
                <div className="form-group full-width">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          {/* In a real implementation, you would integrate Google Maps or another map service here */}
          <div className="map-placeholder">
            <div className="map-content">
              <FaMapMarkerAlt />
              <p>QmindX Headquarters</p>
              <p>123 Tech Park, Silicon Valley, San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What services does QmindX offer?</h3>
              <p>QmindX offers a comprehensive range of IT services including web and mobile app development, AI solutions, cloud migration, digital transformation, and enterprise IT solutions.</p>
            </div>
            
            <div className="faq-item">
              <h3>How long does it take to develop a custom application?</h3>
              <p>Development timelines vary based on project complexity. Simple applications may take 4-8 weeks, while enterprise-level solutions can take 3-6 months or more. We provide detailed timelines during the project planning phase.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you provide ongoing support after project completion?</h3>
              <p>Yes, we offer various support and maintenance packages to ensure your application continues to run smoothly after launch. Our team can provide regular updates, bug fixes, and feature enhancements.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is your development process?</h3>
              <p>We follow an agile development methodology with regular sprints and client feedback. Our process includes discovery, planning, design, development, testing, and deployment phases to ensure quality deliverables.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;