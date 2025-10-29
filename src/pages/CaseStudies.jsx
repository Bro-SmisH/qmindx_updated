export default function CaseStudies(){
  const cases = [
    { title:'Pirkx Health & Wellness Portal'},
    { title:'GradReady – Online Learning Portal'},
    { title:'ROVI Ecosystem'},
    { title:'DevOps for MutualArt'},
  ]
  return (
    <section className="hero">
      <div className="container">
        <h1>Our Recent Projects</h1>
        <div className="grid" style={{marginTop:24}}>
          {cases.map(c => (
            <div key={c.title} style={{border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden'}}>
              <img src="https://www.ongraph.com/wp-content/themes/ongraph/assets/images/down_arrow.png" alt={c.title} style={{height:160, width:'100%', objectFit:'cover', background:'#f1f5f9'}}/>
              <div style={{padding:16}}>
                <div style={{fontWeight:800, color:'#0a213a'}}>{c.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}