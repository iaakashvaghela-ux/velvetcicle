"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-900 pt-24 pb-12 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

          {/* Brand & Socials */}
          <div className="space-y-8">
            <Link href="/">
              <h2 className="text-3xl font-black italic tracking-tighter uppercase font-serif dark:text-white">
                VELVET<span className="text-red-500">.</span>
              </h2>
            </Link>
            <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs font-medium uppercase tracking-wide">
              Experience the pinnacle of modern fashion. We bring you the latest trends with uncompromising quality and sustainable practices.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <Link key={idx} href="#" className="p-3 bg-gray-50 dark:bg-zinc-900 rounded-full hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black uppercase text-xs mb-10 tracking-[0.3em] text-black dark:text-white">The Collection</h4>
            <ul className="space-y-5">
              {[
                { name: "Men's Studio", link: "/products?category=men" },
                { name: "Women's Selection", link: "/products?category=women" },
                { name: "Kid's Series", link: "/products?category=kids" },
                { name: "Limited Accessories", link: "/products?category=accessories" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-gray-400 dark:text-zinc-500 text-xs font-black uppercase tracking-widest hover:text-red-500 dark:hover:text-red-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-black uppercase text-xs mb-10 tracking-[0.3em] text-black dark:text-white">Client Service</h4>
            <ul className="space-y-5">
              {["Order Tracking", "Shipping Policy", "Returns & Exchanges", "Sustainability", "FAQs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 dark:text-zinc-500 text-xs font-black uppercase tracking-widest hover:text-red-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black uppercase text-xs mb-10 tracking-[0.3em] text-black dark:text-white">Flagship Studio</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 dark:text-zinc-500 text-xs font-black uppercase tracking-widest leading-relaxed">
                <MapPin size={18} className="flex-shrink-0 text-red-500" />
                <span>123 Fashion Street, Design District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 dark:text-zinc-500 text-xs font-black uppercase tracking-widest">
                <Phone size={18} className="flex-shrink-0 text-red-500" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 dark:text-zinc-500 text-xs font-black uppercase tracking-widest">
                <Mail size={18} className="flex-shrink-0 text-red-500" />
                <span>concierge@velvet.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 dark:text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left">
            © 2026 VELVET CLOTHING SERIES. ARCHITECTED BY DESIGN.
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-zinc-600">
            <Link href="#" className="hover:text-red-500 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

