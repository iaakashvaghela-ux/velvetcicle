import { Github, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-[0.2em] uppercase block mb-8">
              ELEGANCE
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Redefining contemporary style through ethical manufacturing and timeless design.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-8">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Collections</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Wholesale</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Care Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-8">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">Join our community for exclusive early access and style inspiration.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-transparent border-b border-gray-800 py-3 text-sm focus:outline-none focus:border-white transition-colors pr-10"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-widest hover:text-gray-300">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-gray-500 space-y-4 md:space-y-0">
          <p>© 2026 ELEGANCE CLOTHING. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
