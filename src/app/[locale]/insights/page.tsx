import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { ARTICLES_DATA } from '@/features/insights/insights-data';
import { Link } from '@/i18n/routing';
import {
  BookOpen,
  Clock,
  ArrowUpRight,
  ShieldAlert,
  Calendar,
} from 'lucide-react';

interface InsightsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: InsightsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isHi = locale === 'hi';
  const isPa = locale === 'pa';

  const name = isHi
    ? SITE_CONFIG.name.hi
    : isPa
    ? SITE_CONFIG.name.pa
    : SITE_CONFIG.name.en;

  const title = isHi
    ? `कानूनी लेख एवं मार्गदर्शिकाएँ | ${name}`
    : isPa
    ? `ਕਾਨੂੰਨੀ ਲੇਖ ਅਤੇ ਗਾਈਡਾਂ | ${name}`
    : `Legal Insights & Procedural Guides | ${name}`;

  const description = isHi
    ? 'ज़मानत नियम, संपत्ति रजिस्ट्री कागज़ात एवं चेक बाउंस कानूनी नोटिस पर अधिवक्ता द्वारा लिखित मार्गदर्शिकाएँ।'
    : isPa
    ? 'ਜ਼ਮਾਨਤ ਨਿਯਮਾਂ, ਜਾਇਦਾਦ ਰਜਿਸਟਰੀ ਅਤੇ ਕਾਨੂੰਨੀ ਨੋਟਿਸਾਂ ਸੰਬੰਧੀ ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ।'
    : 'Educational legal explainers on bail law, property verification, and statutory legal notices in Punjab & Haryana.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/insights`,
    },
  };
}

export default async function InsightsPage({ params }: InsightsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'insightsPage' });

  const activeLocale = locale as 'en' | 'hi' | 'pa';

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] text-xs font-bold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>LEGAL KNOWLEDGE BASE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0E0E10] tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base text-[#646A73] leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES_DATA.map((article) => {
          const title = article.title[activeLocale] || article.title.en;
          const excerpt = article.excerpt[activeLocale] || article.excerpt.en;
          const category = article.category[activeLocale] || article.category.en;

          return (
            <article
              key={article.slug}
              className="flex flex-col justify-between p-8 rounded-[30px] bg-white border border-black/8 hover:border-[#8A6A3B]/40 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] font-semibold text-xs">
                    {category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#8E959E]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#0E0E10] mb-3 leading-snug hover:text-[#8A6A3B] transition-colors">
                  <Link href={`/insights/${article.slug}`}>
                    {title}
                  </Link>
                </h2>

                <p className="text-xs text-[#646A73] leading-relaxed mb-6">
                  {excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider text-[#8E959E] uppercase">
                  SAMPLE DRAFT
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6A3B] hover:text-[#72552D]"
                >
                  <span>Read Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Educational Notice Banner */}
      <div className="p-6 rounded-[24px] bg-amber-50/70 border border-amber-200/60 text-amber-900 text-xs flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-amber-700" />
        <p className="leading-relaxed">
          {t('disclaimer')}
        </p>
      </div>
    </div>
  );
}
