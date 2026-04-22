import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Om oss',
  robots: 'noindex',
}

/* ── Instructor data ───────────────────────────────────────────── */

const instructors = [
  {
    name: 'Geir Breimyr',
    title: 'Sensei',
    role: 'Klubbleder',
    bio: 'Geir har vært med i klubben siden starten og ledet den i mange år. Han har trent og lært opp elever i alle aldre, og er godt å snakke med om du lurer på noe. Ring ham på 909 69 119.',
    belt: '5. dan',
    img: '/assets/ajjk/geir.jpg',
  },
  {
    name: 'Arild Emil Olsen',
    title: 'Senpai',
    role: 'Instruktør',
    bio: 'Arild Emil har trent Jiu Jitsu siden han var ung og er i dag fast instruktør i klubben. Han underviser primært i barne- og nybegynnerklassene og er flink til å forklare teknikker på en enkel og forståelig måte.',
    belt: '2. dan',
    img: '/assets/ajjk/arild.jpg',
  },
  {
    name: 'Alf Kristian Eilertsen',
    title: 'Sensei',
    role: 'Instruktør',
    bio: 'Alf Kristian har trent Jiu Jitsu i mange år og underviser med fokus på tradisjonell teknikk og stil. Han er godt likt i klubbmiljøet og bidrar til den gode stemningen på og utenfor matta.',
    belt: '3. dan',
    img: '/assets/ajjk/alf.jpg',
  },
  {
    name: 'Carl Are Dreier Hopen',
    title: 'Sensei',
    role: 'Instruktør',
    bio: 'Carl Are har bakgrunn fra konkurranser og underviser voksenklassene med fokus på god teknikk og praktisk anvendelse. Han er grundig og engasjert i undervisningen.',
    belt: '3. dan',
    img: '/assets/ajjk/carl.jpg',
  },
]

/* ── Board members ─────────────────────────────────────────────── */

const board = [
  { role: 'Leder', name: 'Geir Breimyr' },
  { role: 'Nestleder', name: 'Styremedlem – navn kommer' },
  { role: 'Kasserer', name: 'Styremedlem – navn kommer' },
  { role: 'Sekretær', name: 'Styremedlem – navn kommer' },
  { role: 'Styremedlem', name: 'Styremedlem – navn kommer' },
]

/* ── Values data ───────────────────────────────────────────────── */

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Respekt',
    desc: 'Respekt for instruktørene, medutøverne og kunsten er grunnlaget for vår klubbkultur. Vi hilser på hverandre og behandler alle med verdighet.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Disiplin',
    desc: 'God disiplin er nøkkelen til fremgang. Vi lærer å fokusere og øve målrettet, noe som er nyttig langt utenfor matta.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Fellesskap',
    desc: 'AJJK er mer enn en treningsklubb. Her møtes folk fra alle bakgrunner i et godt og inkluderende miljø.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Utvikling',
    desc: 'Vi jobber for å bli bedre, både fysisk og mentalt. Det handler ikke om å bli best, men om å bli bedre enn i går.',
  },
]

/* ── Page ──────────────────────────────────────────────────────── */

export default function OmOssPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gray-900 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span
            className="text-xs font-bold tracking-[0.3em] text-[#c0392b] uppercase block mb-3"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Om klubben
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Om oss
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Arendal Jiu Jitsu Klubb har holdt til i Arendal siden 1980 og tilbyr kampsport og selvforsvar for alle aldre.
          </p>
        </div>
      </div>

      {/* Red divider */}
      <div className="h-1 bg-gradient-to-r from-[#c0392b] via-[#e74c3c] to-[#c0392b]" />

      {/* History */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="text-xs font-bold tracking-[0.25em] text-[#c0392b] uppercase block mb-3"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Vår historie
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              45 år med Jiu Jitsu i Arendal
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Arendal Jiu Jitsu Klubb ble stiftet i <strong className="text-gray-800">1980</strong> av
                en gruppe entusiastiske kampkunstutøvere i Arendal. Fra de tidlige dagene i et beskjedent
                treningslokale har klubben vokst til å bli et av de mest respekterte Jiu Jitsu-miljøene
                på Sørlandet.
              </p>
              <p>
                Gjennom fire tiår har vi trent hundrevis av elever i tradisjonell Jiu Jitsu,
                fra nybegynnere til erfarne utøvere som har konkurrert nasjonalt og internasjonalt.
              </p>
              <p>
                I dag holder klubben til i et moderne dojo på Gåselia 12 i Arendal, med et aktivt
                og engasjert treningsmiljø for barn fra 7 år og voksne i alle aldre. Vår filosofi
                har aldri endret seg: Jiu Jitsu er for <strong className="text-gray-800">alle</strong>.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            {[
              { year: '1980', title: 'Klubben stiftes', desc: 'Arendal Jiu Jitsu Klubb åpner sine dører for første gang.' },
              { year: '1990-tallet', title: 'Vekst og utvikling', desc: 'Antall medlemmer dobles og barneklasser starter opp.' },
              { year: '2000-tallet', title: 'Nye lokaler', desc: 'Klubben flytter inn i nytt og moderne dojo i Arendal.' },
              { year: '2010-tallet', title: 'Nasjonale meritter', desc: 'AJJK-utøvere hevder seg i norske mesterskap.' },
              { year: '2025', title: '45-jubileum', desc: 'Vi feirer 45 år med Jiu Jitsu og ser lyst på fremtiden.' },
            ].map((event, i) => (
              <div key={event.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#c0392b] flex items-center justify-center text-white text-xs font-bold shrink-0 shadow" style={{ fontFamily: 'var(--font-oswald)' }}>
                    {i + 1}
                  </div>
                  {i < 4 && <div className="w-0.5 h-full bg-gray-200 mt-1" />}
                </div>
                <div className="pb-4">
                  <span
                    className="text-xs font-bold text-[#c0392b] tracking-wide"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {event.year}
                  </span>
                  <h3
                    className="font-bold text-gray-900 mt-0.5"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span
              className="text-xs font-bold tracking-[0.25em] text-[#c0392b] uppercase block mb-3"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Teamet
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Instruktørene
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {instructors.map((inst) => (
              <div
                key={inst.name}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row"
              >
                <div className="sm:w-36 shrink-0">
                  <img
                    src={inst.img}
                    alt={`${inst.name}, ${inst.title} ved Arendal Jiu Jitsu Klubb`}
                    className="w-full sm:w-36 h-48 sm:h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold tracking-wide text-[#c0392b] uppercase"
                      style={{ fontFamily: 'var(--font-oswald)' }}
                    >
                      {inst.title}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-xs text-gray-400">{inst.belt}</span>
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-1"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {inst.name}
                  </h3>
                  <p className="text-[#c0392b] text-sm font-semibold mb-3">{inst.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{inst.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span
              className="text-xs font-bold tracking-[0.25em] text-[#c0392b] uppercase block mb-3"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Vår filosofi
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Verdier og filosofi
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Jiu Jitsu er mer enn kampsport. Det er en livsform som bygger karakter
              og skaper gode fellesskap. Dette er verdiene vi praktiserer i AJJK.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="group text-center">
                <div className="w-16 h-16 bg-[#c0392b]/10 text-[#c0392b] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c0392b] group-hover:text-white transition-colors">
                  {v.icon}
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'var(--font-oswald)' }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Philosophy quote */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="relative">
              <div className="text-8xl text-[#c0392b]/10 font-serif leading-none select-none absolute -top-4 left-0">&ldquo;</div>
              <blockquote className="relative z-10 px-8">
                <p
                  className="text-2xl sm:text-3xl font-bold text-gray-900 leading-relaxed"
                  style={{ fontFamily: 'var(--font-oswald)', fontWeight: 400 }}
                >
                  Jiu Jitsu: kunsten å seire ved å gi etter. Mykhet overvinner hardhet.
                </p>
                <footer className="mt-4 text-sm text-gray-500">Gammel japansk visdom</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span
                className="text-xs font-bold tracking-[0.25em] text-[#c0392b] uppercase block mb-3"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Ledelse
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Styret
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {board.map((member, i) => (
                <div
                  key={member.role}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i < board.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span
                    className="text-sm font-bold text-gray-500 uppercase tracking-wide w-32 shrink-0"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {member.role}
                  </span>
                  <span className="text-gray-900 font-semibold">{member.name}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm mt-4">
              Ta kontakt med klubbleder for spørsmål om styret og klubbdriften.
            </p>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span
              className="text-xs font-bold tracking-[0.25em] text-[#c0392b] uppercase block mb-3"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Bildegalleri
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Fra dojoet
            </h2>
            <p className="text-gray-500 text-sm">
              Bilder fra daglig trening, graderinger og arrangementer.{' '}
              <a
                href="https://www.instagram.com/arendaljiujitsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c0392b] font-semibold hover:underline"
              >
                Følg @arendaljiujitsu på Instagram
              </a>{' '}
              for flere bilder.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              'Jiu jitsu trening i dojo – elever øver teknikk på matten',
              'Barn i hvit gi øver kastekast under veiledning',
              'Instruktør demonstrerer strupetaklingsteknikk',
              'Voksne utøvere i sparring under trening',
              'Graderingssermoni – elever mottar nye belter',
              'Gruppeportrett av AJJK-members foran dojo',
            ].map((alt, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl bg-gray-100 ${
                  i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <img
                  src={i === 0 ? 'https://placehold.co/600x400/e8e8e8/555555' : 'https://placehold.co/400x400/e8e8e8/555555'}
                  alt={alt}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? 'h-52 sm:h-full sm:min-h-[320px]' : 'h-36 sm:h-40'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c0392b] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Bli en del av AJJK-familien
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            3 gratis prøvetimer venter deg. Ingen forpliktelser, bare kom og se om dette er noe for deg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo/ajjk#kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#c0392b] font-bold rounded hover:bg-gray-100 transition-colors shadow-md"
              style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.08em' }}
            >
              KONTAKT OSS
            </Link>
            <Link
              href="/demo/ajjk/treningsplan"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.08em' }}
            >
              SE TRENINGSPLAN
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
