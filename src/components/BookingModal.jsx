import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Clock, ShieldCheck, User, Phone } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, onAddAppointment }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Urganch Showroom',
    date: '',
    time: '14:00'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAppointment({
      id: Date.now(),
      date: new Date(formData.date).toLocaleDateString('uz-UZ'),
      time: formData.time,
      location: formData.location,
      status: 'Tasdiqlangan'
    });
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', location: 'Urganch Showroom', date: '', time: '14:00' });
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
            className="fixed inset-0 z-[100] bg-black/35 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] m-auto w-[90%] max-w-[480px] h-fit max-h-[90vh] bg-luxury-cream border border-luxury-gold/20 p-8 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-luxury-sand/50 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-luxury-gold" />
                <span className="text-xs uppercase tracking-widest font-mono text-luxury-charcoal font-semibold">Tashrifni Band Qilish</span>
              </div>
              <button 
                onClick={onClose}
                className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {isSuccess ? (
              /* Success Screen */
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold mx-auto animate-bounce">
                  <ShieldCheck size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-luxury-charcoal">Tashrif Band Qilindi</h3>
                <p className="text-xs text-luxury-taupe font-sans leading-relaxed max-w-xs mx-auto">
                  Hurmatli mehmon, sizning shaxsiy kiyinish zalimizga tashrifingiz muvaffaqiyatli band qilindi. Tashrifingiz ma'lumotlari Shaxsiy Kabinetingizda saqlandi. Ko'rishguncha!
                </p>
                <div className="p-4 bg-luxury-sand/35 border border-luxury-sand/50 text-[11px] font-mono text-luxury-charcoal space-y-1 inline-block">
                  <p>{formData.location}</p>
                  <p>{new Date(formData.date).toLocaleDateString('uz-UZ')} • {formData.time}</p>
                </div>
              </motion.div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-luxury-taupe font-sans font-light leading-relaxed mb-4 text-center">
                  Sokin va maxfiy kiyinish zallarimizda individual xizmatdan bahramand bo'lish uchun sizga ma'qul vaqtni tanlang.
                </p>

                <div>
                  <label className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono block mb-1.5 flex items-center gap-1">
                    <User size={10} /> Ismingiz
                  </label>
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
                  <label className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono block mb-1.5 flex items-center gap-1">
                    <Phone size={10} /> Telefon raqamingiz
                  </label>
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
                  <label className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono block mb-1.5 flex items-center gap-1">
                    <MapPin size={10} /> Kiyinish zali (Showroom)
                  </label>
                  <select 
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-luxury-sand/80 px-4 py-3 text-xs font-sans focus:outline-none focus:border-luxury-gold transition-all duration-300"
                  >
                    <option value="Urganch Showroom">Urganch Markazi Showroom</option>
                    <option value="Xiva Tarixiy Markaz Showroom">Xiva Qadimgi Markaz Showroom</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono block mb-1.5 flex items-center gap-1">
                      <Calendar size={10} /> Sana
                    </label>
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-luxury-sand/80 px-4 py-3 text-xs font-mono focus:outline-none focus:border-luxury-gold transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-luxury-taupe font-mono block mb-1.5 flex items-center gap-1">
                      <Clock size={10} /> Vaqt
                    </label>
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-luxury-sand/80 px-4 py-3 text-xs font-mono focus:outline-none focus:border-luxury-gold transition-all duration-300"
                    >
                      {['11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-luxury-charcoal text-luxury-cream py-4 text-xs uppercase tracking-widest font-mono hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300 mt-6 border border-luxury-charcoal hover:border-luxury-gold"
                >
                  Tashrifni tasdiqlash
                </button>
              </form>
            )}

            <div className="border-t border-luxury-sand/30 pt-4 flex items-center justify-center space-x-2 text-luxury-taupe/50 text-[9px] font-mono uppercase tracking-wider mt-6">
              <ShieldCheck size={12} />
              <span>Maxfiylik va Shaxsiy Xizmat Kafolati</span>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
