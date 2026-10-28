import type { ReactNode } from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';

export const metadata = {
  title: {
    default: 'Ren & Fin AS, profesjonelt vaskebyrå i Oslo og Viken',
    template: '%s, Ren & Fin AS',
  },
  description:
    'Ren & Fin AS tilbyr pålitelig og effektiv rengjøring for bedrifter og private i Oslo, Romerike, Ullensaker, Gardermoen, Lørenskog, Bærum og Hønefoss.',
  robots: 'noindex',
  icons: { icon: '/demo/renogfin/logo-mark.png', apple: '/demo/renogfin/logo-mark.png' },
};

// The root layout sets Comfortaa and a patterned body background, so reset both here
const scopedCss = `
.rf, .rf h1, .rf h2, .rf h3, .rf h4, .rf h5, .rf h6 {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  letter-spacing: normal;
}
.rf { font-size: 16px; line-height: 1.5; }
.rf h1, .rf h2, .rf h3 { line-height: 1.2; }
html { scroll-behavior: smooth; }
.rf [id] { scroll-margin-top: 88px; }
.rf-marquee-scroll { scrollbar-width: none; overscroll-behavior-x: contain; }
@keyframes rf-nudge-r { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
@keyframes rf-nudge-l { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-4px); } }
.rf-nudge-right { animation: rf-nudge-r 1.2s ease-in-out infinite; }
.rf-nudge-left { animation: rf-nudge-l 1.2s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .rf-nudge-right, .rf-nudge-left { animation: none; } }
.rf-marquee-scroll::-webkit-scrollbar { display: none; }
`;

export default function RenOgFinLayout({ children }: { children: ReactNode }) {
  return (
    <div className="rf flex min-h-screen flex-col bg-white text-slate-600 antialiased">
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
