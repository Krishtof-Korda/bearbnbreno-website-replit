import { motion } from "framer-motion";
import { Check } from "lucide-react";
import interiorImage from "@assets/stock_images/luxury_van_interior__735cfd40.jpg";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-brand-darker relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="w-16 h-[2px] bg-gradient-to-r from-brand-green to-transparent mb-8"></div>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-white">
            Rest & Roam <br />
            <span className="text-brand-sage italic">The BearBnB Way.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            We believe the best adventures require two things: the capability to go
            anywhere, and a sanctuary to recover.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Most rentals force you to choose between a hotel and the wild. We
            offer both. Start your journey in our private "Bear Den" suite to
            stage your gear, then take the keys to "The Beast"—our fully outfitted
            Sprinter—and disappear into the mountains.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Seamless transition from flight to trail",
              "No gear rental logistics—we have it all",
              "Locally owned & operated in Reno, NV",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300">
                <div className="bg-brand-green/20 p-1 rounded-full">
                  <Check className="text-brand-green w-4 h-4" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative group rounded-2xl overflow-hidden shadow-2xl border border-white/5"
        >
          <div className="aspect-[4/5] lg:aspect-auto lg:h-[600px] overflow-hidden">
            <img
              src={interiorImage}
              alt="Cozy Van Interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/90 to-transparent w-full">
            <div className="text-brand-sage font-serif text-2xl italic">
              "The perfect basecamp."
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
