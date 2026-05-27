import React from 'react'

const Footer = ({ onNav }) => (
  <footer style={{ background: '#0C101A', padding: '56px 32px 32px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">
        {/* Brand */}
        <div>
          <button onClick={() => onNav('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: 16, display: 'block' }}>
            <svg width="148" height="40" viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 A13 13 0 0 1 10 36 Z" fill="rgba(255,255,255,0.18)" />
              <path d="M26 4 A13 13 0 0 0 26 30 Z" fill="#20C997" />
              <text x="42" y="25" fontFamily="Playfair Display, serif" fontSize="19" fontWeight="700" fill="white" letterSpacing="-0.5">Inno<tspan fill="#20C997">Soul</tspan></text>
              <text x="43" y="37" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="500" fill="rgba(255,255,255,0.35)" letterSpacing="1.6">CONSULTING</text>
            </svg>
          </button>
          <p style={{ fontFamily: 'DM Sans', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280 }}>
            Spezialisierte Fördermittelberatung für Life Science, MedTech und Biotechnologie. Hamburg, Deutschland.
          </p>
          <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#20C997', marginTop: 14 }}>hello@innosoul.consulting</p>
        </div>

        {/* Links */}
        <div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Leistungen</div>
          {['Förder-Strategie', 'Antragstellung', 'Projektbegleitung', 'EIC / Eurostars', 'Workshop'].map((l) => (
            <button key={l} onClick={() => onNav('leistungen')} style={{ display: 'block', background: 'none', border: 'none', fontFamily: 'DM Sans', fontSize: 14, color: 'rgba(255,255,255,0.55)', cursor: 'pointer', padding: '4px 0', textAlign: 'left' }}>{l}</button>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Unternehmen</div>
          {[
            { label: 'Über uns', id: 'ueber-uns' },
            { label: 'Referenzen', id: 'referenzen' },
            { label: 'Branchen', id: 'branchen' },
            { label: 'Kontakt', id: 'kontakt' },
          ].map((l) => (
            <button key={l.id} onClick={() => onNav(l.id)} style={{ display: 'block', background: 'none', border: 'none', fontFamily: 'DM Sans', fontSize: 14, color: 'rgba(255,255,255,0.55)', cursor: 'pointer', padding: '4px 0', textAlign: 'left' }}>{l.label}</button>
          ))}
          <button style={{ display: 'block', background: 'none', border: 'none', fontFamily: 'DM Sans', fontSize: 14, color: 'rgba(255,255,255,0.55)', cursor: 'pointer', padding: '4px 0', textAlign: 'left' }}>Impressum</button>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 InnoSoul Consulting GmbH i.G. · Hamburg</p>
        <div style={{ display: 'flex', gap: 16 }}>
          {['Datenschutz', 'Impressum', 'AGB'].map((l) => (
            <button key={l} style={{ background: 'none', border: 'none', fontFamily: 'DM Sans', fontSize: 12, color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }
    `}</style>
  </footer>
)

export default Footer
