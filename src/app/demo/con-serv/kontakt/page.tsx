export const metadata = {
  title: "Kontakt | Con-Serv AS",
  robots: "noindex",
};

export default function Kontakt() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        style={{
          background: "#1e2326",
          minHeight: "35vh",
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
            KONTAKT OSS
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Vi svarer raskt og gir deg et uforpliktende tilbud.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: info */}
            <div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#1e2326",
                  marginBottom: 28,
                }}
              >
                FINN OSS
              </h2>

              {[
                {
                  label: "Adresse",
                  value: "Osterskogen 36, 4879 Grimstad",
                  href: null,
                },
                {
                  label: "Telefon (Rikki Aanonsen, Daglig leder)",
                  value: "930 00 696",
                  href: "tel:93000696",
                },
                {
                  label: "E-post",
                  value: "rikki.aanonsen@con-serv.no",
                  href: "mailto:rikki.aanonsen@con-serv.no",
                },
                {
                  label: "Anlegg (Odd Jorgen Haugen)",
                  value: "952 59 706",
                  href: "tel:95259706",
                },
                {
                  label: "Apningstider",
                  value: "Man-Fre: 07:00-16:00",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: 20 }}>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#94a3b8",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "1rem",
                        color: "#e07b00",
                        textDecoration: "none",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "1rem",
                        color: "#1e2326",
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              ))}

              <iframe
                src="https://maps.google.com/maps?q=%C3%98sterskogen+36,+4879+Grimstad&output=embed"
                title="Con-Serv kart"
                style={{
                  width: "100%",
                  height: 256,
                  borderRadius: "8px",
                  border: 0,
                  marginTop: 16,
                  display: "block",
                }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Right: form */}
            <div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#1e2326",
                  marginBottom: 28,
                }}
              >
                SEND MELDING
              </h2>
              <form action="#">
                {[
                  { label: "Navn", type: "text", placeholder: "Ditt navn" },
                  { label: "E-post", type: "email", placeholder: "din@epost.no" },
                  { label: "Telefon", type: "text", placeholder: "900 00 000" },
                ].map((field) => (
                  <div key={field.label} style={{ marginBottom: 16 }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        color: "#1e2326",
                        marginBottom: 6,
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        border: "1px solid #cbd5e1",
                        borderRadius: "4px",
                        padding: "12px 16px",
                        fontSize: "0.9rem",
                        fontFamily: "'Barlow', sans-serif",
                        outline: "none",
                        color: "#1e2326",
                      }}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                      color: "#1e2326",
                      marginBottom: 6,
                    }}
                  >
                    Melding
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Beskriv oppdraget ditt..."
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      border: "1px solid #cbd5e1",
                      borderRadius: "4px",
                      padding: "12px 16px",
                      fontSize: "0.9rem",
                      fontFamily: "'Barlow', sans-serif",
                      outline: "none",
                      color: "#1e2326",
                      resize: "vertical",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#e07b00",
                    color: "#fff",
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    padding: "14px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: 12,
                  }}
                >
                  Send melding
                </button>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.8rem",
                    color: "#94a3b8",
                    textAlign: "center",
                  }}
                >
                  Vi svarer normalt innen en arbeidsdag.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM STRIP */}
      <section style={{ background: "#1e2326", padding: "40px 0" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ textAlign: "center" }}
          >
            {[
              { label: "Adresse", value: "Osterskogen 36, 4879 Grimstad" },
              { label: "Telefon", value: "930 00 696" },
              { label: "Org.nr", value: "123 456 789" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
