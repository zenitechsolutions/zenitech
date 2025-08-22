import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Phone, Plus, X } from 'lucide-react';

const Floating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleWhatsApp = () => {
    const phoneNumber = '918820066999';
    const message = "Hello! I'm interested in your services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = () => {
    const email = 'info@zenitech.in';
    const subject = 'Inquiry';
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}`, '_blank');
  };

  const handleCall = () => {
    const phoneNumber = '+918820066999';
    window.open(`tel:${phoneNumber}`);
  };

  // Show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // also close menu when scrolling back up
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
      }`}
    >
      {/* Action Buttons */}
      <div
        className={`flex flex-col-reverse items-end gap-3 mb-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {[
          { 
            icon: <MessageCircle size={22} />, 
            label: 'WhatsApp', 
            onClick: handleWhatsApp,
            gradient: 'from-green-500 via-emerald-500 to-teal-500'
          },
          { 
            icon: <Mail size={22} />, 
            label: 'Email', 
            onClick: handleEmail,
            gradient: 'from-blue-500 via-indigo-500 to-purple-500'
          },
          { 
            icon: <Phone size={22} />, 
            label: 'Call', 
            onClick: handleCall,
            gradient: 'from-violet-500 via-purple-500 to-indigo-500'
          },
        ].map(({ icon, label, onClick, gradient }, idx) => (
          <div key={idx} className="relative group">
            <button
              onClick={onClick}
              className={`bg-gradient-to-br ${gradient} text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-white/20`}
              title={label}
            >
              {icon}
            </button>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900/90 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Toggle FAB */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Contact Options"
        className={`bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-3xl ${
          isOpen ? 'rotate-45' : ''
        }`}
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {isOpen ? <X size={28} /> : <Plus size={28} />}
      </button>
    </div>
  );
};

export default Floating;
