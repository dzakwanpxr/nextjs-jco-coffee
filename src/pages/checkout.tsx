import React from "react";
import { useRouter } from "next/router";
import { formatPrice } from "@/shared/utils/utils";
import { useAtom, useAtomValue } from "jotai";
import { cartItemsAtom, cartTotalAtom } from "@/shared/store/cartItem";

const paymentMethods = [
  "Credit Card",
  "Debit Card",
  "Bank Transfer",
  "E-Wallet",
];

export default function CheckoutPage() {
  const router = useRouter();

  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const total = useAtomValue(cartTotalAtom);

  const tax = total * 0.1;
  const totalWithTax = total + tax;

  const handlePlaceOrder = () => {
    setCartItems([]);
    router.push("/success");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cartItems.map((item) => (
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
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax (10%)</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{formatPrice(totalWithTax)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Pickup Options</h2>
            <div className="flex justify-between items-center">
              <span>Estimated Pickup Time</span>
              <span className="font-semibold">15-20 minutes</span>
            </div>
            <p className="mt-2 text-gray-600">
              You can pick up your order at our store: JCO Coffee Main Street
            </p>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-2">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={method}
                    name="paymentMethod"
                    className="mr-2"
                    defaultChecked={index === 2}
                  />
                  <label htmlFor={method}>{method}</label>
                </div>
              ))}
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
