import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Contact = () => {
  const address = "Beside venkateswar swamy temple, main road, tallarevu, 533463";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="bg-orange-50 py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto px-2">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 mb-1">
            Get In Touch
          </h4>
          <h1 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600 font-body max-w-xl mx-auto text-[10px] md:text-xs">
            Have questions or want to place a bulk order? Reach out to us!
          </p>
        </div>

        {/* Contact Cards - Forced Single Row on Desktop */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3 md:gap-4">
          
          {/* Visit Us */}
          <div className="bg-white border border-orange-100 p-4 rounded-xl shadow-sm flex flex-col items-center text-center flex-1 min-w-[150px] max-w-[280px]">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mb-3">
              <MapPin size={18} />
            </div>
            <h3 className="text-xs font-bold font-display text-gray-900 mb-1">Visit Us</h3>
            <p className="text-[10px] text-gray-500 leading-tight mb-3 min-h-[32px]">
              Beside Venkateswara Temple, Main Road, Tallarevu
            </p>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-600 text-[10px] font-bold hover:underline mt-auto"
            >
              Open Maps →
            </a>
          </div>

          {/* Call Us */}
          <div className="bg-white border border-orange-100 p-4 rounded-xl shadow-sm flex flex-col items-center text-center flex-1 min-w-[150px] max-w-[280px]">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mb-3">
              <Phone size={18} />
            </div>
            <h3 className="text-xs font-bold font-display text-gray-900 mb-1">Call Us</h3>
            <p className="text-[11px] font-semibold text-gray-800 mb-3 min-h-[32px] flex items-center">
              +91 99125 28181
            </p>
            <a 
              href="tel:9912528181" 
              className="text-orange-600 text-[10px] font-bold hover:underline mt-auto"
            >
              Call Now →
            </a>
          </div>

          {/* Email Us */}
          <div className="bg-white border border-orange-100 p-4 rounded-xl shadow-sm flex flex-col items-center text-center flex-1 min-w-[150px] max-w-[280px]">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white mb-3">
              <Mail size={18} />
            </div>
            <h3 className="text-xs font-bold font-display text-gray-900 mb-1">Email Us</h3>
            <p className="text-[10px] text-gray-500 mb-3 min-h-[32px] flex items-center break-all px-2">
              srianjaneyasweetstall@gmail.com
            </p>
            <a 
              href="mailto:srianjaneyasweetstall@gmail.com" 
              className="text-orange-600 text-[10px] font-bold hover:underline mt-auto"
            >
              Send Email →
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white border border-orange-100 p-4 rounded-xl shadow-sm flex flex-col items-center text-center flex-1 min-w-[150px] max-w-[280px]">
            <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center text-white mb-3">
              <MessageCircle size={18} />
            </div>
            <h3 className="text-xs font-bold font-display text-gray-900 mb-1">WhatsApp</h3>
            <p className="text-[10px] text-gray-500 mb-3 min-h-[32px] flex items-center">
              Message for quick orders!
            </p>
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-600 text-[10px] font-bold hover:underline mt-auto"
            >
              Chat Now →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;