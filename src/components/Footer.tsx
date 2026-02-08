import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-deep-brown text-secondary py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h3 className="font-display text-lg font-bold">Sri Anjaneya Sweet Stall</h3>
        </div>
        <p className="text-sm text-secondary/70 leading-relaxed">
          Serving pure traditional sweets made with devotion, quality ingredients, and generations of expertise.
        </p>
      </div>

      <div>
        <h4 className="font-display text-base font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/menu", label: "Menu" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-sm text-secondary/70 hover:text-primary transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-base font-semibold mb-4">Contact Us</h4>
        <ul className="space-y-3 text-sm text-secondary/70">
          <li className="flex items-start gap-2">
            <Phone size={16} className="mt-0.5 text-primary shrink-0" />
            9912528181
          </li>
          <li className="flex items-start gap-2">
            <Mail size={16} className="mt-0.5 text-primary shrink-0" />
            srianjaneyasweetstall@gmail.com
          </li>
          <li className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
            Beside Venkateswara Swamy Temple, Main Road, Tallarevu – 533463
          </li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto mt-8 pt-6 border-t border-secondary/20 text-center text-xs text-secondary/50">
      © {new Date().getFullYear()} Sri Anjaneya Sweet Stall. All rights reserved.
    </div>
  </footer>
);

export default Footer;
