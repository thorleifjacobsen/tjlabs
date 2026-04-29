'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
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

// Available hours per day-of-week (0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat)
const SLOTS_BY_DOW: Record<number, number[]> = {
  2: [17, 18, 19, 20],
  4: [17, 18, 19, 20],
  5: [16, 17, 18, 19, 20],
}

const SHORT_DAYS = ['SØN', 'MAN', 'TIR', 'ONS', 'TOR', 'FRE', 'LØR']
const MONTHS_NO = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des']
const LONG_DAYS = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']

function getMonday(weekOffset: number): Date {
  const now = new Date()
  const dow = now.getDay()
  const d = new Date(now)
  d.setDate(now.getDate() + (dow === 0 ? -6 : 1 - dow) + weekOffset * 7)
  d.setHours(0, 0, 0, 0)
  return d
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
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function fmtLong(d: Date, hour: number): string {
  return `${LONG_DAYS[d.getDay()]} ${d.getDate()}. ${MONTHS_NO[d.getMonth()]}, ${hour}:00 - ${hour + 1}:00`
}

function slotKey(equipId: string, date: string, hour: number): string {
  return `${equipId}|${date}|${hour}`
}

function buildMockBookings(): Record<string, string> {
  const mon = getMonday(0)
  const add = (n: number) => { const d = new Date(mon); d.setDate(mon.getDate() + n); return d }
  const tue = add(1), thu = add(3), fri = add(4)
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
  const [mobileStart, setMobileStart] = useState(0)
  const [bookedSlots, setBookedSlots] = useState<Record<string, string>>({})
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [nameInput, setNameInput] = useState('')
  const [myBookings, setMyBookings] = useState<Booking[]>([])
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => { setBookedSlots(buildMockBookings()) }, [])

  const weekDays = useMemo(() => getWeekDays(weekOffset), [weekOffset])

  const todayStr = useMemo(() => fmtDate(new Date()), [])

  const equip = EQUIPMENT.find((e) => e.id === equipId)!

  const weekLabel = useMemo(() => {
    const mon = weekDays[0], sun = weekDays[6]
    return `${mon.getDate()}. ${MONTHS_NO[mon.getMonth()]} - ${sun.getDate()}. ${MONTHS_NO[sun.getMonth()]} ${sun.getFullYear()}`
  }, [weekDays])

  function changeWeek(delta: number) {
    setWeekOffset((w) => w + delta)
    setMobileStart(0)
    setSelectedSlot(null)
    setSuccessMsg('')
  }

  function isBooked(date: string, hour: number) {
    return slotKey(equipId, date, hour) in bookedSlots
  }
  function isSelected(date: string, hour: number) {
    return selectedSlot === slotKey(equipId, date, hour)
  }
  function isMyBooking(date: string, hour: number) {
    return myBookings.some((b) => b.equipmentId === equipId && b.date === date && b.hour === hour)
  }
  function isPastDay(day: Date) {
    return day < new Date(new Date().setHours(0, 0, 0, 0))
  }

  function handleSlotClick(day: Date, hour: number) {
    const date = fmtDate(day)
    if (isPastDay(day) || isBooked(date, hour)) return
    const key = slotKey(equipId, date, hour)
    setSelectedSlot(selectedSlot === key ? null : key)
    setSuccessMsg('')
  }

  const selectedInfo = useMemo(() => {
    if (!selectedSlot) return null
    const [, date, hourStr] = selectedSlot.split('|')
    const hour = parseInt(hourStr)
    const day = weekDays.find((d) => fmtDate(d) === date)
    if (!day) return null
    return { date, hour, day, display: fmtLong(day, hour) }
  }, [selectedSlot, weekDays])

  function handleConfirm() {
    if (!selectedSlot || !nameInput.trim() || !selectedInfo) return
    const booking: Booking = {
      id: String(Date.now()),
      equipmentId: equipId,
      equipmentName: equip.name,
      date: selectedInfo.date,
      displayDate: selectedInfo.display,
      hour: selectedInfo.hour,
      name: nameInput.trim(),
    }
    setBookedSlots((prev) => ({ ...prev, [selectedSlot]: nameInput.trim() }))
    setMyBookings((prev) => [...prev, booking])
    setSelectedSlot(null)
    setNameInput('')
    setSuccessMsg(`Booking bekreftet: ${equip.name}, ${booking.displayDate}`)
  }

  function handleCancel(bookingId: string) {
    const b = myBookings.find((b) => b.id === bookingId)
    if (!b) return
    setBookedSlots((prev) => {
      const next = { ...prev }
      delete next[slotKey(b.equipmentId, b.date, b.hour)]
      return next
    })
    setMyBookings((prev) => prev.filter((x) => x.id !== bookingId))
  }

  const renderDayColumn = useCallback((day: Date) => {
    const dow = day.getDay()
    const dateStr = fmtDate(day)
    const slots = SLOTS_BY_DOW[dow] ?? []
    const isToday = dateStr === todayStr
    const past = isPastDay(day)

    return (
      <div key={dateStr} className="flex flex-col min-w-0">
        {/* Day header */}
        <div className={`text-center pb-3 mb-2 border-b-2 ${isToday ? 'border-green-500' : 'border-gray-100'}`}>
          <div className={`text-[10px] font-bold tracking-widest ${isToday ? 'text-green-600' : past ? 'text-gray-300' : 'text-gray-400'}`}>
            {SHORT_DAYS[dow]}
          </div>
          <div className={`text-sm font-semibold mt-0.5 tabular-nums ${isToday ? 'text-green-700' : past ? 'text-gray-300' : 'text-gray-700'}`}>
            {day.getDate()}
          </div>
          <div className={`text-[10px] ${isToday ? 'text-green-500' : past ? 'text-gray-200' : 'text-gray-400'}`}>
            {MONTHS_NO[day.getMonth()]}
          </div>
        </div>

        {/* Slots */}
        <div className="flex flex-col gap-2">
          {slots.length === 0 ? (
            <div className="flex items-center justify-center py-6">
              <span className="text-xs text-gray-300">Stengt</span>
            </div>
          ) : slots.map((hour) => {
            const booked = isBooked(dateStr, hour)
            const selected = isSelected(dateStr, hour)
            const mine = isMyBooking(dateStr, hour)

            if (past) {
              return (
                <div key={hour} className="h-11 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center">
                  <span className="text-xs text-gray-300 tabular-nums">{hour}:00</span>
                </div>
              )
            }
            if (mine) {
              return (
                <div key={hour} className="h-11 rounded-lg border-2 border-green-400 bg-green-50 flex items-center justify-center">
                  <span className="text-xs font-semibold text-green-700 tabular-nums">{hour}:00</span>
                </div>
              )
            }
            if (booked) {
              return (
                <div key={hour} className="h-11 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center cursor-not-allowed">
                  <span className="text-xs text-gray-300 tabular-nums line-through">{hour}:00</span>
                </div>
              )
            }
            if (selected) {
              return (
                <button
                  key={hour}
                  onClick={() => handleSlotClick(day, hour)}
                  className="h-11 rounded-lg bg-green-600 flex items-center justify-center shadow-sm"
                >
                  <span className="text-xs font-semibold text-white tabular-nums">{hour}:00</span>
                </button>
              )
            }
            return (
              <button
                key={hour}
                onClick={() => handleSlotClick(day, hour)}
                className="h-11 rounded-lg border border-gray-200 bg-white hover:bg-green-50 hover:border-green-300 flex items-center justify-center transition-colors"
              >
                <span className="text-xs text-gray-600 hover:text-green-700 tabular-nums">{hour}:00</span>
              </button>
            )
          })}
        </div>
      </div>
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [equipId, weekDays, bookedSlots, selectedSlot, myBookings, todayStr])

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">

      {/* Member notice */}
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span className="text-amber-800">
          <strong>Booking er kun for medlemmer.</strong>
          {' '}Ikke medlem ennå?{' '}
          <Link href="/demo/eikmakerspace/bli-medlem" className="font-semibold text-green-700 underline underline-offset-2 hover:text-green-800">
            Les om medlemskap
          </Link>
        </span>
      </div>

      {/* Success */}
      {successMsg && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-green-800 font-medium">{successMsg}</span>
          <button onClick={() => setSuccessMsg('')} className="ml-auto text-green-500 hover:text-green-700 p-0.5" aria-label="Lukk">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {/* Equipment selector */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Velg utstyr</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {EQUIPMENT.map((eq) => (
            <button
              key={eq.id}
              onClick={() => { setEquipId(eq.id); setSelectedSlot(null); setSuccessMsg('') }}
              className={`relative text-left px-4 py-3.5 rounded-xl border transition-all overflow-hidden ${
                equipId === eq.id
                  ? 'border-green-300 bg-green-50'
                  : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {equipId === eq.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 rounded-l-xl" />
              )}
              <div className={`text-sm font-semibold ${equipId === eq.id ? 'text-green-900' : 'text-gray-900'}`}>
                {eq.name}
              </div>
              <div className={`text-xs mt-0.5 ${equipId === eq.id ? 'text-green-600' : 'text-gray-400'}`}>
                {eq.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Week navigation */}
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={() => changeWeek(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors py-1.5 px-3 rounded-lg hover:bg-gray-100"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          Forrige
        </button>
        <span className="text-sm text-gray-600 font-medium text-center">{weekLabel}</span>
        <button
          onClick={() => changeWeek(1)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors py-1.5 px-3 rounded-lg hover:bg-gray-100"
        >
          Neste
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      {/* Desktop calendar (all 7 days) */}
      <div className="hidden sm:grid grid-cols-7 gap-2 mb-4">
        {weekDays.map(renderDayColumn)}
      </div>

      {/* Mobile calendar (3 days at a time) */}
      <div className="sm:hidden mb-4">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setMobileStart((s) => Math.max(0, s - 1))}
            disabled={mobileStart === 0}
            className="text-sm text-gray-500 hover:text-gray-800 disabled:text-gray-200 disabled:cursor-not-allowed transition-colors px-2 py-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <span className="text-xs text-gray-400">
            {SHORT_DAYS[weekDays[mobileStart]?.getDay()]} - {SHORT_DAYS[weekDays[Math.min(6, mobileStart + 2)]?.getDay()]}
          </span>
          <button
            onClick={() => setMobileStart((s) => Math.min(4, s + 1))}
            disabled={mobileStart >= 4}
            className="text-sm text-gray-500 hover:text-gray-800 disabled:text-gray-200 disabled:cursor-not-allowed transition-colors px-2 py-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {weekDays.slice(mobileStart, mobileStart + 3).map(renderDayColumn)}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-8">
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded border border-gray-200 bg-white inline-block" />Ledig
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded bg-green-600 inline-block" />Valgt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded border border-gray-100 bg-gray-50 inline-block" />Opptatt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded border-2 border-green-400 bg-green-50 inline-block" />Din booking
        </span>
      </div>

      {/* Booking confirmation panel (slide-in) */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          selectedSlot ? 'max-h-72 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'
        }`}
      >
        {selectedInfo && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Bekreft booking</h3>
            <div className="flex flex-wrap gap-6 mb-5">
              <div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Utstyr</div>
                <div className="text-sm font-semibold text-gray-800">{equip.name}</div>
                <div className="text-xs text-gray-400">{equip.desc}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Tid</div>
                <div className="text-sm font-semibold text-gray-800">{selectedInfo.display}</div>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-xs text-gray-500 font-medium mb-1.5">Ditt navn</label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
                placeholder="Ola Nordmann"
                className="w-full sm:w-72 bg-white border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300"
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleConfirm}
                disabled={!nameInput.trim()}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
              >
                Bekreft booking
              </button>
              <button
                onClick={() => setSelectedSlot(null)}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Avbryt
              </button>
            </div>
          </div>
        )}
      </div>

      {/* My bookings */}
      <div>
        <h2 className="text-base font-semibold text-gray-900 mb-4">Mine bookinger</h2>
        {myBookings.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-8 text-center">
            <p className="text-sm text-gray-400">Ingen bookinger i denne sesjonen ennå.</p>
            <p className="text-xs text-gray-300 mt-1">Velg en ledig tidsluke i kalenderen ovenfor.</p>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            {myBookings.map((b, i) => (
              <div
                key={b.id}
                className={`flex items-center justify-between px-5 py-3.5 gap-4 ${i < myBookings.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1 min-w-0">
                  <span className="text-sm font-medium text-gray-900 truncate">{b.equipmentName}</span>
                  <span className="text-sm text-gray-500 truncate">{b.displayDate}</span>
                  <span className="text-xs text-gray-400">Booket av: {b.name}</span>
                </div>
                <button
                  onClick={() => handleCancel(b.id)}
                  className="flex-shrink-0 text-xs font-medium text-red-500 hover:text-red-700 transition-colors"
                >
                  Avbestill
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <p className="mt-10 text-xs text-gray-300 text-center">
        Demo-bookingkalender. Ingen reelle bookinger lagres. Kontakt{' '}
        <span className="text-gray-400">eik-makerspace@outlook.com</span> for reell booking.
      </p>
    </div>
  )
}
