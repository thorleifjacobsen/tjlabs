import Image from 'next/image';
import { EmailLink } from '@/components/EmailLink';
import { NAV_LINKS } from '@/lib/nav';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="TJLabs" width={28} height={28} className="rounded-md" />
            <span className="font-display font-semibold text-[var(--color-text)]">TJLabs</span>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <EmailLink
            user="hei"
            host="tjlabs.no"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
          />
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} TJLabs. Alle rettigheter forbeholdt.
        </div>
      </div>
    </footer>
  );
}
