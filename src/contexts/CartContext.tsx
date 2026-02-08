import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { MenuItem } from "@/lib/menuData";

export interface CartItem {
  menuItem: MenuItem;
  weight: "250g" | "500g" | "1kg";
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (menuItem: MenuItem, weight: "250g" | "500g" | "1kg") => void;
  removeFromCart: (itemId: string, weight: string) => void;
  updateQuantity: (itemId: string, weight: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((menuItem: MenuItem, weight: "250g" | "500g" | "1kg") => {
    setItems((prev) => {
      const existing = prev.find((i) => i.menuItem.id === menuItem.id && i.weight === weight);
      if (existing) {
        return prev.map((i) =>
          i.menuItem.id === menuItem.id && i.weight === weight
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { menuItem, weight, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((itemId: string, weight: string) => {
    setItems((prev) => prev.filter((i) => !(i.menuItem.id === itemId && i.weight === weight)));
  }, []);

  const updateQuantity = useCallback((itemId: string, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId, weight);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.menuItem.id === itemId && i.weight === weight ? { ...i, quantity } : i
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.menuItem.prices[i.weight] * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
