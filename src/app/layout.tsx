import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://tjlabs.no'),
  title: {
    default: 'TJ Labs - Thorleif Jacobsen',
    template: '%s | TJ Labs',
  },
  description: 'Web developer based in Norway. Custom websites and software solutions.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
