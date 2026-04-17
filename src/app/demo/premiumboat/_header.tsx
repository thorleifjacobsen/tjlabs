'use client';

import { useState } from 'react';

const LOGO =
  'https://web.archive.org/web/20250118174048im_/https://premiumboat.no/wp-content/uploads/2021/09/premiumboat-logo.png';

const navLinks = [
  { label: 'Om oss', href: '#om-oss' },
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Båtopplag', href: '#batopplag' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: '#1a3a5c' }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src={LOGO}
              alt="Premium Boat Service AS"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop nav - centered absolutely */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.75)', letterSpacing: '0.08em' }}
                className="px-4 py-2 text-base font-semibold uppercase hover:text-white transition-colors rounded hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop: full phone number */}
            <a
              href="tel:+4790663083"
              style={{ color: '#a8c8e8', fontFamily: "'Barlow Condensed', sans-serif" }}
              className="hidden md:flex text-lg font-semibold tracking-wide hover:text-white transition-colors items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              +47 906 63 083
            </a>

            {/* Mobile: phone icon button */}
            <a
              href="tel:+4790663083"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              style={{ backgroundColor: 'rgba(200,169,110,0.2)', color: '#c8a96e' }}
              aria-label="Ring oss"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </a>

            {/* Hamburger button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded transition-colors hover:bg-white/10"
              style={{ color: 'white' }}
              aria-label={open ? 'Lukk meny' : 'Åpne meny'}
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{ backgroundColor: '#122d4a', borderTop: '1px solid rgba(255,255,255,0.1)' }}
          className="md:hidden"
        >
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.85)', letterSpacing: '0.08em' }}
                className="py-3 text-lg font-semibold uppercase border-b border-white/10 last:border-0 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+4790663083"
              onClick={() => setOpen(false)}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#c8a96e', letterSpacing: '0.08em' }}
              className="py-3 text-lg font-semibold uppercase flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              +47 906 63 083
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
