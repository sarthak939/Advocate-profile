import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Renders email securely to protect against basic bot scraping
 */
export function obfuscateEmail(user: string, domain: string) {
  return `${user}@${domain}`;
}
