import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ 
  cartItemsCount, 
  onSearchClick, 
  onProfileClick, 
  onCartClick, 
  onGenderSelect 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'men', 'women', or null

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGenderClick = (gender) => {
    onGenderSelect(gender);
    setActiveDropdown(null);
    setIsOpen(false);
    
    // Scroll to showcase section
    const el = document.getElementById('showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Erkaklar', type: 'gender', gender: 'men' },
    { name: 'Ayollar', type: 'gender', gender: 'women' },
    { name: 'Kolleksiya', type: 'anchor', href: '#kolleksiya' },
    { name: 'Aloqa', type: 'anchor', href: '#aloqa' }
  ];

  const subCategories = {
    men: [
      { name: 'Kashmir trikotaj', href: '#showcase' },
      { name: 'Tayyorlangan paltolar', href: '#showcase' },
      { name: 'Charm kamarlar va sumkalar', href: '#showcase' },
      { name: 'Merino trikotaj', href: '#showcase' }
    ],
    women: [
      { name: 'Tabiiy ipak ko\'ylaklar', href: '#showcase' },
      { name: 'Kashmir sviterlar', href: '#showcase' },
      { name: 'Charm portfellar', href: '#showcase' },
      { name: 'Elegant jun paltolar', href: '#showcase' }
    ]
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-panel py-4' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left Side: Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(true)}
              className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
              aria-label="Menyuni ochish"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Center/Left: Nameless Navigation Links */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.type === 'gender' && setActiveDropdown(link.gender)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.type === 'gender' ? (
                  <button
                    onClick={() => handleGenderClick(link.gender)}
                    className="font-sans text-xs uppercase tracking-widest text-luxury-charcoal/80 hover:text-luxury-gold transition-colors duration-300 relative group py-2 flex items-center gap-1"
                  >
                    {link.name}
                    <ChevronDown size={10} className={`transform transition-transform duration-300 ${activeDropdown === link.gender ? 'rotate-180' : ''}`} />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="font-sans text-xs uppercase tracking-widest text-luxury-charcoal/80 hover:text-luxury-gold transition-colors duration-300 relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                )}

                {/* Elegant Minimal Dropdown Panel for Gender Categories */}
                <AnimatePresence>
                  {link.type === 'gender' && activeDropdown === link.gender && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 top-full mt-2 w-56 bg-luxury-cream/95 backdrop-blur-md border border-luxury-gold/15 p-4 shadow-xl z-50 flex flex-col space-y-3"
                    >
                      {subCategories[link.gender].map((sub, sidx) => (
                        <button
                          key={sidx}
                          onClick={() => handleGenderClick(link.gender)}
                          className="text-left text-[10px] uppercase tracking-widest text-luxury-taupe hover:text-luxury-gold transition-colors duration-200 block border-b border-luxury-sand/20 pb-1"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </nav>

          {/* Absolute Center Logo Area */}
          <div className="flex-1 md:flex-none flex justify-center">
            <div className="w-6 h-6 border border-luxury-gold/20 rotate-45 flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-luxury-gold/40 rounded-full" />
            </div>
          </div>

          {/* Right Side: Icons */}
          <div className="flex items-center space-x-6 md:space-x-8">
            <button 
              onClick={onSearchClick}
              className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
              aria-label="Qidiruv"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={onProfileClick}
              className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
              aria-label="Profil"
            >
              <User size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={onCartClick}
              className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300 relative"
              aria-label="Savatcha"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-luxury-gold text-luxury-cream text-[9px] font-mono w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Navigation Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            />

            {/* Sidebar content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 h-full w-full max-w-[300px] bg-luxury-cream z-50 p-8 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-16">
                  <div className="w-6 h-6 border border-luxury-gold/20 rotate-45 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-luxury-gold/40 rounded-full" />
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
                  >
                    <X size={22} strokeWidth={1.5} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      {link.type === 'gender' ? (
                        <button
                          onClick={() => handleGenderClick(link.gender)}
                          className="text-left font-sans text-sm uppercase tracking-widest text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300 py-2 border-b border-luxury-sand/40 font-medium"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="font-sans text-sm uppercase tracking-widest text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300 py-2 border-b border-luxury-sand/40"
                        >
                          {link.name}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="border-t border-luxury-sand pt-6 text-[10px] uppercase tracking-widest text-luxury-taupe font-mono">
                Xorazm • Shaxsiy Butik
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
