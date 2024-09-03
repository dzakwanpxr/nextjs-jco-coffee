import { Product } from "@/types/types";

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/coffee/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/coffee`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
