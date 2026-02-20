"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5
      });

      gsap.from(".hero-sub", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1
      });

      gsap.from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.2
      });

      gsap.from(imageRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 2,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#f8f7f5]">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div ref={textRef}>
          <div className="overflow-hidden mb-2">
            <span className="hero-sub inline-block text-sm font-semibold tracking-[0.3em] uppercase text-gray-500">
              New Collection 2026
            </span>
          </div>
          <h1 className="hero-title text-6xl md:text-8xl font-light tracking-tight leading-tight mb-8">
            <span className="inline-block mr-4">Ethical</span>
            <span className="inline-block mr-4">Fashion</span> <br />
            <span className="inline-block italic font-serif">Re-imagined.</span>
          </h1>
          <p className="hero-sub text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
            Discover a curated collection of sustainable pieces designed for the modern lifestyle. Quality that lasts, styles that transcend.
          </p>
          <div className="hero-btn">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase transition-colors hover:bg-gray-800"
            >
              <span>Explore Collection</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-80 lg:opacity-100">
        <div
          ref={imageRef}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f5] via-transparent to-transparent lg:block hidden" />
        <div className="absolute inset-0 bg-[#f8f7f5]/40 lg:hidden block" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-black" />
      </motion.div>
    </section>
  );
}
