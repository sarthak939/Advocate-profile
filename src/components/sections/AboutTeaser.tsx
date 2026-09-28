'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/site-config';
import { PORTRAIT_BLUR_DATA_URL } from '@/lib/portrait-blur';
import { ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function AboutTeaser() {
  const t = useTranslations('homeAbout');
  const locale = useLocale() as 'en' | 'hi' | 'pa';

  const localizedName = SITE_CONFIG.name[locale] || SITE_CONFIG.name.en;
  const localizedTitle = SITE_CONFIG.title[locale] || SITE_CONFIG.title.en;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-black/8 p-5 sm:p-12 lg:p-16 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait cropped differently (bust portrait with rounded frame & warm bronze border) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[360px] sm:h-[460px] sm:h-[500px] rounded-[24px] sm:rounded-[28px] overflow-hidden border-2 border-[#8A6A3B]/25 shadow-xl">
              <Image
                src="/images/portrait.jpg"
                alt={`${localizedName} - Portrait`}
                fill
                sizes="(max-width: 768px) 380px, 450px"
                placeholder="blur"
                blurDataURL={PORTRAIT_BLUR_DATA_URL}
                className="object-cover object-[center_15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Badge inside portrait */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#C4A576]" />
                  <span className="text-xs font-bold text-[#C4A576]">
                    {SITE_CONFIG.enrolment.enrolmentNumber}
                  </span>
                </div>
                <p className="text-[11px] text-white/80 line-clamp-1">
                  {SITE_CONFIG.enrolment.barCouncil[locale] || SITE_CONFIG.enrolment.barCouncil.en}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Biography Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A6A3B] block mb-2">
                {t('tagline')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0E0E10] tracking-tight">
                <span>{t('titlePre')} </span>
                <span className="highlight-pill mx-1 sm:mx-1.5">{t('titleHighlight')}</span>{' '}
                <span>{t('titlePost')}</span>
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#33373D] leading-relaxed">
              <p>{t('p1')}</p>
              <p className="text-[#646A73]">{t('p2')}</p>
            </div>

            {/* Key Commitment Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EEF0F2]/70 border border-black/5">
                <CheckCircle2 className="w-4 h-4 text-[#8A6A3B] shrink-0" />
                <span className="text-xs font-semibold text-[#0E0E10]">
                  Thorough Statutory Research
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EEF0F2]/70 border border-black/5">
                <CheckCircle2 className="w-4 h-4 text-[#8A6A3B] shrink-0" />
                <span className="text-xs font-semibold text-[#0E0E10]">
                  Meticulous Drafting Precision
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EEF0F2]/70 border border-black/5">
                <CheckCircle2 className="w-4 h-4 text-[#8A6A3B] shrink-0" />
                <span className="text-xs font-semibold text-[#0E0E10]">
                  Direct Client Communication
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EEF0F2]/70 border border-black/5">
                <CheckCircle2 className="w-4 h-4 text-[#8A6A3B] shrink-0" />
                <span className="text-xs font-semibold text-[#0E0E10]">
                  Strict Bar Council Ethics
                </span>
              </div>
            </div>

            {/* Link to /about */}
            <div className="pt-4">
              <Link href="/about" className="btn-bronze text-xs sm:text-sm py-3 px-6">
                <span>{t('cta')}</span>
                <span className="arrow-icon-circle">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
