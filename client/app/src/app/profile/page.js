"use client";

import { User, Settings, Package, MapPin, Heart, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  const menuItems = [
    { icon: <Package size={20} />, label: "My Orders", desc: "Track, return or buy things again" },
    { icon: <Heart size={20} />, label: "Wishlist", desc: "Your favorite styles in one place", href: "/wishlist" },
    { icon: <MapPin size={20} />, label: "Addresses", desc: "Add or edit addresses for delivery" },
    { icon: <User size={20} />, label: "Login & Security", desc: "Edit login, name, and mobile number" },
    { icon: <Settings size={20} />, label: "Preferences", desc: "Manage notifications and data" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-32 h-32 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-black text-4xl italic">JD</div>
          <div className="text-center md:text-left flex-grow">
            <h1 className="text-3xl font-black uppercase italic tracking-tighter mb-1">Jane Doe</h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Aesthetic Enthusiast Since 2026</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Premium Member</span>
              <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">128 Points</span>
            </div>
          </div>
          <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors uppercase text-[10px] font-black tracking-widest">
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href || "#"}
              className="bg-white p-6 rounded-2xl flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-red-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black italic uppercase tracking-tight text-sm mb-1">{item.label}</h3>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-300 group-hover:text-black transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
