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
    slug: "sports-wireless-earbuds-75h-bluetooth-54",
    name: "75H Sports Wireless Earbuds Bluetooth 5.4",
    category: "Technology",
    description:
      "Sports-focused true wireless earbuds with Bluetooth 5.4 connectivity, stereo audio and extended battery performance for active, travel and everyday use.",
    image: "https://m.media-amazon.com/images/I/71M4Mr+nG-L._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/71M4Mr+nG-L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81NSGh9V3DL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71qMZEI7Z3L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71kmbfl38lL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71lq+XH-XDL._AC_SL1500_.jpg",
    ],
    specs: {
      material: "ABS / PC housing with silicone ear tips",
      size: "Compact in-ear design with charging case",
      color: "Black",
      moq: "500 units",
      packaging: "Individual retail box with charging accessories, master export carton",
    },
  },
  {
    slug: "wireless-earbuds-bluetooth-54-50h-white",
    name: "Wireless Earbuds Bluetooth 5.4 with 50H Playtime",
    category: "Technology",
    description:
      "Bluetooth 5.4 wireless earbuds with bass stereo sound, noise-cancelling microphone, LED battery display and up to 50 hours of combined playback for mobile and laptop use.",
    image: "https://m.media-amazon.com/images/I/61rw2e+AtUL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61rw2e+AtUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/619CvnNnaoL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/714OGgWVZmL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/715PjjnSMgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61y8ndDavqL._AC_SL1500_.jpg",
    ],
    specs: {
      material: "ABS / PC housing with silicone ear tips",
      size: "Compact in-ear design with LED charging case",
      color: "White",
      moq: "500 units",
      packaging: "Retail box with charging case and accessories, master export carton",
    },
  },
  {
    slug: "wireless-earbuds-bluetooth-53-enc-black",
    name: "Wireless Earbuds Bluetooth 5.3 with ENC",
    category: "Technology",
    description:
      "Bluetooth 5.3 true wireless earbuds featuring HiFi stereo audio, ENC noise reduction, LED digital display and up to 50 hours of combined playback for gym, running and daily use.",
    image: "https://m.media-amazon.com/images/I/61D5ZCSIymL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61D5ZCSIymL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81XOfqzgS6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71JrdDctvkL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71AUh1SuudL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81xLj95te+L._AC_SL1500_.jpg",
    ],
    specs: {
      material: "ABS / PC housing with silicone ear tips",
      size: "Compact in-ear design with digital-display charging case",
      color: "Black",
      moq: "500 units",
      packaging: "Individual retail box with charging accessories, master export carton",
    },
  },
  {
    slug: "3-in-1-wireless-charging-station",
    name: "3-in-1 Wireless Charging Station",
    category: "Technology",
    description:
      "Multi-device wireless charging station designed to charge a compatible smartphone, smartwatch and wireless earbuds from one compact desktop platform.",
    image: "https://m.media-amazon.com/images/I/71jeB93YWmL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/71jeB93YWmL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81+oROpmVpL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81-CzcFxXoL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81MIPNpSryL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71yvfmKz+aL._AC_SL1500_.jpg",
    ],
    specs: {
      material: "ABS / PC body with anti-slip silicone contact surfaces",
      size: "3-in-1 desktop charging format",
      color: "Black / white variants available",
      moq: "300 units",
      packaging: "Individual retail box with charging cable, master export carton",
    },
  },
  {
    slug: "multi-device-wireless-charging-station",
    name: "Multi-Device Wireless Charging Station",
    category: "Technology",
    description:
      "Compact wireless charging station for multiple compatible devices, developed for desktop, bedside and travel charging applications.",
    image: "https://m.media-amazon.com/images/I/71XEFN15BuL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/71XEFN15BuL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71IxtymUILL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61G1HzgR7DL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61z+a5DNS2L._AC_SL1500_.jpg",
    ],
    specs: {
      material: "ABS / PC housing with silicone anti-slip pads",
      size: "Compact foldable / desktop multi-device format",
      color: "Black / white variants available",
      moq: "300 units",
      packaging: "Individual retail box with charging cable, master export carton",
    },
  },
  {
    slug: "ergonomic-dual-foldable-laptop-stand",
    name: "Ergonomic Dual-Foldable Laptop Stand",
    category: "Technology",
    description:
      "Adjustable dual-fold laptop riser with ventilated open-frame construction, designed to improve screen height, airflow and desk ergonomics for 10–16 inch notebooks.",
    image: "https://m.media-amazon.com/images/I/61jtA8kHq9L._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61jtA8kHq9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61l9E30CoUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/617nbLECoqL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71JF1H+xVPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/715+kOxzkyL._AC_SL1500_.jpg",
    ],
    specs: {
      material: "Metal / aluminium-alloy construction with silicone pads",
      size: "Compatible with 10–16 inch laptops",
      color: "Neutral metallic finishes",
      moq: "300 units",
      packaging: "Individual protective box, 10–20 units per export carton",
    },
  },
  {
    slug: "adjustable-metal-laptop-riser",
    name: "Adjustable Metal Laptop Riser Stand",
    category: "Technology",
    description:
      "Stable adjustable metal laptop stand designed to raise notebook screens for a more ergonomic desk setup while maintaining ventilation and device support.",
    image: "https://m.media-amazon.com/images/I/71Api8I7QML._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/71Api8I7QML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71gtL4WmFhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/711WxeyzAXL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71op+QznjlL._AC_SL1500_.jpg",
    ],
    specs: {
      material: "Metal / aluminium-alloy body with silicone contact pads",
      size: "Adjustable desktop format for common notebook sizes",
      color: "Silver / grey / black variants",
      moq: "300 units",
      packaging: "Individual protective box, master export carton",
    },
  },
  {
    slug: "360-rotating-foldable-laptop-stand-silver",
    name: "360° Rotating Foldable Laptop Stand",
    category: "Technology",
    description:
      "Foldable silver laptop riser with a 360-degree rotating base, developed for flexible screen positioning, shared workspaces, presentations and ergonomic desk use.",
    image: "https://m.media-amazon.com/images/I/61pdFi5FxfL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61pdFi5FxfL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71+1ruZz6HL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71bMeUEy-3L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/7176k8NTSKL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71+rvJ9vqAL._AC_SL1500_.jpg",
    ],
    specs: {
      material: "Aluminium-alloy / metal construction with silicone pads",
      size: "Foldable rotating desktop format for standard laptops",
      color: "Silver",
      moq: "300 units",
      packaging: "Individual protective box, master export carton",
    },
  },

];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
