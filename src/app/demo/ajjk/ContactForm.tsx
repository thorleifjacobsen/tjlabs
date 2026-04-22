'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const set =
    (k: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.phone
            ? `Tlf: ${fields.phone}\n\n${fields.message}`
            : fields.message,
        }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className="text-xl font-bold text-gray-900 mb-1"
          style={{ fontFamily: 'var(--font-oswald)' }}
        >
          Melding sendt!
        </h3>
        <p className="text-gray-500 text-sm">Vi tar kontakt med deg snart.</p>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#c0392b]/25 focus:border-[#c0392b] transition-colors bg-white'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Navn <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="text"
            required
            value={fields.name}
            onChange={set('name')}
            placeholder="Ditt navn"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            E-post <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="email"
            required
            value={fields.email}
            onChange={set('email')}
            placeholder="din@epost.no"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Telefon <span className="text-gray-400 font-normal">(valgfritt)</span>
        </label>
        <input
          type="tel"
          value={fields.phone}
          onChange={set('phone')}
          placeholder="900 00 000"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Melding <span className="text-[#c0392b]">*</span>
        </label>
        <textarea
          required
          value={fields.message}
          onChange={set('message')}
          rows={4}
          placeholder="Hva lurer du på? Alder, erfaring, treningstider..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Noe gikk galt. Prøv igjen eller ring oss på 909 69 119.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3.5 bg-[#c0392b] text-white font-bold rounded-lg hover:bg-[#a93226] disabled:opacity-60 transition-colors"
        style={{ fontFamily: 'var(--font-oswald)', letterSpacing: '0.08em' }}
      >
        {status === 'sending' ? 'SENDER...' : 'SEND MELDING'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Eller ring oss direkte:{' '}
        <a href="tel:90969119" className="text-[#c0392b] font-semibold hover:underline">
          909 69 119
        </a>
      </p>
    </form>
  )
}
