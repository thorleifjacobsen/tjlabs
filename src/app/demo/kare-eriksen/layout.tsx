'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const BASE = '/demo/kare-eriksen';

const navLinks = [
  { label: 'Hjem', href: BASE },
  { label: 'Tjenester', href: `${BASE}/tjenester` },
  { label: 'Prosjekter', href: `${BASE}#prosjekter` },
  { label: 'Om oss', href: `${BASE}/om-oss` },
  { label: 'Kontakt', href: `${BASE}/kontakt` },
];

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const isActive = (href: string) => {
    const path = href.split('#')[0];
    if (path === BASE) return pathname === BASE;
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div
        className="mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
        style={{ maxWidth: '1100px' }}
      >
        <a href={BASE} className="flex items-center gap-2 flex-shrink-0">
          {!logoError ? (
            <img
              src="/demo/kare-eriksen/logo.png"
              alt="Kåre Eriksen AS"
              className="h-10 w-auto"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-md text-white font-bold text-lg"
              style={{ backgroundColor: '#1e3a5f' }}
            >
              KE
            </span>
          )}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={
                isActive(link.href)
                  ? {
                      color: '#1e3a5f',
                      borderBottom: '2px solid #c8820a',
                      paddingBottom: '2px',
                    }
                  : { color: '#475569' }
              }
              onMouseEnter={(e) => {
                if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#1e3a5f';
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#475569';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:91109595"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors"
          style={{ backgroundColor: '#1e3a5f' }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = '#162e4d')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = '#1e3a5f')
          }
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
          </svg>
          911 09 595
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md"
          style={{ color: '#475569' }}
          aria-label="Meny"
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
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-3 border-b border-slate-100"
              style={{ color: isActive(link.href) ? '#1e3a5f' : '#475569' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:91109595"
            className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-md text-white text-sm font-medium"
            style={{ backgroundColor: '#1e3a5f' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
              />
            </svg>
            Ring oss: 911 09 595
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e3a5f' }} className="text-white">
      <div
        className="mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10"
        style={{ maxWidth: '1100px' }}
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/demo/kare-eriksen/logo.png"
              alt="Kåre Eriksen AS"
              className="h-10 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
            Mesterbedrift med over 40 års erfaring i Arendal-regionen. Vi leverer kvalitet fra planlegging til ferdig bygg.
          </p>
          <div
            className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium border"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <svg className="w-3.5 h-3.5" style={{ color: '#c8820a' }} fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Sentral godkjenning
          </div>
        </div>

        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: '#94a3b8' }}
          >
            Sider
          </h3>
          <ul className="space-y-2.5">
            {[
              { label: 'Hjem', href: BASE },
              { label: 'Tjenester', href: `${BASE}/tjenester` },
              { label: 'Om oss', href: `${BASE}/om-oss` },
              { label: 'Kontakt', href: `${BASE}/kontakt` },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: '#94a3b8' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: '#94a3b8' }}
          >
            Kontakt
          </h3>
          <ul className="space-y-2.5 text-sm" style={{ color: '#94a3b8' }}>
            <li>Industritoppen 23</li>
            <li>4848 Arendal</li>
            <li className="pt-1">
              <a
                href="tel:91109595"
                className="transition-colors"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
              >
                911 09 595
              </a>
            </li>
            <li>
              <a
                href="mailto:post@keriksen.no"
                className="transition-colors"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
              >
                post@keriksen.no
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div
          className="mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ maxWidth: '1100px', color: '#64748b' }}
        >
          <span>&copy; 2025 Kåre Eriksen AS | Industritoppen 23, 4848 Arendal</span>
          <span>Org.nr: 980 149 099</span>
        </div>
      </div>
    </footer>
  );
}

export default function KareEriksenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
