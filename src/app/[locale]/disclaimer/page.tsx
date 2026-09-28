import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { ShieldCheck, Scale, AlertTriangle } from 'lucide-react';

interface LegalPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isHi = locale === 'hi';
  const isPa = locale === 'pa';

  const name = isHi
    ? SITE_CONFIG.name.hi
    : isPa
    ? SITE_CONFIG.name.pa
    : SITE_CONFIG.name.en;

  return {
    title: `Disclaimer | ${name}`,
    description: 'Bar Council of India compliance statement and legal disclaimer.',
    alternates: {
      canonical: `/${locale}/disclaimer`,
    },
  };
}

export default async function DisclaimerPage({ params }: LegalPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const activeLocale = locale as 'en' | 'hi' | 'pa';

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>STATUTORY COMPLIANCE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0E0E10] tracking-tight">
          Bar Council of India Disclaimer
        </h1>
        <p className="text-xs text-[#646A73]">
          Last updated: September 2026
        </p>
      </div>

      <div className="p-8 rounded-[30px] bg-white border border-black/8 shadow-sm space-y-6 text-xs sm:text-sm text-[#33373D] leading-relaxed">
        <div className="p-4 rounded-2xl bg-[#EEF0F2] border border-black/5 text-xs text-[#0E0E10] font-medium leading-relaxed">
          {SITE_CONFIG.bciDisclaimer[activeLocale] || SITE_CONFIG.bciDisclaimer.en}
        </div>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          1. Prohibition on Solicitation and Advertising
        </h2>
        <p>
          In accordance with the Advocates Act, 1961 and the statutory rules framed by the Bar Council of India, advocates are strictly prohibited from soliciting clients or advertising professional services either directly or indirectly. This website has been developed solely to provide basic informational material regarding the advocate, qualifications, and the Indian legal system.
        </p>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          2. No Advocate-Client Relationship
        </h2>
        <p>
          Accessing this website, viewing articles, or transmitting messages via the contact form or WhatsApp does not, in itself, create or constitute an advocate-client relationship. A formal professional engagement commences only after factual review, conflict verification, execution of a vakalatnama, and mutually agreed professional terms.
        </p>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          3. Educational Nature of Information
        </h2>
        <p>
          The articles, guides, and statutory summaries hosted on this website are for educational and informational purposes only. They do not constitute formal legal opinion or substitute tailored legal advice for specific case facts.
        </p>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          4. Confidentiality Caution
        </h2>
        <p>
          Visitors are advised never to send original, highly sensitive, or confidential court records through unencrypted public online forms. Initial consultations should be scheduled directly.
        </p>
      </div>
    </div>
  );
}
