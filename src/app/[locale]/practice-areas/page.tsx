import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { Link } from '@/i18n/routing';
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
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

interface PracticeAreasPageProps {
  params: Promise<{ locale: string }>;
}

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

export async function generateMetadata({
  params,
}: PracticeAreasPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isHi = locale === 'hi';
  const isPa = locale === 'pa';

  const name = isHi
    ? SITE_CONFIG.name.hi
    : isPa
    ? SITE_CONFIG.name.pa
    : SITE_CONFIG.name.en;

  const title = isHi
    ? `अभ्यास क्षेत्र | ${name} | 10 प्रमुख विधिक सेवाएं`
    : isPa
    ? `ਅਭਿਆਸ ਖੇਤਰ | ${name} | 10 ਕਾਨੂੰਨੀ ਸੇਵਾਵਾਂ`
    : `Practice Areas | ${name} | High Court & District Court`;

  const description = isHi
    ? 'आपराधिक बचाव, ज़मानत, दीवानी मुकदमे, संपत्ति विवाद, पारिवारिक मामले, रिट याचिकाएं, सर्विस एवं मोटर दुर्घटना दावे।'
    : isPa
    ? 'ਫੌਜਦਾਰੀ ਬਚਾਅ, ਜ਼ਮਾਨਤ, ਦੀਵਾਨੀ ਕੇਸ, ਜਾਇਦਾਦ ਝਗੜੇ, ਪਰਿਵਾਰਕ ਮਾਮਲੇ, ਰਿੱਟ ਪਟੀਸ਼ਨਾਂ ਅਤੇ ਮੁਆਵਜ਼ਾ ਦਾਅਵੇ।'
    : 'Comprehensive legal assistance across 10 specialized areas including Bail, Civil, Property, Writs, Family, and MACT claims.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/practice-areas`,
    },
  };
}

export default async function PracticeAreasPage({
  params,
}: PracticeAreasPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'practiceAreasPage' });
  const tHome = await getTranslations({ locale, namespace: 'homePractice' });

  const activeLocale = locale as 'en' | 'hi' | 'pa';

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] text-xs font-bold uppercase tracking-wider mb-3">
          <Scale className="w-3.5 h-3.5" />
          <span>LEGAL DISCIPLINES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0E0E10] tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base text-[#646A73] leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* Grid of all 10 practice areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SITE_CONFIG.practiceAreas.map((pa, index) => {
          const IconComponent = ICON_MAP[pa.icon] || Scale;
          const title = pa.title[activeLocale] || pa.title.en;
          const summary = pa.summary[activeLocale] || pa.summary.en;
          const matters = pa.mattersHandled[activeLocale] || pa.mattersHandled.en;

          return (
            <div
              key={pa.id}
              className="flex flex-col justify-between p-8 rounded-[30px] bg-white border border-black/8 hover:border-[#8A6A3B]/40 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF0F2] flex items-center justify-center text-[#8A6A3B]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#8E959E]">
                    {`0${index + 1}`}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0E0E10] mb-3 leading-snug">
                  {title}
                </h2>

                <p className="text-xs text-[#646A73] leading-relaxed mb-6">
                  {summary}
                </p>

                {/* Key Matters Handled bullet list */}
                <div className="space-y-2 pt-4 border-t border-black/5 mb-6">
                  <span className="text-[11px] font-bold text-[#8A6A3B] uppercase tracking-wider block mb-2">
                    {t('typesHandled')}:
                  </span>
                  {matters.slice(0, 3).map((item, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-start gap-2 text-xs text-[#33373D]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8A6A3B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link to Detail Page */}
              <div className="pt-4 border-t border-black/5">
                <Link
                  href={`/practice-areas/${pa.slug}`}
                  className="btn-bronze w-full py-2.5 text-xs text-center justify-center"
                >
                  <span>{tHome('learnMore')}</span>
                  <span className="arrow-icon-circle">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
