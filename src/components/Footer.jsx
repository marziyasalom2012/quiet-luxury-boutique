import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 14, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-luxury-onyx text-luxury-cream/80 py-16 border-t border-luxury-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-luxury-sand/10">
          
          {/* Column 1: Philosophy (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              {/* Micro design element instead of logo */}
              <div className="w-6 h-6 border border-luxury-gold/30 rotate-45 flex items-center justify-center mb-6">
                <span className="w-1.5 h-1.5 bg-luxury-gold/50 rounded-full" />
              </div>
              <p className="text-xs font-sans font-light leading-relaxed max-w-sm text-luxury-cream/60">
                Sokin hashamat — bu qichqirmaydigan dizayn, balki yaqindan his qilinadigan yuqori sifatdir. Butikimiz zamon sinovidan o'tuvchi va o'z egasiga beqiyos tuyg'ular ulashuvchi kiyimlarni taqdim etadi.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-mono text-luxury-gold mb-5 font-semibold">
              Katalog
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li><a href="#erkaklar" className="hover:text-luxury-gold transition-colors duration-300">Erkaklar kolleksiyasi</a></li>
              <li><a href="#ayollar" className="hover:text-luxury-gold transition-colors duration-300">Ayollar kolleksiyasi</a></li>
              <li><a href="#mahsulot" className="hover:text-luxury-gold transition-colors duration-300">Eksklyuziv mahsulot</a></li>
              <li><a href="#kolleksiya" className="hover:text-luxury-gold transition-colors duration-300">Yangi mavsum</a></li>
            </ul>
          </div>

          {/* Column 3: Social Links (2 cols) */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-mono text-luxury-gold mb-5 font-semibold">
              Tarmoqlar
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-center space-x-2">
                <InstagramIcon size={14} className="text-luxury-gold/60" />
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-luxury-gold transition-colors duration-300">Instagram</a>
              </li>
              <li className="flex items-center space-x-2">
                <Send size={14} className="text-luxury-gold/60" />
                <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-luxury-gold transition-colors duration-300">Telegram</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-luxury-gold/60 rounded-full" />
                <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-luxury-gold transition-colors duration-300">Pinterest</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact/Location Info (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-luxury-gold mb-5 font-semibold">
              Aloqa & Yordam
            </h4>
            <ul className="space-y-4 text-xs font-light">
              <li className="flex items-start space-x-3">
                <MapPin size={14} className="text-luxury-gold/60 mt-0.5 shrink-0" />
                <span>Al-Xorazmiy ko'chasi, Urganch, Xorazm, O'zbekiston</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={14} className="text-luxury-gold/60 shrink-0" />
                <a href="tel:+998901234567" className="hover:text-luxury-gold transition-colors duration-300 font-mono">+998 (90) 123-45-67</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={14} className="text-luxury-gold/60 shrink-0" />
                <a href="mailto:info@luxuryboutique.uz" className="hover:text-luxury-gold transition-colors duration-300 font-mono">info@luxuryboutique.uz</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] uppercase tracking-widest text-luxury-cream/40 font-mono">
          <p>© 2026. BARCHA HUQUQLAR HIMOYALANGAN.</p>
          <p className="mt-2 sm:mt-0">XORAZM • PREMIUM APPAREL BUTIK</p>
        </div>

      </div>
    </footer>
  );
}
