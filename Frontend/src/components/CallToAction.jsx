import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can help you achieve your technology and business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/appointment"
              className="bg-white text-blue-700 font-medium py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/product-demo"
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors transform hover:scale-105"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 