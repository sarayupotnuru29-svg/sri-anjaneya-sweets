export interface MenuItem {
  name: string;
  telugu?: string;
  prices: { "250g": number; "500g": number; "1kg": number };
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: "Traditional Sweets",
    items: [
      { name: "Babby Goutam Kaja", telugu: "కాజా", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Babby Kaja", telugu: "కాజా", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Kaja", telugu: "కాజా", prices: { "250g": 50, "500g": 100, "1kg": 200 } },
      { name: "Goutam Kaja", telugu: "గోటం కాజ", prices: { "250g": 50, "500g": 100, "1kg": 200 } },
      { name: "Badush", telugu: "బదుష్", prices: { "250g": 50, "500g": 100, "1kg": 200 } },
      { name: "Mysorepak", telugu: "మైసూరపక్", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Tokkudu Laddu", telugu: "తొక్కుడులదు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Jangiri", telugu: "జంగిరి", prices: { "250g": 50, "500g": 100, "1kg": 200 } },
      { name: "Cinna Bundi Mithaai", telugu: "మిత్తాయి", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Gormitti", telugu: "గొరమిట్టి", prices: { "250g": 50, "500g": 100, "1kg": 200 } },
      { name: "Chillakalu", telugu: "చిల్లకలు", prices: { "250g": 50, "500g": 100, "1kg": 200 } },
      { name: "Chalividi", telugu: "చలివిడి", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Thiboondi", telugu: "తీబూందీ", prices: { "250g": 50, "500g": 100, "1kg": 200 } },
      { name: "Bundi Achu", telugu: "అచ్చు", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
    ],
  },
  {
    name: "Special Sweets",
    items: [
      { name: "Mothuchuru Laddu", telugu: "మొతుచురు లడ్డు", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Kalakandha", telugu: "కాలాకదా", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Bengali", telugu: "బెంగాలీ", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Ongol Mysurpak", telugu: "ఒంగోలు మైసూర్ పాక్", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Nethi Mysurpak", telugu: "నెత్తి మైసూర్ పాక్", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Ice Cream Barfi", telugu: "బరఫీ", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Pantuva", telugu: "పంతువా", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Dry Fruits Laddu", telugu: "డ్రై ఫ్రూట్ లడ్డు", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Verusennaga Achu", telugu: "వేరుశెన్నగా అచ్చు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Malai Puri", telugu: "మలైపూరి", prices: { "250g": 150, "500g": 300, "1kg": 600 } },
    ],
  },
  {
    name: "Andhra Sweets",
    items: [
      { name: "Bellam Komulu", telugu: "బెల్లం కొములు", prices: { "250g": 50, "500g": 100, "1kg": 200 } },
      { name: "Bellam Gavvalu", telugu: "బెల్లం గవ్వలు", prices: { "250g": 50, "500g": 100, "1kg": 200 } },
      { name: "Besar Laddu", telugu: "బెసర్ లడ్డు", prices: { "250g": 100, "500g": 200, "1kg": 300 } },
      { name: "Balaji Laddu", telugu: "బాలాజీ లడ్డు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Kova", telugu: "కోవా", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Sunnundalu", telugu: "సున్నుండలు", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Ragi Laddu", telugu: "రాగి లడ్డు", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Bobbatlu", telugu: "బొబ్బట్లు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Kachikayalu", telugu: "కచ్చికాయలు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Putharekulu", telugu: "పూతరేకులు", prices: { "250g": 100, "500g": 200, "1kg": 400 } },
      { name: "Putharekulu Dry Fruit", telugu: "పూతరేకులు", prices: { "250g": 150, "500g": 300, "1kg": 600 } },
      { name: "Ariselu", telugu: "అరిసెలు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Pongadalu", telugu: "పొంగడలు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
    ],
  },
  {
    name: "Hot Snacks",
    items: [
      { name: "Karpusa", telugu: "కర్పూసా", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Chekka Michir", telugu: "చెక్క మిచ్చిర్", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Vamu Kommulu", telugu: "వాము కొమ్ములు", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Special Michir", telugu: "స్పెషల్ మిచ్చిర్", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Kalupu Michir", telugu: "కలుపు మిచ్చిర్", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Karam Boondi", telugu: "కారం బూందీ", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Chakodilu", telugu: "చాకోడీలు", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Chakra Banalu", telugu: "చక్ర బాణాలు", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Corn Chips", telugu: "కార్న్ చిప్స్", prices: { "250g": 60, "500g": 120, "1kg": 240 } },
      { name: "Jantikalu", telugu: "జంతికలు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Murukullu", telugu: "మురుకుల్లు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
      { name: "Papu Cekkalu", telugu: "పప్పు చేక్కలు", prices: { "250g": 80, "500g": 150, "1kg": 300 } },
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
