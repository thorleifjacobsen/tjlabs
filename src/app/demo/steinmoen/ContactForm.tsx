'use client';

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">Navn</label>
        <input
          type="text"
          placeholder="Ditt navn"
          className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1a4fd6] transition-all"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
        />
      </div>
      <div>
        <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">E-post</label>
        <input
          type="email"
          placeholder="din@epost.no"
          className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1a4fd6] transition-all"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
        />
      </div>
      <div>
        <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">Hva trenger du hjelp med?</label>
        <textarea
          rows={5}
          placeholder="Beskriv oppdraget..."
          className="w-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1a4fd6] transition-all resize-none"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#1a4fd6] text-white font-semibold py-3 px-6 text-sm hover:bg-[#1f60ff] transition-colors duration-150"
      >
        Send melding
      </button>
    </form>
  );
}
