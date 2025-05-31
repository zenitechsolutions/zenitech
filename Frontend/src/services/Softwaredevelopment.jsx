import React, { useEffect, useState } from 'react';
import {
  Code,
  Cpu,
  Smartphone,
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
  Database,
  Lock,
  Layers
} from 'lucide-react';
import SoftwareDevelopement1 from "../assets/serviceimg/SoftwareDevelopement1.jpeg";
import SoftwareDevelopement3 from "../assets/serviceimg/SoftwareDevelopement3.jpeg";
import SoftwareDevelopment2 from "../assets/serviceimg/SoftwareDevelopment2.png";


const Softwaredevelopment = () => {
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
      icon: <Code size={48} />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business needs and challenges.',
      features: ['Enterprise Applications', 'Web Applications', 'API Development', 'Legacy System Modernization']
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Maintenance']
    },
    {
      icon: <Globe size={48} />,
      title: 'Web Development',
      description: 'Modern, responsive, and scalable web applications built with cutting-edge technologies.',
      features: ['Frontend Development', 'Backend Development', 'E-commerce Solutions', 'Progressive Web Apps']
    },
    {
      icon: <Database size={48} />,
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise software solutions to streamline your business operations.',
      features: ['ERP Systems', 'CRM Solutions', 'Business Intelligence', 'Workflow Automation']
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: <TrendingUp size={24} /> },
    { number: '5+', label: 'Years Experience', icon: <Award size={24} /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Clock size={24} /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your requirements and defining project scope through detailed consultation.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Creating intuitive user interfaces and robust system architecture.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development process with regular updates and quality checks.'
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Smooth deployment and ongoing support to ensure optimal performance.'
    }
  ];

  const tabContent = [
    {
      title: 'Development Process',
      content: 'Our agile development process ensures high-quality software delivery. We follow industry best practices and maintain clear communication throughout the project lifecycle.',
      image: SoftwareDevelopement1
    },
    {
      title: 'Quality Assurance',
      content: 'Rigorous testing and quality assurance processes ensure your software meets the highest standards. We conduct comprehensive testing at every stage of development.',
      image: SoftwareDevelopement3
    },
    {
      title: 'Support & Maintenance',
      content: 'Continuous support and maintenance services keep your software running smoothly. Our team is always available to address any issues and implement updates.',
      image: SoftwareDevelopment2
    }
  ];

  const features = [
    { icon: <Shield size={20} />, title: 'Secure Development', description: 'Security-first approach in all development phases' },
    { icon: <Zap size={20} />, title: 'Fast Delivery', description: 'Agile methodology for quick and efficient delivery' },
    { icon: <Settings size={20} />, title: 'Scalable Solutions', description: 'Architecture designed for future growth' },
    { icon: <Cpu size={20} />, title: 'Modern Tech Stack', description: 'Latest technologies and frameworks' },
    { icon: <Lock size={20} />, title: 'Quality Code', description: 'Clean, maintainable, and well-documented code' },
    { icon: <Layers size={20} />, title: 'Modular Design', description: 'Flexible and reusable components' }
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 via-cyan-50 to-sky-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-950 via-orange-600 to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-red-900 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-700/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-orange-400"></div>
                <p className="text-orange-200 font-semibold text-lg tracking-wider">
                  SOFTWARE DEVELOPMENT
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Ideas into <span className="text-cyan-300">Digital Reality</span>
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8 max-w-lg">
                Expert software development services to build scalable, secure, and innovative solutions that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 hover:from-pink-600 hover:via-orange-500 hover:to-cyan-500 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
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
                    <div className="text-sm text-pink-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll lg:justify-self-end">
              <div className="relative">
                <img 
                  src={SoftwareDevelopement1}
                  alt="Software Development" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                    <span className="text-pink-900 font-semibold">Code Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-r from-pink-50 via-orange-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-orange-400"></div>
              <p className="text-orange-600 font-semibold text-lg">OUR SERVICES</p>
              <div className="w-12 h-1 bg-orange-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6">
              Comprehensive Development Services
            </h2>
            <p className="text-xl text-cyan-700 max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end software solutions that drive business growth and innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-cyan-100 animate-on-scroll"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-pink-100 via-orange-100 to-cyan-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-50 transition-colors text-cyan-600">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pink-900 mb-4">
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
              Our Development Methodology
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-on-scroll group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 via-orange-400 to-cyan-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-105 group-hover:shadow-lg transition-all">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-cyan-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-pink-900 mb-4">{step.title}</h3>
                <p className="text-cyan-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Tabs */}
      <section className="py-24 bg-gradient-to-r from-pink-50 via-orange-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-orange-400"></div>
                <p className="text-orange-600 font-semibold text-lg">DETAILED APPROACH</p>
              </div>
              <h2 className="text-4xl font-bold text-pink-900 mb-8">
                Our Development Excellence
              </h2>
              
              <div className="space-y-4 mb-8">
                {tabContent.map((tab, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeTab === index 
                        ? 'bg-gradient-to-r from-pink-400 to-cyan-400 text-white shadow-lg' 
                        : 'bg-white hover:bg-pink-50 text-pink-900'
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

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-pink-400"></div>
              <p className="text-pink-600 font-semibold text-lg">KEY FEATURES</p>
              <div className="w-12 h-1 bg-pink-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6">
              Why Choose Our Development
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-pink-100 animate-on-scroll"
              >
                <div className="bg-gradient-to-br from-pink-50 via-orange-100 to-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-100 transition-colors text-pink-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-pink-900 mb-3">{feature.title}</h3>
                <p className="text-cyan-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-gradient-to-r from-pink-700 via-orange-600 to-cyan-500 text-white">
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
                  <div className="bg-pink-700 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us 24/7</p>
                    <p className="text-orange-200">+91 88200 66999</p>
                    <p className="text-orange-200">+91 74390 04545</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-pink-700 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <p className="text-orange-200">info@zenitech.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-pink-700 p-3 rounded-lg">
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
                className="bg-white text-pink-900 hover:bg-pink-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center group cursor-pointer"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right side - Decorative card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl animate-on-scroll hidden lg:block">
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-orange-100 text-lg">
                Transforming ideas into powerful software solutions. From concept to deployment — we've got you covered.
              </p>
              <div className="mt-6">
                <ul className="list-disc list-inside text-orange-200 space-y-2">
                  <li>Custom Software Development</li>
                  <li>Mobile App Development</li>
                  <li>Web Development</li>
                  <li>Enterprise Solutions</li>
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

export default Softwaredevelopment;
