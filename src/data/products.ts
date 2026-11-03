// Placeholder catalogue. Replace names, prices, sizes and photos with real
// product data when it is ready. Every product is a 3D printed devotional item.

export type CategoryId =
  | "idols"
  | "temple-miniatures"
  | "diyas-lamps"
  | "wall-art"
  | "pooja-essentials"
  | "gifts";

export type Category = {
  id: CategoryId;
  name: string;
  blurb: string;
};

export const categories: Category[] = [
  { id: "idols", name: "Idols & Murtis", blurb: "Finely layered deity idols for your home mandir." },
  { id: "temple-miniatures", name: "Temple Miniatures", blurb: "Scaled replicas of India's great temples." },
  { id: "diyas-lamps", name: "Diyas & Lamps", blurb: "Deepam stands made for LED tealights." },
  { id: "wall-art", name: "Wall Art", blurb: "Om, Swastik and mandala panels for entrances and walls." },
  { id: "pooja-essentials", name: "Pooja Essentials", blurb: "Stands, trays and holders for daily worship." },
  { id: "gifts", name: "Keychains & Gifts", blurb: "Small blessings to carry or give." },
];

export type Finish = {
  id: string;
  name: string;
  /** Extra cost on top of the base price, in rupees. */
  extra: number;
  swatch: string;
};

export const finishes: Finish[] = [
  { id: "silk-gold", name: "Silk Gold", extra: 0, swatch: "linear-gradient(135deg,#f7d774,#c8961e)" },
  { id: "antique-bronze", name: "Antique Bronze", extra: 150, swatch: "linear-gradient(135deg,#b07a3f,#5e3a17)" },
  { id: "marble-white", name: "Marble White", extra: 100, swatch: "linear-gradient(135deg,#ffffff,#d9d4c7)" },
  { id: "hand-painted", name: "Hand Painted", extra: 600, swatch: "conic-gradient(#1f3fbf,#d4a017,#c2410c,#1f3fbf)" },
];

/** Visual used for the placeholder art until real photos are added. */
export type ArtGlyph = "om" | "deepam" | "lotus" | "trishul" | "gopuram" | "flute" | "mace" | "veena" | "chakra";

export type Product = {
  slug: string;
  name: string;
  deity?: string;
  category: CategoryId;
  price: number;
  compareAt?: number;
  height: string;
  material: string;
  printTime: string;
  rating: number;
  reviews: number;
  badge?: "Bestseller" | "New" | "Limited";
  glyph: ArtGlyph;
  short: string;
  description: string;
  highlights: string[];
  /** Slug of a related temple in the temples guide. */
  temple?: string;
  finishes: string[];
};

export const products: Product[] = [
  {
    slug: "vinayaka-blessing-idol",
    name: "Vinayaka Blessing Idol",
    deity: "Lord Ganesha",
    category: "idols",
    price: 1299,
    compareAt: 1599,
    height: "15 cm",
    material: "Silk PLA, matte sealed",
    printTime: "14 hrs",
    rating: 4.9,
    reviews: 214,
    badge: "Bestseller",
    glyph: "om",
    short: "Seated Ganesha with modak and raised blessing hand.",
    description:
      "Begin every new chapter with Vighnaharta. This seated Ganesha is printed at a fine 0.12 mm layer height so the crown, the trunk and the folds of the dhoti stay crisp, then hand-sanded and sealed for a soft, even sheen.",
    highlights: ["0.12 mm fine-detail print", "Weighted base, will not tip", "Hand-finished and sealed", "Ideal for home mandir or desk"],
    finishes: ["silk-gold", "antique-bronze", "marble-white", "hand-painted"],
  },
  {
    slug: "mahalakshmi-lotus-murti",
    name: "Mahalakshmi on Lotus",
    deity: "Goddess Lakshmi",
    category: "idols",
    price: 1499,
    height: "18 cm",
    material: "Silk PLA",
    printTime: "17 hrs",
    rating: 4.8,
    reviews: 132,
    badge: "New",
    glyph: "lotus",
    short: "Lakshmi seated on a full-bloom lotus, showering blessings.",
    description:
      "A graceful Mahalakshmi seated on a layered lotus, with the gold coins falling from her palm sculpted in relief. A centrepiece for Diwali and Varalakshmi Vratham pooja.",
    highlights: ["Layered 32-petal lotus base", "Coin detail in relief", "Pairs with the Vinayaka idol", "Gift box included"],
    finishes: ["silk-gold", "marble-white", "hand-painted"],
  },
  {
    slug: "nataraja-cosmic-dance",
    name: "Nataraja, the Cosmic Dancer",
    deity: "Lord Shiva",
    category: "idols",
    price: 1899,
    compareAt: 2199,
    height: "22 cm",
    material: "Silk PLA with bronze finish",
    printTime: "22 hrs",
    rating: 4.9,
    reviews: 98,
    glyph: "trishul",
    short: "Shiva's Ananda Tandava inside the ring of fire.",
    description:
      "Inspired by the Chola bronzes of Tamil Nadu, this Nataraja captures the dance of creation and dissolution: the damaru, the flame, the raised foot and the prabha ring of fire.",
    highlights: ["Chola-bronze inspired pose", "Printed in three parts, joined by hand", "Stable round pedestal", "Museum-style display piece"],
    temple: "brihadeeswarar-thanjavur",
    finishes: ["antique-bronze", "silk-gold"],
  },
  {
    slug: "murali-krishna",
    name: "Murali Krishna with Flute",
    deity: "Lord Krishna",
    category: "idols",
    price: 1399,
    height: "17 cm",
    material: "Silk PLA",
    printTime: "15 hrs",
    rating: 4.7,
    reviews: 156,
    glyph: "flute",
    short: "Krishna in tribhanga pose playing the bansuri.",
    description:
      "Krishna stands in his classic tribhanga pose with the bansuri at his lips and a peacock feather in his crown. Hand painting adds the blue skin tone and peetambara yellow.",
    highlights: ["Peacock feather crown detail", "Tribhanga pose", "Calf figure at the base", "Lovely for Janmashtami"],
    temple: "jagannath-puri",
    finishes: ["silk-gold", "marble-white", "hand-painted"],
  },
  {
    slug: "veer-hanuman",
    name: "Veer Hanuman",
    deity: "Lord Hanuman",
    category: "idols",
    price: 1199,
    height: "16 cm",
    material: "Silk PLA",
    printTime: "13 hrs",
    rating: 4.8,
    reviews: 121,
    glyph: "mace",
    short: "Standing Hanuman holding the gada, ever ready to serve.",
    description:
      "Strength, devotion and courage in one figure. Hanuman stands with his gada resting on his shoulder and his palm raised in abhaya mudra.",
    highlights: ["Abhaya mudra blessing", "Detailed gada and armlets", "Ideal for car dashboards (with base pad)", "Tuesday & Saturday pooja favourite"],
    finishes: ["silk-gold", "antique-bronze", "hand-painted"],
  },
  {
    slug: "saraswati-veena",
    name: "Saraswati with Veena",
    deity: "Goddess Saraswati",
    category: "idols",
    price: 1599,
    height: "19 cm",
    material: "Marble-look PLA",
    printTime: "18 hrs",
    rating: 4.9,
    reviews: 74,
    glyph: "veena",
    short: "Goddess of learning seated with veena and swan.",
    description:
      "For the study table and the music room. Saraswati sits on a white lotus holding the veena, with her hamsa at her feet. Beautiful in marble white for Vasant Panchami and Ayudha Pooja.",
    highlights: ["Strung veena detail", "Hamsa (swan) at the base", "Calm marble-white finish", "Perfect gift for students"],
    finishes: ["marble-white", "silk-gold", "hand-painted"],
  },
  {
    slug: "meenakshi-gopuram-miniature",
    name: "Meenakshi Gopuram Miniature",
    category: "temple-miniatures",
    price: 2499,
    compareAt: 2999,
    height: "25 cm",
    material: "Resin + PLA",
    printTime: "30 hrs",
    rating: 5.0,
    reviews: 61,
    badge: "Limited",
    glyph: "gopuram",
    short: "A tiered South Indian gopuram with hundreds of tiny figures.",
    description:
      "Our most detailed print. Each tier of this gopuram, modelled on the towers of Madurai's Meenakshi Amman temple, carries tiny sculpted figures, then is hand-painted in the temple's famous colours.",
    highlights: ["Over 300 sculpted micro-figures", "Optional warm LED base", "Numbered limited edition", "Certificate of authenticity"],
    temple: "meenakshi-amman-madurai",
    finishes: ["hand-painted", "silk-gold", "marble-white"],
  },
  {
    slug: "kedarnath-temple-model",
    name: "Kedarnath Temple Model",
    category: "temple-miniatures",
    price: 2199,
    height: "14 cm",
    material: "Stone-look PLA",
    printTime: "20 hrs",
    rating: 4.8,
    reviews: 47,
    glyph: "trishul",
    short: "The Himalayan Jyotirlinga shrine with snowy peaks behind.",
    description:
      "The stone shrine of Kedarnath set against the Himalayan backdrop, printed in a granite-textured filament. A keepsake for every yatri who has made the climb, and for those who dream of it.",
    highlights: ["Granite-texture filament", "Removable mountain backdrop", "Nandi figure in front", "Felt base protects surfaces"],
    temple: "kedarnath",
    finishes: ["marble-white", "antique-bronze"],
  },
  {
    slug: "konark-sun-wheel",
    name: "Konark Sun Wheel",
    category: "temple-miniatures",
    price: 999,
    height: "12 cm dia",
    material: "Stone-look PLA",
    printTime: "9 hrs",
    rating: 4.7,
    reviews: 88,
    glyph: "chakra",
    short: "The famous chariot wheel of Konark, on a desk stand.",
    description:
      "One of the 24 carved wheels of the Sun Temple chariot, reduced to a desk-sized relief with its eight broad spokes and fine medallions.",
    highlights: ["8 spokes, 8 medallions", "Desk stand included", "Wall-mount slot on the back", "Great for offices"],
    temple: "konark-sun-temple",
    finishes: ["antique-bronze", "marble-white", "silk-gold"],
  },
  {
    slug: "akhanda-deepam-stand",
    name: "Akhanda Deepam Stand",
    category: "diyas-lamps",
    price: 899,
    height: "20 cm",
    material: "Heat-safe PETG",
    printTime: "11 hrs",
    rating: 4.8,
    reviews: 190,
    badge: "Bestseller",
    glyph: "deepam",
    short: "A five-faced kuthuvilakku-style stand for LED diyas.",
    description:
      "A traditional five-faced lamp stand with peacock crest, designed to hold LED tealights so your deepam glows all night safely. Plastic and open flame do not mix, so we include five warm flicker LEDs.",
    highlights: ["5 warm flicker LED tealights included", "Peacock crest finial", "Never use with open flame", "Battery life ~ 100 hrs"],
    finishes: ["silk-gold", "antique-bronze"],
  },
  {
    slug: "lotus-diya-set",
    name: "Lotus Diya Set of 6",
    category: "diyas-lamps",
    price: 599,
    compareAt: 749,
    height: "5 cm each",
    material: "Silk PLA",
    printTime: "6 hrs",
    rating: 4.6,
    reviews: 305,
    glyph: "lotus",
    short: "Six lotus diyas with LED tealights for Diwali and Karthigai.",
    description:
      "Line your doorway and rangoli with six petal diyas that never blow out. Each lotus cups a warm LED tealight and casts a soft petal-shaped glow.",
    highlights: ["Set of 6 with LEDs", "Reusable every festival", "Safe around children", "Stackable for storage"],
    finishes: ["silk-gold", "marble-white"],
  },
  {
    slug: "om-mandala-wall-panel",
    name: "Om Mandala Wall Panel",
    category: "wall-art",
    price: 1099,
    height: "30 cm dia",
    material: "Matte PLA",
    printTime: "12 hrs",
    rating: 4.7,
    reviews: 143,
    glyph: "om",
    short: "Layered Om inside a 108-petal mandala.",
    description:
      "A layered panel with Om at its heart and a 108-petal mandala around it, printed in two tones so it throws gentle shadows on the wall.",
    highlights: ["108-petal mandala", "Two-tone layered print", "Hidden keyhole mount", "Lightweight, easy to hang"],
    finishes: ["silk-gold", "marble-white", "antique-bronze"],
  },
  {
    slug: "shubh-labh-toran",
    name: "Shubh Labh Door Toran",
    category: "wall-art",
    price: 749,
    height: "60 cm wide",
    material: "Silk PLA",
    printTime: "10 hrs",
    rating: 4.5,
    reviews: 67,
    badge: "New",
    glyph: "chakra",
    short: "Mango leaf toran with Shubh and Labh plaques.",
    description:
      "An evergreen entrance blessing. Linked mango leaves and marigold bells hang from a bar bearing Shubh and Labh, printed so it never wilts.",
    highlights: ["Linked, flexible leaf chain", "Shubh & Labh plaques", "Adhesive hooks included", "Weather-safe indoors"],
    finishes: ["silk-gold", "hand-painted"],
  },
  {
    slug: "panchapatra-pooja-stand",
    name: "Pooja Thali Organiser",
    category: "pooja-essentials",
    price: 699,
    height: "26 cm dia",
    material: "Food-safe PETG",
    printTime: "8 hrs",
    rating: 4.6,
    reviews: 82,
    glyph: "lotus",
    short: "Compartment thali for kumkum, haldi, akshata and flowers.",
    description:
      "Keep the daily pooja tidy. Six lotus-shaped bowls hold kumkum, haldi, chandan, akshata and flowers, with a centre ring for your diya.",
    highlights: ["6 lotus compartments", "Centre diya ring", "Rinse-clean PETG", "Non-slip feet"],
    finishes: ["silk-gold", "marble-white"],
  },
  {
    slug: "agarbatti-stand-shankha",
    name: "Shankha Agarbatti Stand",
    category: "pooja-essentials",
    price: 349,
    height: "9 cm",
    material: "Heat-safe PETG",
    printTime: "3 hrs",
    rating: 4.5,
    reviews: 210,
    glyph: "om",
    short: "Conch-shaped incense holder with ash catcher.",
    description:
      "A conch-shaped stand that holds three agarbattis upright and catches every flake of ash in its curved shell.",
    highlights: ["Holds 3 sticks", "Built-in ash catcher", "Steel insert at the tip", "Easy to clean"],
    finishes: ["silk-gold", "marble-white", "antique-bronze"],
  },
  {
    slug: "trishul-damaru-keychain",
    name: "Trishul & Damaru Keychain",
    category: "gifts",
    price: 199,
    height: "6 cm",
    material: "Silk PLA",
    printTime: "40 min",
    rating: 4.7,
    reviews: 412,
    glyph: "trishul",
    short: "Mahadev's trishul and damaru on a brass-look ring.",
    description:
      "Carry Mahadev with you. A slim trishul with a tiny damaru charm, printed tough enough for daily keys.",
    highlights: ["Tough, flexible print", "Steel split ring", "Great return gift", "Bulk pricing on request"],
    finishes: ["silk-gold", "antique-bronze"],
  },
  {
    slug: "ganesha-car-dashboard",
    name: "Ganesha Car Dashboard Idol",
    deity: "Lord Ganesha",
    category: "gifts",
    price: 449,
    height: "7 cm",
    material: "Heat-resistant PETG",
    printTime: "2 hrs",
    rating: 4.8,
    reviews: 268,
    glyph: "om",
    short: "A compact Ganesha that will not warp in a hot car.",
    description:
      "Printed in heat-resistant PETG so it handles Indian summers on the dashboard, with a silicone pad that keeps it steady on every speed breaker.",
    highlights: ["Heat-resistant to ~70°C", "Anti-slip silicone pad", "Compact 7 cm", "A gift for every new car"],
    finishes: ["silk-gold", "hand-painted"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getFinish = (id: string) => finishes.find((f) => f.id === id);
export const getCategory = (id: string) => categories.find((c) => c.id === id);
