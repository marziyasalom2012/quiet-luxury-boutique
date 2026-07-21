import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ShoppingBag } from 'lucide-react';

export const products = [
  {
    id: 'm1',
    gender: 'men',
    title: 'Kashmir Klassik Sviter',
    price: 2500000,
    priceStr: '2,500,000 UZS',
    image: '/images/men_knitwear.png',
    material: '100% Kashmir',
    desc: 'O\'ta yumshoq kashmirdan tayyorlangan, har kungi qulaylik uchun mos klassik sviter.'
  },
  {
    id: 'm2',
    gender: 'men',
    title: 'Artizan Charm Sumka',
    price: 3800000,
    priceStr: '3,800,000 UZS',
    image: '/images/men_bag.png',
    material: 'Haqiqiy Italiya charmi',
    desc: 'Minimalist uslubdagi qo\'lda ishlangan charm portfel va sayohat sumkasi.'
  },
  {
    id: 'm3',
    gender: 'men',
    title: 'Kashmir Uzun Palto',
    price: 5800000,
    priceStr: '5,800,000 UZS',
    image: '/images/men_outerwear.png',
    material: 'Kashmir & Jun aralashmasi',
    desc: 'Sovuq kunlar uchun mo\'ljallangan, elegant siluetli va astarli uzun palto.'
  },
  {
    id: 'm4',
    gender: 'men',
    title: 'Yumshoq Jun Nimcha',
    price: 1800000,
    priceStr: '1,800,000 UZS',
    image: '/images/men_vest.png',
    material: '100% Merino juni',
    desc: 'Ko\'p qatlamli kiyinish uchun ajoyib bo\'lgan yengil va issiq jun nimcha.'
  },
  {
    id: 'w1',
    gender: 'women',
    title: 'Nafis Shoyi Ko\'ylak',
    price: 3200000,
    priceStr: '3,200,000 UZS',
    image: '/images/collection_silk.png',
    material: '100% Tabiiy ipak',
    desc: 'Erkin tushib turuvchi va harakatda go\'zal oqadigan oq ipak ko\'ylak.'
  },
  {
    id: 'w2',
    gender: 'women',
    title: 'Premium Kashmir Sviter',
    price: 2600000,
    priceStr: '2,600,000 UZS',
    image: '/images/collection_cashmere.png',
    material: 'Oliy navli kashmir',
    desc: 'Ayollar uchun maxsus ishlangan, bejirim yoqali va yumshoq sviter.'
  },
  {
    id: 'w3',
    gender: 'women',
    title: 'Minimalist Charm Portfel',
    price: 3400000,
    priceStr: '3,400,000 UZS',
    image: '/images/collection_leather.png',
    material: 'Strukturali charm',
    desc: 'Qat\'iy geometrik shakldagi, sokin hashamat uslubidagi ayollar aksessuari.'
  },
  {
    id: 'w4',
    gender: 'women',
    title: 'Elegant Jun Palto',
    price: 5800000,
    priceStr: '5,800,000 UZS',
    image: '/images/featured_product.png',
    material: 'Kashmir & Merino yungi',
    desc: 'Camel rangidagi, har qanday kiyim ustidan nafis ko\'rinadigan klassik palto.'
  }
];

export default function GenderShowcase({ onAddToCart, activeTab = 'men', setActiveTab }) {
  
  return (
    <section id="showcase" className="py-24 bg-luxury-cream border-t border-luxury-sand/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Navigation / Tab Controls */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-luxury-taupe font-mono block mb-4">
            Eksklyuziv Kolleksiyalar
          </span>
          
          <div className="flex space-x-12 border-b border-luxury-sand/50 pb-2">
            {[
              { id: 'men', label: 'Erkaklar', hash: '#erkaklar' },
              { id: 'women', label: 'Ayollar', hash: '#ayollar' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  // Update URL hash without jumping page violently
                  window.history.pushState(null, '', tab.hash);
                }}
                className={`text-sm uppercase tracking-[0.25em] font-mono pb-3 relative transition-colors duration-300 ${
                  activeTab === tab.id ? 'text-luxury-charcoal font-semibold' : 'text-luxury-taupe/70 hover:text-luxury-charcoal'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeGenderTab" 
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <AnimatePresence mode="wait">
            {products
              .filter(p => p.gender === activeTab)
              .map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col h-full bg-luxury-cream"
                >
                  {/* Image container */}
                  <div className="relative aspect-[3/4] overflow-hidden border border-luxury-sand/30 shadow-sm bg-luxury-cream/30 mb-4 flex items-center justify-center">
                    
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.16, 1, 0.3, 1)]"
                    />

                    {/* Dark gradient mask on hover */}
                    <div className="absolute inset-0 bg-luxury-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Add to cart overlay button */}
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="absolute bottom-3 left-3 right-3 lg:bottom-6 lg:left-6 lg:right-6 bg-luxury-cream/90 lg:bg-luxury-cream text-luxury-charcoal py-2.5 lg:py-4 text-[9px] lg:text-[10px] uppercase tracking-widest font-mono border border-luxury-sand/50 shadow-lg transition-all duration-500 hover:bg-luxury-charcoal hover:text-luxury-cream hover:border-luxury-charcoal z-20 flex items-center justify-center gap-2 transform translate-y-0 lg:translate-y-4 opacity-100 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
                    >
                      <Plus size={12} />
                      Savatga qo'shish
                    </button>

                    {/* Left Top Info Badge */}
                    <div className="absolute top-4 left-4 bg-luxury-cream/80 backdrop-blur-sm px-2 py-1 text-[8px] uppercase tracking-widest text-luxury-taupe font-mono border border-luxury-gold/10 z-20">
                      {product.material}
                    </div>

                  </div>

                  {/* Metadata */}
                  <div className="flex flex-col flex-grow px-1">
                    <h4 className="text-sm font-serif font-light text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300 mb-1">
                      {product.title}
                    </h4>
                    <p className="text-xs text-luxury-taupe font-mono font-light">
                      {product.priceStr}
                    </p>
                  </div>

                </motion.div>
              ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
