export const metadata = {
  title: "Morten's Kaffe — Direkte fra Chile til din kopp",
  description:
    'Spesialkaffebønner importert direkte fra familiedrevne gårder i Bio Bio Valley, Chile. Ristet i Arendal.',
  robots: 'noindex',
}

export default function MortensKaffeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: '"DM Sans", ui-sans-serif, system-ui, -apple-system, sans-serif',
        backgroundColor: '#faf7f2',
        color: '#2c1a0e',
      }}
    >
      {children}
    </div>
  )
}
