import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="border-t border-[var(--color-border)] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-[var(--color-text)] mb-6">{t('title')}</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">{t('body')}</p>
        </div>
      </div>
    </section>
  );
}
