export const metadata = {
  title: "Om Con-Serv AS | Stalarbeider Grimstad",
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
        Vi tar oppdrag av alle storrelser, for industri og private kunder.
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

export default function OmOss() {
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
          src="/demo/con-serv/sveising.jpg"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.60)" }} />
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
            OM CON-SERV AS
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Grimstads foretrukne leverandor av stalkonstruksjoner og anleggsarbeid siden 2009.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/demo/con-serv/lokaler.jpg"
                alt="Con-Serv lokaler"
                style={{
                  width: "100%",
                  height: 360,
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  color: "#1e2326",
                  marginBottom: 24,
                  lineHeight: 1.1,
                }}
              >
                HISTORIEN VAR
              </h2>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "1rem",
                  color: "#64748b",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                Con-Serv ble grunnlagt i 2009. I starten leide vi produksjonslokaler, men sommeren 2011 bygde vi nye, tilpassede lokaler i Osterskogen i Grimstad.
              </p>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "1rem",
                  color: "#64748b",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                Lokalene bestar av en stor sveisehall, en hall for arbeid med rustfritt og aluminium, og et eget omrade for sandblas og lakkering.
              </p>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "1rem",
                  color: "#64748b",
                  lineHeight: 1.7,
                }}
              >
                I dag er vi 10 ansatte med fagkompetanse innen sveising, mekanikk og maskinarbeid. Vi tar oppdrag for industri og privat kunder, store som sma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section style={{ background: "#f8fafc", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div style={{ maxWidth: 672, margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: "#1e2326",
                marginBottom: 32,
              }}
            >
              SERTIFISERT KVALITET
            </h2>
            <div
              style={{
                background: "#fff",
                border: "2px solid #e07b00",
                borderRadius: "12px",
                padding: "40px 32px",
                marginBottom: 32,
              }}
            >
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "3rem",
                  color: "#e07b00",
                  letterSpacing: "0.06em",
                  marginBottom: 8,
                }}
              >
                NS-1090 EXC 2
              </p>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "1rem",
                  color: "#64748b",
                  lineHeight: 1.7,
                }}
              >
                Con-Serv er sertifisert etter NS-1090 "Komponenter for stalkonstruksjoner" utforelsesklasse EXC 2. Dette sikrer dokumentert kvalitet i alle faser av prosjektet, fra produksjon til ferdig montert produkt.
              </p>
            </div>
            <img
              src="https://placehold.co/300x400/e2e8f0/94a3b8?text=NS-1090+Sertifikat"
              alt="NS-1090 Sertifikat"
              style={{
                maxWidth: 240,
                width: "100%",
                borderRadius: "8px",
                margin: "0 auto",
                display: "block",
                boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: "#1e2326", padding: "48px 0" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
            style={{ textAlign: "center" }}
          >
            {[
              { stat: "2009", label: "Etablert" },
              { stat: "10+", label: "Fagfolk" },
              { stat: "NS-1090", label: "Sertifisert" },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: "32px 24px",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "3.5rem",
                    color: "#e07b00",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {item.label}
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
