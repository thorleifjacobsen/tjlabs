'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'

type Booking = {
  id: string
  equipmentId: string
  equipmentName: string
  date: string
  displayDate: string
  hour: number
  name: string
}

const EQUIPMENT = [
  { id: 'bambu', name: 'Bambu Lab X1 Carbon', desc: 'Filament 3D-printer' },
  { id: 'resin', name: 'Anycubic Photon M3 Max', desc: 'Resin 3D-printer' },
  { id: 'laser', name: '100w CO2 Laser', desc: 'Laser graverer og kutter' },
]

// Time slots per day-of-week (0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat)
const SLOTS_BY_DOW: Record<number, number[]> = {
  2: [17, 18, 19, 20],
  4: [17, 18, 19, 20],
  5: [16, 17, 18, 19, 20],
}

const DOW_NAMES = ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør']
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des']

function getMonday(weekOffset: number): Date {
  const now = new Date()
  const dow = now.getDay()
  const daysToMon = dow === 0 ? -6 : 1 - dow
  const mon = new Date(now)
  mon.setDate(now.getDate() + daysToMon + weekOffset * 7)
  mon.setHours(0, 0, 0, 0)
  return mon
}

function getWeekDays(weekOffset: number): Date[] {
  const mon = getMonday(weekOffset)
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(mon)
    d.setDate(mon.getDate() + i)
    return d
  })
}

function fmtDate(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function fmtDisplay(d: Date): string {
  return `${d.getDate()}. ${MONTHS[d.getMonth()]}`
}

function fmtLong(d: Date, hour: number): string {
  const dayName = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'][d.getDay()]
  return `${dayName} ${d.getDate()}. ${MONTHS[d.getMonth()]}, ${hour}:00 - ${hour + 1}:00`
}

function slotKey(equipId: string, date: string, hour: number): string {
  return `${equipId}-${date}-${hour}`
}

function buildMockBookings(): Record<string, string> {
  const mon = getMonday(0)
  const tue = new Date(mon); tue.setDate(mon.getDate() + 1)
  const thu = new Date(mon); thu.setDate(mon.getDate() + 3)
  const fri = new Date(mon); fri.setDate(mon.getDate() + 4)
  return {
    [slotKey('bambu', fmtDate(tue), 18)]: 'Ola Nordmann',
    [slotKey('bambu', fmtDate(thu), 17)]: 'Kari Hansen',
    [slotKey('laser', fmtDate(fri), 16)]: 'Per Eriksen',
    [slotKey('resin', fmtDate(tue), 17)]: 'Lise Andresen',
    [slotKey('laser', fmtDate(tue), 19)]: 'Jonas Berg',
    [slotKey('resin', fmtDate(thu), 19)]: 'Sara Olsen',
  }
}

export default function BookingUI() {
  const [equipId, setEquipId] = useState('bambu')
  const [weekOffset, setWeekOffset] = useState(0)
  const [bookedSlots, setBookedSlots] = useState<Record<string, string>>({})
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [nameInput, setNameInput] = useState('')
  const [myBookings, setMyBookings] = useState<Booking[]>([])
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => {
    setBookedSlots(buildMockBookings())
  }, [])

  const weekDays = useMemo(() => getWeekDays(weekOffset), [weekOffset])

  const equip = EQUIPMENT.find((e) => e.id === equipId)!

  const weekLabel = (() => {
    const mon = weekDays[0]
    const sun = weekDays[6]
    return `${mon.getDate()}. ${MONTHS[mon.getMonth()]} - ${sun.getDate()}. ${MONTHS[sun.getMonth()]} ${sun.getFullYear()}`
  })()

  function isBooked(date: string, hour: number): boolean {
    return slotKey(equipId, date, hour) in bookedSlots
  }

  function isSelected(date: string, hour: number): boolean {
    return selectedSlot === slotKey(equipId, date, hour)
  }

  function isMyBooking(date: string, hour: number): boolean {
    return myBookings.some(
      (b) => b.equipmentId === equipId && b.date === date && b.hour === hour
    )
  }

  function handleSlotClick(day: Date, hour: number) {
    const key = slotKey(equipId, fmtDate(day), hour)
    if (isBooked(fmtDate(day), hour)) return
    setSelectedSlot(selectedSlot === key ? null : key)
    setSuccessMsg('')
  }

  function handleConfirm() {
    if (!selectedSlot || !nameInput.trim()) return
    const parts = selectedSlot.split('-')
    const hour = parseInt(parts[parts.length - 1])
    const date = parts.slice(1, 4).join('-')
    const dayObj = weekDays.find((d) => fmtDate(d) === date)
    if (!dayObj) return

    const booking: Booking = {
      id: `${Date.now()}`,
      equipmentId: equipId,
      equipmentName: equip.name,
      date,
      displayDate: fmtLong(dayObj, hour),
      hour,
      name: nameInput.trim(),
    }

    setBookedSlots((prev) => ({ ...prev, [selectedSlot]: nameInput.trim() }))
    setMyBookings((prev) => [...prev, booking])
    setSelectedSlot(null)
    setNameInput('')
    setSuccessMsg(`Booking bekreftet: ${booking.equipmentName}, ${booking.displayDate}`)
  }

  function handleCancel(bookingId: string) {
    const b = myBookings.find((b) => b.id === bookingId)
    if (!b) return
    const key = slotKey(b.equipmentId, b.date, b.hour)
    setBookedSlots((prev) => {
      const next = { ...prev }
      delete next[key]
      return next
    })
    setMyBookings((prev) => prev.filter((x) => x.id !== bookingId))
  }

  const selectedInfo = (() => {
    if (!selectedSlot) return null
    const parts = selectedSlot.split('-')
    const hour = parseInt(parts[parts.length - 1])
    const date = parts.slice(1, 4).join('-')
    const dayObj = weekDays.find((d) => fmtDate(d) === date)
    if (!dayObj) return null
    return { date, hour, dayObj, display: fmtLong(dayObj, hour) }
  })()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Member notice */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-amber-950/30 border border-amber-700/40 rounded-xl p-4 mb-8">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" className="flex-shrink-0 mt-0.5 sm:mt-0">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <div className="text-sm">
          <span className="text-amber-300 font-semibold">Booking er kun for medlemmar.</span>
          <span className="text-gray-400 mx-1">Ikkje medlem enno?</span>
          <Link href="/demo/eikmakerspace/bli-medlem" className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-2">
            Les om medlemsskap
          </Link>
        </div>
      </div>

      {/* Success message */}
      {successMsg && (
        <div className="flex items-center gap-3 bg-green-950/40 border border-green-700/50 rounded-xl p-4 mb-6">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-green-300 text-sm">{successMsg}</span>
          <button onClick={() => setSuccessMsg('')} className="ml-auto text-gray-500 hover:text-gray-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {/* Equipment selector */}
      <div className="mb-8">
        <h2 className="font-mono text-sm text-gray-400 uppercase tracking-wider mb-3">Velg utstyr</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          {EQUIPMENT.map((eq) => (
            <button
              key={eq.id}
              onClick={() => { setEquipId(eq.id); setSelectedSlot(null); setSuccessMsg('') }}
              className={`flex-1 text-left px-4 py-3 rounded-xl border transition-all font-mono text-sm ${
                equipId === eq.id
                  ? 'bg-purple-950/50 border-purple-500 text-white'
                  : 'bg-[#161616] border-white/10 text-gray-400 hover:border-purple-700/50 hover:text-gray-200'
              }`}
            >
              <div className="font-semibold text-xs sm:text-sm leading-snug">{eq.name}</div>
              <div className={`text-xs mt-0.5 ${equipId === eq.id ? 'text-purple-300' : 'text-gray-600'}`}>{eq.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Week navigation */}
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={() => { setWeekOffset((w) => w - 1); setSelectedSlot(null) }}
          className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white border border-white/10 hover:border-white/20 px-3 py-2 rounded-lg transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          Forrige
        </button>
        <span className="font-mono text-sm text-gray-300">{weekLabel}</span>
        <button
          onClick={() => { setWeekOffset((w) => w + 1); setSelectedSlot(null) }}
          className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white border border-white/10 hover:border-white/20 px-3 py-2 rounded-lg transition-colors"
        >
          Neste
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      {/* Calendar */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[560px] grid grid-cols-7 gap-2">
          {weekDays.map((day) => {
            const dow = day.getDay()
            const dateStr = fmtDate(day)
            const slots = SLOTS_BY_DOW[dow] ?? []
            const isToday = fmtDate(new Date()) === dateStr
            const isPast = day < new Date(new Date().setHours(0, 0, 0, 0))

            return (
              <div key={dateStr} className="flex flex-col">
                {/* Day header */}
                <div className={`text-center pb-2 mb-2 border-b ${isToday ? 'border-purple-600' : 'border-white/10'}`}>
                  <div className={`font-mono text-xs font-bold uppercase tracking-wider ${isToday ? 'text-purple-400' : 'text-gray-500'}`}>
                    {DOW_NAMES[dow]}
                  </div>
                  <div className={`font-mono text-sm font-semibold mt-0.5 ${isToday ? 'text-white' : isPast ? 'text-gray-600' : 'text-gray-300'}`}>
                    {day.getDate()}
                    <span className="text-xs font-normal ml-0.5">{MONTHS[day.getMonth()]}</span>
                  </div>
                </div>

                {/* Slots */}
                <div className="flex flex-col gap-1.5">
                  {slots.length === 0 ? (
                    <div className="text-center py-4">
                      <span className="text-xs text-gray-700 font-mono">Stengt</span>
                    </div>
                  ) : (
                    slots.map((hour) => {
                      const booked = isBooked(dateStr, hour)
                      const selected = isSelected(dateStr, hour)
                      const mine = isMyBooking(dateStr, hour)
                      const past = isPast

                      let btnClass = 'w-full font-mono text-xs py-1.5 px-1 rounded-lg border transition-all text-center '
                      if (past) {
                        btnClass += 'bg-transparent border-white/5 text-gray-700 cursor-not-allowed'
                      } else if (mine) {
                        btnClass += 'bg-green-950/50 border-green-700/60 text-green-300 cursor-default'
                      } else if (booked) {
                        btnClass += 'bg-gray-900 border-white/5 text-gray-600 cursor-not-allowed line-through'
                      } else if (selected) {
                        btnClass += 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/50'
                      } else {
                        btnClass += 'bg-[#1a1a1a] border-white/10 text-gray-300 hover:border-purple-500/60 hover:bg-purple-950/20 hover:text-white cursor-pointer'
                      }

                      return (
                        <button
                          key={hour}
                          className={btnClass}
                          onClick={() => !past && !booked && handleSlotClick(day, hour)}
                          disabled={past || (booked && !mine)}
                          title={booked && !mine ? 'Opptatt' : `${hour}:00 - ${hour + 1}:00`}
                        >
                          {hour}:00
                        </button>
                      )
                    })
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 mb-8 text-xs font-mono text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-[#1a1a1a] border border-white/10 inline-block" />
          Ledig
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-purple-600 inline-block" />
          Valgt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-gray-900 border border-white/5 inline-block" />
          Opptatt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-green-950 border border-green-700/60 inline-block" />
          Din booking
        </span>
      </div>

      {/* Booking form */}
      {selectedInfo && (
        <div className="bg-[#161616] border border-purple-500/40 rounded-xl p-6 mb-8 shadow-lg shadow-purple-950/20">
          <h3 className="font-mono font-bold text-white mb-4 text-base">Bekreft booking</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-[#0f0f0f] border border-white/10 rounded-lg p-3">
              <div className="text-xs text-gray-500 font-mono mb-1">Utstyr</div>
              <div className="text-sm text-white font-semibold">{equip.name}</div>
              <div className="text-xs text-gray-500">{equip.desc}</div>
            </div>
            <div className="bg-[#0f0f0f] border border-white/10 rounded-lg p-3">
              <div className="text-xs text-gray-500 font-mono mb-1">Tid</div>
              <div className="text-sm text-white font-semibold">{selectedInfo.display}</div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
              Ditt navn
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
              placeholder="Ola Nordmann"
              className="w-full sm:w-80 bg-[#0f0f0f] border border-white/20 focus:border-purple-500 rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-colors placeholder:text-gray-600"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleConfirm}
              disabled={!nameInput.trim()}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900/50 disabled:text-purple-700 text-white font-mono font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm disabled:cursor-not-allowed"
            >
              Bekreft booking
            </button>
            <button
              onClick={() => setSelectedSlot(null)}
              className="border border-white/15 text-gray-400 hover:text-white hover:border-white/30 font-mono px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Avbryt
            </button>
          </div>
        </div>
      )}

      {/* My bookings */}
      <div>
        <h2 className="font-mono text-lg font-bold text-white mb-4">Mine bookinger</h2>
        {myBookings.length === 0 ? (
          <div className="bg-[#161616] border border-white/10 rounded-xl p-8 text-center">
            <div className="text-gray-600 text-sm font-mono">Ingen bookinger i denne sesjonen enno.</div>
            <div className="text-gray-700 text-xs mt-1">Velg ein tilgjengeleg tidsluke i kalendaren ovanfor.</div>
          </div>
        ) : (
          <div className="space-y-3">
            {myBookings.map((b) => (
              <div key={b.id} className="flex items-center justify-between gap-4 bg-[#161616] border border-green-900/40 rounded-xl px-5 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-white font-semibold">{b.equipmentName}</div>
                    <div className="text-xs text-gray-400 font-mono mt-0.5">{b.displayDate}</div>
                    <div className="text-xs text-gray-600 mt-0.5">Booket av: {b.name}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCancel(b.id)}
                  className="flex-shrink-0 text-xs font-mono text-red-500 hover:text-red-400 border border-red-900/40 hover:border-red-700/60 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Avbestill
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Note */}
      <div className="mt-10 p-4 bg-[#111] border border-white/5 rounded-xl text-xs text-gray-600 font-mono">
        Dette er ein demo-bookingkalender. Ingen reelle bookingar vert lagra.
        Kontakt oss pa <span className="text-gray-500">eik-makerspace@outlook.com</span> for reell booking.
      </div>
    </div>
  )
}
