export default function Sitemap(){
  const links = [
    '/', '/services', '/industries', '/case-studies', '/resources', '/about', '/careers', '/contact', '/privacy', '/sitemap'
  ]
  return (
    <section className="hero">
      <div className="container">
        <h1>Sitemap</h1>
        <ul style={{marginTop:16}}>
          {links.map(p => (
            <li key={p} style={{marginBottom:8}}><a href={p} style={{color:'#0a213a'}}>{p}</a></li>
          ))}
        </ul>
      </div>
    </section>
  )
}