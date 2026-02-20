"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const categories = ["Men", "Women", "Accessories", "New Arrivals", "Flash Sale"];

  return (
    <nav className="hidden lg:block bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-900 sticky top-[72px] md:top-[88px] z-40 transition-all duration-500">
      <div className="container mx-auto px-6">
        <ul className="flex items-center justify-center gap-12 h-14">
          {categories.map((cat) => (
            <li key={cat} className="h-full flex items-center group relative cursor-pointer">
              <Link
                href={`/products?category=${cat.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-red-500 transition-colors flex items-center gap-2"
              >
                {cat}
                {cat !== "Flash Sale" && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-500 text-gray-300" />}
              </Link>

              {/* Premium Mega Dropdown */}
              {cat !== "Flash Sale" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl shadow-2xl rounded-b-[2rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 p-12 grid grid-cols-4 gap-12 z-50 border-x border-b border-gray-100 dark:border-zinc-900 mt-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-6">
                      <h4 className="font-black text-[10px] text-red-500 uppercase tracking-[0.3em]">Signature Category</h4>
                      <ul className="space-y-4">
                        {["Essential Tees", "Architectural Denim", "Core Outerwear", "Avant-Garde Pieces"].map((item) => (
                          <li key={item}>
                            <Link href="/products" className="text-xs font-bold text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest block">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Decorative element in dropdown */}
                  <div className="col-span-4 mt-8 pt-8 border-t dark:border-zinc-900 flex justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-gray-300">
                    <span>Curated for the modern visionary</span>
                    <span className="text-red-500">Explore Collection</span>
                  </div>
                </div>
              )}

              {/* Hover Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-red-500 group-hover:w-full transition-all duration-500 rounded-full" />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

