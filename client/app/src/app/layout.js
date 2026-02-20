import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import { Toaster } from "react-hot-toast";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "VELVET | Premium Sustainable Fashion",
  description: "Experience the pinnacle of modern luxury with VELVET. Curated collections of sustainable clothing, ethical manufacturing, and timeless design.",
  keywords: "fashion, luxury clothing, sustainable fashion, velvet, ecommerce, online shopping",
  openGraph: {
    title: "VELVET | Premium Sustainable Fashion",
    description: "Experience the pinnacle of modern luxury with VELVET.",
    url: "https://velvet.com",
    siteName: "VELVET",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} antialiased font-sans flex flex-col min-h-screen selection:bg-black selection:text-white transition-colors duration-300 dark:bg-black dark:text-white`}
      >
        <StoreProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: 'dark:bg-zinc-900 dark:text-white',
              duration: 3000,
            }}
          />
          <Header />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
