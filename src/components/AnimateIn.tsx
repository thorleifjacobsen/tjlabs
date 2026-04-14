'use client';

import { useInView } from '@/hooks/useInView';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  from?: 'bottom' | 'left' | 'right';
}

export function AnimateIn({ children, className = '', delay = 0, from = 'bottom' }: Props) {
  const { ref, inView } = useInView();

  const translate = from === 'bottom'
    ? 'translateY(28px)'
    : from === 'left'
    ? 'translateX(-28px)'
    : 'translateX(28px)';

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : translate,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
