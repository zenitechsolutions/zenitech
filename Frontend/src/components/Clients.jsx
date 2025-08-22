import React, { useState, useEffect } from 'react';

const clients = [
    { name: "Teesta Investment Pvt Ltd" },
    { name: "JIS College of Engineering" },
    { name: "Emami Frank Ross Limited" },
    { name: "Narayan Memorial Hospital" },
    { name: "Innover Digital Pvt Ltd" },
    { name: "Iskraemeco India Pvt Ltd" },
    { name: "Mediview Nursing Home Pvt Ltd" },
    { name: "PharmaQuant Insights Pvt Ltd" },
    { name: "Alliance Broadband" },
    { name: "Adhunik Power & Natural Resources Pvt Ltd" },
    { name: "UBP Media & Entertainments Pvt Ltd" },
    { name: "TTK Prestige Limited" },
    { name: "Orbit Techsol India Pvt Ltd" },
    { name: "Estore Factory Pvt Ltd" },
    { name: "Republic TV (ARG Outlier Media Private Limited)" },
    { name: "Lowcode Minds Technology Pvt Ltd" },
    { name: "CMR University" },
    { name: "WiMate Technology Solutions Pvt Ltd" },
    { name: "Lux Industries Ltd" },
    { name: "Pharmadule Engineering India Pvt Ltd" },
    { name: "Iview Sense Pvt Ltd" },
    { name: "SunSky Software Technologies Pvt Ltd" },
    { name: "Industrial Handling Private Limited" },
    { name: "Oswal Residential Buildings LLP" },
    { name: "GeoTech Infoservices Pvt Ltd" },
    { name: "Verifacts Services Pvt Ltd" },
    { name: "National Gems Higher Secondary School" },
    { name: "Techno India" },
    { name: "Smart Call Centre" }
];

// Industry icon renderer based on index
const renderIcon = (index) => {
  const icons = [
    // Computer/Technology
    <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
    
    // Healthcare
    <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    
    // Education
    <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>,
    
    // Media
    <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>,
    
    // Industrial
    <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>,
    
    // Business
    <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ];
  
  return icons[index % icons.length];
};

const Clients = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const totalSlides = Math.ceil(clients.length / slidesPerView);
  const rotationTime = 5000;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, rotationTime);
    
    return () => clearInterval(interval);
  }, [isPaused, totalSlides, rotationTime]);
  
  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const getVisibleClients = () => {
    const startIdx = activeSlide * slidesPerView;
    return clients.slice(startIdx, startIdx + slidesPerView);
  };

  return (
    <section 
      className="w-full bg-gradient-to-br from-white/80 via-slate-50 to-blue-50 py-20 sm:py-28 px-2 sm:px-6 relative overflow-hidden"
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-zinc-200 rounded-full opacity-30 blur-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-slate-200 rounded-full opacity-20 blur"></div>
      </div>
      
      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center bg-white/70 backdrop-blur px-5 py-2 rounded-full text-blue-600 text-base font-semibold tracking-wide border border-blue-100 shadow-sm mb-6">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Our Clients
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">Trusted by Industry Leaders</h2>
          <p className="mt-2 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light">
            We're proud to collaborate with industry leaders across various sectors.
          </p>
        </div>
        
        {/* Carousel */}
        <div className="relative overflow-visible px-2 sm:px-10">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/70 backdrop-blur-xl hover:bg-white/90 rounded-full shadow-lg border border-blue-100/50 flex items-center justify-center transition-all duration-200 group"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/70 backdrop-blur-xl hover:bg-white/90 rounded-full shadow-lg border border-blue-100/50 flex items-center justify-center transition-all duration-200 group"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          
          {/* Client Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {getVisibleClients().map((client, idx) => (
              <div 
                key={idx} 
                className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-[260px] min-h-[260px] max-h-[260px] border border-blue-100/40 relative overflow-hidden"
                style={{ boxSizing: 'border-box' }}
              >
                {/* Icon Section */}
                <div className="mb-5 flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100/80 via-white/60 to-slate-100/80 rounded-full border-2 border-blue-100 shadow-inner backdrop-blur-lg">
                  {renderIcon(idx)}
                </div>
                {/* Company Name */}
                <h3 className="text-zinc-900 font-semibold text-center text-lg mb-auto line-clamp-2 w-full tracking-tight">
                  {client.name}
                </h3>
                {/* Divider */}
                <div className="w-14 h-0.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-100 my-4 rounded-full"></div>
              </div>
            ))}
          </div>
          
          {/* Progress Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 touch-manipulation ${
                  activeSlide === index ? 'bg-gradient-to-r from-blue-500 to-blue-700 w-8 shadow-lg' : 'bg-slate-300 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;