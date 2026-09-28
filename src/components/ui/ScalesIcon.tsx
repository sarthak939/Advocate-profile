import React from 'react';

interface ScalesIconProps {
  className?: string;
  size?: number;
}

export function ScalesIcon({ className = 'w-7 h-7 text-[#8A6A3B]', size = 28 }: ScalesIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Central Post */}
      <path d="M12 3v18" />
      <path d="M7 21h10" />
      {/* Top Beam */}
      <path d="M4 7h16" />
      {/* Left Pan */}
      <path d="m4 7-2 6h8l-2-6" />
      <path d="M2 13a4 4 0 0 0 8 0" />
      {/* Right Pan */}
      <path d="m16 7-2 6h8l-2-6" />
      <path d="M14 13a4 4 0 0 0 8 0" />
      {/* Fulcrum Point */}
      <circle cx="12" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}
