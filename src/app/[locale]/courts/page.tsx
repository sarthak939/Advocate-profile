import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { Link } from '@/i18n/routing';
import {
  Landmark,
  MapPin,
  Building,
  Navigation,
  Scale,
  Phone,
  ArrowUpRight,
  Shield,
} from 'lucide-react';

interface CourtsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CourtsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isHi = locale === 'hi';
  const isPa = locale === 'pa';

  const name = isHi
    ? SITE_CONFIG.name.hi
    : isPa
    ? SITE_CONFIG.name.pa
    : SITE_CONFIG.name.en;

  const title = isHi
    ? `अभ्यास न्यायालय | ${name}`
    : isPa
    ? `ਅਭਿਆਸ ਅਦਾਲਤਾਂ | ${name}`
    : `Courts of Practice | ${name} | High Court & District Courts`;

  const description = isHi
    ? 'पंजाब एवं हरियाणा उच्च न्यायालय चंडीगढ़, जिला न्यायालय पंचकूला एवं कालका न्यायालय में विधिक प्रतिनिधित्व।'
    : isPa
    ? 'ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ ਚੰਡੀਗੜ੍ਹ, ਜ਼ਿਲ੍ਹਾ ਅਦਾਲਤ ਪੰਚਕੂਲਾ ਅਤੇ ਕਾਲਕਾ ਅਦਾਲਤ ਵਿੱਚ ਕਾਨੂੰਨੀ ਸੇਵਾਵਾਂ।'
    : 'Active legal representation across Punjab & Haryana High Court, District & Sessions Court Panchkula, and Sub-Divisional Court Kalka.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/courts`,
    },
  };
}

export default async function CourtsPage({ params }: CourtsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'courtsPage' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const activeLocale = locale as 'en' | 'hi' | 'pa';

  return (
    <div className="py-10 sm:py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] text-xs font-bold uppercase tracking-wider mb-3">
          <Landmark className="w-3.5 h-3.5" />
          <span>JUDICIAL FORUMS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0E0E10] tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base text-[#646A73] leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* 3 Detailed Court Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {SITE_CONFIG.courts.map((court, index) => {
          const name = court.name[activeLocale] || court.name.en;
          const location = court.location[activeLocale] || court.location.en;
          const role = court.role[activeLocale] || court.role.en;
          const jurisdiction = court.jurisdiction[activeLocale] || court.jurisdiction.en;

          return (
            <div
              key={court.id}
              className="flex flex-col justify-between p-8 rounded-[30px] bg-white border border-black/8 hover:border-[#8A6A3B]/40 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#8A6A3B]/10 flex items-center justify-center text-[#8A6A3B]">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#EEF0F2] text-[#646A73]">
                    {`TIER 0${index + 1}`}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0E0E10] tracking-tight mb-3">
                  {name}
                </h2>

                <div className="flex items-start gap-2 text-xs text-[#8A6A3B] font-semibold mb-5">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{location}</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-black/5 text-xs text-[#33373D] leading-relaxed">
                  <div>
                    <span className="font-bold text-[#0E0E10] block mb-1">
                      {t('jurisdictionLabel')}:
                    </span>
                    <span className="text-[#646A73]">{jurisdiction}</span>
                  </div>

                  <div>
                    <span className="font-bold text-[#0E0E10] block mb-1">
                      {t('scopeLabel')}:
                    </span>
                    <span className="text-[#646A73]">{role}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6A3B] hover:text-[#72552D]"
                >
                  <span>Consult for this forum</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Geographic Coverage */}
      <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-black/8">
        <div className="flex items-center gap-2 mb-5">
          <MapPin className="w-4 h-4 text-[#8A6A3B]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#8A6A3B]">
            Courts &amp; Areas Covered
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SITE_CONFIG.geographicCoverage.map((area) => (
            <div
              key={area.en}
              className="p-3.5 rounded-2xl bg-[#EEF0F2]/70 border border-black/5 flex flex-col gap-1"
            >
              <span className="text-sm font-bold text-[#0E0E10]">
                {area[activeLocale] || area.en}
              </span>
              <span className="text-[11px] text-[#8A6A3B] leading-snug">
                {area.court[activeLocale] || area.court.en}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chambers & Seat Location Banner */}
      <div className="p-8 sm:p-12 rounded-[32px] bg-[#161719] text-white shadow-2xl border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-[#C4A576]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#C4A576]">
                MAIN CHAMBERS & COURT SEAT
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {t('officeTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A6B1] leading-relaxed">
              {SITE_CONFIG.chambers.address[activeLocale] || SITE_CONFIG.chambers.address.en}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs sm:text-sm text-[#C4A576] font-semibold border border-white/10">
              <Landmark className="w-4 h-4" />
              <span>{t('courtSeat')}</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href={SITE_CONFIG.chambers.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bronze py-3.5 px-6 text-xs text-center justify-center"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.contacts.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all text-center"
            >
              <Phone className="w-4 h-4 text-[#C4A576]" />
              <span>{SITE_CONFIG.contacts.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
