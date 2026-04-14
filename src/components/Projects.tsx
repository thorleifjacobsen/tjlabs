import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const t = useTranslations('projects');

  const items = [
    {
      name: 'LostTags',
      desc: t('losttags_desc'),
      url: 'https://losttags.com',
      tech: ['Next.js', 'Stripe', 'QR'],
    },
    {
      name: 'Inventoriz',
      desc: t('inventoriz_desc'),
      url: 'https://inventoriz.com',
      tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    },
  ];

  return (
    <section id="projects" className="border-t border-[var(--color-border)] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-3xl text-[var(--color-text)] mb-12">{t('title')}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {p.name}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
