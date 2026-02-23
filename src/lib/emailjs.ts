// EmailJS Configuration
// Sign up at https://www.emailjs.com/ and replace these values
// 1. Create an account → Add Email Service (Gmail/Outlook) → Get Service ID
// 2. Create Email Template → Get Template ID
// 3. Account → General → Copy Public Key

export const emailjsConfig = {
  serviceId: "service_thenexturl",     // Replace with your EmailJS Service ID
  templateId: "template_contact",       // Replace with your EmailJS Template ID
  discountTemplateId: "template_discount", // Replace with your discount template ID
  publicKey: "YOUR_PUBLIC_KEY",         // Replace with your EmailJS Public Key
} as const;
