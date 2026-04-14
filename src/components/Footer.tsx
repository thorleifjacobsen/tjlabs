import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-[var(--color-border)] py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
        <span>TJ Labs — Thorleif Jacobsen</span>
        <span>© {new Date().getFullYear()} {t('rights')}</span>
      </div>
    </footer>
  );
}
