import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import GenderShowcase from './components/GenderShowcase';
import FeaturedProduct from './components/FeaturedProduct';
import Localization from './components/Localization';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ProfileDrawer from './components/ProfileDrawer';
import CartDrawer from './components/CartDrawer';
import BookingModal from './components/BookingModal';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  // Global states
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeGenderTab, setActiveGenderTab] = useState('men');
  const [appointments, setAppointments] = useState([
    { id: 1, date: '25.07.2026', time: '14:00', status: 'Tasdiqlangan', location: 'Urganch Showroom' }
  ]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleAddAppointment = (newApp) => {
    setAppointments((prev) => [newApp, ...prev]);
  };

  // Page scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Cart operations
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Premium UX: Open cart automatically when an item is added
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-luxury-cream text-luxury-charcoal selection:bg-luxury-gold/20 selection:text-luxury-charcoal">
      
      {/* Top scroll progress line (Ultra-thin elegant gold line) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-luxury-gold origin-left z-[100]" 
        style={{ scaleX }}
      />

      {/* Nameless Header */}
      <Header 
        cartItemsCount={cartItemsCount}
        onSearchClick={() => setIsSearchOpen(true)}
        onProfileClick={() => setIsProfileOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        onGenderSelect={(gender) => setActiveGenderTab(gender)}
      />

      {/* Main Content Sections */}
      <main>
        
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Collections Grid */}
        <Collections />

        {/* Section 3: Interactive Gender Showcase (Erkaklar / Ayollar) */}
        <GenderShowcase 
          onAddToCart={handleAddToCart}
          activeTab={activeGenderTab}
          setActiveTab={setActiveGenderTab}
        />

        {/* Section 4: Featured Product 360 Viewer */}
        <FeaturedProduct 
          onAddToCart={handleAddToCart}
        />

        {/* Section 5: Localization & Showroom Details */}
        <Localization onBookClick={() => setIsBookingOpen(true)} />

      </main>

      {/* Footer */}
      <Footer onGenderSelect={(gender) => setActiveGenderTab(gender)} />

      {/* Modals and Side Drawers */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <ProfileDrawer 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        appointments={appointments}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onAddAppointment={handleAddAppointment}
      />

    </div>
  );
}
