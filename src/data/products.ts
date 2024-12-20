export interface Product {
  id: string;
  name: string;
  category: 'GARLIC' | 'CLASSICS' | 'ALFI_FAVS' | 'DIPS' | 'DRINKS' | 'DESSERT';
  price: number;
  description: string;
  subDescription?: string;
  image?: string;
}

export const products: Product[] = [
  // Garlic Section
  {
    id: 'cheesy-garlic',
    name: 'CHEESY GARLIC',
    category: 'GARLIC',
    price: 120,
    description: 'Mozzarella, herbs, garlic',
    subDescription: 'Soft, cheesy goodness with a perfect blend of herbs and garlic on a light, airy dough.'
  },
  {
    id: 'garlic-bread',
    name: 'GARLIC BREAD',
    category: 'GARLIC',
    price: 110,
    description: 'Focaccia bread, garlic, olive oil',
    subDescription: 'Crispy, herb-infused focaccia paired with fresh garlic and a drizzle of olive oil.'
  },
  {
    id: 'nap-garlic-parmesan',
    name: 'NAP GARLIC PARMESAN',
    category: 'GARLIC',
    price: 130,
    description: 'Focaccia bread, garlic, olive oil',
    subDescription: 'Crispy, herb-infused focaccia paired with fresh garlic and a drizzle of olive oil.'
  },
  {
    id: 'garlic-ricotta',
    name: 'GARLIC AND RICOTTA',
    category: 'GARLIC',
    price: 150,
    description: 'Piped ricotta, garlic, olive oil, herbs',
    subDescription: 'Delicate star-like dollops of creamy ricotta, kissed with roasted garlic and a drizzle of olive oil.'
  },

  // Classics Section
  {
    id: 'margherita',
    name: 'MARGHERITA',
    category: 'CLASSICS',
    price: 110,
    description: 'Mozzarella, basil leaf, Nap sauce',
    subDescription: 'The timeless classic – velvety mozzarella and fresh basil on a rich Nap sauce base.'
  },
  {
    id: 'sicilian',
    name: 'SICILIAN',
    category: 'CLASSICS',
    price: 160,
    description: 'Capers, anchovies, kalamata olives',
    subDescription: 'A bold pizza featuring briny capers, salty anchovies, and savory olives. Puttanesca Option: No anchovies, green & black olives, and diced tomatoes.'
  },
  {
    id: 'funghi',
    name: 'FUNGHI',
    category: 'CLASSICS',
    price: 160,
    description: 'Creamy porcini, mozzarella, truffle',
    subDescription: 'Earthy and luxurious porcini mushrooms with truffle, perfectly melted into creamy mozzarella.'
  },
  {
    id: 'diavola',
    name: 'DIAVOLA',
    category: 'CLASSICS',
    price: 180,
    description: 'Mozzarella, spicy Nap sauce',
    subDescription: 'Spicy, fiery, and delicious – zesty Nap sauce with melted mozzarella for a bold kick.'
  },
  {
    id: 'quatro-stagioni',
    name: 'QUATRO STAGIONI',
    category: 'CLASSICS',
    price: 175,
    description: 'Italian salami, artichoke, olives, onion',
    subDescription: 'Savory Italian salami, tangy artichokes, briny olives, and sweet caramelized onions.'
  },
  {
    id: 'melanzane',
    name: 'MELANZANE',
    category: 'CLASSICS',
    price: 160,
    description: 'Roasted eggplant, mozzarella, Nap sauce, basil',
    subDescription: 'Tender roasted eggplant, rich Nap sauce, creamy mozzarella, and fragrant basil. Simple, hearty, and packed with Mediterranean flavor.'
  },

  // Alfi Favs Section
  {
    id: 'mexicana',
    name: 'MEXICANA',
    category: 'ALFI_FAVS',
    price: 180,
    description: 'Beef bolognese, onion, green pepper',
    subDescription: 'A hearty pizza with rich beef bolognese, sweet green peppers, and caramelized onions.'
  },
  {
    id: 'double-pepperoni',
    name: 'DOUBLE PEPPERONI',
    category: 'ALFI_FAVS',
    price: 195,
    description: 'Mozzarella, pepperoni',
    subDescription: 'Double the pepperoni, double the flavor – topped with bubbling mozzarella for a crowd-pleaser.'
  },
  {
    id: 'chorizo',
    name: 'CHORIZO',
    category: 'ALFI_FAVS',
    price: 185,
    description: 'Chorizo, chargrilled jalapeño, pineapple',
    subDescription: 'Smoky chorizo meets spicy jalapeños and sweet pineapple for a bold, balanced flavor bomb.'
  },
  {
    id: 'pancetta',
    name: 'PANCETTA',
    category: 'ALFI_FAVS',
    price: 175,
    description: 'Pancetta, feta, avocado',
    subDescription: 'Salty pancetta with creamy feta and fresh avo – the perfect sweet-savory combination.'
  },

  // Dips Section
  {
    id: 'aioli',
    name: 'AIOLI',
    category: 'DIPS',
    price: 30,
    description: 'Classic garlic aioli',
    image: '/sides/aioli.png'
  },
  {
    id: 'basil-pesto',
    name: 'BASIL PESTO',
    category: 'DIPS',
    price: 30,
    description: 'Fresh basil pesto',
    image: '/sides/basil-pesto.png'
  },
  {
    id: 'chilli-oil',
    name: 'CHILLI OIL',
    category: 'DIPS',
    price: 30,
    description: 'Spicy infused oil',
    image: '/sides/chilli-oil.png'
  },
  {
    id: 'creamy-pregro',
    name: 'CREAMY PREGRO',
    category: 'DIPS',
    price: 30,
    description: 'Rich and creamy sauce',
    image: '/sides/creamy-pregro.png'
  },
  {
    id: 'garlic-herb',
    name: 'GARLIC & HERB',
    category: 'DIPS',
    price: 30,
    description: 'Creamy garlic and herb sauce',
    image: '/sides/garlic-herb.png'
  },
  {
    id: 'gremolata',
    name: 'GREMOLATA',
    category: 'DIPS',
    price: 30,
    description: 'Herb-based Italian sauce',
    image: '/sides/gremolata.png'
  },

  // Drinks Section
  {
    id: 'acqua-panna',
    name: 'ACQUA PANNA',
    category: 'DRINKS',
    price: 35,
    description: 'Still mineral water',
    image: '/drinks/acquapana_still.png'
  },
  {
    id: 'san-pellegrino',
    name: 'SAN PELLEGRINO',
    category: 'DRINKS',
    price: 35,
    description: 'Sparkling mineral water',
    image: '/drinks/pelegrino_sparkling.png'
  },
  {
    id: 'aranciata-rossa',
    name: 'ARANCIATA ROSSA',
    category: 'DRINKS',
    price: 35,
    description: 'Blood orange sparkling beverage',
    image: '/drinks/pelegrino_aranciata_rossa.png'
  },
  {
    id: 'aranciata',
    name: 'ARANCIATA',
    category: 'DRINKS',
    price: 35,
    description: 'Orange sparkling beverage',
    image: '/drinks/pelegrino_aranciata.png'
  },
  {
    id: 'tangerine',
    name: 'TANGERINE',
    category: 'DRINKS',
    price: 35,
    description: 'Tangerine sparkling beverage',
    image: '/drinks/pelegrino_tangerine_stra.png'
  },

  // Dessert Section
  {
    id: 'smores-pizza',
    name: 'SMORES PIZZA',
    category: 'DESSERT',
    price: 95,
    description: 'Nutella, marshmallows, crushed biscuits',
    subDescription: 'A decadent dessert pizza featuring rich Nutella, toasted marshmallows, and crumbled biscuits.',
    image: '/pizzas/smores_dessert.png'
  }
]; 