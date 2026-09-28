'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/site-config';
import { Landmark, MapPin, Building, ArrowUpRight, Navigation } from 'lucide-react';

export function CourtsPreview() {
  const t = useTranslations('homeCourts');
  const locale = useLocale() as 'en' | 'hi' | 'pa';

  return (
    <section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A6A3B] block mb-2">
            {t('tagline')}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0E10] tracking-tight">
            <span>{t('titlePre')} </span>
            <span className="highlight-pill mx-1 sm:mx-1.5">{t('titleHighlight')}</span>{' '}
            <span>{t('titlePost')}</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-xs sm:text-sm text-[#646A73] leading-relaxed mb-4">
            {t('description')}
          </p>
          <Link href="/courts" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6A3B] hover:text-[#72552D]">
            <span>{t('viewDetails')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 3 Courts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {SITE_CONFIG.courts.map((court, index) => {
          const name = court.name[locale] || court.name.en;
          const location = court.location[locale] || court.location.en;
          const role = court.role[locale] || court.role.en;
          const jurisdiction = court.jurisdiction[locale] || court.jurisdiction.en;

          return (
            <div
              key={court.id}
              className="flex flex-col justify-between p-7 rounded-[26px] bg-white border border-black/8 hover:border-[#8A6A3B]/40 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#EEF0F2] flex items-center justify-center text-[#8A6A3B]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#8E959E]">
                    {`0${index + 1}`}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0E0E10] mb-2 leading-snug">
                  {name}
                </h3>

                <div className="flex items-start gap-1.5 text-xs text-[#8A6A3B] font-medium mb-3">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{location}</span>
                </div>

                <p className="text-xs text-[#646A73] leading-relaxed mb-4">
                  {role}
                </p>
              </div>

              <div className="pt-3 border-t border-black/5">
                <span className="text-[11px] font-semibold text-[#8E959E]">
                  Jurisdiction: <span className="text-[#33373D]">{jurisdiction}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Geographic Coverage – cities & courts */}
      <div className="mb-8 p-5 sm:p-6 rounded-[24px] bg-white border border-black/8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A6A3B] mb-4 flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5" />
          Courts &amp; Areas Covered
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {SITE_CONFIG.geographicCoverage.map((area) => (
            <div
              key={area.en}
              className="p-3 rounded-xl bg-[#EEF0F2]/70 border border-black/5 flex flex-col gap-0.5"
            >
              <span className="text-xs font-bold text-[#0E0E10]">
                {area[locale] || area.en}
              </span>
              <span className="text-[10px] text-[#8A6A3B] leading-snug">
                {area.court[locale] || area.court.en}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chambers & Seat Location Banner */}
      <div className="p-6 sm:p-8 rounded-[28px] bg-[#161719] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Building className="w-4 h-4 text-[#C4A576]" />
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {t('kalkaChambers')}
            </h4>
          </div>
          <p className="text-xs text-[#A0A6B1] max-w-xl">
            {SITE_CONFIG.chambers.address[locale] || SITE_CONFIG.chambers.address.en}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#C4A576]">
            <span>{SITE_CONFIG.chambers.courtSeat[locale] || SITE_CONFIG.chambers.courtSeat.en}</span>
          </div>
        </div>

        <a
          href={SITE_CONFIG.chambers.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-bronze py-2.5 px-5 text-xs shrink-0"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Open in Google Maps</span>
        </a>
      </div>
    </section>
  );
}
