// Header.jsx — InnoSoul sticky navigation
const Header = ({ currentSection, onNav }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { id: 'leistungen', label: 'Leistungen' },
    { id: 'branchen', label: 'Branchen' },
    { id: 'ueber-uns', label: 'Über uns' },
    { id: 'referenzen', label: 'Referenzen' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
      background: scrolled ? 'rgba(26,34,56,0.97)' : '#1A2238',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 250ms ease',
      padding: '0 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => onNav('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <svg width="148" height="40" viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 A13 13 0 0 1 10 36 Z" fill="rgba(255,255,255,0.18)"/>
            <path d="M26 4 A13 13 0 0 0 26 30 Z" fill="#20C997"/>
            <text x="42" y="25" fontFamily="Playfair Display, serif" fontSize="19" fontWeight="700" fill="white" letterSpacing="-0.5">Inno<tspan fill="#20C997">Soul</tspan></text>
            <text x="43" y="37" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="500" fill="rgba(255,255,255,0.35)" letterSpacing="1.6">CONSULTING</text>
          </svg>
        </button>
        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {navLinks.map(link => (
            <button key={link.id} onClick={() => onNav(link.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: currentSection === link.id ? '#20C997' : 'rgba(255,255,255,0.8)',
              fontSize: 14, fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
              padding: '6px 14px', borderRadius: 6, transition: 'color 150ms',
            }}>{link.label}</button>
          ))}
          <button onClick={() => onNav('kontakt')} style={{
            marginLeft: 8, background: '#109870', color: 'white', border: 'none',
            borderRadius: 8, padding: '9px 20px', fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600, fontSize: 14, cursor: 'pointer', transition: 'background 150ms',
          }} onMouseEnter={e => e.target.style.background='#087F5B'}
             onMouseLeave={e => e.target.style.background='#109870'}>
            Erstgespräch vereinbaren
          </button>
        </nav>
      </div>
    </header>
  );
};

Object.assign(window, { Header });
