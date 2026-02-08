import { Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { MenuItem } from "@/lib/menuData";
import { toast } from "sonner";

interface SweetCardProps {
  item: MenuItem;
  showPrices?: boolean;
}

const SweetCard = ({ item, showPrices = true }: SweetCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = (weight: "250g" | "500g" | "1kg") => {
    addToCart(item, weight);
    toast.success(`${item.name} (${weight}) added to cart`);
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-3 lg:p-4">
        <h3 className="font-display text-sm lg:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
          {item.name}
        </h3>
        {item.telugu && (
          <p className="text-xs text-muted-foreground mt-0.5">{item.telugu}</p>
        )}

        {/* Price + Add buttons */}
        {showPrices && (
          <div className="mt-3 space-y-1.5">
            {(Object.entries(item.prices) as [("250g" | "500g" | "1kg"), number][]).map(([weight, price]) => (
              <div key={weight} className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-body">
                  {weight} <span className="font-semibold text-foreground">₹{price}</span>
                </span>
                <button
                  onClick={() => handleAdd(weight)}
                  className="flex items-center gap-1 bg-saffron text-saffron-foreground text-xs font-medium px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity"
                >
                  <Plus size={12} />
                  ADD
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SweetCard;
