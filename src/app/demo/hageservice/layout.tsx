import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jørgensens Hageservice – Grimstad',
  description:
    'Profesjonell hageservice i Grimstad-området siden 2002. Plenklipping, beplantning, beskjæring og vedlikehold.',
  robots: 'noindex',
}

export default function HageserviceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: '"DM Sans", ui-sans-serif, system-ui, -apple-system, sans-serif' }}>
      {children}
    </div>
  )
}
