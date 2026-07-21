import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', district: 'Urganch', address: '' });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const formattedSubtotal = new Intl.NumberFormat('uz-UZ').format(subtotal) + ' UZS';

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setIsCheckout(false);
      setOrderPlaced(false);
      onClose();
    }, 4000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/35 backdrop-blur-sm z-[100]"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-luxury-cream z-[101] shadow-2xl p-8 overflow-y-auto flex flex-col justify-between"
          >
            {/* Top Close Button */}
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-luxury-sand/50 mb-8">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} className="text-luxury-gold" />
                  <span className="text-xs uppercase tracking-widest font-mono text-luxury-charcoal font-semibold">Savatcha ({cartItems.length})</span>
                </div>
                <button 
                  onClick={onClose}
                  className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {orderPlaced ? (
                /* Success Order Overlay */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold mx-auto animate-bounce">
                    <ShieldCheck size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif text-luxury-charcoal">Buyurtma Qabul Qilindi</h3>
                  <p className="text-xs text-luxury-taupe font-sans leading-relaxed max-w-xs mx-auto">
                    Hurmatli mijoz, buyurtmangiz tasdiqlandi. Shaxsiy kurerimiz 2 soat ichida siz bilan bog'lanib, tanlagan mahsulotingizni kiyib ko'rish uchun maxsus qadoqda manzilga yetkazadi.
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-mono animate-pulse">Xorazm Butik Kurer Xizmati</p>
                </motion.div>
              ) : isCheckout ? (
                /* Checkout Form */
                <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                  <h3 className="text-lg font-serif text-luxury-charcoal mb-4 font-light">Buyurtmani Tasdiqlash</h3>
                  
                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono block mb-1.5">Ism-familiyangiz</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masalan: Abdulla" 
                      className="w-full bg-white border border-luxury-sand/80 px-4 py-3 text-xs font-sans focus:outline-none focus:border-luxury-gold transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono block mb-1.5">Telefon raqam</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+998 (90) 123-45-67" 
                      className="w-full bg-white border border-luxury-sand/80 px-4 py-3 text-xs font-mono focus:outline-none focus:border-luxury-gold transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono block mb-1.5">Tuman (Xorazm)</label>
                    <select 
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-luxury-sand/80 px-4 py-3 text-xs font-sans focus:outline-none focus:border-luxury-gold transition-all duration-300"
                    >
                      {['Urganch', 'Xiva', 'Gurlan', 'Shovot', 'Xonqa', 'Qo\'shko\'pir', 'Hazorasp', 'Bog\'ot'].map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono block mb-1.5">Yetkazish manzili</label>
                    <textarea 
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Ko'cha, uy yoki bino raqami" 
                      className="w-full bg-white border border-luxury-sand/80 px-4 py-3 text-xs font-sans focus:outline-none focus:border-luxury-gold transition-all duration-300 resize-none"
                    />
                  </div>

                  <div className="pt-4 border-t border-luxury-sand/40">
                    <div className="flex justify-between text-xs font-mono mb-4">
                      <span>Jami To'lov:</span>
                      <span className="font-semibold text-luxury-charcoal">{formattedSubtotal}</span>
                    </div>
                    <div className="text-[9px] text-luxury-taupe font-sans leading-relaxed mb-4">
                      * Yetkazib berish va o'lchab ko'rish Xorazm bo'yicha mutlaqo bepul. To'lov mahsulot ma'qul bo'lgach amalga oshiriladi.
                    </div>
                    
                    <div className="flex gap-4">
                      <button 
                        type="button"
                        onClick={() => setIsCheckout(false)}
                        className="w-1/3 border border-luxury-sand py-4 text-xs uppercase tracking-widest font-mono hover:text-luxury-gold transition-colors duration-300"
                      >
                        Orqaga
                      </button>
                      <button 
                        type="submit"
                        className="w-2/3 bg-luxury-charcoal text-luxury-cream py-4 text-xs uppercase tracking-widest font-mono hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
                      >
                        Buyurtmani yuborish
                      </button>
                    </div>
                  </div>
                </form>
              ) : cartItems.length > 0 ? (
                /* Cart Items List */
                <div className="space-y-6">
                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 hide-scrollbar">
                    {cartItems.map((item) => (
                      <div 
                        key={item.id}
                        className="flex gap-4 pb-4 border-b border-luxury-sand/30 items-center justify-between"
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-16 h-20 object-cover border border-luxury-sand/40 shrink-0"
                        />
                        <div className="flex-grow">
                          <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-mono">{item.material}</span>
                          <h4 className="text-xs font-serif text-luxury-charcoal leading-snug line-clamp-1">{item.title}</h4>
                          <p className="text-xs text-luxury-taupe font-mono mt-1">{item.priceStr}</p>
                          
                          {/* Quantity control */}
                          <div className="flex items-center space-x-3 mt-2">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 border border-luxury-sand flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="text-xs font-mono">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 border border-luxury-sand flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>

                        {/* Remove item */}
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="text-luxury-taupe hover:text-red-600 transition-colors duration-300 p-2 shrink-0"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Summary & Checkout CTA */}
                  <div className="border-t border-luxury-sand/50 pt-6 space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="uppercase tracking-widest font-mono text-luxury-taupe">Kuryer (Xorazm bo'yicha)</span>
                      <span className="text-[10px] uppercase tracking-widest text-green-600 font-mono">BEPUL (2 soatda)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="uppercase tracking-widest font-mono text-luxury-taupe">Qadoqlash (Yog'och quti)</span>
                      <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-mono">VIP SOVUTLI</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-mono border-t border-luxury-sand/30 pt-4 font-semibold text-luxury-charcoal">
                      <span>JAMI SUB-TOTAL:</span>
                      <span>{formattedSubtotal}</span>
                    </div>

                    <button 
                      onClick={() => setIsCheckout(true)}
                      className="w-full bg-luxury-charcoal text-luxury-cream py-5 text-xs uppercase tracking-widest font-mono hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-500 border border-luxury-charcoal hover:border-luxury-gold"
                    >
                      Xarid Rasmiylashtirish
                    </button>
                  </div>
                </div>
              ) : (
                /* Empty Cart State */
                <div className="text-center py-24 space-y-4">
                  <div className="w-12 h-12 rounded-full border border-luxury-sand flex items-center justify-center text-luxury-taupe mx-auto">
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </div>
                  <p className="text-xs text-luxury-taupe font-sans font-light">
                    Sizning savatchangiz hozircha bo'sh.
                  </p>
                  <button 
                    onClick={onClose}
                    className="text-[10px] uppercase tracking-widest text-luxury-gold hover:text-luxury-charcoal transition-colors duration-300 font-mono"
                  >
                    Xarid qilishni boshlash
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Security Note */}
            {!orderPlaced && (
              <div className="border-t border-luxury-sand/30 pt-4 flex items-center justify-center space-x-2 text-luxury-taupe/50 text-[9px] font-mono uppercase tracking-wider">
                <ShieldCheck size={12} />
                <span>Premium Kafolatlangan Buyurtma</span>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
