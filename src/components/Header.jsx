import React, { useState, useEffect } from 'react'

const Header = ({ currentSection, onNav }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { id: 'leistungen', label: 'Leistungen' },
    { id: 'branchen', label: 'Branchen' },
    { id: 'ueber-uns', label: 'Über uns' },
    { id: 'referenzen', label: 'Referenzen' },
  ]

  const handleNav = (id) => {
    onNav(id)
    setMobileOpen(false)
  }

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
        <button onClick={() => handleNav('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <svg width="148" height="40" viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 A13 13 0 0 1 10 36 Z" fill="rgba(255,255,255,0.18)" />
            <path d="M26 4 A13 13 0 0 0 26 30 Z" fill="#20C997" />
            <text x="42" y="25" fontFamily="Playfair Display, serif" fontSize="19" fontWeight="700" fill="white" letterSpacing="-0.5">Inno<tspan fill="#20C997">Soul</tspan></text>
            <text x="43" y="37" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="500" fill="rgba(255,255,255,0.35)" letterSpacing="1.6">CONSULTING</text>
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNav(link.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: currentSection === link.id ? '#20C997' : 'rgba(255,255,255,0.8)',
              fontSize: 14, fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
              padding: '6px 14px', borderRadius: 6, transition: 'color 150ms',
            }}>{link.label}</button>
          ))}
          <button onClick={() => handleNav('kontakt')} style={{
            marginLeft: 8, background: '#109870', color: 'white', border: 'none',
            borderRadius: 8, padding: '9px 20px', fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600, fontSize: 14, cursor: 'pointer', transition: 'background 150ms',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#087F5B')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#109870')}>
            Erstgespräch vereinbaren
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          className="mobile-menu-btn"
          aria-label="Menü öffnen"
        >
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: '#1A2238', borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 32px 24px',
        }}>
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNav(link.id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              color: currentSection === link.id ? '#20C997' : 'rgba(255,255,255,0.8)',
              fontSize: 16, fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
              padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>{link.label}</button>
          ))}
          <button onClick={() => handleNav('kontakt')} style={{
            marginTop: 16, width: '100%', background: '#109870', color: 'white', border: 'none',
            borderRadius: 8, padding: '12px', fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600, fontSize: 15, cursor: 'pointer',
          }}>
            Erstgespräch vereinbaren
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

export default Header
