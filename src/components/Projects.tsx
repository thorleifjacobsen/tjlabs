import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { ArrowUpRight, Tag, Package } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

// Update PORTFOLIO_TOTAL when adding new projects to the portfolio page
const PROJECTS_ON_HOME = 2;
const PORTFOLIO_TOTAL = 2;

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const portfolioHref = locale === 'nb' ? '/portfolio' : `/${locale}/portfolio`;

  return (
    <section id="projects" className="border-t border-[var(--color-border)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn className="mb-14">
          <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-3">
            {t('label')}
          </p>
          <h2 className="font-display text-4xl text-[var(--color-text)] mb-4">{t('title')}</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed" style={{ fontWeight: 300 }}>{t('subtitle')}</p>
        </AnimateIn>

        <div className="space-y-16">

          {/* ── LostTags ─────────────────────────────────────────────── */}
          <AnimateIn from="left">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image side */}
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-[var(--color-border)] min-h-[320px]">
              <Image src="/losttags-screenshot.png" alt="LostTags" width={1200} height={800} className="w-full h-full object-cover" />
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.32_0.08_248)] flex items-center justify-center">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-text)]">LostTags</h3>
                  <span className="text-xs text-[var(--color-text-muted)]">losttags.com</span>
                </div>
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {t('losttags_desc')}
              </p>

              {/* Feature list */}
              <ul className="space-y-2 mb-6">
                {[t('losttags_f1'), t('losttags_f2'), t('losttags_f3'), t('losttags_f4')].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <a
                href="https://losttags.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all"
              >
                {t('view')} losttags.com <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          </AnimateIn>

          {/* ── Inventoriz ───────────────────────────────────────────── */}
          <AnimateIn from="right">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--color-border)] flex-shrink-0">
                  <Image src="/inventoriz-logo.svg" alt="Inventoriz" width={40} height={40} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-text)]">Inventoriz</h3>
                  <span className="text-xs text-[var(--color-text-muted)]">inventoriz.com</span>
                </div>
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {t('inventoriz_desc')}
              </p>

              <ul className="space-y-2 mb-6">
                {[t('inventoriz_f1'), t('inventoriz_f2'), t('inventoriz_f3'), t('inventoriz_f4')].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://inventoriz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all"
              >
                {t('view')} inventoriz.com <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Image side */}
            <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] min-h-[320px]">
              <Image src="/inventoriz-screenshot.png" alt="Inventoriz" width={1200} height={800} className="w-full h-full object-cover" />
            </div>
          </div>
          </AnimateIn>

        </div>

        {PROJECTS_ON_HOME < PORTFOLIO_TOTAL && (
          <AnimateIn className="mt-14 text-center">
            <a
              href={portfolioHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] border border-[var(--color-primary)] px-6 py-2.5 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              {t('view_all')} <ArrowUpRight className="w-4 h-4" />
            </a>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
