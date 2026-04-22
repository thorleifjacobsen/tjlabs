export const metadata = { robots: 'noindex' };

const tiPunktSjekk = [
  'Dekkslitasje / dekktrykk',
  'Bremseklosser',
  'Bremseveskens kokepunkt',
  'Olje',
  'Luftfilter',
  'Hjullager',
  'Styrelager',
  'Simmeringer',
  'Batterisyre og vedlikeholdslading',
  'Kjøleveske',
];

export default function JorkjenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/demo/jorkjenmc/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 pb-14 sm:pb-20">
          <p className="text-zinc-400 text-sm mb-4">Frolandsveien 410, 4838 Arendal</p>
          <h1
            className="text-5xl sm:text-7xl font-black text-white leading-[1.0] mb-5"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Motorsykkel-
            <br />
            verksted og
            <br />
            totalleverandør
          </h1>
          <p className="text-zinc-300 text-lg mb-8 max-w-lg leading-relaxed">
            Godkjent av Statens Vegvesen. Mekanikere med fagbrev.
            Kort leveringstid på deler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="tel:90549772"
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-black font-bold px-7 py-4 text-xl transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              905 49 772
            </a>
            <a
              href="/demo/jorkjenmc/verksted"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white font-medium text-lg py-4 transition-colors"
            >
              Se verkstedtjenester
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Godkjent-strip */}
      <section className="bg-zinc-800 border-b border-zinc-700">
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center gap-3">
          <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-zinc-300 text-sm">
            Godkjent av Statens Vegvesen som motorsykkel- og mopedverksted
          </span>
        </div>
      </section>

      {/* Om verkstedet + åpningstider */}
      <section className="bg-[#f8f7f4] py-16 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2
              className="text-4xl sm:text-5xl font-black text-zinc-900 mb-6 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              Vi fikser sykkelen din
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-4">
              Jorkjen MC er et fullt godkjent verksted for MC og moped på Frolandsveien
              i Arendal. Kenneth og laget har fagbrev og bred erfaring med alt fra
              rutineservice til mer kompliserte reparasjoner.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Vi fører Motul-oljer og har gode leverandøravtaler som gir kort
              leveringstid på deler. Sykkelen din skal stå minst mulig.
            </p>
            <a
              href="tel:90549772"
              className="inline-block bg-zinc-900 hover:bg-zinc-700 text-white font-bold px-6 py-3 transition-colors"
            >
              Ring Kenneth direkte
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-zinc-900 mb-5">Åpningstider</h3>
            <div className="border-l-4 border-yellow-400 bg-yellow-50 px-4 py-3 text-yellow-800 text-sm font-medium mb-5">
              Sommerstengt uke 29-31
            </div>
            {[
              { dag: 'Tirsdag', tid: '09.00-16.00' },
              { dag: 'Onsdag', tid: '10.00-14.30' },
              { dag: 'Torsdag', tid: '09.00-17.00' },
            ].map((rad, i) => (
              <div
                key={rad.dag}
                className={`flex justify-between items-center py-3.5 border-b border-zinc-200 ${i === 0 ? 'border-t' : ''}`}
              >
                <span className="font-semibold text-zinc-800">{rad.dag}</span>
                <span className="text-zinc-600">{rad.tid}</span>
              </div>
            ))}
            <div className="mt-6 pt-5 border-t border-zinc-200">
              <p className="text-sm text-zinc-500 mb-1">Bestill time</p>
              <a href="tel:90549772" className="text-2xl font-bold text-zinc-900 hover:text-green-700 transition-colors">
                905 49 772
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section className="bg-[#111] py-16 px-5 text-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl font-black mb-10 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Hva vi gjør
          </h2>
          <div className="divide-y divide-zinc-800">
            {[
              {
                nr: '01',
                title: 'Verksted og service',
                desc: 'Reparasjon og service på MC og moped. Fagbrevmekanikere med relevant kompetanse. Vi bruker Motul-oljer og kvalitetsdeler.',
                href: '/demo/jorkjenmc/verksted',
                cta: 'Se verkstedtjenester',
              },
              {
                nr: '02',
                title: 'Vinterlagring',
                desc: 'Trygg lagring i frostfritt lokale med FG godkjent alarm. Inkluderer 10-punkt sjekk slik at sykkelen er klar til kjøring om våren.',
                href: '#vinterlagring',
                cta: 'Se pris og innhold',
                price: 'kr 2 390,-',
              },
              {
                nr: '03',
                title: 'Butikk og deler',
                desc: 'Vi fører olje, filter, plugger, hjelmer og hansker. Kjøretøyer til salgs. Motul-forhandler.',
                href: '/demo/jorkjenmc/butikk',
                cta: 'Se butikk',
              },
            ].map((item) => (
              <div
                key={item.nr}
                className="py-8 flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-start"
              >
                <span className="text-zinc-600 font-mono text-sm shrink-0 pt-1">{item.nr}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    {item.price && (
                      <span className="text-green-400 font-bold text-lg">{item.price} inkl. mva</span>
                    )}
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-4 max-w-xl">{item.desc}</p>
                  <a
                    href={item.href}
                    className="text-zinc-300 hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-1.5"
                  >
                    {item.cta}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vinterlagring */}
      <section id="vinterlagring" className="bg-[#f8f7f4] py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-black text-zinc-900 mb-2 leading-tight"
                style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
              >
                Vinterlagring
              </h2>
              <div className="text-6xl font-black text-zinc-900 mt-6 mb-1 leading-none">
                kr 2 390,-
              </div>
              <p className="text-zinc-500 text-base mb-7">inkl. mva og 10-punkt sjekk</p>

              <div className="flex items-start gap-3 p-4 bg-zinc-100 border border-zinc-200 mb-7">
                <svg className="w-5 h-5 text-green-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-zinc-700 text-sm leading-relaxed">
                  Frostfritt lokale med FG godkjent alarm
                </span>
              </div>

              <a
                href="tel:90549772"
                className="inline-block bg-zinc-900 hover:bg-zinc-700 text-white font-bold px-7 py-4 text-lg transition-colors"
              >
                Ring for å bestille
              </a>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-500 uppercase tracking-wide mb-5">
                10-punkt sjekk inkludert
              </h3>
              <ol className="space-y-3">
                {tiPunktSjekk.map((punkt, i) => (
                  <li key={punkt} className="flex items-center gap-4 border-b border-zinc-200 pb-3">
                    <span className="text-zinc-300 font-mono text-sm w-5 shrink-0">{i + 1}</span>
                    <span className="text-zinc-700">{punkt}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-[#111] py-16 px-5 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-black mb-8 leading-tight"
                style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
              >
                Ta kontakt
              </h2>

              <div className="mb-6">
                <p className="text-zinc-500 text-sm mb-1">Ring Kenneth</p>
                <a
                  href="tel:90549772"
                  className="text-4xl sm:text-5xl font-black text-white hover:text-green-400 transition-colors tracking-tight"
                  style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
                >
                  905 49 772
                </a>
              </div>

              <div className="mb-5">
                <p className="text-zinc-500 text-sm mb-1">E-post</p>
                <a
                  href="mailto:verksted@jorkjenmc.no"
                  className="text-zinc-200 hover:text-white transition-colors font-medium"
                >
                  verksted@jorkjenmc.no
                </a>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Adresse</p>
                <p className="text-zinc-200">Frolandsveien 410, 4838 Arendal</p>
              </div>
            </div>

            <div>
              <p className="text-zinc-500 text-sm mb-1">Åpningstider</p>
              <div className="divide-y divide-zinc-800 mb-6">
                <div className="py-3 text-yellow-500 text-sm font-medium">
                  Sommerstengt uke 29-31
                </div>
                {[
                  { dag: 'Tirsdag', tid: '09.00-16.00' },
                  { dag: 'Onsdag', tid: '10.00-14.30' },
                  { dag: 'Torsdag', tid: '09.00-17.00' },
                ].map((rad) => (
                  <div key={rad.dag} className="flex justify-between py-3">
                    <span className="text-zinc-300">{rad.dag}</span>
                    <span className="text-zinc-400">{rad.tid}</span>
                  </div>
                ))}
              </div>
              <p className="text-zinc-600 text-xs">Org.nr: 999 100 899</p>
            </div>
          </div>

          <div className="w-full h-80 overflow-hidden">
            <iframe
              title="Kart Jorkjen MC"
              src="https://www.openstreetmap.org/export/embed.html?bbox=8.765%2C58.473%2C8.815%2C58.503&layer=mapnik&marker=58.488%2C8.790"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
