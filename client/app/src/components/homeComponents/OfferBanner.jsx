"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OfferBanner() {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[3rem] overflow-hidden bg-black text-white p-10 md:p-32 flex flex-col items-center text-center shadow-2xl"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover scale-110 opacity-40 blur-[2px]"
              alt="Offer Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-6 py-2 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md"
            >
              <span className="text-red-500 font-black tracking-[0.5em] uppercase text-[10px]">
                Active Seasonal Drop
              </span>
            </motion.div>

            <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] font-serif">
              Up to <span className="text-red-500">60%</span> <br /> OFF
            </h2>

            <p className="text-sm md:text-lg text-zinc-400 uppercase tracking-widest font-black leading-relaxed max-w-xl mx-auto">
              Limited time architecture of price on our premium summer staples. Experience luxury accessible for the bold.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/products?offers=true">
                <button className="group relative bg-white text-black px-12 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-500 hover:text-white transition-all duration-500 shadow-xl flex items-center gap-4 mx-auto">
                  Claim Your Tier
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

