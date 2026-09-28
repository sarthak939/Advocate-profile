'use strict';
import React from 'react';

interface LaurelBadgeProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function LaurelBadge({ title, subtitle, className = '' }: LaurelBadgeProps) {
  return (
    <div className={`inline-flex flex-col items-center justify-center text-center px-2 py-1 ${className}`}>
      <div className="relative flex items-center justify-center w-20 h-16">
        {/* SVG Laurel Wreath */}
        <svg
          viewBox="0 0 100 80"
          className="w-full h-full text-[#8A6A3B] opacity-80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Left Branch */}
          <path d="M 50 72 C 34 68 20 54 18 36 C 17 24 24 14 30 8" />
          <path d="M 30 70 C 26 62 25 56 22 50" />
          <path d="M 23 58 C 16 52 14 44 14 38" />
          <path d="M 18 44 C 11 36 12 28 14 22" />
          <path d="M 19 28 C 16 20 20 14 26 10" />
          <path d="M 26 16 C 26 10 32 6 38 6" />

          {/* Right Branch */}
          <path d="M 50 72 C 66 68 80 54 82 36 C 83 24 76 14 70 8" />
          <path d="M 70 70 C 74 62 75 56 78 50" />
          <path d="M 77 58 C 84 52 86 44 86 38" />
          <path d="M 82 44 C 89 36 88 28 86 22" />
          <path d="M 81 28 C 84 20 80 14 74 10" />
          <path d="M 74 16 C 74 10 68 6 62 6" />

          {/* Center Tiny Star / Ribbon */}
          <circle cx="50" cy="72" r="2.5" fill="currentColor" />
        </svg>

        {/* Text inside wreath */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-1 text-center pointer-events-none">
          <span className="text-[10px] font-bold tracking-tight text-[#0E0E10] uppercase leading-tight line-clamp-2 max-w-[58px]">
            {title}
          </span>
          {subtitle && (
            <span className="text-[8px] font-medium text-[#646A73] leading-none mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
