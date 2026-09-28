'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/site-config';
import { Scale, Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale() as 'en' | 'hi' | 'pa';
  const [revealedEmail, setRevealedEmail] = useState(false);

  const localizedName = SITE_CONFIG.name[locale] || SITE_CONFIG.name.en;
  const localizedTitle = SITE_CONFIG.title[locale] || SITE_CONFIG.title.en;
  const localizedAddress = SITE_CONFIG.chambers.address[locale] || SITE_CONFIG.chambers.address.en;
  const localizedBar = SITE_CONFIG.enrolment.barCouncil[locale] || SITE_CONFIG.enrolment.barCouncil.en;

  const handleRevealEmail = () => {
    setRevealedEmail(true);
  };

  return (
    <footer className="bg-[#121316] text-[#E2E5E8] pt-16 pb-12 border-t border-black/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Advocate Identity & Enrolment (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#8A6A3B]/20 border border-[#8A6A3B]/40 flex items-center justify-center text-[#C4A576]">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {localizedName}
              </h2>
            </div>

            <p className="text-sm text-[#A0A6B1] font-medium leading-relaxed max-w-md">
              {localizedTitle}
            </p>

            {/* Enrolment Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#C4A576]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {localizedBar} · {SITE_CONFIG.enrolment.enrolmentNumber} ({SITE_CONFIG.enrolment.yearOfEnrolment})
              </span>
            </div>

            <p className="text-xs text-[#8E959E] leading-relaxed max-w-md">
              Committed to procedural diligence, ethical clarity, and thorough preparation across High Court, Sessions, and Sub-Divisional courts.
            </p>

            {/* Professional Profiles */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adv. Upnishad Sharma on LinkedIn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#0A66C2] text-xs font-semibold text-white/90 hover:text-white border border-white/10 hover:border-[#0A66C2] transition-all duration-200"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={SITE_CONFIG.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adv. Upnishad Sharma on Instagram"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#E4405F] text-xs font-semibold text-white/90 hover:text-white border border-white/10 hover:border-[#E4405F] transition-all duration-200"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Col 2: Practice Areas Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C4A576]">
              {t('practiceTitle')}
            </h3>
            <ul className="space-y-2 text-xs text-[#A0A6B1]">
              {SITE_CONFIG.practiceAreas.slice(0, 6).map((pa) => (
                <li key={pa.id}>
                  <Link
                    href={`/practice-areas/${pa.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {pa.shortTitle[locale] || pa.shortTitle.en}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/practice-areas"
                  className="text-[#C4A576] hover:underline font-semibold"
                >
                  + View all 10 practice areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Chambers & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C4A576]">
              {t('contactTitle')}
            </h3>

            <div className="space-y-2.5 text-xs text-[#A0A6B1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C4A576] shrink-0 mt-0.5" />
                <span>{localizedAddress}</span>
              </div>

              <div className="flex items-center gap-2.5 text-[#C4A576] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#C4A576] ml-1 mr-1" />
                <span>{SITE_CONFIG.chambers.courtSeat[locale] || SITE_CONFIG.chambers.courtSeat.en}</span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#C4A576] shrink-0" />
                <div className="flex items-center gap-3">
                  <a href={`tel:${SITE_CONFIG.contacts.phoneRaw}`} className="hover:text-white font-medium">
                    {SITE_CONFIG.contacts.phone}
                  </a>
                  <span className="text-white/20">|</span>
                  <a href={`tel:${SITE_CONFIG.contacts.landlineRaw}`} className="hover:text-white">
                    {SITE_CONFIG.contacts.landline}
                  </a>
                </div>
              </div>

              {/* Scraper-Protected Email */}
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#C4A576] shrink-0" />
                {revealedEmail ? (
                  <a
                    href={`mailto:${SITE_CONFIG.contacts.email}`}
                    className="text-white font-medium hover:underline"
                  >
                    {SITE_CONFIG.contacts.email}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={handleRevealEmail}
                    className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[11px] text-white transition-all cursor-pointer"
                  >
                    Click to reveal email
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BCI Mandatory Permanent Disclaimer Notice */}
        <div className="py-6 border-b border-white/10 text-[11px] text-[#8E959E] leading-relaxed">
          <p className="max-w-5xl">
            <strong className="text-white/80 uppercase font-semibold">Bar Council Compliance: </strong>
            {SITE_CONFIG.bciDisclaimer[locale] || SITE_CONFIG.bciDisclaimer.en}
          </p>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6C727A]">
          <div>
            © {new Date().getFullYear()} {localizedName}. {t('rights')}
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              {t('disclaimerLink')}
            </Link>
            <span>·</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              {t('privacyLink')}
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              {t('termsLink')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
