"use client";

import { motion } from "framer-motion";

export default function SizeSelector({ sizes, selected, onSelect }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black dark:text-gray-300">Select Size</h4>
        <button className="text-[10px] font-bold uppercase tracking-widest text-red-500 underline underline-offset-4">Size Guide</button>
      </div>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <motion.button
            key={size}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSelect(size)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xs font-black transition-all border-2 ${selected === size ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" : "bg-transparent text-gray-500 border-gray-100 dark:border-zinc-800 hover:border-black dark:hover:border-white"}`}
          >
            {size}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
