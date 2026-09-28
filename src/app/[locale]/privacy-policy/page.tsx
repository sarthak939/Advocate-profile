import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { Lock, ShieldCheck } from 'lucide-react';

interface LegalPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `Privacy Policy | Adv. Upnishad Sharma`,
    description: 'Privacy policy and data protection practices for website visitors.',
    alternates: {
      canonical: `/${locale}/privacy-policy`,
    },
  };
}

export default async function PrivacyPolicyPage({ params }: LegalPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] text-xs font-bold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" />
          <span>DATA PROTECTION</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0E0E10] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#646A73]">
          Last updated: September 2026
        </p>
      </div>

      <div className="p-8 rounded-[30px] bg-white border border-black/8 shadow-sm space-y-6 text-xs sm:text-sm text-[#33373D] leading-relaxed">
        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10]">
          1. Information We Collect
        </h2>
        <p>
          We only collect personal information that you voluntarily submit to us through the enquiry form or direct correspondence (such as your name, contact phone number, email address, and a brief description of your matter).
        </p>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          2. Use of Information
        </h2>
        <p>
          Any information submitted is used solely to respond to your inquiry, schedule professional consultations, and evaluate potential conflict of interest. We do not sell, rent, or commercialize your personal data to any third party.
        </p>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          3. Confidentiality
        </h2>
        <p>
          Communications received are treated with professional discretion. However, until a formal advocate-client relationship is executed via Vakalatnama, we advise clients not to transmit sensitive original documents via open web forms.
        </p>

        <h2 className="text-base sm:text-lg font-bold text-[#0E0E10] pt-2">
          4. Contact
        </h2>
        <p>
          For questions regarding this policy, reach out to Chambers of Adv. Upnishad Sharma at S.upnishad99@gmail.com or call +91 70560 99998.
        </p>
      </div>
    </div>
  );
}
