'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ navn: '', telefon: '', epost: '', melding: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const input = 'rounded-lg border border-slate-200 p-3 w-full text-sm bg-white focus:outline-none focus:ring-2 focus:border-[#1a4f7a]'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="navn"
        value={form.navn}
        onChange={handleChange}
        placeholder="Navn"
        required
        className={input}
      />
      <input
        name="telefon"
        value={form.telefon}
        onChange={handleChange}
        placeholder="Telefon"
        type="tel"
        className={input}
      />
      <input
        name="epost"
        value={form.epost}
        onChange={handleChange}
        placeholder="E-post"
        type="email"
        required
        className={input}
      />
      <textarea
        name="melding"
        value={form.melding}
        onChange={handleChange}
        placeholder="Melding"
        rows={4}
        required
        className={input}
      />
      <button
        type="submit"
        className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#1a4f7a' }}
      >
        Send melding
      </button>
      <p className="text-xs text-slate-500 text-center">Vi svarer normalt innen én arbeidsdag.</p>
    </form>
  )
}
