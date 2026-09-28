import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/site-config';
import { PRACTICE_DETAILED_DATA } from '@/features/practice-areas/practice-data';
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
  CheckCircle2,
  ArrowLeft,
  ArrowUpRight,
  HelpCircle,
  FileCheck,
} from 'lucide-react';
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd';

interface PracticeDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
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

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const pa of SITE_CONFIG.practiceAreas) {
      params.push({ locale, slug: pa.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PracticeDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const pa = SITE_CONFIG.practiceAreas.find((item) => item.slug === slug);
  if (!pa) return {};

  const activeLocale = locale as 'en' | 'hi' | 'pa';
  const name = SITE_CONFIG.name[activeLocale] || SITE_CONFIG.name.en;
  const title = pa.title[activeLocale] || pa.title.en;
  const summary = pa.summary[activeLocale] || pa.summary.en;

  return {
    title: `${title} | ${name} | Advocate High Court`,
    description: summary,
    alternates: {
      canonical: `/${locale}/practice-areas/${slug}`,
    },
  };
}

export default async function PracticeDetailPage({
  params,
}: PracticeDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const pa = SITE_CONFIG.practiceAreas.find((item) => item.slug === slug);
  if (!pa) {
    notFound();
  }

  const activeLocale = locale as 'en' | 'hi' | 'pa';
  const t = await getTranslations({ locale, namespace: 'practiceAreasPage' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const IconComponent = ICON_MAP[pa.icon] || Scale;
  const title = pa.title[activeLocale] || pa.title.en;
  const summary = pa.summary[activeLocale] || pa.summary.en;
  const matters = pa.mattersHandled[activeLocale] || pa.mattersHandled.en;

  const detailData = PRACTICE_DETAILED_DATA[slug];

  const breadcrumbs = [
    { name: tNav('home'), url: `${SITE_CONFIG.domain}/${locale}` },
    { name: tNav('practiceAreas'), url: `${SITE_CONFIG.domain}/${locale}/practice-areas` },
    { name: title, url: `${SITE_CONFIG.domain}/${locale}/practice-areas/${slug}` },
  ];

  const faqItems = (detailData?.faqs || []).map((faq) => ({
    question: faq.question[activeLocale] || faq.question.en,
    answer: faq.answer[activeLocale] || faq.answer.en,
  }));

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FAQPageJsonLd faqs={faqItems} />

      {/* Back button */}
      <div>
        <Link
          href="/practice-areas"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#646A73] hover:text-[#0E0E10] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Practice Areas</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="p-8 sm:p-12 rounded-[32px] bg-white border border-black/8 shadow-sm">
        <div className="w-14 h-14 rounded-2xl bg-[#8A6A3B]/10 flex items-center justify-center text-[#8A6A3B] mb-6">
          <IconComponent className="w-7 h-7" />
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0E10] tracking-tight mb-4">
          {title}
        </h1>

        <p className="text-sm sm:text-base text-[#646A73] leading-relaxed max-w-3xl mb-8">
          {summary}
        </p>

        {detailData?.statutoryContext && (
          <div className="p-5 rounded-2xl bg-[#EEF0F2]/70 border border-black/5 text-xs text-[#33373D] leading-relaxed">
            <span className="font-bold text-[#0E0E10] block mb-1 uppercase tracking-wider text-[11px] text-[#8A6A3B]">
              Statutory Context & Procedure:
            </span>
            <p>
              {detailData.statutoryContext[activeLocale] ||
                detailData.statutoryContext.en}
            </p>
          </div>
        )}
      </div>

      {/* Matters Handled Grid */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0E0E10] tracking-tight">
          {t('typesHandled')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {matters.map((matter, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-black/8 shadow-xs flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#8A6A3B]/10 flex items-center justify-center text-[#8A6A3B] shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#0E0E10]">
                {matter}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow / Procedural Steps */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0E0E10] tracking-tight">
          {t('procedureSteps')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {(detailData?.keySteps || []).map((step, sIdx) => {
            const stepTitle = step.title[activeLocale] || step.title.en;
            const stepDesc = step.desc[activeLocale] || step.desc.en;

            return (
              <div
                key={sIdx}
                className="p-6 rounded-[24px] bg-white border border-black/8 shadow-xs space-y-2"
              >
                <span className="text-xs font-bold text-[#8A6A3B] block">
                  {stepTitle}
                </span>
                <p className="text-xs text-[#646A73] leading-relaxed">
                  {stepDesc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQs */}
      {detailData?.faqs && detailData.faqs.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#8A6A3B]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#0E0E10] tracking-tight">
              {t('faqTitle')}
            </h2>
          </div>

          <div className="space-y-4">
            {detailData.faqs.map((faq, fIdx) => {
              const question = faq.question[activeLocale] || faq.question.en;
              const answer = faq.answer[activeLocale] || faq.answer.en;

              return (
                <div
                  key={fIdx}
                  className="p-6 rounded-[24px] bg-white border border-black/8 shadow-xs space-y-2.5"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#0E0E10]">
                    {question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#646A73] leading-relaxed">
                    {answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Consultation CTA */}
      <div className="p-8 sm:p-12 rounded-[32px] bg-[#161719] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            {t('consultCta')}
          </h3>
          <p className="text-xs sm:text-sm text-[#A0A6B1] max-w-md">
            Schedule an appointment with Adv. Upnishad Sharma to discuss your matter, documents, and options under law.
          </p>
        </div>

        <Link href="/contact" className="btn-bronze py-3.5 px-7 text-xs sm:text-sm shrink-0">
          <span>{tNav('bookConsultation')}</span>
          <span className="arrow-icon-circle">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
