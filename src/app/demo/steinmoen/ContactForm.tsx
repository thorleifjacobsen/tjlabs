'use client';

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-xs text-[#888] uppercase tracking-widest mb-2">Navn</label>
        <input
          type="text"
          placeholder="Ditt navn"
          className="w-full bg-[#111111] border border-[#2a2a2a] text-[#f5f5f5] px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[#e8e020] transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs text-[#888] uppercase tracking-widest mb-2">E-post</label>
        <input
          type="email"
          placeholder="din@epost.no"
          className="w-full bg-[#111111] border border-[#2a2a2a] text-[#f5f5f5] px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[#e8e020] transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs text-[#888] uppercase tracking-widest mb-2">Hva trenger du hjelp med?</label>
        <textarea
          rows={5}
          placeholder="Beskriv oppdraget..."
          className="w-full bg-[#111111] border border-[#2a2a2a] text-[#f5f5f5] px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[#e8e020] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#e8e020] text-[#0a0a0a] font-semibold py-3 px-6 text-sm hover:bg-white transition-colors duration-150"
      >
        Send melding
      </button>
    </form>
  );
}
