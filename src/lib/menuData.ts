import BabbyGoutamKajaImg from "@/assets/sweets/Babby-Goutam-Kaja.jpg";
import babbykajaImg from "@/assets/sweets/Babby-Kaja.jpg";
import kajaImg from "@/assets/sweets/kajaonly.jpg"; // Updated to match your git log filename
import GoutamkajaImg from "@/assets/sweets/Goutam-Kaja.jpg";
import BadushImg from "@/assets/sweets/Badush.webp";
import mysorepakImg from "@/assets/sweets/mysorepak.jpg";
import tokkuduladduImg from "@/assets/sweets/Tokkudu-Laddu.jpg";
import jangiriImg from "@/assets/sweets/Jangiri.webp";
import chinabundiImg from "@/assets/sweets/Cinna-Bundi-Mithaai.jpg";
import gormittiImg from "@/assets/sweets/Gormitti.jpg";
import chilakaluImg from "@/assets/sweets/Chillakalu.jpg";
import chalividiImg from "@/assets/sweets/Chalividi.jpg";
import thiboondiImg from "@/assets/sweets/Thiboondi.jpg";
import bundiachuImg from "@/assets/sweets/Bundi-Achu.jpg";
import mothuchuruladduImg from "@/assets/sweets/Mothuchuru-Laddu.webp";
import kalakandhaImg from "@/assets/sweets/Kalakandha.webp";
import bengaliImg from "@/assets/sweets/Bengali.webp";
import ongolmysurpakImg from "@/assets/sweets/Ongol-Mysurpak.jpg";
import nethimysurpakImg from "@/assets/sweets/Nethi-Mysurpak.jpg";
import icecreambarfiImg from "@/assets/sweets/Ice-Cream-Barfi.jpg";
import pantuvaImg from "@/assets/sweets/pantuvanew.jpg";
import dryfruitsladduImg from "@/assets/sweets/Dry-Fruits-Laddu.webp";
import verusennagaachuImg from "@/assets/sweets/Verusennaga-Achu.jpg";
import malaipuriImg from "@/assets/sweets/Malai-Puri.jpg";
import bellamkomuluImg from "@/assets/sweets/Bellam-Komulu.webp";
import bellamgavvaluImg from "@/assets/sweets/Bellam-Gavvalu.jpg";
import besarladduImg from "@/assets/sweets/Besar-Laddu.webp";
import balagiladduImg from "@/assets/sweets/Balaji-Laddu.webp";
import kovaImg from "@/assets/sweets/Kova.jpg";
import sunnundaluImg from "@/assets/sweets/sunnundalu.jpg";
import ragiladduImg from "@/assets/sweets/Ragi-Laddu.jpg";
import bobbatluImg from "@/assets/sweets/Bobbatlu-n.jpg";
import kachikayaluImg from "@/assets/sweets/Kachikayalu.jpg";
import putharekuludryfruitsImg from "@/assets/sweets/Putharekulu-Dry-Fruit.webp";
import puthaRekuluImg from "@/assets/sweets/Putharekulu-n.webp";
import ariseluImg from "@/assets/sweets/Ariselu.jpg";
import pongadaluImg from "@/assets/sweets/Pongadalu.jpg";
import karpusaImg from "@/assets/sweets/Karpusa.jpg";
import chekkamirchirImg from "@/assets/sweets/Chekka-Michir.webp";
import vamukommaluImg from "@/assets/sweets/VamuKommulu.jpg";
import specialmichirImg from "@/assets/sweets/Special-Michir.jpg";
import kalupumirchirImg from "@/assets/sweets/Kalupu-Michir.webp";
import karamboundiImg from "@/assets/sweets/Karam-Boondi.jpg";
import chakodiluImg from "@/assets/sweets/Chakodilu-n.jpg";
import chakrabanaluImg from "@/assets/sweets/Chakra-Banalu.jpg";
import cornchipsImg from "@/assets/sweets/Corn-Chips.jpg";
import jantikaluImg from "@/assets/sweets/Jantikalu.jpg";
import murukkuImg from "@/assets/sweets/Murukullu.webp";
import papuchekkaluImg from "@/assets/sweets/papuchekkalu.jpg"; // Fixed to lowercase as per your file error
import gavvaluImg from "@/assets/sweets/gavvalu.jpg";
import boondiImg from "@/assets/sweets/boondi.jpg";
import ladduImg from "@/assets/sweets/Tokkudu-Laddu.jpg"; // Fallback image

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

const imageMap: Record<string, string> = {
  "babby goutam kaja": BabbyGoutamKajaImg,
  "babby kaja": babbykajaImg,
  "goutam kaja": GoutamkajaImg,
  "kaja": kajaImg,
  "badush": BadushImg,
  "mysorepak": mysorepakImg,
  "tokkudu laddu": tokkuduladduImg,
  "jangiri": jangiriImg,
  "cinna bundi mithaai": chinabundiImg,
  "gormitti": gormittiImg,
  "chillakalu": chilakaluImg,
  "chalividi": chalividiImg,
  "thiboondi": thiboondiImg,
  "bundi achu": bundiachuImg,
  "mothuchuru laddu": mothuchuruladduImg,
  "kalakandha": kalakandhaImg,
  "bengali": bengaliImg,
  "ongol mysurpak": ongolmysurpakImg,
  "nethi mysurpak": nethimysurpakImg,
  "ice cream barfi": icecreambarfiImg,
  "pantuva": pantuvaImg,
  "dry fruits laddu": dryfruitsladduImg,
  "verusennaga achu": verusennagaachuImg,
  "malai puri": malaipuriImg,
  "bellam komulu": bellamkomuluImg,
  "bellam gavvalu": bellamgavvaluImg,
  "besar laddu": besarladduImg,
  "balaji laddu": balagiladduImg,
  "kova": kovaImg,
  "sunnundalu": sunnundaluImg,
  "ragi laddu": ragiladduImg,
  "bobbatlu": bobbatluImg,
  "kachikayalu": kachikayaluImg,
  "putharekulu dry fruit": putharekuludryfruitsImg,
  "putharekulu": puthaRekuluImg,
  "ariselu": ariseluImg,
  "pongadalu": pongadaluImg,
  "karpusa": karpusaImg,
  "chekka michir": chekkamirchirImg,
  "vamu kommulu": vamukommaluImg,
  "special michir": specialmichirImg,
  "kalupu michir": kalupumirchirImg,
  "karam boondi": karamboundiImg,
  "chakodilu": chakodiluImg,
  "chakra banalu": chakrabanaluImg,
  "corn chips": cornchipsImg,
  "jantikalu": jantikaluImg,
  "murukullu": murukkuImg,
  "papu cekkalu": papuchekkaluImg,
  "gavvalu": gavvaluImg,
  "boondi": boondiImg,
};

function getImage(name: string): string {
  const lower = name.toLowerCase();
  const sortedKeys = Object.keys(imageMap).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    if (lower.includes(key)) {
      return imageMap[key];
    }
  }
  return tokkuduladduImg; 
}

let idCounter = 0;
function makeItem(name: string, telugu: string | undefined, p250: number, p500: number, p1kg: number, customImage?: string): MenuItem {
  return {
    id: `item-${++idCounter}`,
    name,
    telugu,
    image: customImage || getImage(name),
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
  menuData[0].items[0],
  menuData[1].items[0],
  menuData[0].items[7],
  menuData[2].items[5],
  menuData[1].items[4],
  menuData[2].items[9],
];