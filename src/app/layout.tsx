import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://tjlabs.no'),
  title: {
    default: 'TJLabs',
    template: '%s | TJLabs',
  },
  description: 'Webutvikler og maker. Nettsider, webapplikasjoner, 3D-printing og elektronikk.',
  keywords: [
    'webutvikler', 'web developer', 'Next.js', 'freelance',
    'nettsider', 'webapplikasjon', '3D-printing', 'TJLabs',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
