'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

export function WhatsAppFloat() {
  const t = useTranslations('whatsapp');
  const tCommon = useTranslations('contactPage');

  const encodedGreeting = encodeURIComponent(t('greeting'));
  const whatsappUrl = `https://wa.me/917056099998?text=${encodedGreeting}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <aside aria-label="Quick Communication" className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('tooltip')}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <MessageCircle className="w-7 h-7 fill-white/20" />
          {/* Tooltip */}
          <span className="absolute right-16 px-3 py-1.5 bg-[#0E0E10] text-white text-xs font-medium rounded-full shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {t('tooltip')}
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Quick Contact Bar */}
      <nav aria-label="Mobile Quick Contact" className="fixed bottom-0 left-0 right-0 z-40 sm:hidden flex items-center justify-between gap-2 p-2.5 bg-[#EEF0F2]/95 backdrop-blur-lg border-t border-black/10 shadow-2xl">
        <a
          href={`tel:${SITE_CONFIG.contacts.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white text-[#0E0E10] font-semibold text-xs border border-black/10 shadow-sm active:bg-black/5"
        >
          <Phone className="w-4 h-4 text-[#8A6A3B]" />
          <span>+91 70560 99998</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow-md active:bg-[#1EBE5D]"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
