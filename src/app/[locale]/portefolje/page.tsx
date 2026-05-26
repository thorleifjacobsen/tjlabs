import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Tag, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portefølje | TJLabs',
  description:
    'Egne prosjekter og demosider jeg har bygget. LostTags, Inventoriz og eksempler på kundesider.',
};

const ownProjects = [
  {
    name: 'LostTags',
    icon: Tag,
    url: 'https://losttags.com',
    desc: 'En plattform for QR-merker du fester på ting du ikke vil miste. Hvis noen finner gjenstanden og skanner koden, får eieren automatisk beskjed på e-post.',
    features: ['Egne QR-merker med valgfritt design', 'Automatisk varsling via e-post', 'Abonnementsbetaling', 'Flerspråklig'],
    image: '/losttags-screenshot.png',
  },
  {
    name: 'Inventoriz',
    icon: Package,
    url: 'https://inventoriz.com',
    desc: 'Et enkelt lagerstyringssystem for små team. Hold styr på hva du har og hvor det er, skann QR-koder i nettleseren og bruk det som en app på telefonen.',
    features: ['QR-skanning i nettleseren', 'Lokasjonsbasert sporing', 'Installérbar som app (PWA)', 'Gratis for enkeltpersoner'],
    image: '/inventoriz-screenshot.png',
  },
];

const demoSites = [
  { name: 'Con-Serv', category: 'Bygg og anlegg', href: '/demo/con-serv' },
  { name: 'Steinmoen Sport', category: 'Sport & fritid', href: '/demo/steinmoen' },
  { name: 'Eik Makerspace', category: 'Verksted / community', href: '/demo/eikmakerspace' },
  { name: 'Tyholmen Hotel', category: 'Hotell & overnatting', href: '/demo/tyholmen' },
  { name: 'Jørkjenmc', category: 'Motorsport', href: '/demo/jorkjenmc' },
  { name: 'Premium Boat', category: 'Båt & fritid', href: '/demo/premiumboat' },
  { name: 'Mortens Kaffe', category: 'Mat & drikke', href: '/demo/mortenskaffe' },
  { name: 'BF-Auto', category: 'Bil & motor', href: '/demo/bf-auto' },
  { name: 'Eikaas Begravelsesbyrå', category: 'Begravelsesbyrå', href: '/demo/eikaas' },
  { name: 'Hageservice', category: 'Hage & utemiljø', href: '/demo/hageservice' },
  { name: 'AJJK', category: 'Kampsport', href: '/demo/ajjk' },
  { name: 'Bygg og Betong', category: 'Bygg', href: '/demo/byggogbetong' },
];

export default function PortefoliePage() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="divider" />
            <span className="text-xs tracking-[0.18em] uppercase font-semibold text-[var(--color-text-muted)]">
              Arbeid
            </span>
          </div>
          <h1
            className="font-display font-semibold text-[var(--color-text)] mb-4"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
          >
            Portefølje
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl" style={{ lineHeight: 1.7 }}>
            Egne produkter jeg har bygget og lansert, og eksempler på nettsider jeg lager for kunder.
          </p>
        </div>

        {/* Own projects */}
        <section className="mb-20">
          <h2 className="font-display font-medium text-[var(--color-text-secondary)] text-sm tracking-widest uppercase mb-8">
            Egne prosjekter
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ownProjects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-0 overflow-hidden group block"
              >
                <div className="relative h-44 bg-[var(--color-surface-2)] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <p.icon className="w-4 h-4 text-[var(--color-primary)]" />
                      <h3 className="font-display font-medium text-[var(--color-text)] text-lg group-hover:text-[var(--color-primary)] transition-colors">
                        {p.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Demo sites */}
        <section>
          <h2 className="font-display font-medium text-[var(--color-text-secondary)] text-sm tracking-widest uppercase mb-2">
            Demosider
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-8">
            Eksempler på nettsider jeg lager. Klikk for å se dem live.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {demoSites.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="card p-5 group flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors mb-0.5">
                    {s.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{s.category}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
