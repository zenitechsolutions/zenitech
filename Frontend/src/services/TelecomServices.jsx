import React, { useEffect, useState } from 'react';
import {
  Phone,
  Network,
  Wifi,
  Server,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Clock,
  TrendingUp,
  Mail,
  MapPin,
  Download,
  Play,
  Star,
  Quote,
  Signal,
  Zap,
  Globe,
  Database,
  Cpu,
  Settings
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LenovoLogo from "../assets/Logo/Lenovo logo.png";
import RelianceCommLogo from "../assets/Logo/Reliance.png";
import KrispCallLogo from "../assets/Logo/Krisp Call.png";
import TataTeleLogo from "../assets/Logo/Tata tele.jpeg";
import ServerWala from "../assets/Logo/ServerWala.jpg";
import Telecom1 from "../assets/serviceimg/Telecom1.png";
import Telecom2 from "../assets/serviceimg/Telecom2.png";
import Telecom3 from "../assets/serviceimg/Telecom3.jpeg";
import JioLogo from "../assets/Logo/Jio.jpg";
import StringeeLogo from "../assets/Logo/Stringee.png";

const TelecomServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
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

  const services = [
    {
      icon: <Network size={48} />,
      title: 'Network Infrastructure',
      description: 'Comprehensive network solutions including design, implementation, and maintenance of enterprise-grade telecommunications infrastructure.',
      features: ['Fiber Optics', 'Wireless Networks', 'VoIP Systems', 'Network Monitoring']
    },
    {
      icon: <Phone size={48} />,
      title: 'Unified Communications',
      description: 'Integrated communication solutions that combine voice, video, messaging, and collaboration tools for seamless business operations.',
      features: ['Video Conferencing', 'Team Collaboration', 'Mobile Integration', 'Cloud PBX']
    },
    {
      icon: <Wifi size={48} />,
      title: 'Wireless Solutions',
      description: 'Advanced wireless networking solutions for businesses of all sizes, ensuring reliable connectivity and optimal performance.',
      features: ['Wi-Fi 6', '5G Solutions', 'IoT Connectivity', 'Mesh Networks']
    },
    {
      icon: <Server size={48} />,
      title: 'Data Center Connectivity',
      description: 'High-performance data center solutions with redundant connectivity and carrier-grade infrastructure.',
      features: ['Colocation Services', 'Cloud Connectivity', 'Disaster Recovery', 'Network Redundancy']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Network Uptime', icon: <TrendingUp size={24} /> },
    { number: '100+', label: 'Businesses Served', icon: <Users size={24} /> },
    { number: '24/7', label: 'Support Available', icon: <Clock size={24} /> },
    { number: '5+', label: 'Years Experience', icon: <Award size={24} /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive evaluation of your current telecom infrastructure and business requirements.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Development of a customized telecom strategy aligned with your business objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless deployment of telecom solutions with minimal business disruption.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing maintenance, monitoring, and support to ensure optimal performance.'
    }
  ];

  const tabContent = [
    {
      title: 'Infrastructure Assessment',
      content: 'Our comprehensive telecom assessment identifies current infrastructure capabilities, evaluates network performance, and provides detailed recommendations for improvement. We use industry-leading tools and methodologies to ensure optimal connectivity.',
      image: Telecom1
    },
    {
      title: 'Solution Implementation',
      content: 'Our expert team implements telecom solutions with precision and minimal business disruption. We follow best practices and ensure all systems are properly configured and tested before going live.',
      image: Telecom2
    },
    {
      title: 'Ongoing Support',
      content: '24/7 monitoring and support ensure your telecom systems remain operational. Our team proactively identifies and addresses potential issues before they can impact your business operations.',
      image: Telecom3
    }
  ];

  const features = [
    { icon: <Signal size={20} />, title: 'High-Speed Connectivity', description: 'Enterprise-grade network solutions for optimal performance' },
    { icon: <Zap size={20} />, title: 'Rapid Deployment', description: 'Quick and efficient implementation of telecom solutions' },
    { icon: <Globe size={20} />, title: 'Global Reach', description: 'Worldwide connectivity solutions for distributed organizations' },
    { icon: <Database size={20} />, title: 'Data Management', description: 'Comprehensive data handling and security solutions' },
    { icon: <Cpu size={20} />, title: 'Smart Analytics', description: 'Intelligent network analytics and reporting' },
    { icon: <Settings size={20} />, title: 'Custom Solutions', description: 'Tailored telecom solutions for your specific needs' }
  ];

  const telecomPartners = [
    { name: "RELIANCE JIO", logo: JioLogo },
    { name: "TATA Tele", logo: TataTeleLogo },
    { name: "KrispCall", logo: KrispCallLogo },
    { name: "Reliance Communications", logo: RelianceCommLogo },
    { name: "Stringee", logo: StringeeLogo },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-blue-400"></div>
                <p className="text-blue-200 font-semibold text-lg tracking-wider">
                  TELECOM SOLUTIONS
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Connect Your Business <span className="text-blue-300">Future</span>
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8 max-w-lg">
                Comprehensive telecom solutions to power your business communications with enterprise-grade infrastructure and 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/product-demo"
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center group"
                >
                  <Play className="mr-2 h-5 w-5" /> Request a Demo
                </a>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-blue-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll lg:justify-self-end">
              <div className="relative">
                <img 
                  src={Telecom1}
                  alt="Telecom Infrastructure" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-800 font-semibold">Network Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-blue-600"></div>
              <p className="text-blue-600 font-semibold text-lg">OUR SOLUTIONS</p>
              <div className="w-12 h-1 bg-blue-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Comprehensive Telecom Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Power your business with our advanced telecom solutions designed to provide reliable connectivity and seamless communication.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-100 animate-on-scroll"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors text-blue-600">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-blue-600 shrink-0" size={16} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-blue-600"></div>
              <p className="text-blue-600 font-semibold text-lg">OUR PROCESS</p>
              <div className="w-12 h-1 bg-blue-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              How We Connect Your Business
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-on-scroll group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:bg-blue-700 transition-colors">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Tabs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-blue-600"></div>
                <p className="text-blue-600 font-semibold text-lg">DETAILED APPROACH</p>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Our Comprehensive Telecom Methodology
              </h2>
              
              <div className="space-y-4 mb-8">
                {tabContent.map((tab, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeTab === index 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'bg-white hover:bg-blue-50 text-gray-800'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <h3 className="font-semibold text-lg">{tab.title}</h3>
                  </button>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {tabContent[activeTab].content}
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <img 
                src={tabContent[activeTab].image} 
                alt={tabContent[activeTab].title}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-blue-600"></div>
              <p className="text-blue-600 font-semibold text-lg">KEY FEATURES</p>
              <div className="w-12 h-1 bg-blue-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Advanced Telecom Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-gray-100 animate-on-scroll"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telecom Partners Carousel */}
      <section className="py-12 bg-gradient-to-r from-sky-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Telecom & Technology Partners</h2>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              480: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 }
            }}
            className="py-6"
          >
            {telecomPartners.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center bg-white rounded-full shadow p-4 hover:shadow-lg transition-all border-4 border-sky-100 hover:border-blue-400 w-36 h-36 justify-center mx-auto">
                  <img src={item.logo} alt={item.name + ' logo'} className="max-h-16 max-w-full object-contain mb-2 rounded-full" />
                  <span className="text-sm font-medium text-blue-900 text-center mt-2">{item.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business Communications?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today to discuss how our telecom solutions can help your business stay connected and competitive.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us</p>
                    <p className="text-blue-200">+91 98765 43210</p>
                    <p className="text-blue-200">+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <p className="text-blue-200">info@zenitech.com</p>
                    <p className="text-blue-200">support@zenitech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Our Locations</p>
                    <p className="text-blue-200 font-medium">Bangalore Office</p>
                    <p className="text-blue-200 mb-2">
                      Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout, Bangalore - 560 045, India
                    </p>
                    <p className="text-blue-200 font-medium">Kolkata Office</p>
                    <p className="text-blue-200">
                      Sunny Seasons, 15/1C, Kamalgazi, P.O. Narendrapur, Kolkata, West Bengal - 700 103, India
                    </p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleContactClick}
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center group cursor-pointer mt-8"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right side - Decorative card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl animate-on-scroll hidden lg:block">
              <h3 className="text-2xl font-bold mb-4">Telecom Solutions</h3>
              <p className="text-blue-100 text-lg">
                Empowering your business with cutting-edge telecom solutions. From network infrastructure to unified communications — we've got you covered.
              </p>
              <div className="mt-6">
                <ul className="list-disc list-inside text-blue-200 space-y-2">
                  <li>24/7 Network Monitoring</li>
                  <li>Advanced Connectivity Solutions</li>
                  <li>Unified Communications</li>
                  <li>Custom Telecom Consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default TelecomServices;
