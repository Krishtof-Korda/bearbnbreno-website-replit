import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/stock_images/luxury_mercedes_spri_f4baf47f.jpg";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
        >
            <img
            src={heroImage}
            alt="Luxury Mercedes Sprinter Van in the High Sierra"
            className="w-full h-full object-cover opacity-80"
            />
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/30 via-brand-darker/50 to-brand-darker z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-brand-sage uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-medium bg-brand-green/20 px-4 py-2 rounded-full border border-brand-green/30 backdrop-blur-md">
            Hibernate in Style. Roam with Purpose.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white drop-shadow-2xl"
        >
          Unleash Your <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-sage to-brand-green">
            Reno Adventure.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl mb-10 font-light leading-relaxed drop-shadow-md"
        >
          The ultimate High Sierra basecamp. Luxury Mercedes-Benz Sprinter rentals
          and private suites, perfectly positioned for your Tahoe escape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <a
            href="https://www.outdoorsy.com/rv-rental/reno_nv/2012_mercedes-benz_sprinter_434747-listing"
            target="_blank"
            className="bg-gradient-to-b from-brand-green to-brand-forest text-white px-10 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transition-transform shadow-lg hover:shadow-brand-green/40 border border-brand-green/30"
          >
            Check Availability
          </a>
          <button 
            onClick={() => document.getElementById('van')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white border border-white/30 px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/60"
          >
            Explore The Van
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 text-white/50 hover:text-white transition-colors"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
