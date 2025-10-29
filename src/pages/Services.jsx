export default function Services(){
  const services = [
    { title: 'Artificial Intelligence', path:'/services/ai-development-solutions/' },
    { title: 'AI Voice Agents', path:'/ai-voice-agent/' },
    { title: 'Web App Development', path:'/web-application-development/' },
    { title: 'Mobile App Development', path:'/mobile-app-development/' },
    { title: 'React Development', path:'/services/react-js-development/' },
    { title: 'Node.js Development', path:'/services/node-js-development/' },
    { title: 'Python Development', path:'/services/python-development/' },
    { title: 'Ecommerce & CMS', path:'/ecommerce-development/' },
  ]
  return (
    <section className="hero">
      <div className="container">
        <h1>Services</h1>
        <p className="muted">All the capabilities mirrored from OnGraph, tailored for Qmindx.</p>
        <div className="grid" style={{marginTop:24}}>
          {services.map(s => (
            <a key={s.title} className="button" href={s.path} style={{justifyContent:'flex-start'}}>
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}