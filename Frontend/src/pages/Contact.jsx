import React, { useState, useEffect } from "react";
import Cnt from "../assets/Cnt.jpg";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  MessageCircle,
  Clock,
  Zap,
  Globe,
  Calendar,
  Wrench,
  RefreshCw,
} from "lucide-react";
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsApp = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin size={20} />, url: "https://linkedin.com" },
    { name: "WhatsApp", icon: <FaWhatsapp size={20} />, url: "https://wa.me/918820066999" },
    { name: "Mail", icon: <Mail size={20} />, url: "mailto:info@zenitech.in" },
    { name: "Call", icon: <Phone size={20} />, url: "tel:+918820066999" },
  ];

  const offices = [
    {
      name: "Bangaluru Office",
      address: "Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout, Bangaluru - 560045, India",
      mapUrl: "https://www.google.com/maps/dir/?api=1&destination=Dex+Co+Work,+2nd+Floor,+1383/433,+5th+Block,+HBR+Layout,+Bangalore+560045,+India",
    },
    {
      name: "Kolkata Office",
      address: "Sunny Seasons, 15/1C, Kamalgazi, P.O. Narendrapur, Kolkata - 700103, India",
      mapUrl: "https://www.google.com/maps/dir/?api=1&destination=Sunny+Seasons,+15/1C,+Kamalgazi,+Narendrapur,+Kolkata+700103,+India",
    },
  ];

  // Add FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What are your business hours?",
      answer: "Monday to Friday, 9:00 AM to 6:00 PM IST. 24/7 customer support available.",
      icon: <Clock className="text-blue-600" size={24} />
    },
    {
      question: "How quickly can I expect a response?",
      answer: "We respond within 24 hours during business days.",
      icon: <Zap className="text-blue-600" size={24} />
    },
    {
      question: "Do you offer remote services?",
      answer: "Yes, we serve clients globally with remote support.",
      icon: <Globe className="text-blue-600" size={24} />
    },
    {
      question: "How can I schedule a consultation?",
      answer: "Use our contact form, email, or phone to schedule a consultation.",
      icon: <Calendar className="text-blue-600" size={24} />
    },
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive IT solutions including cloud computing, cybersecurity, software development, and IT infrastructure management.",
      icon: <Wrench className="text-blue-600" size={24} />
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, our technical support team is available 24/7 to assist you with any issues.",
      icon: <RefreshCw className="text-blue-600" size={24} />
    }
  ];

  // Animation on scroll effect
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 md:mb-16 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900">
          Contact Us
        </h1>
        <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-lg md:text-xl text-blue-950">
          We'd love to hear from you. Our team is always ready to assist.
        </p>
      </div>

      {/* Contact Info + Form Grid */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img src={Cnt} alt="Contact Background" className="w-full h-full object-cover" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-blue-950/80 z-10"></div>

        {/* Grid Content */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 lg:p-12">
          {/* Mobile Form on Top */}
          <div className="lg:hidden">
            <ContactForm />
          </div>

          {/* Left Side - Contact Info */}
          <div className="text-white space-y-8 py-6">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Contact Information</h2>
              <p className="text-gray-200 max-w-md">
                Reach out to us through any of these channels. We're available to answer your questions 24/7.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6 group">
                <div
                  onClick={() => handlePhoneCall("8820066999")}
                  className="bg-blue-600/80 group-hover:bg-blue-700/80 backdrop-blur-md text-white p-3 md:p-4 rounded-xl cursor-pointer transition-all"
                >
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1">Call Us 24/7</p>
                  <p
                    onClick={() => handlePhoneCall("8820066999")}
                    className="font-semibold text-base md:text-lg cursor-pointer hover:text-orange-200"
                  >
                    +91 88200 66999
                  </p>
                  <p
                    onClick={() => handlePhoneCall("7439004545")}
                    className="font-semibold text-base md:text-lg cursor-pointer hover:text-orange-200"
                  >
                    +91 74390 04545
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group">
                <div
                  onClick={() => handleWhatsApp("918820066999")}
                  className="bg-green-600/80 group-hover:bg-green-700/80 backdrop-blur-md text-white p-3 md:p-4 rounded-xl cursor-pointer transition-all"
                >
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1">WhatsApp Us</p>
                  <p
                    onClick={() => handleWhatsApp("918820066999")}
                    className="font-semibold text-base md:text-lg cursor-pointer hover:text-orange-200"
                  >
                    +91 88200 66999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group">
                <div
                  onClick={() => handleEmail("info@zenitech.in")}
                  className="bg-blue-600/80 group-hover:bg-blue-700/80 backdrop-blur-md text-white p-3 md:p-4 rounded-xl cursor-pointer transition-all"
                >
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1">Email Us</p>
                  <p
                    onClick={() => handleEmail("info@zenitech.in")}
                    className="font-semibold text-base md:text-lg cursor-pointer hover:text-orange-200"
                  >
                    info@zenitech.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="bg-blue-600/80 group-hover:bg-blue-700/80 backdrop-blur-md text-white p-3 md:p-4 rounded-xl transition-all">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1">Our Locations</p>
                  <div className="space-y-3 md:space-y-4">
                    {offices.map((office, index) => (
                      <a
                        key={index}
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:bg-white/5 p-2 rounded-lg transition"
                      >
                        <p className="font-semibold text-base md:text-lg mb-1">{office.name}</p>
                        <p className="text-gray-200 text-sm md:text-base">{office.address}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 md:mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-md p-2 md:p-3 rounded-full transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop - Right Side Form */}
          <div className="hidden lg:block rounded-xl shadow-lg p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="mb-12 animate-on-scroll" style={{ animationDelay: '0.5s' }}>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Find Us</h2>
        <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1789978535837!2d77.62639769999999!3d13.0335666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1789d5c92d9f%3A0x6aa2f619aaa4d5aa!2sZenitech%20Solutions!5e0!3m2!1sen!2sin!4v1715862154275!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zenitech Bangalore Office"
          ></iframe>
        </div>
        <div className="mt-4 text-center text-sm md:text-base text-gray-600">
          <a
            href="https://www.google.com/maps/place/Zenitech+Solutions/@13.0335666,77.6263977,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mt-2"
          >
            <MapPin size={16} className="mr-1" />
            Get directions
          </a>
        </div>
      </div>

      {/* Enhanced FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 animate-on-scroll" style={{ animationDelay: '0.7s' }}>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Find quick answers to common questions about our services</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                openFaq === index ? 'bg-blue-50' : 'hover:bg-gray-50'
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Help Section */}
        
      </div>
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;
