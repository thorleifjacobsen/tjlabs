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

export default function VerkstedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2">Verksted</p>
          <h1
            className="text-4xl sm:text-6xl font-black uppercase leading-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            MC- og mopedverksted
            <br />
            <span className="text-zinc-300">i Arendal</span>
          </h1>
          <p className="text-zinc-300 text-xl leading-relaxed max-w-2xl">
            Godkjent av Statens Vegvesen. Mekanikere med fagbrev og relevant kompetanse.
            Kort leveringstid på deler.
          </p>
        </div>
      </section>

      {/* Godkjent badge */}
      <section className="bg-zinc-800 text-white py-4 px-4 border-b border-zinc-700">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-zinc-200 text-sm font-medium">Godkjent av Statens Vegvesen som motorsykkel- og mopedverksted</span>
        </div>
      </section>

      {/* Tjenester */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-black uppercase text-zinc-900 mb-8 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Verkstedtjenester
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Service og reparasjon',
                text: 'Vi utfører alt fra rutineservice til mer kompliserte reparasjoner på MC og moped.',
              },
              {
                title: 'Kort leveringstid på deler',
                text: 'Vi bestiller deler raskt, slik at sykkelen din står så lite som mulig.',
              },
              {
                title: 'Fagbrev-mekanikere',
                text: 'Alle mekanikere har fagbrev og relevant kompetanse for jobben.',
              },
              {
                title: 'Motul oljer',
                text: 'Vi bruker og fører Motul-oljer, et av verdens ledende merker innen smøring.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-zinc-200 p-6">
                <div className="w-3 h-1 bg-green-600 mb-4" />
                <h3 className="font-bold text-zinc-900 text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vinterlagring */}
      <section className="bg-zinc-900 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2">Vinterlagring</p>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-4"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            La sykkelen stå trygt hos oss
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 mb-10">
            <div>
              <div className="text-5xl font-black text-green-400 leading-none">kr 2 390,-</div>
              <div className="text-zinc-400 mt-1">inkl. mva og 10-punkt sjekk</div>
            </div>
            <div className="flex items-center gap-3 bg-zinc-800 px-5 py-4 self-start">
              <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-zinc-200 text-sm">Frostfritt lokale med FG godkjent alarm</span>
            </div>
          </div>

          <h3
            className="text-lg font-black uppercase mb-5 text-zinc-300 tracking-wide"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            10-punkt sjekk inkludert
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tiPunktSjekk.map((punkt, i) => (
              <div key={punkt} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 bg-green-600 text-white text-xs font-bold rounded-full shrink-0">
                  {i + 1}
                </span>
                <span className="text-zinc-200">{punkt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apningstider */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-3xl font-black uppercase text-zinc-900 mb-6 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              Åpningstider
            </h2>
            <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 font-semibold px-4 py-3 mb-4 text-sm">
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
          </div>

          <div className="flex flex-col justify-center">
            <h2
              className="text-3xl font-black uppercase text-zinc-900 mb-4 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              Book verkstedtime
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              Ring Kenneth direkte for å avtale verkstedtime. Vi gir deg et estimat
              på tid og pris for jobben.
            </p>
            <a
              href="tel:90549772"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-4 uppercase tracking-wide text-lg transition-colors w-fit"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              905 49 772
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
