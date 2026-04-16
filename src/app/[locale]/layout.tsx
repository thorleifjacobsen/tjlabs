import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Comfortaa } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--ff-comfortaa',
  display: 'swap',
});

const BASE_URL = 'https://tjlabs.no';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isNb = locale === 'nb';

  return {
    description: isNb
      ? 'Webutvikler og maker. Nettsider, webapplikasjoner, 3D-printing og elektronikk.'
      : 'Web developer and maker. Websites, web applications, 3D printing and electronics.',
    alternates: {
      canonical: isNb ? BASE_URL : `${BASE_URL}/en`,
      languages: {
        nb: BASE_URL,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: isNb ? 'nb_NO' : 'en_US',
      alternateLocale: isNb ? ['en_US'] : ['nb_NO'],
      url: isNb ? BASE_URL : `${BASE_URL}/en`,
      siteName: 'TJLabs',
      title: 'TJLabs',
      description: isNb
        ? 'Webutvikler og maker. Nettsider, webapplikasjoner, 3D-printing og elektronikk.'
        : 'Web developer and maker. Websites, web applications, 3D printing and electronics.',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TJLabs' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'TJLabs',
      description: isNb
        ? 'Webutvikler og maker. Nettsider, webapplikasjoner, 3D-printing og elektronikk.'
        : 'Web developer and maker. Websites, web applications, 3D printing and electronics.',
      images: ['/og-image.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'nb' | 'en')) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Thorleif Jacobsen',
    url: BASE_URL,
    jobTitle: locale === 'nb' ? 'Webutvikler' : 'Web Developer',
    worksFor: { '@type': 'Organization', name: 'TJLabs', url: BASE_URL },
    sameAs: [
      'https://github.com/thorleifjacobsen',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TJLabs',
    url: BASE_URL,
    author: { '@type': 'Person', name: 'Thorleif Jacobsen' },
  };

  return (
    <html lang={locale} className={comfortaa.variable}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
