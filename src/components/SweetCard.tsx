import { MessageCircle } from "lucide-react";
import { getWhatsAppOrderLink } from "@/lib/whatsapp";
import type { MenuItem } from "@/lib/menuData";

interface SweetCardProps {
  item: MenuItem;
  showPrices?: boolean;
}

const SweetCard = ({ item, showPrices = false }: SweetCardProps) => (
  <div className="bg-card rounded-lg border border-border p-4 shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 group">
    <div className="mb-3">
      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
        {item.name}
      </h3>
      {item.telugu && (
        <p className="text-xs text-muted-foreground mt-0.5">{item.telugu}</p>
      )}
    </div>

    {showPrices && (
      <div className="flex gap-2 mb-3 flex-wrap">
        {Object.entries(item.prices).map(([weight, price]) => (
          <span
            key={weight}
            className="text-xs bg-secondary rounded-full px-2.5 py-1 text-secondary-foreground"
          >
            {weight}: ₹{price}
          </span>
        ))}
      </div>
    )}

    <a
      href={getWhatsAppOrderLink(item.name)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-medium px-3 py-2 rounded-md hover:opacity-90 transition-opacity w-full justify-center"
    >
      <MessageCircle size={14} />
      Order on WhatsApp
    </a>
  </div>
);

export default SweetCard;
