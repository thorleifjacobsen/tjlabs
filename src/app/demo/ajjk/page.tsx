import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Arendal Jiu Jitsu Klubb',
  robots: 'noindex',
}

/* ── Small reusable pieces ─────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-bold tracking-[0.25em] text-[#c0392b] uppercase mb-3"
      style={{ fontFamily: 'var(--font-oswald)' }}
    >
      {children}
    </span>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight"
      style={{ fontFamily: 'var(--font-oswald)' }}
    >
      {children}
    </h2>
  )
}

/* ── Section: Hero ─────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="bg-white pt-12 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="pb-12 lg:pb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.3em] text-[#c0392b] uppercase mb-4"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Arendal · Etablert 1980
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Best på selvforsvar
            <br />
            <span className="text-[#c0392b]">siden 1980</span>
          </h1>
          <div className="w-16 h-1 bg-[#c0392b] mt-4 mb-6 rounded-full" />
          <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            Jiu Jitsu passer for alle, fra 7 til 99 år. Kom og prøv gratis!{' '}
            <strong className="text-gray-800">De første 3 timene er på oss.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/demo/ajjk/treningsplan"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#c0392b] text-white font-bold rounded hover:bg-[#a93226] transition-colors shadow-md"
              style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.08em' }}
            >
              SE TRENINGSPLAN
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/demo/ajjk#kontakt"
              className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-gray-900 text-gray-900 font-bold rounded hover:bg-gray-900 hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.08em' }}
            >
              KONTAKT OSS
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#c0392b]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Ingen bindingstid på prøvetimene
          </p>
        </div>

        {/* Image */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-[#c0392b]/5 rounded-2xl -rotate-2" />
          <img
            src="/assets/ajjk/instructors-group.jpg"
            alt="Instruktørene ved Arendal Jiu Jitsu Klubb med diplomer i dojoet"
            className="relative rounded-xl shadow-xl w-full object-cover"
          />
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-4 border border-gray-100">
            <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-oswald)' }}>45+</p>
            <p className="text-xs text-gray-500 mt-0.5">År med Jiu Jitsu<br />i Arendal</p>
          </div>
        </div>
      </div>

      {/* Red bar */}
      <div className="mt-12 h-1.5 bg-gradient-to-r from-[#c0392b] via-[#e74c3c] to-[#c0392b]" />
    </section>
  )
}

/* ── Section: About ────────────────────────────────────────────── */

function About() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <img
            src="/assets/ajjk/dojo.jpg"
            alt="Treningslokalet ved Arendal Jiu Jitsu Klubb"
            className="rounded-xl shadow-lg w-full object-cover grayscale"
          />
          <div className="absolute top-4 right-4 bg-[#c0392b] text-white rounded-lg px-4 py-3 shadow-lg">
            <p className="text-2xl font-bold leading-none" style={{ fontFamily: 'var(--font-oswald)' }}>1980</p>
            <p className="text-xs mt-0.5 opacity-90">Stiftet</p>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <SectionLabel>Hva er Jiu Jitsu?</SectionLabel>
          <SectionHeading>En kampsport for kropp og sjel</SectionHeading>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Jiu Jitsu er en av verdens eldste kampkunster, med røtter tilbake til det føydale Japan.
            Kunsten handler om teknikk og balanse fremfor rå kraft, noe som gjør den tilgjengelig
            for alle aldre og størrelser.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Hos Arendal Jiu Jitsu Klubb underviser vi tradisjonell Jiu Jitsu med fokus på selvforsvar,
            disiplin og fellesskap. Her finner du et trygt og støttende miljø enten du er nybegynner
            eller erfaren utøver. Barn kan begynne fra 7 år, og vi har aktive voksne medlemmer godt
            opp i 60-årene.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-[#c0392b] pl-5 py-2 mb-6 bg-white rounded-r-lg shadow-sm">
            <p className="text-gray-700 italic text-lg leading-relaxed" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 300 }}>
              «Gjør alltid det rette. Det gleder noen og forbauser resten.»
            </p>
            <footer className="mt-2 text-sm text-gray-500 font-semibold">— Mark Twain</footer>
          </blockquote>

          <Link
            href="/demo/ajjk/om-oss"
            className="inline-flex items-center gap-2 text-[#c0392b] font-bold hover:gap-3 transition-all"
            style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.05em' }}
          >
            LES MER OM KLUBBEN
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Section: Services ─────────────────────────────────────────── */

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Selvforsvar',
    desc: 'Lær selvforsvarsteknikker som faktisk fungerer. Jiu Jitsu ble opprinnelig utviklet som et praktisk forsvarssystem, og det underviser vi fremdeles.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'For alle aldre',
    desc: 'Barn fra 7 år lærer grunnleggende teknikker i et trygt miljø. Voksne opp til 99 år er like velkomne. Det er aldri for sent!',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Tradisjon siden 1980',
    desc: 'Mer enn 45 år med Jiu Jitsu i Arendal. Vi bærer videre en rik tradisjon av respekt, disiplin og kampsport med stolthet og entusiasme.',
  },
]

function Services() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionLabel>Hva tilbyr vi</SectionLabel>
          <SectionHeading>Hvorfor velge AJJK?</SectionHeading>
          <p className="text-gray-500 max-w-xl mx-auto">
            Vi er mer enn en kampsportklubb. Vi er et fellesskap som bygger sterke
            mennesker gjennom god teknikk, respekt og glede.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-[#c0392b]/30 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-[#c0392b]/10 text-[#c0392b] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c0392b] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section: Instructors ──────────────────────────────────────── */

const instructors = [
  { name: 'Geir Breimyr', title: 'Sensei · Klubbleder', img: '/assets/ajjk/geir.jpg', pos: '50% -30px' },
  { name: 'Arild Emil Olsen', title: 'Senpai · Instruktør', img: '/assets/ajjk/arild.jpg', pos: '50% -20px' },
  { name: 'Alf Kristian Eilertsen', title: 'Sensei · Instruktør', img: '/assets/ajjk/alf.jpg', pos: '50% -110px' },
  { name: 'Carl Are Dreier Hopen', title: 'Sensei · Instruktør', img: '/assets/ajjk/carl.jpg', pos: '50% -110px' },
]

function Instructors() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionLabel>Våre instruktører</SectionLabel>
          <SectionHeading>Møt teamet</SectionHeading>
          <p className="text-gray-500 max-w-xl mx-auto">
            Instruktørene har trent Jiu Jitsu i mange år og underviser med engasjement og glede.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((inst) => (
            <div
              key={inst.name}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={inst.img}
                  alt={`${inst.name}, instruktør ved Arendal Jiu Jitsu Klubb`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: inst.pos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3
                  className="font-bold text-gray-900 text-lg leading-tight"
                  style={{ fontFamily: 'var(--font-oswald)' }}
                >
                  {inst.name}
                </h3>
                <p className="text-[#c0392b] text-sm font-semibold mt-1">{inst.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section: Pricing ──────────────────────────────────────────── */

function Pricing() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionLabel>Medlemskap</SectionLabel>
          <SectionHeading>Enkel og rettferdig prising</SectionHeading>
          <p className="text-gray-500 max-w-xl mx-auto">
            De første 3 timene er alltid gratis, uten forpliktelser. Deretter tilbyr vi
            rimelige månedspriser for hele familien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Adults */}
          <div className="rounded-2xl border-2 border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gray-900 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c0392b] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-oswald)' }}>Voksne</h3>
                  <p className="text-gray-400 text-xs">14–99 år</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900">Nye medlemmer</p>
                    <p className="text-xs text-gray-500">1. halvår som ny</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-oswald)' }}>230</span>
                    <span className="text-gray-500 text-sm"> kr/mnd</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-semibold text-gray-900">Fortsettende</p>
                    <p className="text-xs text-gray-500">Fra 2. halvår</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-oswald)' }}>300</span>
                    <span className="text-gray-500 text-sm"> kr/mnd</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 p-3 bg-[#c0392b]/5 rounded-lg border border-[#c0392b]/15">
                <p className="text-[#c0392b] text-xs font-semibold text-center">✓ 3 gratis prøvetimer inkludert</p>
              </div>
            </div>
          </div>

          {/* Children */}
          <div className="rounded-2xl border-2 border-[#c0392b]/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-[#c0392b] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-oswald)' }}>Barn</h3>
                  <p className="text-red-200 text-xs">7–13 år · Fra 2. klasse</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900">Nye medlemmer</p>
                    <p className="text-xs text-gray-500">1. halvår som ny</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-oswald)' }}>200</span>
                    <span className="text-gray-500 text-sm"> kr/mnd</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-semibold text-gray-900">Fortsettende</p>
                    <p className="text-xs text-gray-500">Fra 2. halvår</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-oswald)' }}>230</span>
                    <span className="text-gray-500 text-sm"> kr/mnd</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 p-3 bg-[#c0392b]/5 rounded-lg border border-[#c0392b]/15">
                <p className="text-[#c0392b] text-xs font-semibold text-center">✓ 3 gratis prøvetimer inkludert</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Ta kontakt for spørsmål om familiepakker eller andre ordninger.
        </p>
      </div>
    </section>
  )
}

/* ── Section: News ─────────────────────────────────────────────── */

const news = [
  {
    date: '15. april 2025',
    category: 'Nyheter',
    title: 'Ny sesong starter i august',
    excerpt:
      'Høstsesongen 2025 sparkes i gang med nytt treningsprogram for både barn og voksne. Påmelding via Spond-appen åpner 1. august.',
  },
  {
    date: '2. mars 2025',
    category: 'Arrangement',
    title: 'Graderingssermoni – flott innsats!',
    excerpt:
      'Lørdag avholdt vi årets første graderingssermoni. Gratulerer til alle som tok nye belter. Godt jobbet!',
  },
  {
    date: '10. januar 2025',
    category: 'Arrangement',
    title: 'Sommerleir 2025 – sett av datoene',
    excerpt:
      'Årets sommerleir arrangeres i uke 28. Tre intensivdager med trening, sosialt samvær og masse moro. Åpen for alle nivåer.',
  },
]

function News() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <SectionLabel>Nyheter fra klubben</SectionLabel>
            <SectionHeading>Siste nytt</SectionHeading>
          </div>
          <a
            href="https://www.instagram.com/arendaljiujitsu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#c0392b] hover:underline shrink-0"
            style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.05em' }}
          >
            FØLG OSS PÅ INSTAGRAM →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((n) => (
            <article
              key={n.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative">
                <img
                  src="https://placehold.co/600x280/e8e8e8/555555"
                  alt={`Illustrasjon til nyhet: ${n.title}`}
                  className="w-full h-40 object-cover"
                />
                <span
                  className="absolute top-3 left-3 bg-[#c0392b] text-white text-xs font-bold px-3 py-1 rounded"
                  style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.05em' }}
                >
                  {n.category.toUpperCase()}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-gray-400 mb-2">{n.date}</p>
                <h3
                  className="font-bold text-gray-900 text-lg mb-2 leading-snug"
                  style={{ fontFamily: 'var(--font-oswald)' }}
                >
                  {n.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{n.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 text-sm font-bold text-[#c0392b] hover:underline self-start"
                  style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.05em' }}
                >
                  LES MER →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section: CTA Banner ───────────────────────────────────────── */

function CTABanner() {
  return (
    <section className="bg-[#c0392b] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-oswald)' }}
        >
          Klar for å prøve?
        </h2>
        <p className="text-red-100 text-lg mb-8 leading-relaxed">
          De første <strong className="text-white">3 timene er gratis</strong>, uten forpliktelser.
          Bare kom og prøv. Ta kontakt i dag!
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
  )
}

/* ── Section: Contact ──────────────────────────────────────────── */

function Contact() {
  return (
    <section id="kontakt" className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionLabel>Ta kontakt</SectionLabel>
          <SectionHeading>Kontakt oss</SectionHeading>
          <p className="text-gray-500 max-w-xl mx-auto">
            Lurer du på noe? Send oss en melding, ring, eller møt opp på neste trening.
          </p>
        </div>

        {/* Top row: info + form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#c0392b]/10 text-[#c0392b] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'var(--font-oswald)' }}>Adresse</p>
                <p className="text-gray-600 text-sm">Gåselia 12<br />4847 Arendal</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#c0392b]/10 text-[#c0392b] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'var(--font-oswald)' }}>Telefon</p>
                <a href="tel:90969119" className="text-gray-600 text-sm hover:text-[#c0392b] transition-colors">
                  909 69 119
                </a>
                <p className="text-gray-400 text-xs mt-0.5">Geir Breimyr, Klubbleder</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#c0392b]/10 text-[#c0392b] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'var(--font-oswald)' }}>Spond</p>
                <p className="text-gray-600 text-sm">Påmelding til trening via Spond-appen</p>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <a
                href="https://www.facebook.com/profile.php?id=100057278507055"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-700 hover:border-[#c0392b] hover:text-[#c0392b] transition-colors text-sm font-semibold"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/arendaljiujitsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-700 hover:border-[#c0392b] hover:text-[#c0392b] transition-colors text-sm font-semibold"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
            <h3
              className="text-xl font-bold text-gray-900 mb-5"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Send oss en melding
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src="https://maps.google.com/maps?q=G%C3%A5selia+12%2C+4847+Arendal%2C+Norway&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kart: Gåselia 12, 4847 Arendal"
          />
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">Gåselia 12, 4847 Arendal</p>
      </div>
    </section>
  )
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Instructors />
      <Pricing />
      <News />
      <CTABanner />
      <Contact />
    </>
  )
}
