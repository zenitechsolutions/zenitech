import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Pic1 from "../assets/BgPic/Pic1.jpg";
import Pic2 from "../assets/BgPic/Pic2.jpeg"; 
import Pic3 from "../assets/BgPic/pic3.jpeg";
import Pic4 from "../assets/BgPic/pic4.jpeg";
import Pic5 from "../assets/BgPic/pic8.jpeg";
import Pic6 from "../assets/BgPic/Pic10.jpeg";
import vid1 from "../assets/vids/Vid1.mp4";
import bgimg from "../assets/heroimg/Apex.jpg";

const carouselImages = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6];

const taglineLines = [
  "Our success is measured by your success.",
  "That’s why we work side-by-side with your teams,",
  "understanding your priorities and building solutions",
  " that fit seamlessly into your workflows.",
  "The result? Technology that feels intuitive, ",
  "adapts effortlessly, and delivers measurable business value.",
];

const FloatingParticle = React.memo(({ delay, duration, x, y }) => (
  <div
    style={{
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%)",
      opacity: 0.18,
      filter: "blur(1.5px)",
      animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      pointerEvents: "none",
      zIndex: 1,
    }}
  />
));

const VideoTypewriterSection = React.memo(() => {
  const [displayedLines, setDisplayedLines] = useState([""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= taglineLines.length) return;
    const timer = setTimeout(() => {
      if (charIdx < taglineLines[lineIdx].length) {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[lineIdx] = taglineLines[lineIdx].slice(0, charIdx + 1);
          return newLines;
        });
        setCharIdx(c => c + 1);
      } else {
        setDisplayedLines(prev => [...prev, ""]);
        setLineIdx(l => l + 1);
        setCharIdx(0);
      }
    }, charIdx < taglineLines[lineIdx]?.length ? 20 : 500);
    return () => clearTimeout(timer);
  }, [lineIdx, charIdx]);

  return (
    <section
      className="w-full min-h-[40vh] relative overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <video
          src={vid1}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ zIndex: 1 }}
        />
        <div className="md:hidden absolute inset-0 bg-black/30 z-10" />
      </div>
      <div className="relative z-20 flex flex-col items-end justify-end h-full px-4 py-8">
        <div className="text-white text-right text-base md:text-lg lg:text-xl font-normal leading-snug drop-shadow-lg mb-6 font-mono min-h-[8em]">
          {displayedLines.map((line, idx) => (
            <span key={idx}>{line}<br /></span>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto items-center md:items-end">
          <a href='/services'>
            <button className="w-full md:w-auto px-6 py-2 border-2 border-white text-white font-semibold bg-transparent hover:bg-white hover:text-orange-600 transition duration-300">
              Our Services
            </button>
          </a>
          <a href='/product-demo'>
            <button className="w-full md:w-auto px-6 py-2 border-2 border-white text-white font-semibold bg-transparent hover:bg-white hover:text-blue-600 transition duration-300">
              Book a Demo
            </button>
          </a>
          <a href='/appointment'>
            <button className="w-full md:w-auto px-6 py-2 border-2 border-white text-white font-semibold bg-transparent hover:bg-white hover:text-gray-900 transition duration-300">
              Book an Appointment
            </button>
          </a>
        </div>
      </div>
    </section>
  );
});

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);
  const heroRef = useRef(null);

  // Reduce particles on mobile
  const particles = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    return Array.from({ length: isMobile ? 8 : 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
  }, []);

  // Throttle mouse parallax effect
  useEffect(() => {
    let frameId = null;
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      });
    };
    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => {
        hero.removeEventListener('mousemove', handleMouseMove);
        if (frameId) cancelAnimationFrame(frameId);
      };
    }
  }, []);

  // Preload only the next image
  useEffect(() => {
    const nextIdx = (currentSlide + 1) % carouselImages.length;
    const img = new window.Image();
    img.src = carouselImages[nextIdx];
  }, [currentSlide]);

  // Carousel auto play
  useEffect(() => {
    if (!isAutoPlaying) return;
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentSlide, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setCurrentSlide(prev => prev === 0 ? carouselImages.length - 1 : prev - 1);
      else if (e.key === "ArrowRight") setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch navigation
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrentSlide(prev => (prev + 1) % carouselImages.length);
      else setCurrentSlide(prev => prev === 0 ? carouselImages.length - 1 : prev - 1);
    }
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  const getSlideClasses = (index) =>
    index === currentSlide ? "carousel-slide active" : "carousel-slide";

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full min-h-screen bg-black overflow-hidden pt-4"
        style={{ height: 'calc(100vh - 4rem)' }}
        aria-label="ZeniTech Solutions Hero"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {particles.map((particle) => (
            <FloatingParticle key={particle.id} {...particle} />
          ))}
        </div>

        {/* Dynamic Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-10 z-10 pointer-events-none"
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
          className="absolute inset-0 w-full h-full z-10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured images"
          style={{ position: 'relative' }}
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
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                style={{ height: '100%', width: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-orange-900/20" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4 sm:px-6 lg:px-8">
          <div className="pt-4 px-4 md:px-12 max-w-6xl mx-auto relative z-10">
            <h1
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-6 text-center opacity-0 scale-90 animate-pop-in"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 mr-2">Zenitech</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700">Solutions</span>
            </h1>
            <div className="w-full md:w-4/5 pb-2 md:pb-1 mx-auto flex justify-center">
              <p
                className="text-xl md:text-2xl text-white leading-relaxed text-center font-semibold drop-shadow-md max-w-4xl opacity-0 scale-90 animate-pop-in"
                style={{ fontFamily: 'Inter, Arial, sans-serif', animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                Your innovation partner for future-ready technology and consulting.<br/>
              </p>
            </div>
            <div className="w-full md:w-4/5 mx-auto flex justify-center">
              <p
                className="text-lg md:text-xl text-white leading-relaxed text-center font-normal drop-shadow-md max-w-4xl opacity-0 scale-90 animate-pop-in"
                style={{ fontFamily: 'Inter, Arial, sans-serif', animationDelay: '0.5s', animationFillMode: 'forwards' }}
              >
                Empower your business with our expertise in <span className="text-orange-400 font-extrabold" style={{ fontWeight: 800 }}>IT Services, Cloud, Cyber Security, Software Licensing, Software Development & Telecom Services.</span>
                <br/>
                <span>We are committed to delivering innovative, secure, and scalable solutions tailored to meet the evolving needs of your enterprise.</span>
              </p>
            </div>
            {/* Boxed Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a href="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-semibold bg-transparent rounded-lg hover:bg-white hover:text-black transition-all duration-300">Get Started</button>
              </a>
              <a href="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-semibold bg-transparent rounded-lg hover:bg-white hover:text-black transition-all duration-300">About Us</button>
              </a>
              <a href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-semibold bg-transparent rounded-lg hover:bg-white hover:text-black transition-all duration-300">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <VideoTypewriterSection />
    </>
  );
};

export default React.memo(Hero);