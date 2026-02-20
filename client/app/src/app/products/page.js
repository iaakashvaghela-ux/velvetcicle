"use client";

import { PRODUCTS } from "@/lib/dummyData";
import ProductCard from "@/components/common/ProductCard";
import Loader from "@/components/common/Loader";
import { useState, useEffect } from "react";
import { Filter, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductListing() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");
  const [priceRange, setPriceRange] = useState(500);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let filtered = PRODUCTS;
      if (activeCategory !== "All") {
        filtered = filtered.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
      }
      filtered = filtered.filter(p => p.price <= priceRange);
      setFilteredProducts(filtered);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [activeCategory, priceRange]);

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`${isMobile ? "space-y-12" : "sticky top-40 space-y-12"}`}>
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center justify-between dark:text-white">
          Categories
          <Filter size={14} className="text-red-500" />
        </h3>
        <ul className="space-y-5">
          {["All", "Men", "Women", "Accessories"].map((cat) => (
            <li
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                if (isMobile) setIsMobileFilterOpen(false);
              }}
              className={`text-xs font-black uppercase tracking-widest cursor-pointer transition-all hover:translate-x-2 ${activeCategory === cat ? "text-red-500" : "text-gray-400 dark:text-zinc-600 hover:text-black dark:hover:text-white"}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] dark:text-white">Aesthetic Range</h3>
          <span className="text-[10px] font-black italic text-red-500 underline underline-offset-4">${priceRange} MAX</span>
        </div>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={priceRange}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
          className="w-full h-1 bg-gray-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
        />
        <div className="flex justify-between text-[8px] font-black text-gray-400 uppercase tracking-widest">
          <span>Min Value</span>
          <span>Max Limit</span>
        </div>
      </div>

      <div className="pt-8 border-t dark:border-zinc-900">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800">
          <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-gray-400">
            Need help styling? <br />
            <span className="text-black dark:text-white">Connect with an Expert</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Sidebar Filter - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between py-6 border-b dark:border-zinc-900 mb-8">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black px-6 py-4 rounded-xl shadow-xl"
            >
              <SlidersHorizontal size={14} />
              Filter Curation
            </button>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              {filteredProducts.length} Results
            </span>
          </div>

          {/* Product Grid Area */}
          <div className="flex-grow">
            <div className="hidden lg:flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-16 px-4 py-8 border-b dark:border-zinc-900">
              <div>
                <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-2 dark:text-white">Architectural Catalog</h1>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">Displaying {filteredProducts.length} pieces of art</p>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-grow sm:flex-grow-0 min-w-[200px]">
                  <select className="appearance-none w-full bg-white dark:bg-black border dark:border-zinc-800 px-6 py-3 text-[10px] font-black uppercase tracking-widest pr-12 focus:outline-none dark:text-white rounded-xl">
                    <option>Curation: Popularity</option>
                    <option>Curation: New Arrivals</option>
                    <option>Curation: Price ASC</option>
                    <option>Curation: Price DESC</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {[1, 2, 3, 4, 5, 6].map((n) => <Loader key={n} />)}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-40">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-4 opacity-20">No matching aesthetics found.</h2>
                <button
                  onClick={() => { setActiveCategory("All"); setPriceRange(500); }}
                  className="text-[10px] font-black uppercase tracking-widest text-red-500 underline underline-offset-4"
                >
                  Reset Parameters
                </button>
              </div>
            )}

            {/* Pagination */}
            {!loading && filteredProducts.length > 0 && (
              <div className="mt-24 flex flex-col sm:flex-row justify-center items-center gap-6">
                <div className="flex gap-3">
                  {[1].map((n) => (
                    <button
                      key={n}
                      className="w-12 h-12 flex items-center justify-center text-xs font-black rounded-xl border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black transition-all shadow-xl"
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <button className="px-10 h-12 flex items-center justify-center text-[10px] font-black uppercase tracking-widest rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all dark:text-zinc-400">
                  Next Chapter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-black z-[110] shadow-2xl p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10 pb-6 border-b dark:border-zinc-900">
                <h2 className="text-xl font-black italic tracking-tighter uppercase dark:text-white">Curation Filter</h2>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-colors"
                >
                  <X size={24} className="dark:text-white" />
                </button>
              </div>
              <FilterSidebar isMobile={true} />
              <div className="mt-12 pt-8 border-t dark:border-zinc-900">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full bg-red-500 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-red-500/20"
                >
                  Apply Filter
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

