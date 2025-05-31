import React from 'react';

const Statistics = ({ stats }) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-on-scroll group" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{stat.number}</div>
              <div className="text-blue-100 group-hover:text-blue-50 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics; 