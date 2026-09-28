'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LaurelBadge } from '@/components/ui/LaurelBadge';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statueRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1 }
      )
        .fromTo(
          '.hero-subtext',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          '.hero-cta-btn',
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          statueRef.current,
          { opacity: 0, y: 60, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: 'power2.out' },
          '-=0.7'
        )
        .fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const isEn = locale === 'en';

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex flex-col justify-between pt-20 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Centered Top Headline & Call to Action */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-4 sm:pt-8 z-10">
        <h1
          ref={headlineRef}
          className={`font-black text-[#0E0E10] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.12] sm:leading-[1.1] mb-6 ${
            isEn ? 'uppercase' : 'font-bold'
          }`}
        >
          <span>{t('headlinePre')} </span>
          <span className="highlight-pill mx-1 sm:mx-2">
            {t('headlineHighlight')}
          </span>{' '}
          <span>{t('headlinePost')}</span>
        </h1>

        <p className="hero-subtext max-w-2xl text-sm sm:text-base text-[#646A73] font-normal leading-relaxed mb-8">
          {t('subtext')}
        </p>

        <div className="hero-cta-btn">
          <Link href="/contact" className="btn-bronze text-sm sm:text-base py-3 sm:py-3.5 px-7 sm:px-8">
            <span>{t('cta')}</span>
            <span className="arrow-icon-circle">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>

      {/* Center Bronze Statue that rises on load */}
      <div
        ref={statueRef}
        className="relative flex items-end justify-center w-full mt-4 sm:mt-6 mb-2 pointer-events-none select-none z-10"
      >
        <div className="relative w-[240px] h-[300px] sm:w-[380px] sm:h-[460px] md:w-[440px] md:h-[500px]">
          <Image
            src="/images/statue.png"
            alt="Lady Justice Bronze Sculpture"
            fill
            priority
            sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, 440px"
            className="object-contain object-bottom drop-shadow-md"
          />
          {/* Subtle bottom fade matching background */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#EEF0F2] via-[#EEF0F2]/70 to-transparent" />
        </div>
      </div>

      {/* Bottom Bar: Intro Paragraph Left + Laurel Badges Right */}
      <div
        ref={bottomBarRef}
        className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-black/5 z-20"
      >
        {/* Bottom Left: 2-line intro */}
        <div className="max-w-xs text-center md:text-left">
          <p className="text-xs text-[#646A73] leading-relaxed">
            {t('introLeft')}
          </p>
        </div>

        {/* Bottom Right: 3 Laurel Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <LaurelBadge title={t('badgeHighCourt')} />
          <LaurelBadge title={t('badgeEnrolled')} />
          <LaurelBadge title={t('badgeCourts')} />
        </div>
      </div>
    </section>
  );
}
