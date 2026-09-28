import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { ContactForm } from '@/features/contact/ContactForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Landmark,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '@/components/ui/SocialIcons';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isHi = locale === 'hi';
  const isPa = locale === 'pa';

  const name = isHi
    ? SITE_CONFIG.name.hi
    : isPa
    ? SITE_CONFIG.name.pa
    : SITE_CONFIG.name.en;

  const title = isHi
    ? `संपर्क एवं परामर्श | ${name}`
    : isPa
    ? `ਸੰਪਰਕ ਅਤੇ ਸਲਾਹ | ${name}`
    : `Contact & Legal Consultation | ${name}`;

  const description = isHi
    ? 'अधिवक्ता उपनिषद शर्मा से संपर्क करें। कार्यालय: शॉप 77, कालका। फोन: +91 70560 99998।'
    : isPa
    ? 'ਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ ਨਾਲ ਸੰਪਰਕ ਕਰੋ। ਦਫ਼ਤਰ: ਦੁਕਾਨ 77, ਕਾਲਕਾ। ਫ਼ੋਨ: +91 70560 99998।'
    : 'Schedule a legal consultation with Adv. Upnishad Sharma. Chambers at Kalka, Seat No. 15 Sub-Divisional Court, serving Tricity.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contact`,
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contactPage' });
  const tWhatsapp = await getTranslations({ locale, namespace: 'whatsapp' });

  const activeLocale = locale as 'en' | 'hi' | 'pa';
  const localizedAddress =
    SITE_CONFIG.chambers.address[activeLocale] || SITE_CONFIG.chambers.address.en;
  const localizedSeat =
    SITE_CONFIG.chambers.courtSeat[activeLocale] ||
    SITE_CONFIG.chambers.courtSeat.en;
  const localizedHours =
    SITE_CONFIG.chambers.officeHours[activeLocale] ||
    SITE_CONFIG.chambers.officeHours.en;

  const encodedGreeting = encodeURIComponent(tWhatsapp('greeting'));
  const whatsappUrl = `https://wa.me/917056099998?text=${encodedGreeting}`;

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] text-xs font-bold uppercase tracking-wider mb-3">
          <Phone className="w-3.5 h-3.5" />
          <span>DIRECT CONTACT</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0E0E10] tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base text-[#646A73] leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* Main Grid: Contact Details Left (5 cols) + Form Right (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Phone / WhatsApp Card */}
          <div className="p-7 rounded-[28px] bg-white border border-black/8 shadow-xs space-y-5">
            <h2 className="text-base font-bold text-[#0E0E10] tracking-tight">
              {t('directContact')}
            </h2>

            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.contacts.phoneRaw}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#EEF0F2]/70 hover:bg-[#EEF0F2] transition-colors border border-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#8A6A3B]/15 text-[#8A6A3B] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#646A73] block">
                      Mobile & Urgent Inquiries
                    </span>
                    <span className="text-sm font-bold text-[#0E0E10]">
                      {SITE_CONFIG.contacts.phone}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#8A6A3B]">Call →</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-white/20" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#1EBE5D] block">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-sm font-bold text-[#0E0E10]">
                      +91 70560 99998
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#1EBE5D]">Chat →</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.contacts.landlineRaw}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#EEF0F2]/70 hover:bg-[#EEF0F2] transition-colors border border-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-black/5 text-[#33373D] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#646A73] block">
                      Landline Office
                    </span>
                    <span className="text-sm font-semibold text-[#0E0E10]">
                      {SITE_CONFIG.contacts.landline}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#646A73]">Call →</span>
              </a>
            </div>
          </div>

          {/* Professional Profiles Card (LinkedIn & Instagram) */}
          <div className="p-7 rounded-[28px] bg-white border border-black/8 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-[#0E0E10] tracking-tight">
              Professional & Social Profiles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={SITE_CONFIG.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EEF0F2]/70 hover:bg-[#0A66C2] text-[#0E0E10] hover:text-white transition-all duration-200 border border-black/5 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#646A73] group-hover:text-white/80 block">
                      Connect on
                    </span>
                    <span className="text-xs font-bold">
                      LinkedIn
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                href={SITE_CONFIG.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EEF0F2]/70 hover:bg-[#E4405F] text-[#0E0E10] hover:text-white transition-all duration-200 border border-black/5 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E4405F] text-white flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#646A73] group-hover:text-white/80 block">
                      Follow on
                    </span>
                    <span className="text-xs font-bold">
                      Instagram
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Chambers & Seat Location Card */}
          <div className="p-7 rounded-[28px] bg-white border border-black/8 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-[#0E0E10] tracking-tight">
              {t('chambersInfo')}
            </h2>

            <div className="space-y-3 text-xs text-[#33373D]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8A6A3B] shrink-0 mt-0.5" />
                <span>{localizedAddress}</span>
              </div>

              <div className="flex items-center gap-3 text-[#8A6A3B] font-semibold pt-1 border-t border-black/5">
                <Landmark className="w-4 h-4 shrink-0" />
                <span>{localizedSeat}</span>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-black/5 text-[#646A73]">
                <Clock className="w-4 h-4 text-[#8A6A3B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#0E0E10]">
                    Office Hours
                  </span>
                  <span>{localizedHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency / Busy in Court Notice */}
          <div className="p-5 rounded-[24px] bg-[#EEF0F2] border border-black/8 flex items-start gap-3 text-xs text-[#646A73] leading-relaxed">
            <AlertCircle className="w-4 h-4 text-[#8A6A3B] shrink-0 mt-0.5" />
            <p>{t('emergencyNotice')}</p>
          </div>
        </div>

        {/* Right Column: Working Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Embedded Google Map Section */}
      <div className="rounded-[32px] overflow-hidden border border-black/10 shadow-md bg-white">
        <div className="p-6 border-b border-black/8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#8A6A3B]" />
            <h3 className="text-sm font-bold text-[#0E0E10]">
              Chambers Location & Directions (Kalka)
            </h3>
          </div>
          <a
            href={SITE_CONFIG.chambers.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A6A3B] hover:underline"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        {/* Responsive Map Embed for Kalka MC Office area */}
        <div className="w-full h-80 sm:h-96 relative bg-[#E2E5E8]">
          <iframe
            title="Adv. Upnishad Sharma Chambers Location"
            src={SITE_CONFIG.chambers.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
