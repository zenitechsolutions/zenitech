import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronRight, ChevronLeft, Sparkles, Zap, ArrowRight, Play, Shield, Cpu, Globe } from "lucide-react";

// Import local images
import Pic1 from "../assets/BgPic/Pic1.jpg";
import Pic2 from "../assets/BgPic/Pic2.jpeg";
import Pic3 from "../assets/BgPic/pic3.jpeg";
import Pic4 from "../assets/BgPic/pic4.jpeg";
import Pic8 from "../assets/BgPic/pic8.jpeg";

const carouselImages = [Pic1, Pic2, Pic3, Pic4, Pic8];

const FloatingParticle = ({ delay, duration, x, y }) => (
  <div 
    className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full opacity-60"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animation: `float ${duration}s infinite ease-in-out`,
      animationDelay: `${delay}s`
    }}
  />
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const timeoutRef = useRef(null);
  const carouselRef = useRef(null);
  const heroRef = useRef(null);

  // Generate particles for background animation
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      x: Math.random() * 100,
      y: Math.random() * 100
    })), []
  );

  const preloadAdjacentImages = useCallback(() => {
    const prevIdx = currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1;
    const nextIdx = (currentSlide + 1) % carouselImages.length;
    [prevIdx, nextIdx].forEach((idx) => {
      const img = new Image();
      img.src = carouselImages[idx];
    });
  }, [currentSlide]);

  useEffect(() => {
    preloadAdjacentImages();
    setIsLoaded(true);
  }, [currentSlide, preloadAdjacentImages]);

  useEffect(() => {
    if (isAutoPlaying) startAutoSlide();
    return () => stopAutoSlide();
  }, [currentSlide, isAutoPlaying]);

  // Mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    timeoutRef.current = setTimeout(() => {
      goToNextSlide();
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevSlide();
      else if (e.key === "ArrowRight") goToNextSlide();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNextSlide();
      else goToPrevSlide();
    }
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  const getSlideClasses = (index) => {
    if (index === currentSlide) return "carousel-slide active";
    return "carousel-slide";
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-black overflow-hidden pt-16 md:pt-20 lg:pt-24"
      style={{ height: 'calc(100vh - 4rem)' }}
      aria-label="ZeniTech Solutions Hero"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Dynamic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10 z-0"
        style={{
          background: `
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px),
            linear-gradient(0deg, rgba(251,146,60,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
        }}
      />

      {/* Background Carousel with Advanced Transitions */}
      <div
        className="absolute inset-0 w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured images"
      >
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={getSlideClasses(index)}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={image}
              alt={`Technology workspace ${index + 1}`}
              className="w-full h-full object-cover scale-105"
              loading={index <= 1 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-orange-900/20" />
          </div>
        ))}
        
        {/* Scan Line Effect */}
        <div className="scanline absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />
      </div>

      {/* Main Content with Advanced Layout */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4 sm:px-6 lg:px-8">
        
        {/* Floating Status Indicators - Responsive positioning */}
        <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 space-y-2 sm:space-y-4 hidden md:block">
          <div className="glass-card flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-xs sm:text-sm font-medium">System Online</span>
          </div>
          <div className="glass-card flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-white/80 text-xs sm:text-sm font-medium">Secure</span>
          </div>
        </div>

        {/* Performance Metrics - Responsive positioning */}
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 space-y-2 sm:space-y-4 hidden md:block">
          <div className="glass-card flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2">
            <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 animate-spin-slow" />
            <span className="text-white/80 text-xs sm:text-sm font-medium">AI Powered</span>
          </div>
          <div className="glass-card flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
            <span className="text-white/80 text-xs sm:text-sm font-medium">Global Scale</span>
          </div>
        </div>

        {/* Enhanced Welcome Badge - Responsive */}
        <div className="premium-badge mb-4 sm:mb-6 lg:mb-8 animate-float-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 sm:gap-3">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 animate-spin-slow" />
            <span className="text-white font-bold tracking-wider text-xs sm:text-sm">
              WELCOME TO THE FUTURE
            </span>
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-full blur-sm -z-10" />
        </div>

        {/* Hero Title with Advanced Typography - Fully responsive */}
        <h1 className="hero-title mb-4 sm:mb-6">
          <span className="block overflow-hidden">
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Elevate, Secure
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Innovate & Transform
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Your Business with
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <span className="text-orange-500/90">Zenitech</span> <span className="text-blue-600/80">Solutions</span>
            </span>
          </span>
        </h1>

        {/* Enhanced Subtitle - Responsive */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed animate-fade-in-up px-2" 
           style={{ animationDelay: '0.6s' }}>
          Delivering cutting-edge technology solutions with 
          <span className="text-blue-400 font-semibold"> Advanced Intelligence</span> and 
          <span className="text-orange-400 font-semibold"> enterprise-grade security</span>
        </p>

        {/* Premium CTA Buttons - Responsive stack */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center animate-fade-in-up w-full max-w-4xl px-4" 
             style={{ animationDelay: '0.8s' }}>
              <a href="/contact">
          <button className="premium-btn primary group w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-2">
              
              Get Started
              
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          </a>
          
          <a href="/product-demo">
          <button className="premium-btn secondary group w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-2">
              
              <Play className="w-4 h-4" /> Watch Demo
             
              
            </span>
          </button>
          </a>
          
          <a href="/appointment">
          <button  className="premium-btn tertiary w-full sm:w-auto">
            <span className="relative z-10">
              Schedule Consultation
      
            </span>
          </button>
          </a>
        </div>

        {/* Trust Indicators - Responsive */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-8 sm:mt-12 text-white/60 text-xs sm:text-sm animate-fade-in-up" 
             style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Enterprise Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-400" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Enhanced Carousel Controls - Responsive */}
      <div className="absolute inset-0 flex items-center justify-between z-20 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-all duration-500 pointer-events-none group">
        <button
          className="carousel-arrow left"
          onClick={() => {
            goToPrevSlide();
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 3000);
          }}
          aria-label="Previous slide"
          style={{ pointerEvents: 'auto' }}
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
        <button
          className="carousel-arrow right"
          onClick={() => {
            goToNextSlide();
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 3000);
          }}
          aria-label="Next slide"
          style={{ pointerEvents: 'auto' }}
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Enhanced Progress Indicators - Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4 z-20">
        <div className="flex gap-1 sm:gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              className={`progress-dot ${index === currentSlide ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
              style={{ pointerEvents: 'auto' }}
            />
          ))}
        </div>
        <div className="text-white/40 text-xs sm:text-sm font-mono ml-2 sm:ml-4 hidden sm:block">
          {String(currentSlide + 1).padStart(2, '0')} / {String(carouselImages.length).padStart(2, '0')}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .carousel-slide.active {
          opacity: 1;
          z-index: 1;
        }

        .carousel-slide img {
          transition: transform 20s ease-out;
        }

        .carousel-slide.active img {
          transform: scale(1);
        }

        .scanline {
          animation: scanline 3s infinite linear;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .premium-badge {
          position: relative;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 8px 20px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .hero-title {
          font-size: clamp(1.75rem, 6vw, 6rem);
          font-weight: 800;
          line-height: 0.9;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #f59e0b);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease-in-out infinite;
        }

        .premium-btn {
          position: relative;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          min-width: 140px;
          pointer-events: auto;
        }

        .premium-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .premium-btn:hover:before {
          left: 100%;
        }

        .premium-btn.primary {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .premium-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
        }

        .premium-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .premium-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .premium-btn.tertiary {
          background: transparent;
          color: white;
          border: 1px solid rgba(251, 146, 60, 0.5);
        }

        .premium-btn.tertiary:hover {
          background: rgba(251, 146, 60, 0.1);
          border-color: rgba(251, 146, 60, 0.8);
          transform: translateY(-2px);
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .carousel-arrow.left {
          left: 1rem;
        }

        .carousel-arrow.right {
          right: 1rem;
        }

        .carousel-arrow:hover {
          background: rgba(59, 130, 246, 0.6);
          transform: translateY(-50%) scale(1.1);
        }

        .progress-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .progress-dot.active {
          background: #3b82f6;
          transform: scale(1.2);
        }

        .progress-dot.active:after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-float-in {
          animation: float-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* Small screens (mobile) */
        @media (max-width: 640px) {
          .premium-badge {
            padding: 6px 16px;
          }
          
          .premium-btn {
            min-width: 120px;
            padding: 12px 20px;
            font-size: 0.85rem;
          }
          
          .carousel-arrow {
            width: 40px;
            height: 40px;
          }
          
          .carousel-arrow.left {
            left: 0.75rem;
          }
          
          .carousel-arrow.right {
            right: 0.75rem;
          }
          
          .progress-dot {
            width: 8px;
            height: 8px;
          }
        }

        /* Medium screens (tablet) */
        @media (min-width: 641px) and (max-width: 1024px) {
          .premium-btn {
            min-width: 160px;
            padding: 14px 28px;
            font-size: 1rem;
          }
          
          .carousel-arrow {
            width: 48px;
            height: 48px;
          }
        }

        /* Large screens (desktop) */
        @media (min-width: 1025px) {
          .premium-badge {
            padding: 12px 32px;
          }
          
          .premium-btn {
            min-width: 200px;
            padding: 16px 32px;
            font-size: 1.1rem;
          }
          
          .carousel-arrow {
            width: 56px;
            height: 56px;
          }
          
          .carousel-arrow.left {
            left: 2rem;
          }
          
          .carousel-arrow.right {
            right: 2rem;
          }
          
          .progress-dot {
            width: 12px;
            height: 12px;
          }
        }

        /* Very small screens (portrait phones) */
        @media (max-width: 375px) {
          .hero-title {
            font-size: clamp(1.5rem, 8vw, 2.5rem);
          }
          
          .premium-btn {
            min-width: 100px;
            padding: 10px 16px;
            font-size: 0.8rem;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-title {
            font-size: clamp(1.25rem, 4vw, 2rem);
          }
          
          .premium-badge {
            margin-bottom: 1rem;
          }
        }

        .text-orange-600 {
          color: #ea580c !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;