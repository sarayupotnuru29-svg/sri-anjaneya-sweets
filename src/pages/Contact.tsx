import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Contact = () => (
  <>
    <section className="bg-secondary py-12 lg:py-16">
      <div className="container mx-auto text-center space-y-3">
        <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-muted-foreground font-body max-w-lg mx-auto text-sm">
          Reach out to us for orders, inquiries, or bulk bookings.
        </p>
      </div>
    </section>

    <section className="py-10 lg:py-14">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-foreground">Get in Touch</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-card p-4 rounded-lg shadow-warm">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground font-body">9912528181</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-4 rounded-lg shadow-warm">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground font-body">srianjaneyasweetstall@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-4 rounded-lg shadow-warm">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">Address</h3>
                <p className="text-sm text-muted-foreground font-body">
                  Beside Venkateswara Swamy Temple,<br />
                  Main Road, Tallarevu – 533463
                </p>
              </div>
            </div>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <MessageCircle size={18} />
            Message us on WhatsApp
          </a>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-warm-lg h-72 lg:h-auto min-h-[300px]">
          <iframe
            title="Sri Anjaneya Sweet Stall Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1!2d82.27!3d16.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTallarevu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </>
);

export default Contact;
