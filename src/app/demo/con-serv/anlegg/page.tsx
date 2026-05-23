export const metadata = {
  title: "Anleggstjenester | Con-Serv AS",
  robots: "noindex",
};

const ctaBanner = (
  <section style={{ background: "#1e2326", padding: "64px 0" }}>
    <div className="max-w-6xl mx-auto px-4 md:px-8" style={{ textAlign: "center" }}>
      <h2
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          color: "#fff",
          marginBottom: 12,
        }}
      >
        TA KONTAKT FOR TILBUD
      </h2>
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.7)",
          marginBottom: 28,
        }}
      >
        Vi tar oppdrag av alle størrelser, for industri og private kunder.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href="tel:93000696"
          style={{
            background: "#e07b00",
            color: "#fff",
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            padding: "14px 28px",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Ring oss: 930 00 696
        </a>
        <a
          href="/demo/con-serv/kontakt"
          style={{
            border: "2px solid #e07b00",
            color: "#e07b00",
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            padding: "14px 28px",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Send en melding
        </a>
      </div>
    </div>
  </section>
);

const services = [
  {
    title: "Gravearbeid",
    desc: "Graving for alle formål, fra kabelgrøfter til fundamenter og vann/avløp.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e07b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M6 20V10l6-6 6 6v10" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
  },
  {
    title: "Sprengning",
    desc: "Kontrollert sprengning utført av erfarne fagfolk med nødvendige godkjenninger.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e07b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Massetransport",
    desc: "Effektiv transport og handtering av masser i forbindelse med anleggsprosjekter.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e07b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Hagearbeid",
    desc: "Planering, opparbeiding og ferdigstilling av utearealer for private og naringsliv.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e07b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function Anlegg() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/demo/con-serv/anlegg-hero.jpg"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", zIndex: 1, padding: "60px 24px" }}>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            ANLEGGSTJENESTER
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Graving, sprengning, massetransport og hagearbeid for industri og private kunder.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  color: "#1e2326",
                  marginBottom: 20,
                  lineHeight: 1.1,
                }}
              >
                EGEN ANLEGGSAVDELING
              </h2>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "1rem",
                  color: "#64748b",
                  lineHeight: 1.7,
                }}
              >
                Con-Serv har en dedikert anleggsavdeling som utfører oppdrag av alle størrelser. Vi jobber for industrikunder og private, og tar på oss alt fra enkle graveoppdrag til større anleggsprosjekter med sprengning og massetransport.
              </p>
            </div>
            <div>
              <img
                src="/demo/con-serv/anlegg.jpg"
                alt="Con-Serv anleggsarbeid"
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ background: "#f8fafc", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: "#1e2326",
              }}
            >
              VÅRE TJENESTER
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  padding: "32px",
                }}
              >
                <div style={{ marginBottom: 16 }}>{service.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    textTransform: "uppercase",
                    color: "#1e2326",
                    marginBottom: 10,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.95rem",
                    color: "#64748b",
                    lineHeight: 1.6,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {ctaBanner}
    </>
  );
}
