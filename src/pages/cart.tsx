import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/shared/utils/utils";

// Simulasi data keranjang
const initialCartItems = [
  {
    id: 1,
    name: "Hot Americano",
    price: 25000,
    quantity: 2,
    image: "/americano.webp",
  },
  {
    id: 2,
    name: "Iced Latte",
    price: 30000,
    quantity: 1,
    image: "/cafe-latte.webp",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="mr-4"
              />
              <div className="flex-grow">
                <h2 className="font-semibold">{item.name}</h2>
                <p>{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-200"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-right">
            <p className="font-bold">Total: {formatPrice(totalPrice)}</p>
            <Link
              href="/checkout"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
