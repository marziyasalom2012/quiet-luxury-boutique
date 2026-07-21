import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-luxury-cream flex items-center pt-20 overflow-hidden">
      
      {/* Background Decorative Grid lines (Very subtle, architectural) */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.03]">
        <div className="border-r border-luxury-charcoal h-full" />
        <div className="border-r border-luxury-charcoal h-full" />
        <div className="border-r border-luxury-charcoal h-full" />
        <div className="h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        
        {/* Left Content Column (55% on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 pr-0 lg:pr-8">
          
          {/* Subtle Category/Philosophy tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-luxury-gold" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-luxury-taupe font-mono">
              Yangi Mavsum Kolleksiyasi
            </span>
          </motion.div>

          {/* Main Title - Beautiful Serif Playfair Display */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl xl:text-7xl font-serif font-light text-luxury-charcoal leading-[1.1] mb-8"
          >
            Sokin <span className="italic font-normal text-luxury-gold">Hashamat</span>, <br />
            Kuchsiz Elegans.
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-sm md:text-base text-luxury-taupe font-sans font-light max-w-lg leading-relaxed mb-12"
          >
            Logotiplarsiz va ortiqcha bo'rttirishlarsiz mukammal bichim va tabiat bergan eng oliy matolar (ipak, kashmir, jun) uyg'unligi. O'z qadrini biladiganlar uchun yaratilgan cheklangan miqdordagi kiyimlar.
          </motion.p>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a 
              href="#kolleksiya" 
              className="inline-flex items-center space-x-4 bg-luxury-charcoal text-luxury-cream px-8 py-5 text-xs uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-500 group relative overflow-hidden border border-luxury-charcoal hover:border-luxury-gold"
            >
              <span className="relative z-10 flex items-center gap-3">
                Kolleksiyani ko'rish
                <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
          </motion.div>

          {/* Micro Information metrics at bottom left */}
          <div className="grid grid-cols-2 gap-8 mt-20 border-t border-luxury-sand/50 pt-8 max-w-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-luxury-taupe font-mono mb-1">Matolar</p>
              <p className="text-xs text-luxury-charcoal font-sans">100% Kashmir & Ipak</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-luxury-taupe font-mono mb-1">Cheklangan</p>
              <p className="text-xs text-luxury-charcoal font-sans">Artizan Nushalar</p>
            </div>
          </div>

        </div>

        {/* Right Visual Column (45% on desktop) */}
        <div className="lg:col-span-5 relative w-full h-[50vh] lg:h-[75vh] flex justify-center items-center">
          
          {/* Subtle back decorative box frame */}
          <div className="absolute top-8 left-8 right-0 bottom-0 border border-luxury-gold/10 pointer-events-none" />

          {/* Premium Image Container */}
          <motion.div 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full overflow-hidden relative shadow-2xl"
          >
            {/* Overlay gradient for premium editorial look */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-onyx/20 via-transparent to-transparent z-10 pointer-events-none" />
            
            <img 
              src="/images/hero.png" 
              alt="Premium Cashmere Coat" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[3s]"
            />

            {/* Float badge style 3D visual mark */}
            <div className="absolute bottom-6 left-6 z-20 bg-luxury-cream/80 backdrop-blur-md px-4 py-3 border border-luxury-gold/10 text-[9px] uppercase tracking-widest text-luxury-charcoal font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Studio 3D Render v1.0
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
