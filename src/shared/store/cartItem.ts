// shared/store/cartItem.ts
import { atom } from "jotai";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  quantity: number;
  image: string;
}

export const cartItemsAtom = atom<CartItem[]>([]);

export const cartCountAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce((sum, item) => sum + item.quantity, 0);
});

export const cartTotalAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );
});

export const cartSavingsAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce(
    (sum, item) => sum + (item.price - item.discountedPrice) * item.quantity,
    0
  );
});
