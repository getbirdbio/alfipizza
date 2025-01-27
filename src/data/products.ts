export interface Product {
  id: string;
  name: string;
  category: 'GARLIC' | 'CLASSICS' | 'ALFI_FAVS';
  price: number;
  description: string;
  subDescription?: string;
  image: string;
}

export const products: Product[] = [
  // Garlic Section
  {
    id: 'og',
    name: 'The O.G.',
    category: 'GARLIC',
    price: 120,
    description: 'Our signature garlic pizza',
    image: '/pizzas/og_alfi_uber.png',
    subDescription: 'The original garlic pizza that started it all'
  },

  // Classics Section
  {
    id: 'margeritta',
    name: 'Margeritta',
    category: 'CLASSICS',
    price: 120,
    description: 'Classic Italian pizza with tomato and mozzarella',
    image: '/pizzas/marg_alfi_uber.png',
    subDescription: 'The timeless classic'
  },
  {
    id: 'diavola',
    name: 'Diavola',
    category: 'CLASSICS',
    price: 140,
    description: 'Spicy salami, tomato sauce, mozzarella',
    image: '/pizzas/diavola_alfi_uber.png',
    subDescription: 'For those who love it hot'
  },
  {
    id: 'funghi',
    name: 'Funghi',
    category: 'CLASSICS',
    price: 135,
    description: 'Fresh mushrooms, mozzarella, herbs',
    image: '/pizzas/fhungi_alfi_uber.png',
    subDescription: 'Earthy mushroom goodness'
  },
  {
    id: 'quatro-stagione',
    name: 'Quatro Stagione',
    category: 'CLASSICS',
    price: 150,
    description: 'Four seasons on one pizza',
    image: '/pizzas/quatro_alfi_uber.png',
    subDescription: 'A taste of all seasons'
  },
  {
    id: 'margeritta-speciale',
    name: 'Margeritta Speciale',
    category: 'CLASSICS',
    price: 140,
    description: 'Our special take on the classic',
    image: '/pizzas/margspecial_alfi_uber.png',
    subDescription: 'A special twist on tradition'
  },
  {
    id: 'vegiterian',
    name: 'Vegiterian',
    category: 'CLASSICS',
    price: 145,
    description: 'Fresh vegetables and mozzarella',
    image: '/pizzas/veg_alfi_uber.png',
    subDescription: 'Garden fresh vegetables'
  },
  {
    id: 'sicilian',
    name: 'Sicilian',
    category: 'CLASSICS',
    price: 155,
    description: 'Traditional Sicilian style pizza',
    image: '/pizzas/sicilian_alfi_uber.png',
    subDescription: 'A taste of Sicily'
  },
  {
    id: 'mexicana',
    name: 'Mexicana',
    category: 'CLASSICS',
    price: 155,
    description: 'Mexican inspired flavors',
    image: '/pizzas/mexicana.png',
    subDescription: 'South of the border taste'
  },

  // Alfi Favs Section
  {
    id: 'double-chorizo',
    name: 'Double Chorizo',
    category: 'ALFI_FAVS',
    price: 165,
    description: 'Double the chorizo, double the flavor',
    image: '/pizzas/dblbeefchorizo_alfi_uber.png',
    subDescription: 'For serious chorizo lovers'
  },
  {
    id: 'prosciutto-rocket',
    name: 'Proscuito & Rocket',
    category: 'ALFI_FAVS',
    price: 165,
    description: 'Prosciutto and fresh rocket leaves',
    image: '/pizzas/dblbeefchorizo_alfi_uber.png',
    subDescription: 'Fresh and sophisticated'
  },
  {
    id: 'double-beef-chorizo',
    name: 'Double Beef Chorizo',
    category: 'ALFI_FAVS',
    price: 170,
    description: 'Double beef and chorizo combination',
    image: '/pizzas/dblbeefchorizo_alfi_uber.png',
    subDescription: 'A meaty masterpiece'
  },
  {
    id: 'pepperoncino',
    name: 'Pepperoncino',
    category: 'ALFI_FAVS',
    price: 155,
    description: 'Spicy pepperoncini peppers',
    image: '/pizzas/pepperoncino_alfi_uber.png',
    subDescription: 'With a spicy kick'
  }
]; 