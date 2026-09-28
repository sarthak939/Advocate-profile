import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/site-config';
import { ARTICLES_DATA } from '@/features/insights/insights-data';
import { Link } from '@/i18n/routing';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowLeft,
  ArrowUpRight,
  ShieldAlert,
  Scale,
  CheckCircle2,
} from 'lucide-react';
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/seo/JsonLd';

interface ArticlePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const article of ARTICLES_DATA) {
      params.push({ locale, slug: article.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!article) return {};

  const activeLocale = locale as 'en' | 'hi' | 'pa';
  const title = article.title[activeLocale] || article.title.en;
  const excerpt = article.excerpt[activeLocale] || article.excerpt.en;

  return {
    title: `${title} | Adv. Upnishad Sharma`,
    description: excerpt,
    alternates: {
      canonical: `/${locale}/insights/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const activeLocale = locale as 'en' | 'hi' | 'pa';
  const t = await getTranslations({ locale, namespace: 'insightsPage' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const title = article.title[activeLocale] || article.title.en;
  const category = article.category[activeLocale] || article.category.en;
  const content = article.content[activeLocale] || article.content.en;

  const related = ARTICLES_DATA.filter((a) => a.slug !== slug);

  const authorName =
    activeLocale === 'hi'
      ? SITE_CONFIG.name.hi
      : activeLocale === 'pa'
      ? SITE_CONFIG.name.pa
      : SITE_CONFIG.name.en;

  const breadcrumbs = [
    { name: 'Home', url: `${SITE_CONFIG.domain}/${locale}` },
    { name: 'Insights', url: `${SITE_CONFIG.domain}/${locale}/insights` },
    { name: title, url: `${SITE_CONFIG.domain}/${locale}/insights/${slug}` },
  ];

  return (
    <article className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ArticleJsonLd
        title={title}
        description={article.excerpt[activeLocale] || article.excerpt.en}
        publishDate={article.publishDate}
        url={`${SITE_CONFIG.domain}/${locale}/insights/${slug}`}
        authorName={authorName}
      />

      {/* Back button */}
      <div>
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#646A73] hover:text-[#0E0E10] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Legal Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 pb-8 border-b border-black/10">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] font-semibold">
            {category}
          </span>
          <div className="flex items-center gap-1.5 text-[#646A73]">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
          <span className="text-black/20">·</span>
          <div className="flex items-center gap-1.5 text-[#646A73]">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.publishDate}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0E10] tracking-tight leading-tight">
          {title}
        </h1>

        {/* Disclaimer Warning Badge */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700" />
          <span className="font-semibold">
            SAMPLE: REVIEW BEFORE PUBLISHING. This article is educational and does not constitute formal legal advice.
          </span>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="space-y-8 text-sm sm:text-base text-[#33373D] leading-relaxed">
        <p className="text-base sm:text-lg text-[#0E0E10] font-medium leading-relaxed">
          {content.introduction}
        </p>

        {content.sections.map((sec, idx) => (
          <section key={idx} className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0E0E10] tracking-tight">
              {sec.heading}
            </h2>
            <p className="text-xs sm:text-sm text-[#33373D] leading-relaxed">
              {sec.text}
            </p>

            {sec.bullets && sec.bullets.length > 0 && (
              <ul className="space-y-2 pt-2">
                {sec.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#33373D]">
                    <CheckCircle2 className="w-4 h-4 text-[#8A6A3B] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="p-6 rounded-2xl bg-[#EEF0F2] border border-black/8 text-xs sm:text-sm text-[#646A73] leading-relaxed">
          {content.conclusion}
        </div>
      </div>

      {/* Author Profile Box */}
      <div className="p-8 rounded-[30px] bg-white border border-black/8 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-16 h-16 rounded-2xl bg-[#8A6A3B]/10 border border-[#8A6A3B]/20 flex items-center justify-center text-[#8A6A3B] shrink-0">
          <Scale className="w-8 h-8" />
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs uppercase font-bold tracking-wider text-[#8A6A3B]">
            {t('authorTitle')}
          </span>
          <h3 className="text-lg font-bold text-[#0E0E10]">
            {SITE_CONFIG.name[activeLocale] || SITE_CONFIG.name.en}
          </h3>
          <p className="text-xs text-[#646A73] leading-relaxed">
            Advocate practicing before the High Court of Punjab & Haryana at Chandigarh, District Court Panchkula, and Sub-Divisional Court Kalka (Seat No. 15).
          </p>
        </div>
      </div>

      {/* Related Insights */}
      {related.length > 0 && (
        <div className="space-y-6 pt-6 border-t border-black/10">
          <h3 className="text-lg sm:text-xl font-bold text-[#0E0E10] tracking-tight">
            {t('relatedArticles')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="p-5 rounded-2xl bg-white border border-black/8 hover:border-[#8A6A3B]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <h4 className="text-xs sm:text-sm font-bold text-[#0E0E10] mb-2 line-clamp-2">
                  {rel.title[activeLocale] || rel.title.en}
                </h4>
                <div className="flex items-center justify-between text-xs text-[#8A6A3B] font-semibold mt-2">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Direct Consultation Callout */}
      <div className="p-8 sm:p-10 rounded-[30px] bg-[#161719] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-1">
            Need legal advice regarding this topic?
          </h3>
          <p className="text-xs text-[#A0A6B1]">
            Schedule an appointment with Adv. Upnishad Sharma to assess your legal rights.
          </p>
        </div>
        <Link href="/contact" className="btn-bronze py-3 px-6 text-xs shrink-0">
          <span>{tNav('bookConsultation')}</span>
          <span className="arrow-icon-circle">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}
