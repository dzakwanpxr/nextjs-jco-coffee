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

export const calculateDiscountPrice = (
  price: number,
  discountPercentage: number
): number => {
  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
};

export const toPascalCase = (text: string): string => {
  return text
    .split(/(?=[A-Z])|_|\s/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
