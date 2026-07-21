import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Award, Calendar, ChevronRight, LogOut, CheckCircle } from 'lucide-react';

export default function ProfileDrawer({ isOpen, onClose, appointments }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default logged in to show nice info
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  // VIP sample data
  const userVIP = {
    name: 'Xorazmiy Abdulla',
    tier: 'Oltin Klub A\'zosi',
    points: '12,500 ball',
    appointments: [
      { id: 1, date: '25.07.2026', time: '14:00', status: 'Tasdiqlangan', location: 'Urganch Showroom' }
    ],
    history: [
      { id: '1029', date: '12.06.2026', item: 'Kashmir Uzun Palto', price: '5,800,000 UZS', status: 'Yetkazilgan' }
    ]
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsLoggedIn(true);
    }
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
                  <User size={18} className="text-luxury-gold" />
                  <span className="text-xs uppercase tracking-widest font-mono text-luxury-charcoal font-semibold">Shaxsiy Kabinet</span>
                </div>
                <button 
                  onClick={onClose}
                  className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {isLoggedIn ? (
                /* Authenticated State */
                <div className="space-y-8">
                  
                  {/* VIP Member card */}
                  <div className="bg-luxury-onyx text-luxury-cream p-6 border border-luxury-gold/20 relative overflow-hidden shadow-lg">
                    {/* Background abstract shape */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 border border-luxury-gold/10 rotate-45 pointer-events-none" />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="text-luxury-gold" size={20} />
                      <span className="text-[9px] uppercase tracking-widest font-mono text-luxury-gold">{userVIP.tier}</span>
                    </div>

                    <h3 className="text-lg font-serif mb-1 font-light">{userVIP.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-luxury-cream/50 font-mono">Status: VIP A'zo • {userVIP.points}</p>
                  </div>

                  {/* Appointments Section */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-luxury-taupe font-mono mb-4 flex justify-between items-center">
                      <span>Tashrif Buyurtmalari</span>
                      <Calendar size={14} className="text-luxury-gold/70" />
                    </h4>
                    
                    {(appointments || []).map(app => (
                      <div key={app.id} className="p-4 border border-luxury-sand bg-white/40 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-luxury-charcoal font-sans font-medium">{app.date} • {app.time}</span>
                          <span className="text-[9px] uppercase tracking-widest text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono">
                            <CheckCircle size={8} /> {app.status}
                          </span>
                        </div>
                        <p className="text-xs text-luxury-taupe font-sans">{app.location}</p>
                      </div>
                    ))}
                  </div>

                  {/* Order History */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-luxury-taupe font-mono mb-4">Xaridlar Tarixi</h4>
                    <div className="space-y-3">
                      {userVIP.history.map(order => (
                        <div key={order.id} className="flex justify-between items-center text-xs pb-3 border-b border-luxury-sand/30">
                          <div>
                            <p className="text-luxury-charcoal font-sans">{order.item}</p>
                            <p className="text-[10px] text-luxury-taupe font-mono">{order.date} • Buyurtma #{order.id}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-luxury-charcoal font-mono font-medium">{order.price}</p>
                            <span className="text-[9px] text-luxury-taupe font-mono">{order.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                /* Unauthenticated State - Clean Quiet Luxury Forms */
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <p className="text-xs text-luxury-taupe font-sans font-light leading-relaxed">
                      Showroom tashriflarini boshqarish va cheklangan kolleksiyalarni birinchilardan bo'lib buyurtma qilish uchun telefon raqamingiz orqali kiring.
                    </p>
                  </div>

                  {step === 1 ? (
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-luxury-taupe font-mono block mb-2">Telefon raqam</label>
                      <input
                        type="tel"
                        placeholder="+998 (90) 123-45-67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full bg-white border border-luxury-sand/80 px-4 py-4 text-xs font-mono focus:outline-none focus:border-luxury-gold transition-colors duration-300"
                      />
                      <button 
                        type="submit"
                        className="w-full bg-luxury-charcoal text-luxury-cream py-4 text-xs uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300 font-mono mt-6"
                      >
                        Kodni jo'natish
                      </button>
                    </div>
                  ) : (
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-luxury-taupe font-mono block mb-2">Tasdiqlash kodi</label>
                      <input
                        type="text"
                        placeholder="••••"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                        maxLength={4}
                        className="w-full bg-white border border-luxury-sand/80 px-4 py-4 text-xs font-mono text-center tracking-widest focus:outline-none focus:border-luxury-gold transition-colors duration-300"
                      />
                      <button 
                        type="submit"
                        className="w-full bg-luxury-charcoal text-luxury-cream py-4 text-xs uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300 font-mono mt-6"
                      >
                        Tizimga kirish
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setStep(1)} 
                        className="w-full text-center text-[10px] uppercase tracking-widest text-luxury-taupe hover:text-luxury-charcoal transition-colors duration-200 mt-4 font-mono"
                      >
                        Raqamni o'zgartirish
                      </button>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Logout / Foot Note */}
            {isLoggedIn && (
              <div className="border-t border-luxury-sand/50 pt-6">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center justify-center gap-2 border border-luxury-sand hover:border-red-200 text-luxury-taupe hover:text-red-600 py-3 text-xs uppercase tracking-widest font-mono transition-colors duration-300"
                >
                  <LogOut size={14} />
                  <span>Tizimdan chiqish</span>
                </button>
                <p className="text-[9px] text-center text-luxury-taupe/40 font-mono mt-4 uppercase tracking-widest">
                  VIP A'zolik ID: #008-UZB
                </p>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
