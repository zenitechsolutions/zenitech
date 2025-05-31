import React, { useEffect } from 'react';
import {
  Code,
  FileCode,
  Laptop2,
  PhoneCall,
  Network,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Users,
  Award,
  Target,
  BarChart3,
  Shield,
  Clock,
  Mail
} from "lucide-react";
import Pic1 from "../assets/AboutPagePic/Pic1.jpg";
import Pic2 from "../assets/AboutPagePic/Pic2.jpg";
import Logo from "../assets/Logo.jpg";
import Founder from '../assets/Founder.jpg';
import { FaLinkedin, FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import PartSection from '../components/PartSection';
import Clients from '../components/Clients';
import Cont from '../components/Cont';
import ServSection from '../components/ServSection';

const About = () => {
  // Add scroll animation effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (elementPosition < screenPosition - 100) {
          element.classList.add('fade-in-up');
        }
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 300);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  // Company statistics
  const stats = [
    { icon: <Users size={32} />, count: "100+", label: "Clients Served" },
    { icon: <Award size={32} />, count: "5+", label: "Years Experience" },
    { icon: <Target size={32} />, count: "98%", label: "Client Retention" },
    { icon: <BarChart3 size={32} />, count: "100+", label: "Projects Completed" }
  ];

  // Company values
  const values = [
    {
      title: "Innovation Excellence",
      description: "We constantly explore emerging technologies to deliver cutting-edge solutions that keep our clients ahead in the digital landscape."
    },
    {
      title: "Client-Centric Approach",
      description: "We build lasting partnerships through transparent communication, personalized attention, and a deep understanding of business objectives."
    },
    {
      title: "Technical Expertise",
      description: "Our team of certified professionals brings specialized knowledge across diverse technology domains to solve complex challenges."
    },
    {
      title: "Integrity & Trust",
      description: "We uphold the highest ethical standards in all our engagements, ensuring reliability and confidentiality in every relationship."
    }
  ];

  // Core services
  const services = [
    {
      icon: <Clock className="text-blue-600" size={40} />,
      title: "Cloud Computing",
      description: "Strategic cloud adoption and migration services for enhanced scalability and efficiency."
    },
    {
      icon: <Shield className="text-blue-600" size={40} />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure."
    },
    
    {
      icon: <FileCode className="text-blue-600" size={40} />,
      title: "Software License ",
      description: "Authorized software licensing and integrated solutions for operational efficiency and compliance."
    },
    {
      icon: <Code className="text-blue-600" size={40} />,
      title: "Software Development",
      description: "Custom software development tailored to meet your business goals and drive digital transformation."
    },
    
    {
      icon: <Laptop2 className="text-blue-600" size={40} />,
      title: "IT Services",
      description: "Reliable IT support and infrastructure services to keep your business running smoothly."
    },
    {
      icon: <PhoneCall className="text-blue-600" size={40} />,
      title: "Telecom Services",
      description: "Advanced communication systems and services to connect and empower your organization."
    },
  ];

  // Founder details
  const founder = {
    name: 'Mr. Haider Ali',
    title: 'Founder & CEO',
    summary: 'Technology visionary with 20+ years of experience in Enterprise IT Solutions. Expertise in IT, Cloud, Cybersecurity, Software , and Telecom Services.',
    email: 'haider@zenitech.in',
    phone: '+91 8820066999',
    location: 'Bangalore / Bengaluru, India',
    image: Founder,
    socials: [
      { name: 'LinkedIn', icon: <FaLinkedin size={18} />, url: 'https://linkedin.com' },
      { name: 'Facebook', icon: <FaFacebookF size={18} />, url: 'https://facebook.com' },
      { name: 'WhatsApp', icon: <FaWhatsapp size={18} />, url: 'https://wa.me/8820066999' },
      { name: 'Twitter', icon: <FaTwitter size={18} />, url: 'https://twitter.com' },
    ]
  };

  // Trust indicators
  const trustIndicators = [
    { icon: <Shield size={32} />, label: "100% Secure" },
    { icon: <Target size={32} />, label: "Industry Expert" },
    { icon: <Users size={32} />, label: "Expert Team" },
    { icon: <CheckCircle size={32} />, label: "Certified Solutions" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-950  to-blue-500 text-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10 z-0"></div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 md:py-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <p className="text-blue-200 font-semibold text-lg mb-3 tracking-wider">
                ABOUT ZENITECH
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering <span className="text-blue-300">Digital</span> Transformation
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                Delivering innovative, reliable, and scalable technology solutions to businesses worldwide.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/services"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Logo Section */}
            <div className="animate-on-scroll flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src={Logo} 
                    alt="Zenitech Solutions Logo" 
                    className="w-64 h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96V320H0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24" id="about">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="bg-blue-50 p-1 rounded-full inline-flex items-center mb-4">
              <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium">WHO WE ARE</span>
              <span className="text-blue-800 px-4 py-1 text-sm font-medium">Excellence Since 2021</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">Leading the Way in <span className="text-blue-700">IT Solutions</span> & Innovation</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                <span className="font-semibold text-blue-700">Zenitech Solutions</span> is a premier IT Services & Consulting company headquartered in Bengaluru, the Silicon Valley of India. As a trusted system integrator, we specialize in providing comprehensive technology solutions that drive business growth and operational excellence.
              </p>
              <p>
                With a team of highly skilled professionals, we offer expert services in Cloud Computing, Cybersecurity, Software Development, Telecom Services, and Networking. Our strategic partnerships with leading OEMs and technology providers enable us to deliver cutting-edge solutions tailored to meet the unique needs of our diverse clientele.
              </p>
              <p>
                We proudly serve organizations across various sectors, including IT/ITES, BFSI, Manufacturing, Healthcare, ISPs, Education, and more, helping them navigate the complexities of the digital landscape with confidence.
              </p>
            </div>
            <div className="mt-8">
              <a href="#services" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors group">
                Explore Our Services <ChevronRight className="ml-1 group-hover:ml-2 transition-all" />
              </a>
            </div>
          </div>
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
              <img 
                src={Pic1}
                alt="Zenitech Solutions Team" 
                className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg z-20">
                <span className="font-semibold">Since 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-blue-700 font-semibold text-lg mb-2">OUR PURPOSE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mission & Vision</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-xl border-t-4 border-blue-700 hover:transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At Zenitech Solutions, our mission is to empower businesses of all sizes by delivering innovative, reliable, and scalable technology solutions. We aim to create lasting value for our clients by seamlessly integrating advanced IT, cloud, cybersecurity, and networking technologies to drive operational efficiency, security, and growth.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-xl border-t-4 border-blue-700 hover:transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll" style={{animationDelay: "0.2s"}}>
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to become a leading force in the global technology landscape, transforming the way industries leverage digital solutions. We aspire to create a connected, secure, and intelligent future by constantly innovating and delivering cutting-edge technologies that enable businesses to unlock their full potential and stay ahead in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* What We Do */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24" id="services">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-blue-700 font-semibold text-lg mb-2">OUR EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Zenitech Solutions offers a comprehensive portfolio of services and solutions to address your most complex technology challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
              <img 
                src={Pic2}
                alt="Zenitech Solutions Services" 
                className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg z-20">
                <span className="font-semibold">Expert Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Premium Services</h2>
            <p className="text-gray-600 mb-8 text-lg">
              As a leading system integrator, we bring together best-in-class technologies to create seamless, integrated solutions that address our clients' most pressing challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all group hover:bg-blue-50">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Founder Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-blue-700 font-semibold text-lg mb-2">LEADERSHIP</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Founder</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 p-8 md:p-12 mb-12 animate-on-scroll">
          {/* Founder Photo */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 border-4 border-blue-700 rounded-full -rotate-6"></div>
              <div className="w-48 h-48 bg-blue-100 rounded-full mb-6 overflow-hidden shadow-lg flex items-center justify-center relative z-10">
                <img src={founder.image} alt={founder.name} className="w-44 h-44 object-cover rounded-full border-2 border-white" loading="lazy" />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {founder.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Founder Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-1">{founder.name}</h2>
            <p className="text-blue-700 font-medium text-xl mb-4">{founder.title}</p>
            <div className="w-16 h-1 bg-blue-700 mb-6"></div>
            <p className="text-slate-600 text-lg mb-6">{founder.summary}</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-700">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Mail className="text-blue-700 shrink-0" size={18} />
                </div>
                <a href={`mailto:${founder.email}`} className="hover:text-blue-700 transition-colors">{founder.email}</a>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="bg-blue-100 p-2 rounded-full">
                  <PhoneCall className="text-blue-700 shrink-0" size={18} />
                </div>
                <a href={`tel:${founder.phone.replace(/\D/g, '')}`} className="hover:text-blue-700 transition-colors">{founder.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Network className="text-blue-700 shrink-0" size={18} />
                </div>
                <span>{founder.location}</span>
              </div>
            </div>
            <a href="/about/founder-profile">
              <button className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center gap-2 shadow-md">
                Full Profile <ArrowRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </div>

      
      {/* Custom Partners Section */}
      <PartSection />
      <Cont />
      <ServSection />

      
      {/* Statistics with Counters */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-blue-200 font-semibold text-lg mb-2">OUR ACHIEVEMENTS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-blue-100 max-w-2xl mx-auto mt-6 text-lg">
              We take pride in our achievements and the trust our clients place in us.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 text-center animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center text-blue-300 mb-6">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
                <p className="text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-blue-700 font-semibold text-lg mb-2">OUR PRINCIPLES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
              The principles that guide our approach and define who we are as an organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group hover:bg-blue-50 border-l-4 border-blue-700 animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Clients Section */}
      <Clients />
      
            
      {/* CSS for animations */}
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default About;