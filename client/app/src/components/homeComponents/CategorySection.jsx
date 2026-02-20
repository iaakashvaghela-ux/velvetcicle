"use client";

import { CATEGORIES } from "@/lib/dummyData";
import CategoryCard from "../common/CategoryCard";
import { motion } from "framer-motion";

export default function CategorySection() {
  return (
    <section className="py-32 bg-white dark:bg-black transition-colors relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-red-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4">Discovery Series</span>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter dark:text-white">Shop by Universe</h2>
            <div className="w-16 h-1 bg-red-500 mt-8 mb-6" />
            <p className="text-gray-400 max-w-lg text-[10px] uppercase font-black tracking-[0.3em]">
              Curated collections architected for every occasion and style signature.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

