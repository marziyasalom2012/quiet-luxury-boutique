import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Collections() {
  const collections = [
    {
      id: 'cashmere',
      title: 'Kashmir Issiqligi',
      subtitle: 'Premium trikotaj va jun tolalari',
      image: '/images/collection_cashmere.png',
      link: '#cashmere',
      gridClass: 'md:col-span-6 md:row-span-2 h-[600px] md:h-[720px]',
      delay: 0.1
    },
    {
      id: 'silk',
      title: 'Tabiiy Ipak',
      subtitle: 'Mayin oqim va nafis siluetlar',
      image: '/images/collection_silk.png',
      link: '#silk',
      gridClass: 'md:col-span-6 h-[280px] md:h-[340px]',
      delay: 0.3
    },
    {
      id: 'accessories',
      title: 'Sokin Aksessuarlar',
      subtitle: 'Haqiqiy charm va minimalist detallar',
      image: '/images/collection_leather.png',
      link: '#accessories',
      gridClass: 'md:col-span-6 h-[280px] md:h-[340px]',
      delay: 0.5
    }
  ];

  return (
    <section id="kolleksiya" className="py-24 bg-luxury-cream border-t border-luxury-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.35em] text-luxury-taupe font-mono block mb-3">
              Mavsumiy Tanlovlar
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-luxury-charcoal leading-tight">
              Elegansning Uchta <span className="italic font-normal text-luxury-gold">Qirrasi</span>
            </h2>
          </div>
          <p className="text-sm text-luxury-taupe font-light max-w-xs mt-4 md:mt-0 leading-relaxed font-sans">
            Sifatga asoslangan materiallar tanlovi. Har bir detal butikimizning yuqori andozalariga mos ravishda saralab olingan.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {collections.map((col) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: col.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden group shadow-md border border-luxury-sand/30 cursor-pointer ${col.gridClass}`}
            >
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-onyx/75 via-luxury-onyx/20 to-transparent z-10 opacity-70 group-hover:opacity-85 transition-opacity duration-700" />
              
              {/* Image with smooth zoom */}
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[2.5s] ease-[cubic-bezier(0.16, 1, 0.3, 1)]"
              />

              {/* Text content layout */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    
                    {/* Tiny meta tag */}
                    <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-mono block mb-2 opacity-80">
                      Katalog
                    </span>

                    {/* Title */}
                    <h3 className="text-xl md:text-3xl font-serif text-luxury-cream mb-1">
                      {col.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs text-luxury-cream/70 font-sans font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {col.subtitle}
                    </p>

                  </div>

                  {/* Arrow Icon */}
                  <div className="w-10 h-10 rounded-full border border-luxury-cream/30 flex items-center justify-center text-luxury-cream hover:bg-luxury-gold hover:border-luxury-gold hover:text-luxury-charcoal transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
