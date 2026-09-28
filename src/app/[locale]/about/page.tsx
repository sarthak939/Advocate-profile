import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { PORTRAIT_BLUR_DATA_URL } from '@/lib/portrait-blur';
import { Link } from '@/i18n/routing';
import {
  ShieldCheck,
  Scale,
  Landmark,
  GraduationCap,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  FileCheck2,
  ExternalLink,
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '@/components/ui/SocialIcons';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isHi = locale === 'hi';
  const isPa = locale === 'pa';

  const name = isHi
    ? SITE_CONFIG.name.hi
    : isPa
    ? SITE_CONFIG.name.pa
    : SITE_CONFIG.name.en;

  const title = isHi
    ? `परिचय | ${name} | अधिवक्ता पंजाब एवं हरियाणा उच्च न्यायालय`
    : isPa
    ? `ਜਾਣ-ਪਛਾਣ | ${name} | ਐਡਵੋਕੇਟ ਹਾਈ ਕੋਰਟ`
    : `About | ${name} | Advocate, Punjab & Haryana High Court`;

  const description = isHi
    ? 'अधिवक्ता उपनिषद शर्मा की पृष्ठभूमि, बार काउंसिल पंजीकरण PH/13540/2025, अभ्यास न्यायालय एवं विधिक कार्यप्रणाली।'
    : isPa
    ? 'ਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ ਦਾ ਪਿਛੋਕੜ, ਬਾਰ ਕੌਂਸਲ ਰਜਿਸਟ੍ਰੇਸ਼ਨ PH/13540/2025 ਅਤੇ ਅਦਾਲਤੀ ਕੰਮ।'
    : 'Professional background, Bar Council enrolment PH/13540/2025, courts of practice, and dedication to ethical legal representation.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'aboutPage' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const activeLocale = locale as 'en' | 'hi' | 'pa';
  const localizedName = SITE_CONFIG.name[activeLocale] || SITE_CONFIG.name.en;
  const localizedTitle = SITE_CONFIG.title[activeLocale] || SITE_CONFIG.title.en;
  const localizedBar =
    SITE_CONFIG.enrolment.barCouncil[activeLocale] ||
    SITE_CONFIG.enrolment.barCouncil.en;

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20">
      {/* 1. Header Banner */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] text-xs font-bold uppercase tracking-wider mb-3">
          <Scale className="w-3.5 h-3.5" />
          <span>ADVOCATE PROFILE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0E0E10] tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base text-[#646A73] leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* 2. Main Portrait & Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Portrait in elegant frame */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[420px] h-[380px] sm:h-[500px] sm:h-[580px] rounded-[32px] overflow-hidden border-2 border-[#8A6A3B]/30 shadow-2xl bg-[#161719]">
            <Image
              src="/images/portrait.jpg"
              alt={`${localizedName} - Portrait`}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              placeholder="blur"
              blurDataURL={PORTRAIT_BLUR_DATA_URL}
              className="object-cover object-[center_16%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Card over photo */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 text-white">
              <span className="text-xs uppercase tracking-widest text-[#C4A576] font-bold block mb-1">
                Verified Enrolment
              </span>
              <p className="text-base font-bold text-white">
                {SITE_CONFIG.enrolment.enrolmentNumber}
              </p>
              <p className="text-xs text-white/80 mt-0.5">
                {localizedBar} · {SITE_CONFIG.enrolment.yearOfEnrolment}
              </p>
            </div>
          </div>

          {/* Quick Chambers info box */}
          <div className="w-full max-w-[420px] mt-6 p-5 rounded-2xl bg-white border border-black/8 shadow-xs text-xs space-y-2.5">
            <div className="flex items-start gap-2 text-[#33373D]">
              <MapPin className="w-4 h-4 text-[#8A6A3B] shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.chambers.address[activeLocale] || SITE_CONFIG.chambers.address.en}</span>
            </div>
            <div className="flex items-center gap-2 text-[#8A6A3B] font-semibold pt-1 border-t border-black/5">
              <Landmark className="w-4 h-4 shrink-0" />
              <span>{SITE_CONFIG.chambers.courtSeat[activeLocale] || SITE_CONFIG.chambers.courtSeat.en}</span>
            </div>
          </div>
        </div>

        {/* Right: Narrative Biography & Credentials */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0E0E10] tracking-tight mb-4">
              {t('bioTitle')}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#33373D] leading-relaxed">
              <p>{t('bioP1')}</p>
              <p>{t('bioP2')}</p>
              <p className="text-[#646A73]">{t('bioP3')}</p>
            </div>
          </div>

          {/* Clearly Marked Education / Credentials Section */}
          <div className="p-6 rounded-[24px] bg-white border border-black/8 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#8A6A3B]/10 flex items-center justify-center text-[#8A6A3B]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0E0E10]">
                Legal Education & Bar Enrolment
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-[#EEF0F2]/70 border border-black/5 flex items-start justify-between">
                <div>
                  <strong className="block text-[#0E0E10] font-semibold">
                    Bar Council of Punjab & Haryana
                  </strong>
                  <span className="text-xs text-[#646A73]">
                    Enrolment No: {SITE_CONFIG.enrolment.enrolmentNumber} · Year of Enrolment: {SITE_CONFIG.enrolment.yearOfEnrolment}
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#8A6A3B]/15 text-[#8A6A3B]">
                  Active
                </span>
              </div>

              {/* Education – Punjabi University Patiala */}
              <div className="p-3.5 rounded-xl bg-[#EEF0F2]/70 border border-black/5 flex items-start justify-between">
                <div>
                  <strong className="block text-[#0E0E10] font-semibold">
                    {SITE_CONFIG.education.degree}
                  </strong>
                  <span className="text-xs text-[#646A73]">
                    {SITE_CONFIG.education.university[activeLocale] || SITE_CONFIG.education.university.en}
                    {' · '}{SITE_CONFIG.education.batch}
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#8A6A3B]/15 text-[#8A6A3B] shrink-0 ml-2">
                  {SITE_CONFIG.education.batch.split('–')[1]?.trim()}
                </span>
              </div>
            </div>
          </div>

          {/* Guiding Principles */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#0E0E10] tracking-tight mb-4">
              {t('principlesTitle')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-xs">
                <h4 className="text-xs sm:text-sm font-bold text-[#0E0E10] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8A6A3B]" />
                  <span>{t('principle1Title')}</span>
                </h4>
                <p className="text-xs text-[#646A73] leading-relaxed">
                  {t('principle1Desc')}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-xs">
                <h4 className="text-xs sm:text-sm font-bold text-[#0E0E10] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8A6A3B]" />
                  <span>{t('principle2Title')}</span>
                </h4>
                <p className="text-xs text-[#646A73] leading-relaxed">
                  {t('principle2Desc')}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-xs">
                <h4 className="text-xs sm:text-sm font-bold text-[#0E0E10] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8A6A3B]" />
                  <span>{t('principle3Title')}</span>
                </h4>
                <p className="text-xs text-[#646A73] leading-relaxed">
                  {t('principle3Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-bronze text-xs sm:text-sm py-3 px-6">
              <span>{tNav('bookConsultation')}</span>
              <span className="arrow-icon-circle">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/courts"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#33373D] hover:text-[#0E0E10] px-4 py-3 rounded-full bg-white border border-black/10"
            >
              <Landmark className="w-4 h-4 text-[#8A6A3B]" />
              <span>Explore Courts of Practice →</span>
            </Link>

            <a
              href={SITE_CONFIG.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adv. Upnishad Sharma on LinkedIn"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-3 rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={SITE_CONFIG.contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adv. Upnishad Sharma on Instagram"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-3 rounded-full bg-[#E4405F] text-white hover:bg-[#c13584] transition-all shadow-xs"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
