"use client";

export default function Button({ children, onClick, className = "", variant = "primary", disabled = false, type = "button" }) {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 transition-all duration-300",
    secondary: "bg-white text-black border border-black hover:bg-gray-50 transition-all duration-300",
    outline: "border border-gray-200 text-gray-700 hover:border-black hover:text-black transition-all duration-300",
    danger: "bg-red-500 text-white hover:bg-red-600 transition-all duration-300",
    ghost: "text-gray-600 hover:text-black transition-all duration-300"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-6 py-3 rounded-md text-sm font-medium tracking-wide uppercase flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
