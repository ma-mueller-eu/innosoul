// Footer.jsx — InnoSoul footer
const Footer = ({ onNav }) => (
  <footer style={{ background: '#0C101A', padding: '56px 32px 32px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        {/* Brand */}
        <div>
          <img src="../../assets/logo.webp" alt="InnoSoul" style={{ height: 32, filter: 'brightness(0) invert(1)', marginBottom: 16 }} />
          <p style={{ fontFamily: 'DM Sans', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280 }}>
            Spezialisierte Fördermittelberatung für Life Science, MedTech und Biotechnologie. Hamburg, Deutschland.
          </p>
          <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#20C997', marginTop: 14 }}>hello@innosoul.consulting</p>
        </div>
        {/* Links */}
        <div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Leistungen</div>
          {['Förder-Strategie', 'Antragstellung', 'Projektbegleitung', 'EIC / Eurostars', 'Workshop'].map(l => (
            <button key={l} onClick={() => onNav('leistungen')} style={{ display: 'block', background: 'none', border: 'none', fontFamily: 'DM Sans', fontSize: 14, color: 'rgba(255,255,255,0.55)', cursor: 'pointer', padding: '4px 0', textAlign: 'left' }}>{l}</button>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Unternehmen</div>
          {['Über uns', 'Referenzen', 'Branchen', 'Kontakt', 'Impressum'].map(l => (
            <button key={l} style={{ display: 'block', background: 'none', border: 'none', fontFamily: 'DM Sans', fontSize: 14, color: 'rgba(255,255,255,0.55)', cursor: 'pointer', padding: '4px 0', textAlign: 'left' }}>{l}</button>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 InnoSoul Consulting GmbH i.G. · Hamburg</p>
        <div style={{ display: 'flex', gap: 16 }}>
          {['Datenschutz', 'Impressum', 'AGB'].map(l => (
            <button key={l} style={{ background: 'none', border: 'none', fontFamily: 'DM Sans', fontSize: 12, color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
