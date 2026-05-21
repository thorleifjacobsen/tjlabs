// ─── Icons ───────────────────────────────────────────────────────────────────

function IconFlame({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c-.3 0-5 6.2-5 11a5 5 0 0010 0C17 8.2 12.3 2 12 2zm0 14.5a2.5 2.5 0 01-2.5-2.5C9.5 12 12 9 12 9s2.5 3 2.5 5a2.5 2.5 0 01-2.5 2.5z" />
    </svg>
  );
}

function IconPhone({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.82a16 16 0 006.08 6.08l1.17-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18v-.08z" />
    </svg>
  );
}

function IconShieldCheck({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconCheck({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconGrid({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function IconTag({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function IconWrench({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconSettings({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

function IconSearch({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconHome({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconClipboard({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

function IconMapPin({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconZap({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconUser({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconMail({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <IconTag className="w-6 h-6" />,
    title: 'Salg av varmepumpe',
    desc: 'Luft-til-luft pumper fra ledende merker. Vi hjelper deg finne riktig modell for ditt hjem.',
    accent: true,
  },
  {
    icon: <IconWrench className="w-6 h-6" />,
    title: 'Montering og installasjon',
    desc: 'Sertifisert og faglig korrekt installasjon. Utfores etter gjeldende forskrifter.',
  },
  {
    icon: <IconSettings className="w-6 h-6" />,
    title: 'Service og vedlikehold',
    desc: 'Arlig eller halvarslig service. Filterrengjoring, ytelseskontroll og lekkasjesjekk.',
  },
  {
    icon: <IconSearch className="w-6 h-6" />,
    title: 'Feilsøking og reparasjon',
    desc: 'Noe som ikke virker? Vi feilsøker og reparerer alle merker og modeller.',
  },
  {
    icon: <IconHome className="w-6 h-6" />,
    title: 'Gratis befaring',
    desc: 'Vi kommer hjem til deg, vurderer behovet og gir deg et konkret tilbud uten forpliktelser.',
    highlight: true,
  },
  {
    icon: <IconClipboard className="w-6 h-6" />,
    title: 'Serviceavtale',
    desc: 'Fast avtale for årlig service. Forutsigbare kostnader og prioritert responstid.',
  },
];

const whyLocal = [
  {
    icon: <IconMapPin className="w-7 h-7" />,
    title: 'Lokalkjent',
    desc: 'Magnus kjenner klimaet og forholdene i Agder godt. Det gir bedre råd og riktigere løsninger.',
  },
  {
    icon: <IconZap className="w-7 h-7" />,
    title: 'Rask respons',
    desc: 'Kort vei = rask hjelp. Ingen lange ventelister eller sentraliserte bookingsystemer.',
  },
  {
    icon: <IconUser className="w-7 h-7" />,
    title: 'Personlig service',
    desc: 'Du snakker alltid med Magnus, ikke et callsenter. Direkte, ærlig og uforpliktende.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AgderVOVPage() {
  return (
    <>
      {/* ────────────────────────────────────────
          1. HEADER
      ──────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/demo/agdervov/logo.png"
              alt="Agder Varme og Vedlikehold"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-500">
            <a href="#tjenester" className="hover:text-[#1c1c1c] transition-colors">Tjenester</a>
            <a href="#om-oss" className="hover:text-[#1c1c1c] transition-colors">Om oss</a>
            <a href="#kontakt" className="hover:text-[#1c1c1c] transition-colors">Kontakt</a>
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:97123554"
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            <IconPhone className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">97 12 35 54</span>
            <span className="sm:hidden">Ring oss</span>
          </a>
        </div>
      </header>

      {/* ────────────────────────────────────────
          2. HERO
      ──────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-14 items-center">
            {/* Text */}
            <div>
              <span className="inline-block text-orange-600 text-xs font-semibold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">
                Agder
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-[#1c1c1c]">
                Din lokale<br />varmepumpe-<br />ekspert.
              </h1>
              <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-lg">
                Salg, montering og service av varmepumper. Eneste lokale fagmann i området.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="tel:97123554"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-colors"
                >
                  Bestill befaring
                </a>
                <a
                  href="#tjenester"
                  className="flex items-center gap-2 text-[#1c1c1c] font-semibold hover:text-orange-600 transition-colors text-base"
                >
                  Se tjenester
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="mt-5 text-sm text-gray-400 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <IconCheck className="w-2.5 h-2.5 text-white" />
                </span>
                Gratis og uforpliktende befaring
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 lg:h-[520px] shadow-xl">
              <img
                src="/demo/agdervov/hero.jpg"
                alt="Varmepumpe montert på fasade"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          3. TRUST BAR
      ──────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 sm:gap-x-16">
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <span className="text-orange-600">
                <IconShieldCheck className="w-5 h-5" />
              </span>
              Sertifisert fagmann
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <span className="text-orange-600">
                <IconGrid className="w-5 h-5" />
              </span>
              Alle merker og modeller
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <span className="text-orange-600">
                <IconHome className="w-5 h-5" />
              </span>
              Gratis befaring
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          4. SERVICES
      ──────────────────────────────────────── */}
      <section id="tjenester" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1c]">Tjenester vi tilbyr</h2>
            <p className="mt-3 text-gray-500 text-base leading-relaxed">
              Fra råd og salg til montering, service og reparasjon. Vi tar oss av alt fra start til slutt.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className={`relative rounded-xl p-6 flex flex-col gap-4 ${
                  s.accent
                    ? 'overflow-hidden text-white'
                    : s.highlight
                    ? 'border-2 border-orange-600 bg-orange-50'
                    : 'border border-gray-100 bg-[#faf8f5]'
                }`}
              >
                {s.accent && (
                  <>
                    <img
                      src="/demo/agdervov/outdoor-unit.jpg"
                      alt=""
                      aria-hidden
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-orange-700/80" />
                  </>
                )}
                <span
                  className={`relative w-11 h-11 rounded-xl flex items-center justify-center ${
                    s.accent
                      ? 'bg-white/20 text-white'
                      : s.highlight
                      ? 'bg-orange-600 text-white'
                      : 'bg-orange-100 text-orange-600'
                  }`}
                >
                  {s.icon}
                </span>
                <div className="relative">
                  <h3
                    className={`font-bold text-base leading-snug ${
                      s.accent ? 'text-white' : 'text-[#1c1c1c]'
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-1.5 text-sm leading-relaxed ${
                      s.accent ? 'text-white/80' : 'text-gray-500'
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          5. ABOUT / STORY
      ──────────────────────────────────────── */}
      <section id="om-oss" className="py-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden h-80 sm:h-[420px] shadow-lg order-2 lg:order-1">
              <img
                src="/demo/agdervov/technician.jpg"
                alt="Magnus, fagmann hos Agder Varme og Vedlikehold"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-orange-600 text-xs font-semibold uppercase tracking-widest mb-4">
                Om oss
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1c] leading-tight">
                Lokal fagmann du kan stole på.
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Magnus (37) så muligheten som ingen andre hadde grep fatt i: Agder manglet en lokal
                  aktør som spesialiserte seg på varmepumper. Han hadde fagkunnskapen, lokalkjennskapen og lysten til
                  å hjelpe naboene sine.
                </p>
                <p>
                  Resultatet er Agder Varme og Vedlikehold. Et en-mannsforetak bygget på ærlighet, faglig stolthet
                  og godt håndverk. Ingen mellomledd, ingen anonyme teknikere. Bare Magnus.
                </p>
              </div>

              <blockquote className="mt-7 border-l-4 border-orange-600 pl-5">
                <p className="text-lg font-semibold text-[#1c1c1c] leading-snug italic">
                  "Det er ingen andre her i området som driver med dette, derfor startet jeg."
                </p>
                <footer className="mt-2 text-sm text-gray-500 not-italic font-medium">
                  Magnus, grunnlegger
                </footer>
              </blockquote>

              <div className="mt-7 flex items-center gap-2 text-sm text-gray-500">
                <IconMapPin className="w-4 h-4 text-orange-600 flex-shrink-0" />
                Etablert i Vegårshei
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          6. WHY LOCAL
      ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1c]">Hvorfor velge lokalt?</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Lokal ekspertise gir bedre rådgiving, kortere responstid og en fagmann som kjenner deg og ditt hjem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {whyLocal.map((item) => (
              <div key={item.title} className="bg-[#faf8f5] rounded-xl p-7 flex flex-col items-start gap-4">
                <span className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-bold text-lg text-[#1c1c1c]">{item.title}</h3>
                  <p className="mt-1.5 text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          7. CTA BANNER
      ──────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Klar for å spare strøm i vinter?
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            Ring Magnus for en gratis befaring i dag.
          </p>
          <a
            href="tel:97123554"
            className="mt-8 inline-flex items-center gap-3 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
          >
            <IconPhone className="w-6 h-6" />
            97 12 35 54
          </a>
          <p className="mt-4 text-sm text-orange-200">Gratis og uforpliktende</p>
        </div>
      </section>

      {/* ────────────────────────────────────────
          8. CONTACT
      ──────────────────────────────────────── */}
      <section id="kontakt" className="relative py-20">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/demo/agdervov/cozy-home.jpg"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1c1c1c]/80" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact info */}
            <div className="text-white pt-2">
              <span className="inline-block text-orange-400 text-xs font-semibold uppercase tracking-widest mb-4">
                Kontakt
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Ta kontakt med Magnus
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Lurer du på noe? Vil du ha befaring? Ta gjerne kontakt direkte. Vi svarer raskt.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl bg-orange-600 flex items-center justify-center flex-shrink-0">
                    <IconPhone className="w-5 h-5 text-white" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Telefon</p>
                    <a
                      href="tel:97123554"
                      className="text-2xl font-bold text-white hover:text-orange-400 transition-colors"
                    >
                      97 12 35 54
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <IconMail className="w-5 h-5 text-orange-400" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">E-post</p>
                    <a
                      href="mailto:hei@agdervogv.no"
                      className="text-base font-semibold text-white hover:text-orange-400 transition-colors"
                    >
                      hei@agdervogv.no
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <IconMapPin className="w-5 h-5 text-orange-400" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Område</p>
                    <p className="text-base font-semibold text-white">Agder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-[#1c1c1c]">Send oss en melding</h3>
              <p className="mt-1 text-sm text-gray-500">Vi svarer innen en arbeidsdag.</p>

              <form className="mt-6 space-y-4" action="#kontakt">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="avov-name" className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Navn
                    </label>
                    <input
                      id="avov-name"
                      type="text"
                      placeholder="Ola Nordmann"
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-[#1c1c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="avov-phone" className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Telefon
                    </label>
                    <input
                      id="avov-phone"
                      type="tel"
                      placeholder="900 00 000"
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-[#1c1c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="avov-email" className="block text-xs font-semibold text-gray-600 mb-1.5">
                    E-post
                  </label>
                  <input
                    id="avov-email"
                    type="email"
                    placeholder="din@epost.no"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-[#1c1c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="avov-message" className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Melding
                  </label>
                  <textarea
                    id="avov-message"
                    rows={4}
                    placeholder="Hva kan vi hjelpe deg med?"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-[#1c1c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Send melding
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          9. FOOTER
      ──────────────────────────────────────── */}
      <footer className="bg-[#1c1c1c] text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg px-3 py-2">
                <img
                  src="/demo/agdervov/logo.png"
                  alt="Agder Varme og Vedlikehold"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-xs text-gray-500">Agder</p>
            </div>

            {/* Contact */}
            <div className="text-sm space-y-1 sm:text-right">
              <a href="tel:97123554" className="block hover:text-white transition-colors">
                97 12 35 54
              </a>
              <a href="mailto:hei@agdervogv.no" className="block hover:text-white transition-colors">
                hei@agdervogv.no
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-600">
            &copy; 2025 Agder Varme og Vedlikehold
          </div>
        </div>
      </footer>
    </>
  );
}
