export const metadata = { robots: 'noindex' };

const produktkategorier = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    name: 'Olje',
    desc: 'Motul og andre ledende merker. Riktig olje for din sykkel.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    name: 'Filter',
    desc: 'Olje-, luft- og bensinfiltre til de fleste modeller.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    name: 'Plugger',
    desc: 'Tennplugger til MC og moped. Vi hjelper deg finne riktig type.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    name: 'Hjelmer',
    desc: 'Godkjente hjelmer i ulike storelser og modeller.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    name: 'Hansker',
    desc: 'Mc-hansker for sommer og vinter. Komfort og beskyttelse.',
  },
];

export default function ButikkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2">Butikk</p>
          <h1
            className="text-4xl sm:text-6xl font-black uppercase leading-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Deler og utstyr
            <br />
            <span className="text-green-400">for MC og moped</span>
          </h1>
          <p className="text-zinc-300 text-xl leading-relaxed max-w-2xl">
            Vi forer et utvalg av det viktigste du trenger: olje, filter, plugger,
            hjelmer og hansker. Spor oss om vi har det du leter etter.
          </p>
        </div>
      </section>

      {/* Sommerstengt-varsel */}
      <section className="bg-yellow-400 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3 text-yellow-900 font-bold">
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Sommerstengt uke 29-31
        </div>
      </section>

      {/* Produkter */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-black uppercase text-zinc-900 mb-8 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Hva vi forer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produktkategorier.map((produkt) => (
              <div key={produkt.name} className="border border-zinc-200 p-6 flex flex-col gap-3">
                <div className="text-green-600">{produkt.icon}</div>
                <h3
                  className="text-xl font-black uppercase text-zinc-900"
                  style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
                >
                  {produkt.name}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{produkt.desc}</p>
              </div>
            ))}

            {/* Motul highlight */}
            <div className="border-2 border-green-600 bg-green-50 p-6 flex flex-col gap-3">
              <div className="text-green-700 font-black text-2xl tracking-widest uppercase">MOTUL</div>
              <h3
                className="text-xl font-black uppercase text-zinc-900"
                style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
              >
                Motul oljer
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Autorisert forhandler av Motul smoreoljer. Et av verdens mest anerkjente
                merker innen motorsportsmoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom / kjoretoyer */}
      <section className="bg-zinc-100 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2">Showroom</p>
            <h2
              className="text-3xl font-black uppercase text-zinc-900 mb-4 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              Kjoretoyer til salgs
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Vi har et utvalg MC-er og kjoretoyer til salgs. Stikk innom showromet
              vart pa Frolandsveien 410 i apningstiden, eller ring for a hore hva
              vi har tilgjengelig.
            </p>
            <a
              href="tel:90549772"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-700 text-white font-bold px-6 py-3 uppercase tracking-wide transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Ring for info
            </a>
          </div>
          <div>
            <img
              src="/demo/jorkjenmc/showroom.jpg"
              alt="Showroom med Kawasaki, ATV og KTM motorsykler"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Apningstider */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-md mx-auto">
          <h2
            className="text-3xl font-black uppercase text-zinc-900 mb-6 leading-tight text-center"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Apningstider
          </h2>
          <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 font-semibold px-4 py-3 mb-4 text-sm text-center">
            Sommerstengt uke 29-31
          </div>
          {[
            { dag: 'Tirsdag', tid: '09.00 - 16.00' },
            { dag: 'Onsdag', tid: '10.00 - 14.30' },
            { dag: 'Torsdag', tid: '09.00 - 17.00' },
          ].map((rad, i) => (
            <div
              key={rad.dag}
              className={`flex justify-between items-center py-4 border-b border-zinc-200 ${i === 0 ? 'border-t' : ''}`}
            >
              <span className="font-bold text-zinc-900">{rad.dag}</span>
              <span className="text-green-700 font-semibold">{rad.tid}</span>
            </div>
          ))}
          <div className="mt-8 text-center">
            <p className="text-zinc-500 text-sm mb-4">
              Frolandsveien 410, 4838 Arendal
            </p>
            <a
              href="tel:90549772"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 uppercase tracking-wide transition-colors"
            >
              905 49 772
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
