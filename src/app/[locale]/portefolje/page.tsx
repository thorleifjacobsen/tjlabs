import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prosjekter | TJLabs',
  description: 'LostTags og Inventoriz.',
};

const projects = [
  {
    name: 'LostTags',
    year: '2023',
    desc: 'QR-merker for tapte ting. Finner noen gjenstanden din, får du beskjed automatisk.',
    url: 'https://losttags.com',
    stack: 'Next.js · Stripe · Postgres',
    image: '/losttags-screenshot.png',
  },
  {
    name: 'Inventoriz',
    year: '2022',
    desc: 'Lagerstyring for små team. QR-skanning i nettleseren, fungerer som app på telefonen.',
    url: 'https://inventoriz.com',
    stack: 'Next.js · SQLite · PWA',
    image: '/inventoriz-screenshot.png',
  },
];

export default function PortefoliePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-36 pb-24 min-h-screen">
      <h1
        className="font-display font-semibold text-[var(--color-text)] mb-16"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}
      >
        Prosjekter
      </h1>

      <div className="border-t border-[var(--color-border)]">
        {projects.map((p) => (
          <div key={p.name} className="border-b border-[var(--color-border)] py-10">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-baseline gap-3">
                <span className="font-display font-medium text-[var(--color-text)] text-lg">
                  {p.name}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">{p.year}</span>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 shrink-0"
              >
                {p.url.replace('https://', '')}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="rounded-lg overflow-hidden border border-[var(--color-border)] mb-5 aspect-video relative bg-[var(--color-surface)]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover object-top"
              />
            </div>

            <p className="text-sm text-[var(--color-text-secondary)] mb-3 leading-relaxed">
              {p.desc}
            </p>
            <p className="text-[10px] text-[var(--color-text-muted)] font-mono tracking-wide">
              {p.stack}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
