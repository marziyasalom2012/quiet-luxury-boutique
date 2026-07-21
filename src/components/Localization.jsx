import React from 'react';
import { MapPin, Clock, Truck, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Localization({ onBookClick }) {
  const districts = ['Urganch', 'Xiva', 'Gurlan', 'Shovot', 'Xonqa', 'Qo\'shko\'pir', 'Hazorasp'];

  return (
    <section id="aloqa" className="py-24 bg-luxury-cream border-t border-luxury-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Text Info */}
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-luxury-taupe font-mono block mb-3">
              Lokal Joylashuv
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-luxury-charcoal mb-6 leading-tight">
              Xorazm Bag'ridagi <br />
              Shaxsiy <span className="italic font-normal text-luxury-gold">Kiyinish Zali</span>
            </h2>
            <p className="text-sm text-luxury-taupe font-sans font-light leading-relaxed mb-10 max-w-lg">
              Urganch shahrining tarixiy va markaziy qismida joylashgan sokin butigimizda sizni kutib olamiz. Biz faqat shaxsiy buyurtmalar (appointment-only) asosida mijozlarni qabul qilamiz, bu esa har bir mehmonga to'liq maxfiylik va beqiyos individual e'tibor taqdim etish imkonini beradi.
            </p>

            <div className="space-y-6">
              
              {/* Card 1: Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-mono text-luxury-charcoal font-semibold mb-1">
                    Manzil
                  </h4>
                  <p className="text-xs text-luxury-taupe font-sans">
                    Al-Xorazmiy ko'chasi, Urganch, Xorazm, O'zbekiston
                  </p>
                </div>
              </div>

              {/* Card 2: Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0">
                  <Clock size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-mono text-luxury-charcoal font-semibold mb-1">
                    Tashrif Vaqti
                  </h4>
                  <p className="text-xs text-luxury-taupe font-sans">
                    Har kuni: 11:00 — 21:00 (Faqat oldindan yozilish asosida)
                  </p>
                </div>
              </div>

              {/* Card 3: Premium Courier Service */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0">
                  <Truck size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-mono text-luxury-charcoal font-semibold mb-1">
                    Elit Kuryerlik Xizmati
                  </h4>
                  <p className="text-xs text-luxury-taupe font-sans leading-relaxed">
                    Xorazm viloyati bo'ylab 2 soat ichida shaxsiy kuryer orqali maxsus parfyumlangan qadoqlarda bepul yetkazib berish va o'lchab ko'rish.
                  </p>
                </div>
              </div>

            </div>

            {/* Appointment CTA */}
            <div className="mt-12">
              <button 
                onClick={onBookClick}
                className="inline-flex items-center space-x-3 bg-transparent text-luxury-charcoal border border-luxury-charcoal px-8 py-4 text-xs uppercase tracking-widest hover:bg-luxury-charcoal hover:text-luxury-cream transition-all duration-500"
              >
                <Calendar size={14} />
                <span>Tashrif Buyurishni Band Qilish</span>
              </button>
            </div>

          </div>

          {/* Right Column: Beautiful Stylized Vector Map representation */}
          <div className="lg:col-span-6 relative w-full h-[380px] md:h-[450px] bg-luxury-charcoal border border-luxury-gold/10 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            
            {/* Background elements */}
            <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,_var(--tw-gradient-stops)) from-luxury-onyx via-luxury-charcoal to-black z-0" />
            
            {/* Fine grids */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,168,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,168,128,0.03)_1px,transparent_1px)] bg-[size:30px_30px] z-1" />

            {/* Stylized SVG Map of Khorezm with nodes */}
            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-70 group-hover:opacity-85 transition-opacity duration-700">
              <svg 
                viewBox="0 0 400 300" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-[85%] h-[85%] text-luxury-gold/20"
              >
                {/* Connecting lines resembling roads/flows */}
                <path d="M50,220 L150,150 L200,120 L280,180 L350,110" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                <path d="M150,150 L110,90" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                <path d="M200,120 L230,60" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                
                {/* Urgench Node (Boutique Location) */}
                <circle cx="200" cy="120" r="18" fill="rgba(197, 168, 128, 0.08)" stroke="rgba(197, 168, 128, 0.3)" />
                <circle cx="200" cy="120" r="6" fill="#C5A880" className="animate-ping" style={{ animationDuration: '3s' }} />
                <circle cx="200" cy="120" r="3" fill="#C5A880" />
                <text x="215" y="124" fill="#FFFFFF" fontSize="9" letterSpacing="1" fontFamily="sans-serif" className="opacity-90">URGANCH (SHOWROOM)</text>

                {/* Khiva Node */}
                <circle cx="150" cy="150" r="4" fill="#C5A880" />
                <text x="110" y="165" fill="#C5A880" fontSize="8" letterSpacing="1" fontFamily="sans-serif">XIVA</text>

                {/* Gurlan Node */}
                <circle cx="110" cy="90" r="3" fill="#C5A880" />
                <text x="80" y="85" fill="#736C62" fontSize="7" letterSpacing="1" fontFamily="sans-serif">GURLAN</text>

                {/* Shovot Node */}
                <circle cx="230" cy="60" r="3" fill="#C5A880" />
                <text x="240" y="64" fill="#736C62" fontSize="7" letterSpacing="1" fontFamily="sans-serif">SHOVOT</text>

                {/* Hazorasp Node */}
                <circle cx="280" cy="180" r="3" fill="#C5A880" />
                <text x="290" y="184" fill="#736C62" fontSize="7" letterSpacing="1" fontFamily="sans-serif">HAZORASP</text>

                {/* Dynamic path animation */}
                <motion.circle
                  cx="50" cy="220" r="2" fill="#C5A880"
                  animate={{
                    cx: [50, 150, 200, 280, 350],
                    cy: [220, 150, 120, 180, 110],
                    opacity: [0, 1, 1, 1, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear"
                  }}
                />
              </svg>
            </div>

            {/* Overlay indicators inside map card */}
            <div className="z-10 flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-mono">
                  Etkazib Berish Hududi
                </p>
                <h3 className="text-lg font-serif text-luxury-cream mt-1 font-light">
                  Xorazm Viloyati
                </h3>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
            </div>

            {/* List of served districts dynamically arranged */}
            <div className="z-10">
              <p className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono mb-2">
                Qamrab olingan hududlar
              </p>
              <div className="flex flex-wrap gap-2">
                {districts.map((district) => (
                  <span 
                    key={district}
                    className="text-[9px] uppercase tracking-widest bg-white/5 border border-white/10 text-white/70 py-1 px-2 font-mono hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-300"
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
