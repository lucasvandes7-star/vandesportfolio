export const WHATSAPP_NUMBER = '5551984114248';
export const WHATSAPP_DISPLAY = '(51) 98411-4248';
export const EMAIL = 'vandrix2026@gmail.com';

/** Monta o link do WhatsApp com uma mensagem inicial. */
export function whatsappLink(
  message = 'Oi! Vim pelo site e quero falar sobre um projeto.'
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
