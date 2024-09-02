import React from "react";

export default function PickupOptions() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Pickup Options</h2>
      <div className="flex justify-between items-center">
        <span>Estimated Pickup Time</span>
        <span className="font-semibold">15-20 minutes</span>
      </div>
      <p className="mt-2 text-gray-600">You can pick up your order at our store: JCO Coffee Main Street</p>
    </div>
  );
}
