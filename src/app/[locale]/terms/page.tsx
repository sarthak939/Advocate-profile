import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { FileText, ShieldCheck } from 'lucide-react';

interface LegalPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `Terms of Use | Adv. Upnishad Sharma`,
    description: 'Terms of use governing access to the informational website.',
    alternates: {
      canonical: `/${locale}/terms`,
    },
  };
}

export default async function TermsPage({ params }: LegalPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] text-xs font-bold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" />
          <span>LEGAL TERMS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0E0E10] tracking-tight">
          Terms of Use
        </h1>
        <p className="text-xs text-[#646A73]">
          Last updated: September 2026
        </p>
      </div>

      <div className="p-8 rounded-[30px] bg-white border border-black/8 shadow-sm space-y-6 text-xs sm:text-sm text-[#33373D] leading-relaxed">
        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10]">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing and navigating this website, you confirm that you have accepted the Bar Council of India disclaimer and agree to comply with these terms of use. If you do not agree, you must discontinue using the site.
        </p>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          2. Informational Purpose Only
        </h2>
        <p>
          All content, articles, fee indicators, and court profiles provided on this site are solely for general informational and educational guidance. They do not constitute formal legal opinion or advice on specific matters.
        </p>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          3. Intellectual Property
        </h2>
        <p>
          Text, design layouts, and original materials on this website are protected under Indian copyright law. Reproduction or commercial exploitation without prior written consent is strictly prohibited.
        </p>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          4. Jurisdiction
        </h2>
        <p>
          Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Panchkula / Chandigarh.
        </p>
      </div>
    </div>
  );
}
