"use client";

import { useStore } from "@/context/StoreContext";
import { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Truck, CreditCard } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useStore();
  const [step, setStep] = useState(1);

  const subtotal = cart.reduce((acc, item) =>
    acc + (item.price - (item.price * (item.discount / 100))) * item.quantity, 0
  );
  const total = subtotal + 25 + (subtotal * 0.05);

  const steps = [
    { id: 1, name: "Shipment", icon: <Truck size={18} /> },
    { id: 2, name: "Transaction", icon: <CreditCard size={18} /> },
    { id: 3, name: "Finalized", icon: <Check size={18} /> }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen py-16 transition-colors font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Main Form Area */}
          <div className="flex-grow space-y-12">
            {/* Step Indicator */}
            <div className="flex items-center justify-between max-w-md mx-auto mb-20 relative">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 dark:bg-zinc-800 -z-10 -translate-y-1/2" />
              <div
                className="absolute top-1/2 left-0 h-[2px] bg-red-500 -z-10 -translate-y-1/2 transition-all duration-500"
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              />

              {steps.map((s) => (
                <div key={s.id} className="flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${step >= s.id ? "bg-red-500 text-white shadow-xl scale-110" : "bg-white dark:bg-zinc-900 text-gray-400 border-2 border-gray-100 dark:border-zinc-800"}`}>
                    {step > s.id ? <Check size={20} /> : s.icon}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${step >= s.id ? "text-red-500" : "text-gray-400"}`}>{s.name}</span>
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter dark:text-white">Shipping Protocol</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">FULL NAME</label>
                    <input type="text" placeholder="JANE DOE" className="w-full bg-gray-50 dark:bg-zinc-900 border-none px-6 py-4 rounded-xl text-xs font-black tracking-widest outline-none focus:ring-2 focus:ring-black dark:focus:ring-white uppercase" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">EMAIL ADDRESS</label>
                    <input type="email" placeholder="FASHION@VELVET.COM" className="w-full bg-gray-50 dark:bg-zinc-900 border-none px-6 py-4 rounded-xl text-xs font-black tracking-widest outline-none focus:ring-2 focus:ring-black dark:focus:ring-white uppercase" />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">STREET ADDRESS (DESIGN DISTRICT)</label>
                    <input type="text" placeholder="123 AESTHETIC BLVD" className="w-full bg-gray-50 dark:bg-zinc-900 border-none px-6 py-4 rounded-xl text-xs font-black tracking-widest outline-none focus:ring-2 focus:ring-black dark:focus:ring-white uppercase" />
                  </div>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all shadow-xl"
                >
                  Proceed to Payment <ArrowRight size={18} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter dark:text-white">Transaction Method</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-8 border-2 border-black dark:border-white rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <CreditCard size={32} />
                      <div>
                        <p className="text-sm font-black uppercase italic tracking-tighter">Debit / Credit Card</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Safe & Secure Gateway</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full border-4 border-black dark:border-white bg-white dark:bg-black" />
                  </div>
                  <div className="p-8 border-2 border-gray-100 dark:border-zinc-800 rounded-2xl flex items-center justify-between opacity-50 grayscale cursor-not-allowed">
                    <div className="flex items-center gap-6">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" />
                      <div>
                        <p className="text-sm font-black uppercase italic tracking-tighter">Digital Wallet</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">CARD NUMBER</label>
                  <input type="text" placeholder="•••• •••• •••• ••••" className="w-full bg-gray-50 dark:bg-zinc-900 border-none px-6 py-4 rounded-xl text-xs font-black tracking-widest outline-none focus:ring-2 focus:ring-black dark:focus:ring-white uppercase" />
                </div>
                <button
                  onClick={() => setStep(3)}
                  className="w-full bg-red-500 text-white py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl"
                >
                  Confirm Order (${total.toFixed(0)}) <ShieldCheck size={18} />
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-20 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-500/20">
                  <Check size={48} />
                </div>
                <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4 dark:text-white">Evolution Finalized.</h2>
                <p className="text-gray-400 uppercase text-xs font-bold tracking-[0.4em] mb-12">Order #VLT-2026-X99 confirmed.</p>
                <Link href="/">
                  <button className="bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-500 transition-all">
                    Back to Reality
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-100 dark:border-zinc-800 sticky top-40 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-10 border-b dark:border-zinc-800 pb-4 dark:text-white">Order Review</h3>
              <div className="space-y-6 max-h-80 overflow-y-auto pr-2 scrollbar-hide">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                    <img src={item.images[0]} className="w-16 h-20 object-cover rounded-xl" />
                    <div className="flex-grow">
                      <p className="text-[10px] font-black uppercase tracking-tighter dark:text-white line-clamp-1">{item.title}</p>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">{item.quantity} x ${item.price}</p>
                      <p className="text-[8px] font-black text-gray-400 mt-1">SIZE: {item.selectedSize}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t dark:border-zinc-800 space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <span>Logistics</span>
                  <span className="text-black dark:text-white">$25.00</span>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <span>Vat (5%)</span>
                  <span className="text-black dark:text-white">${(subtotal * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="text-xs font-black uppercase tracking-widest dark:text-white">Grand Total</span>
                  <span className="text-3xl font-black italic tracking-tighter text-red-500">${total.toFixed(0)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
