export const metadata = {
  title: "Con-Serv AS | Stalarbeider Grimstad",
  robots: "noindex",
};

const ctaBanner = (
  <section
    style={{ background: "#1e2326", padding: "64px 0" }}
  >
    <div
      className="max-w-6xl mx-auto px-4 md:px-8"
      style={{ textAlign: "center" }}
    >
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

export default function Forside() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/demo/con-serv/hero-bg.jpg"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.50)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "0 24px",
            maxWidth: 800,
          }}
        >
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#e07b00",
              marginBottom: 16,
            }}
          >
            Grimstad, Aust-Agder
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 10vw, 5.5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "#fff",
              lineHeight: 1,
              marginBottom: 24,
            }}
          >
            STÅL SOM HOLDER
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 400,
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 560,
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Vi produserer og monterer stålkonstruksjoner, trapper, rekkverk, porter og spesialcontainere. For industri og private kunder.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/demo/con-serv/produkter"
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
              Se våre produkter
            </a>
            <a
              href="/demo/con-serv/kontakt"
              style={{
                border: "2px solid rgba(255,255,255,0.8)",
                color: "#fff",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "14px 28px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Kontakt oss
            </a>
          </div>
        </div>

        {/* Trust strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#1e2326",
            padding: "16px 24px",
            zIndex: 1,
          }}
        >
          <div
            className="max-w-6xl mx-auto"
            style={{
              display: "flex",
              gap: 32,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07b00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ),
                text: "Sertifisert NS-1090 EXC 2",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07b00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
                text: "Etablert 2009",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07b00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                text: "10 ansatte",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
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
                marginBottom: 12,
              }}
            >
              HVA VI GJØR
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.05rem",
                color: "#64748b",
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Con-Serv har to avdelinger som til sammen dekker alt fra verkstedproduksjon til anleggsarbeid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                img: "/demo/con-serv/verksted.jpg",
                title: "Verkstedtjenester",
                desc: "Stålbygg, trapper, rekkverk, porter, beslag, transportskruer og spesialcontainere. Vi produserer i vanlig stål, rustfritt og aluminium.",
                link: "/demo/con-serv/produkter",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e07b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                ),
              },
              {
                img: "/demo/con-serv/anlegg.jpg",
                title: "Anleggstjenester",
                desc: "Graving, sprengning, massetransport og hagearbeid. Vi tar oppdrag for industri og private kunder i hele regionen.",
                link: "/demo/con-serv/anlegg",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e07b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  background: "#fff",
                  overflow: "hidden",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: 192,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div style={{ padding: "24px" }}>
                  <div style={{ marginBottom: 12 }}>{card.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      textTransform: "uppercase",
                      color: "#1e2326",
                      marginBottom: 10,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.95rem",
                      color: "#64748b",
                      lineHeight: 1.6,
                      marginBottom: 18,
                    }}
                  >
                    {card.desc}
                  </p>
                  <a
                    href={card.link}
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#e07b00",
                      textDecoration: "none",
                    }}
                  >
                    Les mer &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section style={{ background: "#f8fafc", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#e07b00",
                  marginBottom: 12,
                }}
              >
                Om Con-Serv
              </p>
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
                FAGKOMPETANSE OG SERTIFISERT KVALITET
              </h2>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "1rem",
                  color: "#64748b",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Con-Serv ble grunnlagt i 2009 og holder til i Østerskogen i Grimstad. Vi er 10 ansatte med fagkompetanse innen sveising, mekanikk og maskinarbeid. Bedriften er sertifisert etter NS-1090 EXC 2, som sikrer dokumentert kvalitet i hele prosjektfasen.
              </p>
              <a
                href="/demo/con-serv/om-oss"
                style={{
                  background: "#e07b00",
                  color: "#fff",
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "12px 24px",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                Laer mer om oss
              </a>
            </div>
            <div>
              <img
                src="/demo/con-serv/lokaler.jpg"
                alt="Con-Serv lokaler"
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

      {/* PRODUCT HIGHLIGHTS */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
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
              NOEN AV VÅRE PRODUKTER
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Stålbygg", img: "/demo/con-serv/hal.jpg", desc: "Stålkonstruksjoner og komplette stålbygg" },
              { title: "Rekkverk og porter", img: "/demo/con-serv/rekkverk.jpg", desc: "Rekkverk, gjerder og porter i alle utforelser" },
              { title: "Trapper", img: "/demo/con-serv/trapp.jpg", desc: "Innvendige og utvendige trapper" },
              { title: "Isanlegg", img: "/demo/con-serv/isanlegg.jpg", desc: "Produksjon og montering av isanlegg" },
              { title: "Spesialcontainere", img: "/demo/con-serv/container1.jpg", desc: "Egenutviklede containere for mange formål" },
              { title: "Beslag og transport", img: "/demo/con-serv/verksted.jpg", desc: "Presise beslag og transportskruer" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  background: "#fff",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "16px" }}>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "1.15rem",
                      color: "#1e2326",
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.875rem",
                      color: "#64748b",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {ctaBanner}
    </>
  );
}
