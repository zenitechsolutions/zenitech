import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Prenav from './components/Prenav';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Floating from './components/Floating';

// Lazy-loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Partners = lazy(() => import('./pages/Partners'));
const Services = lazy(() => import('./pages/Services'));
const FounderPage = lazy(() => import('./pages/FounderPage'));
const ProductDemo = lazy(() => import('./pages/ProductDemo'));
const Appointment = lazy(() => import('./pages/Appointment'));
const Cybersecurity = lazy(() => import('./services/Cybersecurity'));
const Cloudcomputing = lazy(() => import('./services/Cloudcomputing'));
const Softwaredevelopment = lazy(() => import('./services/Softwaredevelopment'));
const SoftwareLicensing = lazy(() => import('./services/SoftwareLicensing'));
const TelecomServices = lazy(() => import('./services/TelecomServices'));
const ItServices = lazy(() => import('./services/ItServices'));

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Prenav only on medium and larger screens */}
      {/* Page Routes with Suspense for loading */}
      <Suspense fallback={<Loading />}>
      <div className="hidden md:block">
        <Prenav />
      </div>

      {/* Sticky Navbar */}
      <Navbar />

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> {/* Optional alias */}
          <Route path="/about" element={<About />} />
          <Route path="/product-demo" element={<ProductDemo/>}/>
          <Route path="/about/founder-profile" element={<FounderPage/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/services/cybersecurity" element={<Cybersecurity/>}/>
          <Route path="/services/cloud-computing" element={<Cloudcomputing/>}/>
          <Route path="/services/software-development" element={<Softwaredevelopment/>}/>
          <Route path="/services/software-licensing" element={<SoftwareLicensing/>}/>
          <Route path="/services/telecom-services" element={<TelecomServices/>}/>
          <Route path="/services/it-services" element={<ItServices/>}/>
        </Routes>
      
      <Floating />
      <Footer/>
      </Suspense>
    </div>
  );
};

export default App;
