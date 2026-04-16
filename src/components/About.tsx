import { useTranslations, useLocale } from 'next-intl';
import { Calendar } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';
import { EmailLink } from '@/components/EmailLink';

export function About() {
  const t = useTranslations('about');
  const locale = useLocale();
  const emailUser = locale === 'nb' ? 'hei' : 'hello';

  const facts = [
    { icon: Calendar, text: t('fact_experience') },
  ];

return (
    <section id="about" className="border-t border-[var(--color-border)] py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - text */}
          <div>
            <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-3">
              {t('label')}
            </p>
            <h2 className="font-display text-4xl text-[var(--color-text)] mb-6">{t('title')}</h2>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>{t('body1')}</p>
              <p>{t('body2')}</p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-3 mt-8">
              {facts.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                  <Icon className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right - brand card */}
          <div className="flex items-center gap-5 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[oklch(0.32_0.08_248)] to-[oklch(0.55_0.12_248)] flex items-center justify-center flex-shrink-0">
              <span className="font-display text-3xl font-bold text-white">TJ</span>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-text)] text-lg">TJLabs</div>
              <div className="text-sm text-[var(--color-text-secondary)]">{t('role')}</div>
              <EmailLink user={emailUser} host="tjlabs.no" className="text-xs text-[var(--color-text-muted)] mt-1 hover:text-[var(--color-primary)] transition-colors" />
            </div>
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
