import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Sparkles, RefreshCw, Award } from 'lucide-react';

export default function FeaturedProduct({ onAddToCart }) {
  const featuredProductItem = {
    id: 'w4',
    gender: 'women',
    title: 'Kashmir Va Jun Aralashmali Uzun Trench-Palto',
    price: 5800000,
    priceStr: '5,800,000 UZS',
    image: '/images/featured_product.png',
    material: 'Kashmir & Jun',
    desc: 'Camel rangidagi, har qanday kiyim ustidan nafis ko\'rinadigan klassik palto.'
  };
  const [angle, setAngle] = useState(0); // 0 to 360
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [activeTab, setActiveTab] = useState('material'); // material, details, delivery

  const hotspots = [
    {
      id: 1,
      name: 'Kashmir Tolasi',
      x: '35%',
      y: '20%',
      desc: '100% tabiiy va nozik, eng yuqori darajadagi kashmir tolasidan qo\'lda tayyorlangan.'
    },
    {
      id: 2,
      name: 'Nafis Choklar',
      x: '65%',
      y: '50%',
      desc: 'Har bir chok Italiya texnologiyasi asosida usta tikuvchilar tomonidan ideal tarzda mustahkamlangan.'
    },
    {
      id: 3,
      name: 'Shoyi Astar',
      x: '45%',
      y: '75%',
      desc: 'Ichki qismidagi tabiiy ipak astar kiyimning tana haroratini saqlashini va yumshoqligini ta\'minlaydi.'
    }
  ];

  // Dynamic style calculation for 3D parallax effect on image
  const get3DTransform = () => {
    // Convert 0-360 angle to a subtle 3D rotation (-15deg to +15deg)
    const rotateY = ((angle - 180) / 180) * 15;
    return `perspective(1000px) rotateY(${rotateY}deg) scale(1.02)`;
  };

  return (
    <section id="mahsulot" className="py-24 bg-luxury-cream/50 border-t border-luxury-sand/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-luxury-taupe font-mono block mb-3">
            Haqiqiy Artizan Sana'ti
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-luxury-charcoal">
            Premium <span className="italic font-normal text-luxury-gold">Palto-Kardigan</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive 360/3D Viewer */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] max-w-[480px] bg-luxury-cream border border-luxury-sand/40 overflow-hidden shadow-xl flex items-center justify-center group">
              
              {/* Subtle grid watermark */}
              <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

              {/* Dynamic 3D Image Canvas Wrapper */}
              <div 
                style={{ 
                  transform: get3DTransform(),
                  transition: 'transform 0.1s ease-out'
                }}
                className="relative w-[90%] h-[90%] transition-transform duration-200"
              >
                <img 
                  src="/images/featured_product.png" 
                  alt="Premium Coat Front View" 
                  className="w-full h-full object-cover object-center pointer-events-none"
                />

                {/* Hotspots overlay */}
                {hotspots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedDetail(spot)}
                    style={{ left: spot.x, top: spot.y }}
                    className="absolute z-30 group/spot flex items-center justify-center"
                  >
                    <span className="w-5 h-5 rounded-full bg-luxury-gold/30 border border-luxury-gold flex items-center justify-center text-luxury-cream text-[10px] animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-luxury-gold" />
                    </span>
                    
                    {/* Hover tooltip hint */}
                    <span className="absolute left-6 bg-luxury-charcoal text-luxury-cream text-[10px] tracking-widest uppercase py-1 px-3 whitespace-nowrap opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
                      {spot.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Detail Card Overlay */}
              <AnimatePresence>
                {selectedDetail && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute bottom-6 left-6 right-6 bg-luxury-cream/95 backdrop-blur-md p-5 border border-luxury-gold/20 shadow-2xl z-40"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xs uppercase tracking-widest font-mono text-luxury-gold font-semibold">
                        {selectedDetail.name}
                      </h4>
                      <button 
                        onClick={() => setSelectedDetail(null)}
                        className="text-[10px] uppercase tracking-widest text-luxury-taupe hover:text-luxury-charcoal transition-colors duration-200"
                      >
                        Yopish
                      </button>
                    </div>
                    <p className="text-xs text-luxury-charcoal/90 leading-relaxed font-sans font-light">
                      {selectedDetail.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Left Top Badge */}
              <div className="absolute top-4 left-4 bg-luxury-charcoal/5 backdrop-blur-sm border border-luxury-charcoal/10 text-[9px] uppercase tracking-widest text-luxury-charcoal py-1 px-3 font-mono">
                Art. 090-34
              </div>

              {/* Action Prompt */}
              <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-widest text-luxury-taupe font-mono flex items-center gap-1.5 pointer-events-none">
                <RefreshCw size={10} className="animate-spin" style={{ animationDuration: '4s' }} />
                Aylantirish uchun slayderni ishlating
              </div>

            </div>

            {/* Slider to simulate 3D rotation */}
            <div className="w-full max-w-[480px] mt-6 px-4">
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-luxury-taupe font-mono mb-2">
                <span>Chap Burchak</span>
                <span>O'ng Burchak</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="360"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full h-[1px] bg-luxury-gold/30 appearance-none cursor-pointer accent-luxury-gold"
              />
              <div className="text-center mt-3 text-[10px] uppercase tracking-widest text-luxury-gold font-mono">
                Aylanish burchagi: {angle}°
              </div>
            </div>

          </div>

          {/* Right Column: Premium Purchase Experience */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Meta Tags */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-mono">
                Limited Edition
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-taupe font-mono">
                Handcrafted
              </span>
            </div>

            {/* Product Title */}
            <h3 className="text-3xl md:text-4xl font-serif text-luxury-charcoal mb-4">
              Kashmir Va Jun Aralashmali <br />Uzun Trench-Palto
            </h3>

            {/* Price (Premium positioning) */}
            <div className="text-xl md:text-2xl font-mono text-luxury-charcoal font-light mb-8">
              5,800,000 UZS
            </div>

            {/* Custom Description tabs */}
            <div className="border-b border-luxury-sand/50 flex space-x-8 mb-6">
              {[
                { id: 'material', label: 'Materiallar' },
                { id: 'details', label: 'O\'lchamlar' },
                { id: 'delivery', label: 'Xizmatlar' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 text-xs uppercase tracking-widest font-mono transition-colors duration-300 relative ${
                    activeTab === tab.id ? 'text-luxury-charcoal font-medium' : 'text-luxury-taupe/70 hover:text-luxury-charcoal'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold" 
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[120px] mb-8">
              {activeTab === 'material' && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-luxury-taupe leading-relaxed font-sans font-light space-y-2"
                >
                  <p>• 70% Oliy navli kashmir tolasi, 30% Virgin jun tolasi.</p>
                  <p>• Astar: 100% Tabiiy ipak (teriga mayin tegadi va havo o'tkazadi).</p>
                  <p>• Kimyoviy tozalash tavsiya etiladi (dry clean only).</p>
                  <p>• Rang: Nafis Tuya yungi (camel beige).</p>
                </motion.div>
              )}
              {activeTab === 'details' && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-luxury-taupe leading-relaxed font-sans font-light space-y-2"
                >
                  <p>• Model bo'yi: 178 sm. Tanlangan o'lcham: S.</p>
                  <p>• Kengaytirilgan yelkalar va erkin tushib turuvchi bejirim bo'yin bichimi.</p>
                  <p>• Mavjud o'lchamlar: S, M, L (Har bir o'lchamdan faqat 3-5 donadan tikilgan).</p>
                </motion.div>
              )}
              {activeTab === 'delivery' && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-luxury-taupe leading-relaxed font-sans font-light space-y-2"
                >
                  <p>• Xorazm bo'ylab premium tezkor yetkazib berish (kuryer tomonidan 2 soatda).</p>
                  <p>• Butik qadoqlashi: maxsus yog'och quti, parfyumlangan qadoq qog'ozi.</p>
                  <p>• Yetkazib bergandan so'ng uyingizda kiyib ko'rish (fitting room) imkoniyati.</p>
                </motion.div>
              )}
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-widest text-luxury-taupe font-mono block mb-3">
                O'lcham Tanlang
              </span>
              <div className="flex space-x-3">
                {['S', 'M', 'L'].map((size) => (
                  <button 
                    key={size}
                    className="w-10 h-10 border border-luxury-sand text-xs font-mono flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-300"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout CTA */}
            <button 
              onClick={() => onAddToCart(featuredProductItem)}
              className="w-full bg-luxury-charcoal text-luxury-cream py-5 text-xs uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-500 border border-luxury-charcoal hover:border-luxury-gold mb-8"
            >
              Sotib olish • Buyurtma berish
            </button>

            {/* Mini Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-luxury-sand/50 pt-6">
              <div className="flex items-center space-x-2">
                <Award size={14} className="text-luxury-gold" />
                <span className="text-[9px] uppercase tracking-wider text-luxury-charcoal font-sans">Artizan Sifati</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles size={14} className="text-luxury-gold" />
                <span className="text-[9px] uppercase tracking-wider text-luxury-charcoal font-sans">100% Ekologik</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck size={14} className="text-luxury-gold" />
                <span className="text-[9px] uppercase tracking-wider text-luxury-charcoal font-sans">Eksklyuziv</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
