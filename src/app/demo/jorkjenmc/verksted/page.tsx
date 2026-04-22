export const metadata = { robots: 'noindex' };

export default function VerkstedPage() {
  return (
    <>
      {/* Foto-banner */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/demo/jorkjenmc/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 pb-8">
          <p className="text-zinc-400 text-sm mb-2">Jorkjen MC A/S</p>
          <h1
            className="text-4xl sm:text-6xl font-black text-white leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Verksted
          </h1>
        </div>
      </section>

      {/* Godkjent-strip */}
      <section className="bg-zinc-800 border-b border-zinc-700">
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center gap-3">
          <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-zinc-300 text-sm">Godkjent av Statens Vegvesen som motorsykkel- og mopedverksted</span>
        </div>
      </section>

      {/* Verkstedtjenester */}
      <section className="bg-[#f8f7f4] py-16 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2
              className="text-4xl font-black text-zinc-900 mb-5 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              MC- og mopedverksted i Arendal
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-4">
              Jorkjen MC er et fullt godkjent verksted for MC og moped. Med fagbrev
              og lang erfaring, alt fra rutineservice til mer kompliserte reparasjoner.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Jorkjen MC bruker Motul-oljer og har gode leverandøravtaler som gir
              kort leveringstid på deler.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Service og reparasjon',
                  text: 'Alt fra rutineservice til kompliserte reparasjoner på MC og moped.',
                },
                {
                  title: 'Kort leveringstid på deler',
                  text: 'Gode leverandøravtaler gir rask levering. Sykkelen er ferdig så snart som mulig.',
                },
                {
                  title: 'Fagbrev og godkjent kompetanse',
                  text: 'Fagbrev og relevant kompetanse for alle typer MC og moped.',
                },
                {
                  title: 'Motul-oljer',
                  text: 'Jorkjen MC bruker og fører Motul-oljer, et av verdens ledende merker innen smøring.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 bg-green-600 rounded-full shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-0.5">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <p className="text-xs text-zinc-400 mt-3 mb-6">Øvrige dager: stengt</p>

            <div>
              <p className="text-zinc-500 text-sm mb-1">Book verkstedtime</p>
              <a
                href="tel:90549772"
                className="text-2xl font-black text-zinc-900 hover:text-green-700 transition-colors"
                style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
              >
                905 49 772
              </a>
              <p className="text-zinc-500 text-sm mt-1">Ring Kenneth direkte. Du får et estimat på tid og pris.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lenke til vinterlagring */}
      <section className="bg-white border-t border-zinc-200 py-8 px-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-zinc-900">Vinterlagring</p>
            <p className="text-zinc-500 text-sm">kr 2 390,- inkl. mva og 10-punkt sjekk</p>
          </div>
          <a
            href="/demo/jorkjenmc/vinterlagring"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-700 text-white font-bold px-5 py-3 text-sm transition-colors shrink-0"
          >
            Les mer om vinterlagring
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
