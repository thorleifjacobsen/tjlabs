"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Hjem", href: "/demo/con-serv" },
  { label: "Produkter", href: "/demo/con-serv/produkter" },
  { label: "Anlegg", href: "/demo/con-serv/anlegg" },
  { label: "Om oss", href: "/demo/con-serv/om-oss" },
  { label: "Ansatte", href: "/demo/con-serv/ansatte" },
  { label: "Kontakt", href: "/demo/con-serv/kontakt" },
];

function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="/demo/con-serv" className="flex items-center gap-3">
          <img
            src="/demo/con-serv/logo.png"
            alt="Con-Serv AS"
            style={{ height: 48 }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const next = e.currentTarget.nextSibling as HTMLElement;
              if (next) next.style.display = "block";
            }}
          />
          <span
            style={{
              display: "none",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#1e2326",
            }}
          >
            CON-SERV
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active =
              link.href === "/demo/con-serv"
                ? pathname === "/demo/con-serv"
                : pathname.startsWith(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: active ? "#e07b00" : "#1e2326",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "#e07b00")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = active
                    ? "#e07b00"
                    : "#1e2326")
                }
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="tel:93000696"
            style={{
              background: "#e07b00",
              color: "#fff",
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              padding: "8px 16px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "#c96e00")
            }
            onMouseOut={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "#e07b00")
            }
          >
            930 00 696
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Meny"
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "#1e2326",
              transition: "transform 0.2s",
              transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "#1e2326",
              opacity: mobileOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "#1e2326",
              transition: "transform 0.2s",
              transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #e2e8f0",
            padding: "16px",
          }}
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/demo/con-serv"
                ? pathname === "/demo/con-serv"
                : pathname.startsWith(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: active ? "#e07b00" : "#1e2326",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="tel:93000696"
            style={{
              display: "block",
              marginTop: 12,
              background: "#e07b00",
              color: "#fff",
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              padding: "12px 16px",
              borderRadius: "4px",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Ring oss: 930 00 696
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#1e2326", color: "#fff" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 */}
          <div>
            <img
              src="/demo/con-serv/logo.png"
              alt="Con-Serv AS"
              style={{ height: 48, marginBottom: 16, filter: "brightness(0) invert(1)" }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const next = e.currentTarget.nextSibling as HTMLElement;
                if (next) next.style.display = "block";
              }}
            />
            <span
              style={{
                display: "none",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              CON-SERV
            </span>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: 12,
                lineHeight: 1.6,
              }}
            >
              Din leverandør av stålarbeider for alle formål
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Østerskogen 36, 4879 Grimstad
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Navigasjon
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Kontakt
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: 6,
              }}
            >
              Rikki Aanonsen (Daglig leder)
            </p>
            <a
              href="tel:93000696"
              style={{
                display: "block",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.875rem",
                color: "#e07b00",
                textDecoration: "none",
                marginBottom: 6,
              }}
            >
              Mob: 930 00 696
            </a>
            <a
              href="mailto:rikki.aanonsen@con-serv.no"
              style={{
                display: "block",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
              }}
            >
              rikki.aanonsen@con-serv.no
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.10)",
          padding: "16px",
          textAlign: "center",
          fontFamily: "'Barlow', sans-serif",
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        &copy; 2025 Con-Serv AS. Alle rettigheter forbeholdt.
      </div>
    </footer>
  );
}

export default function ConServLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#fff" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
