export interface Product {
  slug: string;
  name: string;
  category: "Fashion" | "Technology";
  description: string;
  specs: {
    material: string;
    size: string;
    color: string;
    moq: string;
    packaging: string;
  };
}

export const products: Product[] = [
  {
    slug: "premium-cotton-t-shirt",
    name: "Premium Cotton T-Shirt",
    category: "Fashion",
    description: "High quality cotton casual wear for wholesale buyers.",
    specs: {
      material: "100% combed ring-spun cotton, 180 GSM",
      size: "XS – 3XL (US / EU sizing)",
      color: "Custom Pantone matching available",
      moq: "500 pieces per style",
      packaging: "Individual polybag, 50 pcs per export carton",
    },
  },
  {
    slug: "oversized-streetwear-hoodie",
    name: "Oversized Streetwear Hoodie",
    category: "Fashion",
    description: "Heavyweight fleece hoodie built for modern streetwear labels.",
    specs: {
      material: "Cotton / polyester brushed fleece, 380 GSM",
      size: "S – 3XL oversized fit",
      color: "12 stock colors, custom dyeing on request",
      moq: "300 pieces per style",
      packaging: "Polybag with hangtag, 25 pcs per carton",
    },
  },
  {
    slug: "winter-casual-jacket",
    name: "Winter Casual Jacket",
    category: "Fashion",
    description: "Insulated outerwear engineered for cold-climate retail programs.",
    specs: {
      material: "Polyester shell with recycled padding",
      size: "S – 2XL",
      color: "Navy, black, olive, custom",
      moq: "300 pieces per style",
      packaging: "Compressed polybag, 20 pcs per carton",
    },
  },
  {
    slug: "sports-training-wear-set",
    name: "Sports Training Wear Set",
    category: "Fashion",
    description: "Moisture-wicking activewear sets for sportswear distributors.",
    specs: {
      material: "Polyester / spandex performance knit",
      size: "XS – 2XL",
      color: "Sublimation printing available",
      moq: "500 sets",
      packaging: "Set polybag, 40 sets per carton",
    },
  },
  {
    slug: "premium-denim-jacket",
    name: "Premium Denim Jacket",
    category: "Fashion",
    description: "Washed denim outerwear with customizable hardware and labels.",
    specs: {
      material: "12 oz cotton denim",
      size: "S – 2XL",
      color: "Light, mid, dark indigo and custom wash",
      moq: "300 pieces per style",
      packaging: "Polybag, 20 pcs per carton",
    },
  },
  {
    slug: "fashion-accessories-collection",
    name: "Fashion Accessories Collection",
    category: "Fashion",
    description: "Caps, belts, bags and seasonal accessories for retail assortments.",
    specs: {
      material: "Mixed textile, PU and metal hardware",
      size: "One size / adjustable",
      color: "Assorted, brandable",
      moq: "1,000 pieces mixed assortment",
      packaging: "Assorted master cartons",
    },
  },
  {
    slug: "business-casual-shirt",
    name: "Business Casual Shirt",
    category: "Fashion",
    description: "Wrinkle-resistant shirting for corporate and uniform programs.",
    specs: {
      material: "Cotton-rich poplin, easy-care finish",
      size: "S – 3XL",
      color: "White, sky, navy, custom",
      moq: "500 pieces per style",
      packaging: "Flat-packed with collar support, 30 pcs per carton",
    },
  },
  {
    slug: "outdoor-windbreaker-jacket",
    name: "Outdoor Windbreaker Jacket",
    category: "Fashion",
    description: "Lightweight, water-repellent layer for outdoor retail lines.",
    specs: {
      material: "Ripstop nylon with DWR coating",
      size: "S – 2XL",
      color: "Six stock colorways plus custom",
      moq: "500 pieces per style",
      packaging: "Packable pouch, 40 pcs per carton",
    },
  },
  {
    slug: "smart-watch-series",
    name: "Smart Watch Series",
    category: "Technology",
    description: "Multi-function smart wearables with OEM firmware and branding options.",
    specs: {
      material: "Aluminium alloy case, silicone strap",
      size: "42mm / 46mm",
      color: "Black, silver, gold",
      moq: "500 units",
      packaging: "Retail gift box, 40 units per carton",
    },
  },
  {
    slug: "wireless-bluetooth-earbuds",
    name: "Wireless Bluetooth Earbuds",
    category: "Technology",
    description: "True wireless audio with charging case and custom packaging support.",
    specs: {
      material: "ABS housing, silicone tips",
      size: "Compact charging case",
      color: "White, black, custom",
      moq: "1,000 units",
      packaging: "Retail box, 60 units per carton",
    },
  },
  {
    slug: "portable-power-bank",
    name: "Portable Power Bank",
    category: "Technology",
    description: "Certified high-capacity power banks for promotional and retail channels.",
    specs: {
      material: "Aluminium / ABS housing",
      size: "10,000 – 20,000 mAh",
      color: "Black, white, custom print",
      moq: "1,000 units",
      packaging: "Color box, 50 units per carton",
    },
  },
  {
    slug: "wireless-charging-station",
    name: "Wireless Charging Station",
    category: "Technology",
    description: "Multi-device Qi charging stands for electronics distributors.",
    specs: {
      material: "ABS with anti-slip silicone",
      size: "3-in-1 and single-pad variants",
      color: "Matte black, white",
      moq: "500 units",
      packaging: "Color box, 30 units per carton",
    },
  },
  {
    slug: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    category: "Technology",
    description: "Hot-swappable mechanical keyboards with custom keycap programs.",
    specs: {
      material: "ABS / aluminium frame, PBT keycaps",
      size: "60% / TKL / full size",
      color: "Custom keycap colorways",
      moq: "300 units",
      packaging: "Foam-protected box, 10 units per carton",
    },
  },
  {
    slug: "computer-mouse-accessories",
    name: "Computer Mouse Accessories",
    category: "Technology",
    description: "Wireless and wired mice plus desk accessory bundles.",
    specs: {
      material: "ABS shell, optical sensor",
      size: "Standard and compact",
      color: "Black, white, custom",
      moq: "1,000 units",
      packaging: "Blister or color box, 80 units per carton",
    },
  },
  {
    slug: "usb-c-hub-adapter",
    name: "USB-C Hub Adapter",
    category: "Technology",
    description: "Multi-port connectivity hubs for laptop and mobile accessory ranges.",
    specs: {
      material: "Aluminium alloy body",
      size: "5-in-1 to 9-in-1 configurations",
      color: "Space grey, silver",
      moq: "500 units",
      packaging: "Retail box, 60 units per carton",
    },
  },
  {
    slug: "laptop-accessories-kit",
    name: "Laptop Accessories Kit",
    category: "Technology",
    description: "Stands, sleeves, cables and cleaning kits in bundled assortments.",
    specs: {
      material: "Aluminium, PU, braided cable",
      size: "Fits 13\" – 16\" laptops",
      color: "Grey, black, custom",
      moq: "500 kits",
      packaging: "Kit box, 20 kits per carton",
    },
  },
  {
    slug: "smart-home-device",
    name: "Smart Home Device",
    category: "Technology",
    description: "Wi-Fi smart plugs, sensors and lighting controls with app support.",
    specs: {
      material: "Flame-retardant PC housing",
      size: "US / EU / UK plug standards",
      color: "White",
      moq: "1,000 units",
      packaging: "Color box, 100 units per carton",
    },
  },
  {
    slug: "security-camera-system",
    name: "Security Camera System",
    category: "Technology",
    description: "Indoor and outdoor IP camera kits for B2B security channels.",
    specs: {
      material: "Metal and PC weatherproof housing",
      size: "2MP – 5MP sensor options",
      color: "White, black",
      moq: "300 sets",
      packaging: "Kit box with mounts, 10 sets per carton",
    },
  },
  {
    slug: "mobile-phone-accessories-set",
    name: "Mobile Phone Accessories Set",
    category: "Technology",
    description: "Cases, screen protectors, cables and chargers in mixed assortments.",
    specs: {
      material: "TPU, tempered glass, TPE cable",
      size: "Model-specific tooling available",
      color: "Clear, black, custom print",
      moq: "2,000 pieces mixed",
      packaging: "Assorted master cartons",
    },
  },
  {
    slug: "consumer-electronics-bundle",
    name: "Consumer Electronics Bundle",
    category: "Technology",
    description: "Curated electronics assortments for importers building mixed containers.",
    specs: {
      material: "Mixed categories",
      size: "Container-level assortment",
      color: "Assorted",
      moq: "One mixed pallet",
      packaging: "Export cartons, palletized",
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
