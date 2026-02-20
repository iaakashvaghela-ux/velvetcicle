"use client";

import { PRODUCTS } from "@/lib/dummyData";
import ProductCard from "../common/ProductCard";
import { motion } from "framer-motion";

export default function TrendingSection() {
  const trending = PRODUCTS.slice().reverse().slice(0, 4);

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-red-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4">Hyper-Activity</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic dark:text-white leading-none">Trending Now</h2>
            <div className="w-16 h-1 bg-red-500 mt-8 mb-6" />
            <p className="text-gray-400 max-w-lg text-[10px] uppercase font-black tracking-[0.3em]">
              The pieces everyone is talking about this week. Essential aesthetics for the season.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

