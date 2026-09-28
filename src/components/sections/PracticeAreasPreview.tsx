'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/site-config';
import {
  Shield,
  Scale,
  Building2,
  Users,
  ScrollText,
  Briefcase,
  CarFront,
  LandPlot,
  FileText,
  FileSpreadsheet,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Scale,
  Building2,
  Users,
  ScrollText,
  Briefcase,
  CarFront,
  LandPlot,
  FileText,
  FileSpreadsheet,
};

export function PracticeAreasPreview() {
  const t = useTranslations('homePractice');
  const locale = useLocale() as 'en' | 'hi' | 'pa';

  // Only display the top 3 practice areas on the homepage
  const topPracticeAreas = SITE_CONFIG.practiceAreas.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
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
          <p className="text-xs sm:text-sm text-[#646A73] leading-relaxed">
            {t('description')}
          </p>
        </div>
      </div>

      {/* Grid of Top 3 Practice Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {topPracticeAreas.map((pa, index) => {
          const IconComponent = ICON_MAP[pa.icon] || Scale;
          const title = pa.title[locale] || pa.title.en;
          const summary = pa.summary[locale] || pa.summary.en;

          return (
            <div
              key={pa.id}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-[28px] bg-white border border-black/8 hover:border-[#8A6A3B]/40 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Top Icon + Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F4F6] group-hover:bg-[#8A6A3B]/10 flex items-center justify-center text-[#8A6A3B] transition-colors duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#8E959E]">
                    {`0${index + 1}`}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0E0E10] mb-3 group-hover:text-[#8A6A3B] transition-colors">
                  {title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#646A73] leading-relaxed mb-6 line-clamp-4">
                  {summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <Link
                  href={`/practice-areas/${pa.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E0E10] group-hover:text-[#8A6A3B] transition-colors"
                >
                  <span>{t('learnMore')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More CTA Button */}
      <div className="mt-12 sm:mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/practice-areas"
          className="btn-bronze text-sm sm:text-base py-3.5 px-8 inline-flex items-center gap-2 group shadow-md hover:shadow-lg transition-all"
        >
          <span>{t('viewMore')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
