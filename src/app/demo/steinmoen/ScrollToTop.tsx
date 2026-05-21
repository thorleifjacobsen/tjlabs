'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-white text-[#111] text-xs font-medium px-4 py-2.5 hover:bg-[#1a4fd6] hover:text-white hover:border-[#1a4fd6] transition-all duration-150 shadow-md"
      style={{ border: '1.5px solid #e5e5e5' }}
    >
      <span style={{ fontSize: '10px' }}>&#9650;</span>
      Tilbake til toppen
    </button>
  );
}
