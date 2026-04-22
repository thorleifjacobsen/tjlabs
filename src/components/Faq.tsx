'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimateIn } from '@/components/AnimateIn';
import { ChevronDown } from 'lucide-react';

export function Faq() {
  const t = useTranslations('faq');
  const [open, setOpen] = useState<number | null>(null);

  const items = ([1, 2, 3, 4, 5, 6, 7] as const).map((i) => ({
    q: t(`q${i}`),
    a: t(`a${i}`),
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <section id="faq" className="py-24 border-t border-[var(--color-border)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn className="mb-14">
          <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-3">
            {t('label')}
          </p>
          <h2 className="font-display text-4xl text-[var(--color-text)] mb-4">{t('title')}</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed" style={{ fontWeight: 300 }}>
            {t('subtitle')}
          </p>
        </AnimateIn>

        <div className="space-y-3">
          {items.map(({ q, a }, i) => (
            <AnimateIn key={q} delay={i * 40}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                >
                  <span className="font-medium text-[var(--color-text)]">{q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {open === i && (
                  <div
                    className="px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed"
                    style={{ fontWeight: 300 }}
                  >
                    {a}
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
