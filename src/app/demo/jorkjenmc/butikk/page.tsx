export const metadata = { robots: 'noindex' };

export default function ButikkPage() {
  return (
    <>
      {/* Foto-banner */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/demo/jorkjenmc/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 pb-8">
          <p className="text-zinc-400 text-sm mb-2">Jorkjen MC A/S</p>
          <h1
            className="text-4xl sm:text-6xl font-black text-white leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Butikk og deler
          </h1>
        </div>
      </section>

      {/* Sommerstengt-varsel */}
      <section className="bg-yellow-400 border-b border-yellow-500">
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center gap-3 text-yellow-900">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="text-sm font-semibold">Sommerstengt uke 29-31</span>
        </div>
      </section>

      {/* Produkter */}
      <section className="bg-[#f8f7f4] py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl font-black text-zinc-900 mb-3 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            På lager
          </h2>
          <p className="text-zinc-600 text-lg mb-8 max-w-xl leading-relaxed">
            Olje, filter, plugger, hjelmer og hansker til MC og moped. Spør om det du
            leter etter er på lager.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {[
              { name: 'Olje', desc: 'Motul og mer' },
              { name: 'Filter', desc: 'Olje og luft' },
              { name: 'Plugger', desc: 'MC og moped' },
              { name: 'Hjelmer', desc: 'Godkjente' },
              { name: 'Hansker', desc: 'Sommer/vinter' },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-zinc-200 p-4 text-center">
                <div className="font-bold text-zinc-900 text-base mb-0.5">{p.name}</div>
                <div className="text-zinc-400 text-xs">{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Motul */}
          <div className="bg-[#111] text-white p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div>
              <div className="text-green-400 font-black text-xl tracking-widest mb-1">MOTUL</div>
              <p className="text-zinc-400 text-sm">
                Autorisert forhandler av Motul smøreoljer. Et av verdens mest anerkjente
                merker innen motorsportsmøring.
              </p>
            </div>
            <a
              href="tel:90549772"
              className="shrink-0 inline-block bg-white hover:bg-zinc-100 text-black font-bold px-5 py-3 text-sm transition-colors"
            >
              Spør om utvalg
            </a>
          </div>
        </div>
      </section>

      {/* Kjøretøyer til salgs */}
      <section className="bg-[#111] py-16 px-5 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-4xl font-black mb-4 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              Kjøretøyer til salgs
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Et utvalg MC-er og kjøretøyer til salgs. Stikk innom på Frolandsveien 410
              i åpningstiden, eller ring for å høre hva som er tilgjengelig.
            </p>
            <a
              href="tel:90549772"
              className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-black font-bold px-6 py-3 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              905 49 772
            </a>
          </div>
          <div className="w-full h-56 bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm border border-zinc-700">
            Bilde kommer her
          </div>
        </div>
      </section>

      {/* Åpningstider */}
      <section className="bg-[#f8f7f4] py-14 px-5">
        <div className="max-w-sm mx-auto">
          <h2
            className="text-3xl font-black text-zinc-900 mb-4 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Åpningstider
          </h2>
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
          <p className="text-sm text-zinc-500 mb-1">Frolandsveien 410, 4838 Arendal</p>
          <a
            href="tel:90549772"
            className="text-2xl font-black text-zinc-900 hover:text-green-700 transition-colors"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            905 49 772
          </a>
        </div>
      </section>
    </>
  );
}
