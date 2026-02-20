"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    subtitle: "Spring / Summer 2026",
    title: "Pure\nLuxury",
    description: "Experience the pinnacle of craftsmanship with our new seasonal collection.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Catalog",
    link: "/products",
    accent: "#ef4444"
  },
  {
    id: 2,
    subtitle: "Modern Essentials",
    title: "Urban\nMen",
    description: "Bold designs for the modern explorer. Redefine your street style with our curated men's selection.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    cta: "Shop Men's",
    link: "/products?category=Men",
    accent: "#ffffff"
  },
  {
    id: 3,
    subtitle: "Elegance Redefined",
    title: "Femme\nChic",
    description: "Elegance that transcends trends. Discover the art of dressing well with our women's collection.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2070&auto=format&fit=crop",
    cta: "Shop Women's",
    link: "/products?category=Women",
    accent: "#f5f5dc"
  },
  {
    id: 4,
    subtitle: "Signature Accessories",
    title: "Art of\nDetail",
    description: "The finishing touch that makes the statement. Explore our handcrafted accessory line.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    cta: "Shop Accessories",
    link: "/products?category=Accessories",
    accent: "#ef4444"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 1.2, ease: "easeOut" }
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 1.2, ease: "easeIn" }
      },
    }),
  };

  const textVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Ken Burns Background */}
          <div className="absolute inset-0 z-0 bg-black">
            <motion.img
              key={slides[current].image}
              src={slides[current].image}
              alt={slides[current].title}
              animate={{ scale: [1, 1.1] }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full h-full flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-4xl">
                <motion.span
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-xs md:text-sm font-black uppercase tracking-[0.5em] text-white/80 mb-6 flex items-center gap-4"
                >
                  <span className="w-12 h-[1px] bg-red-500" />
                  {slides[current].subtitle}
                </motion.span>

                <motion.h1
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-6xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.85] text-white mb-8 whitespace-pre-line mix-blend-difference"
                >
                  {slides[current].title.split('\n').map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-base md:text-xl text-white/70 max-w-xl mb-12 font-medium leading-relaxed tracking-wide"
                >
                  {slides[current].description}
                </motion.p>

                <motion.div
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-6"
                >
                  <Link href={slides[current].link}>
                    <button className="group relative overflow-hidden bg-white text-black px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:pr-14 hover:bg-red-500 hover:text-white shadow-2xl">
                      <span className="relative z-10 font-bold">{slides[current].cta}</span>
                      <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" size={18} />
                    </button>
                  </Link>
                  <Link href="/products">
                    <button className="px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest text-white border border-white/20 hover:border-white/60 hover:bg-white/5 backdrop-blur-md transition-all">
                      Discover All
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-6 md:right-12 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full border border-white/20 hover:border-white/80 hover:bg-white/10 text-white transition-all backdrop-blur-xl group"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/20 hover:border-white/80 hover:bg-white/10 text-white transition-all backdrop-blur-xl group"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Pagination Progress Indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 flex items-end gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className="group relative flex flex-col gap-2"
          >
            <span className={`text-[10px] font-black transition-colors ${current === idx ? "text-white" : "text-white/30"}`}>
              0{idx + 1}
            </span>
            <div className="h-1 w-12 md:w-20 bg-white/10 overflow-hidden rounded-full">
              <motion.div
                initial={false}
                animate={{ width: current === idx ? "100%" : "0%" }}
                className="h-full bg-red-500"
                transition={{ duration: current === idx ? 8 : 0.5, ease: "linear" }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Seasonal Badge - Floating Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        animate={{ opacity: 1, rotate: -15, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden lg:block absolute top-12 left-12 z-20"
      >
        <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[10px] font-black uppercase tracking-[0.3em] text-white/60 shadow-xl">
          Spring Series &apos;26
        </div>
      </motion.div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}

