import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Github, Mail } from 'lucide-react';
import { EmailLink } from '@/components/EmailLink';
import { NAV_LINKS } from '@/lib/nav';

export function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const locale = useLocale();
  const emailUser = locale === 'nb' ? 'hei' : 'hello';

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="TJLabs" width={32} height={32} className="rounded-md" />
            <div className="font-display font-semibold text-[var(--color-primary)]">TJLabs</div>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text-secondary)]">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-[var(--color-primary)] transition-colors">
                  {tn(l.tKey)}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text-muted)]">
              <span className="font-medium text-[var(--color-text-secondary)]">{t('services_label')}:</span>
              <a href={`${locale === 'nb' ? '' : '/en'}/services/website`} className="hover:text-[var(--color-primary)] transition-colors">{t('service_website')}</a>
              <a href={`${locale === 'nb' ? '' : '/en'}/services/webapp`} className="hover:text-[var(--color-primary)] transition-colors">{t('service_webapp')}</a>
              <a href={`${locale === 'nb' ? '' : '/en'}/services/electronics`} className="hover:text-[var(--color-primary)] transition-colors">{t('service_electronics')}</a>
              <a href={`${locale === 'nb' ? '' : '/en'}/services/3d-printing`} className="hover:text-[var(--color-primary)] transition-colors">{t('service_print')}</a>
            </div>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/thorleifjacobsen" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
              <Github className="w-4 h-4" />
            </a>
<EmailLink user={emailUser} host="tjlabs.no" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
              <Mail className="w-4 h-4" />
            </EmailLink>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
          <span>© {new Date().getFullYear()} TJLabs. {t('rights')}</span>
        </div>
      </div>
    </footer>
  );
}
