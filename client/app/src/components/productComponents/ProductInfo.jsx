"use client";

import { useStore } from "@/context/StoreContext";
import PriceTag from "../common/PriceTag";
import RatingStars from "../common/RatingStars";
import SizeSelector from "./SizeSelector";
import { useState } from "react";
import { ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart, addToWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some(i => i.id === product.id);

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0 && product.sizes[0] !== "One Size") {
      alert("Please select a size");
      return;
    }
    addToCart(product, selectedSize || "One Size");
  };

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500">{product.brand}</p>
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter dark:text-white leading-none">
          {product.title}
        </h1>
        <RatingStars rating={product.rating} reviews={product.reviews} size={18} />
      </div>

      <PriceTag price={product.price} discount={product.discount} className="!gap-6 scale-125 origin-left py-4" />

      <SizeSelector sizes={product.sizes} selected={selectedSize} onSelect={setSelectedSize} />

      {/* Action Buttons */}
      <div className="flex gap-4 pt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="flex-grow flex items-center justify-center gap-4 bg-black dark:bg-white text-white dark:text-black py-6 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all group"
        >
          <ShoppingBag size={20} className="group-hover:-translate-y-1 transition-transform" />
          Add to Bag
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToWishlist(product)}
          className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center transition-all ${isWishlisted ? "bg-red-500 border-red-500 text-white" : "border-gray-100 dark:border-zinc-800 hover:border-red-500 hover:text-red-500"}`}
        >
          <Heart size={24} fill={isWishlisted ? "currentColor" : "none"} />
        </motion.button>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 border-y border-gray-100 dark:border-zinc-900">
        <div className="flex flex-col items-center text-center gap-3">
          <Truck size={24} className="text-gray-400" />
          <span className="text-[9px] font-black uppercase tracking-widest leading-loose">Complimentary <br /> International Shipping</span>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <RotateCcw size={24} className="text-gray-400" />
          <span className="text-[9px] font-black uppercase tracking-widest leading-loose">Sustainable <br /> 45-Day Returns</span>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <ShieldCheck size={24} className="text-gray-400" />
          <span className="text-[9px] font-black uppercase tracking-widest leading-loose">Life-Time <br /> Quality Guarantee</span>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xs font-black uppercase tracking-widest italic">The Story</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
          {product.description}
        </p>
      </div>
    </div>
  );
}
