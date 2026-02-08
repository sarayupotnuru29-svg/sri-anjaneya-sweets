import { useState } from "react";
import { menuData } from "@/lib/menuData";
import SweetCard from "@/components/SweetCard";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].name);

  return (
    <>
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container mx-auto text-center space-y-3">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto text-sm">
            Explore our wide range of traditional sweets and hot snacks. Order directly via WhatsApp!
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="container mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {menuData.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-xs font-body font-medium transition-colors ${
                  activeCategory === cat.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Items grid */}
          {menuData
            .filter((cat) => cat.name === activeCategory)
            .map((cat) => (
              <div key={cat.name}>
                <h2 className="text-xl font-display font-bold text-foreground mb-6">{cat.name}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
                  {cat.items.map((item) => (
                    <SweetCard key={item.id} item={item} showPrices />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default MenuPage;
