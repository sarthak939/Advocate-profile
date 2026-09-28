'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/site-config';
import { ScalesIcon } from '@/components/ui/ScalesIcon';
import { PORTRAIT_BLUR_DATA_URL } from '@/lib/portrait-blur';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function StatsAndPortraitShowcase() {
  const tStats = useTranslations('stats');
  const tPortrait = useTranslations('portraitShowcase');
  const locale = useLocale();

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const statNumbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  // 5 Grouped Practice Areas for Floating Glass Pills
  const showcaseTags = [
    { id: 1, label: tPortrait('tag1'), slug: 'criminal-defence-bail' },
    { id: 2, label: tPortrait('tag2'), slug: 'civil-litigation' },
    { id: 3, label: tPortrait('tag3'), slug: 'family-matrimonial' },
    { id: 4, label: tPortrait('tag4'), slug: 'writ-petitions-constitutional' },
    { id: 5, label: tPortrait('tag5'), slug: 'motor-accident-claims' },
  ];

  // Auto-cycle active pill every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseTags.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [showcaseTags.length]);

  // Verified figures count-up animation
  const statsData = [
    { target: 3, suffix: '', label: tStats('courts'), sub: tStats('courtsSub') },
    { target: 10, suffix: '', label: tStats('practiceAreas'), sub: tStats('practiceAreasSub') },
    { target: 2025, suffix: '', label: tStats('enrolled'), sub: tStats('enrolledSub'), isYear: true },
    { target: 3, suffix: '', label: tStats('languages'), sub: tStats('languagesSub') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsData.forEach((stat, index) => {
        const el = statNumbersRef.current[index];
        if (!el) return;

        const obj = { val: stat.isYear ? 2000 : 0 };
        gsap.to(obj, {
          val: stat.target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const localizedName =
    locale === 'hi'
      ? SITE_CONFIG.name.hi
      : locale === 'pa'
      ? SITE_CONFIG.name.pa
      : SITE_CONFIG.name.en;

  const paddedCounter = `0${activeIndex + 1}/05`;

  return (
    <section
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 overflow-hidden"
    >
      {/* 1. STATS STRIP WITH 4 COLUMNS & CENTRAL BADGE */}
      <div className="relative bg-white/70 backdrop-blur-md rounded-t-[28px] border-t border-x border-black/8 pt-8 pb-10 px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative">
          {/* Col 1 */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3 border-r border-black/8">
            <div className="flex items-baseline gap-0.5">
              <span
                ref={(el) => { statNumbersRef.current[0] = el; }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0E10] tracking-tight"
              >
                0
              </span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#0E0E10] mt-1">
              {statsData[0].label}
            </span>
            <span className="text-[10px] sm:text-xs text-[#646A73] mt-0.5">
              {statsData[0].sub}
            </span>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3 border-r md:border-r border-black/8">
            <div className="flex items-baseline gap-0.5">
              <span
                ref={(el) => { statNumbersRef.current[1] = el; }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0E10] tracking-tight"
              >
                0
              </span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#0E0E10] mt-1">
              {statsData[1].label}
            </span>
            <span className="text-[10px] sm:text-xs text-[#646A73] mt-0.5">
              {statsData[1].sub}
            </span>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3 border-r border-black/8">
            <div className="flex items-baseline gap-0.5">
              <span
                ref={(el) => { statNumbersRef.current[2] = el; }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0E10] tracking-tight"
              >
                2000
              </span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#0E0E10] mt-1">
              {statsData[2].label}
            </span>
            <span className="text-[10px] sm:text-xs text-[#646A73] mt-0.5">
              {statsData[2].sub}
            </span>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3">
            <div className="flex items-baseline gap-0.5">
              <span
                ref={(el) => { statNumbersRef.current[3] = el; }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E0E10] tracking-tight"
              >
                0
              </span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#0E0E10] mt-1">
              {statsData[3].label}
            </span>
            <span className="text-[10px] sm:text-xs text-[#646A73] mt-0.5">
              {statsData[3].sub}
            </span>
          </div>
        </div>

        {/* Central Bronze Ring Badge with Scales Icon */}
        <div className="absolute left-1/2 -bottom-[46px] -translate-x-1/2 z-30">
          <div className="bronze-scale-badge">
            <ScalesIcon size={34} className="text-[#8A6A3B]" />
          </div>
        </div>
      </div>

      {/* 2. PORTRAIT SHOWCASE WITH CONCAVE CIRCULAR NOTCH */}
      <div className="relative rounded-b-[28px] overflow-hidden shadow-2xl border-x border-b border-black/10 bg-[#161719]">
        {/* Concave circular notch cutout using SVG overlaid directly around the center scales badge */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-14 pointer-events-none z-20 flex justify-center"
        >
          {/* SVG Notch shape matching exactly the background tone */}
          <svg
            viewBox="0 0 240 60"
            className="w-[200px] h-[52px] fill-[#EEF0F2]"
            preserveAspectRatio="none"
          >
            {/* Smooth inverted bell / concave scoop */}
            <path d="M 0,0 L 40,0 C 70,0 80,48 120,48 C 160,48 170,0 200,0 L 240,0 L 240,2 L 0,2 Z" />
          </svg>
        </div>

        {/* Portrait Image Container */}
        <div className="relative w-full h-[420px] sm:h-[580px] md:h-[680px] lg:h-[760px]">
          <Image
            src="/images/portrait.jpg"
            alt={`${localizedName} - Advocate practicing at Punjab & Haryana High Court`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
            placeholder="blur"
            blurDataURL={PORTRAIT_BLUR_DATA_URL}
            className="object-cover object-[center_18%] sm:object-[center_20%] select-none pointer-events-none"
            priority
          />

          {/* Subtle dark gradient overlay preserving face clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/15 pointer-events-none" />

          {/* Floating Glass Pill Tags Over Torso / Suit Area */}
          <div className="absolute inset-x-0 bottom-20 sm:bottom-28 z-20 flex flex-col items-center gap-2 px-3 sm:px-4">
            {/* Top Tag */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setActiveIndex(0)}
                onMouseEnter={() => setActiveIndex(0)}
                className={`glass-portrait-pill cursor-pointer ${
                  activeIndex === 0 ? 'active' : 'inactive'
                }`}
              >
                {showcaseTags[0].label}
              </button>
            </div>

            {/* Middle Row: 2 Tags */}
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setActiveIndex(1)}
                onMouseEnter={() => setActiveIndex(1)}
                className={`glass-portrait-pill cursor-pointer ${
                  activeIndex === 1 ? 'active' : 'inactive'
                }`}
              >
                {showcaseTags[1].label}
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex(2)}
                onMouseEnter={() => setActiveIndex(2)}
                className={`glass-portrait-pill cursor-pointer ${
                  activeIndex === 2 ? 'active' : 'inactive'
                }`}
              >
                {showcaseTags[2].label}
              </button>
            </div>

            {/* Bottom Row: 2 Tags */}
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setActiveIndex(3)}
                onMouseEnter={() => setActiveIndex(3)}
                className={`glass-portrait-pill cursor-pointer ${
                  activeIndex === 3 ? 'active' : 'inactive'
                }`}
              >
                {showcaseTags[3].label}
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex(4)}
                onMouseEnter={() => setActiveIndex(4)}
                className={`glass-portrait-pill cursor-pointer ${
                  activeIndex === 4 ? 'active' : 'inactive'
                }`}
              >
                {showcaseTags[4].label}
              </button>
            </div>
          </div>

          {/* Bottom Bar: Caption Left, Read More Center, Counter Right */}
          <div className="absolute inset-x-0 bottom-0 h-14 sm:h-20 px-4 sm:px-10 flex items-center justify-between border-t border-white/10 bg-black/40 backdrop-blur-md z-20 text-white">
            {/* Left Caption */}
            <div className="text-[11px] sm:text-xs text-white/70 font-medium">
              <span>{tPortrait('caption')}</span>
            </div>

            {/* Center Read More Link */}
            <div className="flex items-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-[#C4A576] transition-colors"
              >
                <span>{tPortrait('readMore')}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C4A576]" />
              </Link>
            </div>

            {/* Right Counter */}
            <div className="text-xs sm:text-sm font-mono tracking-widest text-[#C4A576] font-bold">
              <span>{paddedCounter}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
