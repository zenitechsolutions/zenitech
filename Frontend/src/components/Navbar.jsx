import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/Logo.jpg';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const timeoutRef = useRef({});

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY);
    setLastScrollY(currentScrollY);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveDropdown(null);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleMouseEnter = (name) => {
    if (timeoutRef.current[name]) {
      clearTimeout(timeoutRef.current[name]);
    }
    setHoveredDropdown(name);
  };

  const handleMouseLeave = (name) => {
    timeoutRef.current[name] = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150); // Small delay to prevent flickering
  };

  const handleDropdownClick = (name, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideDropdown = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!isClickInsideDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      Object.values(timeoutRef.current).forEach(clearTimeout);
    };
  }, []);

  const navItems = [
    { name: 'Home', link: '/' },
    {
      name: 'About',
      dropdown: [
        { name: 'About Us', link: '/about' },
        { name: 'About Founder', link: '/about/founder-profile' },
      ],
    },
    {
      name: 'Services',
      dropdown: [
        { name: 'All Services', link: '/services' },
        { name: 'IT Services', link: '/services/it-services' },
        { name: 'Cloud Computing', link: '/services/cloud-computing' },
        { name: 'Cyber Security', link: '/services/cybersecurity' },
        { name: 'Software License', link: '/services/software-licensing' },
        { name: 'Software Development', link: '/services/software-development' },
        { name: 'Telecom Services', link: '/services/telecom-services' },
      ],
    },
    { name: 'Partners', link: '/partners' },
    {
      name: 'Talk to Us',
      dropdown: [
        { name: 'Book an Appointment', link: '/appointment' },
        { name: 'Product Demo', link: '/product-demo' },
      ],
    },
    
  ];

  return (
    <nav
      className={`fixed w-full z-[1000] transition-transform duration-300 ease-in-out border-b border-slate-200 bg-white/95 backdrop-blur-xl ${showNavbar ? 'translate-y-0' : '-translate-y-full'} apple-navbar`}
      style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-14 md:h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5 min-w-[140px] md:min-w-[160px]">
          <div className="h-7 w-7 md:h-8 md:w-8 rounded-full overflow-hidden flex items-center justify-center">
            <img src={logo} alt="Zenitech Solutions" className="h-full w-full object-cover" />
          </div>
          <div className="zenitech-brand text-orange-600 font-bold whitespace-nowrap">
            Zenitech <span className='text-blue-700'>Solutions</span>
          </div>
        </a>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex gap-2 items-center justify-center flex-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div 
                key={item.name} 
                className="relative"
                ref={(el) => (dropdownRefs.current[item.name] = el)}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={() => handleMouseLeave(item.name)}
              >
                <button
                  onClick={(e) => handleDropdownClick(item.name, e)}
                  className={`apple-nav-link flex items-center gap-1 font-medium px-4 py-2 relative transition-all duration-200 ${
                    activeDropdown === item.name || hoveredDropdown === item.name
                      ? 'text-blue-600 bg-blue-50/50'
                      : 'text-blue-900 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.name || hoveredDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                  <span className="apple-underline" />
                </button>
                
                <div 
                  className={`apple-dropdown absolute top-full left-1/2 -translate-x-1/2 bg-white/98 shadow-xl rounded-xl py-3 min-w-[240px] mt-1 border border-slate-100 transition-all duration-200 ${
                    activeDropdown === item.name || hoveredDropdown === item.name
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {item.dropdown.map((sub, index) => (
                    <a
                      key={sub.name}
                      href={sub.link}
                      className={`block px-5 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150 ${
                        index === 0 ? 'rounded-t-lg' : ''
                      } ${index === item.dropdown.length - 1 ? 'rounded-b-lg' : ''}`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></span>
                        {sub.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.link}
                className="apple-nav-link font-medium text-blue-950 hover:text-blue-600 px-4 py-2 relative transition-all duration-200"
              >
                {item.name}
                <span className="apple-underline" />
              </a>
            )
          )}
        </div>

        {/* Contact Us Button (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-2 min-w-[40px] md:min-w-[160px] justify-end">
          <a
            href="/contact"
            className="hidden md:inline-block apple-contact-btn px-6 py-2.5 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden focus:outline-none p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden apple-mobile-menu bg-white border-t border-slate-200">
          <div className="px-4 py-2 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="border-b border-slate-100 last:border-b-0">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex justify-between items-center w-full text-left py-4 font-semibold text-blue-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''
                      }`}
                      size={18}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.name ? 'max-h-96 pb-3' : 'max-h-0'
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.link}
                          className="flex items-center gap-2 py-2.5 text-sm text-blue-700 hover:text-blue-600 hover:bg-blue-50 px-3 rounded-lg transition-all duration-150"
                          onClick={toggleMobileMenu}
                        >
                          <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.link}
                  className="block py-4 font-semibold text-blue-900 hover:text-blue-600 border-b border-slate-100 last:border-b-0 transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </a>
              )
            )}
            <div className="pt-4">
              <a
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transform transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .apple-navbar {
          box-shadow: 0 1px 20px rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(226,232,240,0.8);
        }
        
        .apple-nav-link {
          border-radius: 8px;
          position: relative;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        
        .apple-underline {
          position: absolute;
          left: 50%;
          right: 50%;
          bottom: 4px;
          height: 2px;
          background: linear-gradient(90deg, #2563eb 0%, #f97316 100%);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .apple-nav-link:hover .apple-underline {
          left: 8px;
          right: 8px;
        }
        
        .apple-dropdown {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          z-index: 50;
        }
        
        .apple-contact-btn {
          letter-spacing: -0.01em;
          border: 1px solid rgba(59, 130, 246, 0.1);
        }
        
        .apple-mobile-menu {
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .zenitech-brand {
          font-size: 1.3rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
          font-weight: 700;
        }
        
        @media (min-width: 768px) {
          .zenitech-brand {
            font-size: 1.6rem;
          }
        }
        
        @media (max-width: 640px) {
          .zenitech-brand {
            font-size: 1.2rem;
          }
        }
        
        /* Smooth scrollbar for mobile menu */
        .apple-mobile-menu::-webkit-scrollbar {
          width: 4px;
        }
        
        .apple-mobile-menu::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        .apple-mobile-menu::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        
        .apple-mobile-menu::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;