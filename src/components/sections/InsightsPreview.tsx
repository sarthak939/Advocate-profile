'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Clock, BookOpen, ArrowUpRight } from 'lucide-react';

export function InsightsPreview() {
  const t = useTranslations('homeInsights');
  const locale = useLocale() as 'en' | 'hi' | 'pa';

  const sampleArticles = [
    {
      slug: 'bail-law-what-to-know',
      category: locale === 'hi' ? 'आपराधिक विधि' : locale === 'pa' ? 'ਫੌਜਦਾਰੀ ਕਾਨੂੰਨ' : 'Criminal Law',
      readTime: '5',
      date: 'Sep 2026',
      title: {
        en: 'Bail in India: Regular, Interim & Anticipatory Bail Explained',
        hi: 'भारत में ज़मानत: नियमित, अंतरिम एवं अग्रिम ज़मानत के मूल नियम',
        pa: 'ਭਾਰਤ ਵਿੱਚ ਜ਼ਮਾਨਤ: ਨਿਯਮਤ, ਅੰਤਰਿਮ ਅਤੇ ਅਗਾਊਂ ਜ਼ਮਾਨਤ ਦੇ ਮੁੱਖ ਨਿਯਮ',
      },
      summary: {
        en: 'A practical overview of statutory bail provisions under the Bharatiya Nagarik Suraksha Sanhita (BNSS), key grounds for bail, and procedure in Sessions & High Court.',
        hi: 'भारतीय नागरिक सुरक्षा संहिता (BNSS) के तहत ज़मानत के वैधानिक प्रावधान, आवश्यक आधार तथा सत्र एवं उच्च न्यायालय में प्रक्रिया का विश्लेषण।',
        pa: 'ਭਾਰਤੀ ਨਾਗਰਿਕ ਸੁਰੱਖਿਆ ਸੰਹਿਤਾ (BNSS) ਅਧੀਨ ਜ਼ਮਾਨਤ ਦੇ ਕਾਨੂੰਨੀ ਨਿਯਮ, ਜ਼ਰੂਰੀ ਅਧਾਰ ਅਤੇ ਸੈਸ਼ਨ ਤੇ ਹਾਈ ਕੋਰਟ ਦੀ ਕਾਰਵਾਈ।',
      },
    },
    {
      slug: 'documents-needed-property-registration-kalka-panchkula',
      category: locale === 'hi' ? 'संपत्ति प्रलेखन' : locale === 'pa' ? 'ਜਾਇਦਾਦ ਦਸਤਾਵੇਜ਼' : 'Property Law',
      readTime: '6',
      date: 'Sep 2026',
      title: {
        en: 'Key Documents Required for Property Registration & Registry in Kalka & Panchkula',
        hi: 'कालका एवं पंचकूला में संपत्ति रजिस्ट्री एवं दस्तावेज़ीकरण हेतु आवश्यक कागज़ात',
        pa: 'ਕਾਲਕਾ ਅਤੇ ਪੰਚਕੂਲਾ ਵਿੱਚ ਜਾਇਦਾਦ ਦੀ ਰਜਿਸਟਰੀ ਲਈ ਜ਼ਰੂਰੀ ਦਸਤਾਵੇਜ਼',
      },
      summary: {
        en: 'Step-by-step checklist of title deed verification, jamabandi, NOCs, circle rates, and mutation (inteqal) in Haryana Tehsil offices.',
        hi: 'टाइटल डीड जांच, जमाबंदी, अनापत्ति प्रमाण पत्र (NOC), सर्कल रेट एवं हरियाणा तहसील कार्यालयों में इंतकाल दर्ज कराने की चरणबद्ध चेकलिस्ट।',
        pa: 'ਰਜਿਸਟਰੀ ਪੜਤਾਲ, ਜਮ੍ਹਾਂਬੰਦੀ, ਐੱਨ.ਓ.ਸੀ., ਸਰਕਲ ਰੇਟ ਅਤੇ ਹਰਿਆਣਾ ਤਹਿਸੀਲ ਦਫ਼ਤਰਾਂ ਵਿੱਚ ਇੰਤਕਾਲ ਦੀ ਪੂਰੀ ਸੂਚੀ।',
      },
    },
    {
      slug: 'how-legal-notice-works-cheque-bounce-recovery',
      category: locale === 'hi' ? 'विधिक नोटिस' : locale === 'pa' ? 'ਕਾਨੂੰਨੀ ਨੋਟਿਸ' : 'Legal Notices',
      readTime: '4',
      date: 'Sep 2026',
      title: {
        en: 'How a Statutory Legal Notice Works: Timelines, Formats & Common Pitfalls',
        hi: 'कानूनी नोटिस की प्रक्रिया: समय-सीमा, प्रारूप एवं महत्वपूर्ण सावधानियां',
        pa: 'ਕਾਨੂੰਨੀ ਨੋਟਿਸ ਦੀ ਕਾਰਵਾਈ: ਸਮਾਂ-ਸੀਮਾ, ਖਰੜਾ ਅਤੇ ਜ਼ਰੂਰੀ ਸਾਵਧਾਨੀਆਂ',
      },
      summary: {
        en: 'Understanding Section 138 NI Act notices for cheque bounce, demand notices for unpaid debt, and how to respond within the statutory limitation period.',
        hi: 'चेक बाउंस धारा 138 नोटिस, धन वसूली मांग नोटिस एवं निर्धारित समय-सीमा के भीतर वैधानिक कानूनी उत्तर देने की प्रक्रिया।',
        pa: 'ਧਾਰਾ 138 ਅਧੀਨ ਚੈੱਕ ਬਾਊਂਸ ਨੋਟਿਸ, ਬਕਾਇਆ ਪੈਸੇ ਦੀ ਮੰਗ ਅਤੇ ਕਾਨੂੰਨੀ ਮਿਆਦ ਵਿੱਚ ਢੁਕਵਾਂ ਜਵਾਬ ਦੇਣ ਦਾ ਤਰੀਕਾ।',
      },
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A6A3B] block mb-2">
            {t('tagline')}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0E10] tracking-tight">
            <span>{t('titlePre')} </span>
            <span className="highlight-pill mx-1 sm:mx-1.5">{t('titleHighlight')}</span>{' '}
            <span>{t('titlePost')}</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-xs sm:text-sm text-[#646A73] leading-relaxed mb-4">
            {t('description')}
          </p>
          <Link href="/insights" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6A3B] hover:text-[#72552D]">
            <span>{t('viewAll')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 3 Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleArticles.map((article) => {
          const title = article.title[locale] || article.title.en;
          const summary = article.summary[locale] || article.summary.en;

          return (
            <article
              key={article.slug}
              className="flex flex-col justify-between p-7 rounded-[26px] bg-white border border-black/8 hover:border-[#8A6A3B]/40 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] font-semibold text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[#8E959E] text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime} min read</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0E0E10] mb-3 leading-snug hover:text-[#8A6A3B] transition-colors">
                  <Link href={`/insights/${article.slug}`}>
                    {title}
                  </Link>
                </h3>

                <p className="text-xs text-[#646A73] leading-relaxed mb-6 line-clamp-3">
                  {summary}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8E959E]">
                  SAMPLE ARTICLE
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#8A6A3B] hover:text-[#72552D]"
                >
                  <span>{t('readArticle')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
