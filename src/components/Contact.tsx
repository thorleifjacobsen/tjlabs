'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

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
    <section id="contact" className="border-t border-[var(--color-border)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div>
            <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-3">
              {t('label')}
            </p>
            <h2 className="font-display text-4xl text-[var(--color-text)] mb-4">{t('title')}</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">{t('subtitle')}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-muted)] mb-0.5">{t('info_email_label')}</div>
                  <a href="mailto:thorleif@tjlabs.no" className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
                    thorleif@tjlabs.no
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-muted)] mb-0.5">{t('info_location_label')}</div>
                  <div className="text-sm font-medium text-[var(--color-text)]">{t('info_location')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
                <p className="font-semibold text-[var(--color-text)]">{t('sent')}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{t('sent_sub')}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-[var(--color-primary)] hover:underline mt-2"
                >
                  {t('send_another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      {t('name')}
                    </label>
                    <input
                      name="name"
                      required
                      placeholder={t('name_placeholder')}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
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
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                    {t('subject')}
                  </label>
                  <input
                    name="subject"
                    placeholder={t('subject_placeholder')}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
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
                    placeholder={t('message_placeholder')}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-xl">{t('error')}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] disabled:opacity-60 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {status === 'sending' ? t('sending') : t('send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
