'use client';

import React, { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

const LOCALES = [
  { code: 'en', label: 'EN', fullName: 'English' },
  { code: 'hi', label: 'हिं', fullName: 'हिन्दी' },
  { code: 'pa', label: 'ਪੰਜਾ', fullName: 'ਪੰਜਾਬੀ' },
] as const;

interface LanguageSwitchProps {
  variant?: 'navbar' | 'mobile' | 'footer';
}

export function LanguageSwitch({ variant = 'navbar' }: LanguageSwitchProps) {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (nextLocale: 'en' | 'hi' | 'pa') => {
    if (nextLocale === currentLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-1.5 p-1 bg-black/5 rounded-full border border-black/10">
        {LOCALES.map(({ code, label, fullName }) => {
          const isActive = currentLocale === code;
          return (
            <button
              key={code}
              onClick={() => handleSwitch(code)}
              disabled={isPending}
              className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[#8A6A3B] text-white shadow-sm'
                  : 'text-[#33373D] hover:text-[#0E0E10] hover:bg-black/5'
              }`}
            >
              {fullName}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Language Selector"
      className="inline-flex items-center bg-[#E2E5E8]/80 backdrop-blur-sm p-1 rounded-full border border-black/5 shadow-inner"
    >
      {LOCALES.map(({ code, label, fullName }) => {
        const isActive = currentLocale === code;
        return (
          <button
            key={code}
            onClick={() => handleSwitch(code)}
            disabled={isPending}
            title={fullName}
            aria-label={`Switch to ${fullName}`}
            aria-pressed={isActive}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-white text-[#0E0E10] shadow-sm transform scale-102'
                : 'text-[#646A73] hover:text-[#0E0E10] hover:bg-white/50'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
