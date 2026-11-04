// A starter guide to well-known Hindu temples across India.
// Timings and darshan rules change; visitors should confirm with the temple
// administration before travelling.

export type Region = "North" | "South" | "East" | "West" | "Central";

export type TemplePhoto = {
  src: string;
  alt: string;
  /** Photographer or rights holder, as the licence asks to be credited. */
  credit: string;
  /** e.g. "CC BY-SA 4.0". */
  license: string;
  /** Where the photo and its licence can be checked. */
  sourceUrl: string;
};

export type NativeScript = "deva" | "taml" | "telu" | "mlym" | "orya" | "beng" | "gujr";

/** Line drawing used for a temple until real photography is added. */
export type Silhouette = "gopuram" | "vimana" | "nagara" | "kalinga" | "himalayan" | "kerala" | "cave" | "dome";

export type Temple = {
  slug: string;
  /** The temple's name in the script of its region, shown as a large decorative title. */
  native: { text: string; script: NativeScript; lang: string };
  /** Latitude and longitude, used to place the temple on the yatra map. */
  geo: [number, number];
  silhouette: Silhouette;
  /**
   * Optional photograph. Files go in public/temples/<slug>.jpg (or any URL).
   * Freely licensed photos (e.g. Wikimedia Commons) must keep their credit and licence.
   */
  photo?: TemplePhoto;
  reach: { rail: string; air: string };
  name: string;
  deity: string;
  city: string;
  state: string;
  region: Region;
  era: string;
  style: string;
  bestTime: string;
  tags: string[];
  summary: string;
  story: string[];
  highlights: string[];
  festivals: string[];
  tip: string;
};

export const regions: Region[] = ["North", "South", "East", "West", "Central"];

export const temples: Temple[] = [
  {
    slug: "meenakshi-amman-madurai",
    photo: {
      src: "/temples/meenakshi-amman-madurai.jpg",
      alt: "The south gopuram of the Meenakshi Amman Temple, covered in painted stucco figures",
      credit: "MADHURANTHAKAN JAGADEESAN",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:S-TN-34_Meenakshi_Amman_Temple_South_Gopuram_enriched_with_delicate_Stucco_works.jpg",
    },
    native: { text: "மீனாட்சி அம்மன்", script: "taml", lang: "ta" },
    geo: [9.9195, 78.1193],
    silhouette: "gopuram",
    reach: { rail: "Madurai Junction, about 2 km", air: "Madurai Airport, about 12 km" },
    name: "Meenakshi Amman Temple",
    deity: "Goddess Meenakshi & Lord Sundareswarar (Shiva)",
    city: "Madurai",
    state: "Tamil Nadu",
    region: "South",
    era: "Ancient origins; present complex largely 16th–17th century (Nayak rulers)",
    style: "Dravidian",
    bestTime: "October to March",
    tags: ["Shakti", "Shiva", "Gopurams"],
    summary:
      "A city within a city, crowned by towering gopurams covered in thousands of painted figures.",
    story: [
      "The temple celebrates Meenakshi, a form of Parvati, and her divine marriage to Sundareswarar, a form of Shiva. Madurai has grown around the temple for centuries, its streets laid out in concentric squares around the shrine.",
      "The complex is famous for its gopurams, the tallest rising more than 50 metres, and for the Hall of a Thousand Pillars, each pillar carved with a different figure.",
    ],
    highlights: ["Painted gopurams", "Hall of a Thousand Pillars", "Golden Lotus Tank (Potramarai Kulam)", "Evening palliyarai (bedtime) ceremony"],
    festivals: ["Chithirai Thiruvizha (April–May), re-enacting the celestial wedding"],
    tip: "Visit at dusk for the palliyarai procession, and keep footwear at the counters outside the gates.",
  },
  {
    slug: "brihadeeswarar-thanjavur",
    photo: {
      src: "/temples/brihadeeswarar-thanjavur.jpg",
      alt: "The Brihadeeswarar Temple vimana lit up at dusk during Maha Shivaratri",
      credit: "Rainer Halama (edit by UnpetitproleX)",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_(edit).jpg",
    },
    native: { text: "பிரகதீசுவரர்", script: "taml", lang: "ta" },
    geo: [10.7828, 79.1318],
    silhouette: "vimana",
    reach: { rail: "Thanjavur Junction, about 2 km", air: "Tiruchirappalli Airport, about 60 km" },
    name: "Brihadeeswarar Temple",
    deity: "Lord Shiva",
    city: "Thanjavur",
    state: "Tamil Nadu",
    region: "South",
    era: "Completed c. 1010 CE by Rajaraja Chola I",
    style: "Dravidian (Chola)",
    bestTime: "October to March",
    tags: ["Shiva", "UNESCO", "Chola"],
    summary:
      "The Big Temple: a granite masterpiece of the Chola empire and part of a UNESCO World Heritage Site.",
    story: [
      "Built under Rajaraja Chola I, the temple's vimana rises about 66 metres over the sanctum and is topped by a massive granite capstone.",
      "It forms part of the 'Great Living Chola Temples' UNESCO World Heritage Site, and worship has continued here for more than a thousand years.",
    ],
    highlights: ["Towering vimana over the sanctum", "Monolithic Nandi", "Chola-era frescoes", "Giant Shiva lingam"],
    festivals: ["Maha Shivaratri", "Rajaraja Chola's Sadhaya Vizha (birth star celebration)"],
    tip: "The granite courtyard gets very hot by noon; go early morning or late afternoon.",
  },
  {
    slug: "tirumala-venkateswara",
    photo: {
      src: "/temples/tirumala-venkateswara.jpg",
      alt: "The white gopuram of the Tirumala temple below the green Seshachalam hills",
      credit: "Nikhilb239",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tirumala_090615.jpg",
    },
    native: { text: "శ్రీ వేంకటేశ్వర", script: "telu", lang: "te" },
    geo: [13.6833, 79.3474],
    silhouette: "gopuram",
    reach: { rail: "Tirupati, then about 20 km by road up the ghat", air: "Tirupati Airport (Renigunta), about 40 km" },
    name: "Sri Venkateswara Temple, Tirumala",
    deity: "Lord Venkateswara (Vishnu)",
    city: "Tirumala, near Tirupati",
    state: "Andhra Pradesh",
    region: "South",
    era: "Ancient; patronised by Pallava, Chola and Vijayanagara kings",
    style: "Dravidian",
    bestTime: "September to February",
    tags: ["Vishnu", "Pilgrimage", "Hills"],
    summary:
      "On the Seshachalam hills, one of the most visited pilgrimage sites in the world.",
    story: [
      "Devotees believe Lord Venkateswara appeared here to guide humanity through Kali Yuga. Many climb the stone steps from Alipiri on foot as an offering.",
      "The temple's gilded Ananda Nilayam vimana shines over the sanctum, and the Tirupati laddu prasadam is famous across India.",
    ],
    highlights: ["Ananda Nilayam golden vimana", "Tirupati laddu prasadam", "Alipiri footpath climb", "Hair offering (tonsure) tradition"],
    festivals: ["Brahmotsavam (September–October)", "Vaikunta Ekadasi"],
    tip: "Book darshan slots online in advance through the official TTD portal.",
  },
  {
    slug: "ramanathaswamy-rameswaram",
    photo: {
      src: "/temples/ramanathaswamy-rameswaram.jpg",
      alt: "The golden-yellow gopuram above the entrance of the Ramanathaswamy Temple",
      credit: "Ssriram mt",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ramanathaswamy_temple7.JPG",
    },
    native: { text: "இராமநாதசுவாமி", script: "taml", lang: "ta" },
    geo: [9.2881, 79.3174],
    silhouette: "gopuram",
    reach: { rail: "Rameswaram station, about 2 km", air: "Madurai Airport, about 175 km" },
    name: "Ramanathaswamy Temple",
    deity: "Lord Shiva (Jyotirlinga)",
    city: "Rameswaram",
    state: "Tamil Nadu",
    region: "South",
    era: "Expanded mainly between the 12th and 17th centuries",
    style: "Dravidian",
    bestTime: "October to April",
    tags: ["Shiva", "Jyotirlinga", "Char Dham"],
    summary:
      "An island Jyotirlinga with one of the longest temple corridors in India.",
    story: [
      "Tradition holds that Lord Rama worshipped Shiva here, which makes the temple sacred to both Shaiva and Vaishnava devotees. It is one of the twelve Jyotirlingas and one of the Char Dham.",
      "Its pillared outer corridor stretches for hundreds of metres and is among the longest in any Indian temple.",
    ],
    highlights: ["Grand pillared corridors", "Bathing in the 22 theerthams (wells)", "Agni Theertham sea bath", "Pamban bridge journey"],
    festivals: ["Maha Shivaratri", "Thirukalyanam (July–August)"],
    tip: "Carry a change of clothes if you plan to bathe in the theerthams before darshan.",
  },
  {
    slug: "padmanabhaswamy-thiruvananthapuram",
    photo: {
      src: "/temples/padmanabhaswamy-thiruvananthapuram.jpg",
      alt: "The east gopuram of the Sree Padmanabhaswamy Temple above its stone steps",
      credit: "Rahulrnath001",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sree_Padmanabhaswamy_temple_01.jpg",
    },
    native: { text: "ശ്രീ പത്മനാഭസ്വാമി", script: "mlym", lang: "ml" },
    geo: [8.4828, 76.9436],
    silhouette: "kerala",
    reach: { rail: "Thiruvananthapuram Central, about 1 km", air: "Thiruvananthapuram International Airport, about 6 km" },
    name: "Sree Padmanabhaswamy Temple",
    deity: "Lord Vishnu (Anantha Shayana)",
    city: "Thiruvananthapuram",
    state: "Kerala",
    region: "South",
    era: "Ancient; present structure rebuilt in the 18th century by the Travancore kings",
    style: "Kerala & Dravidian fusion",
    bestTime: "October to March",
    tags: ["Vishnu", "Divya Desam"],
    summary:
      "Vishnu reclines on the serpent Anantha, seen through three doors of the sanctum.",
    story: [
      "The reclining Vishnu here is so large that devotees view the deity through three separate doors: the face, the navel with Brahma on a lotus, and the feet.",
      "The temple is closely tied to the royal family of Travancore and is one of the 108 Divya Desams sacred to Vaishnavas.",
    ],
    highlights: ["Reclining Vishnu seen through three doors", "Seven-tiered gopuram", "Stone corridors with carved pillars"],
    festivals: ["Alpashy and Panguni Utsavams", "Lakshadeepam (once every six years)"],
    tip: "A strict dress code applies: dhoti for men, saree or long skirt for women. Rentals are available nearby.",
  },
  {
    slug: "kashi-vishwanath-varanasi",
    photo: {
      src: "/temples/kashi-vishwanath-varanasi.jpg",
      alt: "The golden spires of the Kashi Vishwanath Temple glowing at night",
      credit: "Immanuelle",
      license: "CC BY 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kashi_Vishwanath_Temple_Main_Area-3.jpg",
    },
    native: { text: "काशी विश्वनाथ", script: "deva", lang: "hi" },
    geo: [25.3109, 83.0107],
    silhouette: "nagara",
    reach: { rail: "Varanasi Junction, about 5 km", air: "Lal Bahadur Shastri Airport, about 25 km" },
    name: "Kashi Vishwanath Temple",
    deity: "Lord Shiva (Jyotirlinga)",
    city: "Varanasi",
    state: "Uttar Pradesh",
    region: "North",
    era: "Present temple built in 1780 by Ahilyabai Holkar",
    style: "Nagara",
    bestTime: "October to March",
    tags: ["Shiva", "Jyotirlinga", "Ganga"],
    summary:
      "The golden-spired Jyotirlinga in the world's oldest living city, steps from the Ganga.",
    story: [
      "Kashi is believed to be Shiva's own city, and Vishwanath, 'Lord of the Universe', is one of the twelve Jyotirlingas.",
      "The present temple was built by Maratha queen Ahilyabai Holkar, and its spires were later gilded with gold donated by Maharaja Ranjit Singh. The Kashi Vishwanath Dham corridor now links the temple directly to the ghats.",
    ],
    highlights: ["Gold-plated spires", "Corridor to Lalita and Manikarnika ghats", "Ganga Aarti at Dashashwamedh Ghat", "Mangala Aarti before dawn"],
    festivals: ["Maha Shivaratri", "Dev Deepawali (Kartik Purnima)"],
    tip: "Phones and bags are not allowed inside; use the lockers along the corridor.",
  },
  {
    slug: "kedarnath",
    photo: {
      src: "/temples/kedarnath.jpg",
      alt: "Kedarnath Temple with snow-covered Himalayan peaks behind",
      credit: "Shivam Kumar 766",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kedarnath_Temple_in_Rainy_season.jpg",
    },
    native: { text: "केदारनाथ", script: "deva", lang: "hi" },
    geo: [30.7352, 79.0669],
    silhouette: "himalayan",
    reach: { rail: "Rishikesh, then by road to Gaurikund and a trek of about 16 km", air: "Jolly Grant Airport, Dehradun" },
    name: "Kedarnath Temple",
    deity: "Lord Shiva (Jyotirlinga)",
    city: "Kedarnath",
    state: "Uttarakhand",
    region: "North",
    era: "Ancient; traditionally linked to the Pandavas and Adi Shankaracharya",
    style: "Himalayan stone (Katyuri)",
    bestTime: "May to June, September to October",
    tags: ["Shiva", "Jyotirlinga", "Char Dham", "Himalaya"],
    summary:
      "A stone shrine at about 3,580 m in the Garhwal Himalaya, open only from spring to Diwali.",
    story: [
      "Kedarnath is the highest of the twelve Jyotirlingas and part of the Chota Char Dham of Uttarakhand. The temple is built of large grey stone slabs and has stood through centuries of Himalayan winters.",
      "Pilgrims trek roughly 16 km from Gaurikund. In winter the deity is carried down to Ukhimath, and the temple stays closed under snow.",
    ],
    highlights: ["Trek from Gaurikund", "Bhairavnath temple above the shrine", "Adi Shankaracharya Samadhi", "Mandakini river views"],
    festivals: ["Opening on Akshaya Tritiya (April–May)", "Closing on Bhai Dooj (October–November)"],
    tip: "Register for the Char Dham yatra before you travel and plan an acclimatisation day.",
  },
  {
    slug: "badrinath",
    photo: {
      src: "/temples/badrinath.jpg",
      alt: "The brightly painted facade of the Badrinath Temple with saffron flags",
      credit: "Anubha khare",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Badrinath_Temple_,_Uttarakhand.jpg",
    },
    native: { text: "बद्रीनाथ", script: "deva", lang: "hi" },
    geo: [30.7433, 79.4938],
    silhouette: "himalayan",
    reach: { rail: "Rishikesh, then about 295 km by road", air: "Jolly Grant Airport, Dehradun" },
    name: "Badrinath Temple",
    deity: "Lord Vishnu (Badrinarayan)",
    city: "Badrinath",
    state: "Uttarakhand",
    region: "North",
    era: "Re-established by Adi Shankaracharya, 8th–9th century tradition",
    style: "Himalayan, with a bright painted facade",
    bestTime: "May to June, September to October",
    tags: ["Vishnu", "Char Dham", "Himalaya"],
    summary:
      "Vishnu's Himalayan abode on the banks of the Alaknanda, one of the four Char Dham.",
    story: [
      "Badrinath is one of the four Char Dham pilgrimages established in the tradition of Adi Shankaracharya, and one of the 108 Divya Desams.",
      "Its colourful facade stands between the Nar and Narayan peaks, and pilgrims bathe in the Tapt Kund hot springs before darshan.",
    ],
    highlights: ["Tapt Kund hot springs", "Colourful arched facade", "Mana, often called the last village", "Neelkanth peak views"],
    festivals: ["Opening in April–May", "Mata Murti Ka Mela (September)"],
    tip: "Roads can close during the monsoon; check conditions before setting out from Rishikesh.",
  },
  {
    slug: "vaishno-devi",
    photo: {
      src: "/temples/vaishno-devi.jpg",
      alt: "The Vaishno Devi Bhawan on the slopes of the Trikuta hills",
      credit: "KDhruv406",
      license: "CC BY 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shri_Mata_Vaishno_Devi_Bhawan,_Katra_Jammu_%26_Kashmir_INDIA.jpg",
    },
    native: { text: "वैष्णो देवी", script: "deva", lang: "hi" },
    geo: [33.0308, 74.949],
    silhouette: "cave",
    reach: { rail: "Shri Mata Vaishno Devi Katra station", air: "Jammu Airport, about 50 km" },
    name: "Mata Vaishno Devi Shrine",
    deity: "Goddess Vaishno Devi",
    city: "Katra",
    state: "Jammu & Kashmir",
    region: "North",
    era: "Ancient cave shrine",
    style: "Natural cave shrine",
    bestTime: "March to October",
    tags: ["Shakti", "Trek", "Cave"],
    summary:
      "A holy cave in the Trikuta hills, where the goddess is worshipped as three natural rock forms (pindis).",
    story: [
      "Pilgrims trek roughly 12 km from Katra to the Bhawan, where the goddess is worshipped as three pindis representing Mahakali, Mahalakshmi and Mahasaraswati.",
      "The greeting 'Jai Mata Di' echoes along the path day and night throughout the year.",
    ],
    highlights: ["Trek from Katra", "Three holy pindis", "Bhairon Baba temple", "Helicopter and battery-car options"],
    festivals: ["Navratri (spring and autumn)"],
    tip: "A yatra registration (RFID card) is mandatory; get it online or at Katra before starting.",
  },
  {
    slug: "jagannath-puri",
    photo: {
      src: "/temples/jagannath-puri.jpg",
      alt: "The tall spire of the Shree Jagannath Temple in Puri above crowds of pilgrims",
      credit: "Prachites",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shri_Jagannath_temple.jpg",
    },
    native: { text: "ଜଗନ୍ନାଥ", script: "orya", lang: "or" },
    geo: [19.8048, 85.8179],
    silhouette: "kalinga",
    reach: { rail: "Puri station, about 3 km", air: "Biju Patnaik Airport, Bhubaneswar, about 60 km" },
    name: "Shree Jagannath Temple",
    deity: "Lord Jagannath, Balabhadra & Subhadra",
    city: "Puri",
    state: "Odisha",
    region: "East",
    era: "12th century, begun by King Anantavarman Chodaganga Deva",
    style: "Kalinga",
    bestTime: "October to March; June–July for Rath Yatra",
    tags: ["Vishnu", "Krishna", "Char Dham"],
    summary:
      "Home of the Rath Yatra, where the deities ride giant wooden chariots through the streets.",
    story: [
      "Lord Jagannath, a form of Krishna, is worshipped here with his siblings Balabhadra and Subhadra, carved in wood and renewed in the Nabakalebara ritual.",
      "Each summer the deities are drawn through Puri on huge chariots during the Rath Yatra, one of India's largest religious processions. The temple kitchen serves Mahaprasad to thousands every day.",
    ],
    highlights: ["Rath Yatra chariots", "Mahaprasad from the temple kitchen", "Flag changed daily on the spire", "Puri beach nearby"],
    festivals: ["Rath Yatra (June–July)", "Snana Yatra"],
    tip: "Entry to the inner temple is restricted to Hindus; others can view the spire from nearby rooftops.",
  },
  {
    slug: "konark-sun-temple",
    photo: {
      src: "/temples/konark-sun-temple.jpg",
      alt: "The stone Sun Temple at Konark on its lawns",
      credit: "Subham9423",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Konarka_Temple.jpg",
    },
    native: { text: "କୋଣାର୍କ", script: "orya", lang: "or" },
    geo: [19.8876, 86.0945],
    silhouette: "kalinga",
    reach: { rail: "Puri station, about 35 km", air: "Biju Patnaik Airport, Bhubaneswar, about 65 km" },
    name: "Konark Sun Temple",
    deity: "Surya, the Sun God",
    city: "Konark",
    state: "Odisha",
    region: "East",
    era: "13th century, King Narasimhadeva I (Eastern Ganga dynasty)",
    style: "Kalinga",
    bestTime: "October to February",
    tags: ["Surya", "UNESCO", "Architecture"],
    summary:
      "A colossal stone chariot for the Sun God, with 24 carved wheels and seven horses.",
    story: [
      "The whole temple is designed as Surya's chariot, pulled by seven horses on 24 intricately carved stone wheels that also work as sundials.",
      "Though the main sanctum tower has fallen, the surviving audience hall and carvings make Konark a UNESCO World Heritage Site and a symbol of Odisha.",
    ],
    highlights: ["24 sundial wheels", "Seven stone horses", "Detailed relief carvings", "Chandrabhaga beach nearby"],
    festivals: ["Konark Dance Festival (December)", "Chandrabhaga Mela (Magha Saptami)"],
    tip: "Hire an ASI-approved guide to learn how the wheels tell time.",
  },
  {
    slug: "kamakhya-guwahati",
    photo: {
      src: "/temples/kamakhya-guwahati.jpg",
      alt: "The beehive-shaped domes of the Kamakhya Temple on Nilachal Hill",
      credit: "Devkmaravi",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kamakhya_Temple_-_DEV_8829.jpg",
    },
    native: { text: "কামাখ্যা", script: "beng", lang: "as" },
    geo: [26.1664, 91.7055],
    silhouette: "dome",
    reach: { rail: "Kamakhya Junction or Guwahati station", air: "Lokpriya Gopinath Bordoloi Airport, Guwahati, about 20 km" },
    name: "Kamakhya Temple",
    deity: "Goddess Kamakhya (Shakti)",
    city: "Guwahati",
    state: "Assam",
    region: "East",
    era: "Rebuilt in the 16th–17th century by the Koch kings",
    style: "Nilachal type, with a beehive dome",
    bestTime: "October to April; June for Ambubachi Mela",
    tags: ["Shakti", "Shakti Peetha", "Tantra"],
    summary:
      "One of the most revered Shakti Peethas, on Nilachal Hill above the Brahmaputra.",
    story: [
      "Kamakhya is among the most important Shakti Peethas and a major centre of Shakta and Tantric worship. There is no idol in the sanctum; the goddess is worshipped in the form of a stone yoni kept moist by a natural spring.",
      "The temple's beehive-shaped dome is a distinctive Assamese style.",
    ],
    highlights: ["Beehive-shaped dome", "Natural spring in the sanctum", "Views over the Brahmaputra", "Dasa Mahavidya shrines"],
    festivals: ["Ambubachi Mela (June)", "Durga Puja"],
    tip: "Queues can be very long; the early morning is the calmest time.",
  },
  {
    slug: "somnath",
    photo: {
      src: "/temples/somnath.jpg",
      alt: "The golden sandstone Somnath Temple by the Arabian Sea",
      credit: "B. SurajPatro1997",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Somanath_mandir_(cropped).jpg",
    },
    native: { text: "સોમનાથ", script: "gujr", lang: "gu" },
    geo: [20.888, 70.4012],
    silhouette: "nagara",
    reach: { rail: "Veraval Junction, about 7 km", air: "Diu Airport, about 85 km, or Rajkot" },
    name: "Somnath Temple",
    deity: "Lord Shiva (Jyotirlinga)",
    city: "Prabhas Patan, Veraval",
    state: "Gujarat",
    region: "West",
    era: "Ancient; present temple rebuilt and consecrated in 1951",
    style: "Chalukya (Maru-Gurjara)",
    bestTime: "October to March",
    tags: ["Shiva", "Jyotirlinga", "Seaside"],
    summary:
      "Revered as the first of the twelve Jyotirlingas, standing on the Arabian Sea shore.",
    story: [
      "Somnath has been destroyed and rebuilt many times in its history, and is often called the 'Shrine Eternal'. The present temple was rebuilt after Independence with the support of Sardar Vallabhbhai Patel.",
      "The Baan Stambh arrow pillar in the courtyard notes that there is no land in a straight line between this shore and the South Pole.",
    ],
    highlights: ["Sea-facing temple", "Evening light and sound show", "Baan Stambh pillar", "Triveni Sangam nearby"],
    festivals: ["Maha Shivaratri", "Kartik Purnima fair"],
    tip: "Stay for the evening aarti followed by the light and sound show.",
  },
  {
    slug: "siddhivinayak-mumbai",
    photo: {
      src: "/temples/siddhivinayak-mumbai.jpg",
      alt: "The Shree Siddhivinayak Temple in Prabhadevi, Mumbai, under a blue sky",
      credit: "Swaminathan",
      license: "CC BY 2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Famous_SiddhiVinayak_Temple.jpg",
    },
    native: { text: "सिद्धिविनायक", script: "deva", lang: "mr" },
    geo: [19.0169, 72.8301],
    silhouette: "nagara",
    reach: { rail: "Dadar station, about 2 km", air: "Chhatrapati Shivaji Maharaj International Airport, about 12 km" },
    name: "Shree Siddhivinayak Temple",
    deity: "Lord Ganesha",
    city: "Mumbai",
    state: "Maharashtra",
    region: "West",
    era: "Built in 1801; rebuilt and expanded in the 1990s",
    style: "Modern temple architecture",
    bestTime: "All year; Tuesdays are busiest",
    tags: ["Ganesha", "City"],
    summary:
      "Mumbai's beloved Ganesha temple, with a gold-plated dome and a right-trunked idol.",
    story: [
      "The black-stone idol of Siddhivinayak has its trunk turned to the right, which devotees consider especially powerful and quick to grant wishes.",
      "Actors, cricketers and commuters alike stop here, and many walk barefoot to the temple on Tuesdays.",
    ],
    highlights: ["Right-trunk Ganesha", "Gold-plated inner dome", "Carved wooden doors with the Ashtavinayaka"],
    festivals: ["Ganesh Chaturthi", "Angarki Chaturthi"],
    tip: "Weekday mornings other than Tuesday have the shortest queues.",
  },
  {
    slug: "khajuraho-kandariya-mahadeva",
    photo: {
      src: "/temples/khajuraho-kandariya-mahadeva.jpg",
      alt: "The carved sandstone spires of the Kandariya Mahadeva Temple, Khajuraho",
      credit: "China Crisis",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Khajuraho.KandariyaMahadeva.jpg",
    },
    native: { text: "कंदरिया महादेव", script: "deva", lang: "hi" },
    geo: [24.8523, 79.9199],
    silhouette: "nagara",
    reach: { rail: "Khajuraho station, about 8 km", air: "Khajuraho Airport, about 5 km" },
    name: "Kandariya Mahadeva Temple, Khajuraho",
    deity: "Lord Shiva",
    city: "Khajuraho",
    state: "Madhya Pradesh",
    region: "Central",
    era: "c. 1030 CE, Chandela dynasty",
    style: "Nagara",
    bestTime: "October to March",
    tags: ["Shiva", "UNESCO", "Sculpture"],
    summary:
      "The largest temple of the Khajuraho group, its spires rising like Himalayan peaks.",
    story: [
      "Built by the Chandela kings, Kandariya Mahadeva is the grandest of the Khajuraho temples, a UNESCO World Heritage Site. Its many spires build up to a main shikhara meant to evoke Mount Kailash.",
      "Its walls carry hundreds of finely carved figures of gods, celestial beings, musicians and daily life.",
    ],
    highlights: ["Rising cluster of shikharas", "Hundreds of sculpted figures", "Western Group of temples", "Evening sound and light show"],
    festivals: ["Khajuraho Dance Festival (February)", "Maha Shivaratri at Matangeshwar temple"],
    tip: "Spend a full morning at the Western Group; the light on the sandstone is best early.",
  },
  {
    slug: "mahakaleshwar-ujjain",
    photo: {
      src: "/temples/mahakaleshwar-ujjain.jpg",
      alt: "The Mahakaleshwar Temple spire lit up at night",
      credit: "Ashverse",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mahakaleshwar_Temple,_Ujjain.jpg",
    },
    native: { text: "महाकालेश्वर", script: "deva", lang: "hi" },
    geo: [23.1828, 75.7682],
    silhouette: "nagara",
    reach: { rail: "Ujjain Junction, about 2 km", air: "Devi Ahilyabai Holkar Airport, Indore, about 55 km" },
    name: "Mahakaleshwar Jyotirlinga",
    deity: "Lord Shiva (Jyotirlinga)",
    city: "Ujjain",
    state: "Madhya Pradesh",
    region: "Central",
    era: "Ancient; present structure rebuilt in the 18th century by the Marathas",
    style: "Bhumija, Chalukya and Maratha styles",
    bestTime: "October to March",
    tags: ["Shiva", "Jyotirlinga", "Bhasma Aarti"],
    summary:
      "The south-facing Jyotirlinga, famous for its pre-dawn Bhasma Aarti.",
    story: [
      "Mahakaleshwar is the only Jyotirlinga whose lingam faces south (dakshinamukhi). Ujjain is also one of the four cities that host the Kumbh Mela, here called Simhastha.",
      "The Bhasma Aarti, performed before dawn, is one of the most sought-after rituals in India. The Mahakal Lok corridor now surrounds the temple.",
    ],
    highlights: ["Pre-dawn Bhasma Aarti", "Mahakal Lok corridor", "Shipra river ghats", "Nagchandreshwar shrine (opens on Nag Panchami)"],
    festivals: ["Maha Shivaratri", "Simhastha Kumbh (every 12 years)", "Shravan Mondays"],
    tip: "Bhasma Aarti passes are limited; book online well before your visit.",
  },
];

/** Rough reading time for the temple story, in minutes. */
export const readMinutes = (t: Temple) => {
  const words = [t.summary, ...t.story, ...t.highlights, ...t.festivals, t.tip].join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 180) + 1);
};

export const getTemple = (slug: string) => temples.find((t) => t.slug === slug);

/** The twelve Jyotirlingas. `slug` links to a guide page when we have one. */
export const jyotirlingas: { name: string; place: string; slug?: string; geo?: [number, number] }[] = [
  { name: "Somnath", place: "Prabhas Patan, Gujarat", slug: "somnath" },
  { name: "Mallikarjuna", place: "Srisailam, Andhra Pradesh", geo: [16.0742, 78.8687] },
  { name: "Mahakaleshwar", place: "Ujjain, Madhya Pradesh", slug: "mahakaleshwar-ujjain" },
  { name: "Omkareshwar", place: "Khandwa, Madhya Pradesh", geo: [22.2457, 76.1511] },
  { name: "Kedarnath", place: "Rudraprayag, Uttarakhand", slug: "kedarnath" },
  { name: "Bhimashankar", place: "Pune, Maharashtra", geo: [19.0718, 73.5357] },
  { name: "Kashi Vishwanath", place: "Varanasi, Uttar Pradesh", slug: "kashi-vishwanath-varanasi" },
  { name: "Trimbakeshwar", place: "Nashik, Maharashtra", geo: [19.9322, 73.5309] },
  { name: "Vaidyanath", place: "Deoghar, Jharkhand", geo: [24.4924, 86.6996] },
  { name: "Nageshwar", place: "Dwarka, Gujarat", geo: [22.3359, 69.0868] },
  { name: "Ramanathaswamy", place: "Rameswaram, Tamil Nadu", slug: "ramanathaswamy-rameswaram" },
  { name: "Grishneshwar", place: "Ellora, Maharashtra", geo: [20.0249, 75.1696] },
];

/** The Char Dham of Adi Shankaracharya's tradition. */
export const charDham: { name: string; place: string; direction: string; slug?: string; geo?: [number, number] }[] = [
  { name: "Badrinath", place: "Uttarakhand", direction: "North", slug: "badrinath" },
  { name: "Jagannath Puri", place: "Odisha", direction: "East", slug: "jagannath-puri" },
  { name: "Rameswaram", place: "Tamil Nadu", direction: "South", slug: "ramanathaswamy-rameswaram" },
  { name: "Dwarka", place: "Gujarat", direction: "West", geo: [22.2376, 68.9674] },
];

/** Festival calendar. Lunar dates shift each year, so months are approximate. */
export const festivalCalendar: { months: string; name: string; slug: string; note: string }[] = [
  { months: "Feb", name: "Khajuraho Dance Festival", slug: "khajuraho-kandariya-mahadeva", note: "Classical dance against the lit temples" },
  { months: "Feb – Mar", name: "Maha Shivaratri", slug: "kashi-vishwanath-varanasi", note: "All-night worship at every Shiva temple" },
  { months: "Apr – May", name: "Chithirai Thiruvizha", slug: "meenakshi-amman-madurai", note: "The celestial wedding of Meenakshi and Sundareswarar" },
  { months: "Apr – May", name: "Kedarnath opens", slug: "kedarnath", note: "Doors open on Akshaya Tritiya after winter" },
  { months: "Jun", name: "Ambubachi Mela", slug: "kamakhya-guwahati", note: "The temple closes for three days, then reopens to huge crowds" },
  { months: "Jun – Jul", name: "Rath Yatra", slug: "jagannath-puri", note: "The deities ride giant chariots through Puri" },
  { months: "Aug – Sep", name: "Ganesh Chaturthi", slug: "siddhivinayak-mumbai", note: "Mumbai's biggest festival begins at Siddhivinayak" },
  { months: "Sep – Oct", name: "Brahmotsavam", slug: "tirumala-venkateswara", note: "Nine days of processions on the Tirumala hills" },
  { months: "Sep – Oct", name: "Navratri", slug: "vaishno-devi", note: "Peak pilgrimage season to the holy cave" },
  { months: "Nov", name: "Dev Deepawali", slug: "kashi-vishwanath-varanasi", note: "The ghats of Kashi lit with countless diyas" },
  { months: "Dec", name: "Konark Dance Festival", slug: "konark-sun-temple", note: "Odissi and more in the open-air auditorium by the Sun Temple" },
];
