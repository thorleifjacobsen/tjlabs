import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { EmailLink } from '@/components/EmailLink';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const emailUser = locale === 'nb' ? 'hei' : 'hello';

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="TJ Labs" width={32} height={32} className="rounded-md" />
            <div>
              <div className="font-display font-semibold text-[var(--color-primary)]">TJ Labs</div>
              <div className="text-xs text-[var(--color-text-muted)]">Thorleif Jacobsen</div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text-secondary)]">
            {[
              { href: '/#services', label: t('nav_services') },
              { href: '/#projects', label: t('nav_projects') },
              { href: '/blog', label: t('nav_blog') },
              { href: '/#about', label: t('nav_about') },
              { href: '/#contact', label: t('nav_contact') },
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[var(--color-primary)] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/thorleifjacobsen" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/thorleifjacobsen" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <EmailLink user={emailUser} host="tjlabs.no" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
              <Mail className="w-4 h-4" />
            </EmailLink>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
          <span>© {new Date().getFullYear()} TJ Labs - {t('rights')}</span>
          <span>Norway</span>
        </div>
      </div>
    </footer>
  );
}
