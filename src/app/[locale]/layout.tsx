import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getFontForLocale } from '@/lib/fonts';
import { SITE_CONFIG } from '@/lib/site-config';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DisclaimerModal } from '@/components/layout/DisclaimerModal';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { LegalServiceJsonLd } from '@/components/seo/JsonLd';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHi = locale === 'hi';
  const isPa = locale === 'pa';

  const name = isHi
    ? SITE_CONFIG.name.hi
    : isPa
    ? SITE_CONFIG.name.pa
    : SITE_CONFIG.name.en;

  const title = `${name} | Advocate | Punjab & Haryana High Court`;
  const description = isHi
    ? 'अधिवक्ता उपनिषद शर्मा - पंजाब एवं हरियाणा उच्च न्यायालय, चंडीगढ़, जिला न्यायालय पंचकूला एवं कालका न्यायालय में विधिक सेवाएं।'
    : isPa
    ? 'ਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ - ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ, ਜ਼ਿਲ੍ਹਾ ਅਦਾਲਤ ਪੰਚਕੂਲਾ ਅਤੇ ਕਾਲਕਾ ਅਦਾਲਤ ਵਿੱਚ ਕਾਨੂੰਨੀ ਸੇਵਾਵਾਂ।'
    : 'Adv. Upnishad Sharma - Advocate practicing before Punjab & Haryana High Court, District Court Panchkula, and Sub-Divisional Court Kalka.';

  return {
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    description,
    metadataBase: new URL(SITE_CONFIG.domain),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        hi: '/hi',
        pa: '/pa',
        'x-default': '/en',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: name,
      locale: locale === 'hi' ? 'hi_IN' : locale === 'pa' ? 'pa_IN' : 'en_IN',
      type: 'website',
      images: [
        {
          url: '/images/portrait.jpg',
          width: 1200,
          height: 900,
          alt: `${name} - Advocate`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/portrait.jpg'],
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
} as const;

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();
  const font = getFontForLocale(locale);

  return (
    <html lang={locale} className={font.className} data-scroll-behavior="smooth">
      <head>
        <LegalServiceJsonLd locale={locale} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#EEF0F2] text-[#0E0E10] antialiased selection:bg-[#8A6A3B]/20 selection:text-[#8A6A3B]">
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0E0E10] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main id="main-content" className="flex-1 w-full pt-20">
            {children}
          </main>
          <Footer />
          <DisclaimerModal />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
