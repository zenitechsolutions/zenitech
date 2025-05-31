import React, { useState, useEffect } from 'react';
import Aws from '../assets/Logo/Aws.jpg';
import Veritas from '../assets/Logo/Veritas.jpg';
import Peoplelink from '../assets/Logo/Peoplelink.jpg';
import Computhink from '../assets/Logo/Computhink.jpg';
import Pingsmart from '../assets/Logo/Pingsmart.jpg';
import Ozonetel from '../assets/Logo/Ozonetel.jpg';
import GreytHr from '../assets/Logo/GreytHr.jpg';
import Jio from '../assets/Logo/Jio.jpg';
import Aruba from '../assets/Logo/Aruba.jpg';
import Synology from '../assets/Logo/Synology.jpg';
import Dell from '../assets/Logo/Dell.jpg';
import Hp from '../assets/Logo/Hp.jpg';
import Veeam from '../assets/Logo/Veeam.jpg';
import Bitdefender from '../assets/Logo/Bitdefender.jpg';
import Seqrite from '../assets/Logo/Seqrite.jpg';
import Kaspersky from '../assets/Logo/Kaspersky.jpg';
import TrendMicro from '../assets/Logo/TrendMicro.jpg';
import Symantec from '../assets/Logo/Symantec.jpg';
import Safetic from '../assets/Logo/Safetic.jpg';
import Barracuda from '../assets/Logo/Barracuda.jpg';
import SonicWall from '../assets/Logo/SonicWall.jpg';
import Sophos from '../assets/Logo/Sophos.jpg';
import Fortinet from '../assets/Logo/Fortinet.jpg';
import Acronis from '../assets/Logo/Acronis.jpg';
import Dropbox from '../assets/Logo/Dropbox.jpg';
import AnyDesk from '../assets/Logo/AnyDesk.jpg';
import Adobe from '../assets/Logo/Adobe.jpg';
import GoogleCloud from '../assets/Logo/GoogleCloud.jpg';
import Azure from '../assets/Logo/Azure.jpg';
import Microsoft from '../assets/Logo/Microsoft.jpg';
import Esds from '../assets/Logo/ESDS.jpg';
import Checkpoint from '../assets/Logo/Checkpoint.jpg';
import OVHcloud from '../assets/Logo/OVHcloud.jpg';
import ServerWala from '../assets/Logo/ServerWala.jpg';
import LenovoLogo from '../assets/Logo/Lenovo logo.png';
import RelianceCommLogo from '../assets/Logo/Reliance.png';
import KrispCallLogo from '../assets/Logo/Krisp Call.png';
import TataTeleLogo from '../assets/Logo/Tata tele.jpeg';
import EverestIMSLogo from '../assets/Logo/Eversetims.jpeg';
import VmwareLogo from '../assets/Logo/VMware.jpeg';
import GTBLogo from '../assets/Logo/GTB logo.jpg';
import NetwrixLogo from '../assets/Logo/Netwritx.png';
import WatchGuardLogo from '../assets/Logo/WatchGuard.png';
import OpenTextLogo from '../assets/Logo/Opentext.png';
import NinjaOneLogo from '../assets/Logo/Nnjaone.logo.png';
import PaloAltoLogo from '../assets/Logo/Palo-Alto-Logo.jpg';
import CloudflareLogo from '../assets/Logo/Cloudflare.jpg';
import StringeeLogo from '../assets/Logo/Stringee.png';

// Create a mapping of partner names to their logo imports
const partnerLogos = {
  'AWS': Aws,
  'Microsoft AZURE': Azure,
  'GOOGLE CLOUD': GoogleCloud,
  'ESDS': Esds,
  'Checkpoint': Checkpoint,
  'OVHcloud': OVHcloud,
  'Serverwala': ServerWala,
  'CLOUDFLARE': CloudflareLogo,
  'PALO ALTO': PaloAltoLogo,
  'NinjaOne': NinjaOneLogo,
  'OpenText': OpenTextLogo,
  'WatchGuard': WatchGuardLogo,
  'Netwrix': NetwrixLogo,
  'GTB Technologies': GTBLogo,
  'Vmware': VmwareLogo,
  'EVERESTIMS': EverestIMSLogo,
  'TATA Tele': TataTeleLogo,
  'KrispCall': KrispCallLogo,
  'Reliance Communications': RelianceCommLogo,
  'LENOVO': LenovoLogo,
  'FORTINET': Fortinet,
  'SOPHOS': Sophos,
  'SONICWALL': SonicWall,
  'KASPERSKY': Kaspersky,
  'SYMANTEC': Symantec,
  'BITDEFENDER': Bitdefender,
  'SAFETICA': Safetic,
  'ACRONIS': Acronis,
  'SEQRITE': Seqrite,
  'HP': Hp,
  'DELL': Dell,
  'SYNOLOGY': Synology,
  'Veeam': Veeam,
  'ANYDESK': AnyDesk,
  'ADOBE': Adobe,
  'GREYTHR': GreytHr,
  'RELIANCE JIO': Jio,
  'Dropbox': Dropbox,
  'Veritas': Veritas,
  'MICROSOFT': Microsoft,
  'Stringee': StringeeLogo,
};

const Partners = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const partnerCategories = [
    {
      title: 'Cloud Solutions',
      description: 'Leading cloud service providers and technology partners for scalable, secure, and efficient cloud solutions.',
      partners: ['AWS', 'Microsoft AZURE', 'GOOGLE CLOUD', 'ESDS', 'Serverwala', 'Dropbox', 'OVHcloud'],
      icon: '☁️'
    },
    {
      title: 'Cyber Security',
      description: 'Comprehensive cybersecurity partners for firewalls, endpoint security, DLP, and advanced threat protection.',
      partners: ['FORTINET', 'SOPHOS', 'SONICWALL', 'Checkpoint', 'KASPERSKY', 'SYMANTEC', 'CLOUDFLARE', 'BITDEFENDER', 'SAFETICA', 'ACRONIS', 'SEQRITE', 'PALO ALTO', 'NinjaOne', 'OpenText', 'WatchGuard', 'Netwrix', 'GTB Technologies'],
      icon: '🔒'
    },
    {
      title: 'Software License',
      description: 'Strategic software procurement and license management partners for your business needs.',
      partners: ['MICROSOFT', 'ANYDESK', 'ADOBE', 'Vmware', 'Veeam', 'EVERESTIMS', 'GREYTHR'],
      icon: '💻'
    },
    {
      title: 'Telecom Services',
      description: 'Telecom partners for internet leased lines, cloud telephony, call center, and international calling solutions.',
      partners: ['RELIANCE JIO', 'TATA Tele', 'KrispCall', 'Reliance Communications', 'Stringee'],
      icon: '📞'
    },
    {
      title: 'IT Services',
      description: 'Trusted OEMs and partners for servers, storage, backup, and IT infrastructure solutions.',
      partners: ['HP', 'DELL', 'LENOVO', 'SYNOLOGY', 'Vmware', 'Veeam', 'Veritas'],
      icon: '🖥️'
    }
  ];

  const categories = ['All', ...partnerCategories.map(cat => cat.title)];

  const filteredCategories = partnerCategories.filter(category => 
    activeCategory === 'All' || category.title === activeCategory
  ).map(category => ({
    ...category,
    partners: category.partners.filter(partner => 
      partner.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.partners.length > 0);

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
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700/80 via-blue-100/40 to-blue-700/80 text-gray-900 overflow-hidden animate-on-scroll" style={{ animationDelay: '0.1s' }}>
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-400 bg-clip-text text-transparent">Partners</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-800 max-w-3xl mx-auto leading-relaxed font-light">
              Collaborating with industry leaders to deliver exceptional technology solutions
            </p>
            <div className="mt-8 inline-flex items-center space-x-4 text-blue-700">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>50+ Partners</span>
              </span>
              <span className="w-1 h-6 bg-blue-400 opacity-50"></span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
                <span>5+ Services</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length > 0 ? (
            <div className="space-y-16">
              {filteredCategories.map((category, index) => (
                <div key={index} className="group animate-on-scroll" style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                  <div className="flex items-center mb-8">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900 mb-2">{category.title}</h2>
                      <p className="text-blue-800 max-w-2xl font-light">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                    {category.partners.map((partner, pIndex) => (
                      <div 
                        key={pIndex}
                        className="bg-white/80 backdrop-blur-lg rounded-full p-6 flex flex-col items-center justify-center border border-blue-100 group/card hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 animate-on-scroll"
                        style={{ animationDelay: `${0.1 * pIndex}s`, minHeight: '140px' }}
                      >
                        <div className="h-16 w-full flex items-center justify-center mb-3">
                          {partnerLogos[partner] ? (
                            <img 
                              src={partnerLogos[partner]} 
                              alt={`${partner} logo`}
                              className="max-h-12 max-w-full object-contain transition-transform duration-300 group-hover/card:scale-110"
                            />
                          ) : (
                            <div className="bg-blue-50 rounded-full px-3 py-2 flex items-center justify-center min-h-[48px]">
                              <span className="text-sm font-semibold text-blue-900 text-center">{partner}</span>
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-medium text-blue-900 text-center leading-tight">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 animate-on-scroll" style={{ animationDelay: '1.2s' }}>
              <div className="bg-white/80 rounded-3xl p-12 shadow-lg max-w-md mx-auto border border-blue-100">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">No partners found</h3>
                <p className="text-blue-700 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('All');
                  }}
                >
                  Reset filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .frosted-pill-apple {
          background: rgba(255,255,255,0.18);
          box-shadow: 0 2px 16px 0 rgba(30,41,59,0.08);
          backdrop-filter: blur(8px);
          border-radius: 9999px;
          transition: box-shadow 0.18s, transform 0.18s, background 0.18s;
        }
        .frosted-pill-apple:hover {
          background: rgba(255,255,255,0.28);
          box-shadow: 0 4px 24px 0 rgba(30,41,59,0.12);
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 768px) {
          .frosted-pill-apple { font-size: 0.95rem; padding: 0.5rem 1.1rem; }
        }
      `}</style>
    </div>
  );
};

export default Partners;