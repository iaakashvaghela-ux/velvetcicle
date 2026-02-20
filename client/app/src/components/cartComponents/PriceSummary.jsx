"use client";

import { useStore } from "@/context/StoreContext";
import { ArrowRight, Ticket } from "lucide-react";

export default function PriceSummary() {
  const { cart } = useStore();

  const subtotal = cart.reduce((acc, item) =>
    acc + (item.price - (item.price * (item.discount / 100))) * item.quantity, 0
  );

  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm space-y-8">
        <h2 className="text-xl font-black italic uppercase tracking-tighter border-b dark:border-zinc-800 pb-4 dark:text-white">Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
            <span>Merchandise</span>
            <span className="text-black dark:text-white">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
            <span>Shipping</span>
            <span className={`${shipping === 0 ? "text-green-500" : "text-black dark:text-white"}`}>
              {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
            <span>Vat (5%)</span>
            <span className="text-black dark:text-white">${tax.toFixed(2)}</span>
          </div>

          <div className="pt-6 border-t dark:border-zinc-800 flex justify-between items-end">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total payable</span>
            <span className="text-4xl font-black italic uppercase tracking-tighter text-red-500 leading-none">
              ${total.toFixed(0)}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {/* Promo Code */}
          <div className="relative group">
            <Ticket size={16} className="absolute left-4 top-1/2 -track-y-1/2 text-gray-400 group-focus-within:text-black" />
            <input
              type="text"
              placeholder="PROMO CODE"
              className="w-full bg-gray-50 dark:bg-zinc-800 border-none px-12 py-5 rounded-2xl text-[10px] font-black tracking-[0.2em] focus:ring-2 focus:ring-black dark:focus:ring-white transition-all uppercase"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-black">Apply</button>
          </div>

          <a href="/checkout" className="block">
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-xl">
              Checkout <ArrowRight size={18} />
            </button>
          </a>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-950/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
        <p className="text-[10px] text-red-500 font-black uppercase tracking-widest text-center leading-loose">
          Free international shipping on <br /> orders over $500.00
        </p>
      </div>
    </div>
  );
}
