"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery({ images }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selected === idx ? "border-black dark:border-white scale-105" : "border-transparent opacity-50 hover:opacity-100"}`}
          >
            <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-grow aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 dark:bg-zinc-800 relative group">
        <AnimatePresence mode="wait">
          <motion.img
            key={selected}
            src={images[selected]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
            alt="Main Product"
          />
        </AnimatePresence>

        {/* Simple Zoom Overlay Indicator */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
      </div>
    </div>
  );
}
