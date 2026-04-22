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

export default function VinterlagringPage() {
  return (
    <>
      {/* Foto-banner */}
      <section className="relative h-52 sm:h-64 flex items-end overflow-hidden">
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
            Vinterlagring
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

      {/* Innhold */}
      <section className="bg-[#f8f7f4] py-16 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <div className="text-6xl font-black text-zinc-900 mb-1 leading-none">
              kr 2 390,-
            </div>
            <p className="text-zinc-500 text-base mb-7">inkl. mva og 10-punkt sjekk</p>

            <div className="flex items-start gap-3 p-4 bg-white border border-zinc-200 mb-6">
              <svg className="w-5 h-5 text-green-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-zinc-700 text-sm leading-relaxed">
                Frostfritt lokale med FG godkjent alarm
              </span>
            </div>

            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Sykkelen lagres trygt over vinteren og sjekkes på 10 punkter slik at
              den er klar til kjøring når sesongen starter igjen.
            </p>

            <a
              href="tel:90549772"
              className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-700 text-white font-bold px-7 py-4 text-lg transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Ring Kenneth: 905 49 772
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              10-punkt sjekk inkludert
            </h2>
            <ol className="space-y-2">
              {tiPunktSjekk.map((punkt, i) => (
                <li key={punkt} className="flex items-center gap-3 py-2 border-b border-zinc-200">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-zinc-700 text-sm">{punkt}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
