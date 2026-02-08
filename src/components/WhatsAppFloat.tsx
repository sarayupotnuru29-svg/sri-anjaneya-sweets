import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WhatsAppFloat = () => (
  <a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-float"
    aria-label="Order on WhatsApp"
  >
    <MessageCircle size={22} fill="white" />
    <span className="hidden sm:inline text-sm font-body font-medium">Order Now</span>
  </a>
);

export default WhatsAppFloat;
