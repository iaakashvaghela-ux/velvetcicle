"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoryCard({ category }) {
  return (
    <Link href={`/products?category=${category.title.toLowerCase()}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative group overflow-hidden rounded-xl aspect-square"
      >
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300" />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-white text-2xl font-bold tracking-tight uppercase">{category.title}</h3>
          <p className="text-gray-200 text-xs font-medium tracking-widest mt-1 group-hover:translate-x-2 transition-transform duration-300">
            EXPLORE NOW
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
