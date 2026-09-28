'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function StatementSection() {
  const tHero = useTranslations('hero');
  const t = useTranslations('statement');
  const locale = useLocale();
  const containerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const watermarkText = tHero('watermark');
  const fullStatement = `${t('p1')} ${t('p2')}`;

  // Split strictly on spaces (safe for Devanagari & Gurmukhi)
  const words = fullStatement.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Watermark drift on scroll
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { y: 40, opacity: 0.02 },
          {
            y: -30,
            opacity: 0.05,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'bottom 40%',
              scrub: true,
            },
          }
        );
      }

      // 2. Word-by-word text scrub reveal
      const wordElements = containerRef.current?.querySelectorAll('.statement-word');
      if (wordElements && wordElements.length > 0) {
        gsap.fromTo(
          wordElements,
          { opacity: 0.22, color: '#A0A6B1' },
          {
            opacity: 1,
            color: '#0E0E10',
            stagger: 0.03,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: 'top 75%',
              end: 'bottom 45%',
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [words.length]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Giant Faint Ghost Watermark Word Spanning Width Behind */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="ghost-watermark text-[16vw] font-black tracking-widest text-[#0E0E10]/[0.038] uppercase">
          {watermarkText}
        </span>
      </div>

      {/* Word-by-word Revealing Statement Text */}
      <div
        ref={textContainerRef}
        className="relative z-10 max-w-3xl mx-auto text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-medium leading-[1.6] sm:leading-[1.55] tracking-tight"
      >
        <p className="select-text">
          {words.map((word, idx) => {
            // Emphasize key terms
            const isEmphasized =
              word.includes('dedication') ||
              word.includes('precision') ||
              word.includes('rights') ||
              word.includes('समर्पण') ||
              word.includes('अधिकारों') ||
              word.includes('ਸਮਰਪਣ') ||
              word.includes('ਹੱਕਾਂ');

            return (
              <span
                key={idx}
                className={`statement-word inline-block mr-1.5 sm:mr-2 transition-colors duration-200 ${
                  isEmphasized ? 'font-bold text-[#0E0E10]' : ''
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
