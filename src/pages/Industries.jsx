export default function Industries(){
  const industries = [
    'HRMS','Market Research','Food','Banking','Telecom','Media & Entertainment','Fitness','E-Learning'
  ]
  return (
    <section className="hero">
      <div className="container">
        <h1>Industries We Serve</h1>
        <div className="grid" style={{marginTop:24}}>
          {industries.map((i)=> (
            <div key={i} style={{border:'1px solid #e5e7eb', padding:16, borderRadius:12}}>
              <div style={{fontWeight:800, color:'#0a213a'}}>{i}</div>
              <div style={{marginTop:6, color:'#64748b'}}>Solutions tailored for {i}.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}