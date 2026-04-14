import { useTranslations } from 'next-intl';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-5">
            {t('eyebrow')}
          </p>

          <h1 className="font-display text-5xl md:text-[4.5rem] text-[var(--color-text)] leading-[1.1] mb-7">
            {t('headline_1')}
            <br />
            <span className="text-[var(--color-primary)]">{t('headline_2')}</span>
          </h1>

          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-2xl" style={{ fontWeight: 300 }}>
            {t('tagline')}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {t('cta_primary')} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {t('cta_secondary')}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/thorleifjacobsen" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/thorleifjacobsen" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:thorleif@tjlabs.no" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
