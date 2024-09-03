import React from "react";
import { formatPrice } from "@/shared/utils/utils";
import { CartItem } from "@/types/types";

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  tax: number;
  totalAmount: number;
}

export default function OrderSummary({ items, subtotal, tax, totalAmount }: OrderSummaryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>
            {item.name} x {item.quantity}
          </span>
          <span>{formatPrice(item.discountedPrice * item.quantity)}</span>
        </div>
      ))}
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax (10%)</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{formatPrice(totalAmount)}</span>
        </div>
      </div>
    </div>
  );
}
