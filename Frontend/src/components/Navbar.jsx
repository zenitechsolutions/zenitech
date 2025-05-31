import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
        { name: 'Cloud Computing', link: '/services/cloud-computing' },
        { name: 'Cybersecurity', link: '/services/cybersecurity' },
        { name: 'Software License', link: '/services/software-licensing' },
        { name: 'Software Development', link: '/services/software-development' },
        { name: 'IT Services', link: '/services/it-services' },
        { name: 'Telecom Services', link: '/services/telecom-services' },
      ],
    },
    {
      name: 'Talk to Us',
      dropdown: [
        { name: 'Book an Appointment', link: '/appointment' },
        { name: 'Product Demo', link: '/product-demo' },
      ],
    },
    { name: 'Partners', link: '/partners' },
  ];

  return (
    <nav
      className={`fixed w-full z-[1000] transition-transform duration-300 ease-in-out border-b border-slate-200 bg-white backdrop-blur-xl ${showNavbar ? 'translate-y-0' : '-translate-y-full'} apple-navbar`}
      style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-14 md:h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 min-w-[160px]">
          <img src={Logo} alt="Logo" className="h-7 w-auto" />
          <div className="zenitech-brand text-orange-600 font-bold whitespace-nowrap">
            Zenitech <span className='text-blue-700'>Solutions</span>
          </div>
        </a>
        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex gap-2 items-center justify-center flex-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="apple-nav-link flex items-center gap-1 font-medium text-blue-900 px-3 py-1.5 relative"
                >
                  {item.name}
                  <ChevronDown size={16} />
                  <span className="apple-underline" />
                </button>
                <div className="apple-dropdown absolute top-full left-1/2 -translate-x-1/2 bg-white/95 shadow-xl rounded-xl py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible group-hover:translate-y-2 transition-all duration-200 z-50 min-w-[220px] mt-2">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.link}
                      className="block px-5 py-2 text-sm text-slate-800 hover:bg-blue-50 rounded transition"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.link}
                className="apple-nav-link font-medium text-blue-950 px-3 py-1.5 relative"
              >
                {item.name}
                <span className="apple-underline" />
              </a>
            )
          )}
        </div>
        {/* Contact Us Button (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-2 min-w-[160px] justify-end">
          <a
            href="/contact"
            className="hidden md:inline-block apple-contact-btn px-5 py-2 text-white bg-blue-950 hover:bg-blue-700 rounded-full font-semibold text-sm transition shadow-none border border-blue-700/20"
            style={{backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)'}}
          >
            Contact Us
          </a>
          <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none p-2 rounded-full hover:bg-slate-200 transition">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-4 pb-4 bg-white shadow-md">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex justify-between items-center w-full text-base font-semibold text-blue-900 py-2"
                >
                  {item.name}
                  <ChevronDown
                    className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    size={18}
                  />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-4 flex flex-col gap-1">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.link}
                        className="text-sm text-blue-700 py-2"
                        onClick={toggleMobileMenu}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.link}
                className="text-base font-semibold text-blue-900 py-2"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </a>
            )
          )}
          <a
            href="/contact"
            className="mt-2 w-full text-center text-base font-semibold bg-cyan-950 text-white px-4 py-2 rounded-md"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </a>
        </div>
      )}
      <style jsx global>{`
        .apple-navbar {
          box-shadow: none !important;
          border-bottom: 1px solid rgba(120,120,120,0.08);
        }
        .apple-nav-link {
          background: none;
          border: none;
          outline: none;
          position: relative;
          color: #1e293b;
          font-size: 1.08rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: color 0.18s;
        }
        .apple-nav-link:hover, .apple-nav-link:focus {
          color: #2563eb;
        }
        .apple-underline {
          display: block;
          position: absolute;
          left: 0; right: 0; bottom: 0.1em;
          height: 2px;
          background: linear-gradient(90deg, #2563eb 0%, #fb923c 100%);
          border-radius: 2px;
          opacity: 0;
          transform: scaleX(0.5);
          transition: opacity 0.18s, transform 0.18s;
        }
        .apple-nav-link:hover .apple-underline, .apple-nav-link:focus .apple-underline {
          opacity: 1;
          transform: scaleX(1);
        }
        .apple-dropdown {
          min-width: 220px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
          opacity: 0;
          pointer-events: none;
          transform: translateY(0.5em);
        }
        .group:hover .apple-dropdown, .group:focus-within .apple-dropdown {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .apple-dropdown a {
          transition: background 0.18s, color 0.18s;
        }
        .apple-dropdown a:hover, .apple-dropdown a:focus {
          background: #f1f5f9;
          color: #2563eb;
        }
        .apple-contact-btn {
          box-shadow: none;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .apple-contact-btn-mobile {
          box-shadow: none;
          font-weight: 600;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .apple-mobile-menu {
          animation: fadeInUp 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
          background: #fff !important;
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
          min-height: 100vh;
        }
        .apple-mobile-link {
          background: none;
          border: none;
          outline: none;
          color: #1e293b;
          font-size: 1.6rem;
          font-weight: bold;
          letter-spacing: 0.01em;
          transition: color 0.18s;
        }
        .apple-mobile-link:hover, .apple-mobile-link:focus {
          color: #2563eb;
          background: #f1f5f9;
        }
        .apple-mobile-sublink {
          color: #2563eb;
          font-size: 1.15rem;
          font-weight: 500;
          padding-left: 1.5rem;
          transition: color 0.18s;
        }
        .apple-mobile-sublink:hover, .apple-mobile-sublink:focus {
          color: #fb923c;
          background: #f1f5f9;
        }
        .apple-contact-btn-mobile {
          font-size: 2rem;
          font-weight: bold;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .zenitech-brand {
          font-size: 2.1rem;
          line-height: 1.1;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }
        @media (max-width: 640px) {
          .zenitech-brand {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
