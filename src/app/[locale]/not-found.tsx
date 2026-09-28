import React from 'react';
import { Link } from '@/i18n/routing';
import { Scale, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="w-16 h-16 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] flex items-center justify-center mb-6">
        <Scale className="w-8 h-8" />
      </div>

      <span className="text-xs font-mono font-bold tracking-widest text-[#8A6A3B] uppercase mb-2">
        Error 404
      </span>

      <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0E0E10] tracking-tight mb-4">
        Page Not Found
      </h1>

      <p className="text-xs sm:text-sm text-[#646A73] max-w-md mb-8 leading-relaxed">
        The legal guide or page you are looking for may have been moved, renamed, or is currently unavailable.
      </p>

      <div className="flex items-center gap-4">
        <Link href="/" className="btn-bronze text-xs py-3 px-6">
          <Home className="w-4 h-4 mr-1" />
          <span>Return to Home</span>
        </Link>

        <Link
          href="/practice-areas"
          className="px-5 py-3 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#0E0E10] hover:bg-black/5 transition-all"
        >
          View Practice Areas
        </Link>
      </div>
    </div>
  );
}
