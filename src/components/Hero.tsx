import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { EmailLink } from '@/components/EmailLink';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const emailUser = locale === 'nb' ? 'hei' : 'hello';

  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p
            className="hero-item text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-4"
          >
            {t('eyebrow')}
          </p>

          <h1
            className="hero-item font-display text-5xl sm:text-6xl md:text-[4.5rem] text-[var(--color-text)] leading-[1.1] mb-8"
            style={{ animationDelay: '80ms' }}
          >
            {t('headline_1')}
            <br />
            <span className="text-[var(--color-primary)]">{t('headline_2')}</span>
          </h1>

          <p
            className="hero-item font-light text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-2xl"
            style={{ animationDelay: '160ms' }}
          >
            {t('tagline')}
          </p>

          <div
            className="hero-item flex flex-wrap gap-4 mb-10"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] hover:-translate-y-0.5 transition-[color,background-color,box-shadow,transform] duration-200 shadow-[0_4px_12px_oklch(0.32_0.08_248_/_0.18)] hover:shadow-[0_8px_24px_oklch(0.32_0.08_248_/_0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)]"
            >
              {t('cta_primary')} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)]"
            >
              {t('cta_secondary')}
            </a>
          </div>

          <div
            className="hero-item flex items-center gap-4"
            style={{ animationDelay: '320ms' }}
          >
            <a href="https://github.com/thorleifjacobsen" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)]" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
<EmailLink user={emailUser} host="tjlabs.no" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)]" aria-label="Email">
              <Mail className="w-5 h-5" />
            </EmailLink>
          </div>
        </div>
      </div>
    </section>
  );
}
