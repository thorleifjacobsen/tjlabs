'use client'

import { useState } from 'react'
import { activities, categories, type Activity } from '../activities-data'

export default function AktiviteterPage() {
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [selected, setSelected] = useState<Activity | null>(null)

  const filtered =
    activeCategory === 'Alle'
      ? activities
      : activities.filter((a) => a.label === activeCategory)

  const months = [...new Set(filtered.map((a) => a.month))]

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <span className="inline-block text-green-700 font-semibold text-xs uppercase tracking-widest mb-4">Kalender</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">Aktiviteter</h1>
          <p className="text-gray-500 text-base max-w-xl">
            Alle kommende aktiviteter og arrangementer på Eik Makerspace. Klikk på et event for å lese mer og melde deg på.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-gray-100 px-4 sm:px-6 py-3">
        <div className="max-w-[1100px] mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? 'bg-green-600 text-white border-green-600 shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events list */}
      <div className="bg-white min-h-[60vh] px-4 sm:px-6 py-10">
        <div className="max-w-[1100px] mx-auto space-y-12">
          {months.map((month) => {
            const monthEvents = filtered.filter((a) => a.month === month)
            return (
              <div key={month}>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5 pb-3 border-b border-gray-100">
                  {month}
                </h2>
                <div className="space-y-3">
                  {monthEvents.map((act) => (
                    <button
                      key={act.id}
                      onClick={() => setSelected(act)}
                      className="w-full text-left group"
                    >
                      <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/60 transition-all duration-150">
                        {/* Date column */}
                        <div className="flex-shrink-0 w-14 text-center">
                          <div className="text-lg font-bold text-gray-900 leading-none">
                            {act.dateShort.split('.')[0]}
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5">
                            {act.dateShort.split('. ')[1]}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-10 bg-gray-200 flex-shrink-0" />

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${act.labelColor}`}>
                              {act.label}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 text-[15px] leading-snug group-hover:text-green-700 transition-colors">
                            {act.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-0.5">{act.time} · {act.location}</p>
                        </div>

                        {/* Spots */}
                        <div className="flex-shrink-0 text-right hidden sm:block">
                          {act.spotsLeft === 0 ? (
                            <span className="text-xs font-medium text-red-500 bg-red-50 px-2.5 py-1 rounded-full">Fullt</span>
                          ) : act.spotsLeft <= 3 ? (
                            <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                              {act.spotsLeft} plasser igjen
                            </span>
                          ) : (
                            <span className="text-xs text-gray-400">{act.spotsLeft} plasser</span>
                          )}
                        </div>

                        {/* Arrow */}
                        <div className="flex-shrink-0 text-gray-300 group-hover:text-green-500 transition-colors ml-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )
          })}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-4xl mb-4">📅</div>
              <p className="font-medium text-gray-600">Ingen aktiviteter i denne kategorien</p>
              <p className="text-sm mt-1">Sjekk tilbake senere eller se alle kategorier.</p>
            </div>
          )}
        </div>
      </div>

      {/* Event modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelected(null)} />

          {/* Modal */}
          <div className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            {/* Image */}
            <div className="relative h-48 sm:h-56 flex-shrink-0 overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Lukk"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
              <span className={`absolute bottom-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full ${selected.labelColor} backdrop-blur-sm`}>
                {selected.label}
              </span>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-6 flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-4 leading-snug">{selected.title}</h2>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{selected.date}</p>
                    <p className="text-gray-400 text-xs">{selected.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <p>{selected.location}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <div>
                    {selected.spotsLeft === 0 ? (
                      <p className="text-red-500 font-medium">Fullt – ingen plasser igjen</p>
                    ) : (
                      <p>
                        <span className={selected.spotsLeft <= 3 ? 'text-orange-600 font-semibold' : 'text-gray-900 font-medium'}>
                          {selected.spotsLeft}
                        </span>
                        <span className="text-gray-400"> av {selected.spots} plasser ledige</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">{selected.descLong}</p>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                  selected.spotsLeft === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
                disabled={selected.spotsLeft === 0}
              >
                {selected.spotsLeft === 0 ? 'Fullt' : 'Meld deg på'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
