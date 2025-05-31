import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PartSection from '../components/PartSection';

import {
  Cloud,
  Shield,
  MonitorSmartphone,
  Code,
  ServerCog,
  Phone,
  Network,
  Smartphone,
  PencilRuler,
  Building2,
  Database
} from 'lucide-react';

const services = [

  {
    title: 'Cloud Computing Solutions',
    shortDesc: 'Secure and scalable cloud services for digital transformation.',
    fullDesc:
      'We provide comprehensive cloud solutions including cloud migration, infrastructure setup, and managed services across AWS, Azure, and Google Cloud. Our cloud services help businesses reduce costs, improve scalability, and enhance operational efficiency.',
    icon: Cloud,
    category: 'Cloud',
    features: [
      'Cloud Migration & Strategy',
      'Infrastructure as Code (IaC)',
      'Serverless Architecture',
      'Cloud Security & Compliance',
      'Cost Optimization',
      'Disaster Recovery'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes','Jio Cloud']
  },
  {
    title: 'Cybersecurity',
    shortDesc: 'Protecting your digital assets with advanced security systems.',
    fullDesc:
      'Our cybersecurity services include threat detection, vulnerability assessment, security audits, and compliance monitoring. We implement robust security measures to protect your business from evolving cyber threats and ensure data protection.',
    icon: Shield,
    category: 'Security',
    features: [
      'Threat Detection & Response',
      'Security Audits & Assessments',
      'Compliance Management',
      'Identity & Access Management',
      'Network Security',
      'Security Training'
    ],
    technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Zero Trust']
  },
  {
    title: 'Software Development',
    shortDesc: 'Custom software solutions for your unique business needs.',
    fullDesc:
      'We develop custom software solutions including web applications, mobile apps, and enterprise software. Our development team uses modern technologies and agile methodologies to deliver scalable and maintainable software solutions.',
    icon: Code,
    category: 'Development',
    features: [
      'Custom Web Applications',
      'Mobile App Development',
      'Enterprise Software',
      'API Development',
      'Microservices Architecture',
      'Legacy System Modernization'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'Flutter']
  },
  {
    title: 'Software Licensing',
    shortDesc: 'Strategic software procurement and license management.',
    fullDesc:
      'We provide software licensing solutions including license optimization, compliance management, and strategic procurement. Our team helps you navigate complex licensing terms and reduce costs while ensuring legal compliance.',
    icon: MonitorSmartphone,
    category: 'Software',
    features: [
      'License Optimization',
      'Compliance Management',
      'Strategic Procurement',
      'Vendor Management',
      'Cost Analysis',
      'Renewal Planning'
    ],
    technologies: ['Microsoft', 'Oracle', 'Adobe', 'VMware', 'SAP', 'IBM']
  },
  {
    title: 'IT Services',
    shortDesc: 'Comprehensive IT infrastructure and support services.',
    fullDesc:
      'Our IT services include system administration, network management, server optimization, and IT support. We ensure your IT infrastructure remains reliable, secure, and aligned with your business objectives.',
    icon: ServerCog,
    category: 'Infrastructure',
    features: [
      'System Administration',
      'Network Management',
      'Server Optimization',
      'IT Support & Helpdesk',
      'Infrastructure Monitoring',
      'Performance Tuning'
    ],
    technologies: ['Windows Server', 'Linux', 'Cisco', 'VMware', 'Ansible', 'Nagios']
  },
  {
    title: 'Telecom Services',
    shortDesc: 'Modern communication solutions for businesses.',
    fullDesc:
      'We provide telecommunications solutions including VoIP systems, unified communications, video conferencing, and enterprise mobility. Our telecom services help organizations enhance collaboration while reducing communication costs.',
    icon: Phone,
    category: 'Communications',
    features: [
      'VoIP Implementation',
      'Unified Communications',
      'Video Conferencing',
      'Enterprise Mobility',
      'Contact Center Solutions',
      'Network Infrastructure'
    ],
    technologies: ['Cisco', 'Avaya', 'Microsoft Teams', 'Zoom', 'SIP', '5G']
  }
];

// Add case studies data
const caseStudies = [
  {
    title: 'Enterprise Cloud Migration',
    client: 'Global Financial Services',
    challenge: 'Complex legacy system migration to cloud infrastructure',
    solution: 'Implemented hybrid cloud strategy with AWS and Azure',
    results: [
      '40% reduction in operational costs',
      '99.9% system uptime',
      '50% faster deployment times'
    ]
  },
  {
    title: 'Cybersecurity Enhancement',
    client: 'Healthcare Provider',
    challenge: 'Strengthening security posture for HIPAA compliance',
    solution: 'Comprehensive security implementation and staff training',
    results: [
      '100% compliance achievement',
      'Zero security breaches',
      'Improved incident response time'
    ]
  },
  {
    title: 'Digital Transformation',
    client: 'Manufacturing Company',
    challenge: 'Modernizing legacy systems and processes',
    solution: 'Custom software development and process automation',
    results: [
      '60% increase in operational efficiency',
      '30% reduction in manual processes',
      'Enhanced data analytics capabilities'
    ]
  }
];

// Add service process steps
const serviceProcess = [
  {
    step: 1,
    title: 'Discovery & Analysis',
    description: 'We begin by understanding your business needs, challenges, and objectives through detailed consultation and analysis.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    step: 2,
    title: 'Strategy & Planning',
    description: 'Our team develops a comprehensive strategy and implementation plan tailored to your specific requirements.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'We execute the solution using industry best practices and agile methodologies for optimal results.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    step: 4,
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing and quality checks ensure the solution meets all requirements and standards.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    step: 5,
    title: 'Deployment & Training',
    description: 'Smooth deployment and comprehensive training ensure successful adoption of the solution.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    step: 6,
    title: 'Ongoing Support',
    description: 'Continuous monitoring, maintenance, and support ensure long-term success and optimization.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
  }
];

// Group services by category
const groupedServices = services.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {});

// Add statistics data
const statistics = [
  { number: '100+', label: 'Projects Completed', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { number: '98%', label: 'Client Satisfaction', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { number: '24/7', label: 'Support Available', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
];

// Add FAQ data
const faqs = [
  {
    question: "What makes Zenitech Solutions different from other IT service providers?",
    answer: "We combine deep technical expertise with business acumen, offering end-to-end solutions tailored to your specific needs. Our agile approach and commitment to continuous support set us apart."
  },
  {
    question: "How do you ensure the security of our data?",
    answer: "We implement industry-leading security measures, including encryption, access controls, and regular security audits. Our team stays updated with the latest security threats and best practices."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. We provide detailed timelines during the planning phase and maintain transparent communication throughout the project."
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes, we provide round-the-clock support for critical systems and offer different support tiers to meet your specific needs and budget."
  }
];

const ServiceDetailModal = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-90vh overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mr-4">
                <service.icon className="text-blue-700" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{service.category}</span>
            </div>
            <p className="text-gray-700 mb-4">{service.fullDesc}</p>
            
            <h4 className="font-semibold text-lg text-gray-800 mb-3">Our Approach</h4>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Assessment & Planning: We analyze your requirements and develop a strategic roadmap</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Implementation: Our expert team executes the solution with industry best practices</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ongoing Support: We provide continuous management and optimization</span>
              </li>
            </ul>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Ready to get started?</h4>
              <p className="text-gray-600 mb-4">Contact our team today to learn how our {service.title} can transform your business.</p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium transition-colors">
                  Request Consultation
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded font-medium transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, onClick }) => {
  // Create URL-friendly slug from service title
  const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 h-full flex flex-col justify-between animate-fade-in-up" style={{ animationDelay: `${service.index * 0.1}s` }}>
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-5">
          <service.icon className="text-blue-600" size={30} />
        </div>
        <div className="flex items-center mb-2">
          <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">{service.category}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.shortDesc}</p>
        <div className="border-t border-gray-100 pt-4">
          <p className="text-gray-700 text-sm line-clamp-3">{service.fullDesc}</p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Link 
        to="/appointment"
        className="mt-4 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Talk to Us
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

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
  
  const servicesWithIndex = services.map((service, index) => ({ ...service, index }));
  
  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  
  const closeServiceModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Technology Solutions for <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
  Modern Business
</span>

            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive IT and digital transformation services to drive innovation and growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/appointment"
                className="bg-white text-blue-800 font-medium py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Request Consultation
              </Link>
              <Link 
                to="/product-demo"
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <h4 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">Our Expertise</h4>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Services & Solutions</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Empowering businesses with cutting-edge digital and IT solutions — from cloud computing to custom software development and managed services.
            </p>
          </div>
          
          {/* Services Grid - Desktop View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesWithIndex.map((service, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard 
                  service={service} 
                  onClick={() => openServiceModal(service)}
                />
              </div>
            ))}
          </div>
          
          {/* Mobile Carousel View */}
          <div className="md:hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="pb-16"
            >
              {servicesWithIndex.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ServiceCard 
                      service={service} 
                      onClick={() => openServiceModal(service)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      
      {/* Service Process Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <h4 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">Our Process</h4>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Work</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our proven methodology ensures successful delivery of technology solutions that drive business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((step, index) => (
              <div key={step.step} className="bg-gray-50 p-6 rounded-xl animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                  <span className="text-blue-700 font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Case Studies Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <h4 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">Success Stories</h4>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Case Studies</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Discover how we've helped organizations transform their business through technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{study.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{study.client}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <h4 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">Why Zenitech</h4>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Partner with Excellence</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We combine technical expertise with business acumen to deliver solutions that drive real value and results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center p-8 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{stat.label}</h3>
                <p className="text-xl text-blue-600 font-bold">{stat.number}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Replace Technology Partners Section with PartSection */}
      <div className="animate-on-scroll">
        <PartSection />
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <h4 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">FAQ</h4>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  className="w-full py-4 text-left flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-blue-600 transform transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call To Action */}
      <div className="bg-gradient-to-bl from-blue-950 via-blue-800 to-blue-950   py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our services can help you achieve your technology and business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/appointment"
                className="bg-white text-blue-700 font-medium py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/product-demo"
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal 
          service={selectedService}
          isOpen={isModalOpen}
          onClose={closeServiceModal}
        />
      )}
    </div>
  );
};

export default Services;