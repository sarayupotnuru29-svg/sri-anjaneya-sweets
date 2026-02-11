import { Heart, Leaf, Users, Star } from "lucide-react";
import aboutImage from "@/assets/aboutpic.jpg";

const About = () => (
  <>
    {/* Hero */}
    <section className="bg-secondary py-12 lg:py-16">
      <div className="container mx-auto text-center space-y-3">
        <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
          Our <span className="text-primary">Story</span>
        </h1>
        <p className="text-muted-foreground font-body max-w-lg mx-auto text-sm">
          A tradition of taste, purity, and devotion from the heart of Tallarevu.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="py-12 lg:py-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <img
          src={aboutImage}
          alt="Inside Sri Anjaneya Sweet Stall"
          className="rounded-lg shadow-warm-lg w-full h-72 lg:h-96 object-cover"
          loading="lazy"
        />
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
            Sri Anjaneya <span className="text-primary">Sweet Stall</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Located beside the sacred Venkateswara Swamy Temple on the Main Road of Tallarevu,
            Sri Anjaneya Sweet Stall has been a beloved destination for authentic Andhra sweets.
          </p>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Our sweets are prepared fresh every day using pure ghee, jaggery, and the finest quality
            ingredients. We take pride in following traditional recipes that have been perfected over
            generations, ensuring every bite carries the warmth and flavour of home.
          </p>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            From festive celebrations to everyday indulgences, our wide range of sweets and snacks
            caters to every palate. Whether it's our signature Putharekulu, rich Mysorepak, or
            crunchy Chakodilu — each item is a testament to our dedication to quality.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-12 lg:py-16 bg-warm-cream">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground text-center mb-8">
          What We <span className="text-primary">Stand For</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Leaf, title: "Purity", desc: "100% pure ingredients — no artificial colours or preservatives." },
            { icon: Heart, title: "Tradition", desc: "Recipes passed down through generations, made the authentic way." },
            { icon: Star, title: "Quality", desc: "Only the finest ghee, milk, and dry fruits go into our sweets." },
            { icon: Users, title: "Community", desc: "Proudly serving the people of Tallarevu and beyond." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-lg p-5 shadow-warm text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
