"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-xl group">
      <div className="absolute inset-0 bg-red-500/0 group-focus-within:bg-red-500/5 rounded-2xl transition-all duration-500 blur-xl -z-10" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SEARCH ARCHIVES..."
        className="w-full bg-gray-50 dark:bg-zinc-900 px-6 py-3.5 pl-14 rounded-2xl text-[10px] font-black tracking-widest border border-transparent focus:border-red-500 focus:bg-white dark:focus:bg-black focus:outline-none transition-all duration-500 uppercase dark:text-white"
      />
      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-all duration-500"
        size={18}
        strokeWidth={3}
      />
    </div>
  );
}

