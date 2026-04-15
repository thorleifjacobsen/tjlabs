'use client';

interface Props {
  user: string;
  host: string;
  className?: string;
  children?: React.ReactNode;
}

export function EmailLink({ user, host, className, children }: Props) {
  const email = `${user}\u0040${host}`;
  return (
    <a href={`mailto:${email}`} className={className}>
      {children ?? email}
    </a>
  );
}
