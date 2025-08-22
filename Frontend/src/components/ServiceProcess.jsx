import React from 'react';

const ServiceProcess = ({ process }) => {
  return (
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
          {process.map((step, index) => (
            <div 
              key={step.step} 
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-on-scroll group" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-700 font-bold">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess; 