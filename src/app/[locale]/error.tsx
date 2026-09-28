'use client';

import React, { useEffect } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[PAGE_ERROR]:', error);
  }, [error]);

  return (
    <div className="min-h-[55vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-6">
        <AlertCircle className="w-7 h-7" />
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E0E10] tracking-tight mb-3">
        An Unexpected Error Occurred
      </h1>

      <p className="text-xs sm:text-sm text-[#646A73] max-w-md mb-8 leading-relaxed">
        We encountered a technical issue while rendering this page. Please try refreshing or contact our chambers directly.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="btn-bronze text-xs py-2.5 px-6 cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5 mr-1" />
        <span>Try Again</span>
      </button>
    </div>
  );
}
