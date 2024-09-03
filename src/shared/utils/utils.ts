import { CartItem } from "@/types/types";

export const getYear = (): number => {
  return new Date().getFullYear();
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const calculateDiscountPrice = (price: number, discountPercentage: number): number => {
  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
};

export const toPascalCase = (text: string): string => {
  return text
    .split(/(?=[A-Z])|_|\s/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const generateVANumber = (): string => {
  return Math.random().toString().slice(2, 12);
};

export const calculateSubtotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);
};

export const calculateTax = (subtotal: number): number => {
  return subtotal * 0.1;
};

export const calculateTotalAmount = (items: CartItem[]): number => {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal);
  return subtotal + tax;
};

export const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
