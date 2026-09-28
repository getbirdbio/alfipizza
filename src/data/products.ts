export interface Product {
  id: string;
  name: string;
  category: 'GARLIC' | 'CLASSICS' | 'ALFI_FAVS';
  image: string;
}

export const products: Product[] = [
  // Garlic Section
  {
    id: 'og',
    name: 'The O.G.',
    category: 'GARLIC',
    image: '/pizzas/og_alfi_uber.png'
  },

  // Classics Section
  {
    id: 'margeritta',
    name: 'Margeritta',
    category: 'CLASSICS',
    image: '/pizzas/marg_alfi_uber.png'
  },
  {
    id: 'diavola',
    name: 'Diavola',
    category: 'CLASSICS',
    image: '/pizzas/diavola_alfi_uber.png'
  },
  {
    id: 'funghi',
    name: 'Funghi',
    category: 'CLASSICS',
    image: '/pizzas/fhungi_alfi_uber.png'
  },
  {
    id: 'quatro-stagione',
    name: 'Quatro Stagione',
    category: 'CLASSICS',
    image: '/pizzas/quatro_alfi_uber.png'
  },
  {
    id: 'margeritta-speciale',
    name: 'Margeritta Speciale',
    category: 'CLASSICS',
    image: '/pizzas/margspecial_alfi_uber.png'
  },
  {
    id: 'vegiterian',
    name: 'Vegiterian',
    category: 'CLASSICS',
    image: '/pizzas/veg_alfi_uber.png'
  },
  {
    id: 'sicilian',
    name: 'Sicilian',
    category: 'CLASSICS',
    image: '/pizzas/sicilian_alfi_uber.png'
  },
  {
    id: 'mexicana',
    name: 'Mexicana',
    category: 'CLASSICS',
    image: '/pizzas/mexicana.png'
  },

  // Alfi Favs Section
  {
    id: 'double-chorizo',
    name: 'Double Chorizo',
    category: 'ALFI_FAVS',
    image: '/pizzas/dblbeefchorizo_alfi_uber.png'
  },
  {
    id: 'prosciutto-rocket',
    name: 'Proscuito & Rocket',
    category: 'ALFI_FAVS',
    image: '/pizzas/prosrocket_alfi_uber.png'
  },
  {
    id: 'double-beef-chorizo',
    name: 'Double Beef Chorizo',
    category: 'ALFI_FAVS',
    image: '/pizzas/dblbeefchorizo_alfi_uber.png'
  },
  {
    id: 'pepperoncino',
    name: 'Pepperoncino',
    category: 'ALFI_FAVS',
    image: '/pizzas/pepperoncino_alfi_uber.png'
  }
]; 