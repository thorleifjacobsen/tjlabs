import type { Metadata } from 'next';
import KatalogerClient from './KatalogerClient';

export const metadata: Metadata = {
  title: 'Kataloger – Steinmoen',
  description: 'Bla gjennom katalogene for profiltøy, gave og profilartikler fra Steinmoen.',
  robots: 'noindex',
};

export default function KatalogerPage() {
  return <KatalogerClient />;
}
