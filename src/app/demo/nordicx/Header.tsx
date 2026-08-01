'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { SITE } from './data';
import { HexagonMark } from './hexagon';

const BASE = SITE.base;

const navLinks = [
  { label: 'Forside', href: BASE },
  { label: 'Produkter', href: `${BASE}/produkter` },
  { label: 'Om oss', href: `${BASE}/om-oss` },
  { label: 'Kontakt', href: `${BASE}/kontakt` },
];

const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent('Bestilling hos NordicX')}`;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === BASE) return pathname === BASE;
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'var(--nx-graphite)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="mx-auto px-5 flex items-center justify-between"
        style={{ maxWidth: 1100, height: 64 }}
      >
        <a href={BASE} className="flex items-center gap-2 flex-shrink-0">
          <HexagonMark className="w-6 h-6" />
          <span className="text-lg tracking-wide uppercase">
            <span className="font-normal text-white">NORDIC</span>
            <span className="font-bold" style={{ color: 'var(--nx-accent)' }}>
              X
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{
                color: isActive(link.href) ? 'var(--nx-accent)' : 'var(--nx-glow)',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={mailtoHref}
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors"
          style={{ backgroundColor: 'var(--nx-accent)', color: '#ffffff' }}
        >
          Send bestilling
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          style={{ color: 'var(--nx-glow)' }}
          aria-label={open ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-5 py-4 flex flex-col gap-1"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-3 border-b"
              style={{
                color: isActive(link.href) ? 'var(--nx-accent)' : 'var(--nx-glow)',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={mailtoHref}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-md"
            style={{ backgroundColor: 'var(--nx-accent)', color: '#ffffff' }}
          >
            Send bestilling
          </a>
        </div>
      )}
    </header>
  );
}
