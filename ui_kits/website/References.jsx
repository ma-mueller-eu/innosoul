// References.jsx — Erfolgsgeschichten / Referenzen
const RefCard = ({ program, industry, title, description, status }) => {
  const isPlaceholder = status === 'placeholder';
  return (
    <div style={{
      background: isPlaceholder ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.07)',
      border: `1px solid ${isPlaceholder ? 'rgba(255,255,255,0.08)' : 'rgba(32,201,151,0.2)'}`,
      borderRadius: 14, padding: '28px 26px',
    }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, fontFamily: 'DM Sans', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#20C997', background: 'rgba(32,201,151,0.12)', border: '1px solid rgba(32,201,151,0.2)', borderRadius: 999, padding: '3px 10px' }}>{program}</span>
        <span style={{ fontSize: 11, fontFamily: 'DM Sans', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#805AD5', background: 'rgba(128,90,213,0.12)', border: '1px solid rgba(128,90,213,0.2)', borderRadius: 999, padding: '3px 10px' }}>{industry}</span>
      </div>
      {isPlaceholder ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ height: 18, background: 'rgba(255,255,255,0.06)', borderRadius: 4, width: '70%' }} />
          <div style={{ height: 13, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: '95%' }} />
          <div style={{ height: 13, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: '80%' }} />
          <div style={{ marginTop: 8, fontSize: 12, fontFamily: 'DM Sans', color: 'rgba(255,255,255,0.25)', fontStyle: 'normal' }}>Erfolgsgeschichte in Vorbereitung</div>
        </div>
      ) : (
        <>
          <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, fontWeight: 600, color: 'white', lineHeight: 1.3, marginBottom: 10 }}>{title}</h3>
          <p style={{ fontFamily: 'DM Sans', fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.62)' }}>{description}</p>
        </>
      )}
    </div>
  );
};

const References = () => (
  <section id="referenzen" data-screen-label="Referenzen" style={{ background: '#1A2238', padding: '96px 32px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ fontSize: 11, fontFamily: 'DM Sans', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#20C997', marginBottom: 12 }}>Referenzen</div>
        <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 600, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
          Erfolge, die für sich sprechen
        </h2>
        <p style={{ fontFamily: 'DM Sans', fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: 520, margin: '0 auto' }}>
          Anonymisierte Projektstories – konkrete Ergebnisse mit echten Programmen.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        <RefCard
          program="Eurostars"
          industry="Digital Health"
          title="Transnationale Innovationspartnerschaft im Patient Engagement"
          description="Ein deutsches Digital-Health-Unternehmen wollte mit einem europäischen Partner ein transnationales Innovationsprojekt starten. InnoSoul begleitete die gesamte Eurostars-Antragstellung – von der Konsortialstruktur über die Projektbeschreibung bis zur Einreichung."
          status="live"
        />
        <RefCard program="KMU innovativ" industry="MedTech" status="placeholder" />
        <RefCard program="Forschungszulage" industry="Biotech" status="placeholder" />
      </div>
    </div>
  </section>
);

Object.assign(window, { References, RefCard });
