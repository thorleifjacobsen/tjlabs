import { EmailLink } from '@/components/EmailLink';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-6 mt-auto">
      <div className="max-w-xl mx-auto px-6 flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} TJLabs
        </span>
        <EmailLink
          user="hei"
          host="tjlabs.no"
          className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
        />
      </div>
    </footer>
  );
}
