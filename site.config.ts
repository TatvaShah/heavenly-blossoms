import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Heavenly Blossoms",
  tagline: "Wedding and custom cakes with hand crafted sugar flowers in Toronto.",
  category: "Custom cakes and sugar flowers",
  schemaType: "Bakery",
  area: "Toronto, ON",
  siteUrl: "https://heavenly-blossoms.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#b24f78" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Cake artist in Toronto",
    headline: "Cakes that bloom with hand crafted sugar flowers",
    subhead: "Wedding and custom celebration cakes by Marina Patrick. Send a DM with your date and idea to start your cake.",
    images: [
      { src: "/images/cake-1.jpg", alt: "Two tier white cake with deep red sugar flowers" },
      { src: "/images/cake-3.jpg", alt: "White cake with pink sugar roses and a gold 55 topper" },
      { src: "/images/cake-5.jpg", alt: "Two tier cake with painted tiles and lemons" },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: ["Hand crafted sugar flowers", "2023 ACA Sugar Flowers Award Finalist", "Wedding and custom cakes", "Orders by Instagram DM"],

  about: {
    title: "Meet the cake artist",
    body: [
      "Heavenly Blossoms is the cake studio of Marina Patrick, a Toronto cake artist who specializes in hand crafted sugar flowers.",
      "Marina was a 2023 ACA Sugar Flowers Award Finalist. Every wedding and custom cake is designed around your celebration, with blooms shaped petal by petal.",
    ],
    image: { src: "/images/cake-6.jpg", alt: "Tall cake with sugar flowers and a gold topper" },
  },

  menu: {
    title: "What we make",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for a quote on your date and design.",
    groups: [
      {
        title: "Cakes and sugar work",
        note: "Quoted by DM",
        items: [
          { name: "Wedding cakes", description: "Tiered cakes finished with hand crafted sugar flowers." },
          { name: "Custom celebration cakes", description: "Birthdays, anniversaries, and milestones, designed around your idea." },
          { name: "Hand crafted sugar flowers", description: "Lifelike blooms made by hand for your cake." },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      { src: "/images/cake-1.jpg", width: 1200, height: 1600, alt: "Two tier white cake with red sugar flowers", caption: "Sugar flower cake", href: "https://www.instagram.com/p/De455CwDUFj/" },
      { src: "/images/cake-2.jpg", width: 1200, height: 1537, alt: "Colourful character birthday cake", caption: "Custom birthday cake", href: "https://www.instagram.com/p/DeW2YzTBf5Y/" },
      { src: "/images/cake-3.jpg", width: 1200, height: 1600, alt: "White cake with pink sugar roses", caption: "Custom cake", href: "https://www.instagram.com/p/DeH4cl2pXgI/" },
      { src: "/images/cake-4.jpg", width: 900, height: 1600, alt: "Emerald and gold anniversary cake", caption: "Emerald, gold and artistry", href: "https://www.instagram.com/reel/Dd_zjqxxqWi/" },
      { src: "/images/cake-5.jpg", width: 640, height: 1138, alt: "Two tier cake with painted tiles and lemons", caption: "Custom cake" },
      { src: "/images/cake-6.jpg", width: 901, height: 1600, alt: "Tall cake with sugar flowers", caption: "Celebration cake", href: "https://www.instagram.com/p/DczGhkLidR2/" },
      { src: "/images/cake-7.jpg", width: 900, height: 1600, alt: "Square birthday cake with a hand painted scene", caption: "Birthday cake" },
    ],
  },

  instagram: {
    handle: "heavenlyblossoms_",
    embeds: ["https://www.instagram.com/p/De455CwDUFj/"],
    embedsTitle: "Fresh from the studio",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Custom and wedding cake orders are taken by Instagram DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Heavenly Blossoms! I would love to order a cake.\nDate needed:\nServings or size:\nFlavour:\nDesign idea (I can send an inspo photo):",
    links: [{ label: "Facebook page", href: "https://www.facebook.com/102877654953396" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your date, servings, flavour, and design idea. You will get a quote back in the chat." },
    { q: "Do you make wedding cakes?", a: "Yes. Wedding and custom cakes are our specialty, finished with hand crafted sugar flowers." },
    { q: "Where are you located?", a: "Heavenly Blossoms is based in Toronto, Ontario." },
  ],

  contact: {
    area: "Toronto, Ontario",
    socials: [{ label: "Facebook", href: "https://www.facebook.com/102877654953396" }],
  },

  seo: {
    title: "Heavenly Blossoms | Custom cakes and sugar flowers in Toronto",
    description: "Wedding and custom cakes with hand crafted sugar flowers by Toronto cake artist Marina Patrick, ACA finalist. Order by Instagram DM with your date and idea.",
    keywords: ["custom cakes Toronto", "wedding cakes Toronto", "sugar flowers Toronto", "sugar flower cakes"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
