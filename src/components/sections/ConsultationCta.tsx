'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/site-config';
import { Phone, MessageCircle, ArrowUpRight, Scale } from 'lucide-react';

export function ConsultationCta() {
  const t = useTranslations('homeCta');
  const tWhatsapp = useTranslations('whatsapp');
  const locale = useLocale();

  const encodedGreeting = encodeURIComponent(tWhatsapp('greeting'));
  const whatsappUrl = `https://wa.me/917056099998?text=${encodedGreeting}`;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[36px] bg-[#161719] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-white/10 text-center flex flex-col items-center justify-center">
        {/* Decorative background glow & emblem */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8A6A3B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-12 h-12 rounded-full bg-[#8A6A3B]/20 border border-[#8A6A3B]/40 flex items-center justify-center text-[#C4A576] mb-6">
          <Scale className="w-6 h-6" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl">
          <span>{t('titlePre')} </span>
          <span className="inline-flex items-center justify-center bg-white/15 text-[#C4A576] px-3.5 py-1 rounded-full mx-1">
            {t('titleHighlight')}
          </span>{' '}
          <span>{t('titlePost')}</span>
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#A0A6B1] max-w-2xl mb-8 leading-relaxed">
          {t('description')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
          <Link
            href="/contact"
            className="w-full sm:w-auto btn-bronze py-3.5 px-8 text-sm"
          >
            <span>{t('btnConsult')}</span>
            <span className="arrow-icon-circle">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{t('btnWhatsapp')}</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.contacts.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-all"
          >
            <Phone className="w-4 h-4 text-[#C4A576]" />
            <span>+91 70560 99998</span>
          </a>
        </div>
      </div>
    </section>
  );
}
