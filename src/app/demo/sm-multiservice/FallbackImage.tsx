'use client'

import { useState } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
}

export default function FallbackImage({ src, alt, className = '' }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`bg-slate-100 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-slate-400 text-sm">Bilde kommer</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
