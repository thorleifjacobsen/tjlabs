import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eikaas Ved — Kvalitetsved i Agder",
  description:
    "Tørr bjørkeved og eik levert til deg i østre del av Agder. Kappet i 30 cm lengder, klar for peisen.",
  robots: { index: false, follow: false },
};

const NAV_LINKS = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Produkt", href: "#priser" },
  { label: "Levering", href: "#levering" },
  { label: "Kontakt", href: "#kontakt" },
];

const PRODUCTS = [
  {
    image: "/demo/eikaas/ved-1000l.jpeg",
    title: "1000l Bjørk",
    description: "1000-liters sekk med ren bjørkeved, kappet i 30 cm lengder.",
    price: "1 400 kr",
    badge: "Populær",
  },
  {
    image: "/demo/eikaas/ved-1000l.jpeg",
    title: "1000l Bjørk / Eik",
    description:
      "1000-liters sekk med bjørk og eik blandet, kappet i 30 cm lengder.",
    price: "1 400 kr",
  },
  {
    image: "/demo/eikaas/ved-1500l.jpeg",
    title: "1500l Bjørk",
    description: "1500-liters sekk med ren bjørkeved, kappet i 30 cm lengder.",
    price: "2 000 kr",
    badge: "Mest for pengene",
  },
  {
    image: "/demo/eikaas/ved-1500l.jpeg",
    title: "1500l Bjørk / Eik",
    description:
      "1500-liters sekk med bjørk og eik blandet, kappet i 30 cm lengder.",
    price: "2 000 kr",
  },
];

export default function EikaasPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: system-ui, -apple-system, sans-serif; background: #fff; color: #1a2e1a; }

        /* NAV */
        .ev-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          background: rgba(20,38,20,0.96);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ev-nav-inner {
          max-width: 1100px; margin: 0 auto;
          padding: 0 1.5rem; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ev-logo {
          color: #d97706; font-weight: 800; font-size: 1.25rem;
          letter-spacing: 0.04em; text-decoration: none;
        }
        .ev-logo:hover { color: #fbbf24; }
        .ev-nav-links {
          display: flex; gap: 2rem; align-items: center;
        }
        .ev-nav-link {
          color: rgba(255,255,255,0.8); text-decoration: none;
          font-size: 0.9375rem; letter-spacing: 0.02em; transition: color 0.15s;
        }
        .ev-nav-link:hover { color: #d97706; }
        .ev-nav-cta {
          background: #d97706; color: #fff;
          padding: 0.5rem 1.25rem; border-radius: 999px;
          text-decoration: none; font-weight: 700; font-size: 0.9rem;
          letter-spacing: 0.02em; transition: background 0.15s, transform 0.15s;
          display: inline-block;
        }
        .ev-nav-cta:hover { background: #b45309; transform: translateY(-1px); }
        @media (max-width: 639px) {
          .ev-nav-links { display: none; }
        }

        /* BUTTONS */
        .ev-btn-primary {
          background: #d97706; color: #fff;
          padding: 0.875rem 2rem; border-radius: 999px;
          text-decoration: none; font-weight: 700; font-size: 1rem;
          letter-spacing: 0.02em; display: inline-block;
          box-shadow: 0 4px 16px rgba(217,119,6,0.35);
          transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
        }
        .ev-btn-primary:hover {
          background: #b45309; transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(217,119,6,0.45);
        }
        .ev-btn-outline {
          background: transparent; color: #fff;
          padding: 0.875rem 2rem; border-radius: 999px;
          text-decoration: none; font-weight: 700; font-size: 1rem;
          letter-spacing: 0.02em; display: inline-block;
          border: 2px solid rgba(255,255,255,0.5);
          transition: border-color 0.15s, color 0.15s, transform 0.15s;
        }
        .ev-btn-outline:hover {
          border-color: #d97706; color: #d97706; transform: translateY(-2px);
        }

        /* HERO */
        .ev-hero {
          min-height: 70vh; background: #1a2e1a;
          position: relative; display: flex; flex-direction: column;
          justify-content: center; overflow: hidden; padding-top: 64px;
        }
        .ev-hero-bg-img {
          position: absolute; inset: 0; z-index: 0;
          width: 100%; height: 100%; object-fit: cover;
          object-position: center; opacity: 0.22;
        }
        .ev-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(20,38,20,0.97) 0%, rgba(20,38,20,0.75) 60%, rgba(20,38,20,0.55) 100%);
        }
        .ev-hero-glow {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            radial-gradient(ellipse at 30% 50%, rgba(217,119,6,0.07) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%);
        }
        .ev-hero-content {
          position: relative; z-index: 1;
          max-width: 1100px; margin: 0 auto;
          padding: 5rem 1.5rem 3rem; width: 100%;
        }
        .ev-hero-inner { max-width: 620px; }
        .ev-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(217,119,6,0.15);
          border: 1px solid rgba(217,119,6,0.3);
          border-radius: 999px; padding: 0.3rem 1rem; margin-bottom: 1.5rem;
        }
        .ev-eyebrow-text {
          color: #fbbf24; font-size: 0.8125rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .ev-h1 {
          font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 900;
          color: #fff; line-height: 1.1; letter-spacing: -0.01em;
          margin-bottom: 1.25rem;
        }
        .ev-h1-accent { color: #d97706; }
        .ev-hero-sub {
          font-size: 1.125rem; color: rgba(255,255,255,0.72);
          line-height: 1.7; max-width: 500px; margin-bottom: 2.25rem;
        }
        .ev-cta-row { display: flex; gap: 1rem; flex-wrap: wrap; }
        .ev-trust-strip {
          margin-top: 4rem; padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex; gap: 2rem; flex-wrap: wrap;
        }
        .ev-trust-item {
          display: flex; align-items: center; gap: 0.5rem;
          color: rgba(255,255,255,0.65); font-size: 0.9rem; letter-spacing: 0.02em;
        }

        /* SECTION SHARED */
        .ev-section-cream { background: #faf7f2; }
        .ev-section-white { background: #fff; }
        .ev-section-dark { background: #1a2e1a; position: relative; overflow: hidden; }
        .ev-section-pad { padding: 5rem 1.5rem; }
        @media (max-width: 639px) { .ev-section-pad { padding: 3rem 1.25rem; } }
        .ev-container { max-width: 1100px; margin: 0 auto; }
        .ev-divider {
          display: inline-block; width: 40px; height: 3px;
          background: #d97706; border-radius: 2px; margin-bottom: 1.25rem;
        }
        .ev-h2 {
          font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 800;
          color: #1a2e1a; letter-spacing: -0.01em; margin-bottom: 1rem;
        }
        .ev-h2-white { color: #fff; }
        .ev-section-header { text-align: center; margin-bottom: 3rem; }

        /* OM OSS */
        .ev-om-inner {
          display: flex; flex-direction: column; align-items: center; gap: 3rem;
        }
        .ev-om-text { max-width: 680px; text-align: center; }
        .ev-body-muted { font-size: 1.0625rem; color: #4b5563; line-height: 1.75; }
        .ev-trust-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem; width: 100%; max-width: 780px;
        }
        .ev-trust-card {
          background: #fff; border-radius: 0.75rem; padding: 1.5rem;
          text-align: center; border: 1px solid #f3ece0;
          box-shadow: 0 2px 12px rgba(180,120,40,0.07);
        }
        .ev-trust-card-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .ev-trust-card-title {
          font-size: 1rem; font-weight: 700; color: #1a2e1a;
          letter-spacing: 0.01em; margin-bottom: 0.5rem;
        }
        .ev-trust-card-desc { font-size: 0.875rem; color: #6b7280; line-height: 1.6; }

        /* PRODUCTS */
        .ev-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem; margin-bottom: 2rem;
        }
        .ev-product-card {
          background: #faf7f2; border-radius: 0.75rem;
          border: 1px solid #fde68a;
          box-shadow: 0 4px 24px rgba(180,120,40,0.10);
          overflow: hidden; display: flex; flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ev-product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(180,120,40,0.18);
        }
        .ev-product-img-wrap { position: relative; }
        .ev-product-img {
          width: 100%; height: 200px; object-fit: cover; display: block;
        }
        .ev-product-img-fallback {
          width: 100%; height: 200px; background: #f1f5f9;
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8; font-size: 0.875rem;
        }
        .ev-badge {
          position: absolute; top: 12px; left: 12px;
          background: #d97706; color: #fff; font-size: 0.75rem;
          font-weight: 700; letter-spacing: 0.05em;
          border-radius: 999px; padding: 3px 12px; text-transform: uppercase;
        }
        .ev-product-body {
          padding: 1.25rem 1.5rem 1.5rem; flex: 1;
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .ev-product-title {
          font-size: 1.125rem; font-weight: 700; color: #1a2e1a; letter-spacing: 0.02em;
        }
        .ev-product-desc { font-size: 0.9375rem; color: #4b5563; line-height: 1.6; flex: 1; }
        .ev-price-row {
          margin-top: 0.75rem; display: flex; align-items: baseline; gap: 0.25rem;
        }
        .ev-price { font-size: 1.5rem; font-weight: 800; color: #d97706; letter-spacing: -0.01em; }
        .ev-price-unit { font-size: 0.875rem; color: #9ca3af; }
        .ev-info-box {
          background: #fffbeb; border: 1px solid #fde68a;
          border-radius: 0.75rem; padding: 1.125rem 1.5rem;
          display: flex; gap: 0.75rem; align-items: flex-start;
          max-width: 780px; margin: 0 auto;
        }
        .ev-info-box-text { font-size: 0.9375rem; color: #92400e; line-height: 1.65; }
        .ev-priser-h2-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .ev-priser-underline {
          width: 60px; height: 3px; background: #d97706; border-radius: 2px; display: block;
        }

        /* LEVERING */
        .ev-levering-glow {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(ellipse at 80% 50%, rgba(217,119,6,0.06) 0%, transparent 60%);
        }
        .ev-levering-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem; align-items: start; position: relative; z-index: 1;
        }
        .ev-levering-text { font-size: 1.0625rem; color: rgba(255,255,255,0.78); line-height: 1.75; margin-bottom: 1.5rem; }
        .ev-area-box {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 1rem; padding: 2rem;
          display: flex; flex-direction: column; gap: 1rem;
        }
        .ev-area-box-head { display: flex; align-items: center; gap: 0.75rem; }
        .ev-area-icon {
          width: 44px; height: 44px;
          background: rgba(217,119,6,0.18); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.375rem; flex-shrink: 0;
        }
        .ev-area-title { color: #fff; font-weight: 700; font-size: 1.0625rem; letter-spacing: 0.01em; }
        .ev-area-desc {
          color: rgba(255,255,255,0.72); font-size: 0.9375rem;
          line-height: 1.7; padding-left: 3.25rem;
        }

        /* KONTAKT */
        .ev-kontakt-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem; align-items: start;
        }
        .ev-contact-intro { color: #4b5563; font-size: 1rem; line-height: 1.7; margin-bottom: 1.25rem; }
        .ev-contact-cards { display: flex; flex-direction: column; gap: 1rem; }
        .ev-contact-card {
          display: flex; align-items: center; gap: 1rem;
          background: #fff; border-radius: 0.75rem;
          padding: 1rem 1.25rem; border: 1px solid #f3ece0;
          box-shadow: 0 2px 8px rgba(180,120,40,0.06);
        }
        .ev-contact-card-icon {
          width: 40px; height: 40px; background: #fffbeb; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.125rem; flex-shrink: 0;
        }
        .ev-contact-label {
          font-size: 0.75rem; color: #9ca3af; letter-spacing: 0.06em;
          text-transform: uppercase; margin-bottom: 2px; font-weight: 600;
        }
        .ev-contact-link {
          color: #1a2e1a; text-decoration: none; font-weight: 600;
          font-size: 1rem; transition: color 0.15s;
        }
        .ev-contact-link:hover { color: #d97706; }
        .ev-form-box {
          background: #fff; border-radius: 1rem; padding: 2rem;
          border: 1px solid #f3ece0;
          box-shadow: 0 4px 20px rgba(180,120,40,0.08);
        }
        .ev-form-title {
          font-size: 1.125rem; font-weight: 700; color: #1a2e1a;
          letter-spacing: 0.01em; margin-bottom: 1.5rem;
        }
        .ev-form { display: flex; flex-direction: column; gap: 1rem; }
        .ev-field { display: flex; flex-direction: column; gap: 0.375rem; }
        .ev-label { font-size: 0.875rem; font-weight: 600; color: #374151; letter-spacing: 0.01em; }
        .ev-input, .ev-textarea {
          padding: 0.75rem 1rem; border-radius: 0.5rem;
          border: 1px solid #e5e7eb; font-size: 1rem; color: #1a2e1a;
          outline: none; font-family: system-ui, -apple-system, sans-serif;
          background: #fafafa; transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
          width: 100%;
        }
        .ev-input:focus, .ev-textarea:focus {
          border-color: #d97706;
          box-shadow: 0 0 0 3px rgba(217,119,6,0.12);
          background: #fff;
        }
        .ev-textarea { resize: vertical; }
        .ev-submit {
          margin-top: 0.5rem; width: 100%;
          background: #d97706; color: #fff; border: none;
          padding: 0.9375rem; border-radius: 0.5rem;
          font-weight: 700; font-size: 1rem; letter-spacing: 0.02em;
          cursor: pointer; font-family: system-ui, -apple-system, sans-serif;
          box-shadow: 0 4px 16px rgba(217,119,6,0.25);
          transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
        }
        .ev-submit:hover {
          background: #b45309; transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(217,119,6,0.35);
        }

        /* FOOTER */
        .ev-footer { background: #1a1a1a; }
        .ev-footer-inner {
          max-width: 1100px; margin: 0 auto;
          padding: 3rem 1.5rem 1.5rem;
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2.5rem;
        }
        .ev-footer-brand {
          color: #d97706; font-weight: 800; font-size: 1.25rem;
          letter-spacing: 0.04em; margin-bottom: 0.75rem;
        }
        .ev-footer-info { display: flex; flex-direction: column; gap: 0.375rem; }
        .ev-footer-info-line { color: rgba(255,255,255,0.45); font-size: 0.9rem; }
        .ev-footer-nav-label {
          color: rgba(255,255,255,0.55); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem;
        }
        .ev-footer-links { display: flex; flex-direction: column; gap: 0.625rem; }
        .ev-footer-link {
          color: rgba(255,255,255,0.55); text-decoration: none;
          font-size: 0.9375rem; transition: color 0.15s;
        }
        .ev-footer-link:hover { color: #d97706; }
        .ev-footer-bar {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 1.25rem 1.5rem; text-align: center;
        }
        .ev-footer-copy { color: rgba(255,255,255,0.3); font-size: 0.875rem; }
      `}</style>

      {/* NAV */}
      <nav className="ev-nav">
        <div className="ev-nav-inner">
          <a href="#" className="ev-logo">Eikaas Ved</a>
          <div className="ev-nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="ev-nav-link">{l.label}</a>
            ))}
            <a href="tel:90747375" className="ev-nav-cta">Ring oss</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="ev-hero">
          <img
            src="/demo/eikaas/ved-1500l.jpeg"
            alt=""
            aria-hidden="true"
            className="ev-hero-bg-img"
          />
          <div className="ev-hero-overlay" />
          <div className="ev-hero-glow" />
          <div className="ev-hero-content">
            <div className="ev-hero-inner">
              <div className="ev-eyebrow">
                <span>🔥</span>
                <span className="ev-eyebrow-text">Lokal vedprodusent i Agder</span>
              </div>
              <h1 className="ev-h1">
                Kvalitetsved
                <br />
                <span className="ev-h1-accent">levert til deg</span>
              </h1>
              <p className="ev-hero-sub">
                Tørr bjørkeved og eik kappet i 30 cm lengder, klar for peisen.
                Levering i østre del av Agder.
              </p>
              <div className="ev-cta-row">
                <a href="#priser" className="ev-btn-primary">Se priser</a>
                <a href="tel:90747375" className="ev-btn-outline">Ring oss</a>
              </div>
            </div>
            <div className="ev-trust-strip">
              {[
                { icon: "🔥", text: "Lokal produksjon" },
                { icon: "🌿", text: "Tørr og klar ved" },
                { icon: "🚚", text: "Levering etter avtale" },
              ].map((item) => (
                <div key={item.text} className="ev-trust-item">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OM OSS */}
        <section id="om-oss" className="ev-section-cream ev-section-pad">
          <div className="ev-container">
            <div className="ev-om-inner">
              <div className="ev-om-text">
                <div className="ev-section-header">
                  <div className="ev-divider" />
                  <h2 className="ev-h2">Om Eikaas Ved</h2>
                </div>
                <p className="ev-body-muted">
                  Eikaas Ved er en liten lokal vedprodusent i Agder. Vi selger tørr
                  bjørke- og eikeved i store sekker, kappet i passende 30 cm
                  lengder. Ta kontakt for bestilling eller spørsmål, vi finner en
                  løsning som passer deg.
                </p>
              </div>
              <div className="ev-trust-cards">
                {[
                  { icon: "🌲", title: "Norsk bjørk og eik", desc: "Lokalt hogget og tørket ved av høy kvalitet" },
                  { icon: "📦", title: "1000l og 1500l sekker", desc: "Store sekker som monner til peisingssesong" },
                  { icon: "🚚", title: "Levering i Agder", desc: "Levering etter avtale i østre Agder" },
                ].map((item) => (
                  <div key={item.title} className="ev-trust-card">
                    <div className="ev-trust-card-icon">{item.icon}</div>
                    <div className="ev-trust-card-title">{item.title}</div>
                    <div className="ev-trust-card-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRISER */}
        <section id="priser" className="ev-section-white ev-section-pad">
          <div className="ev-container">
            <div className="ev-section-header">
              <div className="ev-divider" />
              <div className="ev-priser-h2-wrap">
                <h2 className="ev-h2">Våre produkt</h2>
                <span className="ev-priser-underline" />
              </div>
              <p style={{ marginTop: "1.25rem", fontSize: "1rem", color: "#6b7280", letterSpacing: "0.01em" }}>
                Alle sekker er kappet i 30 cm lengder og klare til bruk
              </p>
            </div>
            <div className="ev-products-grid">
              {PRODUCTS.map((p) => (
                <div key={p.title} className="ev-product-card">
                  <div className="ev-product-img-wrap">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="ev-product-img"
                    />
                    {p.badge && <span className="ev-badge">{p.badge}</span>}
                  </div>
                  <div className="ev-product-body">
                    <div className="ev-product-title">{p.title}</div>
                    <div className="ev-product-desc">{p.description}</div>
                    <div className="ev-price-row">
                      <span className="ev-price">{p.price}</span>
                      <span className="ev-price-unit">/ sekk</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ev-info-box">
              <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: "2px" }}>ℹ️</span>
              <p className="ev-info-box-text">
                Sekkene leveres i nottsekk (gjenbrukssekk) eller engangsekk.
                Nottsekken må tømmes ved henting eller levering slik at sekken
                kan returneres, om ikke annet er avtalt.
              </p>
            </div>
          </div>
        </section>

        {/* LEVERING */}
        <section id="levering" className="ev-section-dark ev-section-pad">
          <div className="ev-levering-glow" />
          <div className="ev-container">
            <div className="ev-section-header">
              <div className="ev-divider" />
              <h2 className="ev-h2 ev-h2-white">Levering</h2>
            </div>
            <div className="ev-levering-grid">
              <div>
                <p className="ev-levering-text">
                  Vi leverer hovedsakelig i den østre delen av Agder. Ta kontakt
                  for å avtale levering til din adresse. Henting er også mulig.
                </p>
                <a href="#kontakt" className="ev-btn-primary">Ta kontakt</a>
              </div>
              <div className="ev-area-box">
                <div className="ev-area-box-head">
                  <div className="ev-area-icon">📍</div>
                  <div className="ev-area-title">Leveringsområde</div>
                </div>
                <p className="ev-area-desc">
                  Østre Agder, Arendal, Grimstad, Froland, Risør og omegn
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="ev-section-cream ev-section-pad">
          <div className="ev-container">
            <div className="ev-section-header">
              <div className="ev-divider" />
              <h2 className="ev-h2">Ta kontakt</h2>
            </div>
            <div className="ev-kontakt-grid">
              <div>
                <p className="ev-contact-intro">
                  Har du spørsmål om priser, levering eller bestilling? Ring oss
                  gjerne direkte, eller send en e-post.
                </p>
                <div className="ev-contact-cards">
                  {[
                    { icon: "📞", label: "Telefon", value: "907 47 375", href: "tel:90747375" },
                    { icon: "✉️", label: "E-post", value: "ved@eikaas.net", href: "mailto:ved@eikaas.net" },
                    { icon: "🌐", label: "Nettside", value: "eikaas.net", href: "https://eikaas.net" },
                  ].map((item) => (
                    <div key={item.label} className="ev-contact-card">
                      <div className="ev-contact-card-icon">{item.icon}</div>
                      <div>
                        <div className="ev-contact-label">{item.label}</div>
                        <a href={item.href} className="ev-contact-link">{item.value}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ev-form-box">
                <div className="ev-form-title">Send oss en melding</div>
                <form className="ev-form" action="#" method="post">
                  {[
                    { id: "navn", label: "Navn", type: "text", placeholder: "Ola Nordmann" },
                    { id: "telefon", label: "Telefon", type: "tel", placeholder: "900 00 000" },
                    { id: "epost", label: "E-post", type: "email", placeholder: "ola@eksempel.no" },
                  ].map((field) => (
                    <div key={field.id} className="ev-field">
                      <label htmlFor={field.id} className="ev-label">{field.label}</label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="ev-input"
                      />
                    </div>
                  ))}
                  <div className="ev-field">
                    <label htmlFor="melding" className="ev-label">Melding</label>
                    <textarea
                      id="melding"
                      name="melding"
                      rows={4}
                      placeholder="F.eks. «Ønsker 2 sekker 1500l Bjørk, levering til Arendal»"
                      className="ev-textarea"
                    />
                  </div>
                  <button type="submit" className="ev-submit">Send melding</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="ev-footer">
        <div className="ev-footer-inner">
          <div>
            <div className="ev-footer-brand">Eikaas Ved</div>
            <div className="ev-footer-info">
              <span className="ev-footer-info-line">Østre Agder</span>
              <span className="ev-footer-info-line">Telefon: 907 47 375</span>
              <span className="ev-footer-info-line">ved@eikaas.net</span>
              <span className="ev-footer-info-line">eikaas.net</span>
            </div>
          </div>
          <div>
            <div className="ev-footer-nav-label">Sider</div>
            <div className="ev-footer-links">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="ev-footer-link">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="ev-footer-bar">
          <span className="ev-footer-copy">&copy; 2025 Eikaas Ved</span>
        </div>
      </footer>
    </>
  );
}
