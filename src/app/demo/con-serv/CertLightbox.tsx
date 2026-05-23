"use client";

import { useState, useEffect } from "react";

const certs = [
  {
    thumb: "/demo/con-serv/sertifikat1.jpg",
    full: "/demo/con-serv/sertifikat1.jpg",
    alt: "NS-1090 Sertifikat 1",
  },
  {
    thumb: "/demo/con-serv/sertifikat2.jpg",
    full: "/demo/con-serv/sertifikat2.jpg",
    alt: "NS-1090 Sertifikat 2",
  },
];

export default function CertLightbox() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
        {certs.map((cert, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "block",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.20)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
            }}
            title="Klikk for å se i fullskjerm"
            aria-label={`Vis ${cert.alt} i fullskjerm`}
          >
            <img
              src={cert.thumb}
              alt={cert.alt}
              style={{ width: 180, height: 255, objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                background: "#1e2326",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.75rem",
                padding: "8px",
                textAlign: "center",
              }}
            >
              Klikk for fullskjerm
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={certs[open].alt}
          onClick={() => setOpen(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(null)}
            aria-label="Lukk"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "50%",
              width: 44,
              height: 44,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "1.25rem",
              lineHeight: 1,
              transition: "background 0.15s",
            }}
            onMouseOver={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.25)")
            }
            onMouseOut={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)")
            }
          >
            &#x2715;
          </button>

          {/* ESC hint */}
          <span
            style={{
              position: "absolute",
              top: 26,
              right: 76,
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            ESC for å lukke
          </span>

          {/* Image */}
          <img
            src={certs[open].full}
            alt={certs[open].alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
              borderRadius: "4px",
              boxShadow: "0 16px 64px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      )}
    </>
  );
}
