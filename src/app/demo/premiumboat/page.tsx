import Header from './_header';

export const metadata = {
  title: 'Premium Boat Service AS - Båtlager og service i Arendal',
  description:
    'Moderne båtlager, motorservice, reparasjoner og klargjøring i Arendal. Lift og oppvarmet innendørs lager.',
  robots: 'noindex',
};

const HERO_IMAGE =
  'https://web.archive.org/web/20250118174048im_/https://premiumboat.no/wp-content/uploads/2021/09/premiumboats-header-cover-03.jpg';

const AERIAL_IMAGE =
  'https://web.archive.org/web/20250118174048im_/https://premiumboat.no/wp-content/uploads/2021/09/premiumboats-photo1s.jpg';

const LOGO =
  'https://web.archive.org/web/20250118174048im_/https://premiumboat.no/wp-content/uploads/2021/09/premiumboat-logo.png';

const services = [
  { name: 'Båtformidling', desc: 'Vi hjelper deg med kjøp og salg av båt' },
  { name: 'Motorservice', desc: 'Service og vedlikehold av alle motortyper' },
  { name: 'Klargjøring', desc: 'Sjø- og vinterklargjøring av båten din' },
  { name: 'Oppgradering', desc: 'Elektronikk, motor og utstyroppgraderinger' },
  { name: 'Reparasjoner', desc: 'Skrog, motor, innredning - alle typer reparasjoner' },
  { name: 'Båtopplag', desc: 'Trygg innendørs og utendørs vinterlager' },
  { name: 'Båtpleie', desc: 'Polering, voks, rens og beskyttelse' },
  { name: 'Ettermontering', desc: 'Montering av utstyr og tilbehør' },
  { name: 'Restaurering', desc: 'Fullstendig restaurering av eldre båter' },
];

const storagePlans = [
  {
    name: 'Utendørs opplag',
    price: '3 490,-',
    period: 'per sesong',
    features: [
      'Sikret område',
      'Strikkavtrekk inkludert',
      'Av/på-vogn tilgjengelig',
      'Ubegrenset tilgang',
    ],
    highlight: false,
  },
  {
    name: 'Innendørs opplag',
    price: '6 490,-',
    period: 'per sesong',
    features: [
      'Oppvarmet lager',
      'Video-overvåking',
      'Båtvask inkludert',
      'Prioritert klargjøring',
    ],
    highlight: true,
  },
  {
    name: 'Full service-pakke',
    price: '9 990,-',
    period: 'per sesong',
    features: [
      'Innendørs oppvarmet lager',
      'Motorservice inkludert',
      'Sjøklargjøring',
      'Vinterklargjøring',
    ],
    highlight: false,
  },
];

export default function PremiumBoatPage() {
  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", color: '#1a2e40' }}>

      <Header />

      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center min-h-screen"
        style={{ minHeight: '100svh' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 28, 46, 0.65)' }} />

        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, transparent, #c8a96e, transparent)' }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <p
            style={{
              color: '#c8a96e',
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: '0.2em',
            }}
            className="text-sm sm:text-base font-semibold uppercase mb-4"
          >
            Båtservice og lager i Arendal
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: '#ffffff',
              lineHeight: 1.05,
            }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Nyhet! Bli båtopplagskunde hos oss.
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mb-10 font-light max-w-xl mx-auto">
            Moderne anlegg med båtlift og oppvarmet innendørs lager.
            Drevet av båtentusiaster med lang erfaring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#batopplag"
              className="px-8 py-4 font-bold text-base sm:text-lg rounded hover:opacity-90 transition-opacity inline-block"
              style={{
                backgroundColor: '#c8a96e',
                color: '#0d1f30',
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: '0.05em',
              }}
            >
              BESTILL BÅTOPPLAG
            </a>
            <a
              href="#kontakt"
              className="px-8 py-4 font-bold text-base sm:text-lg rounded border-2 border-white/70 text-white hover:bg-white/10 transition-colors inline-block"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: '0.05em',
              }}
            >
              KONTAKT
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity={0.5}>
            <path d="M7 10l5 5 5-5H7z"/>
          </svg>
        </div>
      </section>

      {/* ── ABOUT + SERVICES ── */}
      <section id="om-oss" className="py-20 sm:py-28" style={{ backgroundColor: '#f7f9fb' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p
              style={{ color: '#c8a96e', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.2em' }}
              className="text-sm font-semibold uppercase mb-3"
            >
              Om oss
            </p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#1a3a5c' }}
              className="text-3xl sm:text-5xl font-bold mb-6"
            >
              Båtentusiaster med lang erfaring
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Premium Boat Service AS er et moderne båt- og servicesenter i Arendal. Vi tilbyr
              alt fra vinterlager og motorservice til restaurering og båtformidling. Anlegget
              er utstyrt med båtlift og oppvarmet innendørs lager, og vi jobber med alle
              merker og modeller.
            </p>
          </div>

          <div id="tjenester" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div
                  className="w-10 h-1 mb-4 rounded-full"
                  style={{ backgroundColor: '#c8a96e' }}
                />
                <h3
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#1a3a5c' }}
                  className="text-xl font-bold mb-2"
                >
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BATOPPLAG / PRICING ── */}
      <section id="batopplag" className="py-20 sm:py-28" style={{ backgroundColor: '#1a3a5c' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p
              style={{ color: '#c8a96e', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.2em' }}
              className="text-sm font-semibold uppercase mb-3"
            >
              Vinteropplag 2025/2026
            </p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-3xl sm:text-5xl font-bold text-white mb-4"
            >
              Båtopplag - Velg din pakke
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Trygt og sikkert opplag for båten din. Kontakt oss for tilbud på din båt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {storagePlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: plan.highlight ? '#c8a96e' : 'rgba(255,255,255,0.07)',
                  border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                {plan.highlight && (
                  <div
                    className="text-center py-2 text-xs font-bold tracking-widest uppercase"
                    style={{ backgroundColor: '#b8924a', color: '#0d1f30' }}
                  >
                    Mest populær
                  </div>
                )}
                <div className="p-8">
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: plan.highlight ? '#1a3a5c' : '#ffffff',
                    }}
                    className="text-2xl font-bold mb-1"
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        color: plan.highlight ? '#1a3a5c' : '#c8a96e',
                      }}
                      className="text-4xl font-bold"
                    >
                      {plan.price}
                    </span>
                    <span
                      className="text-sm ml-1"
                      style={{ color: plan.highlight ? '#3a5a7c' : 'rgba(255,255,255,0.5)' }}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: plan.highlight ? '#1a3a5c' : 'rgba(255,255,255,0.8)' }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={plan.highlight ? '#1a3a5c' : '#c8a96e'}
                          className="flex-shrink-0"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#kontakt"
                    className="block text-center py-3 px-6 rounded font-bold text-sm tracking-wide transition-opacity hover:opacity-90"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      backgroundColor: plan.highlight ? '#1a3a5c' : 'rgba(255,255,255,0.12)',
                      color: '#ffffff',
                      letterSpacing: '0.07em',
                    }}
                  >
                    BESTILL NÅ
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-white/40 text-sm">
            Prisene er veiledende. Kontakt oss for eksakt tilbud basert på din båt.
          </p>
        </div>
      </section>

      {/* ── AERIAL PHOTO SECTION ── */}
      <section className="relative h-72 sm:h-96 lg:h-[480px] overflow-hidden">
        <img
          src={AERIAL_IMAGE}
          alt="Premium Boat Service - Oversiktsbilde av anlegget"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(10, 28, 46, 0.55)' }}
        >
          <div className="text-center px-4">
            <p
              style={{ color: '#c8a96e', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.2em' }}
              className="text-xs sm:text-sm font-semibold uppercase mb-3"
            >
              Skarpnestangen, Arendal
            </p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-3xl sm:text-5xl font-bold text-white"
            >
              Moderne anlegg med båtlift
            </h2>
            <p className="text-white/70 mt-3 text-base sm:text-lg max-w-lg mx-auto">
              Oppvarmet innendørs lager og full servicekapasitet for alle typer båter.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="kontakt" className="py-20 sm:py-28" style={{ backgroundColor: '#f7f9fb' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p
                style={{ color: '#c8a96e', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.2em' }}
                className="text-sm font-semibold uppercase mb-3"
              >
                Ta kontakt
              </p>
              <h2
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#1a3a5c' }}
                className="text-3xl sm:text-5xl font-bold mb-8"
              >
                Vi er klare til å hjelpe deg
              </h2>

              <div className="space-y-6">
                <a
                  href="tel:+4790663083"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1a3a5c' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#c8a96e">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Telefon</p>
                    <p
                      style={{ color: '#1a3a5c', fontFamily: "'Barlow Condensed', sans-serif" }}
                      className="text-xl font-semibold group-hover:text-blue-700 transition-colors"
                    >
                      +47 906 63 083
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:jon@premiumboat.no"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1a3a5c' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#c8a96e">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">E-post</p>
                    <p
                      style={{ color: '#1a3a5c', fontFamily: "'Barlow Condensed', sans-serif" }}
                      className="text-xl font-semibold group-hover:text-blue-700 transition-colors"
                    >
                      jon@premiumboat.no
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1a3a5c' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#c8a96e">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Adresse</p>
                    <p
                      style={{ color: '#1a3a5c', fontFamily: "'Barlow Condensed', sans-serif" }}
                      className="text-xl font-semibold"
                    >
                      Skarpnestangen 9
                    </p>
                    <p style={{ color: '#4a6a8c' }} className="text-base">4823 Nedenes, Arendal</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-8 sm:p-10"
              style={{ backgroundColor: '#1a3a5c' }}
            >
              <h3
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-2xl sm:text-3xl font-bold text-white mb-3"
              >
                Klar for sesongens opplag?
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Ring oss eller send en e-post for å få et tilbud på båtopplag
                eller service. Vi svarer raskt og hjelper deg med det du trenger.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+4790663083"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-lg font-bold text-base transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: '#c8a96e',
                    color: '#0d1f30',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: '0.07em',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  RING +47 906 63 083
                </a>
                <a
                  href="mailto:jon@premiumboat.no"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-lg font-bold text-base transition-colors hover:bg-white/10"
                  style={{
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: 'white',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: '0.07em',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  SEND E-POST
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#0d1f30' }} className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div>
              <img
                src={LOGO}
                alt="Premium Boat Service AS"
                className="h-10 w-auto object-contain mb-4"
              />
              <p className="text-white/40 text-sm">
                Båtservice og lager i Arendal
              </p>
            </div>
            <div
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-right text-white/60 space-y-1 text-sm sm:text-base"
            >
              <p className="text-white font-semibold">Premium Boat Service AS</p>
              <p>Skarpnestangen 9, 4823 Nedenes</p>
              <a href="tel:+4790663083" className="block hover:text-white transition-colors">
                +47 906 63 083
              </a>
              <a href="mailto:jon@premiumboat.no" className="block hover:text-white transition-colors">
                jon@premiumboat.no
              </a>
            </div>
          </div>
          <div
            className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.25)' }}
          >
            <p>2025 Premium Boat Service AS. Alle rettigheter forbeholdt.</p>
            <p>Org.nr. 999 999 999</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
