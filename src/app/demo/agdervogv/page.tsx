import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agder Varme og Vedlikehold | Varmepumper i Vegarsshei',
  description:
    'Salg, montering og service av varmepumper. Lokalt i Vegarsshei og omegn. Ring Magnus direkte: 97 12 35 54.',
  robots: 'noindex',
};

// ── Icons ──────────────────────────────────────────────────────────────────

function IconShield() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

function IconMail() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

const trustItems = [
  {
    icon: <IconShield />,
    label: 'Sertifisert fagmann',
    sub: 'Faglig opplaert og godkjent',
  },
  {
    icon: <IconCalendar />,
    label: 'Gratis befaring',
    sub: 'Ingen skjulte kostnader',
  },
  {
    icon: <IconGrid />,
    label: 'Alle merker',
    sub: 'Daikin, Mitsubishi og mer',
  },
  {
    icon: <IconMapPin />,
    label: 'Lokal og rask',
    sub: 'Vegarsshei og omegn',
  },
];

const services = [
  {
    title: 'Salg av varmepumpe',
    desc: 'Vi hjelper deg velge riktig luft-til-luft-pumpe for din bolig. Arligh radvigning, ingen unodvendig mersalg.',
    img: '/demo/agdervogv/outdoor-unit.jpg',
  },
  {
    title: 'Montering og installasjon',
    desc: 'Sertifisert og faglig korrekt installasjon etter gjeldende forskrifter. Vi dokumenterer alt.',
    img: '/demo/agdervogv/indoor-unit.jpg',
  },
  {
    title: 'Service og vedlikehold',
    desc: 'Arlig service, filterrens og ytelseskontroll. Du far skriftlig rapport etter hvert besok.',
    img: '/demo/agdervogv/technician.jpg',
  },
  {
    title: 'Feilsoking og reparasjon',
    desc: 'Vi feilsoker og reparerer alle merker og modeller. Tydelig pristilbud for arbeidet starter.',
    img: '/demo/agdervogv/outdoor-unit.jpg',
  },
  {
    title: 'Gratis befaring',
    desc: 'Magnus kommer hjem til deg, vurderer behovet og gir deg et konkret tilbud. Helt uten forpliktelser.',
    img: '/demo/agdervogv/cozy-home.jpg',
  },
  {
    title: 'Serviceavtale',
    desc: 'Fast avtale for arlig service. Forutsigbare kostnader og prioritert responstid ved driftsstans.',
    img: '/demo/agdervogv/indoor-unit.jpg',
  },
];

const brands = ['Daikin', 'Mitsubishi Electric', 'Panasonic', 'Fujitsu', 'Samsung'];

const faqs = [
  {
    q: 'Hva koster en varmepumpe med montering?',
    a: 'En komplett luft-til-luft-varmepumpe med montering koster vanligvis mellom 15 000 og 30 000 kroner, avhengig av modell og installasjonskompleksitet. Vi gir alltid fast pris etter befaring - ingen overraskelser.',
  },
  {
    q: 'Hvor lang tid tar monteringen?',
    a: 'En standard montering tar vanligvis en arbeidsdag. Vi rigger opp bade inne- og uteenhet, trekker ror og klargjor alt for bruk. Ingen lange ventetider.',
  },
  {
    q: 'Trenger jeg tillatelse for a montere varmepumpe?',
    a: 'Luft-til-luft-varmepumper krever normalt ingen byggesoknad. Vi sorger for at installasjonen er i henhold til gjeldende forskrifter og produsentens krav, slik at garantien er i orden.',
  },
  {
    q: 'Hva er inkludert i en servicesjekk?',
    a: 'En service inkluderer rens av filtre og varmeveksler, kontroll av kjolemiddeltrykk, sjekk av elektriske tilkoblinger og funksjonsstest av hele anlegget. Du far skriftlig rapport etter hvert besok.',
  },
  {
    q: 'Hvilke merker leverer og monterer dere?',
    a: 'Vi leverer og monterer varmepumper fra Daikin, Mitsubishi Electric, Panasonic, Fujitsu og Samsung. Magnus hjelper deg velge riktig modell basert pa boligstorrelse, isolasjon og budsjett.',
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function FrontPage() {
  return (
    <>
      <style>{`
        details > summary { list-style: none; cursor: pointer; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] > summary .faq-chevron { transform: rotate(45deg); }
        .faq-chevron { transition: transform 0.2s ease; display: inline-block; }
      `}</style>

      {/* ── 1. HERO ── */}
      <section
        className="relative flex items-center"
        style={{ minHeight: '70vh' }}
      >
        <img
          src="/demo/agdervogv/hero.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/65" />

        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 py-20">
          <p className="text-[#ea580c] font-semibold text-sm uppercase tracking-wider mb-4">
            Vegarsshei og omegn
          </p>
          <h1
            className="font-bold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Salg, montering og service<br className="hidden sm:block" /> av varmepumper
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-xl">
            Lokalt i Vegarsshei og omegn - ring Magnus direkte
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:97123554"
              className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-base"
            >
              <IconPhone />
              Ring 97 12 35 54
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors text-base"
            >
              Bestill befaring
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ── */}
      <section className="bg-white border-b border-[#e2e8f0] py-10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2">
                <span className="text-[#ea580c]">{item.icon}</span>
                <p className="font-semibold text-[#1e293b] text-sm">{item.label}</p>
                <p className="text-[#64748b] text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OM OSS ── */}
      <section id="om-oss" className="py-10 md:py-16 bg-[#f8fafc]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">
                Om oss
              </p>
              <h2 className="font-bold text-[#1e293b] leading-tight mb-5" style={{ fontSize: '1.75rem' }}>
                Lokal fagmann du kan stole pa
              </h2>
              <div className="space-y-4 text-[#64748b] mb-6">
                <p>
                  Magnus (37) er en sertifisert fagmann fra Vegarsshei. Han sa at det manglet en lokal
                  aktor som spesialiserte seg pa varmepumper i omradet, og bestemte seg for a gjore noe med det.
                </p>
                <p>
                  I dag tilbyr han alt fra gratis befaring og radgiving til sertifisert montering og fast
                  serviceordning. Alle oppdrag utfores av Magnus personlig.
                </p>
              </div>
              <blockquote className="border-l-4 border-[#ea580c] pl-4 text-[#1e293b] italic font-medium mb-6">
                "Det er ingen andre her i omradet som driver med dette, derfor startet jeg."
              </blockquote>
              <a
                href="/demo/agdervogv/om-oss"
                className="inline-flex items-center gap-1.5 text-[#ea580c] font-semibold text-sm hover:underline"
              >
                Les mer om oss
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md" style={{ height: '380px' }}>
              <img
                src="/demo/agdervogv/technician.jpg"
                alt="Magnus, fagmann hos Agder Varme og Vedlikehold"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TJENESTER ── */}
      <section id="tjenester" className="py-10 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">
              Tjenester
            </p>
            <h2 className="font-bold text-[#1e293b] leading-tight mb-3" style={{ fontSize: '1.75rem' }}>
              Alt du trenger - ett sted
            </h2>
            <p className="text-[#64748b] max-w-xl">
              Fra forste befaring til fast serviceavtale. Vi tar oss av hele prosessen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-slate-200 shadow-sm overflow-hidden bg-white"
              >
                <div className="h-44 bg-slate-100">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1e293b] mb-1.5">{s.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8">
            <a
              href="/demo/agdervogv/tjenester"
              className="inline-flex items-center gap-1.5 text-[#ea580c] font-semibold text-sm hover:underline"
            >
              Se alle tjenester
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </p>
        </div>
      </section>

      {/* ── 5. PRODUKTER ── */}
      <section id="produkter" className="py-10 md:py-16 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">
              Produkter
            </p>
            <h2 className="font-bold text-[#1e293b] leading-tight mb-3" style={{ fontSize: '1.75rem' }}>
              Ledende merker
            </h2>
            <p className="text-[#64748b]">
              Vi leverer og monterer varmepumper fra de beste produsentene. Magnus hjelper deg velge riktig.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {brands.map((b) => (
              <span
                key={b}
                className="px-5 py-2.5 bg-white border border-slate-200 rounded-lg font-semibold text-[#1e293b] text-sm shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>

          <a
            href="/demo/agdervogv/produkter"
            className="inline-flex items-center gap-1.5 text-[#ea580c] font-semibold text-sm hover:underline"
          >
            Les mer om produktene
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section id="faq" className="py-10 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">
              Sporsmaal og svar
            </p>
            <h2 className="font-bold text-[#1e293b] leading-tight" style={{ fontSize: '1.75rem' }}>
              Vanlige sporsmaal
            </h2>
          </div>

          <div className="max-w-2xl space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="border border-[#e2e8f0] rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[#1e293b] text-sm">
                  <span>{item.q}</span>
                  <span className="faq-chevron text-[#ea580c] text-xl flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-sm text-[#64748b] leading-relaxed border-t border-[#e2e8f0]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. KONTAKT ── */}
      <section id="kontakt" className="py-10 md:py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">
              Kontakt
            </p>
            <h2 className="font-bold text-[#1e293b] leading-tight" style={{ fontSize: '1.75rem' }}>
              Ta kontakt med Magnus
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-[#ea580c] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <IconPhone />
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-0.5">Telefon</p>
                  <a href="tel:97123554" className="text-2xl font-bold text-[#1e293b] hover:text-[#ea580c] transition-colors">
                    97 12 35 54
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-[#f1f5f9] rounded-lg flex items-center justify-center text-[#ea580c] flex-shrink-0">
                  <IconMail />
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-0.5">E-post</p>
                  <a href="mailto:hei@agdervogv.no" className="font-semibold text-[#1e293b] hover:text-[#ea580c] transition-colors">
                    hei@agdervogv.no
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-[#f1f5f9] rounded-lg flex items-center justify-center text-[#ea580c] flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-0.5">Adresse</p>
                  <p className="font-semibold text-[#1e293b]">Sagaveien 7, 4985 Vegarsshei</p>
                  <p className="text-sm text-[#64748b]">Betjener Vegarsshei og omegn</p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-lg overflow-hidden border border-[#e2e8f0] bg-slate-100 flex items-center justify-center mt-4" style={{ height: '180px' }}>
                <div className="text-center text-[#64748b]">
                  <svg className="w-8 h-8 mx-auto mb-2 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-sm">Vegarsshei, Aust-Agder</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-6 sm:p-8">
              <h3 className="font-bold text-[#1e293b] text-lg mb-1">Send en melding</h3>
              <p className="text-sm text-[#64748b] mb-6">Vi svarer innen en arbeidsdag.</p>

              <form action="#kontakt" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1e293b] mb-1.5">Navn</label>
                    <input
                      type="text"
                      placeholder="Ola Nordmann"
                      className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#1e293b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1e293b] mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      placeholder="900 00 000"
                      className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#1e293b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e293b] mb-1.5">E-post</label>
                  <input
                    type="email"
                    placeholder="din@epost.no"
                    className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#1e293b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e293b] mb-1.5">Melding</label>
                  <textarea
                    rows={4}
                    placeholder="Hva kan vi hjelpe deg med?"
                    className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#1e293b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Send melding
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
