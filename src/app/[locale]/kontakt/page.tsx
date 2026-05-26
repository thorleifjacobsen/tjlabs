import type { Metadata } from 'next';
import { KontaktForm } from './KontaktForm';

export const metadata: Metadata = {
  title: 'Kontakt | TJLabs',
  description: 'Ta kontakt med TJLabs. Beskriv hva du trenger, så svarer jeg raskt.',
};

export default function KontaktPage() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-4 mb-5">
            <div className="divider" />
            <span className="text-xs tracking-[0.18em] uppercase font-semibold text-[var(--color-text-muted)]">
              Kontakt
            </span>
          </div>
          <h1
            className="font-display font-semibold text-[var(--color-text)] mb-4"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
          >
            La oss snakke.
          </h1>
          <p className="text-[var(--color-text-secondary)]" style={{ lineHeight: 1.7 }}>
            Beskriv gjerne hva det gjelder, hva du trenger og litt om deg selv. Jeg svarer som regel samme dag.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left — info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-[var(--color-text-muted)] mb-2">E-post</p>
              <a
                href="mailto:hei@tjlabs.no"
                className="font-display text-xl text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                hei@tjlabs.no
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-[var(--color-text-muted)] mb-2">Lokasjon</p>
              <p className="text-[var(--color-text-secondary)] text-sm">Norge</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-[var(--color-text-muted)] mb-2">Responstid</p>
              <p className="text-[var(--color-text-secondary)] text-sm">Svarer som regel innen samme dag</p>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Ikke klar for skjema? Send en e-post direkte til{' '}
                <a href="mailto:hei@tjlabs.no" className="text-[var(--color-primary)] hover:underline">
                  hei@tjlabs.no
                </a>
                {' '}og beskriv hva du trenger.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <KontaktForm />
        </div>
      </div>
    </main>
  );
}
