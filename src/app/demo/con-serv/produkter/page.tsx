export const metadata = {
  title: "Produkter | Con-Serv AS",
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

const products: {
  title: string;
  img: string;
  imgSide: "left" | "right";
  imgRotate?: number;
  text: string;
}[] = [
  {
    title: "STÅLBYGG",
    img: "/demo/con-serv/hal.jpg",
    imgSide: "right",
    text: "Vi sveiser og monterer elementer til stålbygg av alle slag. Alle bygg og konstruksjonsdeler leveres med dokumentasjon og sertifikater i henhold til NS-1090 EXC 2.",
  },
  {
    title: "PORTER, REKKVERK OG GJERDER",
    img: "/demo/con-serv/rekkverk.jpg",
    imgSide: "left",
    text: "Porter i ulike utførelser. Rekkverk for innvendig og utvendig bruk, med eller uten glass, i rustfritt eller vanlig stål. Vi kan galvanisere, lakkere eller pulverlakkere alle deler. Smijernsgjerder og stolper til flettverksgjerder prefabrikkeres på verkstedet.",
  },
  {
    title: "TRAPPER",
    img: "/demo/con-serv/trapp.jpg",
    imgSide: "right",
    text: "Vi produserer innvendige og utvendige trapper som lakkerte ståltrapper med stål- eller eiketrinn. Trinnene kan også flislegges etter kundens ønske.",
  },
  {
    title: "TRANSPORTSKRUER",
    img: "https://placehold.co/800x500/e2e8f0/94a3b8?text=Transportskruer",
    imgSide: "left",
    text: "Transportskruer blir fagmessig fremstilt og balansert før de forlater bedriften.",
  },
  {
    title: "BESLAG",
    img: "/demo/con-serv/verksted.jpg",
    imgSide: "right",
    text: "Bedriften har både platesaks og plateknekke som sikrer stabil kvalitet på alle beslag. Vi knekker rustfritt stål og aluminiumprofiler.",
  },
  {
    title: "ISANLEGG",
    img: "/demo/con-serv/isanlegg.jpg",
    imgSide: "left",
    imgRotate: -90,
    text: "For Frio Nordica produserer og monterer vi isanlegg over hele verden. Det meste av deler blir prefabrikkert på verkstedet før de sendes til lokasjon.",
  },
  {
    title: "SPESIALCONTAINERE",
    img: "/demo/con-serv/container2.jpg",
    imgSide: "right",
    text: "Vår Spesial Container type 3-1 er et referanseprodukt for Con-Serv. En vanlig 20-fots container som slått ut gir ca. 35 m² gulvareal. Brukes til kontor, spiserom eller arbeidsbrakke og settes opp på ca. 20 minutter. Vi produserer også spesialcontainere for offshore og det norske Forsvaret.",
  },
  {
    title: "KIOSKER OG SPESIALBYGG",
    img: "/demo/con-serv/kiosk.jpg",
    imgSide: "left",
    text: "Vi produserer transportable kiosker tilpasset kundens behov. Billigere enn leie over tid og kan flyttes etter behov.",
  },
  {
    title: "STATIV FOR KILDESORTERINGS DUNKER",
    img: "/demo/con-serv/soppel-stativ.jpg",
    imgSide: "right",
    text: "Etter ønske fra privat kunder har vi laget et enkelt og funksjonelt stativ til kildesorterings dunker. Stativet kan utvides til fem eller flere dunker dersom ønskelig.",
  },
];

export default function Produkter() {
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
          src="/demo/con-serv/staal-bg.jpg"
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
            PRODUKTER OG TJENESTER
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
            Vi produserer et vidt spekter av produkter i vanlig stål, rustfritt og aluminium.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <div style={{ background: "#fff" }}>
        {products.map((product, i) => (
          <section
            key={product.title}
            style={{
              borderBottom: i < products.length - 1 ? "1px solid #e2e8f0" : "none",
              padding: "64px 0",
            }}
          >
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                style={{ direction: product.imgSide === "left" ? "rtl" : "ltr" }}
              >
                <div style={{ direction: "ltr" }}>
                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      color: "#1e2326",
                      marginBottom: 16,
                    }}
                  >
                    {product.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "1rem",
                      color: "#64748b",
                      lineHeight: 1.7,
                    }}
                  >
                    {product.text}
                  </p>
                </div>
                <div style={{ direction: "ltr" }}>
                  {product.imgRotate !== undefined ? (
                    <div
                      style={{
                        position: "relative",
                        height: 300,
                        overflow: "hidden",
                        borderRadius: "8px",
                      }}
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          height: "200%",
                          width: "auto",
                          transform: `translate(-50%, -50%) rotate(${product.imgRotate}deg)`,
                        }}
                      />
                    </div>
                  ) : (
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: 300,
                        objectFit: "cover",
                        borderRadius: "8px",
                        display: "block",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {ctaBanner}
    </>
  );
}
