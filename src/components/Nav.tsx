'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLocale() {
    const next = locale === 'nb' ? 'en' : 'nb';
    // Replace the locale prefix in the path
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  }

  const links = [
    { href: '#services', label: t('services') },
    { href: '#projects', label: t('projects') },
    { href: '#about', label: t('about') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-surface)] border-b border-[var(--color-border)] backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-[var(--color-primary)]">
          TJ Labs
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-[var(--color-text)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLocale}
            className="text-xs font-medium px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-text-secondary)] transition-colors"
          >
            {locale === 'nb' ? 'EN' : 'NO'}
          </button>
        </div>
      </nav>
    </header>
  );
}
