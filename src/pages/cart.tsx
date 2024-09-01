import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/shared/utils/utils";
import Counter from "@/shared/components/Counter/Counter";
import { FaTrash } from "react-icons/fa";

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
        item.id === id ? { ...item, quantity: newQuantity } : item
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
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center border-b py-4"
            >
              <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
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
              </div>
              <div className="flex items-center justify-between w-full sm:w-auto sm:ml-auto">
                <div className="mr-4">
                  <Counter
                    value={item.quantity}
                    onChange={(newValue: number) =>
                      updateQuantity(item.id, newValue)
                    }
                    min={1}
                    max={10}
                  />
                </div>
                <div className="flex items-center">
                  <p className="font-semibold mr-4 hidden sm:block">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <button onClick={() => removeItem(item.id)}>
                    <FaTrash className="text-2xl text-gray-800 hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="font-bold mb-4 sm:mb-0">
              Total: {formatPrice(totalPrice)}
            </p>
            <Link
              href="/checkout"
              className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
