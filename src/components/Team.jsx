import React from 'react'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

const TeamCard = ({ name, role, company, bio, initials, accentColor, photo }) => (
  <div style={{
    background: 'white', borderRadius: 16, overflow: 'hidden',
    boxShadow: '0 2px 16px rgba(26,34,56,0.08)',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{
      height: 280, position: 'relative', overflow: 'hidden',
      background: `linear-gradient(135deg, #1A2238 0%, ${accentColor}33 100%)`,
    }}>
      {photo ? (
        <img src={photo} alt={name} style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top',
          display: 'block',
        }} />
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 48, fontWeight: 700, color: 'white' }}>{initials}</span>
        </div>
      )}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
        background: 'linear-gradient(to top, rgba(26,34,56,0.55), transparent)',
      }} />
    </div>
    <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div>
        <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 20, fontWeight: 600, color: '#1A2238', marginBottom: 4 }}>{name}</h3>
        <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 500, color: accentColor }}>{role}</p>
        {company && <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: '#A0AEC0', marginTop: 2 }}>{company}</p>}
      </div>
      <div style={{ background: '#F7FAFC', borderRadius: 8, borderLeft: `3px solid ${accentColor}`, padding: '12px 14px 12px 16px', margin: '6px 0' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, lineHeight: 1.7, color: '#4A5568' }}>"{bio}"</p>
      </div>
    </div>
  </div>
)

const Team = () => (
  <section
    id="ueber-uns"
    style={{ background: "#F7FAFC", padding: "96px 32px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div
          style={{
            fontSize: 11,
            fontFamily: "DM Sans",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#20C997",
            marginBottom: 12,
          }}>
          Über uns
        </div>
        <h2
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 600,
            color: "#1A2238",
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
          Zwei Perspektiven. Eine Mission.
        </h2>
        <p
          style={{
            fontFamily: "DM Sans",
            fontSize: 17,
            color: "#4A5568",
            lineHeight: 1.65,
            maxWidth: 560,
            margin: "0 auto",
          }}>
          Wir kombinieren Produktmanagement-Background mit operativer
          MedTech-Erfahrung – für Beratung, die die Sprache Ihrer Technologie
          spricht.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 28,
          maxWidth: 800,
          margin: "0 auto",
        }}>
        <TeamCard
          name="Magdalena Müller"
          role="Co-Founderin & Beraterin"
          company="11 Jahre Produktmanagement · Fintech, Digital Identity"
          bio="Ich komme aus der Produktwelt – und weiß deshalb, wie man Innovationen so beschreibt, dass Fördergeber sie verstehen. Mein Antrieb: Unternehmen, die echte Wirkung erzielen wollen, auf dem Weg zur Finanzierung begleiten."
          initials="MM"
          accentColor="#20C997"
          photo={asset("magda.png")}
        />
        <TeamCard
          name="Nicole Klingen"
          role="Co-Founderin & Beraterin"
          company="Geschäftsführerin Kluba Medical GmbH"
          bio="Als Unternehmerin im MedTech-Bereich weiß ich, wie viel Energie in ein Forschungsprojekt fließt – und wie wichtig die richtige Finanzierung ist, um es auf die Straße zu bringen."
          initials="NK"
          accentColor="#805AD5"
          photo={asset("nicole.jpg")}
        />
      </div>

      {/* Values strip */}
      <div
        style={{
          marginTop: 56,
          display: "flex",
          gap: 0,
          background: "#1A2238",
          borderRadius: 16,
          overflow: "hidden",
          flexWrap: "wrap",
        }}>
        {[
          { label: "Direkt", desc: "Keine Phrasen. Klare Aussagen." },
          { label: "Kompetent", desc: "Expertise ohne Arroganz." },
          { label: "Empathisch", desc: "Echtes Interesse an Ihrem Erfolg." },
          {
            label: "Spezialisiert",
            desc: "Life Science, MedTech, Biotech – und sonst nichts.",
          },
        ].map((v, i, arr) => (
          <div
            key={i}
            style={{
              flex: 1,
              minWidth: 140,
              padding: "24px 20px",
              textAlign: "center",
              borderRight:
                i < arr.length - 1
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "none",
            }}>
            <div
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 17,
                fontWeight: 600,
                color: "white",
                marginBottom: 6,
              }}>
              {v.label}
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.5,
              }}>
              {v.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team
