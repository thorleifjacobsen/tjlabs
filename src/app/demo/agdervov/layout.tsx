import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import DemoWatermark from '@/components/DemoWatermark';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Agder Varme og Vedlikehold | Varmepumper i Agder',
  description:
    'Din lokale varmepumpe-ekspert i Agder. Salg, montering og service. Ring Magnus: 97 12 35 54.',
  robots: 'noindex',
};

export default function AgderVOVLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${dmSans.className} bg-white text-[#1c1c1c] antialiased`}>
      {children}
      <DemoWatermark />
    </div>
  );
}
