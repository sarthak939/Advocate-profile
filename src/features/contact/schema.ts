import { z } from 'zod';

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must be under 100 characters.' }),
  phone: z
    .string()
    .min(8, { message: 'Please enter a valid phone number.' })
    .max(20, { message: 'Phone number is too long.' })
    .regex(/^[0-9+\-\s()]+$/, { message: 'Invalid phone number format.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  matterType: z
    .string()
    .min(2, { message: 'Please select a relevant practice area.' }),
  message: z
    .string()
    .min(10, { message: 'Please provide at least a brief summary of the matter (min 10 characters).' })
    .max(2000, { message: 'Message is too long (max 2000 characters).' }),
  consent: z
    .boolean()
    .refine((val) => val === true, { message: 'You must confirm that you are seeking information voluntarily.' }),
  locale: z.enum(['en', 'hi', 'pa']).default('en'),
  // Honeypot field for bot protection (must be left empty)
  hp_website: z.string().max(0, { message: 'Bot detected.' }).optional().or(z.literal('')),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
