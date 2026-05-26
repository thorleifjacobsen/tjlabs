'use client';

import { useEffect, useRef } from 'react';

interface Props {
  user: string;
  host: string;
  className?: string;
  children?: React.ReactNode;
}

export function EmailLink({ user, host, className, children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const addr = user + '@' + host;
    el.href = 'mailto:' + addr;
    if (!children) el.textContent = addr;
  }, [user, host, children]);

  return (
    <a ref={ref} href="#" className={className}>
      {children}
    </a>
  );
}
