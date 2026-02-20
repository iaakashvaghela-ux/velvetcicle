"use client";

import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Silk Shirt",
    category: "Tops",
    price: 120,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Linen Wide-Leg Trousers",
    category: "Bottoms",
    price: 85,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Cashmere Turtleneck",
    category: "Knitwear",
    price: 210,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Structured Wool Blazer",
    category: "Outerwear",
    price: 340,
    image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Raw Denim Jeans",
    category: "Denim",
    price: 155,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Minimalist Leather Tote",
    category: "Accessories",
    price: 280,
    image: "https://images.unsplash.com/photo-1584917665711-641893d937a0?q=80&w=2072&auto=format&fit=crop"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-2">Editor&apos;s Picks</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Curated for the refined eye</p>
          </div>
          <button className="text-sm font-semibold border-b border-black pb-1 hover:opacity-50 transition-opacity">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
