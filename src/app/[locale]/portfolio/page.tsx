import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowUpRight, Tag, Package } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isNb = locale === 'nb';
  return {
    title: isNb
      ? 'Portefølje | Nettsider og webapplikasjoner'
      : 'Portfolio | Websites and web applications',
    description: isNb
      ? 'Prosjekter jeg har bygget og lansert. LostTags og Inventoriz, begge bygget med moderne webteknologi.'
      : 'Projects I have built and launched. LostTags and Inventoriz, both built with modern web technology.',
  };
}

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const tp = useTranslations('projects');

  const projects = [
    {
      name: 'LostTags',
      icon: <Tag className="w-5 h-5 text-white" />,
      color: 'bg-[oklch(0.32_0.08_248)]',
      url: 'https://losttags.com',
      desc: tp('losttags_desc'),
      features: [tp('losttags_f1'), tp('losttags_f2'), tp('losttags_f3'), tp('losttags_f4')],
    },
    {
      name: 'Inventoriz',
      icon: <Package className="w-5 h-5 text-white" />,
      color: 'bg-[oklch(0.32_0.08_248)]',
      url: 'https://inventoriz.com',
      desc: tp('inventoriz_desc'),
      features: [tp('inventoriz_f1'), tp('inventoriz_f2'), tp('inventoriz_f3'), tp('inventoriz_f4')],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-[var(--color-text)] mb-3">{t('title')}</h1>
      <p className="text-[var(--color-text-secondary)] mb-14" style={{ fontWeight: 300 }}>{t('subtitle')}</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-11 h-11 rounded-xl ${p.color} flex items-center justify-center`}>
                {p.icon}
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
            </div>
            <h2 className="font-display text-xl text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2">
              {p.name}
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5" style={{ fontWeight: 300 }}>
              {p.desc}
            </p>
            <ul className="space-y-1.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
}
