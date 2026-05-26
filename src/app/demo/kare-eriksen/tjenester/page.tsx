export const metadata = {
  title: 'Tjenester - Kåre Eriksen AS',
  description: 'Vi tilbyr nybygg, tilbygg, rehabilitering, totalentrepriser, betongarbeid og prosjektledelse i Arendal-regionen.',
  robots: 'noindex',
};

const BASE = '/demo/kare-eriksen';

const services = [
  {
    title: 'Nybygg, bolig',
    desc: 'Vi bygger eneboliger, tomannsboliger og rekkehus etter dine ønsker og behov. Som sentralt godkjent entreprenør ivaretas alle krav til byggesaksbehandling, teknisk utførelse og materialvalg. Vi samarbeider tett med arkitekt og rådgivere for å sikre at du får et hjem du er stolt av.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Næringsbygg og offentlige bygg',
    desc: 'Vi har lang erfaring med kontorbygg, industri- og lagerbygg, samt offentlige bygg som skoler, barnehager og administrasjonsbygg. Prosjektene gjennomføres med streng kvalitetskontroll og fokus på fremdrift. Vi er vant til å jobbe mot offentlige byggherrer med krav til dokumentasjon og rapportering.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Totalentrepriser',
    desc: 'Som totalentreprenør overtar vi det fulle ansvaret for prosjektet fra prosjektering til nøkkeloverlevering. Du forholder deg til én kontaktperson, og vi koordinerer alle underentreprenører og leveranser. Dette gir deg forutsigbarhet på pris, tid og kvalitet gjennom hele byggeprosessen.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Tilbygg og påbygg',
    desc: 'Ønsker du mer plass? Vi prosjekterer og bygger tilbygg, garasjer, kjellere og loftsutbygging tilpasset eksisterende bygg og din tomtesituasjon. Vi sørger for søknadsbehandling, tekniske tegninger og koordinering av alle fag. Resultatet skal passe naturlig inn i den eksisterende strukturen.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: 'Rehabilitering og renovering',
    desc: 'Vi utfører fasaderehabilitering, innvendig renovering og oppgradering av eldre bygg. Enten det gjelder etterisolering, nye bad, kjøkken, gulv eller komplett totalrenovering, leverer vi håndverksmessig godt arbeid med erfarne fagfolk. Vi er vant til å jobbe i boliger der folk bor, og tar hensyn til dagliglivet.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Betongarbeid',
    desc: 'Vi utfører støping av fundamenter, ringmurer, kjellervegger, støttemurer og betongdekker. Solid og korrekt støpearbeid er grunnlaget for ethvert bygg. Med riktig kompetanse og utstyr sikrer vi at betongen holder spesifisert kvalitet og at konstruksjonen er dimensjonert for lang levetid.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const checkPoints = [
  'Sentralt godkjent entreprenør',
  'Mesterbedrift med lang erfaring',
  'Lokalt firma med kjennskap til regionen',
  'Fast og forutsigbar prosjektleder',
  'Gode leverandørnettverk i Agder',
  'Transparent kommunikasjon gjennom hele prosjektet',
];

export default function TjenesterPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-14 md:py-20 border-b border-slate-100"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <span
            className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: '#c8820a' }}
          >
            Kåre Eriksen AS
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            Våre tjenester
          </h1>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Vi tilbyr et bredt spekter av bygg- og entreprenørtjenester til private, næringsliv og det offentlige. Med over 40 års erfaring og Sentral Godkjenning har vi kompetansen til å håndtere alt fra enkle tilbygg til krevende totalentrepriser.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-slate-200 shadow-sm p-6"
                style={{ backgroundColor: '#f8fafc' }}
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                  style={{ backgroundColor: 'rgba(30,58,95,0.08)', color: '#1e3a5f' }}
                >
                  {service.icon}
                </span>
                <h2 className="font-semibold text-base mb-2.5" style={{ color: '#1e3a5f' }}>
                  {service.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#f8fafc' }}>
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="text-center mb-10">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: '#c8820a' }}
            >
              Hvorfor velge oss
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1e3a5f' }}>
              Det vi leverer med på kjøpet
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {checkPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: '#c8820a' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-slate-700">{point}</span>
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
