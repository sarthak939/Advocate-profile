import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { Link } from '@/i18n/routing';
import {
  Clock,
  FileText,
  Landmark,
  HeartHandshake,
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface FeesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: FeesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isHi = locale === 'hi';
  const isPa = locale === 'pa';

  const name = isHi
    ? SITE_CONFIG.name.hi
    : isPa
    ? SITE_CONFIG.name.pa
    : SITE_CONFIG.name.en;

  const title = isHi
    ? `शुल्क विवरण एवं परामर्श | ${name}`
    : isPa
    ? `ਫੀਸ ਵੇਰਵਾ ਅਤੇ ਸਲਾਹ | ${name}`
    : `Consultation & Professional Charges | ${name}`;

  const description = isHi
    ? 'अधिवक्ता उपनिषद शर्मा की परामर्श फीस, ड्राफ्टिंग शुल्क एवं न्याय तक पहुँच नीति का पारदर्शी विवरण।'
    : isPa
    ? 'ਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ ਦੀ ਸਲਾਹ ਫੀਸ, ਡਰਾਫਟਿੰਗ ਖ਼ਰਚੇ ਅਤੇ ਨਿਆਂ ਤੱਕ ਪਹੁੰਚ ਨੀਤੀ।'
    : 'Transparent and indicative professional fee schedule for legal consultations, statutory drafting, and court appearances.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/fees`,
    },
  };
}

export default async function FeesPage({ params }: FeesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'feesPage' });

  const activeLocale = locale as 'en' | 'hi' | 'pa';

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] text-xs font-bold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>FEE TRANSPARENCY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0E0E10] tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base text-[#646A73] leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* 1. Legal Consultation Cards */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0E0E10] tracking-tight mb-2">
            {t('consultTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-[#646A73]">
            {t('consultDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONFIG.fees.consultation.map((tier, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[26px] bg-white border border-black/8 hover:border-[#8A6A3B]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#8A6A3B]/10 flex items-center justify-center text-[#8A6A3B]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EEF0F2] text-[#33373D]">
                    {tier.duration}
                  </span>
                </div>

                <div className="text-3xl font-extrabold text-[#0E0E10] mb-3">
                  {tier.amount}
                </div>

                <p className="text-xs text-[#646A73] leading-relaxed">
                  {tier.note[activeLocale] || tier.note.en}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5">
                <Link
                  href="/contact"
                  className="btn-bronze w-full py-2.5 text-xs text-center justify-center"
                >
                  <span>Book Appointment</span>
                  <span className="arrow-icon-circle">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Drafting & Legal Documentation Schedule */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#8A6A3B]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#0E0E10] tracking-tight">
            {t('draftingTitle')}
          </h2>
        </div>

        <div className="rounded-[28px] bg-white border border-black/8 overflow-hidden shadow-xs">
          <div className="divide-y divide-black/5">
            {SITE_CONFIG.fees.draftingHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 sm:p-5 hover:bg-[#EEF0F2]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#8A6A3B] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0E0E10]">
                    {item.service}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#8A6A3B] font-mono">
                  {item.fee}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Court Appearance Highlights */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Landmark className="w-5 h-5 text-[#8A6A3B]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#0E0E10] tracking-tight">
            {t('appearanceTitle')}
          </h2>
        </div>

        <div className="rounded-[28px] bg-white border border-black/8 overflow-hidden shadow-xs">
          <div className="divide-y divide-black/5">
            {SITE_CONFIG.fees.appearanceHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 sm:p-5 hover:bg-[#EEF0F2]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Landmark className="w-4 h-4 text-[#8A6A3B] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0E0E10]">
                    {item.court}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#8A6A3B] font-mono">
                  {item.fee}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Access to Justice / Pro Bono Policy */}
      <div className="p-8 rounded-[30px] bg-white border border-[#8A6A3B]/30 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#8A6A3B]/10 flex items-center justify-center text-[#8A6A3B]">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#0E0E10]">
            {t('accessTitle')}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#33373D] leading-relaxed">
          {SITE_CONFIG.fees.proBonoPolicy[activeLocale] ||
            SITE_CONFIG.fees.proBonoPolicy.en}
        </p>
      </div>

      {/* 5. Important Notices */}
      <div className="p-6 sm:p-8 rounded-[28px] bg-[#EEF0F2] border border-black/8 space-y-3 text-xs text-[#646A73] leading-relaxed">
        <div className="flex items-center gap-2 text-[#0E0E10] font-bold">
          <AlertCircle className="w-4 h-4 text-[#8A6A3B]" />
          <span>{t('importantNotes')}</span>
        </div>
        <ul className="space-y-2 list-disc list-inside">
          <li>{t('note1')}</li>
          <li>{t('note2')}</li>
          <li>{t('note3')}</li>
          <li>
            Travelling and conveyance expenses, wherever applicable, shall be borne separately by the client.
          </li>
        </ul>
      </div>
    </div>
  );
}
