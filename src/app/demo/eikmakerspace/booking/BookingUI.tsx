'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'

// ─── Config ─────────────────────────────────────────────────────────────────
const MAX_BOOKING_HOURS = 6

// ─── Data ────────────────────────────────────────────────────────────────────
const EQUIPMENT = [
  { id: 'bambu', name: 'Bambu Lab X1 Carbon', desc: 'Filament 3D-printer' },
  { id: 'resin', name: 'Anycubic Photon M3 Max', desc: 'Resin 3D-printer' },
  { id: 'laser', name: '100w CO2 Laser', desc: 'Laser graverer og kutter' },
]

function makeSlots(startH: number, endH: number): string[] {
  const s: string[] = []
  for (let h = startH; h < endH; h++) {
    s.push(`${h}:00`, `${h}:30`)
  }
  return s
}

const OPEN_SLOTS: Record<number, string[]> = {
  2: makeSlots(17, 21),
  4: makeSlots(17, 21),
  5: makeSlots(16, 21),
}

const SHORT_DAYS = ['SØN', 'MAN', 'TIR', 'ONS', 'TOR', 'FRE', 'LØR']
const LONG_DAYS = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des']

// ─── Utils ───────────────────────────────────────────────────────────────────
function fmtDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function getWeekDays(weekOffset: number): Date[] {
  const now = new Date()
  const dow = now.getDay()
  const mon = new Date(now)
  mon.setDate(now.getDate() + (dow === 0 ? -6 : 1 - dow) + weekOffset * 7)
  mon.setHours(0, 0, 0, 0)
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(mon)
    d.setDate(mon.getDate() + i)
    return d
  })
}

function isPast(d: Date) {
  return d < new Date(new Date().setHours(0, 0, 0, 0))
}

function nextSlotLabel(slot: string) {
  const [h, m] = slot.split(':').map(Number)
  return m === 30 ? `${h + 1}:00` : `${h}:30`
}

function genCode() {
  return String(Math.floor(100000 + Math.random() * 900000))
}

// ─── Types ───────────────────────────────────────────────────────────────────
type Booking = {
  id: string
  email: string
  equipId: string
  equipName: string
  date: string
  dateLabel: string
  slots: string[]
}

type FlowStep = 'calendar' | 'email' | 'code' | 'done'
type ViewStep = 'idle' | 'email' | 'code' | 'done'

// ─── Storage ─────────────────────────────────────────────────────────────────
function loadEmail(): string | null {
  try { return localStorage.getItem('eik_email') } catch { return null }
}
function saveEmail(e: string) {
  try { localStorage.setItem('eik_email', e) } catch {}
}
function loadBookings(): Booking[] {
  try { return JSON.parse(localStorage.getItem('eik_bookings') || '[]') } catch { return [] }
}
function saveBookings(b: Booking[]) {
  try { localStorage.setItem('eik_bookings', JSON.stringify(b)) } catch {}
}

// ─── Mock pre-filled busy slots ──────────────────────────────────────────────
function buildMockBusy(): Record<string, Set<string>> {
  const result: Record<string, Set<string>> = {}
  const add = (equipId: string, date: string, slots: string[]) => {
    const k = `${equipId}|${date}`
    if (!result[k]) result[k] = new Set()
    slots.forEach(s => result[k].add(s))
  }
  const now = new Date()
  const dow = now.getDay()
  const mon = new Date(now)
  mon.setDate(now.getDate() + (dow === 0 ? -6 : 1 - dow))
  mon.setHours(0, 0, 0, 0)
  const d = (n: number) => { const x = new Date(mon); x.setDate(mon.getDate() + n); return fmtDate(x) }
  add('bambu', d(1), ['18:00', '18:30', '19:00'])
  add('bambu', d(3), ['17:00', '17:30'])
  add('laser', d(4), ['16:00', '16:30', '17:00', '17:30'])
  add('resin', d(1), ['17:00', '17:30'])
  add('laser', d(1), ['19:00', '19:30', '20:00'])
  return result
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function BookingUI() {
  const [equipId, setEquipId] = useState('bambu')
  const [weekOffset, setWeekOffset] = useState(0)
  const [selectedDay, setSelectedDay] = useState<Date | null>(null)

  // Drag state
  const [dragAnchor, setDragAnchor] = useState<number | null>(null)
  const [dragCurrent, setDragCurrent] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  // Booking flow
  const [flowStep, setFlowStep] = useState<FlowStep>('calendar')
  const [email, setEmail] = useState('')
  const [codeInput, setCodeInput] = useState('')
  const [sentCode, setSentCode] = useState('')
  const [flowError, setFlowError] = useState('')

  // View bookings flow
  const [viewStep, setViewStep] = useState<ViewStep>('idle')
  const [viewEmail, setViewEmail] = useState('')
  const [viewCodeInput, setViewCodeInput] = useState('')
  const [viewSentCode, setViewSentCode] = useState('')
  const [viewError, setViewError] = useState('')
  const [viewIdentified, setViewIdentified] = useState<string | null>(null)

  // Persisted state
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [mockBusy] = useState(() => buildMockBusy())
  const [successMsg, setSuccessMsg] = useState('')

  const weekDays = useMemo(() => getWeekDays(weekOffset), [weekOffset])
  const today = useMemo(() => fmtDate(new Date()), [])

  useEffect(() => {
    setVerifiedEmail(loadEmail())
    setBookings(loadBookings())
  }, [])

  // Open days only
  const openDays = useMemo(() =>
    weekDays.filter(d => OPEN_SLOTS[d.getDay()]),
    [weekDays]
  )

  const weekLabel = useMemo(() => {
    const mon = weekDays[0], sun = weekDays[6]
    return `${mon.getDate()}. ${MONTHS[mon.getMonth()]} – ${sun.getDate()}. ${MONTHS[sun.getMonth()]} ${sun.getFullYear()}`
  }, [weekDays])

  // Effective selection range (clamped to max hours)
  const slotRange = useMemo(() => {
    if (dragAnchor === null || dragCurrent === null) return null
    const MAX_SLOTS = MAX_BOOKING_HOURS * 2
    let start = Math.min(dragAnchor, dragCurrent)
    let end = Math.max(dragAnchor, dragCurrent)
    if (end - start + 1 > MAX_SLOTS) {
      if (dragCurrent >= dragAnchor) end = start + MAX_SLOTS - 1
      else start = end - MAX_SLOTS + 1
    }
    return { start, end }
  }, [dragAnchor, dragCurrent])

  const selectedSlots = useMemo(() => {
    if (!slotRange || !selectedDay) return []
    const slots = OPEN_SLOTS[selectedDay.getDay()] ?? []
    return slots.slice(slotRange.start, slotRange.end + 1)
  }, [slotRange, selectedDay])

  function isBusy(date: string, slot: string) {
    const k = `${equipId}|${date}`
    if (mockBusy[k]?.has(slot)) return true
    return bookings.some(b => b.equipId === equipId && b.date === date && b.slots.includes(slot))
  }

  function hasConflict() {
    if (!selectedDay || selectedSlots.length === 0) return false
    const date = fmtDate(selectedDay)
    return selectedSlots.some(s => isBusy(date, s))
  }

  function inRange(idx: number) {
    return slotRange !== null && idx >= slotRange.start && idx <= slotRange.end
  }

  function handleMouseDown(idx: number, slot: string) {
    if (!selectedDay || isBusy(fmtDate(selectedDay), slot)) return
    setDragAnchor(idx)
    setDragCurrent(idx)
    setIsDragging(true)
  }

  function handleMouseEnter(idx: number) {
    if (!isDragging) return
    setDragCurrent(idx)
  }

  function handleMouseUp() {
    setIsDragging(false)
  }

  function handleDayClick(day: Date) {
    if (isPast(day)) return
    setSelectedDay(prev => {
      if (prev && fmtDate(prev) === fmtDate(day)) return prev
      setDragAnchor(null)
      setDragCurrent(null)
      return day
    })
    setFlowStep('calendar')
    setSuccessMsg('')
  }

  function changeWeek(delta: number) {
    setWeekOffset(w => w + delta)
    setSelectedDay(null)
    setDragAnchor(null)
    setDragCurrent(null)
    setFlowStep('calendar')
    setSuccessMsg('')
  }

  // ─── Booking flow ───────────────────────────────────────────────────────────
  function handleBook() {
    if (!selectedDay || selectedSlots.length === 0 || hasConflict()) return
    if (verifiedEmail) {
      confirmBooking(verifiedEmail)
    } else {
      setFlowStep('email')
      setEmail('')
      setCodeInput('')
      setSentCode('')
      setFlowError('')
    }
  }

  function handleSendCode() {
    if (!email.includes('@')) { setFlowError('Skriv inn en gyldig e-postadresse.'); return }
    const code = genCode()
    setSentCode(code)
    setFlowStep('code')
    setFlowError('')
    setCodeInput('')
  }

  function handleVerifyCode() {
    if (codeInput === sentCode) {
      saveEmail(email)
      setVerifiedEmail(email)
      confirmBooking(email)
    } else {
      setFlowError('Feil kode. Prøv igjen.')
    }
  }

  function confirmBooking(userEmail: string) {
    if (!selectedDay || selectedSlots.length === 0) return
    const equip = EQUIPMENT.find(e => e.id === equipId)!
    const dateStr = fmtDate(selectedDay)
    const day = selectedDay
    const endLabel = nextSlotLabel(selectedSlots[selectedSlots.length - 1])
    const hours = selectedSlots.length / 2
    const dateLabel = `${LONG_DAYS[day.getDay()]} ${day.getDate()}. ${MONTHS[day.getMonth()]}, ${selectedSlots[0]}–${endLabel} (${hours}t)`

    const booking: Booking = {
      id: String(Date.now()),
      email: userEmail,
      equipId,
      equipName: equip.name,
      date: dateStr,
      dateLabel,
      slots: selectedSlots,
    }
    const updated = [...bookings, booking]
    setBookings(updated)
    saveBookings(updated)
    setSuccessMsg(`Booking bekreftet! ${equip.name} – ${dateLabel}`)
    setFlowStep('done')
    setDragAnchor(null)
    setDragCurrent(null)
    setSelectedDay(null)
  }

  function cancelBooking(id: string) {
    const updated = bookings.filter(b => b.id !== id)
    setBookings(updated)
    saveBookings(updated)
  }

  // ─── View bookings flow ─────────────────────────────────────────────────────
  function handleViewSendCode() {
    if (!viewEmail.includes('@')) { setViewError('Skriv inn en gyldig e-postadresse.'); return }
    const code = genCode()
    setViewSentCode(code)
    setViewStep('code')
    setViewError('')
    setViewCodeInput('')
  }

  function handleViewVerifyCode() {
    if (viewCodeInput === viewSentCode) {
      setViewIdentified(viewEmail)
      setViewStep('done')
      setViewError('')
    } else {
      setViewError('Feil kode. Prøv igjen.')
    }
  }

  const myBookings = useMemo(() => {
    const who = viewStep === 'done' ? viewIdentified : verifiedEmail
    if (!who) return []
    return bookings.filter(b => b.email === who)
  }, [bookings, verifiedEmail, viewStep, viewIdentified])

  const equip = EQUIPMENT.find(e => e.id === equipId)!
  const conflict = hasConflict()
  const canBook = selectedSlots.length > 0 && !conflict

  const selectionLabel = useMemo(() => {
    if (!selectedDay || selectedSlots.length === 0) return null
    const day = selectedDay
    const hours = selectedSlots.length / 2
    const endLabel = nextSlotLabel(selectedSlots[selectedSlots.length - 1])
    return `${SHORT_DAYS[day.getDay()]} ${day.getDate()}. ${MONTHS[day.getMonth()]}, ${selectedSlots[0]}–${endLabel} · ${hours}t`
  }, [selectedDay, selectedSlots])

  const selectedDayStr = selectedDay ? fmtDate(selectedDay) : null

  return (
    <div
      className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Member notice */}
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span className="text-amber-800">
          <strong>Booking er kun for medlemmer.</strong>
          {' '}Ikke medlem ennå?{' '}
          <a href="/demo/eikmakerspace/bli-medlem" className="font-semibold text-green-700 underline underline-offset-2 hover:text-green-800">
            Les om medlemskap
          </a>
        </span>
      </div>

      {/* Success */}
      {successMsg && flowStep === 'done' && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-green-800 font-medium">{successMsg}</span>
          <button onClick={() => { setSuccessMsg(''); setFlowStep('calendar') }} className="ml-auto text-green-500 hover:text-green-700" aria-label="Lukk">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {/* Equipment selector */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Velg utstyr</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {EQUIPMENT.map(eq => (
            <button
              key={eq.id}
              onClick={() => { setEquipId(eq.id); setDragAnchor(null); setDragCurrent(null); setSuccessMsg('') }}
              className={`relative text-left px-4 py-3.5 rounded-xl border transition-all overflow-hidden ${
                equipId === eq.id
                  ? 'border-green-200 bg-green-50'
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
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 py-1.5 px-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          Forrige
        </button>
        <span className="text-sm text-gray-600 font-medium">{weekLabel}</span>
        <button
          onClick={() => changeWeek(1)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 py-1.5 px-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Neste
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      {/* Day tabs — only open days */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {openDays.map(day => {
          const dStr = fmtDate(day)
          const isSelected = selectedDayStr === dStr
          const past = isPast(day)
          const isToday = dStr === today
          return (
            <button
              key={dStr}
              onClick={() => !past && handleDayClick(day)}
              disabled={past}
              className={`flex-shrink-0 flex flex-col items-center px-4 py-2.5 rounded-xl border transition-all min-w-[72px] ${
                past
                  ? 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
                  : isSelected
                    ? 'border-green-300 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-700'
              }`}
            >
              <span className={`text-[10px] font-bold tracking-widest uppercase ${isSelected ? 'text-green-500' : past ? 'text-gray-300' : isToday ? 'text-green-500' : 'text-gray-400'}`}>
                {SHORT_DAYS[day.getDay()]}
              </span>
              <span className="text-lg font-bold tabular-nums leading-tight">
                {day.getDate()}
              </span>
              <span className={`text-[10px] ${isSelected ? 'text-green-400' : 'text-gray-400'}`}>
                {MONTHS[day.getMonth()]}
              </span>
              {isToday && !past && (
                <span className="w-1 h-1 rounded-full bg-green-500 mt-1" />
              )}
            </button>
          )
        })}
      </div>

      {/* Slot picker */}
      {selectedDay && !isPast(selectedDay) ? (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-gray-400 select-none">
              Klikk og dra for å velge tid · Maks {MAX_BOOKING_HOURS} timer
            </p>
            {slotRange !== null && (
              <button
                onClick={() => { setDragAnchor(null); setDragCurrent(null) }}
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Nullstill
              </button>
            )}
          </div>

          <div
            className="select-none rounded-xl border border-gray-200 bg-white overflow-hidden"
            style={{ userSelect: 'none' }}
          >
            {(OPEN_SLOTS[selectedDay.getDay()] ?? []).map((slot, idx) => {
              const busy = isBusy(fmtDate(selectedDay), slot)
              const selected = inRange(idx)
              const isHour = slot.endsWith(':00')
              const selectedConflict = selected && conflict

              return (
                <div
                  key={slot}
                  onMouseDown={() => handleMouseDown(idx, slot)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  className={`flex items-center h-9 px-4 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors ${
                    busy
                      ? 'bg-gray-50 cursor-not-allowed'
                      : selectedConflict
                        ? 'bg-red-50'
                        : selected
                          ? 'bg-green-500'
                          : 'hover:bg-green-50'
                  }`}
                >
                  <span className={`text-xs tabular-nums font-${isHour ? 'semibold' : 'normal'} ${
                    busy
                      ? 'text-gray-300 line-through'
                      : selectedConflict
                        ? 'text-red-400'
                        : selected
                          ? 'text-white font-semibold'
                          : 'text-gray-500'
                  }`}>
                    {slot}
                  </span>
                  {busy && (
                    <span className="ml-auto text-[10px] text-gray-300">Opptatt</span>
                  )}
                  {selected && !busy && (
                    <span className={`ml-auto text-[10px] ${selectedConflict ? 'text-red-400' : 'text-green-100'}`}>
                      {selectedConflict ? 'Konflikt' : '✓'}
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="flex gap-4 mt-3 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded border border-gray-200 bg-white inline-block" />Ledig
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-green-500 inline-block" />Valgt
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-gray-100 inline-block" />Opptatt
            </span>
          </div>
        </div>
      ) : !selectedDay ? (
        <div className="mb-6 rounded-xl border border-dashed border-gray-200 px-6 py-10 text-center">
          <p className="text-sm text-gray-400">Velg en dag ovenfor for å se ledige tider</p>
        </div>
      ) : null}

      {/* Booking flow panel */}
      {flowStep === 'calendar' && selectedSlots.length > 0 && (
        <div className={`rounded-2xl border p-5 mb-8 ${conflict ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Valgt tid</p>
              <p className="text-sm font-semibold text-gray-800">{equip.name}</p>
              <p className="text-sm text-gray-600">{selectionLabel}</p>
              {conflict && (
                <p className="text-xs text-red-500 mt-1">Overlapper med en eksisterende booking – velg et annet tidspunkt.</p>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => { setDragAnchor(null); setDragCurrent(null) }}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors px-3 py-2"
              >
                Avbryt
              </button>
              <button
                onClick={handleBook}
                disabled={!canBook}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors shadow-sm"
              >
                {verifiedEmail ? 'Bekreft booking' : 'Fortsett'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email step */}
      {flowStep === 'email' && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-8 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-1">Bekreft med e-post</h3>
          <p className="text-sm text-gray-500 mb-5">Vi sender en engangskode til din e-postadresse.</p>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">E-postadresse</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendCode()}
              placeholder="din@epost.no"
              autoFocus
              className="w-full sm:w-80 bg-gray-50 border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300"
            />
            {flowError && <p className="text-xs text-red-500 mt-1.5">{flowError}</p>}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSendCode}
              disabled={!email.includes('@')}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              Send kode
            </button>
            <button onClick={() => setFlowStep('calendar')} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Tilbake
            </button>
          </div>
        </div>
      )}

      {/* Code step */}
      {flowStep === 'code' && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-8 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-1">Skriv inn koden</h3>
          <p className="text-sm text-gray-500 mb-1">Koden ble «sendt» til <strong>{email}</strong>.</p>
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-400 mb-5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Demo-kode: <span className="font-mono font-semibold text-gray-700 text-sm">{sentCode}</span>
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Engangskode</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={codeInput}
              onChange={e => setCodeInput(e.target.value.replace(/\D/g, ''))}
              onKeyDown={e => e.key === 'Enter' && handleVerifyCode()}
              placeholder="123456"
              autoFocus
              className="w-40 bg-gray-50 border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-2.5 text-sm font-mono text-gray-900 outline-none transition-all placeholder:text-gray-300 tracking-widest"
            />
            {flowError && <p className="text-xs text-red-500 mt-1.5">{flowError}</p>}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleVerifyCode}
              disabled={codeInput.length !== 6}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              Bekreft booking
            </button>
            <button onClick={() => setFlowStep('email')} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Tilbake
            </button>
          </div>
        </div>
      )}

      {/* My bookings ─────────────────────────────────────────────────────────── */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">Mine bookinger</h2>
          {verifiedEmail && (
            <span className="text-xs text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
              {verifiedEmail}
            </span>
          )}
        </div>

        {verifiedEmail || (viewStep === 'done' && viewIdentified) ? (
          <>
            {myBookings.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-200 px-6 py-8 text-center">
                <p className="text-sm text-gray-400">Ingen bookinger ennå.</p>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {myBookings.map((b, i) => (
                  <div
                    key={b.id}
                    className={`flex items-center justify-between px-5 py-4 gap-4 ${i < myBookings.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900">{b.equipName}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{b.dateLabel}</p>
                    </div>
                    <button
                      onClick={() => cancelBooking(b.id)}
                      className="flex-shrink-0 text-xs font-medium text-red-500 hover:text-red-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
                    >
                      Avbestill
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          /* View bookings via email flow */
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            {viewStep === 'idle' && (
              <>
                <p className="text-sm text-gray-500 mb-4">
                  Skriv inn e-postadressen du brukte da du booket, så sender vi deg en kode.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={viewEmail}
                    onChange={e => setViewEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleViewSendCode()}
                    placeholder="din@epost.no"
                    className="flex-1 sm:max-w-xs bg-gray-50 border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300"
                  />
                  <button
                    onClick={handleViewSendCode}
                    disabled={!viewEmail.includes('@')}
                    className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Send kode
                  </button>
                </div>
                {viewError && <p className="text-xs text-red-500 mt-2">{viewError}</p>}
              </>
            )}

            {viewStep === 'code' && (
              <>
                <p className="text-sm text-gray-500 mb-1">Koden ble «sendt» til <strong>{viewEmail}</strong>.</p>
                <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-400 mb-4">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Demo-kode: <span className="font-mono font-semibold text-gray-700 text-sm">{viewSentCode}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={viewCodeInput}
                    onChange={e => setViewCodeInput(e.target.value.replace(/\D/g, ''))}
                    onKeyDown={e => e.key === 'Enter' && handleViewVerifyCode()}
                    placeholder="123456"
                    autoFocus
                    className="w-40 bg-gray-50 border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-2.5 text-sm font-mono text-gray-900 outline-none transition-all placeholder:text-gray-300 tracking-widest"
                  />
                  <button
                    onClick={handleViewVerifyCode}
                    disabled={viewCodeInput.length !== 6}
                    className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Vis bookinger
                  </button>
                  <button onClick={() => { setViewStep('idle'); setViewError('') }} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                    Tilbake
                  </button>
                </div>
                {viewError && <p className="text-xs text-red-500 mt-2">{viewError}</p>}
              </>
            )}
          </div>
        )}
      </div>

      <p className="mt-10 text-xs text-gray-300 text-center">
        Demo-bookingkalender. Ingen reelle bookinger lagres. Kontakt{' '}
        <span className="text-gray-400">eik-makerspace@outlook.com</span> for reell booking.
      </p>
    </div>
  )
}
