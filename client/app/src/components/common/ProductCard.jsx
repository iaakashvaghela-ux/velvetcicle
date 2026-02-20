"use client";

import { Heart, ShoppingBag, Eye } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/context/StoreContext";
import RatingStars from "./RatingStars";
import PriceTag from "./PriceTag";
import Image from "next/image";

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some(i => i.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-zinc-800"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-zinc-800">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg">
            {product.discount}% OFF
          </div>
        )}

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button
            onClick={() => addToWishlist(product)}
            className={`p-3 rounded-full shadow-xl transition-all ${isWishlisted ? "bg-red-500 text-white" : "bg-white text-black hover:bg-black hover:text-white"}`}
          >
            <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
          <button
            onClick={() => addToCart(product, product.sizes[0])}
            className="p-3 bg-white text-black rounded-full shadow-xl hover:bg-black hover:text-white transition-all"
          >
            <ShoppingBag size={18} />
          </button>
          <Link href={`/product/${product.id}`} className="p-3 bg-white text-black rounded-full shadow-xl hover:bg-black hover:text-white transition-all">
            <Eye size={18} />
          </Link>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{product.brand}</p>
            <Link href={`/product/${product.id}`}>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors line-clamp-1 truncate uppercase tracking-tight">
                {product.title}
              </h3>
            </Link>
          </div>
        </div>

        <RatingStars rating={product.rating} reviews={product.reviews} />

        <div className="mt-4 flex items-center justify-between">
          <PriceTag price={product.price} discount={product.discount} />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product, product.sizes[0])}
            className="text-[10px] font-black uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
          >
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
