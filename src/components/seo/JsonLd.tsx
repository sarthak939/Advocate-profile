import React from 'react';
import { SITE_CONFIG } from '@/lib/site-config';

interface LegalServiceJsonLdProps {
  locale: string;
}

export function LegalServiceJsonLd({ locale }: LegalServiceJsonLdProps) {
  const isHi = locale === 'hi';
  const isPa = locale === 'pa';
  const name = isHi
    ? SITE_CONFIG.name.hi
    : isPa
    ? SITE_CONFIG.name.pa
    : SITE_CONFIG.name.en;

  const description = isHi
    ? 'अधिवक्ता उपनिषद शर्मा - पंजाब एवं हरियाणा उच्च न्यायालय, जिला न्यायालय पंचकूला एवं कालका न्यायालय में विधिक सेवाएं।'
    : isPa
    ? 'ਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ - ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ, ਜ਼ਿਲ੍ਹਾ ਅਦਾਲਤ ਪੰਚਕੂਲਾ ਅਤੇ ਕਾਲਕਾ ਅਦਾਲਤ ਵਿੱਚ ਕਾਨੂੰਨੀ ਸੇਵਾਵਾਂ।'
    : 'Adv. Upnishad Sharma - Advocate practicing before Punjab & Haryana High Court, District Court Panchkula, and Sub-Divisional Court Kalka.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Attorney'],
    '@id': `${SITE_CONFIG.domain}/#attorney`,
    name: name,
    alternateName: [
      SITE_CONFIG.name.en,
      SITE_CONFIG.name.hi,
      SITE_CONFIG.name.pa,
    ],
    url: `${SITE_CONFIG.domain}/${locale}`,
    image: `${SITE_CONFIG.domain}/images/portrait.jpg`,
    description: description,
    telephone: SITE_CONFIG.contacts.phone,
    email: SITE_CONFIG.contacts.email,
    priceRange: '₹500 - ₹12,000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 77, Near M.C. Office, Gurbax Colony',
      addressLocality: 'Kalka',
      addressRegion: 'Haryana',
      postalCode: '133302',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.8326',
      longitude: '76.9348',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Punjab' },
      { '@type': 'AdministrativeArea', name: 'Haryana' },
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'City', name: 'Panchkula' },
      { '@type': 'City', name: 'Kalka' },
      { '@type': 'City', name: 'Pinjore' },
    ],
    sameAs: [
      SITE_CONFIG.contacts.linkedin,
      SITE_CONFIG.contacts.instagram,
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Bar Council of Punjab & Haryana',
      identifier: SITE_CONFIG.enrolment.enrolmentNumber,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal Services & Practice Areas',
      itemListElement: SITE_CONFIG.practiceAreas.map((pa, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: pa.title[locale as 'en' | 'hi' | 'pa'] || pa.title.en,
          description: pa.summary[locale as 'en' | 'hi' | 'pa'] || pa.summary.en,
          url: `${SITE_CONFIG.domain}/${locale}/practice-areas/${pa.slug}`,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPageJsonLd({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  publishDate: string;
  url: string;
  authorName: string;
}

export function ArticleJsonLd({
  title,
  description,
  publishDate,
  url,
  authorName,
}: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: publishDate,
    url: url,
    author: {
      '@type': 'Person',
      name: authorName,
      url: SITE_CONFIG.domain,
    },
    publisher: {
      '@type': 'LegalService',
      name: authorName,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.domain}/images/portrait.jpg`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
