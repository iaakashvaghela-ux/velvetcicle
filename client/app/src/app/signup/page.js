"use client";

import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <Link href="/">
            <h1 className="text-4xl font-black italic tracking-tighter mb-4">VELVET.</h1>
          </Link>
          <h2 className="text-xl font-bold uppercase tracking-widest text-gray-500">Create Account</h2>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-2">Join the future of fashion</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white px-12 py-4 rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white px-12 py-4 rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Minimum 8 characters"
                className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white px-12 py-4 rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <button className="w-full bg-black text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-all flex items-center justify-center gap-3 group">
            Create Profile
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-center mt-12 text-xs font-bold text-gray-500 uppercase tracking-widest">
          Already a member? <Link href="/login" className="text-black hover:text-red-500 transition-colors underline underline-offset-4">Log In</Link>
        </p>

        <p className="text-center mt-8 text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em] leading-loose">
          By joining, you agree to our <br />
          <Link href="#" className="underline text-gray-600">Terms of Service</Link> and <Link href="#" className="underline text-gray-600">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
