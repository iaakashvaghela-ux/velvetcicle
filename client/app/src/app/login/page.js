"use client";

import Link from "next/link";
import { Github, Mail, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <Link href="/">
            <h1 className="text-4xl font-black italic tracking-tighter mb-4">VELVET.</h1>
          </Link>
          <h2 className="text-xl font-bold uppercase tracking-widest text-gray-500">Welcome Back</h2>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-2">Enter your aesthetics to continue</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="fashion@velvet.com"
                className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white px-12 py-4 rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-black">Password</label>
              <Link href="#" className="text-[10px] font-bold text-red-500 uppercase tracking-widest hover:underline">Forgot?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-50 border-2 border-transparent focus:border-black focus:bg-white px-12 py-4 rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <button className="w-full bg-black text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-all flex items-center justify-center gap-3 group">
            Authenticate
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-gray-100">
          <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Or continue with</p>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border-2 border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border-2 border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
              <Github size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">Github</span>
            </button>
          </div>
        </div>

        <p className="text-center mt-12 text-xs font-bold text-gray-500 uppercase tracking-widest">
          New to Velvet? <Link href="/signup" className="text-black hover:text-red-500 transition-colors underline underline-offset-4">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
