import React from 'react'

const Industries = () => {
  const industries = [
    {
      color: '#20C997',
      abbr: 'MT',
      title: 'MedTech',
      tags: ['Diagnostik', 'Medizinprodukte', 'Digital Health'],
      desc: 'Von der Diagnostik bis zu vernetzten Medizinprodukten – wir kennen die Regularien und die passenden Förderprogramme.',
    },
    {
      color: '#805AD5',
      abbr: 'BT',
      title: 'Biotechnologie',
      tags: ['Theranostik', 'Zelltherapie', 'Diagnostik'],
      desc: 'Theranostik, Zelltherapie, molekulare Diagnostik – wir sprechen die Sprache Ihrer Technologie.',
    },
    {
      color: '#1A2238',
      abbr: 'LS',
      title: 'Life Science',
      tags: ['Pharma', 'Klinische Tools', 'Forschungsplattformen'],
      desc: 'Von der Forschungsplattform bis zur klinischen Anwendung – mit dem richtigen Förderinstrument zur nächsten Stufe.',
    },
    {
      color: '#18B087',
      abbr: 'DH',
      title: 'Digital Health',
      tags: ['HealthTech', 'KI / Medizin', 'Software'],
      desc: 'KI-gestützte Diagnostik, klinische Entscheidungssoftware und Patientenplattformen – auch hier gibt es passende Programme.',
    },
  ]

  return (
    <section id="branchen" style={{ background: '#1A2238', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontFamily: 'DM Sans', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#20C997', marginBottom: 12 }}>Branchenfokus</div>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 600, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
            Wir sprechen Ihre Sprache
          </h2>
          <p style={{ fontFamily: 'DM Sans', fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: 520, margin: '0 auto' }}>
            Keine Generalisten. Tiefes Verständnis für die spezifischen Anforderungen jeder Branche.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {industries.map((ind, i) => (
            <div key={i} className="industry-card">
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: ind.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16, opacity: 0.9,
              }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 15, color: 'white' }}>{ind.abbr}</span>
              </div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 19, fontWeight: 600, color: '#1A2238', marginBottom: 10 }}>{ind.title}</h3>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                {ind.tags.map((t) => (
                  <span key={t} style={{ fontSize: 10, fontFamily: 'DM Sans', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: ind.color, background: ind.color + '15', borderRadius: 999, padding: '2px 9px' }}>{t}</span>
                ))}
              </div>
              <p style={{ fontFamily: 'DM Sans', fontSize: 13, lineHeight: 1.65, color: '#4A5568' }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
