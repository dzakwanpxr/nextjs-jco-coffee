import React from "react";
import Link from "next/link";

export default function SuccessPage() {
  // Simulasi VA number
  const vaNumber = "1234567890";

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-4">Your order has been successfully placed.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">Virtual Account Number</h2>
        <p className="text-2xl font-bold">{vaNumber}</p>
      </div>
      <p className="mb-4">
        Please complete your payment using the Virtual Account number above.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}
