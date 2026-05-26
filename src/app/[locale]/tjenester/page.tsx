import type { Metadata } from 'next';
import { ArrowRight, Globe, Layers, Cpu, Package, Wrench, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tjenester | TJLabs',
  description:
    'Nettsider, webapplikasjoner, IoT, 3D-printing og teknisk rådgivning. Freelance webutvikler i hele Norge.',
};

const services = [
  {
    icon: Globe,
    title: 'Nettsider',
    desc: 'Enkle og effektive bedriftssider og landingssider. Fungerer på alle enheter, ser bra ut og er søkemotoroptimert fra start.',
    tags: ['Bedriftssider', 'Landingssider', 'SEO', 'Responsivt design'],
    href: '/services/website',
  },
  {
    icon: Layers,
    title: 'Webapplikasjoner',
    desc: 'Apper med innlogging, betaling og brukerdata. Interne portaler, bookingsystemer og abonnementstjenester. Fullstack.',
    tags: ['Innlogging', 'Betaling', 'Portaler', 'PWA'],
    href: '/services/webapp',
  },
  {
    icon: Cpu,
    title: 'Elektronikk og IoT',
    desc: 'PCB-design og prototyper, firmware til mikrokontrollere, smarthusintegrasjoner og sensorbaserte løsninger.',
    tags: ['PCB-design', 'ESP32 / Arduino', 'Home Assistant', 'IoT'],
    href: '/services/electronics',
  },
  {
    icon: Package,
    title: '3D-printing',
    desc: 'Send filer og få pristilbud. Jeg hjelper også med design fra mål og skisser — bra for prototyper og funksjonelle deler.',
    tags: ['STL / STEP', 'Prototyper', 'Funksjonelle deler', 'Design fra mål'],
    href: '/services/3d-printing',
  },
  {
    icon: Wrench,
    title: 'PC og hardware',
    desc: 'PC-reparasjon og oppgraderinger, databerging og maskinvarehjelp. Gjelder både Windows og Mac.',
    tags: ['PC-reparasjon', 'Oppgraderinger', 'Databerging'],
    href: null,
  },
  {
    icon: MessageCircle,
    title: 'Teknisk rådgivning',
    desc: 'Trenger du hjelp til å tenke gjennom en teknisk utfordring, eller noen å sparre med? Jeg hjelper gjerne.',
    tags: ['Sparring', 'Teknisk vurdering', 'Planlegging'],
    href: '/kontakt',
  },
];

export default function TjenesterPage() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="divider" />
            <span className="text-xs tracking-[0.18em] uppercase font-semibold text-[var(--color-text-muted)]">
              Hva jeg kan hjelpe med
            </span>
          </div>
          <h1 className="font-display font-semibold text-[var(--color-text)] mb-4"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
            Tjenester
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl" style={{ lineHeight: 1.7 }}>
            Fra nettsider til kretskort. Jeg tar på meg varierte oppdrag og finner som regel en god løsning.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => {
            const Wrapper = s.href ? 'a' : 'div';
            const props = s.href
              ? { href: s.href, className: 'card p-8 group block' }
              : { className: 'card p-8' };

            return (
              <Wrapper key={s.title} {...(props as React.HTMLAttributes<HTMLElement>)}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-primary)] group-hover:bg-[oklch(0.62_0.22_248_/_0.08)] transition-all duration-250">
                    <s.icon className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors" />
                  </div>
                  {s.href && (
                    <ArrowRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors mt-1" />
                  )}
                </div>

                <h2 className="font-display font-medium text-xl text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {s.title}
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-medium text-xl text-[var(--color-text)] mb-1">
              Har du et prosjekt i tankene?
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Beskriv gjerne hva du trenger og jeg svarer raskt.
            </p>
          </div>
          <a href="/kontakt" className="btn-primary shrink-0">
            Ta kontakt <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
