import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpg';

const loadingSteps = [
  'Initializing systems...',
  'Loading resources...',
  'Preparing interface...',
  'Connecting services...',
  'Almost ready...',
  'Complete!',
];

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(loadingSteps[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 12;
        let step = 0;
        if (next < 20) step = 0;
        else if (next < 40) step = 1;
        else if (next < 65) step = 2;
        else if (next < 90) step = 3;
        else if (next < 99) step = 4;
        else step = 5;
        setLoadingText(loadingSteps[step]);
        return next > 100 ? 100 : next;
      });
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-950 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Main loading container */}
      <div className="relative z-10 text-center px-8 max-w-md w-full">
        {/* Logo/Brand area */}
        <div className="mb-12 flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-6 shadow-2xl">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img src={Logo} alt="Zenitech Solutions" className="h-full w-full object-cover rounded-full" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Zenitech</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-blue-200 text-lg tracking-widest font-light">INNOVATIVE TECHNOLOGY SOLUTIONS</p>
        </div>

        {/* Loading spinner */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-24 h-24 border-4 border-blue-900 rounded-full"></div>
            {/* Animated ring */}
            <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-blue-500 border-r-blue-400 rounded-full animate-spin"></div>
            {/* Inner glow */}
            <div className="absolute top-2 left-2 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-full blur-sm animate-pulse"></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-blue-200 mb-3 font-mono">
            <span>{loadingText}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-blue-900/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Status text */}
        <p className="text-blue-300 text-sm mt-8 animate-pulse">
          Please wait while we prepare everything for you...
        </p>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-200/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
