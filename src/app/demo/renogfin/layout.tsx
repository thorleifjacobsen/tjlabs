import type { ReactNode } from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';

export const metadata = {
  title: {
    default: 'Ren & Fin AS, renhold på Romerike',
    template: '%s, Ren & Fin AS',
  },
  description:
    'Ren & Fin AS leverer renhold for bedrifter, borettslag og private på Romerike, Lillestrøm og omegn.',
  robots: 'noindex',
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
