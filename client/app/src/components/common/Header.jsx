"use client";

import { ShoppingBag, Heart, User, Menu, X, Sun, Moon, Search, Home } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useStore } from "@/context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, wishlist, isDarkMode, toggleTheme } = useStore();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-500 ${scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl py-3 border-b border-gray-100 dark:border-zinc-900"
          : "bg-white dark:bg-black py-5 shadow-sm lg:shadow-none"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-8">

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 -ml-2 text-gray-800 dark:text-gray-200"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase font-serif italic dark:text-white transition-all group-hover:tracking-normal">
            VELVET<span className="text-red-500 transition-all group-hover:ml-1">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {["Men", "Women", "Accessories"].map((item) => (
            <Link
              key={item}
              href={`/products?category=${item}`}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-red-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Search Bar - Hidden on small mobile */}
        <div className="hidden md:block flex-grow max-w-xl px-12">
          <SearchBar />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 sm:gap-6">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all dark:text-white"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="hidden sm:flex items-center gap-6">
            <Link href="/profile" className="flex flex-col items-center group">
              <User size={20} className="group-hover:text-red-500 transition-colors dark:text-white" />
              <span className="text-[8px] font-black uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity dark:text-white">Profile</span>
            </Link>

            <Link href="/wishlist" className="flex flex-col items-center group relative">
              <Heart size={20} className={`${wishlist.length > 0 ? "text-red-500 fill-current" : "dark:text-white"} group-hover:text-red-500 transition-colors`} />
              <span className="text-[8px] font-black uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity dark:text-white">Saved</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </div>

          <Link href="/cart" className="flex flex-col items-center group relative">
            <motion.div
              animate={totalItems > 0 ? { scale: [1, 1.2, 1] } : {}}
              key={totalItems}
              className="p-3 bg-gray-50 dark:bg-zinc-900 rounded-2xl group-hover:bg-red-500 group-hover:text-white transition-all"
            >
              <ShoppingBag size={20} className="dark:text-white group-hover:text-white" />
            </motion.div>
            {totalItems > 0 && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white dark:border-black">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search Overlay - Animated */}
      <div className="md:hidden px-6 pt-2 pb-6 border-t dark:border-zinc-900 mt-4 overflow-hidden">
        <SearchBar />
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white dark:bg-black z-[210] shadow-2xl p-8"
            >
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-16">
                  <h2 className="text-3xl font-black italic tracking-tighter uppercase font-serif dark:text-white">VELVET.</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-full dark:text-white"
                  >
                    <X size={28} />
                  </button>
                </div>

                <div className="flex-grow">
                  <nav>
                    <ul className="space-y-8">
                      {["Home", "Men", "Women", "Accessories", "Flash Sale"].map((item, idx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Link
                            href={item === "Home" ? "/" : `/products?category=${item.toLowerCase()}`}
                            className="text-4xl font-black uppercase tracking-tighter italic block hover:text-red-500 transition-colors dark:text-white"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <div className="pt-12 border-t dark:border-zinc-800 space-y-4">
                  <div className="flex items-center gap-6 mb-8 px-2">
                    <Link href="/profile" className="dark:text-white"><User size={24} /></Link>
                    <Link href="/wishlist" className="dark:text-white relative">
                      <Heart size={24} />
                      {wishlist.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full" />}
                    </Link>
                  </div>
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center bg-black dark:bg-white dark:text-black text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl"
                  >
                    Enter Private Studio
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

