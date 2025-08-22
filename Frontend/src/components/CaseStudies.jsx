import React from 'react';

const CaseStudies = ({ studies }) => {
  return (
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
          {studies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-on-scroll group" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{study.title}</h3>
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
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
};

export default CaseStudies; 