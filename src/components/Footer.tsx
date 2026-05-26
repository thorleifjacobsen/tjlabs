export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 mt-auto">
      <div className="max-w-xl mx-auto px-6 flex items-center justify-between gap-4">
        <span className="text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} TJLabs
        </span>
        <a
          href="mailto:hei@tjlabs.no"
          className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
        >
          hei@tjlabs.no
        </a>
      </div>
    </footer>
  );
}
