import React from 'react';
import Hero from "../components/Hero.jsx";
import AbtSection from '../components/AbtSection.jsx';
import ServSection from '../components/ServSection.jsx';
import CntSection from '../components/CntSection.jsx';
import PartSection from '../components/PartSection.jsx';
import Cont from '../components/Cont.jsx';
import Clients from '../components/Clients.jsx';
import FAQ from '../components/FAQ.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: 'forwards' }}>
        <AbtSection />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: 'forwards' }}>
        <ServSection />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: 'forwards' }}>
        <CntSection />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: 'forwards' }}>
        <PartSection/>
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "1.0s", animationFillMode: 'forwards' }}>
        <Cont />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "1.2s", animationFillMode: 'forwards' }}>
        <Clients />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "1.4s", animationFillMode: 'forwards' }}>
        <FAQ/>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;
