import { Link } from "react-router-dom";
import { Phone, Mail, Heart } from "lucide-react";
import logo from "@/assets/apple-touch-icon.png";

const Footer = () => {
  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#f2efe6] text-[#2d3e2d] py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top Section: Branding, Links, and Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-8">
          
          {/* Branding Left */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img 
              src={logo} 
              alt="Sri Anjaneya Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-primary/10 object-contain" 
            />
            <div className="flex flex-col">
              <h3 className="font-display text-lg md:text-xl font-bold text-[#1a2e1a] leading-tight whitespace-nowrap">
                Sri Anjaneya
              </h3>
              <p className="text-[10px] md:text-xs italic text-gray-600 tracking-wide whitespace-nowrap">
                Pure Tradition. Pure Taste.
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center">
            {/* Title in Black */}
            <h4 className="font-display text-xs font-bold mb-3 uppercase tracking-widest text-black whitespace-nowrap">
              Quick Links
            </h4>
            <ul className="flex flex-row items-center justify-center gap-4 md:gap-6">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/menu", label: "Menu" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    onClick={scrollToTop}
                    /* Links in Orange */
                    className="text-[10px] md:text-xs font-bold uppercase tracking-tight text-orange-600 hover:text-black transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Icons Right */}
          <div className="flex gap-4 justify-center md:justify-end">
            <a 
              href="tel:9912528181" 
              title="Call Us"
              /* Icon and Border in Orange */
              className="p-2 md:p-3 bg-white rounded-full shadow-sm text-orange-600 border border-orange-100 hover:bg-orange-600 hover:text-white transition-all"
            >
              <Phone size={18} className="md:w-5 md:h-5" />
            </a>
            <a 
              href="mailto:srianjaneyasweetstall@gmail.com" 
              title="Email Us"
              /* Icon and Border in Orange */
              className="p-2 md:p-3 bg-white rounded-full shadow-sm text-orange-600 border border-orange-100 hover:bg-orange-600 hover:text-white transition-all"
            >
              <Mail size={18} className="md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        {/* Thin Horizontal Divider */}
        <div className="w-full h-[1px] bg-gray-300 mb-6 opacity-60"></div>

        {/* Bottom Section: Copyright and Attribution */}
        <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
          <p className="text-xs md:text-sm text-center">
            © {new Date().getFullYear()} Sri Anjaneya Sweet Stall. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-[11px] md:text-xs mt-1">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 mx-0.5" />
            <span>by</span>
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-[#2d3e2d] hover:text-orange-600 transition-colors"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-3.5 w-3.5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;