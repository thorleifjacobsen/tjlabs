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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/demo/jorkjenmc/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Motorsykkelverksted
            <br />
            <span className="text-zinc-300">og totalleverandør</span>
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl mb-8">
            Godkjent MC- og mopedverksted i Arendal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:90549772"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 text-lg uppercase tracking-wide transition-colors"
            >
              Book verkstedtime
            </a>
            <a
              href="/demo/jorkjenmc/butikk"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg uppercase tracking-wide transition-colors"
            >
              Se butikk
            </a>
          </div>
        </div>
      </section>

      {/* Godkjent-banner */}
      <section className="bg-zinc-800 text-white py-4 px-4 border-b border-zinc-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-zinc-200 text-sm font-medium">
            Godkjent av Statens Vegvesen som motorsykkel- og mopedverksted
          </span>
        </div>
      </section>

      {/* Om oss */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2">Om oss</p>
            <h2
              className="text-3xl sm:text-4xl font-black uppercase text-zinc-900 mb-6 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              Fagfolk du kan stole på
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-4">
              Jorkjen MC er et fullt godkjent verksted for MC og moped, med mekanikere
              som har fagbrev og relevant kompetanse. Vi holder til på Frolandsveien 410
              i Arendal.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              Vi fører Motul-oljer og har kort leveringstid på deler, slik at sykkelen
              din er ferdig så raskt som mulig.
            </p>
            <a
              href="tel:90549772"
              className="inline-block bg-zinc-900 hover:bg-zinc-700 text-white font-bold px-6 py-3 uppercase tracking-wide transition-colors"
            >
              Ring Kenneth: 905 49 772
            </a>
          </div>
          <div className="relative">
            <div className="w-full h-64 bg-zinc-200 flex items-center justify-center text-zinc-400 text-sm">
              Bilde kommer her
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1c1c1c] text-white px-4 py-3 font-bold text-sm uppercase tracking-wide">
              Mekaniker med fagbrev
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section className="bg-zinc-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2 text-center">Tjenester</p>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase text-zinc-900 mb-10 text-center leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Hva vi tilbyr
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Verksted og reparasjon',
                text: 'Service og reparasjon av MC og moped. Kort leveringstid på deler.',
                href: '/demo/jorkjenmc/verksted',
                cta: 'Les mer',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: 'Vinterlagring',
                text: 'Trygg lagring i frostfritt lokale med FG godkjent alarm. 10-punkt sjekk inkludert.',
                href: '#vinterlagring',
                cta: 'Se pris',
                highlight: true,
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ),
                title: 'Butikk og deler',
                text: 'Olje, filter, plugger, hjelmer og hansker. Motul-oljer på lager.',
                href: '/demo/jorkjenmc/butikk',
                cta: 'Se utvalg',
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`p-8 flex flex-col gap-4 ${card.highlight ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}
              >
                <div className={card.highlight ? 'text-green-400' : 'text-green-600'}>
                  {card.icon}
                </div>
                <h3
                  className={`text-2xl font-black uppercase leading-tight ${card.highlight ? 'text-white' : 'text-zinc-900'}`}
                  style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
                >
                  {card.title}
                </h3>
                <p className={`text-base leading-relaxed flex-1 ${card.highlight ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {card.text}
                </p>
                <a
                  href={card.href}
                  className={`inline-block font-bold uppercase tracking-wide text-sm py-2 border-b-2 w-fit transition-colors ${
                    card.highlight
                      ? 'border-green-400 text-green-400 hover:text-white hover:border-white'
                      : 'border-green-600 text-green-600 hover:text-zinc-900 hover:border-zinc-900'
                  }`}
                >
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vinterlagring */}
      <section id="vinterlagring" className="bg-zinc-900 py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2">Vinterlagring</p>
            <h2
              className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-4"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              La sykkelen overvintre hos oss
            </h2>
            <div className="text-5xl font-black text-green-400 mb-2">
              kr 2 390,-
            </div>
            <p className="text-zinc-400 mb-6">inkl. mva og 10-punkt sjekk</p>
            <div className="flex items-center gap-3 mb-8 p-4 border border-zinc-700 rounded-sm">
              <svg className="w-6 h-6 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-zinc-200">Frostfritt lokale med FG godkjent alarm</span>
            </div>
            <a
              href="tel:90549772"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 uppercase tracking-wide text-lg transition-colors"
            >
              Ring for avtale
            </a>
          </div>

          <div>
            <h3
              className="text-xl font-black uppercase mb-5 text-zinc-300"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              10-punkt sjekk inkludert
            </h3>
            <ul className="space-y-3">
              {tiPunktSjekk.map((punkt, i) => (
                <li key={punkt} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 bg-green-600 text-white text-xs font-bold rounded-full shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-zinc-200">{punkt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Apningstider */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2">Åpningstider</p>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase text-zinc-900 mb-8 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Når finner du oss?
          </h2>
          <div className="inline-block w-full max-w-sm">
            <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 font-semibold px-4 py-3 mb-6 text-sm">
              Sommerstengt uke 29-31
            </div>
            {[
              { dag: 'Tirsdag', tid: '09.00 - 16.00' },
              { dag: 'Onsdag', tid: '10.00 - 14.30' },
              { dag: 'Torsdag', tid: '09.00 - 17.00' },
            ].map((rad, i) => (
              <div
                key={rad.dag}
                className={`flex justify-between items-center px-4 py-4 border-b border-zinc-200 ${i === 0 ? 'border-t' : ''}`}
              >
                <span className="font-bold text-zinc-900">{rad.dag}</span>
                <span className="text-green-700 font-semibold">{rad.tid}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-zinc-950 py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2 text-center">Kontakt</p>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-10 text-center"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Ta kontakt med oss
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <a
              href="tel:90549772"
              className="flex flex-col items-center gap-3 bg-zinc-900 hover:bg-zinc-800 p-8 transition-colors text-center group"
            >
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Telefon</div>
                <div className="font-bold text-lg group-hover:text-green-400 transition-colors">905 49 772</div>
                <div className="text-zinc-400 text-sm">Kenneth</div>
              </div>
            </a>

            <a
              href="mailto:verksted@jorkjenmc.no"
              className="flex flex-col items-center gap-3 bg-zinc-900 hover:bg-zinc-800 p-8 transition-colors text-center group"
            >
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="text-sm text-zinc-400 mb-1">E-post</div>
                <div className="font-bold group-hover:text-green-400 transition-colors break-all">
                  verksted@jorkjenmc.no
                </div>
              </div>
            </a>

            <div className="flex flex-col items-center gap-3 bg-zinc-900 p-8 text-center">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Adresse</div>
                <div className="font-bold">Frolandsveien 410</div>
                <div className="text-zinc-400">4838 Arendal</div>
              </div>
            </div>
          </div>

          <div className="w-full h-80 overflow-hidden rounded-sm">
            <iframe
              title="Kart Jorkjen MC"
              src="https://maps.google.com/maps?q=Frolandsveien+410,+4838+Arendal,+Norway&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(30%) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
