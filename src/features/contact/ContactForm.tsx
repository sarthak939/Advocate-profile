'use client';

import React, { useState, useTransition } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SITE_CONFIG } from '@/lib/site-config';
import { submitEnquiryAction, type ActionResponse } from './action';
import {
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ShieldAlert,
  Loader2,
} from 'lucide-react';

export function ContactForm() {
  const t = useTranslations('contactPage');
  const locale = useLocale() as 'en' | 'hi' | 'pa';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    matterType: '',
    message: '',
    consent: false,
    hp_website: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setErrors({});

    // Client-side quick checks
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Valid email is required.';
    if (!formData.matterType) newErrors.matterType = 'Please select a practice area.';
    if (!formData.message.trim() || formData.message.length < 10)
      newErrors.message = 'Please provide brief details (min 10 characters).';
    if (!formData.consent)
      newErrors.consent = 'Please confirm voluntary consultation consent.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    startTransition(async () => {
      const payload = {
        ...formData,
        locale,
      };

      const res: ActionResponse = await submitEnquiryAction(payload);
      if (res.success) {
        setStatus('success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          matterType: '',
          message: '',
          consent: false,
          hp_website: '',
        });
      } else {
        setStatus('error');
        setServerMessage(res.message || t('errorMessage'));
        if (res.errors) {
          const fieldErr: Record<string, string> = {};
          for (const [k, v] of Object.entries(res.errors)) {
            if (v && v.length > 0) fieldErr[k] = v[0];
          }
          setErrors(fieldErr);
        }
      }
    });
  };

  return (
    <div className="bg-white rounded-[32px] border border-black/8 p-6 sm:p-10 lg:p-12 shadow-sm">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0E0E10] tracking-tight mb-2">
          {t('formTitle')}
        </h2>
        <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
          <span>{t('confidentialNotice')}</span>
        </div>
      </div>

      {status === 'success' ? (
        <div className="p-8 rounded-[24px] bg-[#EEF0F2] border border-[#8A6A3B]/30 text-center space-y-4 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-[#8A6A3B]/10 text-[#8A6A3B] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#0E0E10]">
            {t('successTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-[#646A73] max-w-md mx-auto leading-relaxed">
            {t('successMessage')}
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="btn-bronze text-xs py-2 px-5 mt-2"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Honeypot field (hidden from real users) */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="hp_website">Do not fill this</label>
            <input
              type="text"
              id="hp_website"
              name="hp_website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.hp_website}
              onChange={handleChange}
            />
          </div>

          {/* Name & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold text-[#0E0E10] uppercase tracking-wider mb-1.5"
              >
                {t('fullName')} *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t('fullNamePlaceholder')}
                className={`w-full px-4 py-3 rounded-2xl bg-[#EEF0F2]/70 border text-xs sm:text-sm text-[#0E0E10] placeholder:text-[#8E959E] focus:outline-none focus:ring-2 focus:ring-[#8A6A3B]/40 transition-all ${
                  errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-black/8'
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-[#0E0E10] uppercase tracking-wider mb-1.5"
              >
                {t('phone')} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('phonePlaceholder')}
                className={`w-full px-4 py-3 rounded-2xl bg-[#EEF0F2]/70 border text-xs sm:text-sm text-[#0E0E10] placeholder:text-[#8E959E] focus:outline-none focus:ring-2 focus:ring-[#8A6A3B]/40 transition-all ${
                  errors.phone ? 'border-red-500 bg-red-50/30' : 'border-black/8'
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Email & Matter Type Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-[#0E0E10] uppercase tracking-wider mb-1.5"
              >
                {t('email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t('emailPlaceholder')}
                className={`w-full px-4 py-3 rounded-2xl bg-[#EEF0F2]/70 border text-xs sm:text-sm text-[#0E0E10] placeholder:text-[#8E959E] focus:outline-none focus:ring-2 focus:ring-[#8A6A3B]/40 transition-all ${
                  errors.email ? 'border-red-500 bg-red-50/30' : 'border-black/8'
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="matterType"
                className="block text-xs font-bold text-[#0E0E10] uppercase tracking-wider mb-1.5"
              >
                {t('matterType')} *
              </label>
              <select
                id="matterType"
                name="matterType"
                required
                value={formData.matterType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-2xl bg-[#EEF0F2]/70 border text-xs sm:text-sm text-[#0E0E10] focus:outline-none focus:ring-2 focus:ring-[#8A6A3B]/40 transition-all ${
                  errors.matterType ? 'border-red-500 bg-red-50/30' : 'border-black/8'
                }`}
              >
                <option value="">{t('matterTypeSelect')}</option>
                {SITE_CONFIG.practiceAreas.map((pa) => (
                  <option key={pa.id} value={pa.title[locale] || pa.title.en}>
                    {pa.title[locale] || pa.title.en}
                  </option>
                ))}
              </select>
              {errors.matterType && (
                <p className="text-[11px] text-red-600 mt-1">{errors.matterType}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-[#0E0E10] uppercase tracking-wider mb-1.5"
            >
              {t('message')} *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={t('messagePlaceholder')}
              className={`w-full px-4 py-3 rounded-2xl bg-[#EEF0F2]/70 border text-xs sm:text-sm text-[#0E0E10] placeholder:text-[#8E959E] focus:outline-none focus:ring-2 focus:ring-[#8A6A3B]/40 transition-all resize-y ${
                errors.message ? 'border-red-500 bg-red-50/30' : 'border-black/8'
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 rounded text-[#8A6A3B] focus:ring-[#8A6A3B]"
              />
              <span className="text-[11px] sm:text-xs text-[#646A73] leading-relaxed">
                {t('consentText')}
              </span>
            </label>
            {errors.consent && (
              <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>
            )}
          </div>

          {/* Error Alert */}
          {status === 'error' && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{serverMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isPending}
              className="btn-bronze w-full py-3.5 text-xs sm:text-sm justify-center cursor-pointer disabled:opacity-70"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t('submitting')}</span>
                </>
              ) : (
                <>
                  <span>{t('submitBtn')}</span>
                  <span className="arrow-icon-circle">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
