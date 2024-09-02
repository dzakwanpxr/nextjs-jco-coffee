// shared/store/cartItem.ts
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  quantity: number;
  image: string;
}

interface Cart {
  items: CartItem[];
  totalAmount: number;
  paymentMethod: string;
}

const initialCart: Cart = {
  items: [],
  totalAmount: 0,
  paymentMethod: "",
};

export const cartAtom = atomWithStorage<Cart>("cart", initialCart);

export const cartItemsAtom = atom(
  (get) => get(cartAtom).items,
  (get, set, newItems: CartItem[]) => {
    const cart = get(cartAtom);
    const newTotalAmount = calculateTotalAmount(newItems);
    set(cartAtom, { ...cart, items: newItems, totalAmount: newTotalAmount });
  }
);

export const cartTotalAmountAtom = atom(
  (get) => get(cartAtom).totalAmount,
  (get, set, newTotalAmount: number) => {
    const cart = get(cartAtom);
    set(cartAtom, { ...cart, totalAmount: newTotalAmount });
  }
);

export const cartPaymentMethodAtom = atom(
  (get) => get(cartAtom).paymentMethod,
  (get, set, newPaymentMethod: string) => {
    const cart = get(cartAtom);
    set(cartAtom, { ...cart, paymentMethod: newPaymentMethod });
  }
);

// Helper functions
function calculateTotalAmount(items: CartItem[]): number {
  const subtotal = items.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  return subtotal + tax;
}

// Derived atoms for convenience
export const cartCountAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce((sum, item) => sum + item.quantity, 0);
});

export const cartSubtotalAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);
});

export const cartSavingsAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce((sum, item) => sum + (item.price - item.discountedPrice) * item.quantity, 0);
});
