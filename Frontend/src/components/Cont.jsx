import React, { useState, useEffect } from 'react';
import Pic1 from '../assets/BgPic/Pic1.jpg';
import Pic2 from '../assets/BgPic/Pic2.jpeg';
import Pic3 from '../assets/BgPic/pic3.jpeg';
import Pic4 from '../assets/BgPic/pic4.jpeg';
import Pic5 from '../assets/BgPic/pic8.jpeg';

// Mock carousel images with beautiful gradients
const carouselImages = [Pic1, Pic2, Pic3, Pic4, Pic5];

const Cont = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10 px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left: Content */}
        <div className={`w-full lg:w-1/2 max-w-2xl text-center lg:text-left mb-16 lg:mb-0 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Premium badge */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <span className="relative inline-flex items-center bg-white/5 backdrop-blur-sm text-white/90 px-6 py-3 rounded-full text-sm font-medium tracking-wider border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
               <span className='text-orange-600'> ZENITECH</span><span className='text-blue-600'> SOLUTIONS</span>
              </span>
            </div>
          </div>

          {/* Main heading with staggered animation */}
          <div className="space-y-4 mb-8">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[0.9] tracking-tight transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '0.2s'}}>
              Made by global
            </h1>
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '0.4s'}}>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent leading-[0.9] tracking-tight">
                technology experts
              </span>
            </div>
          </div>

          {/* Description */}
          <p className={`text-white/70 text-lg sm:text-xl font-light max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '0.6s'}}>
            We know how to manage technology globally, delivering modern, scalable solutions that transform your business.
          </p>

          {/* CTA Button with premium styling */}
          <div className={`flex justify-center lg:justify-start mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '0.8s'}}>
            <a href="/contact"><button className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25">
              <span className="relative z-10 flex items-center">
                Contact Us
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button></a>
          </div>

        </div>

        {/* Right: Premium carousel */}
        <div className={`w-full lg:w-[480px] flex-shrink-0 flex justify-center transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{transitionDelay: '0.4s'}}>
          <div className="relative">
            {/* Floating background blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
            
            {/* Main carousel container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              {/* Image carousel */}
              <div className="relative w-full h-full">
                {carouselImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      idx === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : idx === (currentSlide - 1 + carouselImages.length) % carouselImages.length
                        ? 'opacity-0 scale-110'
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Technology ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700"
                      loading="lazy"
                      draggable="false"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide 
                        ? 'w-6 bg-white' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Cont;