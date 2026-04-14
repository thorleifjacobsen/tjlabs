'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="border-t border-[var(--color-border)] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-3xl text-[var(--color-text)] mb-2">{t('title')}</h2>
        <p className="text-[var(--color-text-secondary)] mb-10">{t('subtitle')}</p>

        {status === 'sent' ? (
          <p className="text-sm font-medium text-green-600">{t('sent')}</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                {t('name')}
              </label>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                {t('email')}
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                {t('message')}
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
              />
            </div>
            {status === 'error' && (
              <p className="text-sm text-red-500">{t('error')}</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-hover)] disabled:opacity-60 transition-colors"
            >
              {status === 'sending' ? '...' : t('send')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
