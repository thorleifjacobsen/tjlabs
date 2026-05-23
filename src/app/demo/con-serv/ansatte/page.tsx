export const metadata = {
  title: "Ansatte | Con-Serv AS",
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

const team = [
  {
    name: "Rikki Aanonsen",
    title: "Daglig leder",
    phone: "930 00 696",
    phoneHref: "93000696",
    email: "rikki.aanonsen@con-serv.no",
  },
  {
    name: "Glenn Aanonsen",
    title: "Styremedlem",
    phone: "997 24 006",
    phoneHref: "99724006",
    email: "glenn.aanonsen@con-serv.no",
  },
  {
    name: "Odd Arne Haugen",
    title: "Styreleder",
    phone: "415 135 13",
    phoneHref: "41513513",
    email: "odd.arne.haugen@con-serv.no",
  },
  {
    name: "Odd Jorgen Haugen",
    title: "Anlegg, Styremedlem",
    phone: "952 59 706",
    phoneHref: "95259706",
    email: null,
  },
];

export default function Ansatte() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        style={{
          background: "#1e2326",
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
        }}
      >
        <div>
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
            MOT OSS
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Fagfolk med hjerte for handverk.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ background: "#f8fafc", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((person) => (
              <div
                key={person.name}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  padding: "28px 20px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://placehold.co/400x400/e2e8f0/94a3b8?text=Bilde+kommer"
                  alt={person.name}
                  style={{
                    width: 112,
                    height: 112,
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto 16px",
                    display: "block",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#1e2326",
                    marginBottom: 4,
                  }}
                >
                  {person.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#e07b00",
                    marginBottom: 16,
                  }}
                >
                  {person.title}
                </p>
                <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", marginBottom: 16 }} />
                <a
                  href={`tel:${person.phoneHref}`}
                  style={{
                    display: "block",
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.875rem",
                    color: "#1e2326",
                    textDecoration: "none",
                    marginBottom: person.email ? 8 : 0,
                  }}
                >
                  {person.phone}
                </a>
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    style={{
                      display: "block",
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.8rem",
                      color: "#64748b",
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                  >
                    {person.email}
                  </a>
                )}
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.9rem",
              color: "#94a3b8",
              marginTop: 36,
            }}
          >
            Vi er totalt 10 fagfolk. Ta kontakt for mer informasjon.
          </p>
        </div>
      </section>

      {ctaBanner}
    </>
  );
}
