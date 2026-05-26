export const metadata = {
  title: 'Kåre Eriksen AS - Mesterbedrift i Arendal',
  description: 'Kåre Eriksen AS er en av Arendals mest erfarne totalentreprenører. Fra tilbygg til store offentlige prosjekter leverer vi kvalitet på tid.',
  robots: 'noindex',
};

const BASE = '/demo/kare-eriksen';

function TrustIcon({ type }: { type: 'badge' | 'calendar' | 'shield' | 'pin' }) {
  if (type === 'badge') return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
  if (type === 'calendar') return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
  if (type === 'shield') return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ServiceIcon({ type }: { type: 'building' | 'extension' | 'concrete' }) {
  if (type === 'building') return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
  if (type === 'extension') return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[560px] md:min-h-[640px] flex items-center justify-center text-center"
        style={{
          backgroundImage: 'url(/demo/kare-eriksen/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 px-4 sm:px-6 py-16 md:py-24" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: '#c8820a', backgroundColor: 'rgba(200,130,10,0.15)', border: '1px solid rgba(200,130,10,0.3)' }}
          >
            Mesterbedrift siden 1982 &nbsp;|&nbsp; Sentral Godkjenning
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Solid bygg. Rett pris.<br />Trygt utført.
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed">
            Vi er en av Arendals mest erfarne totalentreprenører. Fra mindre tilbygg til store offentlige prosjekter leverer vi kvalitet på tid.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${BASE}/kontakt`}
              className="px-7 py-3 rounded-md text-white font-semibold text-sm transition-colors"
              style={{ backgroundColor: '#1e3a5f' }}
            >
              Kontakt oss
            </a>
            <a
              href={`${BASE}/tjenester`}
              className="px-7 py-3 rounded-md font-semibold text-sm border-2 border-white text-white transition-colors"
              style={{ backgroundColor: 'transparent' }}
            >
              Se våre tjenester
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-slate-100">
        <div
          className="mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ maxWidth: '1100px' }}
        >
          {[
            { icon: 'badge' as const, label: 'Mesterbedrift', desc: 'Sertifisert håndverksbedrift med godkjente fagarbeidere' },
            { icon: 'calendar' as const, label: 'Over 40 års erfaring', desc: 'Grunnlagt i 1982, med lang og bred erfaring i bransjen' },
            { icon: 'shield' as const, label: 'Sentral Godkjenning', desc: 'Godkjent av Direktoratet for byggkvalitet, gyldig til 2028' },
            { icon: 'pin' as const, label: 'Lokalt forankret', desc: 'Hjemmehørende i Arendal, med godt kjennskap til regionen' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2 p-4">
              <span style={{ color: '#c8820a' }}>
                <TrustIcon type={item.icon} />
              </span>
              <span className="font-semibold text-sm" style={{ color: '#1e3a5f' }}>{item.label}</span>
              <span className="text-xs leading-relaxed text-slate-500">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#f8fafc' }}>
        <div
          className="mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
          style={{ maxWidth: '1100px' }}
        >
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: '#c8820a' }}
            >
              Om oss
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug" style={{ color: '#1e3a5f' }}>
              Et familieselskap med røtter i Aust-Agder
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kåre Eriksen AS ble grunnlagt i 1998 og har røtter i Arendal-regionen som strekker seg tilbake til tidlig på 1980-tallet. Bedriften er i dag ledet av daglig leder Trygve Eriksen, som viderefører arbeidet startet av grunnlegger Kåre Eriksen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Gjennom mer enn 40 år har selskapet håndtert alt fra private boligprosjekter til store offentlige kontrakter. Vi har alltid hatt fokus på kvalitet, faglig stolthet og langsiktige kunderelasjoner. Med ca. 15 ansatte er vi et medium-stort firma som er stort nok til å ta på seg krevende prosjekter, men lite nok til å holde god personlig kontakt med hver enkelt kunde.
            </p>
            <a
              href={`${BASE}/om-oss`}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: '#1e3a5f' }}
            >
              Les mer om oss
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/demo/kare-eriksen/about.jpg"
              alt="Kåre Eriksen AS på byggeplass"
              className="w-full h-72 md:h-80 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="text-center mb-10">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: '#c8820a' }}
            >
              Tjenester
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>
              Hva vi bygger
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: 'building' as const,
                title: 'Nybygg og totalentrepriser',
                desc: 'Vi tar på oss komplette nybyggprosjekter for bolig, næring og det offentlige. Som totalentreprenør koordinerer vi alle fag fra start til nøkkeloverlevering.',
              },
              {
                icon: 'extension' as const,
                title: 'Tilbygg og rehabilitering',
                desc: 'Trenger du mer plass, eller er det på tide å fornye boligen? Vi utfører tilbygg, påbygg og rehabiliteringsprosjekter med høy håndverksmessig standard.',
              },
              {
                icon: 'concrete' as const,
                title: 'Betong og anleggsarbeid',
                desc: 'Vi utfører støping av fundamenter, støttemurer og betongkonstruksjoner. Solid grunnarbeid er forutsetningen for et godt bygg.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-slate-200 shadow-sm p-6"
                style={{ backgroundColor: '#f8fafc' }}
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                  style={{ backgroundColor: 'rgba(30,58,95,0.08)', color: '#1e3a5f' }}
                >
                  <ServiceIcon type={card.icon} />
                </span>
                <h3 className="font-semibold text-base mb-2" style={{ color: '#1e3a5f' }}>
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={`${BASE}/tjenester`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white text-sm font-semibold transition-colors"
              style={{ backgroundColor: '#1e3a5f' }}
            >
              Se alle tjenester
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Projects teaser */}
      <section id="prosjekter" className="py-16 md:py-20" style={{ backgroundColor: '#f8fafc' }}>
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="text-center mb-10">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: '#c8820a' }}
            >
              Referanseprosjekter
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>
              Noen av våre prosjekter
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg border border-slate-200 shadow-sm overflow-hidden bg-white">
              <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                Bilde kommer
              </div>
              <div className="p-5">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#c8820a' }}
                >
                  Totalentreprise
                </span>
                <h3 className="font-semibold mt-1 mb-1.5" style={{ color: '#1e3a5f' }}>
                  Ny brannstasjon, Froland kommune
                </h3>
                <p className="text-sm text-slate-500">
                  2015. Totalentreprise for Froland kommune. Nytt, moderne bygg med garasje, mannskapsrom og administrasjonsdel.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 shadow-sm overflow-hidden bg-white">
              <img
                src="/demo/kare-eriksen/project2.jpg"
                alt="Kontor- og lagerbygg, Arendals Fossekompani"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#c8820a' }}
                >
                  Næringsbygg
                </span>
                <h3 className="font-semibold mt-1 mb-1.5" style={{ color: '#1e3a5f' }}>
                  Kontor- og lagerbygg, Arendals Fossekompani ASA
                </h3>
                <p className="text-sm text-slate-500">
                  2014. Nytt kontor- og lagerbygg for Arendals Fossekompani ASA. Profesjonell utførelse med høye krav til kvalitet og fremdrift.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 shadow-sm overflow-hidden bg-white">
              <img
                src="/demo/kare-eriksen/project3.jpg"
                alt="Boligprosjekt Arendal"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#c8820a' }}
                >
                  Tilbygg og renovering
                </span>
                <h3 className="font-semibold mt-1 mb-1.5" style={{ color: '#1e3a5f' }}>
                  Boligprosjekt, Arendal
                </h3>
                <p className="text-sm text-slate-500">
                  Tilbygg og innvendig renovering av enebolig i Arendal. Utvidet boligarealet med stue og nytt bad, levert på tid og innenfor budsjett.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA banner */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1e3a5f' }}>
        <div
          className="mx-auto px-4 sm:px-6 text-center"
          style={{ maxWidth: '700px' }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Har du et byggeprosjekt?
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Ta kontakt for en uforpliktende prat. Vi hjelper deg fra idé til ferdig bygg.
          </p>
          <a
            href="tel:91109595"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-white font-semibold text-sm transition-colors"
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
        </div>
      </section>
    </>
  );
}
