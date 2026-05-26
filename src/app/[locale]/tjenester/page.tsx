import type { Metadata } from 'next';
import { EmailLink } from '@/components/EmailLink';

export const metadata: Metadata = {
  title: 'Tjenester | TJLabs',
  description: 'Nettsider, elektronikk, IoT, 3D-printing og PC.',
};

const services = [
  { title: 'Nettsider',         hint: 'bedriftssider, landingssider' },
  { title: 'Webapplikasjoner',  hint: 'portaler, booking, interne verktøy' },
  { title: 'Elektronikk & IoT', hint: 'PCB, firmware, smarthus' },
  { title: '3D-printing',       hint: 'prototyper, funksjonelle deler' },
  { title: 'PC & hardware',     hint: 'reparasjon, oppgraderinger' },
];

export default function TjenesterPage() {
  return (
    <main className="max-w-xl mx-auto px-6 pt-36 pb-24 min-h-screen">
      <h1
        className="font-display font-semibold text-[var(--color-text)] mb-16"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}
      >
        Tjenester
      </h1>

      <div className="border-t border-[var(--color-border)]">
        {services.map((s) => (
          <div
            key={s.title}
            className="border-b border-[var(--color-border)] py-5 flex items-baseline justify-between gap-8"
          >
            <span className="font-display font-medium text-[var(--color-text)]">
              {s.title}
            </span>
            <span className="text-xs text-[var(--color-text-muted)] text-right shrink-0">
              {s.hint}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <EmailLink
          user="hei"
          host="tjlabs.no"
          className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
        />
      </div>
    </main>
  );
}
