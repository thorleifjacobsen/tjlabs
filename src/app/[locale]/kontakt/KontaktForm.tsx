'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function KontaktForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="card p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[360px]">
        <div className="w-12 h-12 rounded-full bg-[oklch(0.62_0.22_248_/_0.15)] border border-[var(--color-primary)] flex items-center justify-center">
          <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-display text-lg text-[var(--color-text)] mb-1">Melding sendt!</p>
          <p className="text-sm text-[var(--color-text-secondary)]">Jeg svarer deg så snart som mulig.</p>
        </div>
        <button
          onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }); }}
          className="text-sm text-[var(--color-primary)] hover:underline"
        >
          Send en ny melding
        </button>
      </div>
    );
  }

  const inputClass = [
    'w-full px-4 py-3 rounded-lg text-sm',
    'bg-[var(--color-surface-2)] border border-[var(--color-border)]',
    'text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]',
    'focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]',
    'transition-colors',
  ].join(' ');

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-[var(--color-text-muted)] mb-1.5 tracking-wide">Navn</label>
          <input
            type="text"
            required
            placeholder="Ditt navn"
            className={inputClass}
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-xs text-[var(--color-text-muted)] mb-1.5 tracking-wide">E-post</label>
          <input
            type="email"
            required
            placeholder="din@epost.no"
            className={inputClass}
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-[var(--color-text-muted)] mb-1.5 tracking-wide">Melding</label>
        <textarea
          required
          rows={6}
          placeholder="Fortell meg hva du trenger hjelp med..."
          className={`${inputClass} resize-none`}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400">Noe gikk galt. Prøv igjen eller send e-post direkte.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full justify-center disabled:opacity-60"
      >
        {status === 'sending' ? 'Sender...' : (
          <>Send melding <ArrowRight className="w-4 h-4" /></>
        )}
      </button>
    </form>
  );
}
