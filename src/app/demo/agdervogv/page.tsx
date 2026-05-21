import type { Metadata } from 'next';
import HeroCarousel from './HeroCarousel';

export const metadata: Metadata = {
  title: 'Agder Varme og Vedlikehold | Varmepumper i Vegårshei',
  description:
    'Salg, montering og service av varmepumper lokalt i Vegårshei og omegn. Sertifisert fagmann. Ring oss: 97 12 35 54.',
  robots: 'noindex',
};

const BASE = '/demo/agdervogv';

// ── Icons ──────────────────────────────────────────────────────────────────

function IconShield() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.82a16 16 0 006.08 6.08l1.17-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18v-.08z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

const trust = [
  { icon: <IconShield />, label: 'Sertifisert fagmann', sub: 'ISOVATOR & NOVAP godkjent' },
  { icon: <IconHome />,   label: 'Gratis befaring',    sub: 'Ingen skjulte kostnader' },
  { icon: <IconGrid />,   label: 'Alle merker',        sub: 'Daikin, Mitsubishi og mer' },
  { icon: <IconMapPin />, label: 'Lokal og rask',      sub: 'Vegårshei og omegn' },
];

const featured = [
  {
    title: 'Salg av varmepumpe',
    desc: 'Vi hjelper deg velge riktig modell for din bolig. Ærlig rådgivning, ingen unødvendig mersalg.',
    img: 'https://mee.no/wp-content/uploads/2024/12/Uwano1200x900pxl.jpg',
    href: `${BASE}/tjenester`,
  },
  {
    title: 'Montering og installasjon',
    desc: 'Sertifisert og faglig korrekt installasjon etter gjeldende forskrifter. Vi dokumenterer alt.',
    img: 'https://mee.no/wp-content/uploads/2025/03/UWANO_Pure_interior.jpg',
    href: `${BASE}/tjenester`,
  },
  {
    title: 'Service og vedlikehold',
    desc: 'Årlig service, filterrens og ytelseskontroll. Skriftlig rapport etter hvert besøk.',
    img: '/demo/agdervogv/technician.jpg',
    href: `${BASE}/tjenester`,
  },
];

const benefits = [
  { label: 'Problemfri installasjon', desc: 'Vi tar oss av alt fra rørlegging til idriftsettelse.' },
  { label: 'Sikker drift',            desc: 'Faglig korrekt arbeid som varer i mange år.' },
  { label: 'Mye varme',              desc: 'God varmeytelse selv ved lave utetemperaturer.' },
  { label: 'Deilig kjøling',         desc: 'Hold huset kjølt om sommeren uten sveiting.' },
  { label: 'Reduserte kostnader',    desc: 'Spar betydelig på den årlige strømregningen.' },
  { label: 'Stillegående',           desc: 'Moderne pumper er nesten lydløse i drift.' },
];

const brands = ['Mitsubishi Electric', 'Panasonic', 'Toshiba', 'Daikin'];

// ── Page ───────────────────────────────────────────────────────────────────

export default function FrontPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <HeroCarousel />

      {/* ── 2. TRUST STRIP ── */}
      <section className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trust.map((t) => (
              <div key={t.label} className="flex items-start gap-3">
                <span className="text-[#ea580c] flex-shrink-0 mt-0.5">{t.icon}</span>
                <div>
                  <p className="font-semibold text-[#1e293b] text-sm">{t.label}</p>
                  <p className="text-[#64748b] text-xs mt-0.5">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. TJENESTER TEASER ── */}
      <section className="py-10 md:py-16 bg-[#f8fafc]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-2">Tjenester</p>
              <h2 className="font-bold text-[#1e293b]" style={{ fontSize: '1.75rem' }}>
                Hva vi gjør for deg
              </h2>
            </div>
            <a
              href={`${BASE}/tjenester`}
              className="hidden sm:inline-flex items-center gap-1.5 text-[#ea580c] font-semibold text-sm hover:underline flex-shrink-0"
            >
              Alle tjenester <IconArrow />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featured.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="group rounded-lg border border-slate-200 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1e293b] mb-1.5">{s.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#ea580c] text-sm font-semibold">
                    Les mer <IconArrow />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-6 sm:hidden">
            <a href={`${BASE}/tjenester`} className="inline-flex items-center gap-1.5 text-[#ea580c] font-semibold text-sm hover:underline">
              Se alle tjenester <IconArrow />
            </a>
          </p>
        </div>
      </section>

      {/* ── 4. OM OSS TEASER ── */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-md border border-slate-200" style={{ height: '380px' }}>
              <img
                src="https://mee.no/wp-content/uploads/2024/04/varmepumpe-i-nytt-hjem.jpg"
                alt="Varmepumpe montert i hjemmet"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">Om oss</p>
              <h2 className="font-bold text-[#1e293b] leading-tight mb-5" style={{ fontSize: '1.75rem' }}>
                Lokal ekspertise i Vegårshei og omegn
              </h2>
              <div className="space-y-4 text-[#64748b] mb-6">
                <p>
                  Agder Varme og Vedlikehold ble etablert fordi det manglet en lokal aktør som spesialiserte
                  seg på varmepumper i Vegårshei-regionen. Vi kjenner klimaet, husene og forholdene her.
                </p>
                <p>
                  Kort vei betyr rask respons. Vi er lokale, vi kjenner kundene våre, og vi stiller oss
                  ansvarlig for arbeidet vi gjør.
                </p>
              </div>
              <blockquote className="border-l-4 border-[#ea580c] pl-4 italic text-[#1e293b] font-medium mb-6">
                "Det er ingen andre her i området som driver med dette, derfor startet vi."
              </blockquote>
              <a
                href={`${BASE}/om-oss`}
                className="inline-flex items-center gap-1.5 text-[#ea580c] font-semibold text-sm hover:underline"
              >
                Les mer om oss <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BENEFITS ── */}
      <section className="py-10 md:py-16 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">Fordeler</p>
              <h2 className="font-bold text-[#1e293b] leading-tight mb-8" style={{ fontSize: '1.75rem' }}>
                Vi gir deg fordelene
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {benefits.map((b) => (
                  <div key={b.label}>
                    <dt className="font-semibold text-[#1e293b] text-sm mb-0.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] flex-shrink-0" />
                      {b.label}
                    </dt>
                    <dd className="text-sm text-[#64748b] pl-3.5">{b.desc}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <a
                  href={`${BASE}/kontakt`}
                  className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Bestill gratis befaring
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md border border-slate-200" style={{ height: '420px' }}>
              <img
                src="https://mee.no/wp-content/uploads/2022/06/GettyImages-1330907325_mibano-1.jpg"
                alt="Familie som nyter god inneklima"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PRODUKTER STRIP ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-2">Produkter</p>
              <h2 className="font-bold text-[#1e293b]" style={{ fontSize: '1.5rem' }}>
                Ledende merker
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {brands.map((b) => (
                <a
                  key={b}
                  href={`${BASE}/produkter`}
                  className="px-4 py-2 bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg font-semibold text-[#1e293b] text-sm transition-colors"
                >
                  {b}
                </a>
              ))}
            </div>
          </div>
          <p className="mt-5">
            <a href={`${BASE}/produkter`} className="inline-flex items-center gap-1.5 text-[#ea580c] font-semibold text-sm hover:underline">
              Les mer om produktene <IconArrow />
            </a>
          </p>
        </div>
      </section>

      {/* ── 7. CTA BANNER ── */}
      <section className="bg-[#1e293b] py-14">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-bold text-white mb-1" style={{ fontSize: '1.75rem' }}>
              Klar for å spare strøm i vinter?
            </h2>
            <p className="text-slate-400">Ring oss for gratis befaring. Ingen forpliktelser.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="tel:97123554"
              className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-7 py-4 rounded-lg transition-colors text-lg"
            >
              <IconPhone />
              97 12 35 54
            </a>
            <a
              href={`${BASE}/kontakt`}
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-6 py-4 rounded-lg transition-colors"
            >
              Send melding
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
