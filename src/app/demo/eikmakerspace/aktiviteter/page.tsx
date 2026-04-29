'use client'

import { useState, useMemo } from 'react'
import { activities as allActivities, categories, NO_MONTHS, NO_DAYS_SHORT, type Activity } from '../activities-data'

type SelectedEvent = { activity: Activity; date: Date }

function getEventsForMonth(
  year: number,
  month: number,
  source: Activity[],
  category: string,
): Map<number, { activity: Activity; date: Date }[]> {
  const map = new Map<number, { activity: Activity; date: Date }[]>()

  function add(day: number, activity: Activity, date: Date) {
    if (!map.has(day)) map.set(day, [])
    map.get(day)!.push({ activity, date })
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate()

  for (const act of source) {
    if (category !== 'Alle' && act.label !== category) continue

    const orig = new Date(act.isoDate)
    const origYear = orig.getFullYear()
    const origMonth = orig.getMonth()
    const origDay = orig.getDate()
    const origDow = orig.getDay()

    const isAfter = year > origYear || (year === origYear && month >= origMonth)

    if (!act.recurring) {
      if (origYear === year && origMonth === month) {
        add(origDay, act, orig)
      }
    } else if (act.recurring === 'monthly') {
      if (isAfter && origDay <= daysInMonth) {
        add(origDay, act, new Date(year, month, origDay))
      }
    } else if (act.recurring === 'weekly') {
      if (isAfter) {
        for (let d = 1; d <= daysInMonth; d++) {
          const date = new Date(year, month, d)
          if (date.getDay() === origDow && date >= orig) {
            add(d, act, date)
          }
        }
      }
    }
  }

  return map
}

function mondayFirst(dow: number) {
  return dow === 0 ? 6 : dow - 1
}

function formatDate(date: Date) {
  return date.toLocaleDateString('nb-NO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

export default function AktiviteterPage() {
  const [year, setYear] = useState(2026)
  const [month, setMonth] = useState(4) // May
  const [category, setCategory] = useState('Alle')
  const [selected, setSelected] = useState<SelectedEvent | null>(null)

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()
  const firstDow = mondayFirst(new Date(year, month, 1).getDay())

  const eventMap = useMemo(
    () => getEventsForMonth(year, month, allActivities, category),
    [year, month, category],
  )

  function prevMonth() {
    if (month === 0) { setYear(y => y - 1); setMonth(11) }
    else setMonth(m => m - 1)
  }
  function nextMonth() {
    if (month === 11) { setYear(y => y + 1); setMonth(0) }
    else setMonth(m => m + 1)
  }

  // Build 6×7 grid
  const cells: { day: number; current: boolean }[] = []
  for (let i = 0; i < firstDow; i++)
    cells.push({ day: daysInPrevMonth - firstDow + 1 + i, current: false })
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: d, current: true })
  while (cells.length < 42)
    cells.push({ day: cells.length - firstDow - daysInMonth + 1, current: false })

  const today = new Date()
  const isToday = (d: number) =>
    today.getFullYear() === year && today.getMonth() === month && today.getDate() === d

  const act = selected?.activity
  const selDate = selected?.date

  return (
    <>
      {/* Page header */}
      <section className="bg-white border-b border-gray-100 py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <span className="inline-block text-green-700 font-semibold text-xs uppercase tracking-widest mb-3">Kalender</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2">Aktiviteter</h1>
          <p className="text-gray-500 text-base max-w-lg">
            Klikk på et event for å lese mer og melde deg på. Faste kvelder gjentas automatisk.
          </p>
        </div>
      </section>

      {/* Sticky filter */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-gray-100 px-4 sm:px-6 py-3">
        <div className="max-w-[1100px] mx-auto flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                category === cat
                  ? 'bg-green-600 text-white border-green-600 shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white px-4 sm:px-6 py-8 pb-16">
        <div className="max-w-[1100px] mx-auto">

          {/* Month navigation */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={prevMonth}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-all"
              aria-label="Forrige måned"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <h2 className="text-lg font-bold text-gray-900 min-w-[160px] text-center">
              {NO_MONTHS[month]} {year}
            </h2>
            <button
              onClick={nextMonth}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-all"
              aria-label="Neste måned"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Day name headers */}
          <div className="grid grid-cols-7 mb-1">
            {NO_DAYS_SHORT.map((d) => (
              <div key={d} className="text-center text-xs font-semibold text-gray-400 py-2">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 border-t border-l border-gray-100 rounded-xl overflow-hidden shadow-sm">
            {cells.map((cell, i) => {
              const events = cell.current ? (eventMap.get(cell.day) ?? []) : []
              const today = isToday(cell.day) && cell.current
              return (
                <div
                  key={i}
                  className={`border-b border-r border-gray-100 min-h-[80px] sm:min-h-[110px] p-1 sm:p-2 ${
                    !cell.current ? 'bg-gray-50/40' : 'bg-white'
                  }`}
                >
                  {/* Day number */}
                  <div className="flex justify-end sm:justify-start mb-1">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${
                        today
                          ? 'bg-green-600 text-white'
                          : cell.current
                          ? 'text-gray-700'
                          : 'text-gray-300'
                      }`}
                    >
                      {cell.day}
                    </span>
                  </div>

                  {/* Events */}
                  <div className="space-y-0.5">
                    {events.map(({ activity: ev, date }, ei) => (
                      <button
                        key={`${ev.id}-${ei}`}
                        onClick={() => setSelected({ activity: ev, date })}
                        className="w-full text-left group"
                      >
                        {/* Mobile: colored dot only */}
                        <div className="flex sm:hidden items-center gap-1 px-1">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${ev.pillColor}`} />
                          <span className="text-[10px] text-gray-500 truncate leading-tight">{ev.title.replace('Workshop: ', '')}</span>
                        </div>
                        {/* Desktop: colored pill */}
                        <div
                          className={`hidden sm:block text-white text-[11px] font-medium px-1.5 py-0.5 rounded leading-snug truncate ${ev.pillColor} group-hover:brightness-110 transition-all`}
                        >
                          {ev.recurring ? (
                            <span className="opacity-80 mr-0.5">↺</span>
                          ) : null}
                          {ev.title.replace('Workshop: ', '')}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-xs text-gray-400 font-medium">Forklaring:</span>
            {[
              { color: 'bg-orange-500', label: 'Laser' },
              { color: 'bg-blue-500', label: '3D-printing' },
              { color: 'bg-teal-500', label: 'Åpent verksted' },
              { color: 'bg-green-600', label: 'Elektronikk' },
              { color: 'bg-purple-500', label: 'Maling' },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-sm ${color}`} />
                <span className="text-xs text-gray-500">{label}</span>
              </div>
            ))}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-400 font-mono">↺</span>
              <span className="text-xs text-gray-500">Gjentas fast</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event detail modal */}
      {selected && act && selDate && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelected(null)} />

          <div className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
            {/* Image */}
            <div className="relative h-44 sm:h-52 flex-shrink-0 overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={act.img} alt={act.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${act.labelColor}`}>
                  {act.label}
                </span>
                {act.recurring && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                    ↺ Gjentas {act.recurring === 'weekly' ? 'ukentlig' : 'månedlig'}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-6 flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-5 leading-snug">{act.title}</h2>

              <div className="space-y-3 mb-6">
                {[
                  {
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    ),
                    main: formatDate(selDate),
                    sub: act.time,
                  },
                  {
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    main: act.location,
                    sub: null,
                  },
                  {
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ),
                    main: act.spotsLeft === 0
                      ? 'Fullt – ingen plasser igjen'
                      : `${act.spotsLeft} av ${act.spots} plasser ledige`,
                    sub: null,
                    warn: act.spotsLeft === 0,
                    low: act.spotsLeft > 0 && act.spotsLeft <= 3,
                  },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {row.icon}
                    </span>
                    <div>
                      <p className={`text-sm font-medium ${row.warn ? 'text-red-500' : row.low ? 'text-orange-600' : 'text-gray-900'}`}>
                        {row.main}
                      </p>
                      {row.sub && <p className="text-xs text-gray-400 mt-0.5">{row.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">{act.descLong}</p>

              <button
                disabled={act.spotsLeft === 0}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                  act.spotsLeft === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {act.spotsLeft === 0 ? 'Fullt' : act.recurring ? 'Meld deg på denne datoen' : 'Meld deg på'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
