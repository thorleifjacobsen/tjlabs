import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | TJLabs',
  description: 'Ta kontakt med TJLabs.',
};

export default function KontaktPage() {
  return (
    <main className="max-w-xl mx-auto px-6 pt-36 pb-24 min-h-screen">
      <h1
        className="font-display font-semibold text-[var(--color-text)] mb-8"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}
      >
        Kontakt
      </h1>

      <a
        href="mailto:hei@tjlabs.no"
        className="text-[var(--color-primary)] hover:opacity-75 transition-opacity text-lg"
      >
        hei@tjlabs.no
      </a>

      <p className="text-sm text-[var(--color-text-muted)] mt-6 max-w-xs" style={{ lineHeight: 1.7 }}>
        Beskriv gjerne hva det gjelder. Svarer så fort som mulig.
      </p>
    </main>
  );
}
