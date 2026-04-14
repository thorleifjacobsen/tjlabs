import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 md:py-36">
      <p className="text-sm font-medium text-[var(--color-accent)] mb-3 tracking-wide uppercase">
        {t('greeting')}
      </p>
      <h1 className="font-display text-4xl md:text-6xl text-[var(--color-text)] leading-tight mb-6">
        {t('tagline')}
      </h1>
      <div className="flex flex-wrap gap-3 mt-8">
        <a
          href="#services"
          className="px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          {t('cta_primary')}
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-medium hover:border-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
        >
          {t('cta_secondary')}
        </a>
      </div>
    </section>
  );
}
