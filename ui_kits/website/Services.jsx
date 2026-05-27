// Services.jsx — Leistungen section (updated: new card style, #109870 CTA, DM Sans titles)
const ServiceCard = ({ icon, tag, title, description, variant = 'white', accentColor = '#109870' }) => {
  const [hovered, setHovered] = React.useState(false);
  const isWhite = variant === 'white';
  const isDark = variant === 'dark';
  const isTeal = variant === 'teal';

  const bg = isTeal ? '#109870' : isDark ? '#1A2238' : 'white';
  const titleColor = isWhite ? '#1A2238' : 'white';
  const bodyColor = isWhite ? '#4A5568' : isTeal ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.62)';
  const tagColor = isWhite ? accentColor : isTeal ? 'rgba(255,255,255,0.75)' : '#20C997';
  const iconBg = isWhite ? accentColor + '18' : 'rgba(255,255,255,0.12)';
  const iconStroke = isWhite ? accentColor : isTeal ? 'white' : '#20C997';
  const borderTop = isWhite ? `3px solid ${accentColor}` : 'none';
  const border = isWhite ? '1px solid rgba(26,34,56,0.07)' : isDark ? '1px solid rgba(255,255,255,0.06)' : 'none';

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      background: bg,
      borderRadius: 14,
      padding: '28px 22px',
      boxShadow: hovered
        ? '0 8px 32px rgba(26,34,56,0.14)'
        : '0 1px 4px rgba(26,34,56,0.06), 0 4px 16px rgba(26,34,56,0.07)',
      transform: hovered ? 'translateY(-3px)' : 'none',
      transition: 'all 250ms ease',
      display: 'flex', flexDirection: 'column', gap: 12,
      border,
      borderTop,
    }}>
      <div style={{
        width: 42, height: 42, borderRadius: 10,
        background: iconBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <div style={{ fontSize: 10, fontFamily: 'DM Sans, sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tagColor }}>{tag}</div>
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 700, lineHeight: 1.3, color: titleColor }}>{title}</div>
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, lineHeight: 1.65, color: bodyColor }}>{description}</div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      tag: 'Förder-Strategie',
      title: 'Programmauswahl & Strategie',
      description: 'Analyse der Unternehmens- und Projektsituation – Empfehlung der optimalen Förderinstrumente für Ihr Vorhaben.',
      icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
      variant: 'white',
    },
    {
      tag: 'Full-Service',
      title: 'Antragstellung & Einreichung',
      description: 'Von der Projektskizze über die Kostenkalkulation bis zur vollständigen Einreichung – wir übernehmen den gesamten Prozess.',
      icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
      variant: 'dark',
    },
    {
      tag: 'Projektbegleitung',
      title: 'Abwicklung & Berichtswesen',
      description: 'Zwischenberichte, Verwendungsnachweise, Kommunikation mit Förderbehörden: DLR, BSFZ, EIC und mehr.',
      icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
      variant: 'white',
      accentColor: '#805AD5',
    },
    {
      tag: 'EU-Programme',
      title: 'EIC Accelerator & Eurostars',
      description: 'Spezialisierter Support für hochkompetitive EU-Programme: Interview-Vorbereitung, Pitch-Coaching, Business Plan.',
      icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
      variant: 'teal',
    },
    {
      tag: 'Workshop',
      title: 'Strategie & Innovations-Workshop',
      description: 'Für Unternehmen, die ihre Innovationsstrategie und Fördereignung zunächst intern klären wollen.',
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
      variant: 'white',
    },
  ];

  return (
    <section id="leistungen" data-screen-label="Leistungen" style={{ background: '#F0F4F8', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontFamily: 'DM Sans', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#109870', marginBottom: 12 }}>Leistungen</div>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 600, color: '#1A2238', lineHeight: 1.2, marginBottom: 16 }}>
            Was wir für Sie tun
          </h2>
          <p style={{ fontFamily: 'DM Sans', fontSize: 17, color: '#4A5568', lineHeight: 1.65, maxWidth: 560, margin: '0 auto' }}>
            Von der ersten Förderstrategie bis zur erfolgreichen Einreichung – wir begleiten Sie durch den gesamten Prozess.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Services, ServiceCard });
