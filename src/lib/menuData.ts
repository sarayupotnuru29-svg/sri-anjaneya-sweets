import kajaImg from "@/assets/sweets/kaja.jpg";
import mysorepakImg from "@/assets/sweets/mysorepak.jpg";
import ladduImg from "@/assets/sweets/laddu.jpg";
import jangiriImg from "@/assets/sweets/jangiri.jpg";
import puthaRekuluImg from "@/assets/sweets/putharekulu.jpg";
import sunnundaluImg from "@/assets/sweets/sunnundalu.jpg";
import barfiImg from "@/assets/sweets/barfi.jpg";
import gavvaluImg from "@/assets/sweets/gavvalu.jpg";
import bobbatluImg from "@/assets/sweets/bobbatlu.jpg";
import chakodiluImg from "@/assets/sweets/chakodilu.jpg";
import boondiImg from "@/assets/sweets/boondi.jpg";
import murukkuImg from "@/assets/sweets/murukku.jpg";

export interface MenuItem {
  id: string;
  name: string;
  telugu?: string;
  image: string;
  prices: { "250g": number; "500g": number; "1kg": number };
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

// Image mapping helper — assigns images by keyword match
const imageMap: Record<string, string> = {
  kaja: kajaImg,
  mysorepak: mysorepakImg,
  mysurpak: mysorepakImg,
  laddu: ladduImg,
  ladhu: ladduImg,
  jangiri: jangiriImg,
  putharekulu: puthaRekuluImg,
  sunnundalu: sunnundaluImg,
  barfi: barfiImg,
  bengali: barfiImg,
  kalakandha: barfiImg,
  kova: barfiImg,
  gavvalu: gavvaluImg,
  komulu: gavvaluImg,
  bobbatlu: bobbatluImg,
  ariselu: bobbatluImg,
  pongadalu: bobbatluImg,
  chakodilu: chakodiluImg,
  chakra: chakodiluImg,
  boondi: boondiImg,
  michir: boondiImg,
  murukku: murukkuImg,
  murukullu: murukkuImg,
  jantikalu: murukkuImg,
  cekkalu: murukkuImg,
  chips: murukkuImg,
};

function getImage(name: string): string {
  const lower = name.toLowerCase();
  for (const [key, img] of Object.entries(imageMap)) {
    if (lower.includes(key)) return img;
  }
  // Fallback based on category defaults
  return ladduImg;
}

let idCounter = 0;
function makeItem(name: string, telugu: string | undefined, p250: number, p500: number, p1kg: number): MenuItem {
  return {
    id: `item-${++idCounter}`,
    name,
    telugu,
    image: getImage(name),
    prices: { "250g": p250, "500g": p500, "1kg": p1kg },
  };
}

export const menuData: MenuCategory[] = [
  {
    name: "Traditional Sweets",
    items: [
      makeItem("Babby Goutam Kaja", "కాజా", 80, 150, 300),
      makeItem("Babby Kaja", "కాజా", 80, 150, 300),
      makeItem("Kaja", "కాజా", 50, 100, 200),
      makeItem("Goutam Kaja", "గోటం కాజ", 50, 100, 200),
      makeItem("Badush", "బదుష్", 50, 100, 200),
      makeItem("Mysorepak", "మైసూరపక్", 60, 120, 240),
      makeItem("Tokkudu Laddu", "తొక్కుడులదు", 80, 150, 300),
      makeItem("Jangiri", "జంగిరి", 50, 100, 200),
      makeItem("Cinna Bundi Mithaai", "మిత్తాయి", 60, 120, 240),
      makeItem("Gormitti", "గొరమిట్టి", 50, 100, 200),
      makeItem("Chillakalu", "చిల్లకలు", 50, 100, 200),
      makeItem("Chalividi", "చలివిడి", 80, 150, 300),
      makeItem("Thiboondi", "తీబూందీ", 50, 100, 200),
      makeItem("Bundi Achu", "అచ్చు", 60, 120, 240),
    ],
  },
  {
    name: "Special Sweets",
    items: [
      makeItem("Mothuchuru Laddu", "మొతుచురు లడ్డు", 100, 200, 400),
      makeItem("Kalakandha", "కాలాకదా", 100, 200, 400),
      makeItem("Bengali", "బెంగాలీ", 80, 150, 300),
      makeItem("Ongol Mysurpak", "ఒంగోలు మైసూర్ పాక్", 100, 200, 400),
      makeItem("Nethi Mysurpak", "నెత్తి మైసూర్ పాక్", 100, 200, 400),
      makeItem("Ice Cream Barfi", "బరఫీ", 100, 200, 400),
      makeItem("Pantuva", "పంతువా", 80, 150, 300),
      makeItem("Dry Fruits Laddu", "డ్రై ఫ్రూట్ లడ్డు", 100, 200, 400),
      makeItem("Verusennaga Achu", "వేరుశెన్నగా అచ్చు", 80, 150, 300),
      makeItem("Malai Puri", "మలైపూరి", 150, 300, 600),
    ],
  },
  {
    name: "Andhra Sweets",
    items: [
      makeItem("Bellam Komulu", "బెల్లం కొములు", 50, 100, 200),
      makeItem("Bellam Gavvalu", "బెల్లం గవ్వలు", 50, 100, 200),
      makeItem("Besar Laddu", "బెసర్ లడ్డు", 100, 200, 300),
      makeItem("Balaji Laddu", "బాలాజీ లడ్డు", 80, 150, 300),
      makeItem("Kova", "కోవా", 100, 200, 400),
      makeItem("Sunnundalu", "సున్నుండలు", 100, 200, 400),
      makeItem("Ragi Laddu", "రాగి లడ్డు", 100, 200, 400),
      makeItem("Bobbatlu", "బొబ్బట్లు", 80, 150, 300),
      makeItem("Kachikayalu", "కచ్చికాయలు", 80, 150, 300),
      makeItem("Putharekulu", "పూతరేకులు", 100, 200, 400),
      makeItem("Putharekulu Dry Fruit", "పూతరేకులు", 150, 300, 600),
      makeItem("Ariselu", "అరిసెలు", 80, 150, 300),
      makeItem("Pongadalu", "పొంగడలు", 80, 150, 300),
    ],
  },
  {
    name: "Hot Snacks",
    items: [
      makeItem("Karpusa", "కర్పూసా", 80, 150, 300),
      makeItem("Chekka Michir", "చెక్క మిచ్చిర్", 60, 120, 240),
      makeItem("Vamu Kommulu", "వాము కొమ్ములు", 60, 120, 240),
      makeItem("Special Michir", "స్పెషల్ మిచ్చిర్", 60, 120, 240),
      makeItem("Kalupu Michir", "కలుపు మిచ్చిర్", 60, 120, 240),
      makeItem("Karam Boondi", "కారం బూందీ", 60, 120, 240),
      makeItem("Chakodilu", "చాకోడీలు", 60, 120, 240),
      makeItem("Chakra Banalu", "చక్ర బాణాలు", 60, 120, 240),
      makeItem("Corn Chips", "కార్న్ చిప్స్", 60, 120, 240),
      makeItem("Jantikalu", "జంతికలు", 80, 150, 300),
      makeItem("Murukullu", "మురుకుల్లు", 80, 150, 300),
      makeItem("Papu Cekkalu", "పప్పు చేక్కలు", 80, 150, 300),
    ],
  },
];

export const popularSweets = [
  menuData[0].items[5],  // Mysorepak
  menuData[1].items[0],  // Mothuchuru Laddu
  menuData[0].items[7],  // Jangiri
  menuData[2].items[5],  // Sunnundalu
  menuData[1].items[4],  // Nethi Mysurpak
  menuData[2].items[9],  // Putharekulu
];
