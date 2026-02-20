"use client";

import { useStore } from "@/context/StoreContext";
import CartItem from "@/components/cartComponents/CartItem";
import PriceSummary from "@/components/cartComponents/PriceSummary";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart } = useStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-black transition-colors px-6 text-center">
        <div className="w-24 h-24 bg-gray-50 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag size={40} className="text-gray-300" />
        </div>
        <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4 dark:text-white">Empty Space<span className="text-red-500">.</span></h2>
        <p className="text-gray-400 max-w-xs mb-10 text-xs font-bold uppercase tracking-[0.3em] leading-loose">
          Your shopping vessel is currently adrift. Navigate to our catalog to begin your journey.
        </p>
        <Link href="/products">
          <button className="bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-500 transition-all duration-500 shadow-2xl">
            Return to Store
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 px-2">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500 mb-2 block">Curation Status</span>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter dark:text-white">
              The Bag <span className="text-xl text-gray-300 dark:text-zinc-700 ml-4 font-bold tracking-widest">({cart.length} UNITS)</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <CartItem key={`${item.id}-${item.selectedSize}`} item={item} />
              ))}
            </AnimatePresence>

            <div className="pt-10 flex border-t dark:border-zinc-900">
              <Link href="/products" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <ArrowRight className="rotate-180" size={16} /> Continue Curation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1 sticky top-40">
            <PriceSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
