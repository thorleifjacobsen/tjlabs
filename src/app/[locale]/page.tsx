import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TJLabs — Webutvikler & Maker i Norge',
  description:
    'Nettsider, webapplikasjoner og elektronikk. Tar på meg oppdrag i hele Norge.',
};

const caps = [
  'Nettsider',
  'Webapplikasjoner',
  'Elektronikk & IoT',
  '3D-printing',
  'PC & hardware',
  'Teknisk rådgivning',
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg min-h-screen flex flex-col justify-center relative">
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 w-full">
          <h1
            className="hero-item font-display font-semibold leading-[1.05] mb-10"
            style={{ animationDelay: '40ms', fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
          >
            <span className="block text-[var(--color-text)]">Nettsider.</span>
            <span className="block text-[var(--color-text)]">Apper.</span>
            <span className="block text-[var(--color-primary)] glow-orb">Elektronikk.</span>
          </h1>

          <p
            className="hero-item text-[var(--color-text-secondary)] max-w-md mb-12"
            style={{ animationDelay: '140ms', fontSize: '1.0625rem', lineHeight: 1.65 }}
          >
            Webutvikler og maker basert i Norge. Tar på meg det meste — og sier fra hvis ikke.
          </p>

          <div
            className="hero-item flex flex-wrap gap-5"
            style={{ animationDelay: '230ms' }}
          >
            <a href="/kontakt" className="btn-primary">
              Ta kontakt <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/tjenester" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors self-center">
              Hva jeg gjør →
            </a>
          </div>
        </div>

        <div
          className="hero-item absolute bottom-10 left-6 md:left-12"
          style={{ animationDelay: '380ms' }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-[var(--color-border)] to-transparent" />
        </div>
      </section>

      {/* Capabilities list */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-28">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-10">
          Hva jeg gjør
        </p>

        <div>
          {caps.map((label, i) => (
            <a
              key={label}
              href="/tjenester"
              className="group flex items-center justify-between border-b border-[var(--color-border)] py-5 hover:pl-3 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-mono text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors w-5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="font-display font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
                >
                  {label}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--color-primary)] transition-all duration-200 shrink-0" />
            </a>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between">
          <p className="text-sm text-[var(--color-text-muted)] max-w-xs leading-relaxed">
            10+ år med webutvikling, elektronikk og maker-prosjekter.
          </p>
          <a
            href="/portefolje"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors shrink-0 ml-8"
          >
            Se prosjekter →
          </a>
        </div>
      </section>
    </main>
  );
}
