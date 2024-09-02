import React from "react";

interface PaymentMethodProps {
  paymentMethods: string[];
  selectedMethod: string;
  onMethodChange: (method: string) => void;
  onPlaceOrder: () => void;
}

export default function PaymentMethod({
  paymentMethods,
  selectedMethod,
  onMethodChange,
  onPlaceOrder,
}: PaymentMethodProps) {
  return (
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
              checked={selectedMethod === method}
              onChange={() => onMethodChange(method)}
            />
            <label htmlFor={method}>{method}</label>
          </div>
        ))}
      </div>
      <button
        onClick={onPlaceOrder}
        className="w-full mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Place Order
      </button>
    </div>
  );
}
