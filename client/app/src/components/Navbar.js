"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links - Left */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/shop" className="text-sm font-medium tracking-widest uppercase hover:opacity-60 transition-opacity">
            Shop
          </Link>
          <Link href="/collections" className="text-sm font-medium tracking-widest uppercase hover:opacity-60 transition-opacity">
            Collections
          </Link>
          <Link href="/about" className="text-sm font-medium tracking-widest uppercase hover:opacity-60 transition-opacity">
            About
          </Link>
        </div>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-[0.2em] uppercase font-serif">
          ELEGANCE
        </Link>

        {/* Action Icons - Right */}
        <div className="flex items-center space-x-5">
          <button className="hidden sm:block hover:opacity-60 transition-opacity">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden sm:block hover:opacity-60 transition-opacity">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="relative hover:opacity-60 transition-opacity">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col space-y-4 md:hidden"
          >
            <Link href="/shop" className="text-lg font-medium tracking-wide">Shop</Link>
            <Link href="/collections" className="text-lg font-medium tracking-wide">Collections</Link>
            <Link href="/about" className="text-lg font-medium tracking-wide">About</Link>
            <Link href="/account" className="text-lg font-medium tracking-wide">My Account</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
