import { Cart, CartItem } from "@/types/types";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { calculateSubtotal, calculateTax, calculateTotalAmount } from "@/shared/utils/utils";

const initialCart: Cart = {
  items: [],
  totalAmount: 0,
  paymentMethod: "",
};

export const cartAtom = atomWithStorage<Cart>("cart", initialCart);

// Derived atoms
export const cartItemsAtom = atom(
  (get) => get(cartAtom).items,
  (get, set, newItems: CartItem[]) => {
    const cart = get(cartAtom);
    const newTotalAmount = calculateTotalAmount(newItems);
    set(cartAtom, { ...cart, items: newItems, totalAmount: newTotalAmount });
  }
);

export const cartPaymentMethodAtom = atom(
  (get) => get(cartAtom).paymentMethod,
  (get, set, newPaymentMethod: string) => {
    const cart = get(cartAtom);
    set(cartAtom, { ...cart, paymentMethod: newPaymentMethod });
  }
);

export const cartCountAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce((sum, item) => sum + item.quantity, 0);
});

export const cartSubtotalAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return calculateSubtotal(items);
});

export const cartTaxAtom = atom((get) => {
  const subtotal = get(cartSubtotalAtom);
  return calculateTax(subtotal);
});

export const cartTotalAmountAtom = atom((get) => {
  const subtotal = get(cartSubtotalAtom);
  const tax = get(cartTaxAtom);
  return subtotal + tax;
});

export const cartSavingsAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce((sum, item) => sum + (item.price - item.discountedPrice) * item.quantity, 0);
});
