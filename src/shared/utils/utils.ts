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
