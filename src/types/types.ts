export interface Milestone {
  id: number;
  year: string;
  description: string;
  image: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  quantity: number;
  image: string;
}

export interface Cart {
  items: CartItem[];
  totalAmount: number;
  paymentMethod: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  ingredients: string[];
  nutritionFacts: { [key: string]: string };
}

export interface ProductListProps {
  products: Product[];
}

export interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

export interface LoginInputs {
  username: string;
  password: string;
}
