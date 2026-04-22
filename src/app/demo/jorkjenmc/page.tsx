export const metadata = { robots: 'noindex' };

export default function JorkjenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/demo/jorkjenmc/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 pb-10 sm:pb-14">
          <h1
            className="text-4xl sm:text-5xl font-black text-white leading-[0.9] mb-4"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Motorsykkel-
            <br />
            verksted og
            <br />
            totalleverandør
          </h1>
          <p className="text-zinc-300 text-base mb-7 max-w-md leading-relaxed">
            Godkjent av Statens Vegvesen. Fagbrev og relevant kompetanse.
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
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white font-medium text-base py-4 transition-colors"
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
              className="text-4xl sm:text-5xl font-black text-zinc-900 mb-5 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              Faglig godkjent verksted i Arendal
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-4">
              Jorkjen MC er et fullt godkjent verksted for MC og moped på Frolandsveien
              i Arendal. Med fagbrev og bred erfaring med alt fra rutineservice til mer
              kompliserte reparasjoner.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Jorkjen MC fører Motul-oljer og har gode leverandøravtaler som gir
              kort leveringstid på deler.
            </p>
            <a
              href="tel:90549772"
              className="inline-block bg-zinc-900 hover:bg-zinc-700 text-white font-bold px-6 py-3 transition-colors"
            >
              Ring Kenneth direkte
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Åpningstider</h3>
            <div className="border-l-4 border-yellow-400 bg-yellow-50 px-4 py-3 text-yellow-800 text-sm font-medium mb-4">
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
            <p className="text-xs text-zinc-400 mt-3">Øvrige dager: stengt</p>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section className="bg-[#111] py-14 px-5 text-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl font-black mb-8 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Tjenester
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Verksted og service',
                desc: 'Reparasjon og service på MC og moped. Fagbrev i bunn og Motul-oljer i maskinen.',
                href: '/demo/jorkjenmc/verksted',
                cta: 'Les mer',
                sub: null,
              },
              {
                title: 'Vinterlagring',
                desc: 'Frostfritt lokale med FG godkjent alarm. 10-punkt sjekk inkludert.',
                href: '/demo/jorkjenmc/vinterlagring',
                cta: 'Se detaljer',
                sub: 'kr 2 390,- inkl. mva',
              },
              {
                title: 'Butikk og deler',
                desc: 'Olje, filter, plugger, hjelmer og hansker. Motul-forhandler. Kjøretøyer til salgs.',
                href: '/demo/jorkjenmc/butikk',
                cta: 'Se butikk',
                sub: null,
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 p-6 flex flex-col gap-3 transition-colors group"
              >
                <h3
                  className="text-2xl font-black text-white leading-tight group-hover:text-green-400 transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
                >
                  {item.title}
                </h3>
                {item.sub && (
                  <span className="text-green-400 font-bold text-sm">{item.sub}</span>
                )}
                <p className="text-zinc-400 text-sm leading-relaxed flex-1">{item.desc}</p>
                <span className="text-zinc-500 group-hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-1.5 mt-1">
                  {item.cta}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-[#f8f7f4] py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-black text-zinc-900 mb-8 leading-tight"
                style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
              >
                Ta kontakt
              </h2>

              <div className="mb-6">
                <p className="text-zinc-500 text-sm mb-1">Ring Kenneth</p>
                <a
                  href="tel:90549772"
                  className="text-4xl sm:text-5xl font-black text-zinc-900 hover:text-green-700 transition-colors tracking-tight"
                  style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
                >
                  905 49 772
                </a>
              </div>

              <div className="mb-5">
                <p className="text-zinc-500 text-sm mb-1">E-post</p>
                <a href="mailto:verksted@jorkjenmc.no" className="text-zinc-700 hover:text-zinc-900 transition-colors font-medium">
                  verksted@jorkjenmc.no
                </a>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Adresse</p>
                <p className="text-zinc-700">Frolandsveien 410, 4838 Arendal</p>
              </div>
            </div>

            <div>
              <p className="text-zinc-500 text-sm mb-3">Åpningstider</p>
              <div className="divide-y divide-zinc-200 mb-5">
                <div className="py-2.5 text-yellow-700 text-sm font-medium">
                  Sommerstengt uke 29-31
                </div>
                {[
                  { dag: 'Tirsdag', tid: '09.00-16.00' },
                  { dag: 'Onsdag', tid: '10.00-14.30' },
                  { dag: 'Torsdag', tid: '09.00-17.00' },
                ].map((rad) => (
                  <div key={rad.dag} className="flex justify-between py-2.5">
                    <span className="text-zinc-800 font-medium">{rad.dag}</span>
                    <span className="text-zinc-500">{rad.tid}</span>
                  </div>
                ))}
                <div className="py-2.5 text-zinc-400 text-sm">Øvrige dager: stengt</div>
              </div>
              <p className="text-zinc-400 text-xs">Org.nr: 999 100 899</p>
            </div>
          </div>

          <div className="w-full h-72 overflow-hidden">
            <iframe
              title="Kart Jorkjen MC"
              src="https://www.openstreetmap.org/export/embed.html?bbox=8.677%2C58.470%2C8.701%2C58.486&layer=mapnik&marker=58.478%2C8.689"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1)' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
