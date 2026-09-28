'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export function DisclaimerModal() {
  const t = useTranslations('disclaimerModal');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const accepted = sessionStorage.getItem('bci_disclaimer_accepted');
      if (!accepted) {
        setIsOpen(true);
      }
    } catch {
      // In case storage is blocked
      setIsOpen(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      sessionStorage.setItem('bci_disclaimer_accepted', 'true');
    } catch {
      // ignore
    }
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-[#F8F9FA] rounded-[28px] border border-black/10 shadow-2xl p-6 sm:p-8 text-[#0E0E10] max-h-[90vh] overflow-y-auto">
        {/* Top Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#8A6A3B]/10 flex items-center justify-center text-[#8A6A3B]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A6A3B]">
            {t('badge')}
          </span>
        </div>

        {/* Title */}
        <h2 id="disclaimer-title" className="text-xl sm:text-2xl font-bold tracking-tight mb-4">
          {t('title')}
        </h2>

        {/* Legal Text */}
        <div className="space-y-3 text-xs sm:text-sm text-[#33373D] leading-relaxed border-t border-b border-black/10 py-4 my-2">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p className="text-[#646A73]">{t('p3')}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={handleDecline}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-[#646A73] hover:text-[#0E0E10] hover:bg-black/5 transition-all text-center"
          >
            {t('btnDecline')}
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#8A6A3B] hover:bg-[#72552D] text-white shadow-md hover:shadow-lg transition-all text-center"
          >
            {t('btnAgree')}
          </button>
        </div>
      </div>
    </div>
  );
}
