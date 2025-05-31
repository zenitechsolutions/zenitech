import React, { useState, useEffect } from 'react';
import Logo from "../assets/Logo.jpg";

const sliderMessages = [
  'Please wait...',
  'Loading About...',
  'Loading services...',
  'Loading content...',
  'Loading Partners...',

];

const Loading = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderMessages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-950 to-white flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main loading container */}
      <div className="relative flex flex-col items-center">
        {/* Welcome message */}
        <div className="mb-6 text-2xl font-bold text-center">
          <span className="text-white">Welcome to </span>
          <span className="text-orange-500">Zenitech <span className="text-blue-500">Solutions</span></span>
        </div>
        {/* Outer rotating ring */}
        <div className="relative w-36 h-36 mb-8">
          <div className="absolute inset-0 border-4 border-transparent border-t-orange-400 border-r-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-b-blue-300 border-l-orange-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>

          {/* Circular Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white border-4 border-orange-300 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
              <img src={Logo} alt="Company Logo" className="w-16 h-16 object-contain rounded-full" />
            </div>
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex space-x-2 mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.4s'
              }}
            />
          ))}
        </div>

        {/* Loading text with typing effect */}
        <div className="text-white text-xl font-semibold tracking-wider">
          <span className="inline-block animate-pulse">Retrieving Content</span>
          <span className="inline-block animate-ping ml-1">...</span>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-slate-200 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 rounded-full animate-pulse transform origin-left">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Loading slider */}
        <div className="mt-8 h-8 flex items-center justify-center w-64 relative">
          {sliderMessages.map((msg, idx) => (
            <span
              key={msg}
              className={`absolute left-0 right-0 text-center text-base font-medium transition-opacity duration-500 ${sliderIndex === idx ? 'opacity-100 text-white' : 'opacity-0 text-white'}`}
            >
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-orange-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-orange-300/40 rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-10 w-5 h-5 bg-blue-400/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;
