import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ArrowRight } from 'lucide-react';
import { products } from './GenderShowcase';

export default function SearchModal({ isOpen, onClose, onAddToCart }) {
  const [query, setQuery] = useState('');

  const filteredProducts = query.trim() === ''
    ? []
    : products.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) || 
        p.material.toLowerCase().includes(query.toLowerCase()) ||
        p.desc.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-luxury-cream/98 backdrop-blur-md flex flex-col p-6 md:p-16"
        >
          {/* Header Controls */}
          <div className="flex justify-between items-center max-w-7xl mx-auto w-full mb-16">
            {/* Minimal ornament */}
            <div className="w-5 h-5 border border-luxury-gold/30 rotate-45 flex items-center justify-center">
              <span className="w-1 h-1 bg-luxury-gold/50 rounded-full" />
            </div>
            <button 
              onClick={onClose}
              className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300 flex items-center gap-2 text-xs uppercase tracking-widest font-mono"
            >
              <span>Yopish</span>
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Search Input Area */}
          <div className="max-w-3xl mx-auto w-full flex-grow flex flex-col justify-start">
            
            <div className="relative border-b border-luxury-charcoal/30 pb-4 mb-12 flex items-center">
              <Search className="text-luxury-taupe mr-4" size={24} strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Qidirish... (Masalan: Kashmir, Ipak, Palto)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-xl md:text-3xl font-serif text-luxury-charcoal placeholder-luxury-taupe/40 focus:outline-none font-light"
              />
            </div>

            {/* Suggestions when empty */}
            {query.trim() === '' && (
              <div className="mb-12">
                <h4 className="text-[10px] uppercase tracking-widest text-luxury-taupe font-mono mb-4">Ommabop qidiruvlar</h4>
                <div className="flex flex-wrap gap-3">
                  {['Kashmir', 'Ipak', 'Palto', 'Charm'].map(tag => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs uppercase tracking-widest text-luxury-charcoal bg-luxury-sand/50 border border-luxury-sand/50 px-4 py-2 hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-300 font-mono"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results Grid */}
            <div className="overflow-y-auto max-h-[55vh] pr-4 hide-scrollbar">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProducts.map(product => (
                    <div 
                      key={product.id}
                      className="flex items-center gap-4 p-4 border border-luxury-sand/30 hover:border-luxury-gold/50 bg-luxury-cream transition-colors duration-300"
                    >
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-16 h-20 object-cover border border-luxury-sand/40"
                      />
                      <div className="flex-grow">
                        <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-mono">{product.material}</span>
                        <h4 className="text-sm font-serif font-light text-luxury-charcoal">{product.title}</h4>
                        <p className="text-xs text-luxury-taupe font-mono mt-1">{product.priceStr}</p>
                      </div>
                      <button
                        onClick={() => {
                          onAddToCart(product);
                          onClose();
                        }}
                        className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300 p-2"
                        title="Savatga qo'shish"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : query.trim() !== '' ? (
                <div className="text-center py-12 text-luxury-taupe text-sm font-light font-sans">
                  Ushbu so'rov bo'yicha mahsulot topilmadi.
                </div>
              ) : null}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
