export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Appetizers & Dim Sum" | "Chicken & Beef" | "Premium Seafood & Specialties" | "Rice & Noodles";
  image: string;
};

const images = {
  starter: "/mandarin-gourmet/images/060ecae0-9e88-4a61-8e97-2acb6a6128b7-retina-large.png",
  wok: "/mandarin-gourmet/images/690dc004-9200-4c46-93e3-4adfd9e57a87-5a437376-80be-4279-ad58-f0bcb169e54f.jpg",
  seafood: "/mandarin-gourmet/images/eeca7051-b5dd-4b5a-a366-3ae558355c78.jpg",
  rice: "/mandarin-gourmet/images/6f4470ce-9649-4607-8014-c93c1a454912-retina-large.jpg",
};

export const menuItems: MenuItem[] = [
  { id: "vegetable-spring-rolls", name: "Vegetable Spring Rolls", description: "Crisp rolls filled with seasoned vegetables.", price: 12, category: "Appetizers & Dim Sum", image: images.starter },
  { id: "pork-soup-dumplings", name: "Pork Soup Dumplings", description: "Steamed dumplings with savory pork broth.", price: 18, category: "Appetizers & Dim Sum", image: images.starter },
  { id: "shrimp-har-gow", name: "Shrimp Har Gow", description: "Delicate steamed shrimp dumplings.", price: 19, category: "Appetizers & Dim Sum", image: images.seafood },
  { id: "crispy-calamari", name: "Crispy Calamari", description: "Lightly seasoned and fried until golden.", price: 22, category: "Appetizers & Dim Sum", image: images.starter },
  { id: "bbq-pork-buns", name: "BBQ Pork Buns", description: "Soft steamed buns with sweet-savory BBQ pork.", price: 16, category: "Appetizers & Dim Sum", image: images.starter },
  { id: "general-tsos-chicken", name: "General Tso's Chicken", description: "Crisp chicken in a sweet, savory, lightly spicy sauce.", price: 26, category: "Chicken & Beef", image: images.wok },
  { id: "kung-pao-chicken", name: "Kung Pao Chicken", description: "Wok-seared chicken with chilies, peanuts, and aromatics.", price: 25, category: "Chicken & Beef", image: images.wok },
  { id: "mongolian-beef", name: "Mongolian Beef", description: "Tender beef with scallions in a rich savory glaze.", price: 32, category: "Chicken & Beef", image: images.wok },
  { id: "black-pepper-beef", name: "Black Pepper Beef", description: "Sliced beef with peppers and fragrant black pepper sauce.", price: 36, category: "Chicken & Beef", image: images.wok },
  { id: "orange-chicken", name: "Orange Chicken", description: "Crisp chicken glazed with bright citrus and spice.", price: 27, category: "Chicken & Beef", image: images.wok },
  { id: "honey-walnut-shrimp", name: "Honey Walnut Shrimp", description: "Crispy shrimp with honey cream sauce and candied walnuts.", price: 38, category: "Premium Seafood & Specialties", image: images.seafood },
  { id: "steamed-sea-bass", name: "Steamed Whole Sea Bass", description: "Whole sea bass steamed with delicate aromatics.", price: 68, category: "Premium Seafood & Specialties", image: images.seafood },
  { id: "cantonese-lobster", name: "Cantonese Lobster", description: "Lobster prepared Cantonese-style for the table.", price: 95, category: "Premium Seafood & Specialties", image: images.seafood },
  { id: "peking-duck", name: "Peking Duck (Whole)", description: "A celebratory whole duck with crisp skin and classic accompaniments.", price: 88, category: "Premium Seafood & Specialties", image: images.seafood },
  { id: "wagyu-stir-fry", name: "Wagyu Beef Stir-Fry", description: "Premium beef quickly stir-fried with seasonal aromatics.", price: 78, category: "Premium Seafood & Specialties", image: images.wok },
  { id: "vegetable-fried-rice", name: "Vegetable Fried Rice", description: "Wok-fried rice with fresh vegetables and scallions.", price: 18, category: "Rice & Noodles", image: images.rice },
  { id: "shrimp-fried-rice", name: "Shrimp Fried Rice", description: "Wok-fried rice with shrimp, egg, and vegetables.", price: 25, category: "Rice & Noodles", image: images.rice },
  { id: "singapore-noodles", name: "Singapore Noodles", description: "Curried rice noodles with vegetables and savory aromatics.", price: 26, category: "Rice & Noodles", image: images.rice },
  { id: "beef-chow-mein", name: "Beef Chow Mein", description: "Wok-tossed noodles with tender beef and vegetables.", price: 28, category: "Rice & Noodles", image: images.rice },
  { id: "seafood-lo-mein", name: "Seafood Lo Mein", description: "Soft noodles with seafood and vegetables.", price: 32, category: "Rice & Noodles", image: images.rice },
];
