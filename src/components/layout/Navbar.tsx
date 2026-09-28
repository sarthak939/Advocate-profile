'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/site-config';
import { LanguageSwitch } from './LanguageSwitch';
import { Menu, X, ArrowUpRight, Scale, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/SocialIcons';

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileOpen]);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/practice-areas', label: t('practiceAreas') },
    { href: '/about', label: t('about') },
    { href: '/courts', label: t('courts') },
    { href: '/insights', label: t('insights') },
    { href: '/contact', label: t('contact') },
  ];

  const localizedName =
    locale === 'hi'
      ? SITE_CONFIG.name.hi
      : locale === 'pa'
      ? SITE_CONFIG.name.pa
      : SITE_CONFIG.name.en;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#EEF0F2]/85 backdrop-blur-md border-b border-black/8 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left: Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-[#0E0E10] focus:outline-none"
            aria-label="Adv. Upnishad Sharma - Home"
          >
            <div className="w-8 h-8 rounded-full bg-[#8A6A3B]/10 border border-[#8A6A3B]/30 flex items-center justify-center text-[#8A6A3B] transition-transform duration-300 group-hover:scale-105">
              <Scale className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight leading-none group-hover:text-[#8A6A3B] transition-colors">
                {localizedName}
              </span>
              <span className="text-[10px] text-[#646A73] uppercase tracking-wider font-semibold mt-0.5 hidden sm:block">
                Advocate · High Court
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Pill Container */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 bg-[#E2E5E8]/75 backdrop-blur-md p-1 rounded-full border border-black/5 shadow-inner shrink-0"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center justify-center px-3.5 xl:px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#0E0E10] shadow-sm'
                      : 'text-[#444A54] hover:text-[#0E0E10] hover:bg-white/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Language Switch + Consultation CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <LanguageSwitch variant="navbar" />

            <Link href="/contact" className="btn-bronze text-xs py-2 px-4.5 whitespace-nowrap">
              <span>{t('bookConsultation')}</span>
              <span className="arrow-icon-circle">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Right: Language + Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitch variant="navbar" />
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-full bg-[#E2E5E8] text-[#0E0E10] focus:outline-none"
              aria-label={isMobileOpen ? t('close') : t('menu')}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      {isMobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#EEF0F2] flex flex-col p-6 overflow-y-auto animate-fade-in"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
            <Link
              href="/"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-[#8A6A3B]/10 flex items-center justify-center text-[#8A6A3B]">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-[#0E0E10]">
                {localizedName}
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-full bg-[#E2E5E8] text-[#0E0E10]"
              aria-label={t('close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Language Selector Mobile */}
          <div className="mb-6">
            <span className="text-[11px] font-bold text-[#646A73] uppercase tracking-wider block mb-2">
              {t('language')}
            </span>
            <LanguageSwitch variant="mobile" />
          </div>

          {/* Nav Links */}
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2 mb-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-bold transition-all ${
                    isActive
                      ? 'bg-[#8A6A3B] text-white shadow-sm'
                      : 'bg-white/80 text-[#0E0E10] hover:bg-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="mt-auto space-y-3 pt-6 border-t border-black/10">
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="btn-bronze w-full py-3.5 text-center text-sm"
            >
              <span>{t('bookConsultation')}</span>
              <span className="arrow-icon-circle">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>

            <a
              href={`tel:${SITE_CONFIG.contacts.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white text-[#0E0E10] text-xs font-semibold border border-black/10 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#8A6A3B]" />
              <span>{SITE_CONFIG.contacts.phone}</span>
            </a>

            <a
              href={SITE_CONFIG.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white hover:bg-[#0A66C2] text-[#33373D] hover:text-white text-xs font-semibold border border-black/10 transition-colors shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <div className="flex items-start gap-2 pt-2 text-[11px] text-[#646A73]">
              <MapPin className="w-3.5 h-3.5 text-[#8A6A3B] shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.chambers.shortAddress[locale as 'en' | 'hi' | 'pa'] || SITE_CONFIG.chambers.shortAddress.en}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
