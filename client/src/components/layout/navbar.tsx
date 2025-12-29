import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 py-6 px-6 lg:px-12 border-b ${
          isScrolled
            ? "bg-brand-darker/90 backdrop-blur-md border-white/5 py-4 shadow-lg"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 text-brand-green transition-transform group-hover:scale-110 duration-500 drop-shadow-[0_0_8px_rgba(46,139,87,0.5)]">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
                <path d="M50 20L85 80H15L50 20Z" fill="currentColor" />
                <path
                  d="M50 25L55 45L45 55L52 70L48 80"
                  stroke="#020617"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider leading-none text-white">
                BearBnB
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gray">
                Reno, NV
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-300">
            <button onClick={() => scrollToSection("about")} className="hover:text-brand-green transition-colors">
              The Experience
            </button>
            <button onClick={() => scrollToSection("van")} className="hover:text-brand-green transition-colors">
              The Van
            </button>
            <button onClick={() => scrollToSection("suite")} className="hover:text-brand-green transition-colors">
              The Suite
            </button>

            <a
              href="https://www.outdoorsy.com/rv-rental/reno_nv/2012_mercedes-benz_sprinter_434747-listing"
              target="_blank"
              className="bg-gradient-to-b from-brand-green to-brand-forest hover:brightness-110 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_15px_rgba(46,139,87,0.4)] border border-brand-green/30"
            >
              Book Adventure
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white hover:text-brand-green"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-brand-darker z-[60] flex flex-col justify-center items-center gap-8 md:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-brand-green"
            >
              <X className="w-8 h-8" />
            </button>
            <button onClick={() => scrollToSection("about")} className="text-2xl font-serif hover:text-brand-green text-white">
              The Experience
            </button>
            <button onClick={() => scrollToSection("van")} className="text-2xl font-serif hover:text-brand-green text-white">
              The Van
            </button>
            <button onClick={() => scrollToSection("suite")} className="text-2xl font-serif hover:text-brand-green text-white">
              The Suite
            </button>
            <a
              href="https://www.outdoorsy.com/rv-rental/reno_nv/2012_mercedes-benz_sprinter_434747-listing"
              target="_blank"
              className="bg-brand-green text-white px-8 py-4 rounded-full font-bold text-xl"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
