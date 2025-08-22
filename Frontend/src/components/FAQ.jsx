import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Shield,
  Zap,
  Users,
  Rocket,
  Code,
  Globe,
} from 'lucide-react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: 'What services does Zenitech Solutions offer?',
      answer:
        'Zenitech Solutions provides services in Cloud, Cybersecurity, Software Solutions, IT Services and Telecom Services, etc. ',
      category: 'Services',
      icon: <Zap size={20} className="text-orange-500" />,
    },
    {
      question: 'Which cloud platforms do you support?',
      answer:
        'We support AWS, Azure, Google Cloud, Serverwala, ESDS , OVHcloud, Jio Cloud, and more, covering IaaS, SaaS, PaaS, DR, and Managed Services.',
      category: 'Cloud',
      icon: <Globe size={20} className="text-blue-500" />,
    },
    {
      question: 'What cybersecurity solutions do you provide?',
      answer:
        'We offer Firewall , Endpoint Security , EDR , XDR , Email Security , DLP , SOC , VAPT , API Security , Cloud Security , Application Security , Network Security , OT Security etc to safeguard your infrastructure.',
      category: 'Cybersecurity',
      icon: <Shield size={20} className="text-orange-500" />,
    },
    {
      question: 'Do you offer software licensing solutions?',
      answer:
        'Yes, we provide lisense for Microsoft, Google Workspace, Adobe, AnyDesk, Veeam, and manymore.',
      category: 'Software Licensing',
      icon: <Code size={20} className="text-blue-500" />,
    },
    {
      question: 'What telecom services are available?',
      answer:
        'Services include ILL, MPLS VPN ,SD WAN , PRI , SIP Trunk , Cloud Telephony , Contact Center Solutions , Call Center Solutions , VOIP , International Calling Services , WhatsApp Business Messaging and many more.',
      category: 'Telecom',
      icon: <Rocket size={20} className="text-orange-500" />,
    },
    {
      question: 'Who are your typical clients?',
      answer:
        'Our clients include enterprises of all sizes from IT/ITES, Startups, BFSI, Fintech, Healthcare, Pharmaceuticals , Manufacturing , Automobile, Retail, Ecommerce , Education , Media & Entertainment , Logistic & Supply and many more.',
      category: 'Clients',
      icon: <Users size={20} className="text-blue-500" />,
    },
    {
      question: 'How can we get in touch with Zenitech Solutions?',
      answer:
        'Email us at info@zenitech.in or call +91 88200 66999 / +91 74390 04545. Corporate Office in Bengaluru, India . Serving customers in PAN India and across the globe.',
      category: 'Contact',
      icon: <HelpCircle size={20} className="text-orange-500" />,
    },
  ];

  return (
    <div className="bg-white text-black py-20 px-2 sm:px-0 relative overflow-hidden">
      {/* Subtle orange-blue grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #fb923c 1px, transparent 0), radial-gradient(circle at 22px 22px, #3b82f6 1px, transparent 0)',
          backgroundSize: '44px 44px',
          zIndex: 0,
        }}
      />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-light">
            Everything you need to know about our services, solutions, and how we work.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border border-blue-100 rounded-2xl shadow-md backdrop-blur-md transition-all duration-200 ${
                activeFaq === index
                  ? 'ring-2 ring-orange-500 scale-[1.01]'
                  : 'hover:scale-[1.01] hover:shadow-lg'
              }`}
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-11 h-11 bg-blue-50 flex items-center justify-center rounded-full border border-blue-100 shadow-sm">
                    {faq.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase text-blue-500 font-semibold mb-1 tracking-wider">
                      {faq.category}
                    </p>
                    <h3 className="text-base font-semibold text-black leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div
                  className={`transform transition-transform duration-200 ${
                    activeFaq === index
                      ? 'rotate-180 text-orange-500'
                      : 'text-blue-400'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <div
                className={`px-6 pb-5 text-slate-700 transition-all duration-300 ease-in-out ${
                  activeFaq === index
                    ? 'max-h-60 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="ml-14 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 text-base mb-3">
            Still can&apos;t find what you&apos;re looking for?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                Contact Support
              </button>
            </a>
            <a href="/appointment">
              <button className="border border-orange-500 hover:bg-orange-50 text-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-200 bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400">
                Schedule an Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
