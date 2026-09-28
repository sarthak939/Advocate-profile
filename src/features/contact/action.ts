'use server';

import { enquirySchema, type EnquiryFormData } from './schema';
import { SITE_CONFIG } from '@/lib/site-config';

// In-memory rate limiting map for basic abuse prevention (keyed by IP/timestamp)
const submissionRateMap = new Map<string, number>();

export interface ActionResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

export async function submitEnquiryAction(data: unknown): Promise<ActionResponse> {
  try {
    // 1. Validate Form Data with Zod
    const validated = enquirySchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        errors: validated.error.flatten().fieldErrors,
      };
    }

    const { fullName, phone, email, matterType, message, locale, hp_website } =
      validated.data;

    // 2. Honeypot check: if filled by automated spambots, quietly succeed without sending
    if (hp_website && hp_website.length > 0) {
      return { success: true };
    }

    // 3. Basic IP / Email rate limit (max 1 submission per 15 seconds per email)
    const now = Date.now();
    const lastSub = submissionRateMap.get(email.toLowerCase());
    if (lastSub && now - lastSub < 15000) {
      return {
        success: false,
        message: 'Please wait a moment before submitting another inquiry.',
      };
    }
    submissionRateMap.set(email.toLowerCase(), now);

    // 4. Construct Notification Payload for Advocate (S.upnishad99@gmail.com)
    const notificationPayload = {
      to: SITE_CONFIG.contacts.email,
      from: 'enquiries@advupnishadsharma.com',
      subject: `New Legal Enquiry from ${fullName} [Locale: ${locale.toUpperCase()}]`,
      visitorLanguage: locale === 'hi' ? 'Hindi' : locale === 'pa' ? 'Punjabi' : 'English',
      details: {
        fullName,
        phone,
        email,
        matterType,
        message,
        submittedAt: new Date().toISOString(),
      },
    };

    // 5. Generate Localized Auto-Reply message for visitor
    const autoReplySubject =
      locale === 'hi'
        ? `कानूनी पूछताछ पावती | अधिवक्ता उपनिषद शर्मा`
        : locale === 'pa'
        ? `ਕਾਨੂੰਨੀ ਪੁੱਛਗਿੱਛ ਪੁਸ਼ਟੀ | ਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ`
        : `Enquiry Acknowledgement | Adv. Upnishad Sharma`;

    const autoReplyBody =
      locale === 'hi'
        ? `नमस्ते ${fullName} जी,\n\nअधिवक्ता उपनिषद शर्मा के कार्यालय से संपर्क करने के लिए धन्यवाद। आपका संदेश प्राप्त हो गया है।\n\nमामले का प्रकार: ${matterType}\n\nन्यायालय की व्यस्तताओं के अनुसार हम यथाशीघ्र आपसे संपर्क करेंगे। यदि मामला अत्यावश्यक है, तो आप +91 70560 99998 पर WhatsApp संदेश भी छोड़ सकते हैं।\n\nसादर,\nअधिवक्ता उपनिषद शर्मा चैंबर्स`
        : locale === 'pa'
        ? `ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ${fullName} ਜੀ,\n\nਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ ਦੇ ਚੈਂਬਰ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਲਈ ਧੰਨਵਾਦ। ਤੁਹਾਡਾ ਸੁਨੇਹਾ ਮਿਲ ਗਿਆ ਹੈ।\n\nਕੇਸ: ${matterType}\n\nਅਸੀਂ ਜਲਦੀ ਹੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ। ਜੇਕਰ ਮਾਮਲਾ ਜ਼ਰੂਰੀ ਹੈ, ਤਾਂ ਤੁਸੀਂ +91 70560 99998 'ਤੇ WhatsApp ਸੁਨੇਹਾ ਭੇਜ ਸਕਦੇ ਹੋ।\n\nਸਤਿਕਾਰ ਸਹਿਤ,\nਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ ਚੈਂਬਰਜ਼`
        : `Dear ${fullName},\n\nThank you for reaching out to the Chambers of Adv. Upnishad Sharma. Your inquiry regarding "${matterType}" has been received.\n\nOur office will review the details and contact you shortly. If your matter is time-sensitive or involves an upcoming court date, please leave a direct WhatsApp message at +91 70560 99998.\n\nSincerely,\nChambers of Adv. Upnishad Sharma`;

    // Log UTF-8 clean dispatch (in production: connect Resend / SendGrid / Postmark with process.env.RESEND_API_KEY)
    console.log('[ENQUIRY_DISPATCH] To Advocate:', JSON.stringify(notificationPayload, null, 2));
    console.log('[AUTOREPLY_DISPATCH] Subject:', autoReplySubject);
    console.log('[AUTOREPLY_DISPATCH] Body preview:', autoReplyBody);

    return {
      success: true,
      message: 'Enquiry submitted successfully.',
    };
  } catch (error) {
    console.error('[ENQUIRY_ERROR]:', error);
    return {
      success: false,
      message: 'Unable to submit enquiry. Please call directly or message on WhatsApp.',
    };
  }
}
