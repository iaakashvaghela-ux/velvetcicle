"use client";

import { useStore } from "@/context/StoreContext";
import ProductCard from "@/components/common/ProductCard";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function WishlistPage() {
  const { wishlist } = useStore();

  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-2">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500 mb-2 block">Personal Archives</span>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter dark:text-white flex items-center gap-4">
              Wishlist
              <Heart size={40} className="text-red-500 fill-current ml-2" />
            </h1>
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest max-w-[200px] text-right">
            Styles waiting for their moment.
          </p>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {wishlist.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-40 bg-gray-50 dark:bg-zinc-950 rounded-[3rem] border border-dashed border-gray-200 dark:border-zinc-800">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 dark:text-gray-300">Quiet in Here.</h2>
            <p className="text-gray-400 mb-10 uppercase text-[10px] font-bold tracking-[0.4em]">Start capturing individual aesthetics.</p>
            <Link href="/products">
              <button className="bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-500 transition-all">
                Explore Catalog
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
