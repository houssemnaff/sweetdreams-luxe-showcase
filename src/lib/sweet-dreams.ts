import chocoLuxe from "@/assets/choco-luxe.jpg";
import redVelvet from "@/assets/red-velvet.jpg";
import royalWhite from "@/assets/royal-white.jpg";
import goldenRose from "@/assets/golden-rose.jpg";
import miniPizza from "@/assets/mini-pizza.jpg";
import kaakWarka from "@/assets/kaak-warka.jpg";
import baklawa from "@/assets/baklawa.jpg";

export const WHATSAPP_NUMBER = "21624220772";
export const INSTAGRAM_URL = "https://www.instagram.com/amal_sghairi/?hl=fr";

export const whatsappLink = (product?: string) => {
  const message = product
    ? `Bonjour Sweet Dreams ✨ Je souhaite commander : ${product}.`
    : "Bonjour Sweet Dreams ✨ Je souhaite passer une commande.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export type Product = {
  name: string;
  description: string;
  badge: string;
  image: string;
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "anniversaire",
    title: "Gâteaux d'Anniversaire",
    subtitle: "Birthday Cakes",
    products: [
      {
        name: "Choco-Luxe Birthday Cake",
        description: "Rich chocolate layers with gold leaf details.",
        badge: "Signature",
        image: chocoLuxe,
      },
      {
        name: "Red Velvet Dream",
        description: "Cream cheese frosting and fresh berries.",
        badge: "Best loved",
        image: redVelvet,
      },
    ],
  },
  {
    id: "fiancailles",
    title: "Gâteaux de Fiançailles",
    subtitle: "Engagement Cakes",
    products: [
      {
        name: "Royal White Elegance",
        description: "Multi-tier floral engagement cake.",
        badge: "Multi-tier",
        image: royalWhite,
      },
      {
        name: "Golden Rose Tier",
        description: "Custom fondant with edible gold accents.",
        badge: "Édition or",
        image: goldenRose,
      },
    ],
  },
  {
    id: "sales",
    title: "Salés & Traiteur",
    subtitle: "Savory & Traditional Pastries",
    products: [
      {
        name: "Assorted Mini Pizza & Pâté Box",
        description: "Box of savory bites.",
        badge: "Traiteur",
        image: miniPizza,
      },
      {
        name: "Authentic Kaak Warka",
        description: "Traditional Tunisian almond pastry (500g).",
        badge: "Tradition",
        image: kaakWarka,
      },
      {
        name: "Traditional Baklawa Tray",
        description: "Premium pistachio and almond layers.",
        badge: "Plateau",
        image: baklawa,
      },
    ],
  },
];
