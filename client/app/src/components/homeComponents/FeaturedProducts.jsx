"use client";

import { PRODUCTS } from "@/lib/dummyData";
import ProductCard from "../common/ProductCard";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10"
        >
          <div className="max-w-md">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500 mb-3 block">High Precision</span>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter dark:text-white leading-[0.9]">Featured <br /> Drops.</h2>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.4em] border-b-2 border-black dark:border-white pb-2 hover:text-red-500 hover:border-red-500 transition-all dark:text-white">
            Access Full Catalog
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

