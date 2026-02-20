"use client";

import { useParams } from "next/navigation";
import { PRODUCTS } from "@/lib/dummyData";
import ImageGallery from "@/components/productComponents/ImageGallery";
import ProductInfo from "@/components/productComponents/ProductInfo";
import ProductCard from "@/components/common/ProductCard";
import Loader from "@/components/common/Loader";
import ReviewSection from "@/components/productComponents/ReviewSection";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching
    const timer = setTimeout(() => {
      const found = PRODUCTS.find(p => p.id === id);
      setProduct(found);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Loader full />;
  if (!product) return <div className="min-h-screen pt-40 px-6 text-center">Style not found</div>;

  const suggestions = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-black dark:hover:text-white transition-colors">Catalog</a>
          <span>/</span>
          <span className="text-black dark:text-white">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <ImageGallery images={product.images} />
          <ProductInfo product={product} />
        </div>

        <ReviewSection />

        {/* Similar Styles */}
        <div className="mt-40">
          <div className="flex items-end justify-between mb-16 px-2">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500 mb-2 block">Complete the look</span>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter dark:text-white">Similar Aesthetics</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {suggestions.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
