import BookingUI from './BookingUI'

export const metadata = { robots: 'noindex' }

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <span className="inline-block text-green-700 font-semibold text-xs uppercase tracking-widest mb-4">Reservasjon</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">Booking</h1>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Reserver ein tidsluke pa laseren, Bambu Lab X1 Carbon eller resin-printeren.
            Velg utstyr, klikk deretter ein ledig slot i kalendaren.
          </p>
        </div>
      </div>
      <BookingUI />
    </div>
  )
}
