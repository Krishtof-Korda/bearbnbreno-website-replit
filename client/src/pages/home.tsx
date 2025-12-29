import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { VanAndSuite } from "@/components/sections/van-suite";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-darker text-white font-sans selection:bg-brand-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VanAndSuite />
      </main>

      <footer className="bg-brand-dark border-t border-white/5 py-12 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
                <span className="font-serif text-xl font-bold text-white">BearBnB</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Reno, NV</span>
            </div>
            
            <div className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} BearBnB Reno. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
}
