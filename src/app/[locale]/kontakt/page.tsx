import type { Metadata } from 'next';
import { KontaktForm } from './KontaktForm';

export const metadata: Metadata = {
  title: 'Kontakt | TJLabs',
  description: 'Ta kontakt med TJLabs.',
};

export default function KontaktPage() {
  return (
    <main className="max-w-xl mx-auto px-6 pt-36 pb-24 min-h-screen">
      <h1
        className="font-display font-semibold text-[var(--color-text)] mb-6"
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

      <div className="border-t border-[var(--color-border)] mt-16 pt-12">
        <p className="text-sm text-[var(--color-text-muted)] mb-8">
          Eller send en melding her:
        </p>
        <KontaktForm />
      </div>
    </main>
  );
}
