import React, { useEffect, useState } from 'react';
import {
  Shield,
  Lock,
  AlertTriangle,
  Server,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Download,
  Play,
  Star,
  Quote,
  Eye,
  Zap,
  Globe,
  Database,
  Cpu,
  Settings
} from 'lucide-react';
import Cybersecurity2 from "../assets/serviceimg/Cybersecurity2.png";
import Cybersecurity3 from "../assets/serviceimg/Cybersecurity3.png";
import Cyversecurity from "../assets/serviceimg/Cyversecurity.jpeg";
import Fortinet from "../assets/Logo/Fortinet.jpg";
import Sophos from "../assets/Logo/Sophos.jpg";
import SonicWall from "../assets/Logo/SonicWall.jpg";
import Checkpoint from "../assets/Logo/Checkpoint.jpg";
import Kaspersky from "../assets/Logo/Kaspersky.jpg";
import Symantec from "../assets/Logo/Symantec.jpg";
import Cloudflare from "../assets/Logo/Cloudflare.jpg";
import Bitdefender from "../assets/Logo/Bitdefender.jpg";
import Safetica from "../assets/Logo/Safetic.jpg";
import Acronis from "../assets/Logo/Acronis.jpg";
import Seqrite from "../assets/Logo/Seqrite.jpg";
import PaloAlto from "../assets/Logo/Palo-Alto-Logo.jpg";
import NinjaOne from "../assets/Logo/Nnjaone.logo.png";
import OpenText from "../assets/Logo/Opentext.png";
import WatchGuard from "../assets/Logo/WatchGuard.png";
import Netwrix from "../assets/Logo/Netwritx.png";
import GTB from "../assets/Logo/GTB logo.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const EnhancedCybersecurity = () => {
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
      icon: <Shield size={48} className="text-sky-500" />,
      title: 'Network Security',
      description: 'Comprehensive protection for your network infrastructure against unauthorized access and cyber threats.',
      features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Monitoring']
    },
    {
      icon: <Lock size={48} className="text-blue-500" />,
      title: 'Data Protection',
      description: 'Advanced encryption and security measures to safeguard your sensitive business data and customer information.',
      features: ['Data Encryption', 'Backup Solutions', 'Access Control', 'Data Loss Prevention']
    },
    {
      icon: <AlertTriangle size={48} className="text-red-500" />,
      title: 'Threat Detection',
      description: 'Real-time monitoring and advanced threat detection systems to identify and neutralize potential security breaches.',
      features: ['AI-Powered Detection', 'Behavioral Analysis', 'Malware Protection', '24/7 Monitoring']
    },
    {
      icon: <Server size={48} className="text-sky-500" />,
      title: 'Cloud Security',
      description: 'Secure cloud infrastructure and services to protect your cloud-based operations and applications.',
      features: ['Cloud Migration', 'Multi-Cloud Security', 'Container Security', 'Identity Management']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <TrendingUp size={24} className="text-sky-400" /> },
    { number: '100+', label: 'Clients Protected', icon: <Users size={24} className="text-blue-400" /> },
    { number: '24/7', label: 'Security Monitoring', icon: <Clock size={24} className="text-red-400" /> },
    { number: '5+', label: 'Years Experience', icon: <Award size={24} className="text-sky-400" /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive security audit to identify vulnerabilities and risk areas in your current infrastructure.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a customized security strategy tailored to your business needs and compliance requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy advanced security solutions with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Continuous monitoring and proactive threat management to ensure ongoing protection.'
    }
  ];

  const tabContent = [
    {
      title: 'Security Assessment',
      content: 'Our comprehensive security assessment identifies vulnerabilities, evaluates current security measures, and provides detailed recommendations for improvement. We use industry-leading tools and methodologies to ensure nothing is overlooked.',
      image: Cybersecurity2
    },
    {
      title: 'Implementation',
      content: 'Our expert team implements security solutions with precision and minimal business disruption. We follow best practices and ensure all systems are properly configured and tested before going live.',
      image: Cybersecurity3
    },
    {
      title: 'Ongoing Support',
      content: '24/7 monitoring and support ensure your systems remain secure. Our team proactively identifies and addresses potential threats before they can impact your business operations.',
      image: Cyversecurity
    }
  ];

  const features = [
    { icon: <Eye size={20} className="text-sky-500" />, title: 'Advanced Threat Detection', description: 'AI-powered systems detect and respond to threats in real-time' },
    { icon: <Zap size={20} className="text-blue-500" />, title: 'Rapid Response', description: 'Immediate incident response and threat neutralization' },
    { icon: <Globe size={20} className="text-red-500" />, title: 'Global Protection', description: 'Worldwide security coverage for distributed organizations' },
    { icon: <Database size={20} className="text-sky-500" />, title: 'Data Integrity', description: 'Comprehensive data protection and backup solutions' },
    { icon: <Cpu size={20} className="text-blue-500" />, title: 'Smart Analytics', description: 'Intelligent security analytics and reporting' },
    { icon: <Settings size={20} className="text-red-500" />, title: 'Custom Solutions', description: 'Tailored security solutions for your specific needs' }
  ];

  const cybersecurityPartners = [
    { name: "Fortinet", logo: Fortinet },
    { name: "Sophos", logo: Sophos },
    { name: "SonicWall", logo: SonicWall },
    { name: "Checkpoint", logo: Checkpoint },
    { name: "Kaspersky", logo: Kaspersky },
    { name: "Symantec", logo: Symantec },
    { name: "Cloudflare", logo: Cloudflare },
    { name: "Bitdefender", logo: Bitdefender },
    { name: "Safetica", logo: Safetica },
    { name: "Acronis", logo: Acronis },
    { name: "Seqrite", logo: Seqrite },
    { name: "Palo Alto", logo: PaloAlto },
    { name: "NinjaOne", logo: NinjaOne },
    { name: "OpenText", logo: OpenText },
    { name: "WatchGuard", logo: WatchGuard },
    { name: "Netwrix", logo: Netwrix },
    { name: "GTB Technologies", logo: GTB },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-950 via-red-800 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-red-500"></div>
                <p className="text-sky-200 font-semibold text-lg tracking-wider">
                  CYBERSECURITY SOLUTIONS
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Secure Your Digital <span className="text-sky-300">Future</span>
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8 max-w-lg">
                Comprehensive cybersecurity solutions to protect your business from evolving threats and ensure complete data security with 24/7 monitoring and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
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
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-sky-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll lg:justify-self-end">
              <div className="relative">
                <img 
                  src={Cybersecurity2}
                  alt="Cybersecurity Dashboard" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-800 font-semibold">System Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-red-500"></div>
              <p className="text-blue-600 font-semibold text-lg">OUR SOLUTIONS</p>
              <div className="w-12 h-1 bg-red-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Protect your business with our advanced cybersecurity solutions designed to defend against modern threats and ensure business continuity.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-sky-100 animate-on-scroll"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-sky-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-100 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-blue-700 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-red-500 shrink-0" size={16} />
                          <span className="text-sm text-blue-800">{feature}</span>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-red-500"></div>
              <p className="text-blue-600 font-semibold text-lg">OUR PROCESS</p>
              <div className="w-12 h-1 bg-red-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              How We Secure Your Business
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-on-scroll group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-400 via-red-400 to-blue-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-105 group-hover:shadow-lg transition-all">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-red-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{step.title}</h3>
                <p className="text-blue-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Tabs */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-red-500"></div>
                <p className="text-blue-600 font-semibold text-lg">DETAILED APPROACH</p>
              </div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
                Our Comprehensive Security Methodology
              </h2>
              <div className="space-y-4 mb-8">
                {tabContent.map((tab, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeTab === index 
                        ? 'bg-gradient-to-r from-sky-400 to-red-400 text-white shadow-lg' 
                        : 'bg-white hover:bg-sky-50 text-blue-900'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <h3 className="font-semibold text-lg">{tab.title}</h3>
                  </button>
                ))}
              </div>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-blue-800 leading-relaxed mb-6">
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

      {/* Cybersecurity Partners */}
      <section className="py-12 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Cybersecurity Partners</h2>
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
              1024: { slidesPerView: 6, spaceBetween: 24 }
            }}
            className="py-6"
          >
            {cybersecurityPartners.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center bg-white rounded-full shadow p-4 hover:shadow-lg transition-all border-4 border-sky-100 hover:border-red-400">
                  <img src={item.logo} alt={item.name + ' logo'} className="max-h-16 max-w-full object-contain mb-2 rounded-full" />
                  <span className="text-sm font-medium text-blue-900 text-center mt-2">{item.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-red-500"></div>
              <p className="text-blue-600 font-semibold text-lg">KEY FEATURES</p>
              <div className="w-12 h-1 bg-red-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Advanced Security Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-sky-100 animate-on-scroll h-[280px] flex flex-col"
              >
                <div className="bg-gradient-to-br from-sky-100 via-red-50 to-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-blue-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-gradient-to-r from-blue-900 via-sky-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                Reach out to us through any of these channels. We're available to answer your questions 24/7.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us 24/7</p>
                    <p className="text-sky-200">+91 88200 66999</p>
                    <p className="text-sky-200">+91 74390 04545</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <p className="text-sky-200">info@zenitech.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Our Locations</p>
                    <p className="text-sky-200 font-medium">Bangalore Office</p>
                    <p className="text-sky-200 mb-2">
                      Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout, Bangalore - 560 045, India
                    </p>
                    <p className="text-sky-200 font-medium">Kolkata Office</p>
                    <p className="text-sky-200">
                      Sunny Seasons, 15/1C, Kamalgazi, P.O. Narendrapur, Kolkata, West Bengal - 700 103, India
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleContactClick}
                className="bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center group cursor-pointer"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Right side - Decorative card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl animate-on-scroll hidden lg:block">
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-sky-100 text-lg">
                Protecting your digital world with cutting-edge security solutions. From threat detection to compliance — we've got you covered.
              </p>
              <div className="mt-6">
                <ul className="list-disc list-inside text-sky-200 space-y-2">
                  <li>24/7 Security Monitoring</li>
                  <li>Advanced Threat Protection</li>
                  <li>Incident Response Services</li>
                  <li>Tailored Security Consulting</li>
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

export default EnhancedCybersecurity;