import { useTranslations, useLocale } from 'next-intl';
import { EmailLink } from '@/components/EmailLink';
import { Mail, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const emailUser = locale === 'nb' ? 'hei' : 'hello';

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
                  <EmailLink
                    user={emailUser}
                    host="tjlabs.no"
                    className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right — mailto CTA */}
          <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 flex flex-col items-center justify-center text-center gap-6 min-h-[280px]">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="font-display text-xl text-[var(--color-text)] mb-2">{t('cta_title')}</p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{t('cta_sub')}</p>
            </div>
            <EmailLink
              user={emailUser}
              host="tjlabs.no"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              {t('cta_btn')} <ArrowUpRight className="w-4 h-4" />
            </EmailLink>
            <p className="text-xs text-[var(--color-text-muted)]">{t('cta_response')}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
