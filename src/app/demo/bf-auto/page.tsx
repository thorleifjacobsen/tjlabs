export const metadata = {
  robots: 'noindex',
};

const services = [
  {
    title: 'Bilservice og vedlikehold',
    text: 'Regelmessig service holder bilen i topp stand. Vi følger bilprodusentens anbefalinger og bruker riktige reservedeler.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
      </svg>
    ),
  },
  {
    title: 'EU-kontroll',
    text: 'Vi utfører EU-kontroll for alle bilmerker. Enkel bestilling og rask gjennomføring.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'Dekkservice',
    text: 'Dekkskift og balansering for trygg kjøring gjennom hele året.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Zm0-3h.008v.008H12v-.008Zm0-3h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Motorreparasjoner',
    text: 'Fra enkle til komplekse reparasjoner. Vårt erfarne team løser alle utfordringer.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: 'Elektronikk og diagnostikk',
    text: 'Moderne biler er fulle av elektronikk. Vi har utstyr og kompetanse til å diagnostisere og reparere feil.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: 'Alle bilmerker velkomne',
    text: 'Uansett merke eller årsmodell er du og bilen din velkommen hos oss.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

const inputClass =
  'w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent transition';

export default function BFAutoPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex items-center" style={{ minHeight: '600px' }}>
        <img
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.62)' }} />

        <div
          className="relative z-10 mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full text-white"
          style={{ maxWidth: '1100px' }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ maxWidth: '580px', lineHeight: '1.15' }}>
            Ditt lokale verksted i Arendal
          </h1>
          <p className="text-lg mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Service, EU-kontroll og reparasjoner for alle bilmerker. Vi tar godt vare på bilen din.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#kontakt"
              className="bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Bestill time
            </a>
            <a
              href="#tjenester"
              className="border font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#ffffff' }}
            >
              Se tjenester
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.9)' }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Man - Fre: 07:30 - 15:30
            </div>

            <a
              href="https://www.google.com/maps/place/BF+Auto+Helle+%26+Pedersen+ANS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.9)' }}
            >
              <span className="text-yellow-400 leading-none">&#9733;</span>
              <span className="font-semibold">4.8</span>
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>· 44 anmeldelser på Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ backgroundColor: '#f8fafc' }} className="py-10">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: 'Alle bilmerker',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                  </svg>
                ),
              },
              {
                label: 'Enkel timebestilling',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                ),
              },
              {
                label: 'EU-kontroll',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.955 11.955 0 0 0 3 11.943c0 5.88 3.83 10.85 9.01 13.057C17.17 22.793 21 17.823 21 11.943c0-2.127-.536-4.13-1.485-5.885A11.959 11.959 0 0 1 12 2.714Z" />
                  </svg>
                ),
              },
              {
                label: 'Rask levering',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <div key={label} className="flex flex-col items-center gap-3 py-4">
                <span style={{ color: '#b91c1c' }}>{icon}</span>
                <span className="text-sm font-semibold text-slate-700 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="om-oss" className="py-10 md:py-16">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                Et verksted du kan stole på
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  BF Auto Helle &amp; Pedersen ANS er ditt nærverksted på Stoa i Arendal. Vi tilbyr profesjonell service
                  og vedlikehold for alle bilmerker og årsmodeller.
                </p>
                <p>
                  Som MekoPartner-verksted holder vi oss oppdatert med det siste innen bilteknologi, og vi bruker
                  kun reservedeler av høy kvalitet.
                </p>
                <p>Ta gjerne en kopp kaffe mens du venter, og vi tar oss av resten.</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-[#b91c1c] flex-shrink-0" />
                  MekoPartner-verksted
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-[#b91c1c] flex-shrink-0" />
                  Alle bilmerker
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-[#b91c1c] flex-shrink-0" />
                  Godkjent EU-kontrollstasjon
                </div>
              </div>

              <a
                href="#kontakt"
                className="mt-8 inline-block bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Bestill time
              </a>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"
                alt="Mekaniker på verkstedet"
                className="rounded-xl w-full object-cover shadow-md"
                style={{ maxHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="tjenester" className="py-10 md:py-16 bg-white border-t border-slate-100">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">Våre tjenester</h2>
            <p className="text-slate-500 text-lg">Vi hjelper deg med alt bilen trenger</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4" style={{ color: '#b91c1c' }}>
                  {s.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="kontakt" className="py-10 md:py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Bestill time eller ta kontakt
            </h2>
            <p className="text-slate-500 text-lg">Ta gjerne kontakt, så hjelper vi deg</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: contact info */}
            <div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-[#b91c1c]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Adresse</div>
                    <div className="text-slate-600 text-sm">
                      Industritoppen 12A, Stoa<br />4848 Arendal
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-[#b91c1c]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Telefon</div>
                    <a href="tel:37024456" className="text-[#b91c1c] hover:underline text-sm font-medium">
                      37 02 44 56
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-[#b91c1c]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">E-post</div>
                    <a href="mailto:post@bfauto.no" className="text-[#b91c1c] hover:underline text-sm font-medium">
                      post@bfauto.no
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-[#b91c1c]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm mb-2">Åpningstider</div>
                    <table className="text-sm text-slate-600 border-separate" style={{ borderSpacing: '0 2px' }}>
                      <tbody>
                        {[
                          ['Man - Fre', '07:30 - 15:30'],
                          ['Lørdag', 'Stengt'],
                          ['Søndag', 'Stengt'],
                        ].map(([day, hours]) => (
                          <tr key={day}>
                            <td className="pr-6 text-slate-500">{day}</td>
                            <td className={hours === 'Stengt' ? 'text-slate-400' : 'font-medium text-slate-700'}>
                              {hours}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl overflow-hidden border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.21274828539998!2d8.71925623960807!3d58.45679240761904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464794a4296bc019%3A0xc5964c18690818d2!2sBF%20Auto%20Helle%20%26%20Pedersen%20ANS!5e0!3m2!1sen!2sno!4v1779572082130!5m2!1sen!2sno"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BF Auto Helle & Pedersen ANS på kart"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h3 className="font-semibold text-slate-900 mb-6">Send oss en melding</h3>
              <form action="#" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Fornavn</label>
                    <input type="text" placeholder="Ola" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Etternavn</label>
                    <input type="text" placeholder="Nordmann" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Telefon</label>
                    <input type="tel" placeholder="900 00 000" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">E-post</label>
                    <input type="email" placeholder="ola@eksempel.no" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">Registreringsnummer</label>
                  <input type="text" placeholder="AB 12345" className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">Type henvendelse</label>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>Velg type henvendelse</option>
                    <option>Bestill time</option>
                    <option>Spør om tjeneste</option>
                    <option>Annet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">Melding</label>
                  <textarea
                    rows={4}
                    placeholder="Beskriv hva du trenger hjelp med..."
                    className={inputClass}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send henvendelse
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
