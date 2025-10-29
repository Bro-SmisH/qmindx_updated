import { FaBrain, FaRobot, FaMobileAlt, FaSearch, FaCube ,FaUniversity, FaChartBar, FaBook, FaDumbbell, FaUtensils, FaUsersCog} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home(){
  const industries = [
    { label: 'Banking', icon: <FaUniversity /> },
    { label: 'Market Research', icon: <FaChartBar /> },
    { label: 'Custom e-learning solutions', icon: <FaBook /> },
    { label: 'Fitness app development solutions', icon: <FaDumbbell /> },
    { label: 'Food', icon: <FaUtensils /> },
    { label: 'HRMS', icon: <FaUsersCog /> }
  ]

  const industrySlider = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 520, settings: { slidesToShow: 1 } },
    ],
  }

  const projects = [
    {
      title: 'AI Voice Agent Platform',
      img: 'https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=1600&auto=format&fit=crop',
      tags: ['Telephony', 'LLM', 'Realtime']
    },
    {
      title: 'Banking Analytics Dashboard',
      img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8d3d88?q=80&w=1600&auto=format&fit=crop',
      tags: ['Fintech', 'BI', 'Cloud']
    },
    {
      title: 'Fitness Coaching App',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
      tags: ['Mobile', 'AI', 'Health']
    },
    {
      title: 'E-learning CMS',
      img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
      tags: ['Education', 'CMS', 'Web']
    },
  ]

  const testimonials = [
    { name: 'Aarav Sharma', title: 'CEO, FinServe India', quote: 'Qmindx brought discipline to our delivery and a fresh UX perspective. We cut our onboarding time by 38% and customer NPS improved considerably.' },
    { name: 'Priya Nair', title: 'Head of Product, HealthCo', quote: 'Their team understood our healthcare compliance needs quickly and delivered a robust MVP in weeks. Communication was crisp throughout.' },
    { name: 'Rohan Mehta', title: 'CTO, MarketIntel', quote: 'Excellent data engineering and AI expertise. Pipelines are reliable and costs went down by 22% after their cloud optimization.' },
    { name: 'Neha Gupta', title: 'Founder, LearnFast', quote: 'From discovery to launch, Qmindx was proactive and transparent. Our e-learning CMS is fast, secure and easy to extend.' },
    { name: 'Vikram Singh', title: 'Director, AgroTech Labs', quote: 'Great problem solvers. They helped us ship a computer-vision module that improved quality checks and reduced returns.' },
    { name: 'Ishita Bose', title: 'VP Engineering, ShopKart', quote: 'Clean architecture, strong React/Node skills, and predictable sprints. They were an extension of our in‑house team.' },
    { name: 'Siddharth Rao', title: 'COO, VoiceDesk', quote: 'Their AI voice agent work was impressive—natural, configurable and production-ready. Our call handling time dropped materially.' },
    { name: 'Ananya Iyer', title: 'Product Lead, EdVision', quote: 'Dependable partner. They handled legacy takeover smoothly, fixed critical issues and kept shipping features.' },
    { name: 'Kunal Verma', title: 'Head of Digital, BankNet', quote: 'Security-first approach and solid DevOps. Releases are now automated and rollbacks are painless.' },
    { name: 'Meera Menon', title: 'Founder, FitBuddy', quote: 'Mobile team is top notch. App performance is great and adoption exceeded our targets.' },
  ]

  const testiSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 900, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div>
      {/* HERO */}
      <section className="hero-ongraph">
        <div className="container" style={{position:'relative'}}>
          <div data-aos="fade-up">
            <h1 className="title">AI First Digital Innovation<br/>for Modern Businesses</h1>
            <p className="subtitle">
              We are a next-generation technology company delivering cutting-edge solutions across AI, Mobile, Web, Cloud, Analytics, Web3, Blockchain, and Crypto. Our team of experts crafts bespoke digital solutions designed to accelerate innovation, enhance operational efficiency, and drive sustainable growth for modern businesses. From intelligent automation to secure, scalable platforms, we empower organizations to thrive in a rapidly evolving digital landscape.
            </p>
            <div className="cta">
              <a className="button" href="/contact">Consult With Us</a>
            </div>
          </div>

          {/* right decorative image */}
          <img
  data-aos="zoom-in"
  src="https://qmindx.netlify.app/assets/img/hero/hero2-main-img1.png"
  alt="Enterprise Solutions"
  style={{
    position: 'absolute',
    right: 0,
    bottom: -70,
    width: 400,
    maxWidth: '48%',
    opacity: 0.9,
    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,.25))',
    animationName: 'shape-animation4',
    animationDuration: '20s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out'
  }}
/>


          {/* partner badges row */}
          {/* <div className="partner-row" data-aos="fade-up" data-aos-delay="150">
            <div className="partner-badge">AWS Consulting Partner</div>
            <div className="partner-badge">Odoo Consulting Partner</div>
            <div className="partner-badge">Mira AI Consulting Partner</div>
          </div> */}
        </div>

        {/* stats floating card */}
        {/* <div className="stats-wrap" aria-hidden>
          <div className="stats-card" data-aos="fade-up" data-aos-delay="200">
            <div className="stats">
              <div className="stat"><h3>300+</h3><p>Developers</p></div>
              <div className="stat"><h3>500+</h3><p>Customers</p></div>
              <div className="stat"><h3>1140</h3><p>Projects Delivered</p></div>
              <div className="stat"><h3>96%</h3><p>Retention rate</p></div>
            </div>
          </div>
        </div> */}
      </section>

      {/* INTRO SECTION */}
      <section className="section">
        <div className="container two-col">
          <div data-aos="fade-right">
            <h2 className="heading">Shaping the Future with Scalable,<br/> Intelligent, AI-Powered Solutions</h2>
            <p className="lead">
              We help businesses accelerate growth through AI-powered solutions, digital transformation services,
              and ready-to-deploy white-label platforms. Whether modernizing legacy systems or integrating intelligent
              automation — we deliver measurable business outcomes.
            </p>
            <div className="actions">
              <a className="button secondary" href="/about">Learn more about Qmindx</a>
              <a className="button" href="/contact">Get an estimate</a>
            </div>
          </div>
          <div data-aos="fade-left">
            <img src="https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/salesforce-ai.svg" alt="AI Illustration"/>
          </div>
        </div>
      </section>

      {/* CAPABILITIES TIMELINE */}

      <section className="section industries" id="industries">
        <div className="container">
          {/* Top header like screenshot */}
          <div className="ind-top" data-aos="fade-up">
            <div className="ind-title-col">
              <div className="ind-title">OUR<br/>INDUSTRIES</div>
              <span className="ind-divider" aria-hidden="true" />
            </div>
            <p className="lead ind-desc">
              With the help of our wide range of services in various domains, we have successfully covered various companies globally. In our time frame, we have designed several apps for different companies that have benefited from it and can scale their business to new heights. We will be happy to do the same for your business and help you realize the true potential of your business with our cost-effective services.
            </p>
          </div>

          {/* Carousel of industry cards */}
          <div className="ind-slider-wrap" data-aos="fade-up" data-aos-delay="120">
            <Slider {...industrySlider}>
              {industries.map(({ label, icon }) => (
                <div key={label} className="ind-slide">
                  <div className="ind-card hover-lift">
                    <div className="ind-icon">{icon}</div>
                    <h5>{label}</h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="section projects" id="projects">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="main-heading">Recent Projects</h2>
            <h5 className="sub-heading">A glimpse of our latest work across AI, Mobile and Web</h5>
          </div>

          <div className="project-grid">
            {projects.map((p)=> (
              <article key={p.title} className="project-card" data-aos="zoom-in">
                <img src={p.img} alt={p.title} />
                <div className="project-overlay">
                  <h4>{p.title}</h4>
                  <div className="tags">
                    {p.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="button secondary">Show more</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials" id="testimonials">
        <div className="container">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="main-heading">Hear from our clients</h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="120">
            <Slider {...testiSlider}>
              {testimonials.map((t) => (
                <div key={t.name} className="testi-slide">
                  <div className="testi-card fancy">
                    <div className="testi-top">
                      <div className="quote-mark">❝❞</div>
                      <div className="stars" aria-label="5 stars">★★★★★</div>
                    </div>
                    <div className="testi-header">
                      <h4>{t.name}</h4>
                      {t.title && <span className="role">{t.title}</span>}
                    </div>
                    <hr />
                    <p className="testi-text">{t.quote}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq" id="faq">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="main-heading">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {[
              {q: 'How fast can you start a new project?', a: 'Typically within 1–2 weeks after scope sign-off. For urgent engagements, we can assemble a core team in a few days.'},
              {q: 'Do you offer fixed-price and T&M models?', a: 'Yes. For well-defined scopes, we recommend fixed-price. For evolving products, T&M with sprints works best.'},
              {q: 'What technologies do you specialize in?', a: 'Modern React/Next.js, Node.js, Python, cloud-native microservices, LLM/AI, mobile (React Native/Flutter), data engineering, and DevOps.'},
              {q: 'Can you take over existing codebases?', a: 'Absolutely. We begin with an audit, stabilize critical issues, and then proceed with feature delivery.'},
              {q: 'How do you handle QA and testing?', a: 'Automated unit/integration tests, E2E where applicable, CI pipelines, and manual exploratory testing before releases.'},
              {q: 'What does a typical engagement look like?', a: 'Discovery → Proposal → Sprint plan → Delivery with demos → UAT → Release → Hypercare.'},
              {q: 'Can you work in my time zone?', a: 'Yes. We provide overlapping hours and dedicated Slack channels with clear SLAs.'},
              {q: 'How do you communicate project progress?', a: 'Weekly demos, Jira/ClickUp boards, and clearly defined milestones with burndown trends.'},
              {q: 'Do you help with cloud and DevOps?', a: 'Yes, from infra-as-code and observability to cost optimization and compliance.'},
              {q: 'What are your security practices?', a: 'Least-privilege access, code reviews, secrets management, and periodic SAST/DAST scans.'},
            ].map((item, idx) => (
              <details key={idx} className="faq-item" data-aos="fade-up">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

function FeatureCard({ title, href }){
  return (
    <a
      data-aos="zoom-in"
      href={href}
      style={{border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden', display:'block', padding:20}}
    >
      <div style={{height:140, background:'#f1f5f9', borderRadius:12, marginBottom:12}} />
      <div style={{fontWeight:800, color:'#0a213a', fontSize:18}}>{title}</div>
      <div style={{marginTop:6, color:'#64748b'}}>Discover more →</div>
    </a>
  )
}