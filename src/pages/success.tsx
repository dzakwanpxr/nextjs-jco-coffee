import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/shared/components/Loader/Loader";
import ErrorMessage from "@/shared/components/ErrorMessage/ErrorMessage";
import { formatPrice } from "@/shared/utils/utils";

// Define types for the cart data
interface CartItem {
  name: string;
  quantity: number;
  discountedPrice: number;
}

interface CartData {
  totalAmount: number;
  paymentMethod: string;
  items: CartItem[];
}

function generateVANumber(): string {
  return Math.random().toString().slice(2, 12);
}

export default function SuccessPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: cartData,
    isLoading,
    isError,
  } = useQuery<CartData, Error>({
    queryKey: ["cart", id],
    queryFn: async () => {
      if (!id) throw new Error("No checkout ID provided");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/checkout/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch order details");
      }
      return response.json();
    },
    enabled: !!id, // Only run the query when we have an ID
  });

  const vaNumber = generateVANumber();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message="Failed to fetch order details" />;
  if (!cartData) return <div>No order data found</div>;

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-4">Your order has been successfully placed.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">Virtual Account Number</h2>
        <p className="text-2xl font-bold">{vaNumber}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">Order Details</h2>
        <p>Total Amount: {formatPrice(cartData.totalAmount)}</p>
        <p>Payment Method: {cartData.paymentMethod}</p>
        <h3 className="text-lg font-semibold mt-2">Items:</h3>
        <ul>
          {cartData.items.map((item: CartItem, index: number) => (
            <li key={index}>
              {item.name} x {item.quantity} - {formatPrice(item.discountedPrice * item.quantity)}
            </li>
          ))}
        </ul>
      </div>
      <p className="mb-4">Please complete your payment using the Virtual Account number above.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}
