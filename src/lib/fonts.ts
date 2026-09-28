import { Manrope, Noto_Sans_Devanagari, Noto_Sans_Gurmukhi } from 'next/font/google';

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans-en',
  display: 'swap',
});

export const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-hi',
  display: 'swap',
});

export const notoSansGurmukhi = Noto_Sans_Gurmukhi({
  subsets: ['gurmukhi'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-pa',
  display: 'swap',
});

export function getFontForLocale(locale: string) {
  switch (locale) {
    case 'hi':
      return {
        className: notoSansDevanagari.className,
        variable: notoSansDevanagari.variable,
        fontFamily: 'var(--font-sans-hi), sans-serif',
      };
    case 'pa':
      return {
        className: notoSansGurmukhi.className,
        variable: notoSansGurmukhi.variable,
        fontFamily: 'var(--font-sans-pa), sans-serif',
      };
    case 'en':
    default:
      return {
        className: manrope.className,
        variable: manrope.variable,
        fontFamily: 'var(--font-sans-en), sans-serif',
      };
  }
}
