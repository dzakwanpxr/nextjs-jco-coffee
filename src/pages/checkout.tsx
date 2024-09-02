import React from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { cartAtom } from "@/shared/store/cartItem";
import { useMutation } from "@tanstack/react-query";
import OrderSummary from "@/components/Checkout/OrderSummary";
import PickupOptions from "@/components/Checkout/PickupOptions";
import PaymentMethod from "@/components/Checkout/PaymentMethod";

const paymentMethods = ["Credit Card", "Debit Card", "Bank Transfer", "E-Wallet"];

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useAtom(cartAtom);

  const subtotal = cart.items.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
  const tax = subtotal * 0.1;
  const totalAmount = subtotal + tax;

  const mutation = useMutation({
    mutationFn: (cartData: any) =>
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      }).then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      }),
    onSuccess: (data) => {
      router.push(`/success?id=${data.checkoutId}`);
      setCart({ items: [], totalAmount: 0, paymentMethod: "" });
    },
    onError: (error) => {
      alert("There was an error placing your order. Please try again.");
    },
  });

  const handlePlaceOrder = async () => {
    if (!cart.paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    const cartData = {
      items: cart.items,
      totalAmount: totalAmount,
      paymentMethod: cart.paymentMethod,
    };

    mutation.mutate(cartData);
  };

  const handlePaymentMethodChange = (method: string) => {
    setCart((prevCart) => ({ ...prevCart, paymentMethod: method }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <OrderSummary items={cart.items} subtotal={subtotal} tax={tax} totalAmount={totalAmount} />
          <PickupOptions />
        </div>
        <div className="md:w-1/3">
          <PaymentMethod
            paymentMethods={paymentMethods}
            selectedMethod={cart.paymentMethod}
            onMethodChange={handlePaymentMethodChange}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
}
