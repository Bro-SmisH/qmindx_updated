import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })

  function onChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function onSubmit(e){
    e.preventDefault()
    alert(`Thanks ${form.name}! We'll reach out at ${form.email}.`)
  }

  return (
    <section className="hero">
      <div className="container">
        <h1>Contact Us</h1>
        <form onSubmit={onSubmit} style={{marginTop:24, maxWidth:560}}>
          <label style={{display:'block', marginBottom:12}}>
            <div>Name</div>
            <input name="name" value={form.name} onChange={onChange} required style={inputStyle} />
          </label>
          <label style={{display:'block', marginBottom:12}}>
            <div>Email</div>
            <input type="email" name="email" value={form.email} onChange={onChange} required style={inputStyle} />
          </label>
          <label style={{display:'block', marginBottom:12}}>
            <div>Message</div>
            <textarea name="message" value={form.message} onChange={onChange} required rows={5} style={inputStyle} />
          </label>
          <button className="button" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

const inputStyle = {
  width:'100%', border:'1px solid #e5e7eb', borderRadius:10, padding:'10px 12px', marginTop:6
}