import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Cloud,
  Shield,
  MonitorSmartphone,
  Code,
  ServerCog,
  Phone,
  Network,
} from 'lucide-react';

const services = [
  {
    title: 'Cloud Computing',
    shortDesc: 'Secure and scalable cloud services tailored to your business needs.',
    fullDesc: 'Deploy flexible infrastructure with our enterprise-grade cloud solutions. We offer seamless migration, optimization, and managed services across private, public, and hybrid cloud environments.',
    icon: Cloud,
    route: '/services/cloud-computing',
  },
  {
    title: 'Cybersecurity',
    shortDesc: 'Protect your digital assets with robust security systems.',
    fullDesc: 'Comprehensive security services including threat detection, vulnerability assessment, managed security operations, and compliance monitoring to safeguard your critical business data.',
    icon: Shield,
    route: '/services/cybersecurity',
  },
  {
    title: 'Software License',
    shortDesc: 'Authorized licensing with complete software deployment.',
    fullDesc: 'Strategic software procurement, license optimization, and compliance management to reduce costs and ensure legal alignment with enterprise software agreements.',
    icon: MonitorSmartphone,
    route: '/services/software-licensing',
  },
  {
    title: 'Software Development',
    shortDesc: 'Custom web and app development for modern businesses.',
    fullDesc: 'End-to-end custom software solutions from ideation to deployment. Our development team delivers responsive web applications, mobile apps, and enterprise software with cutting-edge technologies.',
    icon: Code,
    route: '/services/software-development',
  },
  {
    title: 'IT Services',
    shortDesc: 'Professional IT support and infrastructure management.',
    fullDesc: 'Proactive IT management including helpdesk support, system administration, infrastructure monitoring, and technology consulting to keep your operations running smoothly.',
    icon: ServerCog,
    route: '/services/it-services',
  },
  {
    title: 'Telecom Services',
    shortDesc: 'Reliable telecom integration and management services.',
    fullDesc: 'Complete telecommunications infrastructure design and implementation including VoIP systems, unified communications, contact centers, and enterprise mobility solutions.',
    icon: Phone,
    route: '/services/telecom-services',
  },
  {
    title: 'Networking Solutions',
    shortDesc: 'Robust networking design and deployment solutions.',
    fullDesc: 'Enterprise network architecture, implementation, and management services including SD-WAN, network security, wireless solutions, and performance optimization.',
    icon: Network,
    route: '/services/networking-solutions',
  },
];

const ServSection = () => {
  return (
    <div className="py-16 sm:py-20 bg-gray-100">
      <div className="text-center mb-10 px-4 sm:px-0">
        <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-700 uppercase mb-2">
          Our Expertise
        </h4>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3">
          Enterprise Technology Solutions
        </h2>
        <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-600">
          Delivering comprehensive IT services and innovative solutions to help your business achieve digital transformation and operational excellence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between border-t-4 border-blue-700 min-h-[420px] max-h-[440px]">
                <div className="flex-1 flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-5 mx-auto">
                    <service.icon className="text-blue-700" size={32} />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2 text-center">
                    {service.shortDesc}
                  </p>
                  <div className="border-t border-gray-100 pt-3 flex-1">
                    <p className="text-gray-700 text-sm sm:text-[15px] line-clamp-4 text-center">{service.fullDesc}</p>
                  </div>
                </div>
                <a
                  href={service.route}
                  className="mt-4 inline-flex items-center text-blue-700 text-sm sm:text-base font-semibold hover:text-blue-800 transition-colors justify-center"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServSection;
