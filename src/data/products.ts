export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

export const categories = ['Chair', 'Beds', 'Sofa', 'Lamp'];

export const products: Product[] = [
  { id: 1, name: 'Sakarias Armchair', category: 'Chair', price: 392, rating: 5, image: '/c1.png' },
  { id: 2, name: 'Baltsar Chair', category: 'Chair', price: 299, rating: 5, image: '/c2.png' },
  { id: 3, name: 'Anjay Chair', category: 'Chair', price: 519, rating: 5, image: '/c3.png' },
  { id: 4, name: 'Nyantuy Chair', category: 'Chair', price: 921, rating: 5, image: '/c4.png' },
];
