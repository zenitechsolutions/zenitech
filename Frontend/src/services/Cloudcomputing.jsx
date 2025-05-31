import React, { useEffect, useState } from 'react';
import {
  Cloud,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
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
  Cpu,
  Lock
} from 'lucide-react';
import Cloud1 from "../assets/serviceimg/Cloud1.jpg";
import Cloud2 from "../assets/serviceimg/Cloud2.jpg";
import Cloud3 from "../assets/serviceimg/Cloud3.jpg";
import Aws from "../assets/Logo/Aws.jpg";
import Azure from "../assets/Logo/Azure.jpg";
import GoogleCloud from "../assets/Logo/GoogleCloud.jpg";
import Esds from "../assets/Logo/ESDS.jpg";
import Serverwala from "../assets/Logo/ServerWala.jpg";
import Dropbox from "../assets/Logo/Dropbox.jpg";
import OVHcloud from "../assets/Logo/OVHcloud.jpg";

const Cloudcomputing = () => {
  const [activeTab, setActiveTab] = useState(0);

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

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const services = [
    {
      icon: <Cloud size={48} className="text-cyan-400" />,
      title: 'Cloud Migration',
      description: 'Seamless transition of your infrastructure and applications to the cloud with minimal disruption.',
      features: ['Infrastructure Migration', 'Application Migration', 'Data Migration', 'Post-Migration Support']
    },
    {
      icon: <Server size={48} className="text-sky-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud infrastructure solutions tailored to your business needs.',
      features: ['Server Management', 'Load Balancing', 'Auto Scaling', 'Resource Optimization']
    },
    {
      icon: <Database size={48} className="text-blue-400" />,
      title: 'Cloud Storage',
      description: 'Secure and efficient cloud storage solutions for your data with high availability.',
      features: ['Data Backup', 'Disaster Recovery', 'File Storage', 'Object Storage']
    },
    {
      icon: <Globe size={48} className="text-cyan-400" />,
      title: 'Multi-Cloud Solutions',
      description: 'Comprehensive multi-cloud strategies to leverage the best features of different cloud providers.',
      features: ['Cloud Strategy', 'Provider Management', 'Cost Optimization', 'Performance Tuning']
    }
  ];

  const stats = [
    { number: '99.99%', label: 'Uptime SLA', icon: <TrendingUp size={24} className="text-cyan-400" /> },
    { number: '100+', label: 'Cloud Projects', icon: <Users size={24} className="text-sky-400" /> },
    { number: '24/7', label: 'Cloud Support', icon: <Clock size={24} className="text-blue-400" /> },
    { number: '5+', label: 'Years Experience', icon: <Award size={24} className="text-cyan-400" /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate your current infrastructure and identify cloud migration opportunities.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Develop a comprehensive cloud strategy aligned with your business objectives.'
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Execute the migration with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously optimize your cloud infrastructure for performance and cost.'
    }
  ];

  const tabContent = [
    {
      title: 'Cloud Strategy',
      content: 'Our cloud strategy assessment helps identify the best cloud solutions for your business needs. We analyze your current infrastructure, applications, and business goals to create a tailored cloud roadmap.',
      image: Cloud1
    },
    {
      title: 'Migration Process',
      content: 'Our expert team handles the entire migration process, ensuring minimal disruption to your business. We follow industry best practices and maintain strict security protocols throughout the migration.',
      image: Cloud2
    },
    {
      title: 'Ongoing Support',
      content: '24/7 cloud infrastructure monitoring and support ensure optimal performance. Our team proactively manages your cloud resources and addresses any issues before they impact your operations.',
      image: Cloud3
    }
  ];

  const features = [
    { icon: <Shield size={20} className="text-cyan-400" />, title: 'Cloud Security', description: 'Advanced security measures to protect your cloud infrastructure' },
    { icon: <Zap size={20} className="text-sky-400" />, title: 'High Performance', description: 'Optimized cloud resources for maximum performance' },
    { icon: <Settings size={20} className="text-blue-400" />, title: 'Scalability', description: 'Flexible scaling options to meet changing demands' },
    { icon: <Cpu size={20} className="text-cyan-400" />, title: 'Cost Optimization', description: 'Intelligent resource management to reduce costs' },
    { icon: <Lock size={20} className="text-sky-400" />, title: 'Data Protection', description: 'Comprehensive data backup and recovery solutions' },
    { icon: <Globe size={20} className="text-blue-400" />, title: 'Global Reach', description: 'Worldwide cloud infrastructure deployment' }
  ];

  const cloudPartners = [
    { name: "AWS", logo: Aws },
    { name: "Microsoft AZURE", logo: Azure },
    { name: "GOOGLE CLOUD", logo: GoogleCloud },
    { name: "ESDS", logo: Esds },
    { name: "Serverwala", logo: Serverwala },
    { name: "Dropbox", logo: Dropbox },
    { name: "OVHcloud", logo: OVHcloud },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-sky-400 to-cyan-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-cyan-400"></div>
                <p className="text-cyan-200 font-semibold text-lg tracking-wider">
                  CLOUD COMPUTING SOLUTIONS
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with <span className="text-cyan-300">Cloud</span>
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8 max-w-lg">
                Leverage the power of cloud computing to scale your business, reduce costs, and drive innovation with our comprehensive cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
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
                    <div className="text-sm text-cyan-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll lg:justify-self-end">
              <div className="relative">
                <img
                  src={Cloud1}
                  alt="Cloud Computing Dashboard"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-800 font-semibold">Cloud Active</span>
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
              <div className="w-12 h-1 bg-cyan-400"></div>
              <p className="text-cyan-600 font-semibold text-lg">OUR SOLUTIONS</p>
              <div className="w-12 h-1 bg-cyan-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-sky-700 max-w-3xl mx-auto">
              Transform your business with our advanced cloud computing solutions designed to drive innovation and growth.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-cyan-100 animate-on-scroll"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-cyan-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-sky-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sky-700 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-cyan-500 shrink-0" size={16} />
                          <span className="text-sm text-sky-800">{feature}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
              Your Journey to the Cloud
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-on-scroll group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-105 group-hover:shadow-lg transition-all">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-cyan-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-sky-900 mb-4">{step.title}</h3>
                <p className="text-sky-700">{step.description}</p>
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
                <div className="w-12 h-1 bg-cyan-400"></div>
                <p className="text-cyan-600 font-semibold text-lg">DETAILED APPROACH</p>
              </div>
              <h2 className="text-4xl font-bold text-sky-900 mb-8">
                Our Cloud Implementation Strategy
              </h2>
              <div className="space-y-4 mb-8">
                {tabContent.map((tab, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-sky-400 to-cyan-400 text-white shadow-lg'
                        : 'bg-white hover:bg-cyan-50 text-sky-900'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <h3 className="font-semibold text-lg">{tab.title}</h3>
                  </button>
                ))}
              </div>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-sky-800 leading-relaxed mb-6">
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

      {/* Cloud Partners Carousel - Circular and Optimal */}
      <section className="py-12 bg-gradient-to-r from-sky-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-sky-900 mb-8">Our Cloud Partners</h2>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-cyan-200 rounded-full p-2 shadow hover:bg-cyan-50 transition disabled:opacity-30"
              onClick={() => {
                const el = document.getElementById('cloud-partner-carousel');
                if (el) el.scrollBy({ left: -220, behavior: 'smooth' });
              }}
              aria-label="Scroll left"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div
              id="cloud-partner-carousel"
              className="flex overflow-x-auto gap-8 py-4 px-8 scrollbar-hide scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              {cloudPartners.map((partner, idx) => (
                <div key={partner.name} className="flex flex-col items-center min-w-[120px] max-w-[140px] mx-2">
                  <div className="h-24 w-24 flex items-center justify-center bg-gradient-to-br from-sky-200 via-cyan-100 to-blue-100 rounded-full shadow-lg border-4 border-cyan-200 mb-3 transition-transform duration-300 hover:scale-110 hover:shadow-cyan-300/40">
                    <img src={partner.logo} alt={partner.name + ' logo'} className="max-h-16 max-w-16 object-contain rounded-full" />
                  </div>
                  <span className="text-base font-semibold text-sky-900 text-center">{partner.name}</span>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-cyan-200 rounded-full p-2 shadow hover:bg-cyan-50 transition disabled:opacity-30"
              onClick={() => {
                const el = document.getElementById('cloud-partner-carousel');
                if (el) el.scrollBy({ left: 220, behavior: 'smooth' });
              }}
              aria-label="Scroll right"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-cyan-400"></div>
              <p className="text-cyan-600 font-semibold text-lg">KEY FEATURES</p>
              <div className="w-12 h-1 bg-cyan-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
              Advanced Cloud Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-cyan-100 animate-on-scroll h-[280px] flex flex-col"
              >
                <div className="bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-50 w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-sky-900 mb-3">{feature.title}</h3>
                <p className="text-sky-700 text-sm line-clamp-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-gradient-to-r from-sky-900 via-blue-800 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                Reach out to us through any of these channels. We're available to answer your questions 24/7.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-700 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us 24/7</p>
                    <p className="text-cyan-200">+91 88200 66999</p>
                    <p className="text-cyan-200">+91 74390 04545</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-700 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <p className="text-cyan-200">info@zenitech.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-700 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Our Locations</p>
                    <p className="text-cyan-200 font-medium">Bengaluru Office</p>
                    <p className="text-cyan-200 mb-2">
                      Dex Co Work, 2nd Floor, 1383/433, 5th Block, HBR Layout, Bengaluru - 560045, India
                    </p>
                    <p className="text-cyan-200 font-medium">Kolkata Office</p>
                    <p className="text-cyan-200">
                      Sunny Seasons, 15/1C, Kamalgazi, P.O. Narendrapur, Kolkata, West Bengal - 700103, India
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleContactClick}
                className="bg-white text-cyan-900 hover:bg-cyan-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center group cursor-pointer"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Right side - Decorative card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl animate-on-scroll hidden lg:block">
              <h3 className="text-2xl font-bold mb-4">Cloud Computing</h3>
              <p className="text-cyan-100 text-lg">
                Empowering businesses with scalable cloud solutions. From migration to optimization — we've got you covered.
              </p>
              <div className="mt-6">
                <ul className="list-disc list-inside text-cyan-200 space-y-2">
                  <li>Cloud Migration Services</li>
                  <li>Infrastructure Management</li>
                  <li>Cost Optimization</li>
                  <li>24/7 Cloud Support</li>
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

export default Cloudcomputing;