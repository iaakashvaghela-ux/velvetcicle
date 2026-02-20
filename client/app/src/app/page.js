"use client";

import HeroSection from "@/components/homeComponents/HeroSection";
import CategorySection from "@/components/homeComponents/CategorySection";
import FeaturedProducts from "@/components/homeComponents/FeaturedProducts";
import OfferBanner from "@/components/homeComponents/OfferBanner";
import TrendingSection from "@/components/homeComponents/TrendingSection";
import BrandSlider from "@/components/homeComponents/BrandSlider";
import { motion } from "framer-motion";
import { retrieveBrandByDomain } from "@/api-fetching/api-fetching";

export default function Home() {

  return (
    <div className="bg-white dark:bg-black transition-colors overflow-x-hidden">
      <HeroSection />

      <BrandSlider />

      <CategorySection />

      {/* Parallax Quote Section */}
      <section className="py-32 md:py-52 bg-white dark:bg-black border-y border-gray-100 dark:border-zinc-900 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 dark:bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] max-w-6xl mx-auto mix-blend-difference dark:text-white">
              "Style is a way to say who you are <br className="hidden md:block" /> without having to <span className="text-red-500">speak.</span>"
            </h2>
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="w-12 h-1 bg-red-500" />
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-gray-400">— Rachel Zoe</p>
            </div>
          </motion.div>
        </div>
      </section>

      <FeaturedProducts />

      <OfferBanner />

      <TrendingSection />

      {/* Newsletter - Premium Glassmorphism */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />

        {/* Abstract shapes */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Direct Access</span>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-[0.9]">
                The Velvet <br /> <span className="text-white/40">Circle.</span>
              </h2>
              <p className="text-zinc-400 uppercase tracking-widest leading-loose text-xs md:text-sm font-medium max-w-md">
                Join our inner circle for early access to drops, exclusive events, and the latest in aesthetic evolution. No noise, just pure luxury.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] backdrop-blur-3xl"
            >
              <form className="bg-black/40 p-8 md:p-12 rounded-[1.8rem] flex flex-col gap-6">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 px-2">Your Identity</label>
                  <input
                    type="email"
                    placeholder="EMAIL@EXAMPLE.COM"
                    className="w-full bg-white/5 border border-white/10 px-8 py-6 rounded-2xl text-xs font-black tracking-widest focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all uppercase placeholder:text-zinc-700"
                  />
                </div>
                <button className="group relative w-full overflow-hidden bg-white text-black py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-red-500 hover:text-white transition-all duration-500">
                  <span className="relative z-10">Request Access</span>
                  <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest text-center mt-4">
                  By joining, you agree to our terms of exclusivity.
                </p>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Decorative background text */}
        <div className="absolute -bottom-10 -right-10 text-[15vw] font-black italic opacity-[0.03] pointer-events-none select-none uppercase tracking-tighter leading-none">
          EVOLUTION
        </div>
      </section>
    </div>
  );
}

