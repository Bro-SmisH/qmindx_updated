import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Industries from './pages/Industries'
import CaseStudies from './pages/CaseStudies'
import Resources from './pages/Resources'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Sitemap from './pages/Sitemap'
import ServiceDetail from './pages/ServiceDetail'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}> 
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/*" element={<ServiceDetail />} />
        <Route path="industries" element={<Industries />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="sitemap" element={<Sitemap />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
