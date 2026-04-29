import BookingUI from './BookingUI'

export const metadata = { robots: 'noindex' }

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Header */}
      <div
        className="relative py-16 px-4 sm:px-6 bg-[#0a0a0a] border-b border-white/10"
        style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-3">Reservasjon</div>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold text-white mb-4">Booking</h1>
          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            Reserver tidsluke pa laseren, Bambu Lab X1 Carbon eller resin-printeren.
            Velg utstyr, deretter klikk ein ledig slot i kalendaren.
          </p>
        </div>
      </div>

      <BookingUI />
    </div>
  )
}
