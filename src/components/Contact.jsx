import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const inputStyle = {
    fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#1A2238',
    border: '1.5px solid #E2E8F0', borderRadius: 8, padding: '11px 14px',
    background: 'white', outline: 'none', width: '100%', boxSizing: 'border-box',
    transition: 'border-color 150ms, box-shadow 150ms',
  }

  const handleFocus = (e) => {
    e.target.style.borderColor = '#20C997'
    e.target.style.boxShadow = '0 0 0 3px rgba(32,201,151,0.18)'
  }
  const handleBlur = (e) => {
    e.target.style.borderColor = '#E2E8F0'
    e.target.style.boxShadow = 'none'
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:hello@innosoul.consulting?subject=Anfrage von ${form.name}&body=${encodeURIComponent(form.message)}`
  }

  return (
    <section id="kontakt" style={{ background: '#F7FAFC', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">
        {/* Left — CTA text */}
        <div>
          <div style={{ fontSize: 11, fontFamily: 'DM Sans', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#20C997', marginBottom: 16 }}>Kontakt</div>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 600, color: '#1A2238', lineHeight: 1.2, marginBottom: 20 }}>
            Bereit, Ihre Innovation zu finanzieren?
          </h2>
          <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#4A5568', lineHeight: 1.7, marginBottom: 32 }}>
            Vereinbaren Sie ein unverbindliches Erstgespräch. In 30 Minuten klären wir, welche Programme zu Ihrem Projekt passen – ohne Verpflichtung, ohne Bullshit.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#1A2238', color: 'white', textDecoration: 'none',
              borderRadius: 8, padding: '14px 24px', fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600, fontSize: 15, marginBottom: 32,
              transition: 'background 150ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#2E3E5E')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1A2238')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Erstgespräch buchen (Calendly)
          </a>
          <p style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#A0AEC0' }}>
            Oder per E-Mail:{' '}
            <a href="mailto:hello@innosoul.consulting" style={{ color: '#20C997', textDecoration: 'none', fontWeight: 500 }}>
              hello@innosoul.consulting
            </a>
          </p>
        </div>

        {/* Right — Form */}
        <div style={{ background: 'white', borderRadius: 16, padding: '36px 32px', boxShadow: '0 4px 24px rgba(26,34,56,0.09)' }}>
          <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 20, fontWeight: 600, color: '#1A2238', marginBottom: 24 }}>Nachricht senden</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 600, color: '#1A2238', display: 'block', marginBottom: 6 }}>Name *</label>
                <input name="name" value={form.name} onChange={handleChange} required style={inputStyle} placeholder="Dr. Max Mustermann" onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div>
                <label style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 600, color: '#1A2238', display: 'block', marginBottom: 6 }}>E-Mail *</label>
                <input name="email" value={form.email} onChange={handleChange} required type="email" style={inputStyle} placeholder="max@company.de" onFocus={handleFocus} onBlur={handleBlur} />
              </div>
            </div>
            <div>
              <label style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 600, color: '#1A2238', display: 'block', marginBottom: 6 }}>Unternehmen</label>
              <input name="company" value={form.company} onChange={handleChange} style={inputStyle} placeholder="MedTech GmbH" onFocus={handleFocus} onBlur={handleBlur} />
            </div>
            <div>
              <label style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 600, color: '#1A2238', display: 'block', marginBottom: 6 }}>Ihr Vorhaben *</label>
              <textarea name="message" value={form.message} onChange={handleChange} required style={{ ...inputStyle, height: 110, resize: 'none' }} placeholder="Kurze Beschreibung Ihres Forschungsvorhabens…" onFocus={handleFocus} onBlur={handleBlur} />
            </div>
            <button
              type="submit"
              style={{
                background: '#109870', color: 'white', border: 'none',
                borderRadius: 8, padding: '13px', fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600, fontSize: 15, cursor: 'pointer', width: '100%',
                transition: 'background 150ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#087F5B')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#109870')}
            >
              Nachricht absenden
            </button>
            <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#A0AEC0', textAlign: 'center' }}>
              Kein Spam. Keine Verpflichtung. Antwort innerhalb von 48 Stunden.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
