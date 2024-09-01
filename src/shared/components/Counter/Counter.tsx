import React from "react";

interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

export default function Counter({
  value,
  onChange,
  min = 1,
  max = Infinity,
}: CounterProps) {
  const onIncrement = () => onChange(value + 1);

  const onDecrement = () => onChange(value - 1);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center justify-between border border-gray-300 rounded w-full sm:w-auto">
      <button
        onClick={onDecrement}
        disabled={value <= min}
        className="px-3 py-1 bg-gray-100 text-gray-600 transition-colors disabled:opacity-30 disabled:hover:bg-gray-100 hover:bg-gray-200 font-bold"
      >
        -
      </button>
      <input
        type="number"
        value={value}
        onChange={onInput}
        min={min}
        max={max}
        className="w-16 text-center border-none focus:ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        onClick={onIncrement}
        disabled={value >= max}
        className="px-3 py-1 bg-gray-100 text-gray-600 transition-colors disabled:opacity-30 disabled:hover:bg-gray-100 hover:bg-gray-200 font-bold"
      >
        +
      </button>
    </div>
  );
}
