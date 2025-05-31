import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Plus, X } from 'lucide-react';

const Floating = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6">
      {/* Action Buttons */}
      <div
        className={`flex flex-col-reverse items-end gap-3 mb-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {[
          { icon: <MessageCircle size={22} />, label: 'WhatsApp', onClick: handleWhatsApp },
          { icon: <Mail size={22} />, label: 'Email', onClick: handleEmail },
          { icon: <Phone size={22} />, label: 'Call', onClick: handleCall },
        ].map(({ icon, label, onClick }, idx) => (
          <div key={idx} className="relative group">
            <button
              onClick={onClick}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-200"
              title={label}
            >
              {icon}
            </button>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Toggle FAB */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Contact Options"
        className={`bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        {isOpen ? <X size={28} /> : <Plus size={28} />}
      </button>
    </div>
  );
};

export default Floating;
