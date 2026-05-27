// Hero.jsx — InnoSoul hero section
const Hero = ({ onNav }) => {
  const programs = ['KMU innovativ', 'ZIM', 'Eurostars', 'EIC Accelerator', 'Horizont Europa'];

  return (
    <section id="hero" data-screen-label="Hero" style={{
      background: 'linear-gradient(160deg, #0C101A 0%, #1A2238 50%, #1E2A45 100%)',
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '120px 32px 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Scientific texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2320C997' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3Ccircle cx='60' cy='0' r='2'/%3E%3Ccircle cx='0' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />
      {/* Glow accent */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%', width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(32,201,151,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 820, textAlign: 'center', position: 'relative' }}>
        {/* Overline */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <span style={{
            background: 'rgba(32,201,151,0.12)', color: '#20C997', borderRadius: 999,
            padding: '5px 16px', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
            border: '1px solid rgba(32,201,151,0.25)',
          }}>
            Life Science · MedTech · Biotech
          </span>
        </div>
        {/* Headline */}
        <h1 style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.02em',
          color: 'white', marginBottom: 24,
        }}>
          Innovationen finanzieren.{' '}
          <span style={{ color: '#20C997' }}>Wirkung entfalten.</span>
        </h1>
        {/* Subline */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 18, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.7)', marginBottom: 40, maxWidth: 640, margin: '0 auto 40px',
        }}>
          InnoSoul Consulting begleitet Life-Science- und MedTech-Unternehmen bei der Beantragung
          von nationalen und europäischen Forschungsförderungen – strategisch, persönlich, erfolgsorientiert.
        </p>
        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 60 }}>
          <button onClick={() => onNav('kontakt')} style={{
            background: '#109870', color: 'white', border: 'none',
            borderRadius: 8, padding: '14px 28px', fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600, fontSize: 16, cursor: 'pointer', transition: 'all 150ms',
          }} onMouseEnter={e => { e.target.style.background='#087F5B'; e.target.style.transform='translateY(-1px)'; }}
             onMouseLeave={e => { e.target.style.background='#109870'; e.target.style.transform='translateY(0)'; }}>
            Erstgespräch vereinbaren
          </button>
          <button onClick={() => onNav('leistungen')} style={{
            background: 'transparent', color: 'rgba(255,255,255,0.85)',
            border: '1.5px solid rgba(255,255,255,0.3)',
            borderRadius: 8, padding: '14px 28px', fontFamily: 'DM Sans, sans-serif',
            fontWeight: 500, fontSize: 16, cursor: 'pointer', transition: 'all 150ms',
          }} onMouseEnter={e => { e.target.style.borderColor='rgba(255,255,255,0.7)'; e.target.style.color='white'; }}
             onMouseLeave={e => { e.target.style.borderColor='rgba(255,255,255,0.3)'; e.target.style.color='rgba(255,255,255,0.85)'; }}>
            Unsere Leistungen
          </button>
        </div>
        {/* Trust signals */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 28 }}>
          <p style={{ fontSize: 11, fontFamily: 'DM Sans', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 14 }}>Förderprogramme</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {programs.map(p => (
              <span key={p} style={{
                fontSize: 12, fontFamily: 'DM Sans', fontWeight: 500,
                color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999,
                padding: '4px 12px',
              }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
