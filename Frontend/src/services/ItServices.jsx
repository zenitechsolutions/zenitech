import React, { useEffect, useState } from 'react';
import {
  Server,
  Network,
  Cloud,
  Database,
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
  CheckCircle,
  Settings,
  Shield,
  Layers,
  Monitor,
  Cpu,
  Wifi,
  HardDrive
} from 'lucide-react';
import ITservices1 from "../assets/serviceimg/ITservices1.jpeg";
import ITservices2 from "../assets/serviceimg/ITservices2.jpeg";
import ITservices3 from "../assets/serviceimg/ITservices3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LenovoLogo from "../assets/Logo/Lenovo logo.png";
import HpLogo from "../assets/Logo/Hp.jpg";
import DellLogo from "../assets/Logo/Dell.jpg";
import SynologyLogo from "../assets/Logo/Synology.jpg";
import VmwareLogo from "../assets/Logo/VMware.jpeg";
import VeeamLogo from "../assets/Logo/Veeam.jpg";
import VeritasLogo from "../assets/Logo/Veritas.jpg";

const ItServices = () => {
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
      icon: <Server size={48} />,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure management to ensure optimal performance and reliability.',
      features: ['Server Management', 'Network Infrastructure', 'Data Center Services', 'Cloud Solutions']
    },
    {
      icon: <Network size={48} />,
      title: 'Network Solutions',
      description: 'Advanced networking solutions to keep your business connected and secure.',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting']
    },
    {
      icon: <Cloud size={48} />,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions to drive your business forward with flexibility and efficiency.',
      features: ['Cloud Migration', 'Hybrid Cloud', 'Cloud Security', 'Cost Optimization']
    },
    {
      icon: <Database size={48} />,
      title: 'Data Management',
      description: 'Comprehensive data management solutions to protect and optimize your business data.',
      features: ['Data Backup', 'Recovery Solutions', 'Storage Management', 'Data Analytics']
    }
  ];

  const stats = [
    { number: '100+', label: 'Infrastructure Projects', icon: <TrendingUp size={24} /> },
    { number: '100+', label: 'Enterprise Clients', icon: <Users size={24} /> },
    { number: '5+', label: 'Years Experience', icon: <Award size={24} /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Clock size={24} /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Thorough evaluation of your current IT infrastructure and business requirements.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Strategic planning and solution design tailored to your business needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless implementation of IT solutions with minimal business disruption.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  const tabContent = [
    {
      title: 'Infrastructure Solutions',
      content: 'Our comprehensive infrastructure solutions ensure your IT systems run efficiently and securely. We provide end-to-end management of your IT infrastructure, from servers to networks.',
      image: ITservices1
    },
    {
      title: 'Cloud Services',
      content: 'Transform your business with our cloud solutions. We help you migrate to the cloud, optimize costs, and ensure security while maintaining high performance.',
      image: ITservices2
    },
    {
      title: '24/7 Support',
      content: 'Round-the-clock IT support to keep your business running smoothly. Our expert team is always available to address any technical issues and provide proactive maintenance.',
      image: ITservices3
    }
  ];

  const features = [
    { icon: <Monitor size={20} />, title: 'Infrastructure Management', description: 'Complete management of your IT infrastructure' },
    { icon: <Wifi size={20} />, title: 'Network Solutions', description: 'Advanced networking and connectivity solutions' },
    { icon: <Cloud size={20} />, title: 'Cloud Services', description: 'Scalable and secure cloud solutions' },
    { icon: <HardDrive size={20} />, title: 'Data Management', description: 'Comprehensive data protection and management' },
    { icon: <Shield size={20} />, title: 'Security First', description: 'Built-in security at every level' },
    { icon: <Cpu size={20} />, title: 'Performance', description: 'Optimized performance and reliability' }
  ];

  const itPartners = [
    { name: "HP", logo: HpLogo },
    { name: "DELL", logo: DellLogo },
    { name: "LENOVO", logo: LenovoLogo },
    { name: "SYNOLOGY", logo: SynologyLogo },
    { name: "Vmware", logo: VmwareLogo },
    { name: "Veeam", logo: VeeamLogo },
    { name: "Veritas", logo: VeritasLogo },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-950 via-cyan-950 to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-orange-600 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-red-900 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-orange-400"></div>
                <p className="text-orange-200 font-semibold text-lg tracking-wider">
                  IT SERVICES
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with <span className="text-cyan-300">IT Excellence</span>
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8 max-w-lg">
                Comprehensive IT services to drive your business forward with cutting-edge technology solutions and expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-orange-500 via-red-600 to-cyan-700 hover:from-orange-600 hover:via-red-700 hover:to-cyan-800 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
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
                    <div className="flex justify-center mb-2 text-cyan-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-orange-100">{stat.number}</div>
                    <div className="text-sm text-orange-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll lg:justify-self-end">
              <div className="relative">
                <img 
                  src={ITservices1}
                  alt="IT Services" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-orange-900 font-semibold">System Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-r from-blue-50 via-cyan-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-orange-400"></div>
              <p className="text-orange-600 font-semibold text-lg">OUR SERVICES</p>
              <div className="w-12 h-1 bg-orange-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-cyan-700 max-w-3xl mx-auto">
              From infrastructure management to cloud solutions, we provide end-to-end IT services to support your business growth.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-cyan-100 animate-on-scroll"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-orange-100 via-cyan-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors text-cyan-700">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-cyan-700 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-orange-500 shrink-0" size={16} />
                          <span className="text-sm text-orange-800">{feature}</span>
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
              <div className="w-12 h-1 bg-cyan-400"></div>
              <p className="text-cyan-600 font-semibold text-lg">OUR PROCESS</p>
              <div className="w-12 h-1 bg-cyan-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-6">
              Our Service Methodology
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-on-scroll group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-red-600 to-cyan-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-105 group-hover:shadow-lg transition-all">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-cyan-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-4">{step.title}</h3>
                <p className="text-cyan-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Tabs */}
      <section className="py-24 bg-gradient-to-r from-blue-50 via-cyan-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-orange-400"></div>
                <p className="text-orange-600 font-semibold text-lg">DETAILED APPROACH</p>
              </div>
              <h2 className="text-4xl font-bold text-blue-950 mb-8">
                Our IT Excellence
              </h2>
              <div className="space-y-4 mb-8">
                {tabContent.map((tab, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeTab === index 
                        ? 'bg-gradient-to-r from-orange-400 to-cyan-700 text-white shadow-lg' 
                        : 'bg-white hover:bg-orange-50 text-blue-950'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <h3 className="font-semibold text-lg">{tab.title}</h3>
                  </button>
                ))}
              </div>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-cyan-800 leading-relaxed mb-6">
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

      {/* IT Partners */}
      <section className="py-12 bg-gradient-to-r from-white to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">Our IT & Technology Partners</h2>
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
            {itPartners.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center bg-white rounded-full shadow p-4 hover:shadow-lg transition-all border-4 border-orange-100 hover:border-orange-400 w-36 h-36 justify-center mx-auto">
                  <img src={item.logo} alt={item.name + ' logo'} className="max-h-16 max-w-full object-contain mb-2 rounded-full" />
                  <span className="text-sm font-medium text-blue-950 text-center mt-2">{item.name}</span>
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
              <div className="w-12 h-1 bg-orange-400"></div>
              <p className="text-orange-600 font-semibold text-lg">KEY FEATURES</p>
              <div className="w-12 h-1 bg-orange-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Why Choose Our IT Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-orange-100 animate-on-scroll"
              >
                <div className="bg-gradient-to-br from-orange-50 via-red-100 to-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors text-orange-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-cyan-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-gradient-to-r from-blue-950 via-orange-700 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Reach out to us through any of these channels. We're available to answer your questions 24/7.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-700 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us 24/7</p>
                    <p className="text-orange-200">+91 88200 66999</p>
                    <p className="text-orange-200">+91 74390 04545</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-700 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <p className="text-orange-200">info@zenitech.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-700 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Our Locations</p>
                    <p className="text-orange-200 font-medium">Bangalore Office</p>
                    <p className="text-orange-200 mb-2">
                      Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout, Bangalore - 560 045, India
                    </p>
                    <p className="text-orange-200 font-medium">Kolkata Office</p>
                    <p className="text-orange-200">
                      Sunny Seasons, 15/1C, Kamalgazi, P.O. Narendrapur, Kolkata, West Bengal - 700 103, India
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleContactClick}
                className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center group cursor-pointer"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Right side - Decorative card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl animate-on-scroll hidden lg:block">
              <h3 className="text-2xl font-bold mb-4">IT Services</h3>
              <p className="text-orange-100 text-lg">
                Empowering your business with cutting-edge IT solutions. From infrastructure to cloud — we've got you covered.
              </p>
              <div className="mt-6">
                <ul className="list-disc list-inside text-orange-200 space-y-2">
                  <li>Infrastructure Management</li>
                  <li>Network Solutions</li>
                  <li>Cloud Services</li>
                  <li>Data Management</li>
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

export default ItServices;
