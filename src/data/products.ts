export interface Product {
  slug: string;
  name: string;
  category: "Fashion" | "Technology";
  description: string;
  image?: string;
  gallery?: string[];
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
    slug: "acid-wash-oversized-hoodie",
    name: "Acid Wash Oversized Pullover Hoodie",
    category: "Fashion",
    description:
      "Vintage-inspired oversized pullover hoodie with an acid-wash finish, relaxed streetwear silhouette and unisex styling for casual and private-label collections.",
    image: "https://m.media-amazon.com/images/I/61wJOrDPxLL._AC_SY550_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61wJOrDPxLL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/81FcPwSMrGL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/71rfXxokyLL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/81B-uiVaYTL._AC_SY550_.jpg",
    ],
    specs: {
      material: "Cotton-rich fleece with washed finish",
      size: "S – 3XL, oversized fit",
      color: "Assorted washed tones; custom colors available",
      moq: "300 pieces per style",
      packaging: "Individual polybag, 20–25 pcs per export carton",
    },
  },
  {
    slug: "mens-cotton-undershirt-multipack",
    name: "Men's Stay-Tucked Cotton Undershirt Multipack",
    category: "Fashion",
    description:
      "Soft everyday men's undershirts designed with a stay-tucked fit and multipack format, suitable for basicwear, retail and wholesale apparel programs.",
    image: "https://m.media-amazon.com/images/I/61+jiqYxv8L._AC_SY741_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61+jiqYxv8L._AC_SY741_.jpg",
      "https://m.media-amazon.com/images/I/71bJtBcrjgL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71jRN6MV2cL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51yxJ-atuJL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71l6k2abMIL._AC_SX679_.jpg",
    ],
    specs: {
      material: "Soft cotton jersey",
      size: "S – 3XL",
      color: "White, black and assorted multipacks",
      moq: "500 packs",
      packaging: "Retail multipack bag or box, master export carton",
    },
  },
  {
    slug: "mens-crew-t-shirts",
    name: "Men's Crew Neck T-Shirts",
    category: "Fashion",
    description:
      "Classic crew-neck men's T-shirts with a clean everyday silhouette, suitable for basics programs, promotional apparel and wholesale distribution.",
    image: "https://m.media-amazon.com/images/I/710o0VupScL._AC_SX569_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/710o0VupScL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/81i56nk9QmL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/51H0gPYiZEL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/517mOUueTBL._AC_SX569_.jpg",
    ],
    specs: {
      material: "Cotton-rich jersey",
      size: "S – 3XL",
      color: "Core neutrals and assorted colors",
      moq: "500 pieces per color",
      packaging: "Individual or multipack polybag, export carton",
    },
  },
  {
    slug: "mens-oversized-washed-cotton-tshirt",
    name: "Men's Oversized Washed Cotton T-Shirt",
    category: "Fashion",
    description:
      "Loose-fit short-sleeve cotton T-shirt with a washed solid finish and relaxed unisex silhouette, developed for casualwear and streetwear assortments.",
    image: "https://m.media-amazon.com/images/I/81iwv22GiCL._AC_SX569_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/81iwv22GiCL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/61sUSi+6vSL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/7182JL7OcqL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/91mi34UAI+L._AC_SX569_.jpg",
    ],
    specs: {
      material: "Cotton jersey with garment-washed finish",
      size: "S – 3XL, oversized fit",
      color: "Washed solid colors; custom shades available",
      moq: "300 pieces per style",
      packaging: "Individual polybag, 30–40 pcs per export carton",
    },
  },
  {
    slug: "toddler-boys-knit-sweater-set",
    name: "Toddler & Baby Boys' Cotton-Nylon Knit Sweater Set",
    category: "Fashion",
    description:
      "Coordinated knitwear set for baby and toddler boys featuring a soft crew-neck sweater construction for seasonal childrenswear collections.",
    image: "https://m.media-amazon.com/images/I/71jaeoADtIL._AC_SX569_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/71jaeoADtIL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/714RUR4LDBL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71FypATcqUL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/816oC8U4F5L._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71KC15w++OL._AC_SX569_.jpg",
    ],
    specs: {
      material: "Cotton / nylon knit blend",
      size: "Baby and toddler sizing, approx. 6M – 4T",
      color: "Seasonal solids and coordinated colorways",
      moq: "300 sets per style",
      packaging: "Individual polybag, 20–30 sets per carton",
    },
  },
  {
    slug: "baby-boys-sports-sleep-footie",
    name: "Baby Boys' Sports Sleep 'N Play Footie",
    category: "Fashion",
    description:
      "Soft one-piece footed sleeper for baby boys with sports-themed styling, designed for comfortable sleepwear and everyday infant apparel assortments.",
    image: "https://m.media-amazon.com/images/I/719weA1Pk0L._AC_SY550_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/719weA1Pk0L._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/61QXhxu4WBL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/71j0dSXTLgL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/81+nn6SRInL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/81e67zNJAEL._AC_SX569_.jpg",
    ],
    specs: {
      material: "Soft cotton-rich knit",
      size: "3–6 months",
      color: "Sports blue / printed assortment",
      moq: "500 pieces per print",
      packaging: "Individual polybag with size label, export carton",
    },
  },
  {
    slug: "kids-organic-cotton-short-sleeve-tshirt",
    name: "Baby, Toddler & Kids' Organic Cotton T-Shirt",
    category: "Fashion",
    description:
      "Short-sleeve childrenswear T-shirt made from organic cotton for baby, toddler and kids' basics programs, with a soft hand feel and everyday fit.",
    image: "https://m.media-amazon.com/images/I/811vWIliJCL._AC_SX569_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/811vWIliJCL._AC_SX569_.jpg",
    ],
    specs: {
      material: "100% organic cotton jersey",
      size: "Baby, toddler and kids sizing",
      color: "Core solids and seasonal colors",
      moq: "500 pieces per color",
      packaging: "Individual polybag, size-assorted export carton",
    },
  },
  {
    slug: "womens-ribbed-scoop-neck-tank-top",
    name: "Women's Slim-Fit Ribbed Scoop Neck Tank Top",
    category: "Fashion",
    description:
      "Slim-fit women's ribbed tank top with a scoop neckline, designed as a versatile layering basic for casualwear, athleisure and retail apparel lines.",
    image: "https://m.media-amazon.com/images/I/61Q13fPs1lL._AC_SY550_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61Q13fPs1lL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/71x5HJQ3k0L._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/61vwM3Kf6+L._AC_SX679_.jpg",
    ],
    specs: {
      material: "Stretch rib-knit cotton blend",
      size: "XS – XXL",
      color: "Basic neutrals and seasonal colors",
      moq: "500 pieces per color",
      packaging: "Individual polybag, 50 pcs per export carton",
    },
  },
  {
    slug: "mens-loose-fit-washed-basic-tee",
    name: "Men's Loose-Fit Washed Basic T-Shirt",
    category: "Fashion",
    description:
      "Casual oversized short-sleeve T-shirt with a loose unisex fit and washed solid finish, suitable for streetwear and private-label basic collections.",
    image: "https://m.media-amazon.com/images/I/81KBcX2u0EL._AC_SX569_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/81KBcX2u0EL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71-o4PnCIqL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/81DgpxWdo5L._AC_SX569_.jpg",
    ],
    specs: {
      material: "Cotton jersey with washed finish",
      size: "S – 3XL, loose fit",
      color: "Assorted solid washed colors",
      moq: "300 pieces per style",
      packaging: "Individual polybag, 30–40 pcs per carton",
    },
  },
  {
    slug: "womens-solid-fleece-hoodie",
    name: "Women's Solid Basic Fleece Hoodie Sweatshirt",
    category: "Fashion",
    description:
      "Relaxed women's fleece pullover hoodie with drop shoulders, long sleeves and kangaroo pocket styling for casual, lounge and streetwear collections.",
    image: "https://m.media-amazon.com/images/I/61v1ZYMJUHL._AC_SY550_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61v1ZYMJUHL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/71hD1Fv47VL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/611l4GBtzjL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/717bsWirSXL._AC_SY550_.jpg",
    ],
    specs: {
      material: "Cotton / polyester fleece blend",
      size: "XS – XXL, relaxed fit",
      color: "Solid colors with optional custom print or lettering",
      moq: "300 pieces per style",
      packaging: "Individual polybag, 20–25 pcs per export carton",
    },
  },
  {
    slug: "womens-vintage-oversized-tshirt",
    name: "Women's Washed Vintage Oversized T-Shirt",
    category: "Fashion",
    description:
      "Baggy short-sleeve cotton T-shirt with a vintage washed appearance and boyfriend-inspired silhouette for streetwear, workout and casual collections.",
    image: "https://m.media-amazon.com/images/I/7106-3oBqZL._AC_SX569_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/7106-3oBqZL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/61isx8P6qmL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/610PjKNKrpL._AC_SX569_.jpg",
    ],
    specs: {
      material: "Cotton jersey with vintage wash",
      size: "XS – XXL, oversized fit",
      color: "Washed neutrals and seasonal tones",
      moq: "300 pieces per style",
      packaging: "Individual polybag, 30–40 pcs per carton",
    },
  },
  {
    slug: "womens-cotton-modal-crewneck-tshirt",
    name: "Women's Regular-Fit Cotton Modal Crewneck T-Shirt",
    category: "Fashion",
    description:
      "Soft regular-fit women's crewneck T-shirt in a cotton-modal blend, designed for lightweight everyday basics, layering and retail multiprograms.",
    image: "https://m.media-amazon.com/images/I/91ptstSJNbL._AC_SY550_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/91ptstSJNbL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/81Bir2RqgpL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/61s1LVTjb1L._AC_SX679_.jpg",
    ],
    specs: {
      material: "Cotton / modal blend jersey",
      size: "XS – XXL",
      color: "Core and seasonal solid colors",
      moq: "500 pieces per color",
      packaging: "Individual polybag, 40–50 pcs per export carton",
    },
  },
  {
    slug: "baby-girls-sleep-n-play-footie",
    name: "Baby Girls' Sleep 'N Play Footie",
    category: "Fashion",
    description:
      "Comfort-focused one-piece footed sleeper for baby girls, suitable for infant sleepwear, gifting and everyday baby clothing assortments.",
    image: "https://m.media-amazon.com/images/I/719-v-9Ck7L._AC_SX569_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/719-v-9Ck7L._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/81OHon7KUSL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/81RqYVdKJUL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/81s0kAu+lzL._AC_SX569_.jpg",
    ],
    specs: {
      material: "Soft cotton-rich knit",
      size: "Newborn – 24 months",
      color: "Printed and solid baby-girl colorways",
      moq: "500 pieces per print",
      packaging: "Individual polybag with size label, export carton",
    },
  },
  {
    slug: "smart-watch-series",
    name: "Smart Watch Series",
    category: "Technology",
    description:
      "Multi-function smart wearables with OEM firmware and branding support for electronics distributors, promotional channels and retail programs.",
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
    description:
      "True wireless audio solution with charging case and custom retail packaging support for importers and consumer electronics buyers.",
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
    description:
      "Certified high-capacity power banks suitable for retail, gifting and promotional distribution channels with custom branding options.",
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
    description:
      "Convenient multi-device Qi charging solutions for electronics distributors and modern desktop accessory programs.",
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
    description:
      "Hot-swappable mechanical keyboard line with custom keycaps, switch options and packaging support for gaming and office markets.",
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
    description:
      "Wireless and wired mice plus desk accessory bundles developed for value-focused electronics retail programs and office distributors.",
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
    description:
      "Multi-port connectivity solution for laptop accessory ranges, ideal for mobile work setups, resellers and tech gift programs.",
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
    description:
      "Bundled assortment including stands, sleeves, cables and cleaning tools tailored for corporate gifting and laptop reseller channels.",
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
    description:
      "Wi-Fi enabled smart plugs, sensors and control devices designed for retail electronics channels with app support and standard certifications.",
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
    description:
      "Indoor and outdoor IP camera kits aimed at B2B security channels, distributors and project-based commercial supply requirements.",
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
    description:
      "Cases, chargers, screen protectors and cables in mixed assortments for fast-moving mobile retail and import container programs.",
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
    description:
      "Curated mixed electronics bundle for buyers building promotional assortments, retail starter programs or mixed container loads.",
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