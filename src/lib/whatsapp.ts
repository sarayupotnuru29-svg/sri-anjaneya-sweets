export const WHATSAPP_NUMBER = "919912528181";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DEFAULT_MESSAGE = "Hello Sri Anjaneya Sweet Stall, I would like to place an order.";

export function getWhatsAppLink(message?: string) {
  const msg = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `${WHATSAPP_BASE_URL}?text=${msg}`;
}

export function getWhatsAppOrderLink(itemName: string) {
  const msg = encodeURIComponent(
    `Hello Sri Anjaneya Sweet Stall, I would like to order ${itemName}. Please let me know the availability.`
  );
  return `${WHATSAPP_BASE_URL}?text=${msg}`;
}
