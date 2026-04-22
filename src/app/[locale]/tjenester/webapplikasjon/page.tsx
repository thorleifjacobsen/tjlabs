import { getTranslations } from 'next-intl/server';
import { Check, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

const BASE_URL = 'https://tjlabs.no';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tjenester_webapp' });
  const isNb = locale === 'nb';
  return {
    title: t('meta_title'),
    description: t('meta_desc'),
    alternates: {
      canonical: isNb ? `${BASE_URL}/tjenester/webapplikasjon` : `${BASE_URL}/en/tjenester/webapplikasjon`,
      languages: {
        nb: `${BASE_URL}/tjenester/webapplikasjon`,
        en: `${BASE_URL}/en/tjenester/webapplikasjon`,
      },
    },
    openGraph: {
      title: t('meta_title'),
      description: t('meta_desc'),
      url: isNb ? `${BASE_URL}/tjenester/webapplikasjon` : `${BASE_URL}/en/tjenester/webapplikasjon`,
    },
  };
}

export default async function WebapplikasjonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tjenester_webapp' });

  const features = ['f1', 'f2', 'f3', 'f4', 'f5'].map((k) => t(k as 'f1'));
  const contactHref = locale === 'nb' ? '/#contact' : '/en#contact';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('title'),
    description: t('meta_desc'),
    provider: {
      '@type': 'Person',
      name: 'Thorleif Jacobsen',
      url: BASE_URL,
    },
    areaServed: { '@type': 'Country', name: 'Norway' },
    url: locale === 'nb' ? `${BASE_URL}/tjenester/webapplikasjon` : `${BASE_URL}/en/tjenester/webapplikasjon`,
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <h1 className="font-display text-4xl text-[var(--color-text)] mb-6">{t('title')}</h1>
      <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-4" style={{ fontWeight: 300 }}>
        {t('intro1')}
      </p>
      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-12" style={{ fontWeight: 300 }}>
        {t('intro2')}
      </p>

      <h2 className="font-display text-2xl text-[var(--color-text)] mb-6">{t('what_title')}</h2>
      <ul className="space-y-3 mb-12">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
            <span className="text-[var(--color-text-secondary)]" style={{ fontWeight: 300 }}>{f}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-display text-2xl text-[var(--color-text)] mb-4">{t('tech_title')}</h2>
      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-14" style={{ fontWeight: 300 }}>
        {t('tech_body')}
      </p>

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
        <h2 className="font-display text-2xl text-[var(--color-text)] mb-3">{t('cta_title')}</h2>
        <p className="text-[var(--color-text-secondary)] mb-6" style={{ fontWeight: 300 }}>{t('cta_body')}</p>
        <a
          href={contactHref}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-colors duration-200"
        >
          {t('cta_btn')} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
