import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prosjekter | TJLabs',
  description:
    'Egne prosjekter jeg har bygget og lansert. LostTags og Inventoriz.',
};

const projects = [
  {
    name: 'LostTags',
    year: '2023',
    url: 'https://losttags.com',
    desc: 'En plattform for QR-merker du fester på ting du ikke vil miste. Hvis noen finner gjenstanden og skanner koden, får eieren automatisk beskjed på e-post.',
    points: [
      'Egne QR-merker med valgfritt design',
      'Automatisk varsling via e-post',
      'Abonnementsbetaling',
      'Flerspråklig grensesnitt',
    ],
    image: '/losttags-screenshot.png',
    stack: 'Next.js, Stripe, Resend, Postgres',
  },
  {
    name: 'Inventoriz',
    year: '2022',
    url: 'https://inventoriz.com',
    desc: 'Et enkelt lagerstyringssystem for små team. Hold styr på hva du har og hvor det er, skann QR-koder i nettleseren og bruk det som en app på telefonen.',
    points: [
      'QR-skanning direkte i nettleseren',
      'Lokasjonsbasert sporing',
      'Installérbar som app (PWA)',
      'Gratis for enkeltpersoner',
    ],
    image: '/inventoriz-screenshot.png',
    stack: 'Next.js, SQLite, PWA',
  },
];

export default function PortefoliePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-28 pb-24">
      <div className="mb-16">
        <h1
          className="font-display font-semibold text-[var(--color-text)]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05 }}
        >
          Prosjekter
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-4 text-base max-w-sm" style={{ lineHeight: 1.7 }}>
          Egne produkter jeg har bygget og lansert.
        </p>
      </div>

      <div className="border-t border-[var(--color-border)] space-y-0">
        {projects.map((p, i) => (
          <div key={p.name} className="border-b border-[var(--color-border)] py-14">
            {/* Header row */}
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex items-baseline gap-5">
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2
                  className="font-display font-semibold text-[var(--color-text)]"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
                >
                  {p.name}
                </h2>
                <span className="text-sm text-[var(--color-text-muted)]">{p.year}</span>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors shrink-0"
              >
                Besøk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  {p.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0 mt-2" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--color-text-muted)] font-mono">{p.stack}</p>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] aspect-video">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-sm text-[var(--color-text-muted)]">
        Bygger ting jevnlig. Mer kommer.
      </div>
    </main>
  );
}
