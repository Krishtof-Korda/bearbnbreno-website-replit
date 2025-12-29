import { motion } from "framer-motion";
import { Truck, Wifi, BatteryCharging, Snowflake, Map, Home, BedDouble, ShowerHead, Coffee } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "4x4 Capability",
    description: "Go where others can't. High clearance and all-terrain tires for any season.",
  },
  {
    icon: Wifi,
    title: "Starlink Ready",
    description: "Stay connected even in the deepest wilderness with integrated Starlink mount.",
  },
  {
    icon: BatteryCharging,
    title: "Off-Grid Power",
    description: "Massive lithium battery bank and solar array keeps you powered for days.",
  },
  {
    icon: Snowflake,
    title: "Four Season",
    description: "Espar heater and extreme insulation keep you toasty even in sub-zero temps.",
  },
];

const suiteFeatures = [
    { icon: BedDouble, label: "Queen Memory Foam" },
    { icon: ShowerHead, label: "Hot Rain Shower" },
    { icon: Coffee, label: "Espresso Bar" },
    { icon: Wifi, label: "Gigabit Fiber" },
];

export function VanAndSuite() {
  return (
    <>
      {/* THE VAN SECTION */}
      <section id="van" className="py-24 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-sage uppercase tracking-widest text-sm font-semibold">The Vehicle</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-white">"The Beast"</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A 2012 Mercedes-Benz Sprinter 170 EXT custom built for the rugged Sierra Nevada. 
              Designed for comfort, engineered for the wild.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-colors border-white/5"
              >
                <div className="bg-brand-green/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-brand-green">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

           {/* Call to action for Van */}
           <div className="mt-16 text-center">
             <a href="https://www.outdoorsy.com/rv-rental/reno_nv/2012_mercedes-benz_sprinter_434747-listing" target="_blank" className="inline-flex items-center gap-2 text-brand-sage hover:text-white transition-colors border-b border-brand-sage/50 hover:border-white pb-1">
               <span>View Full Specs on Outdoorsy</span>
               <Map className="w-4 h-4" />
             </a>
           </div>
        </div>
      </section>

      {/* THE SUITE SECTION */}
      <section id="suite" className="py-24 px-6 md:px-12 bg-brand-darker border-t border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="order-1 relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-gray-800"
                 >
                    {/* Placeholder for Suite Image - using a gradient/pattern if no image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <Home className="w-24 h-24 text-gray-700" />
                        <p className="absolute bottom-8 text-gray-500 font-serif italic">Suite photography coming soon</p>
                    </div>
                 </motion.div>

                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-2"
                 >
                    <span className="text-brand-sage uppercase tracking-widest text-sm font-semibold">The Basecamp</span>
                    <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6 text-white">The Bear Den</h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Arriving late? Flying out early? Our private guest suite is available as an add-on 
                        to your rental. Located 15 minutes from RNO airport, it's the perfect staging area 
                        to organize your gear, pack "The Beast," and get a good night's sleep before hitting the trail.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        {suiteFeatures.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <item.icon className="w-5 h-5 text-brand-green" />
                                <span className="text-sm font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-brand-darker transition-all font-medium">
                        Inquire About Suite
                    </a>
                 </motion.div>
            </div>
        </div>
      </section>
    </>
  );
}
