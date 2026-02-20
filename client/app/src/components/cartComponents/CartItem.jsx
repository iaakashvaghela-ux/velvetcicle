"use client";

import { useStore } from "@/context/StoreContext";
import { Trash2, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

export default function CartItem({ item }) {
  const { removeFromCart, updateCartQuantity } = useStore();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white dark:bg-zinc-900 p-6 rounded-3xl flex flex-col sm:flex-row gap-8 border border-gray-50 dark:border-zinc-800 shadow-sm"
    >
      <div className="w-full sm:w-32 h-44 flex-shrink-0 bg-gray-100 dark:bg-zinc-800 rounded-2xl overflow-hidden relative group">
        <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{item.brand}</p>
            <h3 className="text-xl font-black italic uppercase tracking-tighter truncate leading-tight dark:text-white">{item.title}</h3>
            <div className="flex gap-4 pt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md">Size: {item.selectedSize}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 border border-gray-100 dark:border-zinc-800 px-2 py-1 rounded-md">In Stock</span>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id, item.selectedSize)}
            className="text-gray-300 hover:text-red-500 transition-colors p-2 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-full"
          >
            <Trash2 size={20} />
          </button>
        </div>

        <div className="flex justify-between items-end pt-6">
          <div className="flex items-center bg-gray-50 dark:bg-zinc-800 rounded-xl p-1">
            <button
              onClick={() => updateCartQuantity(item.id, item.selectedSize, -1)}
              className="w-10 h-10 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-700 rounded-lg transition-all"
            >
              <Minus size={14} />
            </button>
            <span className="w-12 text-center text-xs font-black dark:text-white">{item.quantity}</span>
            <button
              onClick={() => updateCartQuantity(item.id, item.selectedSize, 1)}
              className="w-10 h-10 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-700 rounded-lg transition-all"
            >
              <Plus size={14} />
            </button>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black dark:text-white">
              ${((item.price - (item.price * (item.discount / 100))) * item.quantity).toFixed(0)}
            </span>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Total Price</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
