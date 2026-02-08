import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { WHATSAPP_BASE_URL } from "@/lib/whatsapp";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    const itemsList = items
      .map((i) => `• ${i.menuItem.name} (${i.weight}) x${i.quantity} = ₹${i.menuItem.prices[i.weight] * i.quantity}`)
      .join("\n");
    const msg = encodeURIComponent(
      `Hello Sri Anjaneya Sweet Stall, I would like to place an order:\n\n${itemsList}\n\nTotal: ₹${totalPrice}\n\nPlease confirm availability and delivery.`
    );
    window.open(`${WHATSAPP_BASE_URL}?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-foreground/40 z-50" onClick={() => setIsCartOpen(false)} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-2xl flex flex-col animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-lg font-bold text-foreground">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-1 text-muted-foreground hover:text-foreground">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-body text-sm">Your cart is empty</p>
              <p className="text-xs text-muted-foreground mt-1">Add some delicious sweets!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.menuItem.id}-${item.weight}`} className="flex gap-3 bg-secondary rounded-lg p-3">
                <img
                  src={item.menuItem.image}
                  alt={item.menuItem.name}
                  className="w-16 h-16 rounded-md object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-body text-sm font-medium text-foreground truncate">{item.menuItem.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.weight} — ₹{item.menuItem.prices[item.weight]}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <button
                      onClick={() => updateQuantity(item.menuItem.id, item.weight, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center rounded bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.menuItem.id, item.weight, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center rounded bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.menuItem.id, item.weight)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                  <span className="text-sm font-semibold text-foreground">
                    ₹{item.menuItem.prices[item.weight] * item.quantity}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground">Total</span>
              <span className="font-display text-xl font-bold text-foreground">₹{totalPrice}</span>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-primary-foreground font-body font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <MessageCircle size={18} />
              Order via WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="w-full text-xs text-muted-foreground hover:text-destructive transition-colors py-1"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
