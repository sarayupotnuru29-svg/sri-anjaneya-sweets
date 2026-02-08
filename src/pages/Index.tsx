import { Link } from "react-router-dom";
import { MessageCircle, Shield, Heart, Award, ChevronRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { popularSweets } from "@/lib/menuData";
import SweetCard from "@/components/SweetCard";
import heroImage from "@/assets/hero-sweets.jpg";
import aboutImage from "@/assets/about-shop.jpg";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-primary-foreground space-y-6 animate-fade-in-up">
              <span className="inline-block bg-primary/20 border border-primary-foreground/20 text-primary-foreground text-xs font-body font-medium px-3 py-1 rounded-full">
                ✨ Tallarevu's Finest Sweet Stall
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold leading-tight">
                Pure Traditional Sweets Made with{" "}
                <span className="text-gradient-warm">Devotion</span>
              </h1>
              <p className="text-base lg:text-lg text-primary-foreground/80 max-w-lg font-body leading-relaxed">
                Experience the authentic taste of Andhra sweets, handcrafted with pure ingredients
                and generations of expertise at Sri Anjaneya Sweet Stall.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg shadow-warm-lg hover:scale-105 transition-transform text-sm"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-body font-medium px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm"
                >
                  View Menu <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-20 bg-warm-cream">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={aboutImage}
            alt="Sri Anjaneya Sweet Stall Interior"
            className="rounded-lg shadow-warm-lg w-full h-72 lg:h-96 object-cover"
            loading="lazy"
          />
          <div className="space-y-5">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              A Legacy of <span className="text-primary">Taste & Tradition</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Nestled beside the revered Venkateswara Swamy Temple in Tallarevu, Sri Anjaneya Sweet Stall
              has been serving authentic Andhra sweets to devotees and locals alike. Every sweet is made
              fresh daily with pure ghee, jaggery, and the finest ingredients.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline text-sm"
            >
              Read Our Story <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Sweets */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Our <span className="text-primary">Popular Sweets</span>
            </h2>
            <p className="text-muted-foreground font-body mt-2">Loved by thousands, made with devotion</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-6">
            {popularSweets.map((item) => (
              <SweetCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              View Full Menu <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground text-center mb-10">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Pure Ingredients", desc: "We use only pure ghee, fresh milk, and premium quality ingredients — no shortcuts, no additives." },
              { icon: Heart, title: "Made with Love", desc: "Every sweet is handcrafted with care following time-honored traditional recipes passed down through generations." },
              { icon: Award, title: "Trusted Quality", desc: "Serving Tallarevu for years, our commitment to hygiene, freshness, and taste has earned us loyal customers." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-lg p-6 shadow-warm text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 lg:py-16 bg-gradient-warm">
        <div className="container mx-auto text-center space-y-4">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary-foreground">
            Craving Traditional Sweets?
          </h2>
          <p className="text-primary-foreground/80 font-body max-w-md mx-auto">
            Place your order instantly via WhatsApp. Fresh sweets delivered with love!
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-body font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform text-sm"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;
