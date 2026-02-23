// EmailJS Configuration — reads from .env.local
// Set these in .env.local (or Vercel Environment Variables for production):
//   NEXT_PUBLIC_EMAILJS_SERVICE_ID
//   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
//   NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID
//   NEXT_PUBLIC_EMAILJS_DISCOUNT_TEMPLATE_ID
//   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  autoreplyTemplateId: process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || "",
  discountTemplateId: process.env.NEXT_PUBLIC_EMAILJS_DISCOUNT_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
} as const;
