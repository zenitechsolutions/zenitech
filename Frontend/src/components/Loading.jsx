import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpg';

const sliderMessages = [
  'Initializing systems...',
  'Loading ...',
  'Preparing Contents...',
  'Connecting Services...',
  'Almost ready...',
];

const Loading = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [logoScale, setLogoScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderMessages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 3;
      });
    }, 150);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const scaleInterval = setInterval(() => {
      setLogoScale((prev) => (prev === 1 ? 1.1 : 1));
    }, 2000);
    return () => clearInterval(scaleInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-blue-800/90 to-blue-950 flex items-center justify-center overflow-hidden">
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-300/40 to-orange-300/40 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Orbiting rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-8 border border-orange-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-16 border border-blue-300/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
        </div>
      </div>

      {/* Main loading container */}
      <div className="relative flex flex-col items-center z-10">
        
        {/* Company branding */}
        <div className="mb-8 text-center">
          <div className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">Zenitech </span>
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">Solutions</span>
          </div>
          <div className="text-blue-200 text-sm tracking-widest font-light">
            INNOVATIVE TECHNOLOGY SOLUTIONS
          </div>
        </div>

        {/* Logo with effects */}
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 border-2 border-transparent border-t-orange-400 border-r-blue-400 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-2 border-transparent border-b-blue-400 border-l-orange-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full animate-pulse"></div>
          <div 
            className="absolute inset-6 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500"
            style={{ transform: `scale(${logoScale})` }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <img src={Logo} alt="Zenitech Solutions" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex space-x-3 mb-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>

        {/* Status text */}
        <div className="text-center mb-6">
          <div className="text-white text-lg font-medium mb-2">
            Preparing Your Experience
          </div>
          <div className="h-6 flex items-center justify-center">
            {sliderMessages.map((msg, idx) => (
              <span
                key={msg}
                className={`absolute text-sm font-light transition-all duration-500 ${
                  sliderIndex === idx 
                    ? 'opacity-100 text-blue-100 translate-y-0' 
                    : 'opacity-0 text-slate-200/70 translate-y-2'
                }`}
              >
                {msg}
              </span>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 h-1 bg-slate-800 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-sky-400 to-orange-400 rounded-full transition-all duration-300 relative"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Progress percent */}
        <div className="mt-3 text-xs text-sky-200 font-mono">
          {Math.floor(Math.min(progress, 100))}%
        </div>
      </div>

      {/* Decorative pings */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/60 rotate-45 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-orange-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-blue-300/60 rotate-45 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-orange-300/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;
