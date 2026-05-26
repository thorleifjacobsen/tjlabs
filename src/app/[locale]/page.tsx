import type { Metadata } from 'next';
import { ArrowRight, Globe, Cpu, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TJLabs — Webutvikler & Maker i Norge',
  description:
    'Nettsider, webapplikasjoner og elektronikk. Jeg tar på meg oppdrag i hele Norge. 10+ års erfaring.',
};

const services = [
  {
    icon: Globe,
    title: 'Nettsider',
    desc: 'Enkle og effektive bedriftssider og landingssider. Rask levering, ser bra ut og er enkle å vedlikeholde.',
    href: '/tjenester',
  },
  {
    icon: Layers,
    title: 'Webapplikasjoner',
    desc: 'Apper med innlogging og betaling, interne verktøy og portaler. Fullstack fra database til grensesnitt.',
    href: '/tjenester',
  },
  {
    icon: Cpu,
    title: 'Elektronikk & mer',
    desc: 'PCB-design, firmware, IoT og smarthus. Pluss 3D-printing og teknisk rådgivning.',
    href: '/tjenester',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg min-h-screen flex flex-col justify-center relative">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
          <p
            className="hero-item text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-8"
          >
            Webutvikler &amp; Maker — Norge
          </p>

          <h1
            className="hero-item font-display font-semibold leading-[1.1] mb-8"
            style={{ animationDelay: '60ms', fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            <span className="block text-[var(--color-text)]">Nettsider.</span>
            <span className="block text-[var(--color-text)]">Apper.</span>
            <span className="block text-[var(--color-primary)]">Elektronikk.</span>
          </h1>

          <p
            className="hero-item text-[var(--color-text-secondary)] max-w-lg mb-12"
            style={{ animationDelay: '140ms', fontSize: '1.125rem', lineHeight: 1.6 }}
          >
            Tar på meg varierte oppdrag i hele Norge. Jeg finner som regel en god løsning — og sier fra hvis ikke.
          </p>

          <div
            className="hero-item flex flex-wrap gap-4"
            style={{ animationDelay: '220ms' }}
          >
            <a href="/tjenester" className="btn-primary">
              Se hva jeg gjør <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/kontakt" className="btn-ghost">
              Ta kontakt
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="hero-item absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          style={{ animationDelay: '400ms' }}
        >
          <span className="text-[10px] tracking-widest uppercase text-[var(--color-text-muted)]">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--color-border)] to-transparent" />
        </div>
      </section>

      {/* Service teasers */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-14">
          <div className="divider" />
          <span className="text-xs tracking-[0.18em] uppercase font-semibold text-[var(--color-text-muted)]">
            Hva jeg gjør
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <a key={s.title} href={s.href} className="card p-7 group block">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center mb-5 group-hover:border-[var(--color-primary)] group-hover:bg-[oklch(0.62_0.22_248_/_0.08)] transition-all duration-250">
                <s.icon className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors" />
              </div>
              <h3 className="font-display font-medium text-[var(--color-text)] text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {s.desc}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="/tjenester"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] inline-flex items-center gap-1.5 transition-colors"
          >
            Se alle tjenester <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="divider" />
                <span className="text-xs tracking-[0.18em] uppercase font-semibold text-[var(--color-text-muted)]">
                  Arbeid
                </span>
              </div>
              <h2 className="font-display text-3xl text-[var(--color-text)]">
                Prosjekter og demosider
              </h2>
              <p className="text-[var(--color-text-secondary)] mt-2 text-sm max-w-sm">
                Egne produkter og nettsider jeg har bygget for kunder og demostrasjon.
              </p>
            </div>
            <a href="/portefolje" className="btn-ghost shrink-0">
              Se portefølje <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
