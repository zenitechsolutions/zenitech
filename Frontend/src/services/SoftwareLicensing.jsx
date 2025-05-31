import React, { useEffect, useState } from 'react';
import {
  Key,
  Shield,
  FileCheck,
  Scale,
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
  Database,
  Lock,
  Layers,
  FileText,
  ClipboardCheck,
  AlertCircle
} from 'lucide-react';
import SoftwareLiscense1 from "../assets/serviceimg/SoftwareLiscense1.jpeg";
import SoftwareLiscense3 from "../assets/serviceimg/SoftwareLiscense3.jpeg";
import SoftwareLiscense from "../assets/serviceimg/SoftwareLiscense.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MicrosoftLogo from "../assets/Logo/Microsoft.jpg";
import AnyDeskLogo from "../assets/Logo/AnyDesk.jpg";
import AdobeLogo from "../assets/Logo/Adobe.jpg";
import VmwareLogo from "../assets/Logo/VMware.jpeg";
import VeeamLogo from "../assets/Logo/Veeam.jpg";
import EverestIMSLogo from "../assets/Logo/Eversetims.jpeg";
import GreytHrLogo from "../assets/Logo/GreytHr.jpg";

const SoftwareLicensing = () => {
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
      icon: <Key size={48} className="text-cyan-400" />,
      title: 'License Management',
      description: 'Comprehensive software license management solutions to optimize your software investments.',
      features: ['License Tracking', 'Compliance Monitoring', 'Usage Analytics', 'Cost Optimization']
    },
    {
      icon: <FileCheck size={48} className="text-green-500" />,
      title: 'Compliance Services',
      description: 'Ensure your organization stays compliant with software licensing agreements and regulations.',
      features: ['Audit Preparation', 'Compliance Reporting', 'Risk Assessment', 'Policy Development']
    },
    {
      icon: <Scale size={48} className="text-cyan-600" />,
      title: 'License Optimization',
      description: 'Strategic license optimization to maximize value and minimize costs.',
      features: ['Usage Analysis', 'Cost Reduction', 'License Pooling', 'Renewal Planning']
    },
    {
      icon: <Shield size={48} className="text-green-700" />,
      title: 'Software Asset Management',
      description: 'End-to-end software asset management to maintain control over your software portfolio.',
      features: ['Inventory Management', 'Lifecycle Management', 'Vendor Management', 'Cost Allocation']
    }
  ];

  const stats = [
    { number: '100+', label: 'Licenses Managed', icon: <TrendingUp size={24} className="text-cyan-400" /> },
    { number: '100+', label: 'Enterprise Clients', icon: <Users size={24} className="text-green-500" /> },
    { number: '5+', label: 'Years Experience', icon: <Award size={24} className="text-cyan-600" /> },
    { number: '99%', label: 'Compliance Rate', icon: <Clock size={24} className="text-green-700" /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive evaluation of your current software licensing situation and requirements.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Development of a tailored licensing strategy aligned with your business goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless implementation of licensing solutions with minimal business disruption.'
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Continuous monitoring and optimization of your software licensing portfolio.'
    }
  ];

  const tabContent = [
    {
      title: 'License Management',
      content: 'Our comprehensive license management system ensures you have complete visibility and control over your software assets. We help you track, manage, and optimize your software licenses effectively.',
      image: SoftwareLiscense1
    },
    {
      title: 'Compliance Services',
      content: 'Stay compliant with software licensing agreements through our expert compliance services. We help you prepare for audits, maintain compliance, and minimize risks.',
      image: SoftwareLiscense3
    },
    {
      title: 'Ongoing Support',
      content: 'Continuous support and monitoring to ensure your licensing strategy remains effective. Our team is always available to address any licensing concerns and implement optimizations.',
      image: SoftwareLiscense
    }
  ];

  const features = [
    { icon: <Shield size={20} className="text-cyan-400" />, title: 'Compliance First', description: 'Ensure full compliance with licensing agreements' },
    { icon: <FileText size={20} className="text-green-500" />, title: 'Documentation', description: 'Comprehensive license documentation and tracking' },
    { icon: <Settings size={20} className="text-cyan-600" />, title: 'Automated Management', description: 'Streamlined license management processes' },
    { icon: <ClipboardCheck size={20} className="text-green-700" />, title: 'Audit Ready', description: 'Always prepared for software audits' },
    { icon: <AlertCircle size={20} className="text-green-500" />, title: 'Risk Mitigation', description: 'Proactive risk management and compliance' },
    { icon: <Layers size={20} className="text-cyan-400" />, title: 'Cost Control', description: 'Optimize software licensing costs' }
  ];

  const licensingPartners = [
    { name: 'MICROSOFT', logo: MicrosoftLogo },
    { name: 'ANYDESK', logo: AnyDeskLogo },
    { name: 'ADOBE', logo: AdobeLogo },
    { name: 'Vmware', logo: VmwareLogo },
    { name: 'Veeam', logo: VeeamLogo },
    { name: 'EVERESTIMS', logo: EverestIMSLogo },
    { name: 'GREYTHR', logo: GreytHrLogo },
  ];

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-green-600 to-cyan-400 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-green-950 opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-green-400"></div>
                <p className="text-green-200 font-semibold text-lg tracking-wider">
                  SOFTWARE LICENSING
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Optimize Your Software <span className="text-green-300">Licenses</span>
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8 max-w-lg">
                Expert software licensing solutions to ensure compliance, reduce costs, and maximize the value of your software investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
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
                    <div className="text-sm text-green-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll lg:justify-self-end">
              <div className="relative">
                <img 
                  src={SoftwareLiscense1}
                  alt="Software Licensing" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-900 font-semibold">License Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-green-400"></div>
              <p className="text-green-600 font-semibold text-lg">OUR SERVICES</p>
              <div className="w-12 h-1 bg-green-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Comprehensive Licensing Services
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              From license management to compliance, we provide end-to-end solutions to optimize your software licensing strategy.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-green-100 animate-on-scroll"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-green-700 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-green-500 shrink-0" size={16} />
                          <span className="text-sm text-green-800">{feature}</span>
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
              <div className="w-12 h-1 bg-green-400"></div>
              <p className="text-green-600 font-semibold text-lg">OUR PROCESS</p>
              <div className="w-12 h-1 bg-green-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Our Licensing Methodology
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-on-scroll group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-green-400 to-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-105 group-hover:shadow-lg transition-all">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-green-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-4">{step.title}</h3>
                <p className="text-green-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Tabs */}
      <section className="py-24 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-green-400"></div>
                <p className="text-green-600 font-semibold text-lg">DETAILED APPROACH</p>
              </div>
              <h2 className="text-4xl font-bold text-green-900 mb-8">
                Our Licensing Excellence
              </h2>
              <div className="space-y-4 mb-8">
                {tabContent.map((tab, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeTab === index 
                        ? 'bg-gradient-to-r from-cyan-400 to-green-500 text-white shadow-lg' 
                        : 'bg-white hover:bg-green-50 text-green-900'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <h3 className="font-semibold text-lg">{tab.title}</h3>
                  </button>
                ))}
              </div>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-green-800 leading-relaxed mb-6">
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
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-green-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">Our Licensing & Technology Partners</h2>
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
            {licensingPartners.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center bg-white rounded-full shadow p-4 hover:shadow-lg transition-all border-4 border-green-100 hover:border-green-400">
                  <img src={item.logo} alt={item.name + ' logo'} className="max-h-16 max-w-full object-contain mb-2 rounded-full" />
                  <span className="text-sm font-medium text-green-900 text-center mt-2">{item.name}</span>
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
              <div className="w-12 h-1 bg-green-400"></div>
              <p className="text-green-600 font-semibold text-lg">KEY FEATURES</p>
              <div className="w-12 h-1 bg-green-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Why Choose Our Licensing
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-green-100 animate-on-scroll"
              >
                <div className="bg-gradient-to-br from-cyan-50 via-green-100 to-green-200 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">{feature.title}</h3>
                <p className="text-green-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-gradient-to-r from-cyan-900 via-green-700 to-green-400 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Reach out to us through any of these channels. We're available to answer your questions 24/7.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-green-700 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us 24/7</p>
                    <p className="text-green-200">+91 88200 66999</p>
                    <p className="text-green-200">+91 74390 04545</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-700 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <p className="text-green-200">info@zenitech.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-700 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Our Locations</p>
                    <p className="text-green-200 font-medium">Bangalore Office</p>
                    <p className="text-green-200 mb-2">
                      Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout, Bangalore - 560 045, India
                    </p>
                    <p className="text-green-200 font-medium">Kolkata Office</p>
                    <p className="text-green-200">
                      Sunny Seasons, 15/1C, Kamalgazi, P.O. Narendrapur, Kolkata, West Bengal - 700 103, India
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleContactClick}
                className="bg-white text-green-900 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center group cursor-pointer"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Right side - Decorative card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl animate-on-scroll hidden lg:block">
              <h3 className="text-2xl font-bold mb-4">Software Licensing</h3>
              <p className="text-green-100 text-lg">
                Optimizing your software licensing strategy. From compliance to cost control — we've got you covered.
              </p>
              <div className="mt-6">
                <ul className="list-disc list-inside text-green-200 space-y-2">
                  <li>License Management</li>
                  <li>Compliance Services</li>
                  <li>Cost Optimization</li>
                  <li>Software Asset Management</li>
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

export default SoftwareLicensing;
