import React, { useState, useEffect } from 'react'
import { Phone, Mail, CalendarCheck, Shield, CheckCircle, Star, Clock, Users, Award, ArrowRight, Zap, Play, Laptop, BarChart } from 'lucide-react'
import DemoForm from '../components/DemoForm'

const ProductDemo = () => {
  const [activeStep, setActiveStep] = useState(0)

  // Animation on scroll effect
  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

  const steps = [
    {
      icon: CalendarCheck,
      title: "Schedule Your Demo",
      description: "Choose a time that works best for your team.",
      detail: "30-minute personalized product walkthrough"
    },
    {
      icon: Laptop,
      title: "Live Demonstration",
      description: "See our solutions in action with real-world scenarios.",
      detail: "Interactive session with our product experts"
    },
    {
      icon: BarChart,
      title: "Q&A Session",
      description: "Get all your questions answered by our specialists.",
      detail: "Detailed discussion about your specific needs"
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Overview",
      description: "Get a complete understanding of our product's capabilities and features"
    },
    {
      icon: CheckCircle,
      title: "No Technical Setup Required",
      description: "We handle all the setup - just join the session and learn"
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Learn from certified professionals with years of industry experience"
    },
    {
      icon: Zap,
      title: "Customized Demo",
      description: "See how our solutions can address your specific business challenges"
    },
    {
      icon: Users,
      title: "Team Participation",
      description: "Invite key stakeholders to join the demo session"
    },
    {
      icon: Star,
      title: "Post-Demo Support",
      description: "Get detailed documentation and follow-up assistance"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white text-gray-900 min-h-screen">
      {/* Hero and Form Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row animate-on-scroll" style={{ animationDelay: '0.1s' }}>
        {/* Left Side - Hero Section */}
        <div className="w-full lg:w-1/2 relative bg-gradient-to-br from-blue-950 via-blue-700 to-blue-900 text-white p-8 lg:p-12 mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/8 rounded-full blur-lg animate-pulse delay-300"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Play size={16} />
              <span className="text-sm font-medium">Live Product Demonstration</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Request a Product Demo
            </h1>
            <p className="text-lg lg:text-xl max-w-xl mb-8 text-blue-100 leading-relaxed">
              Experience our cutting-edge cybersecurity solutions firsthand and discover how they can transform your security posture.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Instant demo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>Expert guidance</span>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{benefit.title}</h3>
                      <p className="text-sm text-blue-200">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white">
          <div className="w-full">
            <DemoForm />
          </div>
        </div>
      </section>

      {/* Enhanced Steps Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple process to get you started with our product demonstration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 ${
                    activeStep === index ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-blue-200'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                      activeStep === index ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'
                    } transition-all duration-300`}>
                      <Icon size={28} />
                    </div>
                    
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <p className="text-sm text-blue-600 font-medium">{step.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-white px-6 animate-on-scroll" style={{ animationDelay: '0.5s' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Request a Demo?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of seeing our solutions in action
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300">
                      <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Banner */}
      <section className="bg-gradient-to-b from-blue-500 via-blue-700 to-blue-950 text-white py-16 px-6 text-center relative overflow-hidden animate-on-scroll" style={{ animationDelay: '0.7s' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Phone size={16} />
            <span className="text-sm font-medium">24/7 Product Support Available</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Assistance?</h3>
          <p className="mb-8 text-blue-100 text-lg max-w-2xl mx-auto">
            Can't wait for a scheduled demo? Our product experts are ready to help you right away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Phone size={20} />
              <a href="tel:+918820066999" className="font-semibold text-lg hover:text-blue-200 transition-colors">
                +91 88200 66999
              </a>
            </div>
            <span className="text-blue-200">or</span>
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Contact Support
              <ArrowRight size={16} />
            </a>
          </div>
          
          <p className="text-sm text-blue-200">
            Average response time: Under 2 hours during business hours
          </p>
        </div>
      </section>
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  )
}

export default ProductDemo
