import { Link, Outlet } from 'react-router-dom'

export default function MainLayout(){
  return (
    <div>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" style={{ fontWeight: 900, color: '#0a213a', fontSize: 22 }}>Qmindx</Link>
          <nav className="nav">
            <span onMouseEnter={()=>document.body.classList.add('show-services-mega')} style={{cursor:'pointer'}}>Services ▾</span>
            <Link to="/industries">Industries</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        {/* Mega menu overlay */}
        <div className="mega-overlay" onMouseEnter={()=>document.body.classList.add('show-services-mega')} onMouseLeave={()=>document.body.classList.remove('show-services-mega')}>
          <div className="container mega-inner">
            <div className="mega-left">
              <Link className="mega-card" to="/services/startup-it-solutions" onClick={()=>document.body.classList.remove('show-services-mega')}>
                <img src="/startup.jpg" alt="Startups" />
                <span className="mega-pill">STARTUPS</span>
              </Link>
              <Link className="mega-card" to="/services/enterprise-it-solutions" onClick={()=>document.body.classList.remove('show-services-mega')} style={{marginTop:24}}>
                <img src="/enterprise.png" alt="Enterprise" />
                <span className="mega-pill">ENTERPRISE</span>
              </Link>
            </div>
            <div className="mega-cols">
              <div>
                <div className="mega-tag">Mobile</div>
                <ul className="mega-list">
                  <li><Link to="/services/mobile/app-development">App Development</Link></li>
                  <li><Link to="/services/mobile/ios">iOS</Link></li>
                  <li><Link to="/services/mobile/android">Android</Link></li>
                  <li><Link to="/services/mobile/flutter">Flutter</Link></li>
                  <li><Link to="/services/mobile/cross-platform">Cross Platform App Development</Link></li>
                  <li><Link to="/services/mobile/react-native">React Native</Link></li>
                  <li><Link to="/services/mobile/ionic">Ionic</Link></li>
                </ul>
                <ul className="mega-list">
                  <li><Link to="/services/startup-it-solutions">Startup IT Solutions</Link></li>
                  <li><Link to="/services/market-research-software-development">Market Research Software Development</Link></li>
                  <li><Link to="/services/enterprise-it-solutions">Enterprise IT Solutions</Link></li>
                </ul>
              </div>
              <div>
                <div className="mega-tag">Web</div>
                <ul className="mega-list two">
                  <li><Link to="/services/web/web-app-development">Web App Development</Link></li>
                  <li><Link to="/services/web/php">PHP</Link></li>
                  <li><Link to="/services/web/ror">ROR</Link></li>
                  <li><Link to="/services/web/vuejs">VueJs</Link></li>
                  <li><Link to="/services/web/react">React</Link></li>
                  <li><Link to="/services/web/java">Java</Link></li>
                  <li><Link to="/services/web/python">Python Development</Link></li>
                  <li><Link to="/services/web/angular">Angular</Link></li>
                  <li><Link to="/services/web/nodejs">NodeJs</Link></li>
                </ul>
                <div className="mega-sub">Ecommerce & CMS</div>
                <ul className="mega-list two">
                  <li><Link to="/services/ecommerce-cms/magento">Magento</Link></li>
                  <li><Link to="/services/ecommerce-cms/wordpress">WordPress</Link></li>
                  <li><Link to="/services/ecommerce-cms/marketplace">Marketplace</Link></li>
                  <li><Link to="/services/ecommerce-cms/shopify">Shopify</Link></li>
                </ul>
              </div>
              <div>
                <div className="mega-tag">Emerging Technologies</div>
                <ul className="mega-list">
                  <li><Link to="/services/ai">ARTIFICIAL INTELLIGENCE</Link></li>
                  <li><Link to="/services/chatbot">CHATBOT</Link></li>
                  <li><Link to="/services/ai-voice-agents">AI VOICE AGENTS</Link></li>
                  <li><Link to="/services/enterprise-product-engineering">ENTERPRISE PRODUCT ENGINEERING</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer-ongraph">
        <div className="container">
          {/* Email pill */}
          <div style={{display:'flex', justifyContent:'center', marginBottom:24}}>
            <div style={{background:'#fff', borderRadius:999, padding:'12px 20px', boxShadow:'0 8px 24px rgba(2,23,44,.08)', display:'inline-flex', alignItems:'center', gap:10}}>
              <span style={{width:38, height:38, borderRadius:999, background:'#0a3352', color:'#fff', display:'inline-flex', alignItems:'center', justifyContent:'center', fontWeight:800}}>✉</span>
              <strong style={{color:'#0a3352'}}>EMAIL</strong>
              <span style={{color:'#475569'}}>qmindx@gmail.com</span>
            </div>
          </div>

          <div className="footer-grid">
            {/* Newsletter */}
            <div>
              <div className="newsletter">
                <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <div className="input">
                  <input type="email" placeholder="Email Address" aria-label="Email address" />
                  <span className="go">→</span>
                </div>
                <div style={{marginTop:16, display:'flex', alignItems:'center', gap:10}}>
                  <div style={{width:48, height:48, borderRadius:14, background:'#e9f2fa', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <div style={{width:26, height:26, borderRadius:999, border:'3px solid #0a3352'}} />
                  </div>
                  <div>
                    <div style={{fontWeight:900, color:'#0a3352'}}>OnGraph</div>
                    <div style={{color:'#6b7280'}}>Delivering Business Value</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4>Services</h4>
              <ul>
                <li>Android</li>
                <li>iOS App Development</li>
                <li>Ruby on Rails</li>
                <li>Python Development</li>
                <li>Ionic App Development</li>
                <li>Amazon Web Services</li>
                <li>Node.js Development Company</li>
                <li>Grails</li>
                <li>Symfony</li>
                <li>Selenium Automation</li>
              </ul>
            </div>

            {/* Staffing Services */}
            <div>
              <h4>Staffing Services</h4>
              <ul>
                <li>Hire Android Developer</li>
                <li>Hire DevOps Developer</li>
                <li>Hire iOS Developer</li>
                <li>Hire PHP Developer</li>
                <li>Hire Magento Developers</li>
                <li>Hire Node.js Developers</li>
                <li>Hire ReactJS Developers</li>
                <li>Hire Apple Watch Developers</li>
                <li>Hire WordPress Developer</li>
                <li>Hire React Native Developer</li>
              </ul>
            </div>

            {/* Technology */}
            <div>
              <h4>Technology</h4>
              <ul>
                <li>Chatbot Development</li>
                <li>Cross Platform App Development</li>
                <li>eCommerce Development</li>
                <li>IoT Solutions</li>
                <li>Enterprise IT Solutions</li>
              </ul>
              <div style={{marginTop:16}}>
                <nav style={{display:'flex', gap:16}}>
                  <Link to="/privacy">Privacy</Link>
                  <Link to="/sitemap">Sitemap</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}