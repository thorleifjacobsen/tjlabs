import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Treningsplan',
  robots: 'noindex',
}

/* ── Types ─────────────────────────────────────────────────────── */

type ClassType = 'barn' | 'voksne' | 'alle'

interface ClassEntry {
  time: string
  label: string
  type: ClassType
  note?: string
}

interface DaySchedule {
  day: string
  shortDay: string
  classes: ClassEntry[]
}

/* ── Data ──────────────────────────────────────────────────────── */

const schedule: DaySchedule[] = [
  {
    day: 'Mandag',
    shortDay: 'Man',
    classes: [
      { time: '17:00–18:00', label: 'Barn', type: 'barn', note: '7–13 år' },
      { time: '19:00–20:30', label: 'Voksne', type: 'voksne', note: '14+ år' },
    ],
  },
  {
    day: 'Tirsdag',
    shortDay: 'Tir',
    classes: [
      { time: '18:30–20:00', label: 'Alle nivåer', type: 'alle', note: 'Nybegynnere velkommen' },
    ],
  },
  {
    day: 'Onsdag',
    shortDay: 'Ons',
    classes: [
      { time: '17:00–18:00', label: 'Barn', type: 'barn', note: '7–13 år' },
      { time: '19:00–20:30', label: 'Voksne', type: 'voksne', note: '14+ år' },
    ],
  },
  {
    day: 'Torsdag',
    shortDay: 'Tor',
    classes: [
      { time: '18:00–20:00', label: 'Alle nivåer', type: 'alle', note: 'Alle velkomne' },
    ],
  },
  {
    day: 'Fredag',
    shortDay: 'Fre',
    classes: [],
  },
  {
    day: 'Lørdag',
    shortDay: 'Lør',
    classes: [
      { time: '10:00–12:00', label: 'Barn & Voksne', type: 'alle', note: 'Fellestrening' },
    ],
  },
  {
    day: 'Søndag',
    shortDay: 'Søn',
    classes: [],
  },
]

const classColors: Record<ClassType, { bg: string; text: string; border: string; dot: string }> = {
  barn: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    dot: 'bg-blue-400',
  },
  voksne: {
    bg: 'bg-[#c0392b]/8',
    text: 'text-[#c0392b]',
    border: 'border-[#c0392b]/20',
    dot: 'bg-[#c0392b]',
  },
  alle: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
    dot: 'bg-green-500',
  },
}

/* ── ClassPill ─────────────────────────────────────────────────── */

function ClassPill({ entry }: { entry: ClassEntry }) {
  const colors = classColors[entry.type]
  return (
    <div className={`rounded-lg border ${colors.bg} ${colors.border} px-3 py-2.5`}>
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className={`w-2 h-2 rounded-full shrink-0 ${colors.dot}`} />
        <span
          className={`text-xs font-bold tracking-wide ${colors.text}`}
          style={{ fontFamily: 'var(--font-oswald)' }}
        >
          {entry.label.toUpperCase()}
        </span>
      </div>
      <p className="text-gray-700 text-sm font-semibold">{entry.time}</p>
      {entry.note && <p className="text-gray-400 text-xs mt-0.5">{entry.note}</p>}
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function TreningsplanPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gray-900 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span
            className="text-xs font-bold tracking-[0.3em] text-[#c0392b] uppercase block mb-3"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Ukentlig program
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Treningsplan
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Vi trener mandag til lørdag med klasser for barn, voksne og alle nivåer.
            Påmelding skjer via <strong className="text-white">Spond-appen</strong>.
          </p>
        </div>
      </div>

      {/* Red divider */}
      <div className="h-1 bg-gradient-to-r from-[#c0392b] via-[#e74c3c] to-[#c0392b]" />

      {/* Schedule — desktop table */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-7 gap-3">
            {schedule.map((day) => (
              <div key={day.day} className={`rounded-xl overflow-hidden border ${day.classes.length === 0 ? 'border-gray-100 opacity-60' : 'border-gray-200 shadow-sm'}`}>
                {/* Day header */}
                <div className={`px-3 py-3 text-center ${day.classes.length === 0 ? 'bg-gray-50' : 'bg-gray-900'}`}>
                  <p
                    className={`font-bold text-sm tracking-wide ${day.classes.length === 0 ? 'text-gray-400' : 'text-white'}`}
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {day.day.toUpperCase()}
                  </p>
                </div>
                {/* Classes */}
                <div className="p-2 space-y-2 min-h-[80px] flex flex-col justify-center">
                  {day.classes.length === 0 ? (
                    <p className="text-center text-gray-300 text-xs py-4">Ingen trening</p>
                  ) : (
                    day.classes.map((c) => <ClassPill key={c.time} entry={c} />)
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile list */}
          <div className="md:hidden space-y-4">
            {schedule.map((day) => (
              <div
                key={day.day}
                className={`rounded-xl border overflow-hidden ${day.classes.length === 0 ? 'border-gray-100 opacity-60' : 'border-gray-200 shadow-sm'}`}
              >
                <div className={`px-4 py-3 flex items-center justify-between ${day.classes.length === 0 ? 'bg-gray-50' : 'bg-gray-900'}`}>
                  <h3
                    className={`font-bold tracking-wide ${day.classes.length === 0 ? 'text-gray-400' : 'text-white'}`}
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {day.day.toUpperCase()}
                  </h3>
                  {day.classes.length > 0 && (
                    <span className="text-gray-400 text-xs">{day.classes.length} klasse{day.classes.length > 1 ? 'r' : ''}</span>
                  )}
                </div>
                <div className="p-3">
                  {day.classes.length === 0 ? (
                    <p className="text-gray-300 text-sm text-center py-2">Ingen trening</p>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {day.classes.map((c) => <ClassPill key={c.time} entry={c} />)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="text-xs text-gray-500 font-semibold mr-2 self-center">Forklaring:</span>
            {(Object.entries(classColors) as [ClassType, typeof classColors[ClassType]][]).map(([type, colors]) => (
              <div key={type} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${colors.bg} ${colors.border} ${colors.text}`}>
                <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                {type === 'barn' ? 'Barn' : type === 'voksne' ? 'Voksne' : 'Alle nivåer'}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spond section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="text-xs font-bold tracking-[0.25em] text-[#c0392b] uppercase block mb-3"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Påmelding
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Vi bruker Spond
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Arendal Jiu Jitsu Klubb bruker <strong>Spond-appen</strong> for treningspåmelding og
              kommunikasjon. Last ned Spond, søk opp AJJK og meld deg inn for å motta
              varsler og melde på treninger.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Enkel påmelding til treninger',
                'Varsler om endringer og avlysninger',
                'Kommunikasjon fra instruktørene',
                'Oversikt over kommende arrangementer',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-[#c0392b] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Info card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="w-14 h-14 bg-[#c0392b]/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3
              className="text-xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Vil du prøve gratis?
            </h3>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              De første 3 timene er gratis for alle nye — uansett alder. Ta kontakt med
              Geir Breimyr for å avtale din første prøvetime.
            </p>
            <div className="space-y-3">
              <a
                href="tel:90969119"
                className="flex items-center gap-3 w-full px-4 py-3 bg-[#c0392b] text-white rounded-lg font-bold hover:bg-[#a93226] transition-colors"
                style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.05em' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                RING 909 69 119
              </a>
              <Link
                href="/demo/ajjk#kontakt"
                className="flex items-center gap-3 w-full px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-bold hover:border-gray-300 transition-colors text-center justify-center"
                style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.05em' }}
              >
                KONTAKT SKJEMA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Ofte stilte spørsmål
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Hva skal jeg ta med på første trening?',
                a: 'Kom i behagelige treningsklær. Vi har matter og nødvendig utstyr på dojoet. Du trenger ikke eget antrekk (gi) til prøvetimene.',
              },
              {
                q: 'Passer Jiu Jitsu for barn uten erfaring?',
                a: 'Absolutt! Barneklassene er designet spesielt for nybegynnere og legger vekt på moro, grunnleggende bevegelse og respekt. Ingen erfaring er nødvendig.',
              },
              {
                q: 'Kan jeg begynne som voksen uten erfaring?',
                a: 'Ja! Vi tar imot nybegynnere i alle aldre. Voksenklassene har en vennlig og inkluderende atmosfære der alle hjelper hverandre å lære.',
              },
              {
                q: 'Hvordan melder jeg meg på trening?',
                a: 'Last ned Spond-appen, søk opp Arendal Jiu Jitsu Klubb, og meld deg inn. Herfra kan du melde deg på og av treninger enkelt.',
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3
                  className="font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'var(--font-oswald)' }}
                >
                  {item.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
