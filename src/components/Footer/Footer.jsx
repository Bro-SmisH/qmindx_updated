import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <Link to="/" className="footer-logo">
              <span className="logo-text">QmindX</span>
            </Link>
            <p className="footer-description">
              We help businesses accelerate growth through AI-powered solutions, digital transformation services, and ready-to-deploy white-label platforms.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/web/development">Web Development</Link></li>
              <li><Link to="/services/mobile/app-development">Mobile App Development</Link></li>
              <li><Link to="/services/enterprise/digital-transformation">Digital Transformation</Link></li>
              <li><Link to="/services/enterprise/ai-ml">AI & Machine Learning</Link></li>
              <li><Link to="/services/web/ecommerce">E-commerce Solutions</Link></li>
              <li><Link to="/services/enterprise/cloud-migration">Cloud Migration</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope />
                <a href="mailto:info@qmindx.com">info@qmindx.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <address>123 Innovation Drive, Tech City, TC 10001</address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} QmindX. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;