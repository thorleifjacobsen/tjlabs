export const HEX_CLIP =
  'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';

export function HexagonMark({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
        fill="var(--nx-accent)"
      />
      <path
        d="M12 6L17 8.8V14.2L12 17L7 14.2V8.8L12 6Z"
        fill="var(--nx-graphite)"
      />
    </svg>
  );
}

export function HexagonBullet({ className = 'w-2 h-2' }: { className?: string }) {
  return (
    <svg
      className={`${className} flex-shrink-0`}
      viewBox="0 0 24 24"
      fill="var(--nx-accent)"
      aria-hidden="true"
    >
      <path d="M12 1L22.4 7V19L12 25L1.6 19V7L12 1Z" />
    </svg>
  );
}

export function HexagonPatternBg({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ opacity: 0.06 }}
    >
      <defs>
        <pattern
          id="nx-hex-pattern"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke="var(--nx-glow)"
            strokeWidth="1"
          />
          <path
            d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
            fill="none"
            stroke="var(--nx-glow)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#nx-hex-pattern)" />
    </svg>
  );
}

export function HexTile({
  children,
  size = 64,
  tone = 'light',
}: {
  children: React.ReactNode;
  size?: number;
  tone?: 'light' | 'dark';
}) {
  return (
    <span
      className="inline-flex items-center justify-center flex-shrink-0"
      style={{
        width: size,
        height: size,
        clipPath: HEX_CLIP,
        backgroundColor:
          tone === 'dark' ? 'var(--nx-steel)' : 'var(--nx-concrete)',
        color: 'var(--nx-accent)',
      }}
    >
      {children}
    </span>
  );
}
