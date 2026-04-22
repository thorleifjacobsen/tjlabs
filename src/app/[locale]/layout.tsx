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

  const desc = isNb
    ? 'Freelance webutvikler i Norge. Jeg lager nettsider, webapplikasjoner, IoT-løsninger og kretskort. 10+ års erfaring. Ta kontakt for et uforpliktende tilbud.'
    : 'Freelance web developer in Norway. I build websites, web applications, IoT solutions and circuit boards. 10+ years of experience.';

  return {
    description: desc,
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
      title: isNb ? 'TJLabs | Webutvikler i Norge' : 'TJLabs | Web Developer in Norway',
      description: desc,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TJLabs' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isNb ? 'TJLabs | Webutvikler i Norge' : 'TJLabs | Web Developer in Norway',
      description: desc,
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
    sameAs: ['https://github.com/thorleifjacobsen'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TJLabs',
    url: BASE_URL,
    author: { '@type': 'Person', name: 'Thorleif Jacobsen' },
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'TJLabs',
    description: locale === 'nb'
      ? 'Freelance webutvikler i Norge. Nettsider, webapplikasjoner, elektronikk og IoT-løsninger.'
      : 'Freelance web developer in Norway. Websites, web applications, electronics and IoT solutions.',
    url: BASE_URL,
    email: locale === 'nb' ? 'hei@tjlabs.no' : 'hello@tjlabs.no',
    founder: { '@type': 'Person', name: 'Thorleif Jacobsen' },
    areaServed: { '@type': 'Country', name: 'Norway' },
    knowsLanguage: ['nb', 'en'],
    serviceType: locale === 'nb'
      ? ['Webutvikling', 'Nettside design', 'Webapplikasjoner', 'PCB design', 'IoT', '3D printing']
      : ['Web development', 'Website design', 'Web applications', 'PCB design', 'IoT', '3D printing'],
  };

  const servicesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: locale === 'nb' ? 'Tjenester' : 'Services',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: locale === 'nb' ? 'Nettsider' : 'Websites', url: `${BASE_URL}/services/website` },
      { '@type': 'ListItem', position: 2, name: locale === 'nb' ? 'Webapplikasjoner' : 'Web applications', url: `${BASE_URL}/services/webapp` },
      { '@type': 'ListItem', position: 3, name: locale === 'nb' ? 'Elektronikk og PCB' : 'Electronics and PCB', url: `${BASE_URL}/services/electronics` },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
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
