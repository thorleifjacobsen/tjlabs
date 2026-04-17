import TyholmenClient from './_client';

export const metadata = {
  robots: 'noindex',
  title: 'Tyholmen Kolonial & Steenhuset Restaurant - Arendal',
  description:
    'Tyholmen Kolonial er en delikatessecafé i hjertet av Arendal. Steenhuset Restaurant tilbyr 6-retters avsmakningsmeny i historiske omgivelser.',
};

export default function TyholmenPage() {
  return <TyholmenClient />;
}
