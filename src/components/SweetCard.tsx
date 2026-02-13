// import { Plus } from "lucide-react";
// import { useCart } from "@/contexts/CartContext";
// import type { MenuItem } from "@/lib/menuData";
// import { toast } from "sonner";

// interface SweetCardProps {
//   item: MenuItem;
//   showPrices?: boolean;
// }

// const SweetCard = ({ item, showPrices = true }: SweetCardProps) => {
//   const { addToCart } = useCart();

//   const handleAdd = (weight: "250g" | "500g" | "1kg") => {
//     addToCart(item, weight);
//     toast.success(`${item.name} (${weight}) added to cart`);
//   };

//   return (
//     <div className="bg-card rounded-lg border border-border overflow-hidden shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 group">
//       {/* Image */}
//       <div className="relative aspect-square overflow-hidden">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           loading="lazy"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-3 lg:p-4">
//         <h3 className="font-display text-sm lg:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
//           {item.name}
//         </h3>
//         {item.telugu && (
//           <p className="text-xs text-muted-foreground mt-0.5">{item.telugu}</p>
//         )}

//         {/* Price + Add buttons */}
//         {showPrices && (
//           <div className="mt-3 space-y-1.5">
//             {(Object.entries(item.prices) as [("250g" | "500g" | "1kg"), number][]).map(([weight, price]) => (
//               <div key={weight} className="flex items-center justify-between">
//                 <span className="text-xs text-muted-foreground font-body">
//                   {weight} <span className="font-semibold text-foreground">₹{price}</span>
//                 </span>
//                 <button
//                   onClick={() => handleAdd(weight)}
//                   className="flex items-center gap-1 bg-saffron text-saffron-foreground text-xs font-medium px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity"
//                 >
//                   <Plus size={12} />
//                   ADD
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SweetCard;
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { MenuItem } from "@/lib/menuData";
import { toast } from "sonner";

interface SweetCardProps {
  item: MenuItem;
  showPrices?: boolean;
}

const SweetCard = ({ item, showPrices = true }: SweetCardProps) => {
  const { addToCart } = useCart();
  
  const [selectedWeight, setSelectedWeight] = useState<"250g" | "500g" | "1kg">("250g");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(item, selectedWeight);
    }
    toast.success(`${quantity}x ${item.name} added`);
    setQuantity(1);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
      {/* 1. Image Section - Aspect ratio changed to 3/2 to reduce height */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* 2. Content Section - Tightened padding */}
      <div className="p-2 lg:p-3 flex flex-col flex-1">
        <div className="mb-2">
          <h3 className="font-display text-xs lg:text-sm font-bold text-foreground leading-tight truncate">
            {item.name}
          </h3>
          {item.telugu && (
            <p className="text-[10px] text-muted-foreground truncate">{item.telugu}</p>
          )}
        </div>

        {showPrices && (
          <div className="flex flex-col gap-2">
            
            {/* 3. Compact Size Selector */}
            <div>
              <p className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Size</p>
              <div className="grid grid-cols-3 gap-1">
                {(Object.entries(item.prices) as [("250g" | "500g" | "1kg"), number][]).map(([weight, price]) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`flex flex-col items-center justify-center py-1 rounded-md border transition-all ${
                      selectedWeight === weight
                        ? "bg-saffron border-saffron text-saffron-foreground"
                        : "bg-background border-border text-muted-foreground text-[9px]"
                    }`}
                  >
                    <span className="text-[9px] font-bold">{weight}</span>
                    <span className="text-[8px] opacity-80">₹{price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Compact Quantity & Add Button Row */}
            <div className="flex items-center gap-2 mt-1">
              {/* Quantity */}
              <div className="flex flex-1 items-center justify-between bg-muted/40 rounded-lg p-0.5 border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-6 h-6 flex items-center justify-center rounded-md bg-card text-foreground"
                >
                  <Minus size={10} />
                </button>
                <span className="font-bold text-xs">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-6 h-6 flex items-center justify-center rounded-md bg-card text-foreground"
                >
                  <Plus size={10} />
                </button>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAddToCart}
                className="flex-[1.5] flex items-center justify-center gap-1 bg-saffron text-saffron-foreground font-bold py-2 rounded-lg text-[10px] hover:opacity-90 active:scale-95 transition-all"
              >
                ADD
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SweetCard;