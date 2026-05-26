import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TJLabs',
  description: 'Webutvikler og maker basert i Norge.',
};

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-6 pt-36 pb-24 min-h-screen">
      <div className="mb-16">
        <h1
          className="font-display font-semibold text-[var(--color-text)] mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          TJLabs
        </h1>
        <p className="text-[var(--color-text-secondary)]" style={{ lineHeight: 1.65 }}>
          Webutvikler og maker basert i Norge.<br />
          Tar på meg nettsider og elektronikkprosjekter.
        </p>
      </div>

      <div className="border-t border-[var(--color-border)] pt-8 mb-16">
        <p className="text-xs text-[var(--color-text-muted)] mb-4 tracking-widest uppercase">
          Hva jeg gjør
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-loose">
          Nettsider&nbsp;&nbsp;·&nbsp;&nbsp;Elektronikk&nbsp;&nbsp;·&nbsp;&nbsp;IoT&nbsp;&nbsp;·&nbsp;&nbsp;3D-printing&nbsp;&nbsp;·&nbsp;&nbsp;PC&nbsp;&nbsp;·&nbsp;&nbsp;PCB
        </p>
      </div>

      <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <a href="/tjenester" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
          Tjenester
        </a>
        <a href="/portefolje" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
          Prosjekter
        </a>
        <a href="/kontakt" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
          Kontakt
        </a>
        <a
          href="mailto:hei@tjlabs.no"
          className="text-[var(--color-primary)] hover:opacity-75 transition-opacity"
        >
          hei@tjlabs.no
        </a>
      </nav>
    </main>
  );
}
