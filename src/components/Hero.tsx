import { useTranslations } from 'next-intl';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  const stack = ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'];

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, oklch(0.32 0.08 248) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28 md:py-40">
        <div className="max-w-3xl">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-200 bg-green-50 text-green-700 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            {t('available')}
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-[var(--color-text)] leading-[1.1] mb-6">
            {t('headline_1')}
            <br />
            <span className="text-[var(--color-primary)]">{t('headline_2')}</span>
          </h1>

          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-xl">
            {t('tagline')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors shadow-sm"
            >
              {t('cta_primary')} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {t('cta_secondary')}
            </a>
          </div>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {stack.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] font-medium"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/thorleifjacobsen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/thorleifjacobsen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:thorleif@tjlabs.no"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
