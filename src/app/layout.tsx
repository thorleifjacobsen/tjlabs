import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import './globals.css';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--ff-comfortaa',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://tjlabs.no'),
  title: {
    default: 'TJLabs',
    template: '%s | TJLabs',
  },
  description: 'Webutvikler og maker. Nettsider, webapplikasjoner, 3D-printing og elektronikk.',
  keywords: [
    // Norwegian primary
    'nettside', 'nettside utvikling', 'hjemmeside', 'hjemmeside utvikling',
    'lage nettside', 'nettside bedrift', 'nettside pris',
    'webutvikler', 'webutvikling', 'webdesign',
    'programutvikling', 'freelance webutvikler', 'webutvikler norge',
    'webapplikasjon', 'webapplikasjon utvikling',
    // Norwegian secondary
    'IoT løsninger', 'smarthus', 'hjemmeautomatisering',
    'elektronikk', 'PCB design', 'kretskort', '3D printing',
    'PC reparasjon', 'datareparasjon', 'PC hjelp', 'Mac reparasjon',
    'mikrokontroller', 'ESP32', 'Home Assistant',
    // English
    'web developer', 'web development', 'Next.js', 'freelance',
    'TJLabs',
  ],
  authors: [{ name: 'TJLabs', url: 'https://tjlabs.no' }],
  creator: 'TJLabs',
  publisher: 'TJLabs',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    // google: 'your-google-verification-code',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let locale = 'nb';
  try {
    locale = await getLocale();
  } catch {
    // demo and other non-intl routes fall back to default locale
  }

  return (
    <html lang={locale} className={comfortaa.variable}>
      <body>{children}</body>
    </html>
  );
}
