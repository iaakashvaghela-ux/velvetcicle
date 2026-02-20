"use client";

import { motion } from "framer-motion";

export default function Loader({ full = false }) {
  if (full) {
    return (
      <div className="fixed inset-0 z-[100] bg-white dark:bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          className="text-4xl font-black italic tracking-tighter"
        >
          VELVET<span className="text-red-500">.</span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="animate-pulse space-y-4 w-full">
      <div className="aspect-[3/4] bg-gray-200 dark:bg-zinc-800 rounded-2xl w-full" />
      <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-1/2" />
      <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full" />
      <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded w-1/4" />
    </div>
  );
}
