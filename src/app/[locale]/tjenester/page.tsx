import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

const BASE_URL = 'https://tjlabs.no';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services_overview' });
  const isNb = locale === 'nb';
  return {
    title: t('meta_title'),
    description: t('meta_desc'),
    alternates: {
      canonical: isNb ? `${BASE_URL}/tjenester` : `${BASE_URL}/en/tjenester`,
      languages: {
        nb: `${BASE_URL}/tjenester`,
        en: `${BASE_URL}/en/tjenester`,
      },
    },
  };
}

export default async function TjenesterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services_overview' });

  const services = [
    {
      href: 'tjenester/nettside',
      title: t('nettside_title'),
      desc: t('nettside_desc'),
    },
    {
      href: 'tjenester/webapplikasjon',
      title: t('webapp_title'),
      desc: t('webapp_desc'),
    },
    {
      href: 'tjenester/elektronikk',
      title: t('elektronikk_title'),
      desc: t('elektronikk_desc'),
    },
  ];

  const contactHref = locale === 'nb' ? '/#contact' : '/en#contact';

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-[var(--color-text)] mb-3">{t('title')}</h1>
      <p className="text-[var(--color-text-secondary)] mb-14" style={{ fontWeight: 300 }}>
        {t('subtitle')}
      </p>

      <div className="space-y-4 mb-16">
        {services.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="group flex items-start justify-between gap-4 p-7 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)] hover:shadow-md transition-all duration-200"
          >
            <div>
              <h2 className="font-display text-xl text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2">
                {s.title}
              </h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                {s.desc}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] flex-shrink-0 mt-1 transition-colors" />
          </a>
        ))}
      </div>

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
        <p className="text-[var(--color-text-secondary)] mb-5" style={{ fontWeight: 300 }}>
          {locale === 'nb'
            ? 'Ikke sikker på hva du trenger? Ta kontakt, så finner vi ut av det.'
            : 'Not sure what you need? Get in touch and we will figure it out.'}
        </p>
        <a
          href={contactHref}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-colors duration-200"
        >
          {locale === 'nb' ? 'Ta kontakt' : 'Get in touch'} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
