"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type SortKey = "duration" | "caloriesBurned" | "rating";

interface ISortDropdownProps {
  sortBy: SortKey;
  onChange: (value: SortKey) => void;
}

const options: { label: string; value: SortKey }[] = [
  { label: "Duration", value: "duration" },
  { label: "Calories", value: "caloriesBurned" },
  { label: "Rating", value: "rating" },
];

const SortDropdown = ({ sortBy, onChange }: ISortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLabel = options.find((item) => item.value === sortBy)?.label;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-1.5 text-sm text-white"
      >
        Sort By: {activeLabel}
        <FaChevronDown className="text-xs" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm ${
                option.value === sortBy
                  ? "bg-[#ccff00] text-black"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;