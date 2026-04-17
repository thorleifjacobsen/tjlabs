"use client";

import { useState } from "react";

const links = [
  { label: "Tjenester", href: "#tjenester" },
  { label: "Bilder", href: "#bilder" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Leverandører", href: "#leverandorer" },
  { label: "Kontakt", href: "#kontakt" },
];

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="text-slate-300 hover:text-white text-sm font-medium transition-colors whitespace-nowrap"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}

export function MobileHamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Meny"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 md:hidden z-50">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-4 text-slate-200 hover:text-orange-400 hover:bg-slate-800 font-medium border-b border-slate-800 last:border-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
