import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

const BASE_URL = 'https://tjlabs.no';

export const metadata: Metadata = {
  description:
    'Freelance webutvikler i Norge. Jeg lager nettsider, webapplikasjoner, IoT-løsninger og kretskort. 10+ års erfaring. Ta kontakt for et uforpliktende tilbud.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: BASE_URL,
    siteName: 'TJLabs',
    title: 'TJLabs | Webutvikler i Norge',
    description:
      'Freelance webutvikler i Norge. Nettsider, webapplikasjoner, elektronikk og IoT-løsninger.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TJLabs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TJLabs | Webutvikler i Norge',
    description:
      'Freelance webutvikler i Norge. Nettsider, webapplikasjoner, elektronikk og IoT-løsninger.',
    images: ['/og-image.png'],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'nb')) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Thorleif Jacobsen',
    url: BASE_URL,
    jobTitle: 'Webutvikler',
    worksFor: { '@type': 'Organization', name: 'TJLabs', url: BASE_URL },
    sameAs: ['https://github.com/thorleifjacobsen'],
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'TJLabs',
    description: 'Freelance webutvikler i Norge. Nettsider, webapplikasjoner, elektronikk og IoT.',
    url: BASE_URL,
    email: 'hei@tjlabs.no',
    founder: { '@type': 'Person', name: 'Thorleif Jacobsen' },
    areaServed: { '@type': 'Country', name: 'Norway' },
    serviceType: ['Webutvikling', 'Nettside design', 'Webapplikasjoner', 'PCB design', 'IoT', '3D printing'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </NextIntlClientProvider>
    </>
  );
}
