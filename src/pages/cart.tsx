import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAtom } from "jotai";
import { cartAtom } from "@/shared/store/cartItem";
import { formatPrice } from "@/shared/utils/utils";
import Counter from "@/shared/components/Counter/Counter";
import { FaTrash } from "react-icons/fa";

export default function CartPage() {
  const [cart, setCart] = useAtom(cartAtom);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));
      const newTotalAmount = newItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
      return { ...prevCart, items: newItems, totalAmount: newTotalAmount };
    });
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.id !== id);
      const newTotalAmount = newItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
      return { ...prevCart, items: newItems, totalAmount: newTotalAmount };
    });
  };

  const totalSavings = cart.items.reduce((sum, item) => sum + (item.price - item.discountedPrice) * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center border-b py-4">
              <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                <Image src={item.image} alt={item.name} width={80} height={80} className="mr-4" />
                <div className="flex-grow">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="line-through">{formatPrice(item.price)}</p>
                  <p>{formatPrice(item.discountedPrice)}</p>
                  {item.discountPercentage > 0 && <p className="text-green-600">{item.discountPercentage}% off</p>}
                </div>
              </div>
              <div className="flex items-center justify-between w-full sm:w-auto sm:ml-auto">
                <div className="mr-4">
                  <Counter
                    value={item.quantity}
                    onChange={(newValue: number) => updateQuantity(item.id, newValue)}
                    min={1}
                    max={10}
                  />
                </div>
                <div className="flex items-center">
                  <p className="font-semibold mr-4 hidden sm:block">
                    {formatPrice(item.discountedPrice * item.quantity)}
                  </p>
                  <button onClick={() => removeItem(item.id)}>
                    <FaTrash className="text-2xl text-gray-800 hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
            <div>
              <p className="font-bold mb-2">Total: {formatPrice(cart.totalAmount)}</p>
              {totalSavings > 0 && (
                <p className="text-green-600">
                  You save:
                  <span className="font-semibold ml-1">{formatPrice(totalSavings)}</span>
                </p>
              )}
            </div>
            <Link
              href="/checkout"
              className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded text-center mt-4 sm:mt-0"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
