import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesMega, setShowServicesMega] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowServicesMega(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-text">QmindX</span>
          </Link>
          
          <div className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          
          <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <div 
              className="navbar-item has-dropdown"
              onMouseEnter={() => setShowServicesMega(true)}
              onMouseLeave={() => setShowServicesMega(false)}
            >
              <span className="navbar-link">Services <span className="dropdown-arrow">▾</span></span>
            </div>
            <Link to="/industries" className="navbar-item" onClick={closeMenu}>Industries</Link>
            <Link to="/case-studies" className="navbar-item" onClick={closeMenu}>Case Studies</Link>
            <Link to="/resources" className="navbar-item" onClick={closeMenu}>Resources</Link>
            <Link to="/about" className="navbar-item" onClick={closeMenu}>About</Link>
            <Link to="/careers" className="navbar-item" onClick={closeMenu}>Careers</Link>
            <Link to="/contact" className="navbar-item navbar-button" onClick={closeMenu}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Mega Menu */}
      <div 
        className={`mega-menu ${showServicesMega ? 'active' : ''}`}
        onMouseEnter={() => setShowServicesMega(true)}
        onMouseLeave={() => setShowServicesMega(false)}
      >
        <div className="container mega-container">
          <div className="mega-grid">
            <div className="mega-featured">
              <Link className="mega-card" to="/services/startup-it-solutions" onClick={closeMenu}>
                <img src="/startup.jpg" alt="Startups" />
                <span className="mega-pill">STARTUPS</span>
              </Link>
              <Link className="mega-card" to="/services/enterprise-it-solutions" onClick={closeMenu}>
                <img src="/enterprise.png" alt="Enterprise" />
                <span className="mega-pill">ENTERPRISE</span>
              </Link>
            </div>
            
            <div className="mega-column">
              <h4 className="mega-title">Mobile</h4>
              <ul className="mega-list">
                <li><Link to="/services/mobile/app-development" onClick={closeMenu}>App Development</Link></li>
                <li><Link to="/services/mobile/ios" onClick={closeMenu}>iOS</Link></li>
                <li><Link to="/services/mobile/android" onClick={closeMenu}>Android</Link></li>
                <li><Link to="/services/mobile/flutter" onClick={closeMenu}>Flutter</Link></li>
                <li><Link to="/services/mobile/cross-platform" onClick={closeMenu}>Cross Platform App Development</Link></li>
                <li><Link to="/services/mobile/react-native" onClick={closeMenu}>React Native</Link></li>
                <li><Link to="/services/mobile/ionic" onClick={closeMenu}>Ionic</Link></li>
              </ul>
            </div>
            
            <div className="mega-column">
              <h4 className="mega-title">Web</h4>
              <ul className="mega-list">
                <li><Link to="/services/web/development" onClick={closeMenu}>Web Development</Link></li>
                <li><Link to="/services/web/design" onClick={closeMenu}>Web Design</Link></li>
                <li><Link to="/services/web/ecommerce" onClick={closeMenu}>E-commerce</Link></li>
                <li><Link to="/services/web/progressive-web-apps" onClick={closeMenu}>Progressive Web Apps</Link></li>
                <li><Link to="/services/web/frontend" onClick={closeMenu}>Frontend Development</Link></li>
                <li><Link to="/services/web/backend" onClick={closeMenu}>Backend Development</Link></li>
              </ul>
            </div>
            
            <div className="mega-column">
              <h4 className="mega-title">Enterprise</h4>
              <ul className="mega-list">
                <li><Link to="/services/enterprise/digital-transformation" onClick={closeMenu}>Digital Transformation</Link></li>
                <li><Link to="/services/enterprise/legacy-modernization" onClick={closeMenu}>Legacy Modernization</Link></li>
                <li><Link to="/services/enterprise/cloud-migration" onClick={closeMenu}>Cloud Migration</Link></li>
                <li><Link to="/services/enterprise/devops" onClick={closeMenu}>DevOps</Link></li>
                <li><Link to="/services/enterprise/ai-ml" onClick={closeMenu}>AI & Machine Learning</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;