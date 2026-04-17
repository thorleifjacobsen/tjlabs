'use client';

/**
 * DemoWatermark — fixed overlay indicating this is a TJLabs.no demo site.
 * Import and render at the top level of any demo page layout.
 * Uses pointer-events:none so it never blocks interaction.
 */
export default function DemoWatermark() {
  return (
    <>
      {/* Top banner */}
      <div
        style={{ zIndex: 99999 }}
        className="fixed top-0 left-0 right-0 flex items-center justify-center gap-3 bg-black/80 backdrop-blur-sm text-white text-sm font-semibold py-2 px-4 pointer-events-none select-none"
      >
        <span className="text-yellow-400 text-xs uppercase tracking-widest font-bold">Demo</span>
        <span className="text-white/40">·</span>
        <span>TJLabs.no Demo Site</span>
        <span className="text-white/40">·</span>
        <span className="text-white/60 text-xs font-normal">Ikke en ekte nettside</span>
      </div>

      {/* Diagonal watermark pattern */}
      <div
        aria-hidden
        style={{ zIndex: 99998, pointerEvents: 'none' }}
        className="fixed inset-0 overflow-hidden select-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 120px,
              rgba(0,0,0,0.025) 120px,
              rgba(0,0,0,0.025) 121px
            )`,
          }}
        />
        {/* Repeating text watermark */}
        <div
          className="absolute inset-0 flex flex-col justify-around overflow-hidden"
          style={{ gap: 0 }}
        >
          {Array.from({ length: 8 }).map((_, row) => (
            <div key={row} className="flex gap-0 whitespace-nowrap" style={{ transform: 'rotate(-30deg) translateX(-10%)' }}>
              {Array.from({ length: 6 }).map((_, col) => (
                <span
                  key={col}
                  className="text-black/[0.04] font-bold text-2xl tracking-widest uppercase"
                  style={{ padding: '0 4rem' }}
                >
                  TJLabs.no Demo
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
