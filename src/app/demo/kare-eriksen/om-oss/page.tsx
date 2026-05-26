export const metadata = {
  title: 'Om oss - Kåre Eriksen AS',
  description: 'Kåre Eriksen AS er en mesterbedrift grunnlagt i 1998, med røtter i Arendal-regionen. Les om selskapets historie, verdier og ansatte.',
  robots: 'noindex',
};

const BASE = '/demo/kare-eriksen';

const stats = [
  { value: '40+', label: 'Erfaring i bransjen', unit: 'år' },
  { value: '~15', label: 'Ansatte', unit: '' },
  { value: '1998', label: 'Grunnlagt', unit: '' },
  { value: '2028', label: 'Sentral godkjenning gyldig til', unit: '' },
];

const values = [
  {
    title: 'Kvalitet',
    desc: 'Vi gjør aldri kompromisser på materialer eller håndverksmessig utførelse. Hvert prosjekt skal tåle tidens tann og gi kunden noe å være stolt av i mange år fremover. Vi bruker godkjente leverandører og holder oss faglig oppdatert.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Punktlighet',
    desc: 'Vi leverer til avtalt tid og innenfor avtalt budsjett. Forsinkelser og kostnadsoverskridelser er uakseptabelt for oss. God planlegging og tett oppfølging av fremdrift er kjernen i måten vi driver prosjekter på.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Samarbeid',
    desc: 'Vi jobber tett med kunden gjennom hele prosessen. Du skal alltid vite hva som skjer, hva som er neste steg, og hvem du skal ringe. Et godt byggeprosjekt er et samarbeid mellom byggherre og entreprenør, og vi tar den rollen på alvor.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function OmOssPage() {
  return (
    <>
      {/* Page banner */}
      <section
        className="py-14 md:py-20 border-b border-slate-100"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <span
            className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: '#c8820a' }}
          >
            Vår historie
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            Om Kåre Eriksen AS
          </h1>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Et familieeid byggeselskap med røtter i Aust-Agder. Solid, erfaren og alltid lokal.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 md:py-20 bg-white">
        <div
          className="mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
          style={{ maxWidth: '1100px' }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-5" style={{ color: '#1e3a5f' }}>
              Historien bak selskapet
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kåre Eriksen AS ble stiftet i 1998, men selskapet bygger på en håndverkstradisjon som strekker seg tilbake til tidlig 1980-tall. Grunnlegger Kåre Eriksen etablerte seg som fagsnekker og byggmester i Arendal-regionen, og opparbeidet seg raskt et godt rykte for grundig og pålitelig arbeid.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              I dag ledes selskapet av daglig leder Trygve Eriksen, som har vokst opp med byggfaget og viderefører grunnleggerens filosofi om at kvalitetsarbeid aldri er forhandlingsbart. Selskapet er en del av Kest Invest AS-gruppen, og har med det et solid fundament for videre vekst.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kåre Eriksen AS er sertifisert Mesterbedrift og innehar Sentral Godkjenning fra Direktoratet for byggkvalitet, gyldig til mars 2028. Disse sertifiseringene er et bevis på at vi oppfyller offentlige krav til kompetanse, HMS og kvalitetssikring.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Med rundt 15 fast ansatte har vi kapasiteten til å ta på oss store og krevende prosjekter, mens vi samtidig er fleksible nok til å gi nære og personlige kunderelasjoner. Vi opererer primært i Aust-Agder og Vest-Agder, med Arendal som base.
            </p>
          </div>
          <div>
            <img
              src="/demo/kare-eriksen/about.jpg"
              alt="Kåre Eriksen AS på byggeplass"
              className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md"
            />
            <div
              className="mt-4 rounded-lg border border-slate-200 p-4 flex items-center gap-3"
              style={{ backgroundColor: '#f8fafc' }}
            >
              <svg
                className="w-8 h-8 flex-shrink-0"
                style={{ color: '#c8820a' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#1e3a5f' }}>
                  Sentral Godkjenning
                </p>
                <p className="text-xs text-slate-500">
                  Gyldig til 17.03.2028 | Direktoratet for byggkvalitet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ backgroundColor: '#1e3a5f' }} className="py-12">
        <div
          className="mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ maxWidth: '1100px' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
                {stat.unit && <span className="text-xl ml-1">{stat.unit}</span>}
              </div>
              <div className="text-sm" style={{ color: '#94a3b8' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#f8fafc' }}>
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="text-center mb-10">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: '#c8820a' }}
            >
              Det vi tror på
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>
              Våre verdier
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="rounded-lg border border-slate-200 shadow-sm p-6 bg-white"
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                  style={{ backgroundColor: 'rgba(30,58,95,0.08)', color: '#1e3a5f' }}
                >
                  {val.icon}
                </span>
                <h3 className="font-semibold text-base mb-2" style={{ color: '#1e3a5f' }}>
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="mx-auto px-4 sm:px-6 text-center" style={{ maxWidth: '700px' }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Har du et byggeprosjekt?
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Ta kontakt for en uforpliktende prat. Vi hjelper deg fra idé til ferdig bygg.
          </p>
          <a
            href="tel:91109595"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-white font-semibold text-sm"
            style={{ color: '#1e3a5f' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
              />
            </svg>
            Ring oss: 911 09 595
          </a>
          <p className="mt-4">
            <a href={`${BASE}/kontakt`} className="text-sm text-slate-300 underline underline-offset-2">
              Eller send oss en melding
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
