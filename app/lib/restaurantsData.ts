export type Restaurant = {
  name: string;
  category: string[];
  rating: number;
  priceRange: string;
  zone: string;
};

export const cartagenaRestaurants: Restaurant[] = [
  {
    name: "Carmen Cartagena",
    category: ["romantico", "gourmet", "premium"],
    rating: 4.7,
    priceRange: "90.000 – 160.000 COP",
    zone: "Centro Histórico",
  },
  {
    name: "La Cevichería",
    category: ["mariscos", "casual"],
    rating: 4.6,
    priceRange: "70.000 – 130.000 COP",
    zone: "Centro Histórico",
  },
  {
    name: "Alma Restaurante",
    category: ["romantico", "gourmet"],
    rating: 4.5,
    priceRange: "80.000 – 150.000 COP",
    zone: "Centro Histórico",
  },
  {
    name: "Di Silvio Trattoria",
    category: ["italiano", "casual"],
    rating: 4.4,
    priceRange: "50.000 – 100.000 COP",
    zone: "Getsemaní",
  },
  {
    name: "Carbon de Palo",
    category: ["carne", "premium"],
    rating: 4.6,
    priceRange: "80.000 – 170.000 COP",
    zone: "Bocagrande",
  },
  {
    name: "El Arsenal",
    category: ["bar", "cocteles", "romantico"],
    rating: 4.5,
    priceRange: "60.000 – 120.000 COP",
    zone: "Getsemaní",
  },
];