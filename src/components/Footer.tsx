import { NAV_LINKS } from '@/lib/nav';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 mt-auto">
      <div className="max-w-xl mx-auto px-6 space-y-4">
        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hei@tjlabs.no"
            className="text-sm text-[var(--color-primary)] hover:opacity-75 transition-opacity"
          >
            hei@tjlabs.no
          </a>
        </nav>
        <p className="text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} TJLabs
        </p>
      </div>
    </footer>
  );
}
