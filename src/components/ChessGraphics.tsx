import React from 'react';

export function KingIcon({ className = "w-6 h-6", glow = false }: { className?: string; glow?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : ''}`}>
      {/* Crown Cross */}
      <path d="M12 2v4M10 4h4" />
      {/* Crown base */}
      <path d="M5 9c2-1 4-1 7-1s5 0 7 1l-1.5 5.5H6.5L5 9z" />
      <path d="M7 14.5l-1 4.5h12l-1-4.5" />
      <path d="M5 21h14M7 19h10" />
      <circle cx="12" cy="11.5" r="1.5" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}

export function QueenIcon({ className = "w-6 h-6", glow = false }: { className?: string; glow?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : ''}`}>
      <path d="M12 3l2 4 4-2-1 7H7L6 5l4 2 2-4z" />
      <circle cx="6" cy="5" r="1" fill="currentColor" />
      <circle cx="12" cy="3" r="1" fill="currentColor" />
      <circle cx="18" cy="5" r="1" fill="currentColor" />
      <path d="M7 12l-1 6h12l-1-6" />
      <path d="M5 21h14M6 18h12" />
    </svg>
  );
}

export function KnightIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 21h10M8 18h8" />
      <path d="M8 18c0-2.5 1-4.5 2-6l-3-1c-1-.3-1.5-1.5-1-2.5l1.5-3C8 4.5 9 4 10.5 4h3c2 0 3.5 1.5 3.5 3.5v2c1 1.5 1.5 3.5 1.5 6.5" />
      <circle cx="13" cy="8" r="1" fill="currentColor" />
      <path d="M9 13c1 1 2.5 1.5 4 1" />
    </svg>
  );
}

export function RookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 5h14v4H5z" />
      <path d="M7 5V3h2v2M11 5V3h2v2M15 5V3h2v2" />
      <path d="M7 9v8h10V9" />
      <path d="M5 21h14M6 17h12" />
      <path d="M10 13h4" />
    </svg>
  );
}

export function BishopIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="4" r="1.5" />
      <path d="M12 5.5c-3 1.5-4 4-4 7.5 0 2 1 3.5 2 4.5h4c1-1 2-2.5 2-4.5 0-3.5-1-6-4-7.5z" />
      <path d="M10 9l4 4M10 13h4" />
      <path d="M6 21h12M7 17.5h10" />
    </svg>
  );
}

export function PawnIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="6" r="3" />
      <path d="M9.5 9c0 2.5-1.5 4.5-2.5 7.5h10c-1-3-2.5-5-2.5-7.5" />
      <path d="M6 20h12M7 16.5h10" />
    </svg>
  );
}
