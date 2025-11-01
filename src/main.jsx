import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/main.css'

function Root(){
  useEffect(()=>{
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true
    })
  },[])
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
