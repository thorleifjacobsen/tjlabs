import type { ReactNode } from 'react';
import { SITE, products } from './data';
import Header from './Header';
import { HexagonMark } from './hexagon';

const BASE = SITE.base;

const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent('Bestilling hos NordicX')}`;

function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--nx-graphite)' }} className="text-white">
      <div
        className="mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10"
        style={{ maxWidth: 1100 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <HexagonMark className="w-6 h-6" />
            <span className="text-lg tracking-wide uppercase">
              <span className="font-normal text-white">NORDIC</span>
              <span className="font-bold" style={{ color: 'var(--nx-accent)' }}>
                X
              </span>
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--nx-muted)' }}>
            NordicX importerer partier med utstyr til garasje og verksted, og
            selger det direkte til private kunder og små bedrifter i Norge.
          </p>
        </div>

        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ color: 'var(--nx-muted)' }}
          >
            Produkter
          </h3>
          <ul className="space-y-2.5">
            {products.map((p) => (
              <li key={p.id}>
                <a
                  href={`${BASE}/produkter#${p.slug}`}
                  className="text-sm transition-colors"
                  style={{ color: 'var(--nx-muted)' }}
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ color: 'var(--nx-muted)' }}
          >
            Kontakt
          </h3>
          <ul className="space-y-2.5 text-sm" style={{ color: 'var(--nx-muted)' }}>
            <li>
              <a href={mailtoHref} className="transition-colors">
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                Facebook
              </a>
            </li>
            <li className="pt-1">Bestilling og henvendelser skjer på e-post.</li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div
          className="mx-auto px-5 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ maxWidth: 1100, color: 'var(--nx-muted)' }}
        >
          <span>&copy; 2026 NordicX</span>
          <span>Dette er en demo-side</span>
        </div>
      </div>
    </footer>
  );
}

export default function NordicXLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#ffffff',
        color: 'var(--nx-ink)',
        minHeight: '100vh',
        ['--nx-graphite' as string]: '#17181c',
        ['--nx-steel' as string]: '#26282e',
        ['--nx-concrete' as string]: '#f3f4f6',
        ['--nx-line' as string]: '#d9dbe0',
        ['--nx-ink' as string]: '#14151a',
        ['--nx-muted' as string]: '#6b7078',
        ['--nx-accent' as string]: '#f26522',
        ['--nx-glow' as string]: '#eaf4ff',
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
