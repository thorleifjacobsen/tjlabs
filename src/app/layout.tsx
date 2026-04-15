import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://tjlabs.no'),
  title: {
    default: 'TJ Labs - Thorleif Jacobsen',
    template: '%s | TJ Labs',
  },
  description: 'Webutvikler og maker basert i Norge. Nettsider, webapplikasjoner, 3D-printing og elektronikk.',
  keywords: [
    'webutvikler', 'web developer', 'Norway', 'Norge', 'Next.js', 'freelance',
    'nettsider', 'webapplikasjon', '3D-printing', 'TJ Labs', 'Thorleif Jacobsen',
  ],
  authors: [{ name: 'Thorleif Jacobsen', url: 'https://tjlabs.no' }],
  creator: 'Thorleif Jacobsen',
  publisher: 'TJ Labs',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
