'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src?: string;
  alt: string;
  className?: string;
  position?: string;
  eager?: boolean;
};

export default function SafeImg({ src, alt, className = '', position, eager = false }: Props) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef<HTMLImageElement>(null);

  // The error event can fire before hydration, so check the loaded state too
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 text-slate-400 ${className}`}>
        Bilde kommer
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      style={position ? { objectPosition: position } : undefined}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
